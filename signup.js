document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.getElementById('signupBtn');

  signupBtn.addEventListener('click', function (event) {
      event.preventDefault(); // Hindari pengiriman form default

      // Ambil nilai email, password, dan konfirmasi password
      const email = document.querySelector('input[type="email"]').value;
      const password = document.querySelectorAll('input[type="password"]')[0].value;
      const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;


      // Periksa apakah password dan konfirmasi password sama
      if (password !== confirmPassword) {
          alert('Konfirmasi kata sandi tidak sesuai.');
          return;
      }

      // Buat objek data yang akan dikirim ke Google Cloud Function
      const data = {
          email: email,
          password: password,
      };

      // Kirim data ke Google Cloud Function
      fetch('https://us-central1-gismegah.cloudfunctions.net/func-login', {
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
          alert('Pendaftaran berhasil!');
      })
      .catch(error => {
          // Handle kesalahan
          console.error('Error:', error);
          alert('Terjadi kesalahan. Silakan coba lagi.');
      });
  });
});
