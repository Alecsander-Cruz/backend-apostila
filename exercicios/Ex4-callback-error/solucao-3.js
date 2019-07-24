var argv = require('yargs').usage('Usage: node $0 --l=[num] --w=[num]').demand(['l','w']).argv;

var rect = require('./retangulo-2');

function solveRect(l,w){
    console.log("\nSolving for rectangle with L = " + l + " and W =" + w);
    rect(l,w, function(err, rectangle) {
        if (err){
            console.log(err);
        }
        else{
            console.log("The area of a rectangle of dimensions length = " + l + " and width = " + w + " is " + rectangle.area());
            console.log("The perimeter of a rectangle of dimensions length = " + l + " and width = " + w + " is " + rectangle.perimeter() + "\n");
        }
    });
};

solveRect(argv.l, argv.w);
