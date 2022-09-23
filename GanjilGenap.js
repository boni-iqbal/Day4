function ganjilGenap(num) {
    let result
    if(num % 2 === 0) {
        result = 'Genap'
    }else{
        result = 'Ganjil'
    }

    return result
}

console.log(ganjilGenap(1))
console.log(ganjilGenap(2))
console.log(ganjilGenap(3))
console.log(ganjilGenap(15))
console.log(ganjilGenap(24))
console.log(ganjilGenap(67))
console.log(ganjilGenap(84))