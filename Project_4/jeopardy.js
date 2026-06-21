// You only need to touch comments with the todo of this file to complete the assignment!

/*
=== How to build on top of the starter code? ===

Problems have multiple solutions.
We have created a structure to help you on solving this problem.
On top of the structure, we created a flow shaped via the below functions.
We left descriptions, hints, and to-do sections in between.
If you want to use this code, fill in the to-do sections.
However, if you're going to solve this problem yourself in different ways, you can ignore this starter code.
 */

/*
=== Terminology for the API ===

Clue: The name given to the structure that contains the question and the answer together.
Category: The name given to the structure containing clues on the same topic.
 */

/*
=== Data Structure of Request the API Endpoints ===

/categories:
[
  {
    "id": <category ID>,
    "title": <category name>,
    "clues_count": <number of clues in the category where each clue has a question, an answer, and a value>
  },
  ... more categories
]

/category:
{
  "id": <category ID>,
  "title": <category name>,
  "clues_count": <number of clues in the category>,
  "clues": [
    {
      "id": <clue ID>,
      "answer": <answer to the question>,
      "question": <question>,
      "value": <value of the question (be careful not all questions have values) (Hint: you can assign your own value such as 200 or skip)>,
      ... more properties
    },
    ... more clues
  ]
}
 */

const categoriesTable = document.querySelector('#categories')
const cluesTable = document.querySelector('#clues')
const clueBody = document.querySelector('#clues-body')
const spinner = document.querySelector('#spinner')

// Modal elements
const overlay = document.querySelector('#active-clue')
const closeBtn = document.querySelector('#closeBtn')
const cancelBtn = document.querySelector('#cancelBtn')
const confirmBtn = document.querySelector('#confirmBtn')
const modalTitle = document.querySelector('#modal-title')
const displayQA = document.querySelector('#display-qa')

const API_URL = "https://rithm-jeopardy.herokuapp.com/api/"; // The URL of the API.
// const NUMBER_OF_CATEGORIES = randomCategory(); // The number of categories you will be fetching. You can change this number.
const NUMBER_OF_CATEGORIES = 6
// const NUMBER_OF_CLUES_PER_CATEGORY = randomClues(); // The number of clues you will be displaying per category. You can change this number.
const NUMBER_OF_CLUES_PER_CATEGORY = 5

let categories = []; // The categories with clues fetched from the API.

let clues = {}

let currentAnswer
let revertEl 
let revertValue
let currentID
/*
[
  {
    "id": <category ID>,
    "title": <category name>,
    "clues": [
      {
        "id": <clue ID>,
        "value": <value (e.g. $200)>,
        "question": <question>,
        "answer": <answer>
      },
      ... more categories
    ]
  },
  ... more categories
]
 */


function loadingWheel() {
  spinner.style.display = 'block'
  spinner.style.paddingTop = '4rem'
}

function stopLoadingWheel() {
  spinner.style.display = 'none'
}

function resetGame() {
  // TODO: DONE
  activeClueMode = 0
  document.location.reload()
}

function randomCategory() {
 return Math.floor(Math.random() * 14) + 1
}

function randomClues() {
 return Math.floor(Math.random() * 5) + 1
}

// API calls
async function callByCount(countInput) {
  try {
    let response = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?count=${countInput}`)
    // console.log(response.data) 
    if (response.status === 200) {
      stopLoadingWheel()
    }    
    return response
  } catch (err) {
    throw new Error(err)
  }
}

async function callByCategory(categoryID) {
  try {
    let response = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?id=${categoryID}`)
    // console.log(response.data)
    if (response.status === 200) {
      stopLoadingWheel()
    }
    return response
  } catch (err) {
    throw new Error(err)
  }
}

function getClues(input) {
  for (let category of categories) {
    for (let clue of category.clues) {
      // console.log(clue)
      let clueID = clue.id
      clues[clueID] = [ clue.question, clue.answer, clue.value ]
    }
  }
  return clues
}


let activeClue = null; // Currently selected clue data.
let activeClueMode = 0; // Controls the flow of #active-clue element while selecting a clue, displaying the question of selected clue, and displaying the answer to the question.
/*
0: Empty. Waiting to be filled. If a clue is clicked, it shows the question (transits to 1).
1: Showing a question. If the question is clicked, it shows the answer (transits to 2).
2: Showing an answer. If the answer is clicked, it empties (transits back to 0).
 */

let isPlayButtonClickable = true; // Only clickable when the game haven't started yet or ended. Prevents the button to be clicked during the game.

