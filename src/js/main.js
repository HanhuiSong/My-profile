/* Your JS here. */

window.onscroll = function () {
    stickyBar();
    positionIn();
};

var navbar = document.getElementById("navbar");

var name = document.getElementById('name');
var sticky = navbar.offsetTop;
var me = document.getElementById("me");
var education = document.getElementById("education");
var work = document.getElementById("work");
var hobby = document.getElementById("hobby");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

function stickyBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.padding = "0px 0px";
        navbar.style.borderRadius = "25px";
        navbar.style.position = "fixed";
        navbar.style.width = "100%";
        name.style.fontSize = '30px';
        me.style.fontSize = "10px";
        education.style.fontSize = "10px";
        work.style.fontSize = "10px";
        hobby.style.fontSize = "10px";
    } else {
        navbar.classList.remove("sticky")
        navbar.style.padding = "20px 20px";
        navbar.style.borderRadius = "0px";
        navbar.style.position = "fixed";
        navbar.style.width = "99%";
        name.style.fontSize = '40px';
        me.style.fontSize = "17px";
        education.style.fontSize = "17px";
        work.style.fontSize = "17px";
        hobby.style.fontSize = "17px";
    }
}

function positionIn() {
    let cur = window.pageYOffset;
    if (cur >= sticky && cur < b2.offsetTop - 50) {
        me.style.backgroundColor = "White";
        me.style.color = "deepskyblue";
    } else {
        me.style.backgroundColor = "deepskyblue";
        me.style.color = "White";
    }
    if (cur >= b2.offsetTop - 50 && cur < b3.offsetTop - 50) {
        education.style.backgroundColor = "White";
        education.style.color = "deepskyblue";
    } else {
        education.style.backgroundColor = "deepskyblue";
        education.style.color = "White";
    }
    if (cur >= b3.offsetTop - 50 && cur < b4.offsetTop) {
        work.style.backgroundColor = "White";
        work.style.color = "deepskyblue";
    } else {
        work.style.backgroundColor = "deepskyblue";
        work.style.color = "White";
    }
    if (cur >= b4.offsetTop) {
        hobby.style.backgroundColor = "White";
        hobby.style.color = "deepskyblue";
    } else {
        hobby.style.backgroundColor = "deepskyblue";
        hobby.style.color = "White";
    }
}

me.onclick = function () {
    window.scrollTo(0, 45);
};
education.onclick = function () {
    window.scrollTo(0, edu_position());
};
work.onclick = function () {
    window.scrollTo(0, work_position());
};
hobby.onclick = function () {
    window.scrollTo(0, ho_position());
};
function edu_position(){
    let rect = b2.getBoundingClientRect();
    return rect.top + window.scrollY - 45;
}
function work_position(){
    let rect = b3.getBoundingClientRect();
    return rect.top + window.scrollY - 45;
}
function ho_position(){
    let rect = b4.getBoundingClientRect();
    return rect.top + window.scrollY + 20;
}


let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    if (slideIndex === undefined) {
        slideIndex = 1;
    }

    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    let x = slideIndex;
    console.log(x);
    slides[x - 1].style.display = "block";
}

var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
btn1.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal1.style.display = "block";
}
span1.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modal1.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
