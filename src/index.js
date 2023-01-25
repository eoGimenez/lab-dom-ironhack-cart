// ITERATION 1
let total= 0;
function updateSubtotal(product) {
  //... your code goes here
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input[type=Number]').value;
  let subTotalMul = (price * quantity);
  return product.querySelector('.subtotal span').innerHTML = subTotalMul;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct); 
  // end of test

  // ITERATION 2
  //... your code goes here
  let multipleProducs = [... document.getElementsByClassName('product')]
  multipleProducs.forEach((producto) => total += updateSubtotal(producto))
   // updateSubtotal(producto);
  // ITERATION 3
  //... your code goes here
  let elementoTotal = document.querySelector('#total-value span')
  elementoTotal.innerHTML = total;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
