const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const inputname = document.getElementById("nameInput");
const profileName = document.getElementById("profileName")

inputname.addEventListener('keyup',function(){
profileName.textContent = this.value;
})

const despName = document.getElementById("descriptionInput");
const profileDes= document.getElementById("profileDescription")

despName.addEventListener('keyup', function(){
    profileDes.textContent = this.value
})
const profilePic = document.getElementById("profileImg");
profilePic.addEventListener('click', function(){
    let random = Math.floor(Math.random()*colors.length)
    this.style.borderColor = colors[random];
})