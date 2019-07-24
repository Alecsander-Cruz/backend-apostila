var rect = require('./retangulo1');

function solveRect(l,b){
    console.log("\nSolving for rectangle with l = " + l + " and b =" +b);

    if(l<0 || b<0){
        console.log("Rectangle dimensions shoulb be greater than zero: l = " + l + " and b = " + b + "\n");
    }
    else{
        console.log("The area of a rectangle of dimensions length = " + l + " and width = " + b + " is " + rect.area(l,b));
        console.log("The perimeter of a rectangle of dimensions length = " + l + " and width = " + b + " is " + rect.perimeter(l,b) + "\n");
    }
}

solveRect(2, 5);
solveRect(3, 3);
solveRect(-3, 5);
solveRect(5, -1);