    // 獲取元素
    const form = document.getElementById("application-form");
    const modal = document.getElementById("success-modal");
    const overlay = document.querySelector(".modal-overlay");
    const closeModalButton = document.getElementById("close-modal");

    // 表單提交事件
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // 防止表單真正提交

        // 顯示浮動視窗
        modal.style.display = "block";
        overlay.style.display = "block";

        // 清空表單內容
        form.reset();
    });

    // 關閉浮動視窗
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });