const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
let hintcount = 0;

document.getElementById("hint-button").addEventListener("click",function(){
    var hintaction = confirm("ヒントを表示しますか？(10点のペナルティが発生します)");
    if (hintaction){
        document.getElementById("hint").textContent = ("見ざる・聞かざる・言わざる");
        hintcount += 1;
    }
});

document.getElementById("submit").addEventListener("click",function(){
    const quiz1anser = document.querySelector('input[name="question1"]:checked');
    const quiz2anser = document.querySelector('input[name="question2"]:checked');
    const quiz3anser = document.querySelector('input[name="question3"]:checked');
    const quiz4anser = document.querySelector('input[name="question4"]:checked');
    const quiz5anser = document.querySelector('input[name="question5"]:checked');
    console.log(quiz5anser)
    if (quiz1anser && quiz2anser && quiz3anser && quiz4anser && quiz5anser){
        const userchoice = `${quiz1anser.value},${quiz2anser.value},${quiz3anser.value},${quiz4anser.value},${quiz5anser.value}`;
        window.location.href = `../grades/grade.html?username=${username}&value=${userchoice}&hintcount=${hintcount}`;
    }
    else{
        var answercheck = confirm("まだ解いていない問題があります");
    }
});

