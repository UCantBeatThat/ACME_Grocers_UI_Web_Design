var prodID, prodQty;

var itemCount = 0, totalPrice = 0, totalTax = 0, deliveryCharges = 0, grandTotal = 0;

var cartItems = [];

var billNumber, isBillGeneratedOnce = false;

var billDetails = [];

var docString = ``;

var empID;

function init() {

    var url_query = new URLSearchParams(window.location.search);

    empID = url_query.get("EmployeeID");
    document.getElementById("empName").innerHTML = empID + "&emsp13;&emsp13;";

    var productDDL = document.getElementById("ddlProductID");
    var ddlItemElement, ddlItemText;
    for (var i = 0; i < productDetails.length; i++) {
        ddlItemElement = document.createElement("option");
        ddlItemElement.setAttribute("value", productDetails[i].id);
        ddlItemText = document.createTextNode(productDetails[i].id + " | " + productDetails[i].title);
        ddlItemElement.appendChild(ddlItemText);

        productDDL.appendChild(ddlItemElement);
    }

    addEventsToElements();

    prodID = document.getElementById("ddlProductID");
    prodQty = document.getElementById("productQty");
}

function addEventsToElements() {
    document.getElementById("ddlProductID").addEventListener("change", function () {
        ddlItemUpdate(this.value);
    });
    document.getElementById("prodReset").addEventListener("click", clearItems);

    document.getElementById("addItemBtn").addEventListener("click", addItemOnClick);

    document.getElementById("delCharges").addEventListener("click", checkDelivery);

    document.getElementById("generateBill").addEventListener("click", generateBill);
}

function ddlItemUpdate(value) {
    for (var i = 0; i < productDetails.length; i++) {
        if (productDetails[i].id == value) {
            document.getElementById("prodPrice").innerHTML = "&#x20B9; " + productDetails[i].price;
            break;
        }
    }
}

function clearItems() {
    document.getElementById("prodPrice").innerHTML = "<i>-- Select Product --</i>";
    prodID.setAttribute("style", "");
    prodQty.setAttribute("style", "");
}

function addItemOnClick() {

    if (prodID.value == "" && prodQty.value == "") {
        alert("Please Select Product and Enter Quantity!");
        makeInputBorderRed(prodID);
        makeInputBorderRed(prodQty);
    }
    else if (prodID.value == "") {
        alert("Please Select Prodct!");
        makeInputBorderRed(prodID);
    }
    else if (prodQty.value == "") {
        alert("Please Enter Quantity!");
        makeInputBorderRed(prodQty);
    }
    else if (!(prodQty.value >= 1) || !(prodQty.value % 1 === 0)) {
        alert("Please Enter Valid Quantity!");
        makeInputBorderRed(prodQty);
    }
    else {
        enterRecord(prodID.value, prodQty.value);
        prodID.selectedIndex = 0;
        prodQty.value = "";
        clearItems();
        isBillGeneratedOnce = false;
    }
}

function makeInputBorderRed(element) {
    element.setAttribute("style", "border: 3px solid #7a1515 !important");
}

function enterRecord(id, qty) {

    var entryTable = document.getElementById("entryTable");

    var name, price;
    for (var i = 0; i < productDetails.length; i++) {
        if (productDetails[i].id == id) {
            name = productDetails[i].title;
            price = productDetails[i].price;
            break;
        }
    }

    var lineTotal = 0;

    if (cartItems.includes(id)) {
        var itemRow = document.getElementById(id).childNodes;
        var updated_qty = parseInt(itemRow[4].innerHTML) + parseInt(qty);

        var unitPrice = parseFloat(itemRow[3].innerHTML);
        itemRow[4].innerHTML = updated_qty;
        lineTotal = Math.round(updated_qty * unitPrice * 100) / 100;

        var prevLineTotal = parseFloat(itemRow[5].innerHTML);
        itemRow[5].innerHTML = lineTotal;

        totalPrice -= prevLineTotal;
    }
    else {

        if (itemCount >= 5) {
            alert("Only 5 Items can be added to the Cart!");
        }
        else {

            cartItems.push(id);

            lineTotal = Math.round(price * qty * 100) / 100;

            var addRow = document.createElement("tr");
            addRow.setAttribute("id", id);

            var addCol, colText;

            addCol = document.createElement("td");
            colText = document.createTextNode(++itemCount);
            addCol.appendChild(colText);
            addRow.appendChild(addCol);

            addCol = document.createElement("td");
            colText = document.createTextNode(id);
            addCol.appendChild(colText);
            addRow.appendChild(addCol);

            addCol = document.createElement("td");
            colText = document.createTextNode(name);
            addCol.appendChild(colText);
            addRow.appendChild(addCol);

            addCol = document.createElement("td");
            colText = document.createTextNode(price);
            addCol.appendChild(colText);
            addRow.appendChild(addCol);

            addCol = document.createElement("td");
            colText = document.createTextNode(qty);
            addCol.appendChild(colText);
            addRow.appendChild(addCol);

            addCol = document.createElement("td");
            colText = document.createTextNode(lineTotal);
            addCol.appendChild(colText);
            addRow.appendChild(addCol);

            entryTable.appendChild(addRow);
        }
    }
    totalPrice += lineTotal;
    totalPrice = (Math.round(totalPrice * 100) / 100);

    document.getElementById("totalPriceLabel").innerHTML = "&#x20B9; " + totalPrice;

    totalTax = Math.round(totalPrice * 0.15 * 100) / 100;
    document.getElementById("totalTaxLabel").innerHTML = "&#x20B9; " + totalTax;

    grandTotal = (Math.round((totalPrice + totalTax) * 100) / 100) + deliveryCharges;
    document.getElementById("grandTotalLabel").innerHTML = "&#x20B9; " + grandTotal;

}

function checkDelivery() {
    var delivElement = document.getElementById("delCharges");
    if (delivElement.checked == true) {
        deliveryCharges = 10;
    }
    else {
        deliveryCharges = 0;
    }

    document.getElementById("totalDelCharges").innerHTML = "&#x20B9; " + deliveryCharges;

    grandTotal = (Math.round((totalPrice + totalTax) * 100) / 100) + deliveryCharges;
    document.getElementById("grandTotalLabel").innerHTML = "&#x20B9; " + grandTotal;

    isBillGeneratedOnce = false;
}

function generateBill() {

    if (itemCount == 0) {
        alert("Please add atleast one item to the cart!");
    }
    else {
        if (!isBillGeneratedOnce) {

            var currDate = new Date();
            billNumber = "ACM_" + currDate.getTime();

            billItemTbl = "<table>" + document.getElementById("entryTable").innerHTML + "</table>";

            billTitle = "Bill No:" + billNumber + " | ACME Grocers"

            docString = html_head1 + billTitle + html_head2 + html_body1 + billNumber + html_body2 + empID + html_body3 + billItemTbl + html_body4 + totalPrice + html_body5 + totalTax + html_body6 + deliveryCharges + html_body7 + grandTotal + html_body8;

            isBillGeneratedOnce = true;
        }

        var billingWindow = window.open("", "Bill", "width=400, height=600, top=80, left=500");
        billingWindow.document.write(docString);
    }
}