function kabisat(year) {
    let result
    if(year % 4 === 0) {
        result = 'Kabisat'
    } else {
        result = 'Bukan Kabisat'
    }

    return result
}


console.log(kabisat(1900))
console.log(kabisat(2000))
console.log(kabisat(2001))
console.log(kabisat(2016))