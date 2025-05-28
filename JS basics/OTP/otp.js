const inputs = document.querySelectorAll(".otp-input");
inputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
        // Check if input is not a backspace and has exactly one character
        if (event.inputType !== "deleteContentBackward" && input.value.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus(); // Move focus to the next input
            }
        } 
        // Handle backspace: move focus to the previous input
        else if (event.inputType === "deleteContentBackward" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

const messgae = document.getElementById("message");

function verifyOTP(){
    console.log("OTP verification initiated.");
    let otp = "";
    inputs.forEach(input=>{
        otp += input.value;
    })
    console.log(otp);
    setTimeout(()=>{
        console.log("OTP verification completed.");
        console.log("Entered OTP: ", otp);
        messgae.style.color = "green";
        messgae.innerHTML = "OTP verified successfully!";
        
    },3000)
}