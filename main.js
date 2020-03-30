
var productContainer;
if(localStorage.getItem('productData')==null)
{
  productContainer=[];
}
else
{
  productContainer=JSON.parse(localStorage.getItem('productData'))
  display();
}
function addpro()
{
   var productName=document.getElementById("productName").value; 
   var productPrice=document.getElementById("productPrice").value;
   var producrD=document.getElementById("productD").value;
   var producrCategory=document.getElementById("productCategory").value;
   console.log(productName+"  "+ productPrice);
   if(productName && productPrice && producrD && producrCategory == '')
   {
    window.alert("Please Full all fileds :D")
   }
   var product={name:productName,price:productPrice,category:producrCategory,desc:producrD}
   productContainer.push(product);
   localStorage.setItem("productData",JSON.stringify(productContainer));
   display();
   clearForm()
}


function display()
{
    var temp=""
 for(var i=0;i<productContainer.length;i++)
 {
   temp +=`<div class="col-lg-4 col-md-12 pro">
   
   <img class="img-fluid" src="my-product.png">
   <h4>`+productContainer[i].name+`<span class="badge badge-primary mx-5">`+productContainer[i].category+`</span></h4>
   <p>`+productContainer[i].desc+`</p>
   <div class="price">`+productContainer[i].price+`</div>
   <button onclick="remove(`+i+`)" class="btn btn-outline-danger">Delete</button>
   <button class="btn btn-warning">Update</button>  
   </div>`

 }
  document.getElementById('productRow').innerHTML=temp;

}
function searchProduct(term)
{
  var temp=""
  for(var i=0;i<productContainer.length;i++)
  {
    if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
    temp +=`<div class="col-lg-4 col-md-12 pro">
   
    <img class="img-fluid" src="my-product.png">
    <h4>`+productContainer[i].name+`<span class="badge badge-primary mx-5">`+productContainer[i].category+`</span></h4>
    <p>`+productContainer[i].desc+`</p>
    <div class="price">`+productContainer[i].price+`</div>  
    </div>`
 

  }
  document.getElementById('productRow').innerHTML=temp;

}

function remove(x)
{
  console.log(x);
  productContainer.splice(x,1);
  localStorage.setItem("productData",JSON.stringify(productContainer));
  display();

}
var inputs = document.getElementsByClassName("form-control");
function clearForm()
{
    
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

/*function validationName(userName){

   var userRegex=/^[A-Z][a-z]{3,10}/;
   if(userRegex.test(userName)==false)
   {
     document.getElementById("addBtn").disabled='false'
   }
   else
   {
    document.getElementById("addBtn").removeAttribute('disabled');
   }
}*/