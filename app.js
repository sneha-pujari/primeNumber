function calc(){
    var elem = document.querySelector("#num");
    console.log(elem.value);
    var num1 = elem.value;
    var i;
    var cnt=0;
    var txt = "";
    for(i=0; i<=num1;i=i+1){
        if(num1%i == 0){
            cnt =cnt + 1;
        }
    }
        if(cnt <= 2){
         txt = num1 + "  is Prime No.";
        }
        else{
            txt = num1 + " is not a Prime No.";  
        }

    var content = document.querySelector("#disp");
    console.log(content)
    content.innerHTML = txt;
}