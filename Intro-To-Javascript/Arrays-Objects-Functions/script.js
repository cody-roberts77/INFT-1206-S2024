

let car = {
    type: "Supercar",
    brand: "Porsche",
    model: "911 Turbo",
    year: "2008",
    color: "Black",
    subcar:{
        brand: "Toyota",
        color: "Purple"
    }
}

console.log(car.brand)
// console.log(car[brand]) //Sqaure allows for more flexibility.
// console.log(car["subcar"]["brand"])