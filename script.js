class Product {
    constructor(imgas, dishs, describes, moneys) {
        this.imgas = imgas;//ảnh
        this.dishs = dishs;//món ăn
        this.describes = describes;//mô tả  
        this.moneys = moneys;
    }
}
const product_key = "data-product";
var products = [];
var page_size = 3;
var total_pages = 0;
var page_number = 1;

function init() {
    if (window.localStorage.getItem(product_key) == null) {
        products = [
            new Product("https://cdnimg.vietnamplus.vn/t620/uploaded/ngtnnn/2022_07_27/2707banhxeo.jpg", "Bánh Xèo", "Bánh xèo là một loại bánh có truyền thống lâu đời", "50.000"),
            new Product("https://img-global.cpcdn.com/recipes/626252af472b29cb/400x400cq70/photo.jpg", "Gỏi Cuốn", "Đặc Sản Miền Nam ", "100.000"),
            new Product("https://img-global.cpcdn.com/recipes/7499ccc93e3bbc42/400x400cq70/photo.jpg", "Phở Cuốn", "Đặc Sản Hà Nội", "200.000"),
            new Product("https://bizweb.dktcdn.net/100/442/328/products/bun-cha-ha-noi.jpg?v=1644892472637", "Bún Chả", "Đặc Sản Miền Bắc", "300.000"),
            new Product("https://cdn.tgdd.vn/2021/02/CookProduct/1200-1200x676-16.jpg", "Mỳ Quảng", "Đặc Sản Quảng Nam và Đà Nẳng", "100.000"),
            new Product("https://cdn.tgdd.vn/2021/12/CookRecipe/CookTipsNote/cao-lau-la-gi-nguon-goc-cao-lau-cao-lau-va-mi-quang-khac-nhau-tipsnote-800x523.jpg", "Cao Lầu", "Đặc Sản Hội AN", "80.000"),
            new Product("http://reviewvilla.vn/wp-content/uploads/2022/06/com-hen-Hue-1.jpg", "Cơm Hến", "Đặc Sản Cố Đô Huế", "30.000"),
            new Product("https://daubepgiadinh.vn/wp-content/uploads/2018/05/hinh-banh-beo-chen-600x400.jpg", "Bánh Bèo", "Đặc Sản Cố Đô Huế", "60.000"),
        ];
        window.localStorage.setItem(product_key, JSON.stringify(products));
    }
    else {
        products = JSON.parse(window.localStorage.getItem(product_key));
    }
}

function renderProduct() {
    let data = products.slice((page_size * (page_number - 1)), (page_size * page_number));
    let htmls = data.map(function (products, index) {
        return `
        <div class="item" id="indexproducts" ondblclick="editProduct(${index})">
            <img src="${products.imgas}" alt="">
            <div class="name">${products.dishs}</div>    
            <div class="desc">${products.describes}</div>
            <div class="price">${products.moneys} VNĐ</div>
            <div>
                <span class="times" onclick='removeProduct(${index})' >&times;</span>
            </div>
        </div>
        `
    })
    document.getElementById('list-praduct').innerHTML = htmls.join("");
    buildPagination();
}

function save() {
    let images = document.getElementById('images').value;
    let dishs = document.getElementById('dishs').value;
    let describes = document.getElementById('describes').value;
    let moneys = document.getElementById('moneys').value;
    let id = findMaxId() + 1;

    if (images == null || images == '') {
        alert('Hãy dán link ảnh sản phẩm.');
        return;
    } if (moneys == null || moneys == '') {
        alert('Hãy nhập giá của sản phẩm');
        return;
    } if (moneys <= 0 || moneys >= 999999) {
        alert('giá không được âm')
        return;
    } if (dishs == null || dishs == '') {
        alert('nhập tên món');
        return;
    }
    let newProduct = new Product(images, dishs, describes, moneys);
    products.unshift(newProduct);
    window.localStorage.setItem(product_key, JSON.stringify(products));

    renderProduct();
    resetForm();
}

function resetForm() {
    document.getElementById('images').value = "";
    document.getElementById('dishs').value = "";
    document.getElementById('describes').value = "";
    document.getElementById('moneys').value = "";
}

function findMaxId() {
    let max = 0;
    for (let product of products) {
        if (product.id > max) {
            max = product.id
        }
    }
    return max;
}

function removeProduct(index) {
    let confirm = window.confirm("Are yo u sure to remove this candidator?");
    if (confirm) {

        products.splice(index, 1);

        window.localStorage.setItem(product_key, JSON.stringify(products));

        renderProduct(products);
    }
}

function editProduct(index) {

    document.getElementById('indexproducts').value = index;
    let product = products[index];
    document.getElementById('images').value = product.images;
    document.getElementById('dishs').value = product.dishs;
    document.getElementById('describes').value = product.describes;
    document.getElementById('moneys').value = product.moneys;

    document.getElementById('btnUpdate').classList.toggle('d-none');
}

function updateProduct() {
    let images = document.querySelector('#images').value.trim();
    let dishs = document.querySelector('#dishs').value.trim();
    let describes = document.querySelector('#describes').value.trim();
    let moneys = Number(document.querySelector('#moneys').value);
    if (images == null || images == '') {
        alert('Hãy dán link ảnh sản phẩm.');
        return;
    } if (moneys == null || moneys == '') {
        alert('Hãy nhập giá của sản phẩm');
        return;
    } if (moneys <= 0 || moneys >= 999999) {
        alert('giá không được âm')
        return;
    } if (dishs == null || dishs == '') {
        alert('nhập tên món');
        return;
    }
    let index = document.getElementById('indexproducts').value;
    products[index] = new Product(images, dishs, describes, moneys);
    window.localStorage.setItem(product_key, JSON.stringify(products));
    resetForm();
    renderProduct(products);

}

function buildPagination() {
    total_pages = Math.ceil(products.length / page_size);
    let paginationString = "";
    let start = page_number == 1 ? 1 : page_number == total_pages ? page_number - 2 : page_number - 1;
    let end = page_number == total_pages ? total_pages : page_number == 1 ? page_number + 2 : page_number + 1;
    paginationString += `<button class="page-item" onclick='changePage(1)'>&#x25C0;</button>`;
    for (let page = 1; page <= total_pages; page++) {
        paginationString += `<button class="page-item" class='${page == page_number ? 'active' : ''}'
                                        onclick='changePage(${page})'>
                                ${page}</button>`
    }
    paginationString += `<button class="page-item" onclick='changePage(${total_pages})'>&#x25B6;</button>`;
    document.getElementById('pagination').innerHTML = paginationString;
}

function changePage(page) {
    page_number = page;
    renderProduct();
}

function ready() {
    init();
    renderProduct();
}
ready();