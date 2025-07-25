"use strict";

/*
   Author: Diana Mora
   Final Project" Ecuador Travel"
   
   Filename:   java.js   

*/

document.addEventListener("DOMContentLoaded", () => {
  // 1. Welcome message (only on first visit)
  if (!sessionStorage.getItem("visited")) {
    alert("¡Bienvenido! Explore the beauty of Ecuador through our site.");
    sessionStorage.setItem("visited", "true");
  }

  // 2. Smooth scroll for nav links
  const navLinks = document.querySelectorAll("a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Back to Top button
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑ Top";
  backToTop.id = "backToTop";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "10px 15px";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "1000";
  backToTop.style.borderRadius = "5px";
  backToTop.style.border = "none";
  backToTop.style.backgroundColor = "#003366";
  backToTop.style.color = "#fff";
  backToTop.style.cursor = "pointer";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 4. Dynamic footer year
  const yearSpan = document.querySelector("#currentYear");
  if (yearSpan) {
    const year = new Date().getFullYear();
    yearSpan.textContent = year;
  }
});
