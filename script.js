// 🔹 Preloader Hide Animation
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 800);
});

// 🔹 Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// 🔹 Search Bar Functionality
document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchBox").value.toLowerCase();

  if (!query) {
    alert("Please enter something to search!");
    return;
  }

  let sectionFound = false;
  document.querySelectorAll("section").forEach(section => {
    const title = section.querySelector("h2")?.textContent.toLowerCase();
    if (title && title.includes(query)) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
      sectionFound = true;
    }
  });

  if (!sectionFound) {
    alert("No matching section found!");
  }
});

// 🔹 Dropdown Instant Action
const dropdownLinks = document.querySelectorAll(".dropdown-content a");
dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = "none";
    setTimeout(() => {
      dropdown.style.display = "block";
    }, 1000);
  });
});

// 🔹 Play Now Button Scroll to Game Section
const playNowBtn = document.querySelector(".play-now");
if (playNowBtn) {
  playNowBtn.addEventListener("click", () => {
    document.getElementById("games").scrollIntoView({ behavior: "smooth" });
  });
}