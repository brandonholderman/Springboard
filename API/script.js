// let sessionUrl = 'https://reqres.in/app/collections/orders/records' <---- provided in docs and does not work.

let key = 'pub_0ffcf168c2a075594496e7826beeaf6a988c1349403ff12097b83ccefd3819d5'

let url = 'https://reqres.in/api/app-users/login'
let verifyUrl = 'https://reqres.in/api/app-users/verify'
let sessionUrl = 'https://reqres.in/app/collections/products/records'

let form = document.querySelector('#login-form')
let email = document.querySelector('#email-input')
let password = document.querySelector('#password-input')

let tokenInput = document.querySelector('#token-input') // Created to address new 2 facter auth process
let hiddenMagicForm = document.querySelector('#hidden-magic-form') // Created to address new 2 facter auth process
let hiddenSessionForm = document.querySelector('#hidden-session-form') // Created to address new 2 facter auth process
let sessionTokenInput = document.querySelector('#session-token-input') // Created to address new 2 facter auth process
let intelligenceForm = document.querySelector('#intelligence-form')
let pageNumberInput = document.querySelector('#page-number-input')

let logoutButton = document.querySelector('#logout-button')

let systemMessage = document.querySelector('#system-message')
let hackerMessage = document.querySelector('#hackers')

let api = 'https://reqres.in/api'
let appUserID = 'd1bbba68-0936-41da-933e-1953619f7423'
let projectID = '23209'

let fields


form.addEventListener('submit', async function (e) {
    // First submission form for user to enter their email and passowrd associated with their account to receive magic link
    // Attaches public that will need to be adjusted per user
    e.preventDefault()
    try {
        let request = await axios.post(url,
            { email: email.value, password: password.value },
            { headers: {'x-api-key': key} }
        )
        if (request.status === 200) { // Upon successful reponse, hides the first form and reveals form for magic link input
            form.style.display = "none"
            hiddenMagicForm.style.display = "block"
        }

        console.log('Success! -', request.data.data.message)

        return systemMessage.innerHTML = 'Check Email for Magic Link Token and Paste in Box'
    } catch (err) {
        systemMessage.innerHTML = err.message
        throw new Error('Login Credentials Invalid')
    }
})


hiddenMagicForm.addEventListener('submit', async function (e) {
    // Second form appearing only after the first step succeeds. 
    // Takes magic link input to verify the user and return a session token
    e.preventDefault()
    try {
        let verify = await axios.post(verifyUrl, { token: tokenInput.value }) 
        if (verify.status === 200) { // Hides second form and reveals session token input form upon success
            hiddenMagicForm.style.display = "none"
            hiddenSessionForm.style.display = "block"
        }
        console.log('Copy Session Token from Message Box')

        let sessionToken = verify.data.data.session_token
        localStorage.setItem('sessionToken', sessionToken) // Stores the session token in localstorage for "logout" later

        tokenInput.value = ''

        return systemMessage.innerHTML = sessionToken // Shows session token to the user in the message box
    } catch (err) {
        systemMessage.innerHTML = err.message
        throw new Error(err)
    }
})


hiddenSessionForm.addEventListener('submit', async function (e) {
    // Third form for session token input appearing after user is verified
    e.preventDefault()
    try {
        let session = await axios.post(sessionUrl, 
            { data: {...fields} }, 
            { headers: { Authorization: `Bearer ${sessionTokenInput.value}` } }
        )
        
        sessionTokenInput.value = ''
        
        return systemMessage.innerHTML = 'Infiltration Successful!'
    } catch (err) {
        systemMessage.innerHTML = err.message
        throw new Error(err)
    }
})


logoutButton.addEventListener('click', async function () {
    // Logout function to clear the session token from local storage and refresh page
    localStorage.removeItem('sessionToken')
    return window.location.href = '/'
})


intelligenceForm.addEventListener('submit', async function (e) {
    // Form the takes in a user specified page number or defaults to first page, then returns a list of users
    e.preventDefault()
    let token = localStorage.getItem('sessionToken')

    try {
        let response = await axios.get(`${api}/users`, { 
            headers: { 'x-api-key': key },
            params: {delay: 1, page: pageNumberInput.value ?? 1}
        })

        let hackers = response.data.data

        hackerMessage.innerHTML = ''

        for (let hacker of hackers) {
            let hackerElement = document.createElement('div')
            hackerElement.classList.add('hacker')
            hackerElement.innerHTML = `<p>${hacker.first_name} ${hacker.last_name}</p><p>${hacker.email}</p><img src="${hacker.avatar}" alt="Portraid Picture">`
            hackerMessage.appendChild(hackerElement)
        }
    } catch (err) {
        hackerMessage.innerHTML = err.message
        throw new Error(err)
    }
})
