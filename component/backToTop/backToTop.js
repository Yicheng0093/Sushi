class BackToTop extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/component/backToTop/backToTop.css');
    shadow.appendChild(link);

    // 主結構模板
    const template = document.createElement('template');
    template.innerHTML = `
          <div id="back-to-top">&#8679;</div>
        `;

    // 克隆模板內容並附加到 Shadow DOM
    shadow.appendChild(template.content.cloneNode(true));
  }

  // 動態載入頁面內容
  connectedCallback() {
    const backToTopButton = this.shadowRoot.querySelector('#back-to-top');

    // 顯示或隱藏按鈕
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    // 點擊回到頂端
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}

customElements.define('back-to-top', BackToTop);
