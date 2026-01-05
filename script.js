// mendaftarkan nilai variabel
const modalAlert = document.getElementById('modal-alert')
const tombolTutup = document.getElementById('tombol-tutup');

// membuat function
// dalam javascript, selain dapat memnaggil data ke html melalui eventHandler, juga dapat membuat function
function tampilkanModalAlert()
{
    // ini fungsi ketika moidal-alert di load, maka selector css dengan nama hidden akan di hapus.
    modalAlert.classList.remove("hidden");
}

function tutupModalAlert()
{
    modalAlert.classList.add("hidden");
}

document.addEventListener('DOMContentLoaded',
function(){
    tampilkanModalAlert();
});

tombolTutup.addEventListener("click",
tutupModalAlert);

// mengaktifkan javascript pada saat halaman dimuat/ load
document.addEventListener("DOMContentLoaded", ()=>{
// daftarkan variable burgerBtn
const burgerBtn = document.getElementById("burgerBtn");
// daftarkan variabel navLinks
const navLinks = document.getElementById("navLinks");
//daftarkan variabel dropdowns
const dropdowns = document.getElementById("dropdown");
//daftarkan variable tombol light/darkmode
const themeToggle = document.getElementById ("themeToggle")

// tampilkan nav ketika tombol diklik
burgerBtn.addEventListener("click", ()=>{
    // tampilkan kembali navLinks
    navLinks.classList.toggle("show");
    // jika navLinks nya tidak aktif, maka tutup dropdown nya
    if(!navLinks.classList.contains("show")) {
        dropdowns.forEach((d) => d.classList.remove("open"));
    }
});

//dark mode
//cek prerefensi sebelumnya
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add ("dark-mode");
    themeToggle.textContent = "☀️";
}


//tombol toggel mode
themeToggle.addEventListener ("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark =  document.body.classList.contains ("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", idDark ? "dark" : "light");
});

// === FUNGSI MODAL ALERT ===
function tampilkanModalAlert() {
    modalAlert.classList.remove("hidden");
}

function tutupModalAlert(){
    modalAlert.classList.add("hidden");
}

// Hanya tampilkan modal setelah seluruh halaman dimuat
window.addEventListener("load", function () {
    tampilkanModalAlert();
});

tombolTutup.addEventListener("click", tutupModalAlert);

// === MODAL VIDEO POP-UP (SOLUSI AKHIR) ===
const videoItems = document.querySelectorAll(".video-thumbnail"); // Target div thumbnail
const videoModal = document.getElementById("video-modal"); // ID modal backdrop
const videoFrame = document.getElementById("video-frame"); // ID iframe
const closeVideoBtn = document.getElementById("close-video"); // ID tombol tutup

// 1. Listener untuk membuka modal video (klik thumbnail)
videoItems.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Ambil URL dari atribut data-src
    let videoSrc = thumbnail.getAttribute("data-src");
    
    // Pastikan video otomatis putar (autoplay=1)
    const separator = videoSrc.includes("?") ? "&" : "?";
    if (!videoSrc.includes("autoplay=1")) {
      videoSrc = videoSrc + separator + "autoplay=1";
    }

    // Muat video dan tampilkan modal
    videoFrame.src = videoSrc;
    videoModal.classList.remove("hidden");
  });
});

// 2. Fungsi untuk menutup modal video
function closeVideo() {
  videoModal.classList.add("hidden"); // Sembunyikan modal
  videoFrame.src = ""; // **Penting:** Kosongkan src untuk menghentikan pemutaran video
}

// 3. Listener untuk tombol tutup (X)
closeVideoBtn.addEventListener("click", closeVideo);

// 4. Listener untuk menutup modal video ketika mengklik di luar modal (backdrop)
window.addEventListener('click', e => {
  if (e.target === videoModal) {
    closeVideo(); 
  }
});
});