//welcome and entry messages
console.log("Data management with objects, sets, and maps");
console.log("¡Welcome to the system!");

//Step 1: Create an object called 'products' with 6 products, Each product contains a unique 'id', a 'name' and a 'price'.
const products = {
    product1: { id: 102, name: "wireless mouse", price: 150000 },
    product2: { id: 103, name: "earphones", price: 50000 },
    product3: { id: 104, name: "wireless keyboard", price: 180000 },
    product4: { id: 105, name: "wireless mouse", price: 160000 },
    product5: { id: 106, name: "earphones", price: 55000 },
    product6: { id: 107, name: "wireless keyboard", price: 120000 },
};

//We show the complete original object
console.log("object products", products);

// Step 2: Create a Set to remove duplicate products by name, We use Object.values() to get the values from the object, and then map() to extract only the names
const setProducts = new Set(Object.values(products).map(product => product.name));

//We show the unique names in the Set
console.log("Set of unique products:", setProducts);

//Step 3: Create a Map to associate a category with each type of product. The Map has the category as its key and the product name as its value.
const mapProducts = new Map([
    ["accessories", "wireless mouse"],
    ["technology", "earphones"],
    ["peripheral", "wireless keyboard"],
]);

//We show the complete Map
console.log("Map of products and category:", mapProducts);

//Step 4:Loop through the 'products' object using for...in, showing each key of the object (product1, product2, etc.) and their values
for (const id in products) {
    console.log(`Product ID: ${id}, Detalles:`, products[id]);
}

//Step 4.1:Loop through the Set using for...of, We display the unique names of the products
for (const product of setProducts) {
    console.log("Unique product:", product);
}

//Step 4.2:Loop through the Map using forEach(), showing each category along with the corresponding product name
mapProducts.forEach((product, category) => {
    console.log(`Category: ${category}, Product: ${product}`);
});

//Step 5: Final testing and validation
console.log("Complete test of data management");
console.log("Products list (object):", products);
console.log("List of unique products (Set):", setProducts);
console.log("Categories and products (Map):", mapProducts);

//farewell message
console.log("¡Thank you for using our system!");