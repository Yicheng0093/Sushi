class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/component/footer/card/card.css');
    shadow.appendChild(link);

    shadow.innerHTML += `
      <div class="card">
        <h3><slot name="title"></slot></h3>
        <div class="content"><slot name="content"></slot></div>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
