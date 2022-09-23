function filmRating(age) {
    if(age >= 21) {
        result = 'DEWASA'
    } else if(age >= 13) {
        result = 'REMAJA'
    } else if(age >= 9) {
        result = 'BIMBINGAN ORANG TUA'
    } else {
        result = 'SEMUA USIA'
    }

    return result
}

console.log(filmRating(15))
console.log(filmRating(32))