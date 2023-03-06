var array=[{username:"taher"},{username:"sabrine"},{username:"rayen"},{username:"wael"},{username:"hanine"}]
$('#kohli').click(
    function (){
        for(var i=0;i<array.length;i++){
            if(($('#in').val())===array[i]["username"]){
                alert("welcomin"+$('#in').val())
            } 
        }
    
})

$('#bsisa').click(
    function (){
        array.push({username:($('#inp').val())})
    })
