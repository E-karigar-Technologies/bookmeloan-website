class SiteNavbar extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("theme-base")) {
      const style = document.createElement("style");
      style.id = "theme-base";
      style.textContent = `
        :root { font-size: 18px; }
        @media (max-width: 640px) { :root { font-size: 16px; } }
      `;
      document.head.appendChild(style);
    }

    document.body.classList.add("pt-0", "md:pt-0");
    this.innerHTML = `
      <header class="fixed top-2 left-1/2 z-50 w-[90vw] max-w-[1680px] -translate-x-1/2">
        <div class="relative flex items-center justify-between gap-4 rounded-full border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur md:px-6">
          <div class="flex items-center gap-3 text-emerald-700">
            <img src="./image.png" alt="Book Me Loan" class="h-9 w-auto" />
          </div>

          <nav class="hidden items-center gap-6 text-xs font-semibold md:flex">
            <a data-nav="home" class="text-slate-600 transition hover:text-emerald-700" href="./index.html">Home</a>
            <a data-nav="about" class="text-slate-600 transition hover:text-emerald-700" href="./about-us.html">About Us</a>
            <a data-nav="services" class="text-slate-600 transition hover:text-emerald-700" href="./services.html">Services</a>
            <a data-nav="contact" class="text-slate-600 transition hover:text-emerald-700" href="./contact-us.html">Contact Us</a>
          </nav>

          <div class="flex items-center gap-3">
            <button class="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-emerald-600">
              Download the App
            </button>
            <button
              class="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-100 text-emerald-700 md:hidden"
              aria-label="Toggle menu"
              aria-expanded="false"
              data-menu-button
            >
              <span class="flex flex-col gap-1">
                <span class="h-0.5 w-4 rounded-full bg-emerald-700"></span>
                <span class="h-0.5 w-4 rounded-full bg-emerald-700"></span>
                <span class="h-0.5 w-4 rounded-full bg-emerald-700"></span>
              </span>
            </button>
          </div>

          <div
            class="absolute left-0 top-full mt-3 hidden w-full rounded-3xl border border-emerald-100 bg-white/95 p-4 text-emerald-700 shadow-lg backdrop-blur md:hidden"
            data-menu-panel
          >
            <nav class="grid gap-3 text-sm font-semibold">
              <a data-nav="home" class="rounded-full px-4 py-2 text-emerald-700/80 transition hover:bg-emerald-50 hover:text-emerald-700" href="./index.html">Home</a>
              <a data-nav="about" class="rounded-full px-4 py-2 text-emerald-700/80 transition hover:bg-emerald-50 hover:text-emerald-700" href="./about-us.html">About Us</a>
              <a data-nav="services" class="rounded-full px-4 py-2 text-emerald-700/80 transition hover:bg-emerald-50 hover:text-emerald-700" href="./services.html">Services</a>
              <a data-nav="contact" class="rounded-full px-4 py-2 text-emerald-700/80 transition hover:bg-emerald-50 hover:text-emerald-700" href="./contact-us.html">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>
    `;

    const active = this.getAttribute("active");
    if (!active) return;

    const links = this.querySelectorAll(`[data-nav="${active}"]`);
    links.forEach((link) => {
      link.classList.remove("text-slate-600");
      link.classList.remove("text-emerald-700/80");
      link.classList.add("text-emerald-700");
    });

    const menuButton = this.querySelector("[data-menu-button]");
    const menuPanel = this.querySelector("[data-menu-panel]");
    if (menuButton && menuPanel) {
      menuButton.addEventListener("click", () => {
        const isOpen = !menuPanel.classList.contains("hidden");
        menuPanel.classList.toggle("hidden", isOpen);
        menuButton.setAttribute("aria-expanded", String(!isOpen));
      });

      menuPanel.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menuPanel.classList.add("hidden");
          menuButton.setAttribute("aria-expanded", "false");
        });
      });
    }
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="border-t border-emerald-100 bg-emerald-50/30">
        <div class="mx-auto max-w-6xl px-6 py-12">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Left: Book Me Loan Info + Socials -->
            <div>
              <h3 class="text-sm font-semibold text-emerald-700">Book Me Loan</h3>
              <p class="mt-3 text-xs text-slate-600">
                India’s most trusted loan booking platform offering the best interest rates and fastest approvals.
              </p>
              <div class="mt-4 flex gap-3">
                <!-- Social icons -->
                <a href="#" class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
                  <!-- Facebook -->
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.876v-6.987H7.898v-2.889h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.889h-2.33v6.987C18.343 21.128 22 17 22 12z"/>
                  </svg>
                </a>
                <a href="#" class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
                  <!-- Twitter -->
                 <!-- YouTube -->
