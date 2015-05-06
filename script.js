function OnReady() {
  console.log("Pagina geladen, DOM klaar voor gebruik.");
}
$(document).ready(OnReady);

function OnFocus() {
	style.visibility = "visible";
}
$(document).ready($('p_Naam').focus(OnFocus));

function OnBlur() { 
	style.visibility = "hidden";
}
$(document).ready($('p_Naam').blur(OnBlur));