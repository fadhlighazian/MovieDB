import css from "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends HTMLElement {
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
        <nav class="navbar navbar-dark fixed-top" style="background-color:#000">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./images/movielogo.png" width="30" height="30" class="d-inline-block align-text-top">
                The Movie
            </a>
        </div>
    </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
