//бургер

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

//випадающе меню
let body = document.querySelector('body');
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

if(isMobile.any()){
		body.classList.add('touch');
		let arrow = document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
};

//swiper
new Swiper('.swiper', {
	//стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	//скроллбар
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},

	//бескінечність
	loop: true,
	
	//автопрокрутка
	autoplay: {
		//пауза між прокруткою
		delay: 5000,
		//закінчити на останьому слайді
		stopOnLastSlide: false,
		//виключити після ручного переключення
		disableOnInteraction: false
	},
	
	//швидкість
	speed: 800,
});