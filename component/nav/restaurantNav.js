class RestaurantNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/component/nav/nav.css');
    shadow.appendChild(link);

    const content = document.createElement('div');
    content.innerHTML = `
        <nav>
            <a href="./index.html">首頁</a>
            <a href="./about.html">關於我們</a>
            <a href="./menu.html">菜單</a>
            <a href="./reservation.html">訂位</a>
            <a href="./talent_recruitment.html">人才招募</a>
        </nav>
      `;

    shadow.appendChild(content);
  }
}
customElements.define('restaurant-nav', RestaurantNav);

// export default RestaurantNav;
