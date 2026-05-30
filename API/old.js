
// https://reqres.in/api/test-suite/collections/users/records 

// function verifyLogin(email, password) {
// }

// let token = '30937510'
let url = 'https://reqres.in/api/app-users/login'
let form = document.querySelector('#login-form')
let email = document.querySelector('#email-input')
let password = document.querySelector('#password-input')
let systemMessage = document.querySelector('#system-message')
// let key = 'pub_0ffcf168c2a075594496e7826beeaf6a988c1349403ff12097b83ccefd3819d5'
let dev_key = "dev_04ab0da3dcfc3557783a4ba736e38d620f9e2d256f63bdf3"

form.addEventListener('submit', async function (event) {
    event.preventDefault()
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        let request = await axios.post(url, { email, password })
        // const { token } = await request.json()
        return systemMessage.innerHTML = request.token
        // console.log('Success:', token);
    } catch (err) {
        systemMessage.innerHTML = err.message
        throw new Error('Login Credentials Invalid')
    }
})


// verifyLogin('brandon@brandon.brandon', 'elephants')


// const payload = {
//     "token": "<magic_link_token>"
// };

// const response = await fetch('https://reqres.in/api/app-users/verify', {
//     method: 'POST',
//     headers: { 
//         'Content-Type': 'application/json', 
//         'x-api-key': key,
//         "Authorization": "Bearer YOUR_SESSION_TOKEN"
//     },
//     body: JSON.stringify(payload),
// });
// const data = await response.json();
// console.log(data);


// form.addEventListener('submit', async (event) => {
//     event.preventDefault()
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     try {

//     }
// })

// let key = 'pub_9d345c3fb290dec186f0ab425fa9f19f'

// let token_return = '';
// let session_token_return = '';
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function loginUser() {
    const login = await fetch('https://reqres.in/api/app-users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'pub_0ffcf168c2a075594496e7826beeaf6a988c1349403ff12097b83ccefd3819d5',
        },
        body: JSON.stringify({ email: 'fifth5flow@gmail.com', project_slug: 'bold-harbor-api-58', project_id: '23209' }),
    });
    const { token } = await login.json();
    // // return token
    // return token_return += token
}

async function verifyUser() {
    // token = token_return
    const verify = await fetch('https://reqres.in/api/app-users/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: '41027818' }),
    });
    // await sleep(8000)
    const { session_token } = await verify.json();
    return session_token
}

async function userRecords() {
    // session_token = session_token_return
    const recordsResponse = await fetch('https://reqres.in/app/collections/orders/records', {
        headers: { Authorization: 'Bearer ' + session_token },
    });
    const records = await recordsResponse.json();
    console.log(records);
    return records
}

async function recordsResponse() {
    const res = await fetch("https://reqres.in/api/collections/accounts/records", {
        headers: { "x-api-key": 'pub_0ffcf168c2a075594496e7826beeaf6a988c1349403ff12097b83ccefd3819d5' }
    });
    const data = await res.json();
    console.log(data);
    return data
}


// async function startLogin() {
//     loginUser()
//     await sleep(8000)
//     verifyUser(token_return)
//     await sleep(5000)
//     getRecords(session_token_return)
//     await sleep(3000)
//     recordsResponse()
// }