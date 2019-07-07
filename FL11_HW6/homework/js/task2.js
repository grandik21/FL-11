let a = prompt("Please enter value of a:");
let b = prompt("Please enter value of b:");
let c = prompt("Please enter value of c:");

let arr = [a, b, c];

if( +arr[0] + +arr[1] >= +arr[2] && +arr[0] + +arr[2] >= +arr[1] && +arr[1] + +arr[2] >= +arr[0] ) {
     if( +arr[0] === +arr[1] && +arr[0] === +arr[2] && +arr[1] === +arr[2] ) {
                console.log("Eequivalent triangle");
        } else if( +arr[0] === +arr[1] || +arr[0] === +arr[2] || +arr[1] === +arr[2] ) {
            console.log("Isosceles triangle");
        } else {
			console.log("Normal triangle");
        }
} else {
    console.log("Triangle doesn’t exist");
}

