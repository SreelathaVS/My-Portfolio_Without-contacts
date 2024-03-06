function startBlinkAndEnlarge(button) {
    // Get the clicked button element
    var clickedButton = button;

    // Check if the button is already in the animated state
    if (!clickedButton.classList.contains("blinking-button")) {
      // Add the "blinking-button" class to the clicked button
      clickedButton.classList.add("blinking-button");

      // Add the "enlarged" class to enlarge the clicked button
      clickedButton.classList.add("enlarged");

      // Disable the clicked button to prevent further clicks during animation
      clickedButton.disabled = true;

      // Remove the classes and re-enable the button after the animation duration
      setTimeout(function() {
        clickedButton.classList.remove("blinking-button", "enlarged");
        clickedButton.disabled = false;
      }, 1000); // Duration of the animation in milliseconds
    }
  }