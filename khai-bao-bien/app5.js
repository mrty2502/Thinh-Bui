
function phepcong() {
    let c1 = parseInt(document.getElementById("num1").value);
    let c2 = parseInt(document.getElementById("num2").value);
    let kqcong = c1+c2;
    document.getElementById("ketqua").innerHTML = kqcong;
}


function pheptru() {
    let t1 = parseInt(document.getElementById('num1').value);
    let t2 = parseInt(document.getElementById("num2").value);
    let kqtru = t1-t2;
    document.getElementById("ketqua").innerHTML = kqtru;
}

function phepnhan() {
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    let kqnhan = n1 * n2;
    document.getElementById('ketqua').innerHTML = kqnhan;
}

function phepchia() {
    let ch1 = parseInt(document.getElementById('num1').value);
    let ch2 = parseInt(document.getElementById('num2').value);
    let kqchia = ch1 / ch2;
    document.getElementById('ketqua').innerHTML = kqchia;
}