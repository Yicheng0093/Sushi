class RestaurantNavHome extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', '/component/navHome/nav.css');
      shadow.appendChild(link);

      const content = document.createElement('div');
      content.innerHTML = `
          <nav>
              <a href="./index.html">首頁</a>
              <a href="#about">關於我們</a>
              <a href="#menu">菜單</a>
              <a href="#reservation">訂位</a>
              <a href="#talent_recruitment">人才招募</a>
          </nav>
        `;

      shadow.appendChild(content);
    }
  }
  customElements.define('restaurant-nav-home', RestaurantNavHome);
