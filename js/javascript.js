var slider = document.getElementById('slider'),
	display = document.getElementsByClassName('display')[0],
	bodyElement = document.getElementsByTagName('body')[0],
	legend = document.getElementsByClassName('g-legend'),
	lever = document.getElementsByClassName('lever')[0],
	balance = document.getElementsByClassName('balance'),
	inputs = document.getElementsByTagName('input'),
	outputs = document.getElementsByTagName('output'),
	buttons = document.getElementsByTagName('li'),
	clickOnSlider = false,
	clickMouseUp = false,
	coordinateY = 0;
const space = 700;

function activatedAnimate(getPosition){
	if(bodyElement.classList.contains('animate')){
		bodyElement.classList.remove('animate');
	}
	else{
		bodyElement.classList.add('animate');
	}
	clickOnSlider = false;
	function checkFooterDescription(positionElement){
		var footerText = document.getElementsByClassName("footer-text")[0];
		switch(positionElement){
			case 0 :
				footerText.innerHTML = "aXarelto is contraindicated in lesions or conditions, if they are considered to be a significant <br>risk for major<br> bleeding, which may include the presence of malignant neoplasms at high risk of bleeding. bOutcome: symptomatic, recurrent VTE.";
				break;
			case -space :
				footerText.innerHTML = "<sup>a</sup>Patients participating in EINSTEIN DVT trial had confirmed acute symptomatic DVT without symptomatic PE and completed two measures of treatment satisfaction;<br> ACTS (Anti Clot Treatment Scale) and TSQM (Treatment Satisfaction Questionnaire for Medication) in follow up visits.<sup>5,16</sup><br> <sup>b</sup>Score values given for burdens and benefits measured by ACTS; effectiveness, side effects, convenience and global satisfaction measured by TSQM scale.<sup>16</sup>";
				break;
			case -space * 2 :
				footerText.innerHTML = "Numbers provided are based on general epidemiological reserch and on trial experience from the Phase III Programme whith Xarelto. Helthcare practice<br> may be different in your country(both before and after introduction of Xarelto), and thus the estimation may not reflect your country's perspective<br> Actual costs are not included";
				break;
		}
	}

	checkFooterDescription(getPosition);

	balance[0].classList.remove('left-balanse-right-translate');
	balance[1].classList.remove('right-balanse-right-translate');
	balance[0].classList.remove('left-balanse-left-translate');
	balance[1].classList.remove('right-balanse-left-translate');
	lever.classList.remove('right-rotate');
	lever.classList.remove('left-rotate');

	inputs[0].value = "";
	inputs[1].value = "";
}
bodyElement.onload = function(){
	bodyElement.classList.add('animate');
}
slider.onmousedown = function(e){
	clickOnSlider = true;
	coordinateY = e.pageY;
}

slider.onmouseup = function(){
	clickMouseUp = true;
	setTimeout(function(){
		clickMouseUp = false;
	}, 10);
}

slider.onmousemove = function(e){
	var temp = coordinateY - e.pageY,
		stringOfPosition = display.style.webkitTransform,
		getPosition = stringOfPosition.substring(stringOfPosition.indexOf('(') + 1, stringOfPosition.indexOf('px'));

	if(getPosition === ''){
		getPosition = 0;
	}
	if(temp >= 50 && clickMouseUp === true && clickOnSlider == true && getPosition > -space * 2){
		getPosition = parseInt(getPosition) - space;
		display.style.webkitTransform = 'translateY(' + getPosition + 'px)';
		activatedAnimate(getPosition);
	}
	else if(temp <= -50 && clickMouseUp === true && clickOnSlider == true && getPosition < 0){
		getPosition = parseInt(getPosition) + space;
		display.style.webkitTransform = 'translateY(' + getPosition + 'px)';
		activatedAnimate(getPosition);
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

	b = 182 * (0.122 * enterValue);
	c = 16 * (enterValue - (0.122 * enterValue));
	sum = b + c;
	outputs[0].value = sum.toFixed(2);

	w = enterValue - (enterValue * 0.122);
	d = 14;
	multiply = d * w;
	outputs[1].value = multiply.toFixed(2);

	g = c * 0.064;
	outputs[2].value = g.toFixed(2);

	a = 3 * (0.52 * enterValue);
	outputs[3].value = a.toFixed(2);
}

inputs[1].oninput = function(){
	var b, c, w, d, sum, multiply, enterValue, result;
	enterValue = this.value;

	b = 182 * (enterValue * 0.176);
	c = 16 * (enterValue - 0.176 * enterValue);
	sum = b + c;
	outputs[4].value = sum.toFixed(2);

	w = enterValue - (enterValue * 0.176);
	d = 14;
	multiply = w * d;
	outputs[5].value = multiply.toFixed(2);

	result = enterValue * 0.896;
	outputs[6].value = result.toFixed(2);
}


buttons[1].onclick = function(e){
	bodyElement.classList.remove('animate');
	e.preventDefault();
	display.style.webkitTransform = 'translateY(' + 0 + 'px)';
	activatedAnimate(0);
}
buttons[2].onclick = function(e){
	e.preventDefault();
	display.style.webkitTransform = 'translateY(' + -space + 'px)';
	activatedAnimate(-space);
	bodyElement.classList.remove('animate');
}
buttons[3].onclick = function(e){
	e.preventDefault();
	display.style.webkitTransform = 'translateY(' + -space * 2 + 'px)';
	activatedAnimate(-space * 2);
	bodyElement.classList.remove('animate');
}