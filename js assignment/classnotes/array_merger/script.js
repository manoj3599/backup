const arr1 = document.getElementById('1');
const arr2 = document.getElementById('2');
const btn1 = document.getElementById('add-1');
const btn2 = document.getElementById('add-2');

const firstArray = [];
const secondArray = [];

//to display the array 
//display1 =document.getElementById("disp-1")
//display2 =document.getElementById("disp-2")

btn1.addEventListener('click', () => {
    let strList1 = arr1.value;//to take value from input

    let arrOne =strList1.split(",");
    let checkStatus = false;
    for(let obj of arrOne){
        if(isNaN(obj)){
            checkStatus = true;
            break;
        }
           firstArray.push(Number(obj)); 
        
        
    }
    if(checkStatus){
        document.getElementById('error').classList.remove('d-none')
    }else{
        document.getElementById("disp-1").innerHTML = JSON.stringify(firstArray); 
    }

    

})

btn2.addEventListener('click', () => {
    let strList2 = arr2.value;//to take value from input
    let arrTwo = strList2.split(",");
    let checkStatus = false;
    for(let obj of arrTwo){
        if(isNaN(obj)){//to check weather it is not in 1,2,p format
           checkStatus = true;
           break;
        }
        secondArray.push(Number(obj))
    }
    if(checkStatus){
        document.getElementById('error').classList.remove('d-none')//in css there is class to remove that
    }else{
        document.getElementById("disp-2").innerHTML = JSON.stringify(secondArray);  
    }
    

})

document.getElementById('merge').addEventListener('click', () => {
    let merge = [...firstArray,...secondArray];
    document.getElementById('result').innerHTML = JSON.stringify(merge)
})