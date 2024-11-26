let selectedLocation = '';
let selectedAddress = '';

function selectLocation(location, address) {
    selectedLocation = location;
    selectedAddress = address;
    document.getElementById('selected-location').innerHTML = `已選擇門市: ${location} (${address})`;  // 顯示選擇的門市
}

function nextStep(step) {
    if (selectedLocation === '') {
        alert('請選擇一個門市!');
        return;
    }

    if (step === 2) {
        // 顯示第二步驟，隱藏第一步驟
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else if (step === 3) {
        // 顯示第三步驟，隱藏第二步驟
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
    }
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