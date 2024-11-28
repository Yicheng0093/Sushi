class FormCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/component/footer/formCard/form.css');
    shadow.appendChild(link);

    shadow.innerHTML += `
        <div class="card">
          <h3>顧客建議</h3>
          <div class="content">
            <form id="customer-feedback">
            <label for="name">姓名：</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="請輸入您的姓名"
                required
            />
            <label for="email">電子郵件：</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="請輸入您的電子郵件"
                required
            />
            <label for="suggestion">建議內容：</label>
            <textarea
                id="suggestion"
                name="suggestion"
                rows="4"
                placeholder="請輸入您的建議或反饋"
                required
            ></textarea>
            <button type="submit">提交建議</button>
            </form>
          </div>
        </div>
      `;

    const form = shadow.getElementById('customer-feedback');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('感謝您的建議！');
    });
  }
}

customElements.define('form-card', FormCard);
