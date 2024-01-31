document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.querySelector('.button');

  loginBtn.addEventListener('click', function (event) {
      event.preventDefault(); // Hindari pengiriman form default

      // Ambil nilai email dan password dari input
      const email = document.querySelector('input[type="email"]').value;
      const password = document.querySelector('input[type="password"]').value;

      // Buat objek data yang akan dikirim ke Google Cloud Function
      const data = {
          email: email,
          password: password
      };

      // Kirim data ke Google Cloud Function
      fetch('https://asia-southeast2-gismegah.cloudfunctions.net/func-signuppengguna', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
          // Handle hasil dari Google Cloud Function
          console.log(result);

          // Jika login berhasil, arahkan ke halaman index.html
          if (result.success) {
              window.location.href = 'index.html';
          } else {
              alert('Login gagal. Periksa kembali email dan kata sandi Anda.');
          }
      })
      .catch(error => {
          // Handle kesalahan
          console.error('Error:', error);
          alert('Terjadi kesalahan. Silakan coba lagi.');
      });
  });
});
