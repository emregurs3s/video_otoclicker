(function () {
  const video = document.querySelector("video");

  if (video) {
      console.log("Video bulundu, dinleyici eklendi...");

      // Video sona erdiğinde yapılacak işlemleri belirliyoruz
      video.addEventListener("ended", () => {
          console.log("Video sona erdi. Bir sonraki videoya geçiliyor...");

          // Mevcut URL'yi alıyoruz
          const currentUrl = window.location.href;

          // URL'yi '/' ile ayırıp son kısmı alıyoruz (video ID'si)
          const urlParts = currentUrl.split('/');
          const lastPart = urlParts[urlParts.length - 1];

          // Son kısmın bir sayı olup olmadığını kontrol ediyoruz
          if (!isNaN(lastPart)) {
              // Sonraki video ID'sini hesaplıyoruz (arttırıyoruz)
              const nextVideoId = parseInt(lastPart) + 1;

              // Yeni video URL'sini oluşturuyoruz
              const newUrl = urlParts.slice(0, -1).join('/') + '/' + nextVideoId;

              console.log(`Sonraki video URL: ${newUrl}`);

              // Yeni URL'ye yönlendiriyoruz
              window.location.href = newUrl;
          } else {
              console.error("URL'nin son kısmı bir sayı değil!");
          }
      });

      console.log("Video izleme otomasyonu aktif!");
  } else {
      console.error("Sayfada video bulunamadı!");
  }
})();
