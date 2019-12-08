const myProblem = () => {
    var answer = document.getElementById("input1").value;
    if (answer == 58.3624) {
        return "Good Job!";
    } else 
        return "Try Again";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
};

const myProblem2 = () => {
    var answer2 = document.getElementById("input2").value;
    if (answer2 == 9.783) {
        return "Good Job!";
    } else 
        return "Try Again";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
};