



function findX(){
    event.preventDefault()
    let number = document.querySelector('input').value

    console.log(document.querySelector('input').value)

    let i

    if(typeof +number !== 'number'  ){

        alert('This is not a proper number')
    } else {
        console.log('Yes')
        console.log(typeof number)

    }

    if (!Number.isInteger(number / 2) ){
        alert('This is not a proper number')
    } else {
        for ( i = 0; +number > 1; i++ ){

            number = number / 2
            console.log(number)
        }
        console.log(i)
        document.querySelector('.result').innerHTML = i

        return i
    }


}
