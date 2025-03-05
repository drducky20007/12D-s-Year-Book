document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("predict-btn");
    const predictionText = document.getElementById("prediction");

    const predictions = [
    "Có phải đang yêu thầm ai trong lớp không? Về sau sẽ cưới người đó đấy!",
    "Tôi nhìn thấy một quán cà phê với vibe rất chill, cơ mà khách toàn đến làm bài tập!",
    "Ể? Bạn sẽ đi du học và... quên sạch bọn này luôn =)))))",
    "Bạn sẽ qua nước ngoài, và trở thành mấy người Việt kiều quên tiếng Việt =)))",
    "Người sau này làm sếp bạn, lại chính là người đang ngồi trong đây đấy!",
    "Oh, bạn sẽ có một công ty lớn, và tôi là cổ đông lớn nhất!",
    "Bạn sẽ yêu thầm ai đó trong lớp này vào buổi họp lớp đầu tiên, cơ mà nó lại yêu người khác mất rồi!",
    "Bạn có vẻ sẽ đi du lịch vòng quanh thế giới... bằng Google Maps!",
    "Uôi, bạn sẽ có một cái xe hơi rất xịn, cơ mà lại không có tiền đổ xăng!",
    "Ái chà, bạn về sau sẽ trở thành một người mẫu rất nổi tiếng đó!",
    "Tôi đang được nhìn thấy một nhân vật được ghi vào sách lịch sử, bạn sẽ tạo nên dấu ấn gì đây?",
    "Sau này bạn sẽ rất giàu nha, cơ mà lại tiêu hết tiền vào đồ ăn rồi!",
    "Bạn sau này sẽ học được một kĩ năng siêu khó, xong lại chả dùng tới nó bao giờ!",
    "Tôi thấy một nút bạc và một nút vàng Youtube, một Youtuber tương lai đó!",
    "Bạn sẽ vẫn phải quay lại trường mình... cơ mà với vai trò giáo viên!",
    "Bạn sau này sẽ nuôi một con thú cưng cực kì độc lạ!",
    "Bạn sẽ có công ty riêng sau này, cơ mà quản lí thế nào lại toàn bị nhân viên nấu xói!",
    "Bạn sẽ sáng tạo ra một cái app đáng giá triệu đô đó, nhưng mà lỡ quên mất cái mật khẩu đăng nhập!",
    "Oh, bạn sẽ có một công việc cực kì thú vị, cơ mà chả ai hiểu bạn đang làm cái gì!",
    "Bạn sẽ gặp lại crush hồi cấp 3 của mình, cơ mà lại không nhận ra họ!",
    "Bạn sẽ tạo ra một phát mình cực kì hữu ích, nhưng mà lại bị một lão nào đó cướp mất bản quyền!",
    "Bạn sẽ trở thành một người truyền cảm hứng cho rất nhiều người!",
    "Bạn sẽ tham gia một cuộc thi một cách vô tình, cơ mà lại dành giải nhất!",
    "Bạn sẽ có một chuyến du lịch định mệnh, và gặp gỡ nửa kia của cuộc đời!",
    "Sẽ có một người hoàn toàn xa lạ tới và thay đổi cuộc đời bạn mãi mãi!",
    "Bạn viết ra một cuốn sách bán rất chạy, rồi nhận ra giáo viên cũ lấy nó làm đề bài kiểm tra!",
    "Sau này bạn sẽ làm một nghề mà ngẫm chắc mình sẽ không bao giờ làm",
    "Tôi thấy tên bạn trong một bài báo về thủ khoa năm nay!",
    "Bạn sau này sẽ trở thành một anh hùng đời thường như trong các chương trình trên TV!",
    "Bạn sau này sẽ lấy một người chồng cực kì giàu có!",
    "Một...người vĩ đại! Bạn rốt cuộc là ai?"
        ];

    button.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * predictions.length);
        predictionText.textContent = predictions[randomIndex];
        predictionText.classList.add("show");
    });
});