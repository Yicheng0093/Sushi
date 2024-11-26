// 獲取顧客建議表單相關元素
const feedbackForm = document.getElementById("customer-feedback");
const feedbackModal = document.getElementById("feedback-success-modal");
const feedbackOverlay = document.querySelector(".modal-overlay");
const closeFeedbackModalButton = document.getElementById("close-feedback-modal");

// 顧客建議表單提交事件
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 防止表單真正提交

    // 顯示浮動視窗
    feedbackModal.style.display = "block";
    feedbackOverlay.style.display = "block";

    // 清空表單內容
    feedbackForm.reset();
});

// 關閉顧客建議浮動視窗
closeFeedbackModalButton.addEventListener("click", function () {
    feedbackModal.style.display = "none";
    feedbackOverlay.style.display = "none";
});

feedbackOverlay.addEventListener("click", function () {
    feedbackModal.style.display = "none";
    feedbackOverlay.style.display = "none";
});
