
// verander header kleur

const header = document.querySelector('.header');

window.onscroll = function(){
	var top = window.scrollY;
	console.log(top);
	if (top >= 20){
		header.classList.add('scroll');
	}
	else{
		header.classList.remove('scroll');
	}
}

// source: https://www.youtube.com/watch?v=Tdkuk9uDTfM



