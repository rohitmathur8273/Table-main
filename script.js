var btn = document.getElementById('btn');

function calc(){
    var right='';
    var _table = parseInt(document.getElementById('table').value);
        for(let i = 1; i<=10; i++){
            right += (_table + " x " + i + " = " + _table*i +' <br> ')
        }
        document.getElementById('right-box').innerHTML = right;
    }
