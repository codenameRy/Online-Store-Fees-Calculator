//Function Calculate Total Fees
function calculate_total_fees() {
    let total_fees = parseFloat(document.getElementById('listing_fees').value) +
    parseFloat(document.getElementById('final_value_sold_fees').value) +
    parseFloat(document.getElementById('paypal_fees').value);
    return Math.round(total_fees * 100) / 100;
}

//Function Calculate PayPal Fees
function calculate_paypal_fees() {

}

//Function Calculate Total Amount Received
function calculate_total_amount_received() {
    let total_amount_received = 0.00;
    total_amount_received = (parseFloat(document.getElementById('finalprice_sold_price_received').value) || 0) + 
    (parseFloat(document.getElementById('finalprice_ship_price_received').value) || 0);
    if (total_amount_received <= 0) {
        total_amount_received = 0;
    }
    return total_amount_received;
}