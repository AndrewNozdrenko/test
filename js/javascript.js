var slider = document.getElementById('slider'),
	display = document.getElementsByClassName('display')[0],
	bodyElement = document.getElementsByTagName('body')[0],
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
	if(temp >= 10 && temp <= 20 && clickOnSlider == true && getPosition > -1000){
		getPosition = parseInt(getPosition) - 500;
		display.style.webkitTransform = 'translateY('+ getPosition + 'px)';
		clickOnSlider = false;
		activatedAnimate();
	}
	else if(temp < -10 && temp > -20  && clickOnSlider == true && getPosition < 0){
		getPosition = parseInt(getPosition) + 500;
		display.style.webkitTransform = 'translateY('+ String(getPosition) + 'px)';
		clickOnSlider = false;
		activatedAnimate();
	}
}