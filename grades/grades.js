const urlParams = new URLSearchParams(window.location.search);
const rawValue = urlParams.get('value');
const hintcount = parseInt(urlParams.get('hintcount')) || 0;
const userchoice = rawValue ? rawValue.split(',').map(Number) : [];
const username = urlParams.get("username");

const questionanswer = [1,1,3,0,0];

let getbox1 = document.getElementById("box1");
let getbox2 = document.getElementById("box2");
let getbox3 = document.getElementById("box3");
let getbox4 = document.getElementById("box4");
let getbox5 = document.getElementById("box5");
let getbox6 = document.getElementById("box6");
let getbox7 = document.getElementById("box7");
let getbox8 = document.getElementById("box8");
let getbox9 = document.getElementById("box9");
let getbox10 = document.getElementById("box10");

let getbox = [getbox1,getbox2,getbox3,getbox4,getbox5,getbox6,getbox7,getbox8,getbox9,getbox10];

document.getElementById("button").addEventListener("click",function(){
    let count = 0;
    for (let i = 0;i <= 4;i++){
        if (questionanswer[i] == userchoice[i]){
            getbox[i].textContent = "正解";
            getbox[i + 5].textContent = "〇";
            getbox[i + 5].style.color = "rgb(60, 242, 99)";
            count =count + 1;
        }else{
            getbox[i].textContent = "不正解";
            getbox[i + 5].textContent = "✕";
            getbox[i + 5].style.color = "rgb(250, 58, 58)";
        }
    };
    const score = count * 20 - hintcount * 10;
    document.getElementById("nameeee").textContent = `${username}　さんの得点は`;
    document.getElementById("scoreboad").textContent = `${score}点です`;
    if (score == 100){
        document.getElementById("reaction").textContent = "秀";
    }
    if (score == 90){
        document.getElementById("reaction").textContent = "優";
    }
    if ((score <= 80)&&(score >= 70)){
        document.getElementById("reaction").textContent = "良";
    }
    if ((score <= 60)&&(score >= 50)){
        document.getElementById("reaction").textContent = "可";
    }
    if (score <= 40){
        document.getElementById("reaction").textContent = "不可";
    }
    else{
        document.getElementById("reaction").textContent = "エラー";
    }
});
