class ActorsItem extends HTMLElement {
  constructor() {
    super();
  }

  set actor(actor) {
    this._actor = actor;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="box-actors text-center">
            <div class="poster-image">
                <img src="https://image.tmdb.org/t/p/w500${this._actor.profile_path}">
            </div>
            <div class="content">
                <p class="title">${this._actor.name}</p>
            </div>
        </div>
        `;
  }
}

customElements.define("actors-item", ActorsItem);
