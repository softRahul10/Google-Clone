// Don't show anything if screen is smaller
window.addEventListener('resize',()=>{
    const deviceWidth = window.innerWidth;
    const body = document.querySelector('.content');
    const msgUi = document.querySelector('.special-msg');
    if(deviceWidth < 1000) {
        body.style.display = 'none';
        msgUi.style.display = 'block';
    }else {
        body.style.display = 'block';
        msgUi.style.display = 'none';
    }
})