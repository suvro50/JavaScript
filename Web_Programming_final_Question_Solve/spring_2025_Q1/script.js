const target_score = 100;
let attempts = 0;

function pass(){
    let input=document.getElementById("pass").value;

    let score = 0;
    attempts++;



if (input.length >= 6) {
        score += Math.floor(input.length / 2) * 10;
    }
    if (/[A-Z]/.test(input)) {
        score += 15;
    }
    if (/[a-z]/.test(input)) {
        score += 15;
    }
    if (/[0-9]/.test(input)) {
        score += 20;
    }
    if (/[!@#$%^&*]/.test(input)) {
        score += 25;
    }

    let feedback = "";

    if (attempts > 8 && score < 71) {
        feedback = "Need practice! Tip: Use uppercase, lowercase, numbers, and special characters.";
    } else if (score >= target_score) {
        feedback = "Perfect Password! Success: Your password is fully secure.";
    } else if (score >= 91) {
        feedback = "Very Strong";
    } else if (score >= 71 && score <= 90) {
        feedback = "Strong";
    } else if (score >= 51 && score <= 70) {
        feedback = "Medium";
    } else if (score >= 31 && score <= 50) {
        feedback = "Weak";
    } else {
        feedback = "Very Weak";
    }

    document.getElementById("show").innerText = "Score: " + score + " | " + feedback + " (Attempts: " + attempts + ")";


}