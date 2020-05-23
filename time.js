function showTime(){
	let date = new Date();
	let h = date.getHours(); 
	let m = date.getMinutes(); 
	let s = date.getSeconds(); 
	let period = "AM";

	if(h === 0){
		h = 12;
	}
	if(h > 12){
		h -=12;
		period = "PM";
	}
	h = (h < 10) ? "0" + h: h;
	m = (m < 10) ? "0" + m: m;
	s = (s < 10) ? "0" + s: s;

	var time = h + ":" + m + ":" + s + " " + period;

	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").innerContent = time;

	setTimeout(showTime, 1000);
}

showTime()