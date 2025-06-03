function simulateTask(duration, callback) {
    setTimeout(callback, duration);// duration contaains the 3000and call back contains function 
}
document.getElementById("task1Btn").addEventListener('click',function(){
    simulateTask(3000,function(){
        document.getElementById("task1Status").innerHTML="Task 1 completed!";
        document.getElementById("task2Btn").disabled = false;
    });
});
document.getElementById("task2Btn").addEventListener('click',function(){
    simulateTask(2000,function(){
        document.getElementById("task2Status").innerHTML="Task 2 completed!";
        document.getElementById("task3Btn").disabled = false;
    })
})
document.getElementById("task3Btn").addEventListener('click',function(){
    simulateTask(2000,function(){
        document.getElementById("task3Status").innerHTML="Task 3 completed!";
        
    })
})