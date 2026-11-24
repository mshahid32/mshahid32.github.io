(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};
  var menuButton = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      navLinks.classList.toggle("open", !open);
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        navLinks.classList.remove("open");
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var emailLink = document.getElementById("email-link");
  if (emailLink) {
    if (config.contactEmail) {
      emailLink.href = "mailto:" + config.contactEmail;
      emailLink.textContent = "Email";
    } else {
      emailLink.href = "#contact";
      emailLink.title = config.emailPlaceholder;
      emailLink.setAttribute("aria-label", config.emailPlaceholder);
    }
  }

  var linkedinLink = document.getElementById("linkedin-link");
  if (linkedinLink && config.linkedinUrl) {
    linkedinLink.href = config.linkedinUrl;
    linkedinLink.hidden = false;
  }

  document.querySelectorAll("[data-game]").forEach(function (link) {
    var gameKey = link.getAttribute("data-game");
    var store = link.getAttribute("data-store");
    var game = config.games && config.games[gameKey];
    var storeUrl = store === "ios" ? game && game.appStoreUrl : game && game.googlePlayUrl;
    var storeName = store === "ios" ? "App Store" : "Google Play";
    if (storeUrl) {
      link.href = storeUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.innerHTML = "View on " + storeName + " <span aria-hidden=\"true\">→</span>";
    } else {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      link.textContent = storeName + " · Coming Soon";
      link.addEventListener("click", function (event) { event.preventDefault(); });
    }
  });

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("visible"); });
  }
})();
