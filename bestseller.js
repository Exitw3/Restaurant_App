const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
function addProduct(  ) {
  location.reload();
  haha()
}
function haha(){
  document.getElementById('btn-add-product').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('section').style.display = 'none';
}
function addBlog() {
  document.getElementById('form-edit-products').style.display = 'none';
  document.getElementById('btn-add-product').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('section').style.display = 'none';
}
class bestsellers {
  constructor(imgs, dish, describe, money) {
    this.imgs = imgs;//ảnh
    this.dish = dish;//món ăn
    this.describe = describe;//mô tả  
    this.money = money;
  }
}

var bestseller = [
  new bestsellers("product_1.png", "món ăn 1", "mô tả", "500.000"),
  new bestsellers("product_1.png", "món ăn 1", "mô tả", "500.000"),
  new bestsellers("product_1.png", "món ăn 1", "mô tả", "500.000"),
  new bestsellers("product_1.png", "món ăn 1", "mô tả", "500.000"),
  new bestsellers("product_1.png", "món ăn 1", "mô tả", "500.000"),
]

function Bestseller() {
  let htmlss = "";
  for (let i = 0; i < bestseller.length; i++) {
    htmlss += `
      <div class="item">
      <img src="images/${bestseller[i].imgs}" alt="">
      <div class="stars">
          <span>
              <img src="images/star.png" alt="">
          </span>
          <span>
              <img src="images/star.png" alt="">
          </span>
          <span>
              <img src="images/star.png" alt="">
          </span>
          <span>
              <img src="images/star.png" alt="">
          </span>
          <span>
              <img src="images/star.png" alt="">
          </span>
      </div>
      <div class="name">${bestseller[i].dish}</div>
      <div class="desc">${bestseller[i].describe}</div>
      <div class="price">${bestseller[i].money} VNĐ</div>
  </div>
      `
  }
  document.getElementById('list-products').innerHTML = htmlss;
}

class comments {
  constructor(avta, name, suggestion) {
    this.avta = avta;//ảnh
    this.name = name;//tên
    this.suggestion = suggestion;//bình luận
  }
}

var commentss = [
  new comments("avatar_1.png", "món ăn 1", "mô tả"),
  new comments("avatar_1.png", "món ăn 1", "mô tả"),
  new comments("avatar_1.png", "món ăn 1", "mô tả"),
  new comments("avatar_1.png", "món ăn 1", "mô tả"),
  new comments("avatar_1.png", "món ăn 1", "mô tả"),
]

function Comments() {
  let htmlsss = "";
  for (let i = 0; i < commentss.length; i++) {
    htmlsss += `
      <li class="item">
        <div class="avatar">
            <img src="images/${commentss[i].avta}" alt="">

        </div>
        <div class="stars">
            <span>
                <img src="images/star.png" alt="">
            </span>
            <span>
                <img src="images/star.png" alt="">
            </span>
            <span>
                <img src="images/star.png" alt="">
            </span>
            <span>
                <img src="images/star.png" alt="">
            </span>
            <span>
                <img src="images/star.png" alt="">
            </span>
        </div>
        <div class="name">${commentss[i].name}</div>
        <div class="text">
            <p>${commentss[i].suggestion}</p>
        </div>
      </li>
      `
  }
  document.getElementById('list-comment').innerHTML = htmlsss;
}

function Ri() {
  Bestseller();
  Comments();
}
Ri();
