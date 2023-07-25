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
const navbar = document.getElementById("navbar");
const sideInfo = document.getElementById("SideInfo");
const emailInfo = document.getElementById("EmailInfo");
const bottomInfo = document.getElementById("BottomInfo");
const sideProjectInfo = document.getElementById("SideProjectInfo");
function switchSlide(number, project, event) {
    let list;
    if (project == "mobala") {
        list = mobala
    }
    else if (project == "adamjee") {
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

function switchFromClick(number, project, event) {
    number = number + 1
    let list;
    let limit;
    let siblings;
    if (project == "mobala") {
        list = mobala
        limit = 6
    }
    else if (project == "adamjee") {
        list = adamjee
        limit = 6
    }
    else if (project == "sbzimandi") {
        list = sbzimandi
        limit = 2
    }
    if (event.target.localName == "div") {
        siblings = Array.from(event.target.parentNode.parentNode.children);
    }
    else {
        siblings = Array.from(event.target.parentNode.parentNode.parentNode.children);
    }
    siblings = Array.from(siblings[1].children);
    if (number > limit) {
        number = 0
    }
    siblings.forEach((element, index) => {
        if (index == number) {
            element.classList.toggle("cicle-fill");
            document.getElementById(list[index]).style.display = "flex"
        }
        else {
            element.classList.remove("cicle-fill")
            document.getElementById(list[index]).style.display = "none"
        }
    })
}

document.getElementById("down").addEventListener("click", function () {
    scrolling = true
    document.querySelector("#aboutMe").scrollIntoView();
    navbar.classList.toggle("show-navbar");
    sideInfo.classList.toggle("show-sideInfo")
    emailInfo.classList.toggle("show-emailInfo")
    bottomInfo.classList.toggle("show-bottomInfo")
    nameElement.classList.remove("show-name");
    arrow.classList.remove("show-name")
    setTimeout(function () {
        document.getElementById(titles[currentSection]).classList.toggle("show-name")
        for (let i = 0; i < titles.length; i++) {
            if (currentSection != i) {
                document.getElementById(titles[i]).classList.remove("show-name")
            }
        }
    }, 500);
    currentSection++;
    setTimeout(function () {
        scrolling = false
    }, 1000);
})
document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.querySelector("#me");
    const section2 = document.querySelector("#aboutMe");

    document.addEventListener("wheel", function (event) {
        if (scrolling == true) {

        }
        else {
            event.preventDefault();
            scrolling = true
            if (event.deltaY > 0) {
                const toSection = document.querySelector(sections[currentSection + 1]);
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
                    toSection.scrollIntoView()
                    currentSection++;
                    console.log('scrolling down and currentsection=>', currentSection);
                }

            } else {
                const toSection = document.querySelector(sections[currentSection - 1]);
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
                    toSection.scrollIntoView()
                    currentSection--;
                    console.log('scrolling up and currentsection=>', currentSection);

                }
            }
            setTimeout(function () {
                scrolling = false
            }, 1000);
        }
    });
    if (window.location.hash == "" || window.location.hash == "me") {
        setTimeout(function () {
            nameElement.classList.toggle("show-name")
        }, 1000);
        setTimeout(function () {
            arrow.classList.toggle("show-name")
        }, 1300);
    }
});
