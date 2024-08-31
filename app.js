document.getElementById('showInfoButton').addEventListener('click', function() {
    var info = document.getElementById('info');
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block'; // Bilgileri göster
    } else {
        info.style.display = 'none'; // Bilgileri gizle
    }
});

const slide = document.querySelector('.photo-slide');
const images = document.querySelectorAll('.photo-slide img');

let currentIndex = 0;
const totalImages = images.length;
const imageWidth = images[0].clientWidth; // Her bir resmin genişliği
const slideWidth = imageWidth * totalImages; // Toplam genişlik

// İlk başta fotoğrafları iki katına çıkar
slide.style.width = `${slideWidth * 2}px`;
slide.innerHTML += slide.innerHTML; // Fotoğrafları tekrar et

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        slide.style.transition = 'none'; // Geçişi kapat
        currentIndex = 0;
        slide.style.transform = `translateX(0px)`; // Başlangıç konumuna döndür
        setTimeout(() => {
            slide.style.transition = 'transform 0.5s ease-in-out'; // Geçişi tekrar aç
            slide.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }, 50); // Küçük bir gecikme, geçişin yeniden ayarlanması için
    } else {
        slide.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }
}

setInterval(moveToNextSlide, 5000); // 3 saniyede bir kaydırma