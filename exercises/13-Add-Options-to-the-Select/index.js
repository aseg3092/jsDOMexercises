window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
  for(let i=0;i< countries.length;i++)
  {
	  let elem = document.createElement("option");
	  elem.text= countries[i];
	  elem.value=i;
	  document.querySelector("#mySelect").options.add(elem);
  }
  document.getElementById('mySelect').addEventListener('change', function() {
	alert('You selected: '+this.selectedOptions[0].text);
  });

};
