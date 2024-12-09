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
        
        // 等待 2 秒後跳轉回首頁
        setTimeout(function() {
            window.location.href = 'index.html'; // 跳轉到首頁
        }, 2000); // 設定 2 秒延遲
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