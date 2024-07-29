// 1. Find all the information about each product
print("1. Find all the information about each product:");
db.products.find({}).forEach(printjson);

// 2. Find the product prices which are between 400 to 800
print("2. Find the product prices which are between 400 to 800:");
db.products.find({ product_price: { $gte: 400, $lte: 800 } }).forEach(printjson);

// 3. Find the product prices which are not between 400 to 600
print("3. Find the product prices which are not between 400 to 600:");
db.products.find({ product_price: { $not: { $gte: 400, $lte: 600 } } }).forEach(printjson);

// 4. List the four products which are greater than 500 in price
print("4. List the four products which are greater than 500 in price:");
db.products.find({ product_price: { $gt: 500 } }).limit(4).forEach(printjson);

// 5. Find the product name and product material of each product
print("5. Find the product name and product material of each product:");
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 }).forEach(printjson);

// 6. Find the product with a row id of 10
print("6. Find the product with a row id of 10:");
db.products.find({ id: "10" }).forEach(printjson);

// 7. Find only the product name and product material
print("7. Find only the product name and product material:");
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 }).forEach(printjson);

// 8. Find all products which contain the value of 'Soft' in product material
print("8. Find all products which contain the value of 'Soft' in product material:");
db.products.find({ product_material: /Soft/i }).forEach(printjson);

// 9. Find products which contain product color 'indigo' and product price 492.00
print("9. Find products which contain product color 'indigo' and product price 492.00:");
db.products.find({ product_color: "indigo", product_price: 492.00 }).forEach(printjson);

// 10. Delete the products which product price value is 28
print("10. Delete the products which product price value is 28:");
db.products.deleteMany({ product_price: 28 });
