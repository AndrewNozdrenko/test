var slider = document.getElementById('slider'),
	display = document.getElementsByClassName('display')[0],
	bodyElement = document.getElementsByTagName('body')[0],
	legend = document.getElementsByClassName('g-legend'),
	lever = document.getElementsByClassName('lever')[0],
	balance = document.getElementsByClassName('balance'),
	inputs = document.getElementsByTagName('input');
	clickOnSlider = false,
	clickBtn = false,
	coordinateX = 0,
	coordinateY = 0;

function activatedAnimate(){
	if(bodyElement.classList.contains('animate')){
		bodyElement.classList.remove('animate');
	}
	else{
		bodyElement.classList.add('animate');
	}
	clickOnSlider = false;
}
bodyElement.onload = function(){
	bodyElement.classList.add('animate');
}
slider.onmousedown = function(e){
	clickOnSlider = true;
	coordinateX = e.pageX;
	coordinateY = e.pageY;
}

slider.onmouseup = function(){
	clickOnSlider = false;
}

slider.onmousemove = function(e){
	var temp = coordinateY - e.pageY,
		stringOfPosition = display.style.webkitTransform,
		getPosition = stringOfPosition.substring(stringOfPosition.indexOf('(')+1, stringOfPosition.indexOf('px'));

	if(getPosition === '')
	{
		getPosition = 0;
	}
	if(temp >= 10 && temp <= 20 && clickOnSlider == true && getPosition > -1200){
		getPosition = parseInt(getPosition) - 600;
		display.style.webkitTransform = 'translateY('+ getPosition + 'px)';
		activatedAnimate();
	}
	else if(temp < -10 && temp > -20  && clickOnSlider == true && getPosition < 0){
		getPosition = parseInt(getPosition) + 600;
		display.style.webkitTransform = 'translateY('+ String(getPosition) + 'px)';
		activatedAnimate();
	}
}

legend[0].onclick = function(){
	if(lever.classList.contains('right-rotate')){
		lever.classList.remove('right-rotate');
		lever.classList.add('left-rotate');
	}
	else{
		lever.classList.add('left-rotate');
	}
	if(balance[0].classList.contains('left-balanse-right-translate')){
		balance[0].classList.remove('left-balanse-right-translate');
		balance[1].classList.remove('right-balanse-right-translate');

		balance[0].classList.add('left-balanse-left-translate');
		balance[1].classList.add('right-balanse-left-translate');
	}
	else{
		balance[0].classList.add('left-balanse-left-translate');
		balance[1].classList.add('right-balanse-left-translate');
	}
}

legend[1].onclick = function(){
	if(lever.classList.contains('left-rotate')){
		lever.classList.remove('left-rotate');
		lever.classList.add('right-rotate');
	}
	else{
		lever.classList.add('right-rotate');
	}
	if(balance[1].classList.contains('right-balanse-left-translate')){
		balance[0].classList.remove('left-balanse-left-translate');
		balance[1].classList.remove('right-balanse-left-translate');

		balance[0].classList.add('left-balanse-right-translate');
		balance[1].classList.add('right-balanse-right-translate');
	}
	else{
		balance[0].classList.add('left-balanse-right-translate');
		balance[1].classList.add('right-balanse-right-translate');
	}
}

inputs[0].oninput = function(){
	var a, b, c, w, d, g, enterValue, sum, multiplay,
		outputs = document.getElementsByTagName('output');
	enterValue = this.value;

	b = 182*(0.122*enterValue);
	c = 16*(enterValue-(0.122*enterValue));
	sum = b + c;
	outputs[0].value = sum;

	w = enterValue-(enterValue*0.122);
	d = 14;
	multiplay = d*w;
	outputs[1].value = multiplay;

	g = c * 0.064;
	outputs[2].value = g.toFixed(2);

	a = 3*(0.52*enterValue);
	outputs[3].value = a;
}