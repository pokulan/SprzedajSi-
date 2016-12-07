function trig(x){
  console.log("klik");
  if(x == 1){
    $("#wskLog").css({ opacity: 1 });
    $("#wskReg").css({ opacity: 0 });

    document.getElementById("action_bar").innerHTML = "<form>"
      + '<div class="control-group col-xs-12 col-md-12" style="padding-bottom: 1%">'
      + '<input type="text" value="" class="form-control" id="mail" placeholder="e-mail">'
      + '</div>'
      + '<div class="control-group col-xs-12 col-md-12" style="padding-bottom: 1%">'
      + '<input type="text" value="" class="form-control" id="haslo" placeholder="hasło">'
      + '</div>'
      + '<button class="btn" style="margin-top: 1%">Zaloguj</button>'
      + '</form>';


  }else if(x == 2){
    $("#wskLog").css("opacity", "0");
    $("#wskReg").css("opacity", "1");

    document.getElementById("action_bar").innerHTML = "<form>"
      + '<div class="control-group col-xs-12 col-md-12" style="padding-bottom: 1%">'
      + '<input type="text" value="" class="form-control" id="mail" placeholder="E-mail">'
      + '</div>'
      + '<div class="control-group col-xs-12 col-md-12" style="padding-bottom: 1%">'
      + '<input type="text" value="" class="form-control" id="mail" placeholder="Nick">'
      + '</div>'
      + '<div class="control-group col-xs-12 col-md-12" style="padding-bottom: 1%">'
      + '<input type="text" value="" class="form-control" id="haslo" placeholder="Hasło">'
      + '</div>'    
      + '<div class="control-group col-xs-12 col-md-12" style="padding-bottom: 1%">'
      + '<input type="text" value="" class="form-control" id="hasloAgain" placeholder="Powtórz hasło">'
      + '</div>'
      + '<button class="btn" style="margin-top: 1%">Zarejestruj</button>'
      + '</form>';

  }
}
