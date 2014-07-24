/**
 * Created by Root on 24.07.14.
 */

var fio,
    login,
    pass,
    pass2,
    textArea,
    marker1,marker2,marker3,marker4,marker5;

validate = function(){

    $("#fio").trigger('keyup');
    $("#login").trigger('keyup');
    $("#pass").trigger('keyup');
    $("#pass2").trigger('keyup');
    $("#textarea").trigger('keyup');


    return (marker1&&marker2&&marker3&&marker4&&marker5);

}

$(function() {

    //Фио
    $("#fio").keyup(function(){
        fio = $(this).val();
        var expFio = /^[а-яА-Я ]+$/g;
        var resFio = fio.search(expFio);

        if(resFio == -1 || fio==false)
        {
            $("#fio").next().text("Fill this field. In Cirillic, please").css("color","red");
            marker1 = false;
        }
        else
        {
            $("#fio").next().text("Yes").css("color","green");
            marker1 = true;
        }
    })


    //Логин
    $("#login").keyup(function(){
        login = $(this).val();
        var expLogin = /^[a-zA-Z0-9_]+$/g;
        var resLogin = login.search(expLogin);

        if(resLogin == -1 || login==false)
        {
            $("#login").next().text("Login must contain only digits or latin letters and must be filled").css("color","red");
            marker2 = false;
        }
        else
        {
            $("#login").next().text("Yes").css("color","green");
            marker2 = true;

        }
    })



    //Пароли
    $("#pass").keyup(function(){
        pass = $(this).val();
        var expPass = /^[a-zA-Z0-9_]+$/g;
        var resPass = pass.search(expPass);

        if(resPass == -1 || pass==false || pass.length<8)
        {
            $("#pass").next().text("Must be over 8 char. Only latin and punctuation marks").css("color","red");
            marker3 = false;
        }
        else
        {
            $("#pass").next().text("Yes").css("color","green");
            marker3 = true;
        }
    })


    $("#pass2").keyup(function(){
        pass2 = $(this).val();
        pass = $("#pass").val();

        if(pass2 != pass)
        {
            $("#pass2").next().text("Passwords do not match").css("color","red");
            marker4 = false;
        }
        else
        {
            $("#pass2").next().text("Yes").css("color","green");
            marker4 = true;
        }
    })



    //О себе
    $("#textarea").keyup(function(){
        textArea = $(this).val();

        if(textArea == false){
            $(this).next().text("Fill this, Phil!").css("color","red");
            marker5 = false;
        }
        else{
            $(this).next().text("Yes").css("color","green");
            marker5 = true;
        }
    })

});