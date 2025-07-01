document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Greeting: Add to bio paragraph
    const bioParagraph = document.getElementById("bio-paragraph");
    const currentTime = new Date();
    const hour = currentTime.getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    const originalText = bioParagraph.textContent;
    bioParagraph.innerHTML = `${greeting}, my name is Theodore Wright.<br><br>${originalText}`;

    // Random Quote Feature
    const quotes = [
    "'We the People' tell the government what to do; it doesn't tell us. 'We the People' are the driver; the government is the car. And we decide where it should go, and by what route, and how fast. Almost all the world's constitutions are documents in which governments tell the people what their privileges are. Our Constitution is a document in which 'We the People' tell the government what it is allowed to do. 'We the People' are free. – Ronald Reagan",
    "There's no life outside of God's way of doing things. - Jenn Johnson",
    "My concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right. - Abraham Lincoln"
];


    const randomQuoteElement = document.getElementById("random-quote");
    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuoteElement.textContent = quotes[randomIndex];
    }
    generateRandomQuote();

    // Toggle Bio/Image
    const toggleButton = document.getElementById("toggle-button");
    const profileSection = document.querySelector(".profile");
    toggleButton.addEventListener("click", () => {
        profileSection.classList.toggle("hidden");
    });
});