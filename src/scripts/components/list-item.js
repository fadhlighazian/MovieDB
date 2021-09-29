import main from "../main";

class ListItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const textId = ["actors", "popular", "top_rated", "now_playing"];
    let title = "";
    for (let x_id of textId) {
      if (x_id == "actors") {
        title = "Popular Actors";
      } else if (x_id == "popular") {
        title = "Popular Movies";
      } else if (x_id == "top_rated") {
        title = "Top Rated Movies";
      } else {
        title = "Now Playing Movies";
      }
      this.innerHTML += `
            <div class="section-items">
                <h2 class="heading-movie">${title}</h2>
                <div class="scroll-movie" id="${x_id}"></div>
            </div>
            `;
    }
    main();
  }
}

customElements.define("list-item", ListItem);
