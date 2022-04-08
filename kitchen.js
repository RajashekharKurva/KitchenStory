/* let searchForm = document.querySelector('.search-form');
let searchBtn =document.getElementById('search-btn');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

*/

let searchForm = document.querySelector('.searchBox');
let searchBtn =document.getElementById('search-bbtn');

if(searchBtn){
  document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
}



/* user login starts*/

let userLogin = document.querySelector('.user-login');
let userBtn =document.getElementById('user-btn');

if(userBtn){
  document.querySelector('#user-btn').onclick = () =>{
    userLogin.classList.toggle('active');
} 
}
 

/* user login end*/



/* Cart functionality  Started*/

let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name:'fresh Cauliflower' ,
    tag:'cauliflower',
    inCart:0 ,
    price:25 ,
     
  },
  {
    name: 'fresh Mango',
    tag:'mango',
    inCart: 0,
    price: 60,
    
  },
  {
    name:'fresh Cabbage' ,    
    tag:'cabbage',
    inCart:0 ,
    price:20 ,
    
  },
  {
    name:'fresh Potato' ,
    tag:'potato',
    inCart:0 ,
    price:22 ,
    
  },
  {
    name:'fresh Chicken' ,
    tag:'chicken',
    inCart:0 ,
    price:130 ,
    
  },
  {
    name:'fresh Brinjal' ,
    tag:'brinjal',
    inCart:0 ,
    price:15 ,
    
  },

  {
    name:'fresh Tomato' ,
    tag:'tomato',
    inCart:0 ,
    price:10 ,
    
  },
  {
    name:'fresh Carrot' ,
    tag:'carrot',
    inCart:0 ,
    price:30 ,
    
  },
];


for(let i=0;i<carts.length; i++){
    carts[i].addEventListener('click', () => {

      console.log("click event..");
      cartNumbers(products[i]);
      totalPrice(products[i]);
         
    }) 
}


function cartNumbers(product){

  let cartCount= parseInt(localStorage.getItem('cartNumbers'));
  
  if(cartCount){
    localStorage.setItem('cartNumbers',cartCount+1);
    document.querySelector('.icons .cart a sup').textContent = cartCount+1;

    let cartdiv = document.querySelector('.icons .cart a ');
    cartdiv.style.color = 'red';
}
  else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector(' .icons .cart a sup').textContent = 1; 
  
    let cartdiv = document.querySelector('.icons .cart a ');
    cartdiv.style.color = 'red';
  }

  setItem(product);
}

function onLoadCartValue(){
  let cartCount= parseInt(localStorage.getItem('cartNumbers'));
  
  if(cartCount){
    document.querySelector('.icons .cart a sup').textContent = cartCount;
    let cartdiv = document.querySelector('.icons .cart a ');
    cartdiv.style.color = 'red';
  }
}
onLoadCartValue();

function setItem(product){

  let cartitems = localStorage.getItem('productInCart');
  cartitems=JSON.parse(cartitems);

  if(cartitems != null ){

    if(cartitems[product.tag] == undefined){
      cartitems={
        ...cartitems,
        [product.tag]: product
      }
    }

    cartitems[product.tag].inCart += 1;
  } 
  else {
    product.inCart=1;

    cartitems={
     [product.tag]:product
   };
  }

  localStorage.setItem('productInCart', JSON.stringify(cartitems));

}

function totalPrice(product){

  let totalcost = parseInt(localStorage.getItem('totalPrice'));

  if(totalcost){

    localStorage.setItem('totalPrice',totalcost +product.price);
  }
  else{

    localStorage.setItem('totalPrice',product.price);
  }
    
  console.log(totalcost);

}

function displayCartItems(){

  let cartitems = localStorage.getItem('productInCart');
  cartitems=JSON.parse(cartitems);
  console.log(cartitems);
  let productContainer = document.querySelector('.cart-products');
  console.log(productContainer);

  if(cartitems && productContainer){

    productContainer.innerHTML='';
    Object.values(cartitems).map(item =>{
      subtotal = item.price*item.inCart;
    productContainer.innerHTML += `
     
    <div class="cart-box"><img src="CSS/images/${item.tag}.jpg" alt="img" class="cart-img">
    
    <h3>${item.name}</h3>
    <b >
        Quantity (500g/qty) :${item.inCart}

    </b>
    <br> 

    <div class="stars">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-empty"></i>
    </div>
    <div class="price">Rs.${item.price}/-</div>
    <b >
        Subtotal :Rs.${subtotal} /-

    </b>
    <div class="item-delete">

    <i class="fa fa-close "></i>
   </div>
            
</div>

      `
    })


  }

}


let totalcost = parseInt(localStorage.getItem('totalPrice'));
let totalPayment = document.querySelector(" .payment  .totalprice")
console.log(totalcost);
if(totalcost)
{
  totalPayment.innerHTML +=totalcost;
}




displayCartItems();


/* cart functionality Ended */


/*********** Payment starts  *************/

let payment = document.querySelector(" .payment-btn")

if(payment){
  payment.addEventListener('click', ()=>{
    alert("Payment sucessful !!  ");
    OrderedItems();
    alert("Order sucessfully placed !!  ");  
  
  })
  
}
/*********** Payment End  *************/


function OrderedItems(){

  console.log("OrderedItems");

  let orderId = parseInt(localStorage.getItem('OrderId'));

    orderId += 1;

  localStorage.setItem('OrderID',orderId)

  let cartitems = localStorage.getItem('productInCart');
  cartitems=JSON.parse(cartitems);
  console.log(cartitems);
  let OrderHistory = document.getElementsByClassName('.order-history');
  console.log(OrderHistory);

  let subtotal =0;

  if(cartitems && OrderHistory){

    console.log("OrderHistory ifclause");
    OrderHistory.innerHTML='';
    Object.values(cartitems).map(item =>{
      subtotal = item.price*item.inCart;
      OrderHistory.innerHTML += `
Rajbr>
      `
    })


  }


 localStorage.removeItem('productInCart');
  localStorage.removeItem('cartNumbers');
  localStorage.removeItem('totalPrice');
  

}


/* Login */

let email="raj@gmail.com";
let password="raj12345";

let signInBtn = document.querySelector('.signin-btn');



function loginValidate() {
  let emailelement=document.getElementById("email");
let passwordelement=document.getElementById("password");


emailelement.addEventListener('change',(e)=>{
  let emailField=e.target.value;
})

passwordelement.addEventListener('change',(e)=>{
  let passwordField=e.target.value;
})



  console.log("login");
 if((email == emailField) && (password == passwordField)){

  alert("Sign in successfull !!");
}
else{
  alert("please verify user credentials are not matching");
}

alert("Please");
e.preventDefault();

}




