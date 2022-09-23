function grade(nilai) {
    let result
    if(nilai >= 90) {
        result = 'A'
    }
    else if(nilai >= 80) {
        result = 'B'
    }else if(nilai >= 70) {
        result = 'C'
    }else if(nilai >= 60) {
        result = 'D'
    }else {
        result = 'E'
    }

    return result
}

console.log(grade(100)) // A
console.log(grade(82)) // B
console.log(grade(71)) // C
console.log(grade(79)) // C
console.log(grade(67)) // D
console.log(grade(40)) // E