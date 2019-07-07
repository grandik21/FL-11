let a1, a2, b1, b2, c1, c2;

a1 = prompt("Please enter coordinate a1");
a2 = prompt("Please enter coordinate a2");
b1 = prompt("Please enter coordinate b1");
b2 = prompt("Please enter coordinate b2");
c1 = prompt("Please enter coordinate c1");
c2 = prompt("Please enter coordinate c2"); 

let A = [a1, a2];
let B = [b1, b2];
let C = [c1, c2];

let pointA = (+A[0] + +B[0])/2;
let pointB = (+A[1] + +B[1])/2;
let pointCenter = [pointA, pointB];


if( +pointCenter[0] === +C[0] && +pointCenter[1] === +C[1] ) {
	console.log(true); 
} else { 
	console.log(false); 
}




