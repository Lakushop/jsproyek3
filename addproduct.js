document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Hindari pengiriman form default

        // Ambil nilai input dari form
        const productName = document.querySelector('input[name="product_name"]').value;
        const description = document.querySelector('textarea[name="desc"]').value;
        const category = document.querySelector('textarea[name="kategori"]').value;
        const price = document.querySelector('textarea[name="price"]').value;

        // Buat objek data yang akan dikirim ke Google Cloud Function
        const data = {
            product_name: productName,
            desc: description,
            kategori: category,
            price: price
        };

        // Kirim data ke Google Cloud Function
        fetch('https://asia-southeast2-gismegah.cloudfunctions.net/func-insertproduct', {
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
            alert('Produk berhasil ditambahkan!');
        })
        .catch(error => {
            // Handle kesalahan
            console.error('Error:', error);
            alert('Terjadi kesalahan. Silakan coba lagi.');
        });
    });
});
