let box="";
for(let i=1;i<=9;i++) {
    box += "<tr>";
    for (let j=1;j<=9;j++) {
        box += "<td>";
        box += i + "x" + j + "=" + i*j;
        box += '</td>';
    }
    box += '</tr>';
}
document.getElementById('table').innerHTML = box;