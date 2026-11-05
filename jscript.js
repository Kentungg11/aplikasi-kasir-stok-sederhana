// Function untuk update Waktu & Tanggal secara Realtime
function updateClock() {
    const dateTimeElement = document.getElementById('dateTime');
    if (!dateTimeElement) return;

    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    dateTimeElement.textContent = now.toLocaleDateString('id-ID', options);
}

// Jalankan jam setiap detik
setInterval(updateClock, 1000);
updateClock();

// Handler Form Login Statis (Simulasi Pindah Halaman)
function handleLogin(event) {
    event.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user && pass) {
        // Pada tahap statis ini langsung arahkan ke dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Harap isi username dan password!');
    }
}

// Handler Form Tambah Produk (Statis)
function handleTambahProduk(event) {
    event.preventDefault();
    alert('Produk berhasil diinput (simulasi)! Pada milestone selanjutnya ini akan tersimpan ke database.');
    document.getElementById('formProduk').reset();
}