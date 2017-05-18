function checkForm() {
    /*alerts the user that the form has been submitted and runs the three dropdown vaidation functions if all answers have been filled in*/
    if (validateForm() == false) {
        alert("Please answer all questions.")
    }
    else {
        alert("Submitted");
        validate_DropList1();
        validate_DropList2();
        validate_DropList3();
    }
}

function validateForm() {
    /*checks to see if choice have been made for all drop-down boxes and returns true or false*/
    var result1 = document.getElementById('dropdown1').value;
    var result2 = document.getElementById('dropdown2').value;
    var result3 = document.getElementById('dropdown3').value;
    if (result1 == "0.0") {
        return false;
    }
    else if (result2 == "0.0") {
        return false;
    }
    else if (result3 == "0.0") {
        return false;
    }
    else {
        return true;
    }
}

function validate_DropList1() {
    /*takes no parameters, checks the first answer given and then calls writeTextCorrect or writeTextIncorrect as appropriate*/
    var div = document.getElementById("textDiv1");
    var result = document.getElementById('dropdown1').value;
    if (result == "1.3") {
        writeTextCorrect(div);
    }
    else {
        writeTextIncorrect("Request entity body to update resource or as input for processing", div);
    }
}

function validate_DropList2() {
    /*takes no parameters, checks the second answer given and then calls writeTextCorrect or writeTextIncorrect as appropriate*/
    var div = document.getElementById("textDiv2");
    var result = document.getElementById('dropdown2').value;
    if (result == "2.1") {
        writeTextCorrect(div);
    }
    else {
        writeTextIncorrect("HEAD/GET", div);
    }
}

function validate_DropList3() {
    /*takes no parameters, checks the third answer given and then calls writeTextCorrect or writeTextIncorrect as appropriate*/
    var div = document.getElementById('textDiv3');
    var result = document.getElementById('dropdown3').value;
    if (result == "3.3") {
        writeTextCorrect(div);
    }
    else {
        writeTextIncorrect("Redirection", div);
    }
}

function writeTextCorrect(div) {
    /*takes a div as a parameter and then writes correct answer to it */
    div.textContent = "Correct Answer!";
    var text = div.textContent;
}

function writeTextIncorrect(answer, div) {
    /* takes a div and the correct answer and parameters then writes "Incorrect, the correct answer is: " to the div as well as the correct answer passed to the function*/
    div.textContent = "Incorrect, the correct answer is: " + answer;
    var text = div.textContent;
}