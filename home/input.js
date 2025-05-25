document.getElementById("btn").addEventListener("click", function(){
    let username = document.getElementById("username").value;
    if (username.length == 0){
        alert("名前を入力してください");
    }
    else{
        var name = document.getElementById("username").value;
        window.location.href = `../quiz/quiz.html?username=${name}`;
    }
});