<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
  <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.7 3.7 12 3.7 12 3.7s-7.7 0-9.5.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.8 15.5V8.5l6 3.5-6 3.5z"/>
</svg>

                </a>
                <a href="#" class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
                  <!-- LinkedIn -->
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm13.5 11.25h-3v-5.5c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.89v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.55v6.65z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/bookmeloan?igsh=aXRiZmdseGh5dmI1&utm_source=qr" class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
                  
                 <!-- Instagram Proper -->
<!-- Instagram Clean Outline -->
<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
  <circle cx="12" cy="12" r="4"></circle>
  <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none"></circle>
</svg>


                </a>
              </div>
            </div>

            <!-- Loan Products -->
            <div>
              <h4 class="text-xs font-semibold text-slate-900">Loan Products</h4>
              <ul class="mt-3 space-y-2 text-xs text-slate-600">
                <li>Personal Loan</li>
                <li>Business Loan</li>
                <li>Vehicle Loan</li>
                <li>Education Loan</li>
                <li>Home Loan</li>
              </ul>
            </div>

            <!-- Resources -->
            <div>
              <h4 class="text-xs font-semibold text-slate-900">Resources</h4>
              <ul class="mt-3 space-y-2 text-xs text-slate-600">
                <li><a class="transition hover:text-emerald-700" href="./emi-calculator.html">EMI Calculator</a></li>
                <li><a class="transition hover:text-emerald-700" href="./services.html">Eligibility Check</a></li>
                <li><a class="transition hover:text-emerald-700" href="./services.html">Interest Rates</a></li>
                <li><a class="transition hover:text-emerald-700" href="./faqs.html">FAQs</a></li>
                <li><a class="transition hover:text-emerald-700" href="./blog.html">Blog</a></li>
              </ul>
            </div>

            <!-- Contact Us with proper icons -->
            <div>
              <h4 class="text-xs font-semibold text-slate-900">Contact Us</h4>
              <ul class="mt-3 space-y-2 text-xs text-slate-600">
                <li class="flex items-center gap-2">
                  <!-- Phone icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h1.28a2 2 0 011.95 1.52l.35 1.41a2 2 0 01-.45 1.93l-1.27 1.27a16 16 0 006.59 6.59l1.27-1.27a2 2 0 011.93-.45l1.41.35a2 2 0 011.52 1.95V19a2 2 0 01-2 2h-0.5C6.477 21 3 17.523 3 13.5V5z"/>
                  </svg>
                  +91 92176 61445 
                </li>
                <li class="flex items-center gap-2">
                  <!-- Email icon -->
                  <svg class="w-4 h-4 text-emerald-700" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16z"/></svg>
                  support@bookmeloan.com
                </li>
              
                <li class="flex items-center gap-2">
                  <!-- Location / Map pin icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C8 2 4 6 4 11c0 5.25 8 11 8 11s8-5.75 8-11c0-5-4-9-8-9z"/>
                  </svg>
                  New delhi, India
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-100 pt-6 text-xs text-slate-500">
            <span>© ${new Date().getFullYear()} Book Me Loan. All rights reserved.</span>
            <div class="flex flex-wrap gap-4">
              <a class="transition hover:text-emerald-700" href="./privacy-policy.html">Privacy Policy</a>
              <a class="transition hover:text-emerald-700" href="./terms-and-conditions.html">Terms of Service</a>
              <a class="transition hover:text-emerald-700" href="./refund-policy.html">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-navbar", SiteNavbar);
customElements.define("site-footer", SiteFooter);
