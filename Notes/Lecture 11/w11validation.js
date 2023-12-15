function validate(){

    let elements = document.querySelector("#id1");
    let value = elements.value.trim();
    if (value == ""){
        document.querySelector("#error").innerHTML="This can't be empty";
        return false;
    }
    else if (value.length < 5){
        document.querySelector("#error").innerHTML="This can't be less than 5";
        return false;
    }
    else if (value != /[ahmtuAHMTU]+/){
        document.querySelector("#error").innerHTML="This can't be excluding a, h, m, t, u";
        return false;
    }

    return true;
}