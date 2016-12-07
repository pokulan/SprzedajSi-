function trig(x){
  console.log("klik");
  if(x == 1){
    $("#wskLog").css({ opacity: 1 });
    $("#wskReg").css({ opacity: 0 });

    document.getElementById("action_bar").innerHTML = "<form>"
      + '<div class="control-group col-xs-12 col-md-12" style="padding-left: 20px; padding-right: 20px; margin-bottom: 8px;">'
      + '<input type="text" value="" class="form-control" id="mail" placeholder="E-mail">'
      + '</div>'
      + '<div class="control-group col-xs-12 col-md-12" style="padding-left: 20px; padding-right: 20px; margin-bottom: 8px;">'
      + '<input type="password" value="" class="form-control" id="haslo" placeholder="Hasło">'
      + '</div>'
      + '<button class="btn" style="margin-top: 1%; margin-bottom: 10px;">Zaloguj się</button>'
      + '</form>';


  }else if(x == 2){
    $("#wskLog").css("opacity", "0");
    $("#wskReg").css("opacity", "1");

    document.getElementById("action_bar").innerHTML = "<form>"
      + '<div class="control-group col-xs-12 col-md-12" style="padding-left: 20px; padding-right: 20px; margin-bottom: 8px;">'
      + '<input type="text" value="" class="form-control" id="mail" placeholder="E-mail">'
      + '</div>'
	  + '<div class="control-group col-xs-6 col-md-6" style="padding-left: 20px; padding-right: 20px; margin-bottom: 8px;">'
      + '<input type="text" value="" class="form-control" id="imie" placeholder="Imię">'
      + '</div>'
	  + '<div class="control-group col-xs-6 col-md-6" style="padding-left: 20px; padding-right: 20px; margin-bottom: 8px;">'
      + '<input type="text" value="" class="form-control" id="nazwisko" placeholder="Nazwisko">'
      + '</div>'
      + '<div class="control-group col-xs-12 col-md-12" style="padding-left: 20px; padding-right: 20px; margin-bottom: 22px;">'
      + '<input type="text" value="" class="form-control" id="nick" placeholder="Nick">'
      + '</div>'
      + '<div class="control-group col-xs-12 col-md-12" style="padding-left: 20px; padding-right: 20px; margin-bottom: 8px;">'
      + '<input type="password" value="" class="form-control" id="haslo" placeholder="Hasło">'
      + '</div>'    
      + '<div class="control-group col-xs-12 col-md-12" style="padding-left: 20px; padding-right: 20px; margin-bottom: 8px;">'
      + '<input type="password" value="" class="form-control" id="hasloAgain" placeholder="Powtórz hasło">'
      + '</div>'
      + '<button class="btn" disabled="false" id="regButt" onmouseover="checkData()" style="margin-top: 1%; margin-bottom: 10px;">Zarejestruj się</button>'
	  + '<div id="wrongFormula" style="color: #db8181; "></div>'
	  + '<div id="wrongPass" style="color: #db8181;"></div>'
      + '</form>';


  }
}

function checkData(){
	var wrong = false;
	var wrongPass = false;
	var string = "";
	string = document.getElementById("mail").value;
	if(string == "") wrong = true;
	string = document.getElementById("imie").value;
	if(string == "") wrong = true;
	string = document.getElementById("nazwisko").value;
	if(string == "") wrong = true;
	string = document.getElementById("nick").value;
	if(string == "") wrong = true;
	string = document.getElementById("haslo").value;
	if(string == "") wrong = true;
	string = document.getElementById("hasloAgain").value;
	if(string == "") wrong = true;
	if(wrong){
		document.getElementById("wrongFormula").innerHTML = "Uzupełnij formularz do końca!"
		document.getElementById("regButt").disabled = true;
	}
	else {
		document.getElementById("wrongFormula").innerHTML = "";
	}
	if(document.getElementById("haslo").value != document.getElementById("hasloAgain").value) wrongPass = true;
	if(wrongPass){
		document.getElementById("wrongPass").innerHTML = "Hasła nie są zgodne!";
		document.getElementById("regButt").disabled = true;
	 }
	else{ 
		document.getElementById("wrongPass").innerHTML = "";
		
	}
	if(!wrong && !wrongPass) document.getElementById("regButt").disabled = false;
}
