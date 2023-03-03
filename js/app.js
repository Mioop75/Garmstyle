function burgerFunc() {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".nav");

	if (burger) {
		burger.addEventListener("click", () => {
			if (!menu.classList.contains("nav--active")) {
				menu.classList.add("nav--active");
				burger.classList.add("burger--active");
				document.body.classList.add("locked");
			} else {
				menu.classList.remove("nav--active");
				burger.classList.remove("burger--active");
				document.body.classList.remove("locked");
			}
		});
	}
}

burgerFunc();

if (window.innerWidth < 576) {
	const swiper = new Swiper(".collection .container", {
		wrapperClass: "collection__grid",
		slideClass: "collection-item",
		slidesPerView: 3,
		spaceBetween: 18,

		scrollbar: {
			el: ".collection__scrollbar",
			draggable: true,
		},
	});
}
