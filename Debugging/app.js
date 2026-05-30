const accounts = [

    { id: 1, owner: "Alice", balance: 500 },
    { id: 2, owner: "Bob", balance: 300 }
];

function getAccountById(id) {
    // Working as expected.
    for (const account of accounts) {
        if (account.id == id) {
            return account;
        }
    }
}

function validate(id, owner, obj) {
    // Validation function created to validate all data when attempting to create a new account. 
    // Checks for duplicate ID and owner values, the owner value is a string, string is not empty, id value is an integer, and ID is not a negative number. 
    for (let i in obj) {
        if(id === obj[i].id) return false
        if(owner === obj[i].owner) return false
    }
    if(typeof owner !== 'string') return false
    if(!owner.trim().length > 0) return false
    if(typeof id !== 'number') return false
    if(id < 0) return false

    return true
}


function createAccount(newAccountId, newAccountOwner) {
    //Bug 1: Adding a duplicate account should throw an error
    if (validate(newAccountId, newAccountOwner, accounts)) {
        return accounts.push(
            {
                id: newAccountId,
                owner: newAccountOwner,
                balance: 0 // Change to integer
            }
        );
    } else {
        return console.log('Invalid entry')
    }
}

// function createAccount(newAccountId, newAccountOwner) {
//     //Bug 1: Adding a duplicate account should throw an error
//     for (let account of accounts) {
//         if (newAccountOwner === account.owner || newAccountId === account.id) {
//             return console.log('Account already exists')
//         } else if (typeof newAccountOwner !== 'string' || newAccountOwner.length !== 0) {
//             return console.log('Invalid Entry. Must be string with value', newAccountOwner)
//         } else if (typeof newAccountId !== 'number' || newAccountId < 0) {
//             return console.log('Invalid ID', newAccountId)
//         } else {
//             return accounts.push(
//                 {
//                     id: newAccountId,
//                     owner: newAccountOwner,
//                     balance: 0 // Change to integer
//                 }
//             );
//         }
//     }
// }


function depositMoney(accountId, amount) {
    // Only allow deposits if account exists and amount is greater than 0.
    const account = getAccountById(accountId);

    if (typeof amount !== 'number') {
        // throw new Error("Invalid input. Value must be integer.");
        return console.log("Invalid input. Value must be integer.", amount);
    }

    if (amount <= 0) {
        return console.log('Entered amount is negative. Invalid')
    }

    if (!account) {
        throw new Error("Account not found");
    }

    if (amount === Infinity) {
        // throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
        return console.log("Invalid value for withdrawal amount: The amount must be a finite number.");
    }

    account.balance += amount;
}


function withdrawMoney(accountId, amount) {
    const account = getAccountById(accountId);
    // Only allow if account exists and amount is greater than 0.
    if (typeof amount !== 'number') {
        // throw new Error("Invalid input. Value must be integer.");
        return console.log("Invalid input. Value must be integer.");
    }

    if (amount <= 0) {
        return console.log('Entered amount is negative. Invalid')
    }


    if (!account) {
        throw new Error("Account not found or invalid amount.");
    }

    if (!Number.isFinite(amount)) {
        throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
    }

    if (amount === Infinity) {
        // throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
        return console.log("Invalid value for withdrawal amount: The amount must be a finite number.");
    }
    
    account.balance -= amount;
}


function transferMoney(fromAccountId, toAccountId, amount) {
    // Adds money to target account but doesn't subtract money from sender.
    const fromAccount = getAccountById(fromAccountId);
    const toAccount = getAccountById(toAccountId);

    if (typeof amount !== 'number') {
        // throw new Error("Invalid input. Value must be integer.");
        return console.log("Invalid input. Value must be integer.");
    }

    if (amount <= 0) {
        return console.log('Entered amount is negative. Invalid')
    }

    if (!fromAccount) {
        throw new Error("Source account not found.");
    }

    if (!Number.isFinite(amount) || amount < 0) {
        throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
    }

    if (amount === Infinity) {
        // throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
        return console.log("Invalid value for withdrawal amount: The amount must be a finite number.");
    }

    toAccount.balance += amount;
    fromAccount.balance -= amount;
}



// getAccountById("1");
createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");
createAccount(4, "Fred")
createAccount(4, "Doug")
createAccount(5, "Doug")

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);

/*
Hints:


*/

console.log(accounts)


/*
// console.log(getAccountById("1"))
console.log(createAccount(1, "Alice"))
console.log(createAccount(3, ["Charlie"]))
// console.log(createAccount(3, "Doug"))
console.log(createAccount(4, "Fred"))
console.log(getAccountById("4"))
console.log(depositMoney(3, 300))
// console.log(depositMoney(1, Infinity))
// console.log(depositMoney(1, -300))
// console.log(createAccount(-3, "Charlie"))
// console.log(withdrawMoney(1, -100))
// console.log(withdrawMoney(1, Infinity))
// console.log(withdrawMoney(1, 501))
console.log(transferMoney(1, 4, 100))
console.log(transferMoney(1, 2, 501))
console.log(accounts)


createAccount("3", "Charlie");
createAccount(3, "");
createAccount(3, "  ");

console.log(depositMoney(1, 0))

depositMoney(4, 100)

withdrawMoney(1, 0)

transferMoney(1, 2, 100);
*/