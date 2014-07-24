/**
 * Created by Root on 24.07.14.
 */

$(document).ready(function(){
    var count = 0;  //counter of checked box
    var num = 10;   //count of generated checkbox

    //generate checkbox
    $('#secondtask').append('<ol>');
    for(var i=0;i<num;i++)
    {
        $('ol').append('<li><input type="checkbox" id="items"></li>');
    }
    $('#secondtask').append('</ol>');


    //if clicked #item checkbox
    $("input[type='checkbox']#items").mouseup(function(){
        if($(this).is(":not(:checked)")){
            count+=1;
            $('div.info').text('Count of selected checkbox: '+count);
        }
        else{
            count-=1;
            $('div.info').text('Count of selected checkbox: '+count);
        }

        if(count==num){
            $("input[type='checkbox']#all").prop("checked",true);
        }
        else
        {
            $("input[type='checkbox']#all").prop("checked",false);
        }

    })


    //if clicked #all checkbox
    $("input[type='checkbox']#all").mouseup(function(){
        if($(this).is(":not(:checked)")){
            $("input[type='checkbox']#items").prop("checked",true);
            count = 10;
            $('div.info').text('Count of selected checkbox: '+count);
        }
        else{
            $("input[type='checkbox']#items").prop("checked",false);
            count = 0;
            $('div.info').text('Count of selected checkbox: '+count);
        }
    })


})