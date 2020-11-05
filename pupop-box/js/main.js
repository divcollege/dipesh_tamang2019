setTimeout(function(){
			document.getElementById('show-popup').style.display = 'flex';
			document.getElementById('main').style.background = '#c6c2c2';
		},2000);
		

		function hideBtn(){
			document.getElementById('show-popup').style.display = 'none';
			document.getElementById('main').style.background = '#8890e2';
		}



var time = 12;
var count = setInterval(function(){
	time--;
	document.getElementById('timer').innerHTML = time ;
	if (time<=0) {clearInterval(count);}
	if(time ==0){
		
		document.getElementById('show-popup').style.display = 'none';
	}
},1000);

