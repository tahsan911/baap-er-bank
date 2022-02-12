// 1st page
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', function (){
    const userMail = document.getElementById("user-input");
    const userPass = document.getElementById('user-password');
    if (userMail.value == 'user@gmail.com' && userPass.value == "user"){
        window.location.href = 'next.html';
    }else{
        const innerPara = document.getElementById('inner-div');
        const p = document.createElement('p');
        p.style.color = 'black';
        p.style.fontWeight = "600";
        p.style.paddingTop = "20px";
        setInterval(_=>p.style.display = 'none', 1500);
        p.innerText = 'Incorrect Email or Password!';
        innerPara.appendChild(p);
        userPass.value = '';
        userMail.value = '';
    }

})


