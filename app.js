


HightCalculator=function()
{
	t = document.getElementById("timeinput").value;
	
	if(t==0) {
		alert("dosent work like that")
	}
	else if (t==1){
		alert("the hight is 5.9")
	}else if (t<0){
		alert("we cant go back in time")
	}
	else {
		h=t*t*0.5*9.8
		document.getElementById("hightoutput").value =h
	}
	
}