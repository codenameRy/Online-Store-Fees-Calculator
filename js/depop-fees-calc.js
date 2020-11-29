//Main Function to calculate fees
function calculate_fees() {
    // let is_fixed_price_type = true;
    let listing_fees = 0.0;

    //Listing Fees
    document.getElementById('listing_fees').value = listing_fees;

    //Final Value Fees
    let total_amount_received = calculate_total_amount_received();
    let fees_charge = 0.10;

    let final_value_sold_fees = fees_charge * total_amount_received;

    final_value_sold_fees = Math.round(final_value_sold_fees * 100) / 100;
    document.getElementById('final_value_sold_fees').value = final_value_sold_fees;

    //PayPal Fees
    document.getElementById('paypal_fees').value = calculate_paypal_fees();

    //Total Fees
    document.getElementById('total_fees').value = calculate_total_fees();

    //Profit
    let profit = calculate_profit();
    document.getElementById('profit').value = profit;

    if (profit < 0.0) {
        document.getElementById('profit').style.color = 'red';
    } else {
        document.getElementById('profit').style.color = 'green';
    }

}

//Function Calculate Total Fees
function calculate_total_fees() {
    let total_fees = parseFloat(document.getElementById('listing_fees').value) +
    parseFloat(document.getElementById('final_value_sold_fees').value) +
    parseFloat(document.getElementById('paypal_fees').value);
    return Math.round(total_fees * 100) / 100;
    
}

//Function Calculate PayPal Fees
function calculate_paypal_fees() {
    let total_amount_received = calculate_total_amount_received();
    if (total_amount_received <= 0) {
        return 0;
    }
    let paypal_fees = total_amount_received * 0.029 + 0.30;
    paypal_fees = Math.round(paypal_fees * 100) /100;
    return paypal_fees;
}

//Function Calculate Profit
function calculate_profit() {
    return Math.round((parseFloat(calculate_total_amount_received()) - 
    parseFloat(calculate_total_amount_paid()) - parseFloat(calculate_total_fees())) * 100) /100;
}

//Function Calculate Total Amount Received
function calculate_total_amount_received() {
    let total_amount_received = 0.0;
    total_amount_received = (parseFloat(document.getElementById('final_sold_price_received').value) || 0) + 
    (parseFloat(document.getElementById('final_ship_price_received').value) || 0);
    if (total_amount_received <= 0) {
        total_amount_received = 0.0;
    }
    return total_amount_received;
}

//Function Calculate Total Amount Paid
function calculate_total_amount_paid() {
    let total_amount_paid = 0.0;
    total_amount_paid = (parseFloat(document.getElementById('final_purchase_price_paid').value) || 0) +
    (parseFloat(document.getElementById('final_ship_price_paid').value) || 0);
    if (total_amount_paid <= 0) {
        total_amount_paid = 0.0;
    }
    return total_amount_paid;
}

