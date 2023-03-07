var data=[
    {name:"sousse",destination:"http://127.0.0.1:5500/sousse.html"},
    {name:"monastir",destination:"http://127.0.0.1:5500/monastir.html"},
    {name:"mahdia",destiantion:"http://127.0.0.1:5500/mahdia.html"},
    {name:"tozeur",destiantion:"http://127.0.0.1:5500/tozeur.html"},
    {name:"jerba",destiantion:"http://127.0.0.1:5500/jerba.html"}
]
function makeDestination(name,destiantion){
    return{
        name:name,
        destination:destiantion
    }
}

function add(obj){
    data.push(makeDestination(obj))
}


$('#bttn').click(
function (){
    for(var i=0;i<data.length;i++){
    if($("#put").val()===data[i].name){
         window.location.assign(data[i].destination)
    }
    else{
        swal("Sorry we don't have this destination")
    }
 }
})



    function randomly(){
    var ran= Math.floor(Math.random() * (data.length));
     $("#link").attr("href", data[ran].destiantion)
    }



