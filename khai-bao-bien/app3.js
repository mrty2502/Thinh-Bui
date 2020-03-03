let toan = prompt("Moi nhap diem toan");
let ly = prompt("Moi nhap diem ly");
let hoa = prompt("Moi nhap diem hoa");

let a=parseInt(toan);
let b=parseInt(ly);
let c=parseInt(hoa);

let diemtrungbinh= (a + b + c)/3;
let diemtong= a + b + c;

document.write("Diem trung binh: " + diemtrungbinh );
document.write('<br/>');
document.write("Tong Diem: " + diemtong);

