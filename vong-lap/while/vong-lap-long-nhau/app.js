let i = j = 1;
let html = '';
while (i<=10) {
    html += '<tr>';
        while (j<=10) {
            html += '<td>';
            html += i*j;
            html += '</td>';
            j++;
        }
     html += '</tr>';
     j=1;
     i++;

}
document.getElementById('box').innerHTML = html;
