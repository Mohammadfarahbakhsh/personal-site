document.getElementById('mybutton').addEventListener('click', function() {
    alert('فعلاا چیزی نداریم');
});
document.getElementById('subject-btn').addEventListener('click',function(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(name===""||email===""||message===""){
        alert('لطفا پر نمایید')
    }
    else{
        console.log('',name)
        console.log('',email)
        console.log('',message)
        alert('با تشکر از شما')
    }
});