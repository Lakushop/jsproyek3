// Fungsi untuk membuat request ke Google Cloud Function~
const fetchData = async () => {
    try {
      const response = await fetch('https://asia-southeast2-gismegah.cloudfunctions.net/func-fetchdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Gagal mengambil data');
      }
  
      const result = await response.json();
      console.log('Data berhasil diambil:', result);
      // Lakukan tindakan setelah berhasil mengambil data di sini (misalnya, tampilkan data di halaman)
      displayData(result);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
      // Tangani kesalahan (tampilkan pesan kesalahan, kembalikan ke halaman sebelumnya, dll.)
    }
  };

  // Fungsi untuk menampilkan data di halaman
  const displayData = (data) => {
    const mahasiswaList = document.getElementById('mahasiswa-list');
    mahasiswaList.innerHTML = '';
    data.forEach((mahasiswa) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div>
          <strong>${mahasiswa.nama}</strong>
          <p>${mahasiswa.nim}</p>
          <p>${mahasiswa.jurusan}</p>
        </div>
      `;
      mahasiswaList.appendChild(listItem);
    });
  };
  
