/**
 * Created by Root on 24.07.14.
 */
//placeholder show and hide
$(document).ready(function(){
    $('#first').keyup(function(){
        if($('#first').val()=="")
        {
            $('#placeholder').show();
        }
        else
        {
            $('#placeholder').hide();
        }
    })
});