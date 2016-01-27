
function getdata()
{
	var data = {};

	data.sName=document.getElementById("name").value;
	data.sAge=document.getElementById("age").value;

	if (document.getElementById('r1').checked) 
	{
  		data.sGender= document.getElementById('r1').value;
	}
	else
	{
		data.sGender=document.getElementById('r2').value;
	}

	if (document.getElementById('c1').checked) 
	{
  		data.sSubject1= document.getElementById('c1').value;
	}
	if(document.getElementById('c2').checked) 
	{
		data.sSubject2=document.getElementById('c2').value;
	}
	if(document.getElementById('c3').checked)
	{
		data.sSubject3=document.getElementById('c3').value;
	}
	var e = document.getElementById("yr");
	data.sYear= e.options[e.selectedIndex].value;
	data.sEmail=document.getElementById("email").value;
	data.sPhone=document.getElementById("phone").value;

	console.log(data);

}





