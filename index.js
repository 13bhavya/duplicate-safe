const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const navlink = document.querySelectorAll(".nav-item");

const navBar = document.getElementById("nav-bar");

const menuBtn = document.querySelector(".menu-btn");
const headerVar = document.getElementById("header");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        headerVar.classList.remove("ml-5");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        headerVar.classList.add("ml-5");
        menuOpen = false;
    }
})

const sectionOneOption = {
    rootMargin: "600px 0px 0px 0px"
}

//change navbar properties on slide down
const sectionObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver) {
    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) {
            navbar.classList.add("bg-dark")
            navbar.classList.remove("navbar")
            for (var i = 0; i < navlink.length; i++) {
                navlink[i].classList.add("nav-link-scrolled")
                navlink[i].classList.remove("nav-color")
            }
        } else {
            navbar.classList.add("navbar")
            navbar.classList.remove("bg-dark")
            for (var i = 0; i < navlink.length; i++) {
                navlink[i].classList.add("nav-color")
                navlink[i].classList.remove("nav-link-scrolled")
            }

        }
    })
}, sectionOneOption)

sectionObserver.observe(header)

$(document).ready(function () {

    var scrollLink = $('.scroll')

    scrollLink.click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    })
})

$(function () {
    $('.pop').on('click', function () {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#screen-modal').modal('show');
    });
});

// hide #back-top first
$("#to-top").hide();

// fade in #back-top
$(function () {
    $(window).scroll(() => {
        if ($(this).scrollTop() > 200) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    })

    // scroll body to 0px on click
    $('#to-top').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
})