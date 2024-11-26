document.addEventListener("DOMContentLoaded", () => {
    // 對應 JSON 文件的 URL
    const jsonUrl = `../static/data/menu.json`;

    // 取得菜單容器的 DOM 元素
    const menuContainer = document.querySelector(".menu-container");

    // 使用 Fetch API 獲取 JSON 資料
    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("無法讀取菜單資料");
        }
        return response.json();
      })
      .then((data) => {
        // 確保有資料
        if (!data || data.length === 0) {
          menuContainer.innerHTML = "<p>目前沒有菜單項目。</p>";
          return;
        }

        // 遍歷資料並生成 HTML
        data.forEach((item) => {
          const menuItem = document.createElement("div");
          menuItem.classList.add("menu-item");

          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.name_en}</p>
            <p class="price">${item.price}</p>
            <div class="more-info">
              <a href="#">更多資訊</a>
            </div>
          `;

          // 將生成的菜單項目添加到容器
          menuContainer.appendChild(menuItem);
        });
      })
      .catch((error) => {
        console.error("錯誤:", error);
        menuContainer.innerHTML = "<p>菜單載入失敗，請稍後重試。</p>";
      });
  });
