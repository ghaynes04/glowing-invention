document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("contact-button");
    if (button) {
      button.addEventListener("click", () => {
        alert("Please email access@louderthanlifefestival.com if you have any questions");
      });
    }
  });