$("#play").on("click", handleClickOfPlay);
$("#reset-button").on("click", resetGame);

/**
 * Manages the behavior of the play button (start or restart) when clicked.
 * Sets up the game.
 *
 * Hints:
 * - Sets up the game when the play button is clickable.
 */
function handleClickOfPlay () {
  // todo set the game up if the play button is clickable :: DONE
  setupTheGame()
}

/**
 * Sets up the game.
 *
 * 1. Cleans the game since the user can be restarting the game.
 * 2. Get category IDs
 * 3. For each category ID, get the category with clues.
 * 4. Fill the HTML table with the game data.
 *
 * Hints:
 * - The game play is managed via events.
 */
async function setupTheGame () {
  // todo show the spinner while setting up the game :: DONE
  loadingWheel()
  // todo reset the DOM (table, button text, the end text)
  // If activeGameMode = 3 (Set to 3 after all tiles have been selected and removed from categories list) 
  // todo fetch the game data (categories with clues) :: DONE
  await getCategoryData()
  getClues(categories)
  // todo fill the table :: DONE-ISH - Function completed and working but displayed elements need refining and additional logic added. 
  fillTable(categories)
}

/**
 * Gets as many category IDs as in the `NUMBER_OF_CATEGORIES` constant.
 * Returns an array of numbers where each number is a category ID.
 *
 * Hints:
 * - Use /categories endpoint of the API.
 * - Request as many categories as possible, such as 100. Randomly pick as many categories as given in the `NUMBER_OF_CATEGORIES` constant, if the number of clues in the category is enough (<= `NUMBER_OF_CLUES` constant).
 */
async function getCategoryIds () {
  let ids = []; // todo set after fetching :: DONE

  try {
    // todo fetch NUMBER_OF_CATEGORIES amount of categories :: DONE
    let response = await callByCount(NUMBER_OF_CATEGORIES)
    response.data.forEach(id => {
      ids.push(id.id)
    })
  } catch (err) {
    throw new Error(err)
  }
  return ids;
}

/**
 * Gets category with as many clues as given in the `NUMBER_OF_CLUES` constant.
 * Returns the below data structure:
 *  {
 *    "id": <category ID>
 *    "title": <category name>
 *    "clues": [
 *      {
 *        "id": <clue ID>,
 *        "value": <value of the question>,
 *        "question": <question>,
 *        "answer": <answer to the question>
 *      },
 *      ... more clues
 *    ]
 *  }
 *
 * Hints:
 * - You need to call this function for each category ID returned from the `getCategoryIds` function.
 * - Use /category endpoint of the API.
 * - In the API, not all clues have a value. You can assign your own value or skip that clue.
 */
