var slider = document.getElementById('slider'),
	display = document.getElementsByClassName('display')[0],
	bodyElement = document.getElementsByTagName('body')[0],
	legend = document.getElementsByClassName('g-legend'),
	lever = document.getElementsByClassName('lever')[0],
	balance = document.getElementsByClassName('balance'),
	inputs = document.getElementsByTagName('input'),
	outputs = document.getElementsByTagName('output'),
	clickOnSlider = false,
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
	if(temp >= 80 && clickOnSlider == true && getPosition > -1200){
		getPosition = parseInt(getPosition) - 600;
		display.style.webkitTransform = 'translateY('+ getPosition + 'px)';
		activatedAnimate();
	}
	else if(temp <= -80 && clickOnSlider == true && getPosition < 0){
		getPosition = parseInt(getPosition) + 600;
		display.style.webkitTransform = 'translateY('+ getPosition + 'px)';
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
	var a, b, c, w, d, g, enterValue, sum, multiply;
	enterValue = this.value;

	b = 182*(0.122*enterValue);
	c = 16*(enterValue-(0.122*enterValue));
	sum = b + c;
	outputs[0].value = sum.toFixed(2);

	w = enterValue-(enterValue*0.122);
	d = 14;
	multiply = d*w;
	outputs[1].value = multiply.toFixed(2);

	g = c * 0.064;
	outputs[2].value = g.toFixed(2);

	a = 3*(0.52*enterValue);
	outputs[3].value = a.toFixed(2);
}

inputs[1].oninput = function(){
	var b, c, w, d, sum, multiply, enterValue, result;
	enterValue = this.value;

	b = 182*(enterValue*0.176);
	c = 16*(enterValue-0.176*enterValue);
	sum = b + c;
	outputs[4].value = sum.toFixed(2);

	w = enterValue-(enterValue*0.176);
	d = 14;
	multiply = w * d;
	outputs[5].value = multiply.toFixed(2);

	result = enterValue * 0.896;
	outputs[6].value = result.toFixed(2);
}