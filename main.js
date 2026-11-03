// Falconeye Logistics — shared scripts
(function () {
  var WHATSAPP = "447954510070";

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Forms open WhatsApp with a pre-written message
  document.querySelectorAll("form[data-whatsapp]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var err = form.querySelector(".form-error");
      var missing = [];
      var lines = [form.dataset.whatsapp, ""];
      form.querySelectorAll("[data-label]").forEach(function (el) {
        var val = el.value.trim();
        if (el.required && !val) missing.push(el.dataset.label.toLowerCase());
        if (val) lines.push(el.dataset.label + ": " + val);
      });
      if (missing.length) {
        err.textContent = "Please fill in: " + missing.join(", ") + ".";
        err.hidden = false;
        return;
      }
      err.hidden = true;
      window.location.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
    });
  });
})();
