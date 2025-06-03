// javascript code goes here
const colors = document.querySelectorAll(".color");
const displayArea = document.getElementById("displayArea")
const HexValue = document.getElementById("hexValue")

colors.forEach(function(obj){
    obj.addEventListener('click', function(){
displayArea.style.backgroundColor = this.getAttribute("data-hex");
 HexValue.innerHTML = `Hex Value: ${this.getAttribute("data-hex")}`;
    })
})