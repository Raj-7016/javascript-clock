let min = document.querySelector(".min");
let hour = document.querySelector(".hour");
const a = new Date();
let b = a.getMinutes();
let c =a.getHours();
let r = a.getSeconds();
console.log(r)
if(c>12){
    c = c-12;
}
let Min = 0;
let Hour = 0;
console.log(b);
console.log(c);

let bool = true;
let bool2 = true;

while(bool){
    min.style.transform = `rotate(${b*6}deg)`;
    Min = (b*6)+6;
    hour.style.transform = `rotate(${c*30}deg)`;
    Hour = c*30;
    bool = false;
}

while(bool2){
    let u = Math.floor(Min/72);
    if(u<5){
        hour.style.transform = `rotate(${Hour+(6*u)}deg)`;
        Hour = Hour+(6*u);
        // console.log(Min,Hour);
        // console.log(u);
    }
    bool2 = false;
}

setInterval(function(){
    min.style.transform = `rotate(${Min}deg)`;
    
    if(Min == 360){
        Min = 0;
    }
    if(Min%72==0){
        if(Hour == 360){
            Hour = 0;
        }
        hour.style.transform = `rotate(${Hour+6}deg)`;
        Hour = Hour+6;
    }
    // console.log(Min,Hour);
    Min = Min + 6;
},60000);






