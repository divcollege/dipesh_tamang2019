

document.form.displaybar.style.fontSize = "22px";
function insert(num){
	document.form.displaybar.value = document.form.displaybar.value + num;

}
function equal(){
	var exp = document.form.displaybar.value;
	if (exp) {
		document.form.displaybar.value = eval(exp);
	}
}

function Clean(){
	
	document.form.displaybar.value = "";
}
function back(){
	var exp = document.form.displaybar.value;
	document.form.displaybar.value = exp.substring(0,exp.length-1);
}