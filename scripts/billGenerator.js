var html_head1 = `
<html>
        <head>
            <title>
`;

var html_head2 = `
</title>
            <script>
                //window.location.href = "EmployeeLogin.htm"
            </script>
            <style>
    
                body{
                    margin: 10px;
                }
    
                td, th{
                    text-align: center;
                    vertical-align: top;
                    font-size: 0.95em;
                }
    
                th{
                    border-bottom: 1px solid #000000;
                }
    
            </style>
        </head>`;

var html_body1 = `
<body>
            <div class="container">
                <img src="images/ACME-logo3.png" width="35%" style="padding-left: 20px">
                <p style="font-size: 0.9em;">
                    Salarpuria Touchstone, Outer Ring Road, 
                    <br>Bengaluru, Karnataka - 560103 
                    <br>GSTIN: 29***CI63*****Q
                </p>
            </div>
            <div class="container">
                <p style="font-size: 0.95em; text-align: right; ">
                    Bill No: `;

var html_body2 = `
<br>Billed By: `;

var html_body3 = `
</p>
        </div>
        <br>
        <div class="container">
            <table style="width: 100%; text-align: center;">
`;

var html_body4 = `
</table>
        </div>
        <br>
        <br>
        <div class="container">
            <table id="priceTbl" name="priceTbl">
                <tr style="height: 0px !important;">
                    <th style="width: 10%;"></th>
                    <th style="width: 10%;"></th>
                </tr>
                <tr>
                    <td><label>Total Price:</label></td>
                    <td><label id="totalPriceLabel" name="totalPriceLabel">`;

var html_body5 = `
</label></td>
                </tr>
                <tr>
                    <td><label>VAT (15%):</label></td>
                    <td><label id="totalTaxLabel" name="totalTaxLabel">
`

var html_body6 = `
</label></td>
                </tr>
                <tr>
                    <td><label>Delivery Charges:</label></td>
                    <td><label id="totalDelCharges" name="totalDelCharges">
`

var html_body7 = `
</label></td>
                </tr>
                <tr>
                    <td><label><b>Grand Total:</b></label></td>
                    <td><label id="grandTotalLabel" name="grandTotalLabel"><b>
`

var html_body8 = `
</b></label></td>
                </tr>
            </table>
        </div>
        <br>
        <br>
        <div class="container">
            <label style="text-align: center; display: block; font-weight: bold;">Thank You!! Visit Again</label>
        </div>
    </body>
</html>
`