let data = document.querySelector("#data_date");
let cal = document.querySelector("#cal");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");



// data.addEventListener('click', function(){

// })
let output="";
cal.addEventListener('click',function(){
    output=data.value;
    // console.log(data ,output,cal);
    let arr=output.split('-');
    // console.log(arr);  


    let currentDate = new Date();
    let yearNow = currentDate.getFullYear();
    let monthNow = ('0' + (currentDate.getMonth() + 1)).slice(-2); 
    let dayNow = ('0' + currentDate.getDate()).slice(-2);


    // console.log(yearNow,monthNow,dayNow);

//    year 
    let ans =yearNow-parseInt(arr[0]);
    if(monthNow>parseInt(arr[1])){
        year.innerText=ans;
    }
    else{
        year.innerText=ans-1;
    }
    // months
    let res=(11-(parseInt(arr[1])-monthNow));
    if(res==12){
        res=0;
        month.innerText=res;
    }
    else{
        month.innerText=res;
    }


    
    //days


})




