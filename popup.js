document.addEventListener("DOMContentLoaded", function () {
  const rotationSlider = document.getElementById("rotationSlider");
  const rotationValue = document.getElementById("rotationValue");
  const resetButton = document.getElementById("resetButton");
  const refreshButton = document.getElementById("refreshButton");

  resetButton.addEventListener("click", function () {
    rotationSlider.value = 0;
    rotationValue.textContent = "0";
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "resetRotation",
      });
    });
  });

  refreshButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.reload(tabs[0].id);
    });
  });

  rotationSlider.addEventListener("input", function () {
    const rotation = this.value;
    rotationValue.textContent = rotation;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "rotateWebpage",
        rotation: rotation,
      });
    });
  });
});
