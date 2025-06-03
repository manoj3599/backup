function func1(event) {
    console.log("DIV 1 is clicked.");
    if(document.getElementById("check").checked){
      event.stopPropagation();
    }
   }
   
   
   function func2() {
     console.log("DIV 2 is clicked.");
   }

   document.getElementById("myAnchor").addEventListener('click',function(event){
    event.preventDefault();
   })