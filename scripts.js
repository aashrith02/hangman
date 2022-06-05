let UserAttempts = 8;
let RemainingAttempts = UserAttempts;
let text_feild = "";
document.getElementById("attempts").value = RemainingAttempts;
let randomNum = Math.floor((Math.random() * 100) + 1);
console.log(randomNum);

function display(num) {
    text_feild = text_feild + num;
    document.getElementById("inp").value = document.getElementById("inp").value + num;



}

function resetDisplay() {
    text_feild = "";
    document.getElementById("inp").value = "";
}

function updateCounter() {
    document.getElementById("attempts").value = RemainingAttempts;
}

function reload() {
    window.location.reload(true);
}

function check() {
    if (RemainingAttempts > 0) {
        RemainingAttempts--;
        if (parseInt(text_feild) == randomNum) {
            document.getElementById("display-message").innerHTML = "Correct Guess";
            document.getElementById("check").disabled = true;


        } else if (parseInt(text_feild) > randomNum) {
            document.getElementById("display-message").innerHTML = "Your Guess is higher than the number";
        } else if (parseInt(text_feild) < randomNum) {
            document.getElementById("display-message").innerHTML = "Your Guess is lower than the number";
        }
        resetDisplay();
        updateCounter();


    } else {
        document.getElementById("display-message").innerHTML = "MAN HANGED XX.";
        document.getElementById("right").style.cssText = 'opacity : 1';
        document.getElementById("check").disabled = true;
    }

}