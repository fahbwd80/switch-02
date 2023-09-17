var numberOfAnimalButtons = document.querySelectorAll(".bike").length;

for (var i = 0; i <numberOfAnimalButtons; i++) {

    document.querySelectorAll(".bike")[i].addEventListener("click", function() {

    
        var buttons = this.innerText;
        buttonAnimation(buttons)
        playSound(buttons);
    })
}
    document.addEventListener("keydown", function(e) {
        buttonAnimation(e.key)
        playSound(e.key)
    })

        function playSound(key){
        switch (key) {
            case "q":
                var mtb1 = new Audio ("sounds/ginagawaMo.mp3");
                mtb1.play();
                break;
            case "w":
                var mtb2 = new Audio ("sounds/talon.mp3");
                mtb2.play();
                break;
            case "e":
                var mtb3 = new Audio ("sounds/million.mp3");
                mtb3.play();
                break;
            case "r":
                var mtb4 = new Audio ("sounds/omg.mp3");
                mtb4.play();
                break;
            case "t":
                var mtb4 = new Audio ("sounds/pogi.mp3");
                mtb4.play();
                break;
            case "y":
                var mtb4 = new Audio ("sounds/dumbDie.mp3");
                mtb4.play();
                break;
            default:console.log(key);
                break;
        }
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        console.log(activeButton)

        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove ("pressed");
        }, 1000);
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        console.log(activeButton);

        if (currentKey === "q") {
            activeButton.classList.add("image-q");
            setTimeout(function() {
                activeButton.classList.remove("image-q");
            }, 1000);

        } else if (currentKey === "w") {
            activeButton.classList.add("image-w");
            setTimeout(function() {
                activeButton.classList.remove("image-w");
            }, 4000);

        } else if (currentKey === "e") {
            activeButton.classList.add("image-e");
            setTimeout(function() {
                activeButton.classList.remove("image-e");
            }, 2000);

        } else if (currentKey === "r") {
            activeButton.classList.add("image-r");
            setTimeout(function() {
                activeButton.classList.remove("image-r");
            }, 1800);

        } else if (currentKey === "t") {
            activeButton.classList.add("image-t");
            setTimeout(function() {
                activeButton.classList.remove("image-t");
            }, 6000);

        } else if (currentKey === "y") {
            activeButton.classList.add("image-y");
            setTimeout(function() {
                activeButton.classList.remove("image-y");
            }, 3000);

        }
    }