//@author Gavin Williams, will1742@purdue.edu
var sInput;//stored input
var notCom1 = true;
var notCom2 = true;
var notCom3 = true;
var notCom4 = true;
var notCom5 = true;
var notCom6 = true;
var notCom7 = true;
var notCom8 = true;
var notCom9 = true;
var notCom10 = true;
var myImage = new Image(1068, 768);
myImage.src = 'https://thearg.neocities.org/knightsmarch.png';
window.onload = function js() {
  var input = document.getElementById("input");
  var prompt = document.getElementById("prompt");
  var leng = document.getElementById("prompt");
  var lengt = document.getElementById("prompt").length;
  console.log(input);
  console.log(prompt);
  input.addEventListener("keyup", onInputChange)
  document.getElementById("input").innerHTML = "> " //fills body paragraph html
  document.getElementById("prompt").innerHTML = "It is no accident that you are \nhere. Find clues in the WALC, \nuse them to solve ciphers. \nPress ENTER to continue..."
}//windowonload

function onInputChange(key) {
    console.log(sInput);
    console.log(key.keyCode);
    
    if (key.keyCode === 13) {
      sInput = input.value;
      try {
        sInput = sInput.parseInt();
        } catch(error) {console.log("Tried to parse int, was not int")}
      sInput = sInput.toUpperCase();
      input.value = "> ";
      console.log(sInput);
      
      if (sInput === "> \n" && notCom1) {
        document.getElementById("prompt").innerHTML = "Site 20, The Stirling Company __B:\n Rjpgy tjp gdfz oj ejdi pn? Da nj, otkz 'dbizjpn'";
        notCom1 = false;
      }
      if (sInput === "> IGNEOUS\n" && notCom2) {
        document.getElementById("prompt").innerHTML = "Your first letters are: VP. Press ENTER to continue...";
        notCom2 = false;
      } else if (sInput != "> IGNEOUS\n" && notCom2) {
      }
      if (sInput === "> \n" && notCom2 === false && notCom3) {
        document.getElementById("prompt").innerHTML = "Your next two letters are at Site 22: 4.4.6, 10.5.1. Enter them below...";
        notCom3 = false;
      }
      if (sInput === "> YF\n" && notCom4 || sInput === "> Y F\n" && notCom4 || sInput === "> Y, F\n" && notCom4 || sInput === "> Y,F\n" && notCom4) {
         document.getElementById("prompt").innerHTML = "Your next two letters are at Site 16: Enter the five digit PIN...";
         notCom4 = false;
      } else if (sInput != "> YF\n" && notCom4 || sInput != "> Y F\n" && notCom4 || sInput != "> Y, F\n" && notCom4 || sInput != "> Y,F\n" && notCom4) {
      }
      if (sInput ==="> 23681\n" && notCom5) {
         document.getElementById("prompt").innerHTML = "Your next two letters are: BH. Press ENTER to continue...";
        notCom5 = false;
      } 
      if (sInput ==="> \n" && notCom6 && notCom5 === false) {
        document.getElementById("prompt").innerHTML = "Your next two letters are at Site 33: 9, 8, 4, 0. What is the Feeder number?";
        notCom6 = false;
      }
      if (sInput === "> 8\n" && notCom7 || sInput === "> 08\n" && notCom7) {
        document.getElementById("prompt").innerHTML = "Your next two letters are: KU. Press ENTER to continue...";
        notCom7 = false;
      } else if (sInput != "> 8\n" && notCom7 || sInput != "> 08\n" && notCom7) {
      }
      if (sInput === "> \n" && notCom8 && notCom7 === false) {
        document.body.appendChild(myImage);
        document.getElementById("prompt").innerHTML = "Find the two digit number hidden in the cipher.";
        notCom8 = false;
        }
      if (sInput === "> 17\n" && notCom9 || sInput === "> SEVENTEEN\n" && notCom9) {
        document.body.removeChild(myImage);
        document.getElementById("prompt").innerHTML = "Your last two letters are: RY. Press ENTER to continue...";
        notCom9 = false;
        } else if (sInput != "> 17\n" && notCom9 || sInput != "> SEVENTEEN\n" && notCom9) {
        }
      if (sInput === "> \n" && notCom10 && notCom9 === false) {
        document.getElementById("prompt").innerHTML = "You've uncovered our email. Please contact us at VPYFBHKURY@gmail.com";
        notCom10 = false;
        }
    }//ifenter
}//onkeypress
console.log("if you see this, there may be a problem")
