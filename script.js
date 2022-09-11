
// declaring variables
const para = document.querySelector("#para");

// initializing time interval to 1000 milliseconds
    setInterval(() => {
        a = new Date();
        let hours = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let am = "AM";
        
        if(hours>=12){
            // hours = hours - 12;
            am="PM";
        }
        if(sec<10){
            sec = "0" + sec;
        } if(min<10){
            min = "0" + min;
        } if(hours <10){
            hours = "0" + hours;
        }
// getting date string
        const date = a.toLocaleDateString()
        para.innerText = hours + " : "+ min + " : " + sec+ " : " + am +  "  on  " +  date;

    }, 1000);


