var slider = document.getElementById('slider'),
	display = document.getElementsByClassName('display')[0];
	clickOnSlider = false,
	coordinateX = 0,
	coordinateY = 0;

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
	if(getPosition == '')
	{
		getPosition = 0;
	}
	if(temp > 10 && temp < 20 && clickOnSlider === true){
		getPosition = parseInt(getPosition) - 500;
		display.style.webkitTransform = 'translateY('+ String(getPosition) + 'px)';
	}
	else if(temp < -10 && temp > -20  && clickOnSlider === true){
		getPosition = parseInt(getPosition) + 500;
		display.style.webkitTransform = 'translateY('+ String(getPosition) + 'px)';
	}
}