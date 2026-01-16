function showNotif(feature, element) {
    const container = document.getElementById('notification-container');
    const status = element.checked ? "DIAKTIFKAN" : "DIMATIKAN";
    const color = element.checked ? "#00ff7f" : "#ff4655";

    // Buat elemen notifikasi
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color:${color}; font-weight:bold;">${feature}</span> ${status}`;
    
    container.appendChild(toast);

    // Getar HP jika mendukung
    if (navigator.vibrate) navigator.vibrate(50);

    // Hapus notifikasi setelah 3 detik
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function jalankanFitur() {
    const status = document.getElementById('statusText');
    
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    status.innerText = "SUNTIK DATA SEDANG BERJALAN...";
    status.style.color = "#ffb300";
    
    setTimeout(() => {
        status.innerText = "BERHASIL! MEMBUKA GAME...";
        status.style.color = "#00ff7f";

        setTimeout(() => {
            window.location.href = "intent://#Intent;scheme=package;package=com.dts.freefireth;end";
        }, 1500);
    }, 2500);
}