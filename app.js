let gameseq=[];
let userseq=[];

let btns =["yellow","red","purple","blue"]

let started= false;
let level=0;

let h2=document.querySelector("h2");

document.getElementById("startbtn").addEventListener("click", function() {
    if (started == false)
    {
        console.log("game is started ");
        started=true;
        levelup();
    }
});

document.addEventListener("keydown", function() {
    if (started == false)
    {
        console.log("game is started ");
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    btnflash(randbtn);
}

function check(idx)
{
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }

    } else{
        h2.innerHTML=`Game over! Your Score was <b>${level} <br> Press any key to start again or the below button to Start over`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}

function btnpress () {
    let btn=this;
    btnflash(btn);
    usercolor =btn.getAttribute("id")
    userseq.push(usercolor);

    check(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level = 0;
}
