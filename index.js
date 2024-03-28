// dom tới thẻ html qua thuộc tính ID kết quả trả về là sẽ lấy ra được thẻ html đó

// var div1 = document.getElementById("baiTap1")
// đổi fs
// div1.style.fontSize = "24px"
// div1.style.color = "white"
// div1.style.backgroundColor = "black"

// var div2 = document.querySelectorAll("div.domClass")

// div2[1].innerText = "Đã Hoàn Thành Bài Tập 2."

// console.log(div2)

// cách 1: gắn sự kiện vô 1 button bằng addEventListener
// document.getElementById("submit").addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("hello button");
// });

//Tạo function để get id
function getEle(id){
  return document.getElementById(id)
}


function submitForm(e) {
  e.preventDefault();
  

  // dom lấy giá trị người dung nhập vào
  var prodName = getEle("prodName").value;
  var media = getEle("prodMedia").value;
  var description = getEle("description").value;
  var originalPrice = getEle("originalPrice").value;
  var reducedPrice = getEle("reducedPrice").value;

  // dùng object để biểu diễn đối tượng
  var phone = new PhoneModel(
    prodName,
    description,
    originalPrice,
    reducedPrice,
    media,
    new Date(),
  )


  var phoneHtml = ` <div>
  <img
    src="${phone.image}"
    alt=".."
  />
  <h6>${phone.productName}</h6>
  <div>
    <span>${phone.originalPrice}</span>
    <span style="text-decoration: line-through;color: gainsboro;">${phone.reducedPrice}</span>
  </div>
  <p style="font-size: 12px;">${phone.description}</p>
  <p>${phone.creatAt}</p>
</div>
`

// dom tới thẻ div có id là phone để in nội dung
  document.getElementById("phone").innerHTML = phoneHtml;

}


// function CarModel(tenXe, hangXe, mau, bienSo) {
//   this.tenXe = tenXe;
//   this.hangXe = hangXe;
//   this.mau = mau;
//   this.bienSo = bienSo;
// }


// var hondaCity = new CarModel("Honda City","Honda", "Đen", "59a100030")

// var accent = new CarModel("accent", "huynhDai", "trắng", "56u121321")

// console.log(hondaCity)
// console.log("xe accent: ",accent.bienSo)


// --->> Tạo class Oop bằng es5
// function PhoneModel(
//   name,
//   description,
//   originalPrice,
//   reducedPrice,
//   image,
//   createdAt
// )
// {
//   this.name = name;
//   this.description = description;
//   this.originalPrice = originalPrice;
//   this,reducedPrice = reducedPrice;
//   this.image = image;
//   this.createdAt = createdAt; 

// }


// --->> Tạo class Oop bằng es6
class PhoneModel {
  productName = "";
  description = "";
  originalPrice = 0;
  reducedPrice = 0;
  image = "";
  createdAt = "";

  constructor(name, description, originalPrice, reducedPrice, image, createdAt) {
  this.productName = name;
  this.description = description;
  this.originalPrice = originalPrice;
  this,reducedPrice = reducedPrice;
  this.image = image;
  this.createdAt = createdAt;
  }
}