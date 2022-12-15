// Don't show anything if screen is smaller
window.addEventListener('resize',()=>{
    const deviceWidth = window.innerWidth;
    const body = document.body;
    if(deviceWidth < 1000) {
        body.style.display = 'none';
    }else {
        body.style.display = 'block';
    }
})