document.getElementById('submit').addEventListener('click',function(){
    const q1 = document.getElementById('q1').checked ;
    const q2 = document.getElementById('q2').checked ;
    const q3 = document.getElementById('q3').checked ;
    const q4 = document.getElementById('q4').checked ;

    const mark = document.getElementById('mark');
    const wrong = document.getElementById('wrong');
    const btn = document.getElementById('submit');

    let count = 0;
    if(q1){
        count++;
    }
    if(q2){
        count++;
    }
    if(q3){
        count++;
    }
    if(q4){
        count++;
    }
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    btn.style.boxShadow = '5px 5px 5px white';
    alert('you got ' + count);
})