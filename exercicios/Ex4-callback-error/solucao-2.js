var rect = require('./retangulo-2');

function solveRect(l,b){
    console.log("\nSolving for rectangle with L = " + l + " and W =" + b);
    rect(l,b, function(err, rectangle) {
        if (err){
            console.log(err);
        }
        else{
            console.log("The area of a rectangle of dimensions length = " + l + " and width = " + b + " is " + rectangle.area());
            console.log("The perimeter of a rectangle of dimensions length = " + l + " and width = " + b + " is " + rectangle.perimeter() + "\n");
        }
    });
};

solveRect(2,4);
solveRect(3,5);
solveRect(-3,4);
solveRect(2,-4);