var divs = ['div1', 'div2']; /*add additional div ids here*/

function showHiddenDiv(id) {
	hideVisibleDiv();
	var e = document.getElementById(id);

  if(e.style.left == '0px')
    e.style.left = '-500px';
  else
    e.style.left = '0px';
}

function hideVisibleDiv() {
  var i, divId, div;

  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);

  if(div.style.left == '0px')
  	div.style.left = '-500px';
  }
}
