## Break Down
Aticle from([Traversy Media](https://www.traversymedia.com/blog/product-filtering-ui)).

### JS-01(blog article)
Lets select the items from the DOM that we need:

// Get DOM elements
```
const productsWrapper = document.getElementById('products-wrapper');
const checkboxes = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
```
const searchInput = document.getElementById('search');
const cartCount = document.getElementById('cart-count');
We will also intitialze the cart item count and the array of product elements. When I say elements, I mean the actual HTML output for each product:
```
// Initialize cart item count
let cartItemCount = 0;

// Initialize products
const productElements = [];
```


### JS-02(chatgpt)
Sure, let's break it down step by step:

1. **Defining the Function (`createProductElement`)**:
   - The `createProductElement` function is defined with one parameter, `product`.
   - This parameter is like a placeholder that allows the function to accept an input value when it's called.

2. **Calling the Function**:
   - Inside the `forEach` loop, the `createProductElement` function is called.
   - The `product` object from the `products` array is passed as an argument to the function.
   - This means that the `product` parameter in the function will take the value of the current element being processed in the loop.

3. **Using the Parameter Inside the Function**:
   - Within the `createProductElement` function, the `product` parameter is used to access properties of the product object passed to it.
   - For example, `product.url`, `product.name`, and `product.price` are used to dynamically set the `src`, `alt`, and text content of elements inside the product element being created.

4. **Returning a Value**:
   - After creating and configuring the product element, the function uses the `return` statement to send the product element back to the caller.
   - This means that wherever the `createProductElement` function is called, it will return a product element based on the input `product`.

5. **Using the Returned Value**:
   - Back in the `forEach` loop, the returned product element is assigned to the variable `productElement`.
   - This allows you to store and manipulate the product element further if needed.
   - In your case, it's pushed into the `productElementsArr` array and appended as a child to the `productsWrapper`.

So, in simple terms, the parameter `product` acts as a way for the `createProductElement` function to receive input data (the product object) from the caller (the `forEach` loop), and the `return` statement allows the function to send back a result (the created product element) to the caller.


### JS-03 (chatgpt)

1. **Event Listeners**:
   - Two event listeners are set up:
     - One for changes in the filter checkboxes (`filtersContainer`).
     - Another for input changes in the search bar (`searchInput`).
   - Both events trigger the `filterProducts` function.

2. **`filterProducts` Function**:
   - This function handles filtering products.
   - It starts by:
     - Getting the search term from the search input.
     - Converting the search term to lowercase and removing extra spaces.
     - Building an array of checked category IDs from the checkboxes.