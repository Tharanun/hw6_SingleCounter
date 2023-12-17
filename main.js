let number = document.getElementById('number')

function add() {
    let total = parseInt(number.innerHTML)
    document.getElementById('number').innerHTML = total + 1;
}

function sub(){
    let total = parseInt(number.innerHTML)
    if (total > 0.000001){
        document.getElementById('number').innerHTML = total - 1;
    }
}

function resetNumber(){
    document.getElementById('number').innerHTML = 0;
}