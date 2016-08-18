function display()
{
	document.getElementById("demo").innerHTML="Output Display";
}
function inputElement()
{
	var number= 5;
	document.getElementById("demo").value = number;
}
function addition()
{
	var input_one=parseInt(document.getElementById("txt1").value);
	var input_two=parseInt(document.getElementById("txt2").value);
	var input_three=parseInt(document.getElementById("txt3").value);
	var output = input_one + input_two + input_three;
	document.getElementById("demo").innerHTML ="Output is:"+ output;
}
var calculation={
	subtract :function()
	{
		console.log('execute');
		var value1=document.getElementById("txt1").value;
		var value2=document.getElementById("txt2").value;
		output=value1 - value2;
		document.getElementById("demo").innerHTML="Substraction is" +output;
	}
}
function People(name,address,age)
{
	this.name=name;
	this.address=address;
	this.age=age;
}
var friend=new People("sagar","pune","22");
friend.property=function()
{
	this.nickname="golu";	
	window.alert("nickname is " + this.nickname );
}
function variabletype()
{
	document.getElementById("demo").innerHTML=typeof(document.getElementById("txt1").value);
}
function addelement()
{
 var heading=document.createElement("heading");
 var text=document.createTextNode("This is a Heading");
 heading.appendChild(text);
 document.getElementById("div").appendChild(heading);
}