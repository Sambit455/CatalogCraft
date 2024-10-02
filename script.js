const productsPerPage = 10;
let currentPage = 1;

// Embedded product data
const products = [
  { "id": 1, "name": "Product 1", "price": "$10", "description": "Description for Product 1" },
  { "id": 2, "name": "Product 2", "price": "$12", "description": "Description for Product 2" },
  { "id": 3, "name": "Product 3", "price": "$15", "description": "Description for Product 3" },
  { "id": 4, "name": "Product 4", "price": "$8", "description": "Description for Product 4" },
  { "id": 5, "name": "Product 5", "price": "$20", "description": "Description for Product 5" },
  { "id": 6, "name": "Product 6", "price": "$25", "description": "Description for Product 6" },
  { "id": 7, "name": "Product 7", "price": "$30", "description": "Description for Product 7" },
  { "id": 8, "name": "Product 8", "price": "$18", "description": "Description for Product 8" },
  { "id": 9, "name": "Product 9", "price": "$40", "description": "Description for Product 9" },
  { "id": 10, "name": "Product 10", "price": "$22", "description": "Description for Product 10" },
  { "id": 11, "name": "Product 11", "price": "$15", "description": "Description for Product 11" },
  { "id": 12, "name": "Product 12", "price": "$35", "description": "Description for Product 12" },
  { "id": 13, "name": "Product 13", "price": "$50", "description": "Description for Product 13" },
  { "id": 14, "name": "Product 14", "price": "$60", "description": "Description for Product 14" },
  { "id": 15, "name": "Product 15", "price": "$55", "description": "Description for Product 15" },
  { "id": 16, "name": "Product 16", "price": "$38", "description": "Description for Product 16" },
  { "id": 17, "name": "Product 17", "price": "$42", "description": "Description for Product 17" },
  { "id": 18, "name": "Product 18", "price": "$48", "description": "Description for Product 18" },
  { "id": 19, "name": "Product 19", "price": "$52", "description": "Description for Product 19" },
  { "id": 20, "name": "Product 20", "price": "$65", "description": "Description for Product 20" },
  { "id": 21, "name": "Product 21", "price": "$70", "description": "Description for Product 21" },
  { "id": 22, "name": "Product 22", "price": "$75", "description": "Description for Product 22" },
  { "id": 23, "name": "Product 23", "price": "$85", "description": "Description for Product 23" },
  { "id": 24, "name": "Product 24", "price": "$95", "description": "Description for Product 24" },
  { "id": 25, "name": "Product 25", "price": "$100", "description": "Description for Product 25" },
  { "id": 26, "name": "Product 26", "price": "$110", "description": "Description for Product 26" },
  { "id": 27, "name": "Product 27", "price": "$115", "description": "Description for Product 27" },
  { "id": 28, "name": "Product 28", "price": "$120", "description": "Description for Product 28" },
  { "id": 29, "name": "Product 29", "price": "$130", "description": "Description for Product 29" },
  { "id": 30, "name": "Product 30", "price": "$140", "description": "Description for Product 30" }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    // Calculate total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Get the products for the current page
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    // Display products
    paginatedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
        productList.appendChild(productItem);
    });

    // Update page info
    const pageInfo = document.getElementById('page-info');
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    // Disable/Enable buttons based on current page
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;
}

// Initial display
displayProducts();

// Handle pagination
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts();
    }
});
