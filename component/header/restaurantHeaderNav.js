class RestaurantHeaderNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/component/header/header.css');
    shadow.appendChild(link);

    const content = document.createElement('div');
    content.innerHTML = `
        <header>
            <div>
                <h1><slot name="title">歡迎來到美食天堂</slot></h1>
                <p><slot name="subtitle">品味幸福的每一刻</slot></p>
            </div>

            <restaurant-nav></restaurant-nav>
        </header>
    `;

    shadow.appendChild(content);
  }
}

customElements.define('restaurant-header-nav', RestaurantHeaderNav);
