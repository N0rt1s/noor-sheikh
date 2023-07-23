let lastScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

var sections = ['#me', '#aboutMe', '#project1', '#project2', '#project3']
var titles = ['fading-name', 'AboutText', 'titleMobala', 'titleAdamjee', 'titleSabzi']
var mobala = ["mobala0", "mobala1", "mobala2", "mobala3", "mobala4", "mobala5", "mobala6"]
var adamjee = ["adamjee0", "adamjee1", "adamjee2", "adamjee3", "adamjee4", "adamjee5", "adamjee6"]
var sbzimandi = ["sbzimandi0", "sbzimandi1", "sbzimandi2"]
let currentSection = 0
let scrolling = false
const nameElement = document.getElementById("fading-name");
const arrow = document.getElementById("downArrow");

function switchSlide(number, project, event) {
    let list;
    if (project == "mobala") {
        list = mobala
    }
    else if (project == "admajee") {
        list = adamjee
    }
    else if (project == "sbzimandi") {
        list = sbzimandi
    }
    let siblings = Array.from(event.target.parentNode.children);
    let targetIndex = siblings.indexOf(event.target);
    siblings.forEach((element, index) => {
        if (index == targetIndex) {
            event.target.classList.toggle("cicle-fill");
            document.getElementById(list[index]).style.display = "flex"
        }
        else {
            element.classList.remove("cicle-fill")
            document.getElementById(list[index]).style.display = "none"
        }
    })
}

window.addEventListener(
    'scroll',
    function handleScroll(e) {
        if (scrolling) {

        }
        else {
            const navbar = document.getElementById("navbar");
            const sideInfo = document.getElementById("SideInfo");
            const emailInfo = document.getElementById("EmailInfo");
            const bottomInfo = document.getElementById("BottomInfo");
            const sideProjectInfo = document.getElementById("SideProjectInfo");
            scrolling = true
            const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;
            console.log("scrollTopPosition=>", scrollTopPosition, " lastScrollTop=>", lastScrollTop)
            document.body.style.overflowY = 'hidden';
            if (scrollTopPosition > lastScrollTop) {
                if (currentSection == 4) {

                }
                else {
                    if (currentSection == 0) {
                        navbar.classList.toggle("show-navbar");
                        sideInfo.classList.toggle("show-sideInfo")
                        emailInfo.classList.toggle("show-emailInfo")
                        bottomInfo.classList.toggle("show-bottomInfo")
                        nameElement.classList.remove("show-name");
                        arrow.classList.remove("show-name")
                    }
                    if (currentSection == 1) {
                        sideProjectInfo.classList.toggle("show-sideInfo")
                        sideInfo.classList.remove("show-sideInfo")
                        bottomInfo.classList.remove("show-bottomInfo")
                    }
                    setTimeout(function () {
                        document.getElementById(titles[currentSection]).classList.toggle("show-name")
                        for (let i = 0; i < titles.length; i++) {
                            if (currentSection != i) {
                                document.getElementById(titles[i]).classList.remove("show-name")
                            }
                        }
                    }, 500);
                    this.window.location.href = sections[currentSection + 1];
                    currentSection++;
                    console.log('scrolling down and currentsection=>', currentSection);
                    e.preventDefault();
                }
            } else if (scrollTopPosition < lastScrollTop) {
                if (currentSection == 0) {

                }
                else {
                    if (currentSection == 1) {
                        navbar.classList.remove("show-navbar");
                        sideInfo.classList.remove("show-sideInfo")
                        emailInfo.classList.remove("show-emailInfo")
                        bottomInfo.classList.remove("show-bottomInfo")
                        setTimeout(function () {
                            arrow.classList.toggle("show-name")
                        }, 1300);
                    }
                    if (currentSection == 2) {
                        sideInfo.classList.toggle("show-sideInfo")
                        bottomInfo.classList.toggle("show-bottomInfo")
                        sideProjectInfo.classList.remove("show-sideInfo")
                    }
                    setTimeout(function () {
                        document.getElementById(titles[currentSection]).classList.toggle("show-name")
                        for (let i = 0; i < titles.length; i++) {
                            if (currentSection != i) {
                                document.getElementById(titles[i]).classList.remove("show-name")
                            }
                        }
                    }, 500);
                    this.window.location.href = sections[currentSection - 1];
                    currentSection--;
                    console.log('scrolling up and currentsection=>', currentSection);
                    e.preventDefault();
                }

            }
            setTimeout(() => {
                scrolling = false;
                document.body.style.overflowY = 'auto';
                lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            }, 1500);
        }

    },
    false,
);
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        nameElement.classList.toggle("show-name")
    }, 1000);
    setTimeout(function () {
        arrow.classList.toggle("show-name")
    }, 1300);
});

document.getElementById("down").addEventListener("click", function () {
    setTimeout(function () {
        arrow.classList.remove("show-name")
    }, 1000);
    window.location.href="#aboutMe"
})

