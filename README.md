# ACME Grocers POC UI Design

## Pages

### Login Page Functionalities
1. Customized Login Page for POC Employees
2. Employee Credentials are stored in scripts/data_store.js (JSON Object format)
3. Validations are provided dynamically 

### Data Entry Page Functionalities
1. Dynamic display of Employee ID on navigation bar
2. On clicking this employee ID, you'll be taken back to Login Page
3. Product Data and details are stored in scripts/data_store.js (JSON Object format)
4. Products are listed in th Drop Down dynamically from data_store.js
5. On selecting the product, the corresponding Unit Price is also updated as text.
6. It is possible to reset the entered values on Reset button press.
7. On 'Item Add' click, the product details (name, id, price, quantity, line price) are updated in the selected item table.
8. Validations Provided
    1. Entries in Product ID and Quantity
    2. Quantity >= 1 and Quantity <= 500  and Quantity is an integer and not a float
    3. No more than 5 products can be added to the cart
9. If same product is selected again, the quantity gets cummulated to the existing entry and the prices are re caluclated.
10. Even though 5 products are already added, we can add quantities to any of the 5 existing products.
11. Delivery Charges added only if the check box is ticked.
12. Generate Bill button can generate the bill for the products bought.

### Bill Generation Functionalities
1. Bill Number is generated uniquely based on timestamp.
2. Bill Number does not change if the button is pressed twice, without any changes in the entries in the cart.
3. If there is any update in the cart (Item Update or Delivery), the bill number is changed.
4. Bill is generated dynamically from the data in the Data Entry Page.