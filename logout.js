document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Hindari navigasi default

        // Tambahkan kelas 'fade-out' ke elemen body untuk efek fade-out
        document.body.classList.add('fade-out');

        // Tunggu sebentar (misalnya, 500ms) untuk memberikan efek fade-out
        setTimeout(function () {
            // Lakukan proses logout di sini (contoh: hapus token, hapus sesi, dll.)
            // Setelah itu, arahkan pengguna ke halaman login atau halaman utama
            // Misalnya, window.location.href = 'login.html';

            // Untuk contoh sederhana, hanya arahkan pengguna ke halaman login.html
            window.location.href = 'login.html';
        }, 500); // Ubah angka ini sesuai dengan durasi efek fade-out
    });
});
