function findX(event) {
    event.preventDefault()
    let i
    let number = document.querySelector('.number').value
    let power = document.querySelector('.power').value

    for (i = 1; +number > power-1; i++) {
        if (!Number.isInteger(number / power)) {
            document.querySelector('.result').innerHTML = 'Error, try again'
            alert('This is not a proper number')
            i = 0
            break
        }

        number = number / power
        document.querySelector('.result').innerHTML = i
    }

}