async function getCategoryData(categoryId) {
  try {
    categoryId = await getCategoryIds() // populates param on function call
    const categoryCall = await Promise.all( // <-- Learning lesson here. Did not know about Promise.all when chaining multiple async functions until this project.
      categoryId.map(async (val) => { // Iterates through all category IDs returned
        // todo fetch the category with NUMBER_OF_CLUES_PER_CATEGORY amount of clues :: DONE 
        const response = await callByCategory(val) // API call for categories with IDs from those returned above
        return {
           id: val,
           title: response.data.title,
           clues: response.data.clues.filter(item => item).slice(0, NUMBER_OF_CLUES_PER_CATEGORY) // Add field for if clue has been seen. 
         }
      })
    )
    console.log(categoryCall)
    return categories = categoryCall
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Fills the HTML table using category data.
 *
 * Hints:
 * - You need to call this function using an array of categories where each element comes from the `getCategoryData` function.
 * - Table head (thead) has a row (#categories).
 *   For each category, you should create a cell element (th) and append that to it.
 * - Table body (tbody) has a row (#clues).
 *   For each category, you should create a cell element (td) and append that to it.
 *   Besides, for each clue in a category, you should create a row element (tr) and append it to the corresponding previously created and appended cell element (td).
 * - To this row elements (tr) should add an event listener (handled by the `handleClickOfClue` function) and set their IDs with category and clue IDs. This will enable you to detect which clue is clicked.
 */
function fillTable (categories) {
  // todo :: In Progress; Notes below
  for (let category of categories) {
    let categoryHead = document.createElement('th')
    
    categoryHead.innerHTML = category.title.toUpperCase()
    categoriesTable.appendChild(categoryHead)
  }


  for (let i = 0; i < NUMBER_OF_CLUES_PER_CATEGORY; i++) {
    let categoryCol = document.createElement('tr')
    categoryCol.addEventListener('click', handleClickOfClue)

    for (let clue of categories) {
      let clueQuestion = document.createElement('td')

      clueQuestion.setAttribute('class', 'clue')
      clueQuestion.setAttribute('id', clue.clues[i].id)
      clueQuestion.innerHTML = clue.clues[i].value // Need to handle case where category doesn't have a question "500 dining out". Change to be a Daily Double.
      categoryCol.appendChild(clueQuestion)
    }
    clueBody.appendChild(categoryCol)
  }
}


function openModal() {
  activeClue = document.activeElement
  overlay.classList.add('active')
  // closeBtn.focus()
}

function closeModal() {
  activeClueMode = 0
  revertEl.innerHTML = revertValue
  overlay.classList.remove('active')
  confirmBtn.innerHTML = 'Reveal Answer'
  if (activeClue) activeClue.focus()
}

function revealAnswer(event) {
  if (activeClueMode === 1) {
    activeClueMode = 2
    displayQA.innerHTML = currentAnswer
    confirmBtn.innerHTML = 'End Question'
  }
}

function endQuestion(event) {
  if (activeClueMode === 2) {
    activeClueMode = 0
    overlay.classList.remove('active')
    confirmBtn.innerHTML = 'Reveal Answer'

    delete clues[currentID]
    console.log(clues)
    if (activeClue) activeClue.focus()
  }
}

$(".clue").on("click", handleClickOfClue);
$(cancelBtn).on("click", closeModal);
// $(confirmBtn).on("click", revealAnswer);
$(confirmBtn).on("click", function(event) {
  if (activeClueMode === 1) {
    return revealAnswer(event)
  } else if (activeClueMode === 2) {
    return endQuestion(event)
  }
});

/**
 * Manages the behavior when a clue is clicked.
 * Displays the question if there is no active question.
 *
 * Hints:
 * - Control the behavior using the `activeClueMode` variable.
 * - Identify the category and clue IDs using the clicked element's ID.
 * - Remove the clicked clue from categories since each clue should be clickable only once. Don't forget to remove the category if all the clues are removed.
 * - Don't forget to update the `activeClueMode` variable.
 *
 * let activeClue = null; // Currently selected clue data.
 * let activeClueMode = 0; // Controls the flow of #active-clue element while selecting a clue, displaying the question of selected clue, and displaying the answer to the question.
 *
 */
function handleClickOfClue (event) {
  // todo find and remove the clue from the categories :: DONE
  if (event.target.className === 'clue' && activeClueMode === 0) {
    activeClueMode = 1
    revertEl = event.target
    event.target.innerHTML = ''
    displayQA.innerHTML = clues[event.target.id][0]
    currentID = event.target.id
    currentAnswer = clues[event.target.id][1]
    revertValue = clues[event.target.id][2]
    console.log(currentID)
    openModal()
  }


  // TODO: create another if statement to handle if a click occurs on a different target element. 
   // It should hide the answer/question currently open and open the question for the new target element.   

  // todo mark clue as viewed (you can use the class in style.css), display the question at #active-clue
  // Task handled by removing the value from being displayed in the box.
}

$("#active-clue").on("click", handleClickOfActiveClue);

/**
 * Manages the behavior when a displayed question or answer is clicked.
 * Displays the answer if currently displaying a question.
 * Clears if currently displaying an answer.
 *
 * Hints:
 * - Control the behavior using the `activeClueMode` variable.
 * - After clearing, check the categories array to see if it is empty to decide to end the game.
 * - Don't forget to update the `activeClueMode` variable.
 */
function handleClickOfActiveClue (event) {
  // Needs to set the active clue variable defined above. If the card is currently flipped to show a question, this click will reveal the answer.
  
  // todo display answer if displaying a question
  revealAnswer(event)

  // todo clear if displaying an answer

  // todo after clear end the game when no clues are left

  // if (activeClueMode === 1) {
  //   activeClueMode = 2;
  //   console.log('active clue clicked')
  //   $("#active-clue").html(activeClue); // Change to just activeClue since I'm setting this value in the first click.
  // } else if (activeClueMode === 2) {
  //   activeClueMode = 0;
  //   $("#active-clue").html(null);

  //   if (categories.length === 0) { // create a way to remove values as they're clicked.
  //     isPlayButtonClickable = true;
  //     $("#play").text("Restart the Game!");
  //     $("#active-clue").html("The End!");
  //   }
  // }
}

