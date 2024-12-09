let selectedLocation = '';
let selectedAddress = '';

function selectLocation(location, address) {
    selectedLocation = location;
    selectedAddress = address;
    document.getElementById('selected-location').innerHTML = `已選擇門市: ${location} (${address})`;  // 顯示選擇的門市
}

function nextStep(step) {
    if (step === 2) {
        // 確保門市已選擇
        if (selectedLocation === '') {
            alert('請選擇一個門市!');
            return;
        }
    } else if (step === 3) {
        // 檢查第二步驟的必填欄位
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const people = document.getElementById('people').value;
        const diningHour = document.getElementById('dining-hour').value;

        if (!date || !time || !people || !diningHour) {
            alert('請完成所有欄位的填寫！');
            return;
        }
    }

    // 顯示對應的步驟，隱藏當前步驟
    document.getElementById(`step${step - 1}`).style.display = 'none';
    document.getElementById(`step${step}`).style.display = 'block';
}
function submitReservation() {
    // 取得用戶輸入的資料
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (date && time && name && phone) {
        // 顯示訂位成功的提示框
        alert('訂位成功！');

        window.location.href = 'reservation.html'; // 跳轉到首頁

    } else {
        alert('請完成所有欄位的填寫！');
    }
}

function previousStep(step) {
    // 隱藏當前步驟
    document.getElementById(`step${step}`).style.display = 'none';
    // 顯示前一步驟
    document.getElementById(`step${step - 1}`).style.display = 'block';
}

function resetReservation() {
    window.location.href = 'reservation.html'; // 跳轉到首頁
}

function setDateRestrictions() {
    const dateInput = document.getElementById('date');
  
    // 獲取今天的日期並加1天
    const today = new Date();
    today.setDate(today.getDate() + 1);  // 明天
  
    // 格式化為 yyyy-mm-dd 格式
    const tomorrow = today.toISOString().split('T')[0];
  
    // 設定日期最小值為明天
    dateInput.setAttribute('min', tomorrow);
}

// 設定時間限制與檢查
function setTimeRestrictions() {
    const timeInput = document.getElementById('time');
  
    // 當時間變更時檢查是否在 11:00 到 22:00 範圍內
    timeInput.addEventListener('input', function() {
        var time = this.value;
        if (time < '11:00' || time > '22:00') {
            alert('請選擇 11:00 到 22:00 之間的時間');
            this.value = ''; // 清除不符合的時間
        }
    });
  
    // 設定時間預設值（可選）
    timeInput.value = '11:00';  // 預設時間
}

// 當頁面加載完成後，設定日期和時間的限制
window.onload = function() {
    setDateRestrictions();
    setTimeRestrictions();
};