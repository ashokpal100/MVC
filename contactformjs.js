
function contactFormData()
{
	var data = {};
	data.sName=document.getElementById("name").value;
	if (document.getElementById('radioGenValue1').checked) 
	{
  		data.sGender= document.getElementById('radioGenValue1').value;
	}
	else
	{
		data.sGender=document.getElementById('radioGenValue2').value;
	}
	data.sEmail=document.getElementById("email").value;
	if (document.getElementById('checkSubValue1').checked) 
	{
  		data.sSubject1= document.getElementById('checkSubValue1').value;
	}
	if(document.getElementById('checkSubValue2').checked) 
	{
		data.sSubject2=document.getElementById('checkSubValue2').value;
	}
	if(document.getElementById('checkSubValue3').checked)
	{
		data.sSubject3=document.getElementById('checkSubValue3').value;
	}
	data.sAddress=document.getElementById("address").value;
	var selectionId = document.getElementById("year");
	data.sYear= selectionId .options[selectionId .selectedIndex].value;
	console.log(data);
}





