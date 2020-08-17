//challeng 1
function ageIndays(){
    var birthyear= prompt('what year were you bron ..good friend');
    var ageIndays =(2018- birthyear)* 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode( 'you are ' + ageIndays + 'day')
    h1.setAttribute('id','ageInday');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('ageInday').remove();

}

