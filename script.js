const statsData = [
  {
    iconSrc: "./public/icons/clients-icon.png",
    count: "500+",
    label: "Clients",
  },
  {
    iconSrc: "./public/icons/success-icon.png",
    count: "98%",
    label: "Success",
  },
  {
    iconSrc: "./public/icons/support-icon.png",
    count: "24h",
    label: "Support",
  },
];

function renderStatusCards() {
  const container = document.getElementById("status-cards-container");
  if (!container) return;

  container.innerHTML = statsData
    .map(
      (stat) => `
        <div class="status-item">
            <div style="margin-left:15px; width:40px; height:40px; border-radius:12px; background:linear-gradient(135deg,rgba(33,131,237,0.2),rgba(90,162,242,0.05)); display:flex; align-items:center; justify-content:center;">
                <img src="${stat.iconSrc}" style="width:24px; height:24px; object-fit:contain;">
            </div>
            <p style="margin-left:15px; font-weight:700; font-size:20px;">${stat.count} ${stat.label}</p>
        </div>
    `
    )
    .join("");
}

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

if (menuToggle && mobileMenu && menuIcon) {
  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    menuIcon.innerHTML = isHidden
      ? '<path d="M4 6h16M4 12h16m-7 6h7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
      : '<path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  });

  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      !mobileMenu.classList.contains("hidden")
    ) {
      mobileMenu.classList.add("hidden");
      menuIcon.innerHTML =
        '<path d="M4 6h16M4 12h16m-7 6h7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
  });
}

const mobileServicesBtn = document.getElementById("mobileServicesBtn");
const mobileServicesMenu = document.getElementById("mobileServicesMenu");

if (mobileServicesBtn && mobileServicesMenu) {
  mobileServicesBtn.addEventListener("click", () => {
    mobileServicesMenu.classList.toggle("hidden");
    mobileServicesBtn.classList.toggle("active");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          menuIcon.innerHTML =
            '<path d="M4 6h16M4 12h16m-7 6h7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderStatusCards();
});
