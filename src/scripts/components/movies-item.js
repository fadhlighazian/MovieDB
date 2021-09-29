class MoviesItem extends HTMLElement {
  constructor() {
    super();
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="box-movie text-center">
            <div class="poster-image">
                <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}">
            </div>
            <div class="content">
                <p class="title">${this._movie.title}</p>
                <p class="rating"><img src="./images/Vector.svg" width="18"> ${this._movie.vote_average}</p>
            </div>
        </div>
          `;
  }
}

customElements.define("movies-item", MoviesItem);
