document.addEventListener("DOMContentLoaded", function (e) {
    const Scorpion = {
        name: "SCORPION",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
        weapon: ["sekira", "kunai", "bow"],
        attack: () => {
            console.log(this.name + " " + "Fight!");
        }

    };
    const SubZero = {
        name: "SUB-ZERO",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
        weapon: ["sekira", "kunai", "bow"],
        attack: () => {
            console.log(this.name + " " + "Fight!");
        }
    };
    function CreatePlayer(player, { name, img }) {
        const $player = document.createElement("div");
        $player.classList.add(player);

        const $progressBar = document.createElement("div");
        $progressBar.classList.add("progressbar");
        const $character = document.createElement("div");
        $character.classList.add("character");

        $player.appendChild($character);
        $player.appendChild($progressBar);

        const $life = document.createElement("div");
        $life.classList.add("life");
        $life.style.width = "100%";

        const $name = document.createElement("div");
        $name.classList.add("name");
        $name.innerText = name;

        $progressBar.appendChild($life);
        $progressBar.appendChild($name);

        const $img = document.createElement("img");
        $img.src = img;

        $character.appendChild($img);

        const $arenas = document.querySelector(".arenas");
        $arenas.appendChild($player);
    }
    CreatePlayer("player1", Scorpion);
    CreatePlayer("player2", SubZero);

});