
let productDetails = [
    {
      "id": 1,
      "name": "Item 1",
      "productName": "Product 1",
      "price": 250.50,
      "stock": 45,
      "category": "Electronics",
      "description": "High-quality electronic gadget.",
      "rating": 4.2,
      "isAvailable": true
    },
    {
      "id": 2,
      "name": "Item 2",
      "productName": "Product 2",
      "price": 99.99,
      "stock": 120,
      "category": "Clothing",
      "description": "Stylish and comfortable wear.",
      "rating": 3.8,
      "isAvailable": true
    },
    {
      "id": 3,
      "name": "Item 3",
      "productName": "Product 3",
      "price": 450.00,
      "stock": 30,
      "category": "Home",
      "description": "Elegant home decor.",
      "rating": 4.5,
      "isAvailable": false
    },
    {
      "id": 4,
      "name": "Item 4",
      "productName": "Product 4",
      "price": 199.99,
      "stock": 85,
      "category": "Toys",
      "description": "Fun and interactive toy set.",
      "rating": 4.0,
      "isAvailable": true
    },
    {
      "id": 5,
      "name": "Item 5",
      "productName": "Product 5",
      "price": 39.99,
      "stock": 200,
      "category": "Books",
      "description": "Bestselling novel.",
      "rating": 3.5,
      "isAvailable": true
    },
    {
      "id": 6,
      "name": "Item 6",
      "productName": "Product 6",
      "price": 159.49,
      "stock": 64,
      "category": "Electronics",
      "description": "Latest wireless headphones.",
      "rating": 4.8,
      "isAvailable": false
    },
    {
      "id": 7,
      "name": "Item 7",
      "productName": "Product 7",
      "price": 78.99,
      "stock": 98,
      "category": "Clothing",
      "description": "Trendy winter jacket.",
      "rating": 4.1,
      "isAvailable": true
    },
    {
      "id": 8,
      "name": "Item 8",
      "productName": "Product 8",
      "price": 220.75,
      "stock": 55,
      "category": "Home",
      "description": "Premium kitchen set.",
      "rating": 3.9,
      "isAvailable": true
    },
    {
      "id": 9,
      "name": "Item 9",
      "productName": "Product 9",
      "price": 349.99,
      "stock": 20,
      "category": "Toys",
      "description": "Advanced RC car.",
      "rating": 4.7,
      "isAvailable": false
    },
    {
      "id": 10,
      "name": "Item 10",
      "productName": "Product 10",
      "price": 12.99,
      "stock": 150,
      "category": "Books",
      "description": "Classic literature book.",
      "rating": 3.2,
      "isAvailable": true
    },
    {
      "id": 11,
      "name": "Item 11",
      "productName": "Product 11",
      "price": 275.00,
      "stock": 30,
      "category": "Electronics",
      "description": "Smartwatch with health tracking.",
      "rating": 4.4,
      "isAvailable": true
    },
    {
      "id": 12,
      "name": "Item 12",
      "productName": "Product 12",
      "price": 89.50,
      "stock": 77,
      "category": "Clothing",
      "description": "Designer sunglasses.",
      "rating": 4.1,
      "isAvailable": true
    },
    {
      "id": 13,
      "name": "Item 13",
      "productName": "Product 13",
      "price": 389.99,
      "stock": 10,
      "category": "Home",
      "description": "Luxury bedding set.",
      "rating": 4.6,
      "isAvailable": false
    },
    {
      "id": 14,
      "name": "Item 14",
      "productName": "Product 14",
      "price": 65.99,
      "stock": 120,
      "category": "Toys",
      "description": "Educational puzzle game.",
      "rating": 4.0,
      "isAvailable": true
    },
    {
      "id": 15,
      "name": "Item 15",
      "productName": "Product 15",
      "price": 22.50,
      "stock": 90,
      "category": "Books",
      "description": "Self-improvement guide.",
      "rating": 3.7,
      "isAvailable": true
    },
    {
      "id": 16,
      "name": "Item 16",
      "productName": "Product 16",
      "price": 312.25,
      "stock": 50,
      "category": "Electronics",
      "description": "4K action camera.",
      "rating": 4.5,
      "isAvailable": true
    },
    {
      "id": 17,
      "name": "Item 17",
      "productName": "Product 17",
      "price": 59.99,
      "stock": 70,
      "category": "Clothing",
      "description": "Comfortable running shoes.",
      "rating": 4.3,
      "isAvailable": true
    },
    {
      "id": 18,
      "name": "Item 18",
      "productName": "Product 18",
      "price": 185.00,
      "stock": 40,
      "category": "Home",
      "description": "Smart home thermostat.",
      "rating": 4.4,
      "isAvailable": true
    },
    {
      "id": 19,
      "name": "Item 19",
      "productName": "Product 19",
      "price": 78.50,
      "stock": 130,
      "category": "Toys",
      "description": "Remote-controlled helicopter.",
      "rating": 4.2,
      "isAvailable": true
    },
    {
      "id": 20,
      "name": "Item 20",
      "productName": "Product 20",
      "price": 15.75,
      "stock": 200,
      "category": "Books",
      "description": "Thrilling mystery novel.",
      "rating": 3.9,
      "isAvailable": true
    }
  ]
  
let p =  productDetails.map((products, index , arr)=>{
    return products.productName;
    
});
let g =  productDetails.filter((products, index , arr)=>{
    return products.price < 50;
    
});
// console.log(p);
// console.log(g);

