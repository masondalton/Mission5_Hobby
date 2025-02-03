$(document).ready(function() {
    $("#calculate").click(function() {
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        // Input validation
        if (!hours || hours <= 0) {
            $("#error-message").text("Please enter a valid positive number.");
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