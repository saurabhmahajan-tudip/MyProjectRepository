function IsEmpty(input)
{
		var value=document.getElementById(input).value;
		if(value.trim()=== "")
		{
			return true;
		}
		else	
		{
			return false;
		}
}