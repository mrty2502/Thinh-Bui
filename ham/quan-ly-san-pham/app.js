let products = ['Ipod', 'Iphone 11', 'Airpod Pro', 'Ipad Air', 'VSmart', 'Note 10', 'Nokia', 'Sony Xperia', 'Xiao Mi'];

function showListProducts() {
    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += '<tr>';
        html += '<td>';
        html += i + 1;
        html += '</td>';
        html += '<td>';
        html += products[i]
        html += '</td>';
        html += '<td>' + '<input type="button" value="Edit" onclick="editProducts(this.id)" id="' + i + '">';
        html += '</td>';
        html += '<td>' + '<input type="button" value="Delete" onclick="deleteProducts(this.id)" id="' + i + '">';
        html += '</td>';
        html += '</tr>';

    }
    document.getElementById('listProducts').innerHTML = html;
}

showListProducts();

function addProduct() {
    products.push(document.getElementById('inputProduct').value);
    showListProducts();
    alert('Bạn đã thêm ' + document.getElementById('inputProduct').value + ' vào danh sách!');
    document.getElementById('inputProduct').value = '';
}

function deleteProducts(deleteID) {
    let confirmAnswer = confirm("Bạn có chắc chắc muốn xóa không?");
    if (confirmAnswer) {
        products.splice(deleteID, 1);
        showListProducts();
    }
}

function editProducts(editID) {
    let surrogateName = prompt("Xin mời nhập tên sản phẩm mới!");
    if (surrogateName) {
        let confirmAnswer = confirm("Bạn có chắc chắc muốn sửa tên sản phẩm không?");
        if (confirmAnswer) {
            products.splice(editID, 1, surrogateName);
            showListProducts();
            alert("Sản phẩm " + surrogateName + " đã được cập nhật vào danh sách!");
        }
    }
}