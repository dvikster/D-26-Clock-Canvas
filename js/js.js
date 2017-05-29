var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

ctx.beginPath();//начинаем новый путь
ctx.lineWidth = '3';
// ctx.moveTo(300,0);//начало
ctx.strokeStyle = 'lightgray';
ctx.arc(300,300,300,0,2*pi,false);
// ctx.closePath();//замыкает путь
ctx.stroke();//обводка

var counter=0;
var sec=(3*pi)/2;
var secInterval = pi/30;

function clock() {
    if(counter < 60){
        // ctx.arc(x,y, radius, start_angle, end_angle, anticlockwise)// окружность или дуга
        ctx.beginPath();//начинаем новый путь
        ctx.lineWidth = '3';
        // ctx.moveTo(300,0);//начало
        ctx.strokeStyle = '#2bbbad';
        ctx.arc(300,300,300,sec,(sec+secInterval),false);
        // ctx.closePath();//замыкает путь
        ctx.stroke();//обводка
        sec=sec+secInterval;
        counter++;
        setTimeout(clock, 600);
    }else{
        ctx.clearRect(0,0,600,600);
        ctx.beginPath();//начинаем новый путь
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'lightgray';
        ctx.arc(300,300,300,0,2*pi,false);
        ctx.stroke();

        counter=0;
        sec=(3*pi)/2;
        secInterval = pi/30;
        setTimeout(clock, 600);
    }

}
setTimeout(clock, 600);

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
koord();
var timerSin, timerCos;
document.getElementById('button').onclick= function() {
    clearTimeout(timerSin);
    clearTimeout(timerCos);
    if(document.getElementById('sin').checked ===  true){
        console.log('sin'+document.getElementById('sin').checked);
        console.log('cos'+document.getElementById('cos').checked);
        x=0;
        ctx2.clearRect(0,0,600,400);
        koord();
        timerSin = setTimeout(sinFunc, 10);
    }
    else if(document.getElementById('cos').checked === true){
        console.log('cos'+document.getElementById('cos').checked);
        console.log('sin'+document.getElementById('sin').checked);
        x=0;
        ctx2.clearRect(0,0,600,400);
        koord();
        timerCos = setTimeout(cosFunc, 10);
    }
};
var x, y;
x =0;
function koord() {
    ctx2.beginPath();
    ctx2.lineWidth = '2';
    ctx2.moveTo(0,200);//начало
    ctx2.lineTo(600,200);
    ctx2.stroke();
}
function sinFunc() {
    if(x<590){
        ctx2.fillStyle = '#2bbbad';
        y = 200+100*Math.sin(x/35);
        ctx2.fillRect(x,y, 2,2);
        x = x + 0.3;
        timerSin = setTimeout(sinFunc, 10);
    }
    else {
            clearTimeout(timerSin);

    }
}

function cosFunc() {
    if(x<590){
        ctx2.fillStyle = '#E57373';
        y = 200-100*Math.cos(x/30);
        ctx2.fillRect(x,y, 2,2);
        x = x + 0.3;
        timerCos = setTimeout(cosFunc, 5);
    }
    else {
        // ctx2.clearRect(0,0,600,400);
        // ctx2.beginPath();
        // ctx2.strokeStyle = '#2bbbad';
        // ctx2.lineWidth = '2';
        // ctx2.moveTo(0,200);//начало
        // ctx2.lineTo(600,200);
        // ctx2.stroke();
        // x=0;
        clearTimeout(timerCos);
    }
}

// sinFunc();/**/

// function cosFunc() {
//     y = Math.cos(x);
// }
// cosFunc();
// document.getElementById('button').onclick= function(){
//      R = document.getElementById('static_circle').value;
//      r = document.getElementById('mobile_circle').value;
//      d = document.getElementById('tracing_stick').value;
//     console.log(R);
//     console.log(r);
//     console.log(d);
//     //console.log();
//     u = 0;
//     //r = 100;
//     //R = 50;
//     //d = 50;
//     ctx.clearRect(0,0,600,600);
// };
//
// function spiro(){
// 	x = (R-r)*Math.cos(u)+d*Math.cos(u*(R-r)/r);
// 	y = (R-r)*Math.sin(u)-d*Math.sin(u*(R-r)/r);
// 	ctx.fillRect(2*x+250,2*y+250, 2,2);
//     u = u+ 0.02;
// 	setTimeout(spiro, 10);
// }
//
// spiro();

