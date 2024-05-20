const products = [
  {
    name: 'Sony Playstation 5',
    url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
    category: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'https://i.ibb.co/rFFMDH7/samsung-galaxy.png',
    category: 'smartphones',
    price: 399.99,
  },
  {
    name: 'Cannon EOS Camera',
    url: 'https://i.ibb.co/mhm1hLq/cannon-eos-camera.png',
    category: 'cameras',
    price: 749.99,
  },
  {
    name: 'Sony A7 Camera',
    url: 'https://i.ibb.co/LS9TDLN/sony-a7-camera.png',
    category: 'cameras',
    price: 1999.99,
  },
  {
    name: 'LG TV',
    url: 'images/lg_tv.png',
    category: 'televisions',
    price: 799.99,
  },
  {
    name: 'Nintendo Switch',
    url: 'images/nintendo_switch.png',
    category: 'games',
    price: 299.99,
  },
  {
    name: 'Xbox Series X',
    url: 'images/xbox_series_x.png',
    category: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung TV',
    url: 'https://i.ibb.co/Pj1nm4B/samsung-tv.png',
    category: 'televisions',
    price: 1099.99,
  },
  {
    name: 'Google Pixel',
    url: 'https://i.ibb.co/5F58zmH/google-pixel.png',
    category: 'smartphones',
    price: 499.99,
  },
  {
    name: 'Sony ZV1F Camera',
    url: 'images/sony_zv1f_camera.png',
    category: 'cameras',
    price: 799.99,
  },
  {
    name: 'Toshiba TV',
    url: 'images/toshiba_tv.png',
    category: 'televisions',
    price: 499.99,
  },
  {
    name: 'iPhone 14',
    url: 'images/iphone_14.png',
    category: 'smartphones',
    price: 999.99,
  },
];

//Select DOM Elements
const productsWrapper = document.getElementById('products-wrapper');
const checkboxes = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cart-button');
const cartCount = document.getElementById('cart-count');

// Init Cart Item Count
let cartItemCount = 0

// Init Product element array
const productElementsArr = []

//Event Listner for filtering
filtersContainer.addEventListener('change', filterProducts)
searchInput.addEventListener('input', filterProducts)

// Loop over products and creat an element for each one
// 'product' is the current element being processed in the array
products.forEach((product) => {
  // // - first create a div
  // const productElement = document.createElement('div')
  // // - then add the classes
  // productElement.className = 'item space-y-2'
  // // - then add the elementsin the div
  // productElement.innerHTML = `
  // <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
  //   <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">
  //   <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Add to Cart</button>
  // </div>
  // <p class="text-xl">${product.name}</p>
  // <strong>$${product.price.toLocaleString()}</strong>
  // `;
  // - then take the 'productsEl..' div and push into the 'productsEl..Arr' array
  
  const productElement = createProductElement(product)
  
  productElementsArr.push(productElement)
  // - then append it as a child into the main wrapper
  productsWrapper.appendChild(productElement)
})

// makes the code clean{ CODE BREAKDOWN(.md:'JS-02')}
function createProductElement(product) {
  const productElement = document.createElement('div')
  productElement.className = 'item space-y-2'

  productElement.innerHTML = `
  <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
    <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">
    <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Add to Cart</button>
  </div>
  <p class="text-xl">${product.name}</p>
  <strong>$${product.price.toLocaleString()}</strong>
  `;

  //This will add an event listener to the button that will call the updateCart function when clicked.
  productElement.querySelector('.status').addEventListener('click', updatCart) 

  return productElement
}

// Toggle add/remove from cart
function updatCart(e) {
  const statusEl = e.target

  if(statusEl.classList.contains('added')) {
    //remove from cart
    statusEl.classList.remove('added')
    statusEl.innerText = 'Add To Cart'
    statusEl.classList.remove('bg-red-600')
    statusEl.classList.add('bg-gray-800')

    cartItemCount--
  } else {
    //add to cart
    statusEl.classList.add('added')
    statusEl.innerText = 'Remove From Cart'
    statusEl.classList.remove('bg-gray-800')
    statusEl.classList.add('bg-red-600')

    cartItemCount++
  }

  cartCount.innerText = cartItemCount.toString()
}



// Filter products by search or checkboxfunction
function filterProducts() {
  // Get search term and make it all same lowercase
  const searchTerm = searchInput.value.trim().toLowerCase();
  // Get checked categories and not make it a node list
  const checkedCategories = Array.from(checkboxes).filter((check) => check.checked).map((check) => check.id);
    
  // Loop over products and check for matches
  productElementsArr.forEach((productElement, index) => {
    const product = products[index];

    // Check to see if product matches the search or checked items
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.category);

    // Show or hide product based on matches
    if (matchesSearchTerm && isInCheckedCategory) {
      productElement.classList.remove('hidden');
    } else {
      productElement.classList.add('hidden');
    }
  });
}