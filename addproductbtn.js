document.addEventListener('DOMContentLoaded', function () {
    const addProductBtn = document.getElementById('addProductBtn');

    addProductBtn.addEventListener('click', function (event) {
        // Tambahkan kelas 'button-transition' saat tombol ditekan
        addProductBtn.classList.add('button-transition');

        // Tunggu sebentar (misalnya, 300ms) untuk memberikan efek transisi
        setTimeout(function () {
            // Arahkan pengguna ke halaman addproduct.html
            window.location.href = './addproduct.html';
        }, 300); // Sesuaikan dengan durasi efek transisi
    });
});
