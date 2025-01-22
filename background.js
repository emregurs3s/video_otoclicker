chrome.action.onClicked.addListener((tab) => {
  // Eğer doğru sayfadaysa (Örneğin, video oynatma sayfası) content.js dosyasını çalıştır
  if (tab.url && tab.url.includes("oba.gov.tr/egitim/oynatma/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  }
});
