/*
* Fakulta informačních technologií VUT v Brně
* Javascriptová knihovna funkcí pro stránku
* Autor: Petr Kotek
* File: script.js
* */
// pockani na uplne nacteni stranky
document.addEventListener("DOMContentLoaded", () => {

	const button = document.getElementById("hamburger");
	const icon = button.querySelector('i');
	const navMenu = document.querySelector('.nav-menu');

	const backToTopButton = document.getElementById("btnTop");
	backToTopButton.addEventListener("click", backToTop)
	button.addEventListener('click', toggleMenu);

	function toggleMenu() {
		icon.classList.toggle('fa-bars');
		icon.classList.toggle('fa-xmark');
		navMenu.classList.toggle('active');
	}
	window.onscroll = function() {backToTopShow()};

	function backToTopShow() {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			// nastavení třídy block, pro zobrazení
			backToTopButton.style.display = "block";
		}else{
			// jakmile se nacházím nahoře, nebo ve vymezeném intervalu, tlačítko se nezobrazí
			backToTopButton.style.display = "none";
		}
	}
	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
});


document.addEventListener("DOMContentLoaded", () => {
	// video section
	const media = document.querySelector("video");
	const controls = document.querySelector(".video-controls");
	const mute = document.querySelector(".mute");
	const repeat = document.querySelector(".repeat");
	const iconMute = mute.querySelector('i');

	media.addEventListener("click", playPause);
	function playPause() {

		if (media.paused){
			media.setAttribute("playing", "true");
			media.play();
			controls.classList.add('controls-active');
		}else{
			media.setAttribute("playing", "false");
			media.setAttribute("paused", "");
			media.pause();
			controls.classList.remove('controls-active');
		}

		if (media.getAttribute("playing") === "true") {
			videoPlayer.classList.remove('play-button');
		}
	}
	// mute, unmute
	mute.addEventListener("click", muteVideo);
	function muteVideo() {
		//nastaveni ikonek
		iconMute.classList.toggle('fa-volume-high');
		iconMute.classList.toggle('fa-volume-xmark');
		if (media.muted){

			media.muted = false;
		}else{
			media.muted = true;
		}
	}
	// resetuje video na zacatek
	repeat.addEventListener("click", repeatVideo);
	function repeatVideo() {
		media.currentTime = 0;
	}

	// nastaveni proklikavaciho textu pod videem
	const captions = document.querySelectorAll(".video-typescript");

	captions.forEach(caption => {
		caption.addEventListener("click", () => {
			const time = parseFloat(caption.getAttribute("aria-time")); // prevedeni hodnoty z aria-time na float hodnotu, kterou bude potom nastaven aktualni cas videa
			media.currentTime = time; // nastaveni videa do prideleneho casu
			media.play(); // pusteni videa
			controls.classList.add('controls-active'); // zobrazeni ikonek na ovladani
		});
	});


	media.removeAttribute("controls");
	controls.style.visibility = "visible";
})

// nastaveni rolovaciho menu pod videem
document.addEventListener("DOMContentLoaded", () => {
	// accordion
	const accordion = document.querySelector(".accordion");
	accordion.addEventListener("click", toggleAccordion);

	function toggleAccordion() {
		const panel = document.querySelector(".accordion-content");
		panel.classList.toggle('accordion-active'); // nastaveni potrebnych trid pro zmenu vzhledu
		accordion.classList.toggle('accordion-active-top');
	}
})
