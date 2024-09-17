// Mã JavaScript để xử lý form liên hệ
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

        // Thực hiện xử lý gửi email hoặc lưu thông tin ở đây
        // Ví dụ: Gửi thông tin qua email sử dụng API hoặc xử lý dữ liệu

        alert('Thank you for contacting me, ' + name + '! Your message has been received.');
        form.reset(); // Đặt lại form sau khi gửi
    });
});
