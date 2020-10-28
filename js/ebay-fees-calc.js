//Main Function to calculate fees
function calculate_fees() {
    let is_fixed_price_type = true;
    let listing_fees = 0.00;
}

//Function Calculate Total Fees
function calculate_total_fees() {
    let total_fees = parseFloat(document.getElementById('listing_fees').value) +
    parseFloat(document.getElementById('final_value_sold_fees').value) +
    parseFloat(document.getElementById('paypal_fees').value);
    console.log(total_fees);
    return Math.round(total_fees * 100) / 100;
    
}

//Function Calculate Total Amount Received
function calculate_total_amount_received() {
    let total_amount_received = 0.00;
    total_amount_received = (parseFloat(document.getElementById('final_sold_price_received').value) || 0) + 
    (parseFloat(document.getElementById('final_ship_price_received').value) || 0);
    if (total_amount_received <= 0) {
        total_amount_received = 0;
    }
    console.log(total_amount_received);
    return total_amount_received;
}

//Function Calculate Total Amount Paid
function calculate_total_amount_paid() {
    let total_amount_paid = 0.00;
    total_amount_paid = (parseFloat(document.getElementById('final_purchase_price_paid').value) || 0) +
    (parseFloat(document.getElementById('final_ship_price_paid').value) || 0);
    if (total_amount_paid <= 0) {
        total_amount_paid = 0.00;
    }
    console.log(total_amount_paid)
    return total_amount_paid;
}

//Function Calculate PayPal Fees
function calculate_paypal_fees() {
    let total_amount_received = calculate_total_amount_received();
    if (total_amount_received <= 0) {
        return 0.00;
    }
    let paypal_fees = total_amount_received * 0.029 + 0.30;
    paypal_fees = Math.round(paypal_fees * 100) /100;
    console.log(paypal_fees);
    return paypal_fees;
}

//Function Calculate Profit
function calculate_profit() {
    return Math.round(parseFloat(calculate_total_amount_received()) - 
    parseFloat(calculate_total_fees()) - parseFloat(calculate_total_fees()) * 100) /100;
}