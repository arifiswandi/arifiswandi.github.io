document.onreadystatechange = function () {
    window.onscroll = function () {
        myFunction()
    };

    function myFunction() {
        let header = document.getElementById("header");
        let home = document.getElementById("home");
        let about = document.getElementById("about");
        let skills = document.getElementById("skills");
        // let contact = document.getElementById("contact");

        if (window.pageYOffset >= home.offsetTop) {
            header.classList.add("white");
        } else {
            header.classList.remove("white");
        }

        if (window.pageYOffset >= about.offsetTop) {
            header.classList.add("orchid");
        } else {
            header.classList.remove("orchid");
        }

        if (window.pageYOffset >= skills.offsetTop) {
            header.classList.add("orange");
        } else {
            header.classList.remove("orange");
        }
    };
}