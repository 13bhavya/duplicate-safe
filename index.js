const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const navItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelectorAll(".nav-link");
const modalShow = document.getElementById("modal-show");

const navBar = document.getElementById("nav-bar");
const navbarCollapse = document.getElementById("navbarSupportedContent");

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
            for (var i = 0; i < navItem.length; i++) {
                // navItem[i].classList.add("nav-link-scrolled")
                navItem[i].classList.add("nav-inverted")
                navItem[i].classList.remove("nav-color")
                navItem[i].classList.remove("nav-link")
            }
        } else {
            navbar.classList.add("navbar")
            navbar.classList.remove("bg-dark")
            for (var i = 0; i < navItem.length; i++) {
                navItem[i].classList.add("nav-color")
                navItem[i].classList.add("nav-link")
                navItem[i].classList.remove("nav-inverted")
                // navItem[i].classList.remove("nav-link-scrolled")
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

    $(function () {
        $(navLink).click(function () {
            setTimeout(function () {
                $(navbarCollapse).collapse('hide');
                menuBtn.classList.remove("open");
            }, 1000)
        })
    })

    $('a.title-text').mouseover(function () {
        div = $('#github-icon');
        div.stop().animate({ visibility: 'visible' }, 150);
    }).mouseout(function () {
        div = $('#github-icon');
        div.stop().animate({ visibility: 'hidden' }, 150);

    });
})

$(function () {
    $('.pop').on('click', function () {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#screen-modal').modal('show');
    });
});

$("#frame-load").on('load', function () {
    console.log('loads until T-2');
    $('#loading').fadeOut();
    modalShow.classList.remove("modal-remove");
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