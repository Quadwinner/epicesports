// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    $w.onReady(function () {
        // Display a welcome message dynamically
        let currentTime = new Date().getHours();
        let greeting = getGreeting(currentTime);
        
        $w('#welcomeText').text = greeting + " Welcome to our website!";
        
        // Add a click event to the button
        $w('#actionButton').onClick(() => {
            $w('#messageBox').expand(); // Show the hidden message
            $w('#messageBox').text = "Thank you for visiting! Have a great day! 😊";
            
            // Add a fade-in effect
            $w('#messageBox').show("fade", { duration: 1000 });
        });
    });
    
    // Function to determine the appropriate greeting
    function getGreeting(hour) {
        if (hour < 12) return "Good morning!";
        else if (hour < 18) return "Good afternoon!";
        else return "Good evening!";
    }
    
});
