(function () {
  const watermark = document.createElement("div");
  watermark.innerText = "feeldream.id";

  watermark.style.position = "fixed";
  watermark.style.top = "50%";
  watermark.style.left = "50%";
  watermark.style.transform = "translate(-50%, -50%)";
  watermark.style.fontSize = "48px";
  watermark.style.fontWeight = "bold";
  watermark.style.color = "rgba(255,255,255,.5)";
  watermark.style.zIndex = "9999";
  watermark.style.pointerEvents = "none";
  watermark.style.userSelect = "none";
  watermark.style.whiteSpace = "nowrap";

  document.body.appendChild(watermark);
})();
