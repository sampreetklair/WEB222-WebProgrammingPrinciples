function validate(){

    let imdbinputelement = document.querySelector("#imdbinput");
    let imdbinputvalue = imdbinputelement.value.trim();
    if (imdbinputvalue == ""){
        alert("IMDB can't be empty");
        return false;
    }
    else if (imdbinputvalue > 11){
        alert("IMDB can't be more than 10 characters.");
        return false;
    }
    else if (imdbinputvalue != /+[a-z][A-Z][0-9]+/){
        alert("IMDB can only be alphanumeric code.");
        return false;
    }

   var radio_num = document.form.type.length;
   var onechecked = false;  

   for (var i = 0; i < radio_num; i++) {
       if (document.form.type[i].checked == true) { 
          onechecked = true;
       } 
   } 

   if (!onechecked) {                                        
        alert("Radio button can't be empty");
        return false;
   }
   
   


   return true;  		
} 

