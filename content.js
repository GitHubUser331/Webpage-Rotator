chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "resetRotation") {
    document.body.style.transform = "";
  } else if (request.action === "rotateWebpage") {
    rotateWebpage(request.rotation);
  }
});

function rotateWebpage(rotation) {
  document.body.style.transform = `rotate(${rotation}deg)`;
}