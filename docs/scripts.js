document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Cảm ơn bạn, ${name}! Tin nhắn của bạn đã được gửi.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});
