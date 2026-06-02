document.addEventListener("DOMContentLoaded", function ()
{
	const noteContainer = document.getElementById("note-container");
	const newNoteButton = document.getElementById("new-note-button");
	const saveNoteButton = document.getElementById("save-text-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");

	
	// TODO: Load the notes from the local storage.
	let loadNotes = JSON.parse(localStorage.getItem('notes')) ?? []
	
	// TODO: Load the note ID counter from the local storage.
	let noteIdCounter = 0 // Counter for assigning unique IDs to new notes.

	// TODO: Load the note color from the local storage.
	let noteColor // Stores the selected note color from the form.

	// ^^ noteIdCounter and noteColor load from local storage in the if statement defined below
			
	if (loadNotes) {
		loadNotes.forEach(note => {
			let load = document.createElement("textarea")
			load.setAttribute("data-note-id", note.id.toString())
			load.id = note.id
			load.className = note.className
			load.value = note.content + '\n\n' + note.text
			load.style.backgroundColor = note.color
			
			noteContainer.appendChild(load)
			noteIdCounter = loadNotes.length
			noteColor = loadNotes[0].color
		})
	}

	function save() {
		// Function to save notes in their current state
		let allNotes = [...document.querySelectorAll(".note")]
		let update = JSON.parse(localStorage.getItem('notes'))

		update.map((note, index) => {
			note.text = allNotes[index].value.split(/\n+/).slice(1).join('\n')
		})

		localStorage.setItem('notes', JSON.stringify(update))
	}


	function addNewNote () {
		const id = noteIdCounter;
		const content = `Note ${id}`;

		const note = document.createElement("textarea");
		note.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
		note.value = content; // Sets the note ID as value.
		note.className = "note"; // Sets a CSS class.
		note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
		noteContainer.appendChild(note); // Appends it to the note container element as its child.

		const noteObj = {
			id: note.getAttribute('data-note-id'),
			className: note.className,
			content: note.value,
			color: noteColor,
			text: '',
		}		
		loadNotes.push(noteObj)

		noteIdCounter++; // Increments the counter since the ID is used for this note.
		// TODO: Add new note to the saved notes in the local storage.
		localStorage.setItem('notes', JSON.stringify(loadNotes))
	}

	colorForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevents the default event.

		const newColor = colorInput.value.trim();  // Removes whitespaces.

		const notes = document.querySelectorAll(".note");
		for (const note of notes) {
			note.style.backgroundColor = newColor;
		}

		colorInput.value = ""; // Clears the color input field after from submission.

		noteColor = newColor; // Updates the stored note color with the new selection.
		
		let update = JSON.parse(localStorage.getItem('notes')) 
		update.map(note => {
			note.color = noteColor
		})

		// TODO: Update the note color in the local storage.
		localStorage.setItem('notes', JSON.stringify(update))
	});

	newNoteButton.addEventListener("click", function () {
		addNewNote();
	});

	saveNoteButton.addEventListener('click', function () {
		// New button to save/update notes
		save()
	})

	document.addEventListener("dblclick", function (event) {
		let targetNoteID = event.target.getAttribute('data-note-id')
		let notes = JSON.parse(localStorage.getItem('notes'))
		if (event.target.classList.contains("note")) {
			event.target.remove(); // Removes the clicked note.
			
			// TODO: Delete the note from the saved notes in the local storage.
			notes.splice(targetNoteID, 1) // <-- Sourced from https://stackoverflow.com/questions/38748298/remove-array-item-from-localstorage
			localStorage.setItem('notes', JSON.stringify(notes))
		}
	});

	noteContainer.addEventListener("blur", function (event) {
		if (event.target.classList.contains("note")) {
			// TODO: Update the note from the saved notes in the local storage.
			save()
		}
	}, true);

	window.addEventListener("keydown", function (event) {
		/* Ignores key presses made for color and note content inputs. */
		if (event.target.id === "color-input" || event.target.type === "textarea") {
			return;
		}

		/* Adds a new note when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N") {
			addNewNote(); // Adds a new note.
		}
	});
});
