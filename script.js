// Hàm lưu dữ liệu vào Local Storage
function saveData() {
    var inputData = document.getElementById("dataInput").value;
    if (inputData.trim() !== "") {
        // Lấy danh sách dữ liệu đã lưu từ Local Storage (nếu có)
        var savedData = JSON.parse(localStorage.getItem("savedData")) || [];
        // Thêm dữ liệu mới vào mảng
        savedData.push(inputData);
        // Lưu mảng mới vào Local Storage
        localStorage.setItem("savedData", JSON.stringify(savedData));
        // Hiển thị lại danh sách dữ liệu
        displaySavedData();
        // Xóa nội dung trường văn bản
        document.getElementById("dataInput").value = "";
    }
}

// Hàm hiển thị danh sách dữ liệu đã lưu
function displaySavedData() {
    var dataList = document.getElementById("dataList");
    dataList.innerHTML = ""; // Xóa nội dung cũ
    var savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    // Duyệt qua mảng dữ liệu và hiển thị từng phần tử
    savedData.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.textContent = item;
        dataList.appendChild(listItem);
    });
}

// Gọi hàm hiển thị dữ liệu khi trang web được tải lần đầu
document.addEventListener("DOMContentLoaded", displaySavedData);
