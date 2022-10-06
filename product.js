class Product {
  constructor(id, imgas, dishs, describes, moneys) {
    this.id = id;
    this.imgas = imgas;//ảnh
    this.dishs = dishs;//món ăn
    this.describes = describes;//mô tả  
    this.moneys = moneys;
  }
}
const products_key = "data-product";
var candidators = [];

var products = [
  new Product(1, "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg", "món ăn 1", "mô tả", "500.000"),
  new Product(2, "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg", "món ăn 1", "mô tả", "500.000"),
  new Product(3, "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg", "món ăn 1", "mô tả", "500.000"),
  new Product(4, "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg", "món ăn 1", "mô tả", "500.000"),
  new Product(5, "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg", "món ăn 1", "mô tả", "500.000"),
];

function renderProduct() {
  let htmlss = "";
  for (let i = 0; i < products.length; i++) {
    htmlss += `
        <div class="item">
            <img src="${products[i].imgas}" alt="">
      
            <div class="name">${products[i].dishs}</div>    
            <div class="desc">${products[i].describes}</div>
            <div class="price">${products[i].moneys} VNĐ</div>
        </div>
        `
  }
  document.getElementById('list-praduct').innerHTML = htmlss;

}
// Product()

function save() {
  let images = document.getElementById('images').value;
  let dishs = document.getElementById('dishs').value;
  let describes = document.getElementById('describes').value;
  let moneys = document.getElementById('moneys').value;
  let id = findMaxId() + 1;
  if (images == null || images == '') {
    alert('Hãy dán link ảnh sản phẩm.');
    return;
  }if (moneys == null || moneys == '') {
    alert('Hãy nhập giá của sản phẩm');
    return;
  }if(moneys <= 0){
    alert('giá không được âm')
    return;
  }if(dishs == null || dishs == ''){
    alert('');
    return;
  }
  let newProduct = new Product(id, images, dishs, describes, moneys);
  products.unshift(newProduct);
  renderProduct();
  resetForm();
}
function findMaxId() {
  let max = 0;
  for (let newProduct of products) {
    if (newProduct.id > max) {
      max = newProduct.id;
    }
  }
  return max;
}

function resetForm() {
  document.getElementById('images').value = "";
  document.getElementById('dishs').value = "";
  document.getElementById('describes').value = "";
  document.getElementById('moneys').value = "";

  document.getElementById('btnCreate').classList.toggle('d-none');
  document.getElementById('btnUpdate').classList.toggle('d-none');
}
renderProduct()