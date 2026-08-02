document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (typeof bootstrap !== "undefined") {
    const tooltipElements = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipElements.forEach((element) => {
      new bootstrap.Tooltip(element);
    });
  }
});
