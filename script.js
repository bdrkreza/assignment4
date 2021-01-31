function handleFlight(flight, isIncrease) {
    const ticketInput = document.getElementById(flight + "count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;

    // Increase and Decrease condition
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    updatePrice()
};

// Value Input Set Function
function getInputValue(Id) {
    const ticketInput = parseInt(document.getElementById(Id).value);
    return ticketInput;
}

// call id name Set Function
function callIdNameSet(id, variable) {
    document.getElementById(id).innerText = variable;
}

// calculation function 
function updatePrice() {
    let firstClassTicket = getInputValue("classticketcount");
    let economyTicket = getInputValue("economyticketcount");

    let firstClassPrice = 150 * firstClassTicket;
    let economyTicketPrice = 100 * economyTicket;
    let subTotalPrice = firstClassPrice + economyTicketPrice;
    let tax = subTotalPrice * 0.1;
    let totalPrice = subTotalPrice + tax;

    // Ticket Price input function
    callIdNameSet("sub-totalprice", subTotalPrice);
    callIdNameSet("tax", tax);
    callIdNameSet("totalprice", totalPrice);

    // Table Booking ticket value
    callIdNameSet("firstclassnumber", firstClassTicket);
    callIdNameSet("first-class-price", firstClassPrice);
    callIdNameSet("economy-ticket-number", economyTicket)
    callIdNameSet("economy-ticket-price", economyTicketPrice)
    callIdNameSet("tax-price", tax);
    callIdNameSet("total-price", totalPrice);


}

// Booking Button function
document.getElementById("bookingBtn").addEventListener("click", function() {
    const loginArea = document.getElementById("booking-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})