let data = document.querySelector("#data_date");
// let cal = document.querySelector("#cal");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

data.max = new Date().toISOString().split("T")[0];



// data.addEventListener('click', function(){

// })
// let output = "";
// cal.addEventListener('click', function () {
//     output = data.value;
//     // console.log(data ,output,cal);
//     let arr = output.split('-');
//     // console.log(arr);  


//     let currentDate = new Date();
//     let yearNow = currentDate.getFullYear();
//     let monthNow = ('0' + (currentDate.getMonth() + 1)).slice(-2);
//     let dayNow = ('0' + currentDate.getDate()).slice(-2);


//     // console.log(yearNow,monthNow,dayNow);

//     //    year 
//     let ans = yearNow - parseInt(arr[0]);
//     if (monthNow > parseInt(arr[1])) {
//         year.innerText = ans;
//     }
//     else {
//         year.innerText = ans - 1;
//     }
//     // months
//     let res = (11 - (parseInt(arr[1]) - monthNow));
//     if (res == 12) {
//         res = 0;
//         month.innerText = res;
//     }
//     else {
//         month.innerText = res;
//     }
//     let day_res = dayNow - parseInt(arr[2]);
//     let a = Math.abs(day_res);
//     day.innerText = a;

// })



function cal() {
    let data = document.getElementById("data_date").valueAsDate;
    let today = new Date();

    let d1 = data.getDate();
    let m1 = data.getMonth() + 1;
    let y1 = data.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3, d3;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 += 12;
        y3--;
    }

    year.innerText = y3;
    month.innerText = m3;
    day.innerText = d3;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


