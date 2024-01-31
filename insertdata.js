// Fungsi untuk membuat request ke Google Cloud Function
const insertData = async (data) => {
    try {
      const response = await fetch('https://asia-southeast2-gismegah.cloudfunctions.net/func-insertdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Gagal menambahkan data');
      }
  
      const result = await response.json();
      console.log('Data berhasil ditambahkan:', result);
      // Lakukan tindakan setelah berhasil menambahkan data di sini (misalnya, tampilkan pesan berhasil)
    } catch (error) {
      console.error('Gagal menambahkan data:', error);
      // Tangani kesalahan (tampilkan pesan kesalahan, kembalikan ke halaman sebelumnya, dll.)
    }
  };
  
  const submitButton = document.getElementById('submitBtn');
  
  // Menambahkan event listener untuk klik pada tombol 'BUAT'
  signUpButton.addEventListener('click', async (event) => {
    event.preventDefault();
  
    // Mengambil nilai dari input
    const product_name = document.querySelector('.product_name input').value;
    const desc = document.querySelector('.desc input').value;
    const kategori = document.querySelector('.kategori input').value;
    const price = document.querySelector('.price input').value;
  
    // Membuat objek data pengguna
    const productData = {
      product_name: product_name,
      desc: desc,
      kategori: kategori,
      price: price
    };
  
    // Panggil fungsi untuk sign up pengguna
    await insertData(productData);
  });
  