$(document).ready(function() {
    $("#calculate").click(function() {
        let hours = parseFloat($("#hours").val());  // Convert hours to a number
        let rate = parseFloat($("#rate").val());   // Convert rate to a number
        console.log("Hours:", hours, "Rate:", rate);

        // Input validation
        if (isNaN(hours) || hours <= 0) {
            $("#error-message").text("Please enter a valid positive number for hours.");
            $("#total").val("");  // Clear total if invalid input
            return;
        }

        // Clear error if input is valid
        $("#error-message").text("");

        // Calculate total cost
        let total = hours * rate;
        $("#total").val(total.toFixed(2)); // Format as currency
    });
});