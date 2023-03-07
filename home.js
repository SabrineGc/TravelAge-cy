var array=[{username:"taher"},{username:"sabrine"},{username:"rayen"},{username:"wael"},{username:"hanine"}]
$('#kohli').click(
    function (){
        for(var i=0;i<array.length;i++){
            if(($('#in').val())===array[i]["username"]){
                alert("welcome in "+$('#in').val())
                window.location="main.html"
            } 
            else{
              swal("Please Sign up first")
            }
        }
    
})

$('#bsisa').click(
    function (){
        array.push({username:($('#inp').val())})
        swal("welcome to our world")
    })

    function myFunction() {
        var pass = document.getElementById("password");
        if (pass.type === "password") {
          pass.type = "tepasst";
        } else {
          pass.type = "password";
        }
      }
