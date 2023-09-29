const scrollTop = document.querySelector('.scroll-top');
const scrollBar = document.querySelector('.scroll-bar');
const links = document.querySelectorAll('.nav-link');

links.forEach((item) => {
    item.addEventListener('click' , (e) => {
        e.preventDefault();
        let targetElement = document.getElementById(item.dataset.target);
        let position = targetElement.offsetTop - targetElement.clientHeight;
        window.scrollTo({
            top: position,
        });
    }); 
});


window.addEventListener('scroll' , function(){
    let mainHight = (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    let percentage = document.documentElement.scrollTop / mainHight;

    scrollBar.style.width = `${percentage * 100}%`;

    scrollToTop();
});


scrollTop.addEventListener('click' , function(){
    window.scrollTo({
       top: 0,
       behavior: "smooth",
    });
});


function scrollToTop() {
    if(window.scrollY > 600) {
        scrollTop.style.display = 'block';
    }
    else {
        scrollTop.style.display = 'none';
    }
}



