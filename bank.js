document.getElementById('submit-btn').addEventListener('click',function(){
    const name = document.getElementById('userName').value;
    const password = document.getElementById('userPassword').value;
    if(name == "forroukh" || password == "yes"){
        window.location.href='banking.html';
    }
    
    })