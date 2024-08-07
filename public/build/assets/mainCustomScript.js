(function () {
		'use strict';
		let navbar_height;
		document.addEventListener("DOMContentLoaded", function () {
			window.addEventListener('scroll', function () {
				const currentScrollPosition = window.scrollY;
				navbar_height = document.querySelector('.top-main-navigation').offsetHeight;
				if (currentScrollPosition <= 0) {
					document.getElementById('mainNavHeader').classList.remove('fixed-top');
					document.body.style.paddingTop = '0';
				} else if (currentScrollPosition >= (document.body.clientHeight - window.innerHeight - 200)) {
					document.getElementById('mainNavHeader').classList.add('fixed-top');
					document.body.style.paddingTop = navbar_height + 'px';
				} else {
					document.getElementById('mainNavHeader').classList.add('fixed-top');
					document.body.style.paddingTop = navbar_height + 'px';
				}
			});
		});
	})();
