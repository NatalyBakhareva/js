/**
 * Created by Root on 24.07.14.
 */

var fio,
    login,
    pass,
    pass2,
    textArea,
    isvalid = true;

validate = function(){
    validFio();
    validLogin();
    validPass();
    validPass2();
    validAbout();

    if(validFio()&&validLogin()&&validPass()&&validPass2()&&validAbout())
    {
    	return true;
    }

        
}



function validFio(){
    fio = $('#fio').val();
    var expFio = /^[а-яА-Я ]+$/g;
    var resFio = fio.search(expFio);

    if(resFio == -1 || fio==false){
        $("#fio").next().text("Fill this field. In Cirillic, please").css("color","red");
        return false;
    }
    else{
        $("#fio").next().text("Yes").css("color","green");
        return true;
    }
}


function validLogin(){
    login = $('#login').val();
    var expLogin = /^[a-zA-Z0-9_]+$/g;
    var resLogin = login.search(expLogin);

    if(resLogin == -1 || login==false){
        $("#login").next().text("Login must contain only digits or latin letters and must be filled").css("color","red");
        return false;
    }
    else{
        $("#login").next().text("Yes").css("color","green");
        return true;
    }
}


 function validPass(){
    pass = $('#pass').val();
    var expPass = /^[a-zA-Z0-9_]+$/g;
    var resPass = pass.search(expPass);

    if(resPass == -1 || pass==false || pass.length<8){
        $("#pass").next().text("Must be over 8 char. Only latin and punctuation marks").css("color","red");
        return false
    }
    else{
        $("#pass").next().text("Yes").css("color","green");
        return true;
    }
}


function validPass2(){
    pass2 = $('#pass2').val();
    pass = $("#pass").val();

    if(pass2 != pass){
        $("#pass2").next().text("Passwords do not match").css("color","red");
        return false
    }
    else{
        $("#pass2").next().text("Yes").css("color","green");
        return true;
    }
}


function validAbout(){
    textArea = $('#textarea').val();

    if(textArea == false){
        $('#textarea').next().text("Fill this, Phil!").css("color","red");
        return false
    }
    else{
        $('#textarea').next().text("Yes").css("color","green");
        return true;
    }
}

$(function(){

    //ФамилияИмяОтч
    $("#fio").keyup(validFio);
    //Логин
    $("#login").keyup(validLogin);
    //Пароли
    $("#pass").keyup(validPass);
    //Подтверждение
    $("#pass2").keyup(validPass2);
    //О себе
    $("#textarea").keyup(validAbout);

});



/******************************************Ajax*******************************************************/

 send = function(isvalid1){

 	if(isvalid1==true){
                $.ajax({
                    url: "action.php", //Адрес подгружаемой страницы
                    type:     "POST", //Тип запроса
                    dataType: "html", //Тип данных
                    data: {
                    	fio: $('#fio').val(),
                    	login: $('#login').val(),
                    	pass: $('#pass').val(),
                    	about: $('#textarea').val(),

                    }, 
                    success: function(response) { //Если все нормально
                    $("#myDiv").html(response);
                },
                error: function(response) { //Если ошибка
                $("#myDiv").val("Ошибка при отправке формы");
                }
             });

         $('#regform').trigger('reset');
         $("span","#regform").text("");

        }
    }

