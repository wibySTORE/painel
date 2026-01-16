function cekAkses() {
    
    const daftarBawaan = [" "];
    
    // 2. Ambil daftar nama tambahan dari localStorage
    const daftarTambahan = JSON.parse(localStorage.getItem("daftarNamaTambahan")) || [];
    
    const semuaNama = daftarBawaan.concat(daftarTambahan);
    const namaUser = document.getElementById("inputNama").value.trim();
    const pesanElement = document.getElementById("pesan");

    const ditemukan = semuaNama.some(nama => nama.toLowerCase() === namaUser.toLowerCase());

    if (ditemukan) {
        pesanElement.style.display = "block";
        pesanElement.innerText = "ACCESS GRANTED! Redirecting...";
        pesanElement.style.color = "#00ff7f";
        pesanElement.style.border = "1px solid #00ff7f";
        
        if (navigator.vibrate) navigator.vibrate(100);
        
        setTimeout(() => { 
            window.location.href = "panel/panel.html"; 
        }, 1500);
    } else {
        pesanElement.style.display = "block";
        pesanElement.innerText = "KODE SALAH! SILAHKAN BELI LISENSI.";
        pesanElement.style.color = "#ff4655";
        pesanElement.style.border = "1px solid #ff4655";
        
        if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
    }
}