try
{
	function cookies()
	{
		localStorage.setItem("name",document.getElementById("name").value);
	}
	function valid()
	{
		if(document.getElementById("location").value == "Select Value")
		{
			window.alert("Select Value from given list");
		}
		if(document.getElementById("password").value != document.getElementById("reenterpwd").value)
		{
			alert("Password Doesn't Match!");
		}
	}
}
catch(error)
{
	alert("error");
}
