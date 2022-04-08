
let addProduct = document.querySelector('.add-products');
let addbtn =document.getElementById('crud-add-btn');

if(addbtn){
  addbtn.onclick = () =>{
    addProduct.classList.toggle('active');
  }
}


let updateProduct = document.querySelector('.update-products');
let updatebtn =document.getElementById('crud-update-btn');

if(updatebtn){
  updatebtn.onclick = () =>{
    updateProduct.classList.toggle('active');
  }
}


let searchProduct = document.querySelector('.search-products');
let searchbtn =document.getElementById('crud-search-btn');

if(searchbtn){
  searchbtn.onclick = () =>{
    searchProduct.classList.toggle('active');
  }
}


let deleteProduct = document.querySelector('.delete-products');
let deletebtn =document.getElementById('crud-delete-btn');

if(deletebtn){
  deletebtn.onclick = () =>{
    deleteProduct.classList.toggle('active');
  }
}


let addList = document.querySelector(".admin-container .admin-add-products");
console.log(addList);
addList.innerHTML="";

   let  Pname = document.getElementById("adminProductName");
   let productName="";
   let quantity="";
   let price="";
   Pname.addEventListener("change",function(e){
    productName = e.target.value;
    console.log(e.target.value);
    

   });
   let  Pquantity = document.getElementById("Adminquantity");
   Pquantity.addEventListener("change",function(e){
    quantity = e.target.value;
    console.log(e.target.value);

   });
   let  Pprice= document.getElementById("price");
   Pprice.addEventListener("change",function(e){
    price = e.target.value;
    console.log(e.target.value);
   });
   console.log(productName);
   console.log(price);
   console.log(quantity);
   let productAddBtn = document.getElementById("product-add-btn");
   
   productAddBtn.addEventListener("click",()=>{
    addList.innerHTML +=`<tr><td>${productName}</td>
    <td>${quantity}</td>
    <td>${price}</td></tr>`;
   });
   





