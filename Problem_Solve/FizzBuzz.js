function fizzBuzz(n) {

    if (n < 1 || n >= 100) {
        console.log(n)
        return 'Error'
    }

    if ((n % 3 === 0) && (n % 5 === 0)) {
        console.log('FizzBuzz')
        return 'FizzBuzz'
    }

    if (n % 3 === 0) {
        console.log('Fizz')
        return 'Fizz'
    }

    if (n % 5 === 0) {
        console.log('Buzz')
        return 'Buzz'
    }

    console.log(n)
    return 'Error'
}


fizzBuzz(95)