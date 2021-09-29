import css from "bootstrap/dist/css/bootstrap.min.css";

class FooterItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    ${css}
    </style>
          <footer class="text-center text-white" style="background-color: black;">
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2021 Copyright by Ghazian Fadhli Fakhrusy
            </div>
        </footer>
          `;
  }
}

customElements.define("footer-item", FooterItem);
