const sections = [...document.querySelectorAll(".page-section")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const pageIds = new Set(sections.map((section) => section.id));

function showPage(pageId, pushHash = false) {
  const resolvedPage = pageIds.has(pageId) ? pageId : "home";

  sections.forEach((section) => {
    section.classList.toggle("active", section.id === resolvedPage);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === resolvedPage);
  });

  const currentSection = document.getElementById(resolvedPage);
  const label = currentSection?.dataset.title || "Home";
  document.title =
    label === "Home"
      ? "Nana Akyaa Asante Yeboah | Solutions Architect"
      : `${label} | Nana Akyaa Asante Yeboah`;

  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");

  if (pushHash && window.location.hash !== `#${resolvedPage}`) {
    history.pushState(null, "", `#${resolvedPage}`);
  }

  window.scrollTo({ top: 0, behavior: "instant" });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.dataset.page;
    if (!target) return;

    event.preventDefault();
    showPage(target, true);
  });
});

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

window.addEventListener("popstate", () => {
  showPage(window.location.hash.slice(1) || "home");
});

window.addEventListener("hashchange", () => {
  showPage(window.location.hash.slice(1) || "home");
});

showPage(window.location.hash.slice(1) || "home");

document.getElementById("year").textContent = new Date().getFullYear();

/* Contact form: Formspree AJAX submission */
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const endpoint = form.getAttribute("action");

  if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
    formStatus.textContent =
      "Form setup is not complete yet. Add your Formspree form ID in index.html, or email me directly using the contact link.";
    formStatus.className = "form-status error";
    return;
  }

  const submitButton = form.querySelector(".submit-button");
  const originalText = submitButton.textContent;

  submitButton.disabled = true;
  submitButton.textContent = "Sending…";
  formStatus.textContent = "";
  formStatus.className = "form-status";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      formStatus.textContent = "Thank you — your message has been sent.";
      formStatus.className = "form-status success";
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    formStatus.textContent =
      "I couldn't send that message. Please try again or use the direct email link.";
    formStatus.className = "form-status error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});
