// Simple widget: Show a greeting alert when booking form is submitted
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.booking form');
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for booking with First Class Limo!\nWe'll contact you soon with details.");
      form.reset();
    });
  }
});

