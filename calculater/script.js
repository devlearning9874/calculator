

 var el= document.getElementById("add");

if(el) {
    addEventListener("click",function(){
        var x= document.getElementById("a").value;
        var y= document.getElementById("b").value;
        var a= parseInt(x);
        var b= parseInt(y);
        
        var result=a+b;
        console.log(result);
       // alert(result);
        document.getElementById("result").innerHTML=result; 
        
    });
};




 