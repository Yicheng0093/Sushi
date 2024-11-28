class RestaurantFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/component/footer/footer.css');
    shadow.appendChild(link);

    const content = document.createElement('div');
    content.innerHTML = `
        <footer>
            <div class="container">
                <!-- 插入卡片 -->
                <card-component>
                    <span slot="title">聯絡我們</span>
                    <div slot="content">
                        <p>地址：100025台北市中正區濟南路一段321號</p>
                        <p>電話：(02)33222777</p>
                        <p>
                        電子郵件：<a href="mailto:info@ntub.edu.tw">info@ntub.edu.tw</a>
                        </p>
                        <p>
                        Facebook：
                        <a href="https://www.facebook.com/NTUB1917" target="_blank">
                        https://www.facebook.com/NTUB1917</a>
                        </p>
                    </div>
                </card-component>

                <form-card></form-card>

                <card-component>
                    <span slot="title">一般消費與團體訂購</span>
                    <div slot="content">
                        <h3>一般消費</h3>
                        <ul>
                        <li>歡迎至各門市選購，或提前電洽門市預購。</li>
                        <li>提供家庭聚餐的便利性。</li>
                        </ul>
                        <h3>各大企業、學校、戶外活動</h3>
                        <ul>
                        <li>聯絡窗口: (02)2760-2200 分機1508</li>
                        <li>
                            Email:
                            <a href="mailto:sushitakeout@sushiexpress.com.tw">
                            sushitakeout@sushiexpress.com.tw
                            </a>
                        </li>
                        <li>
                            歡迎訂購各式餐盒，敬請提前一個月來電訂購，我們將有專人為您規劃與服務
                        </li>
                        </ul>
                    </div>
                </card-component>
            </div>

            <p class="footer-center" id="contact">&copy; 2024 美食天堂。版權所有。</p>
        </footer>
    `;

    shadow.appendChild(content);
  }
}

customElements.define('restaurant-footer', RestaurantFooter);
