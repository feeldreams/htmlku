const params = new URLSearchParams(document.currentScript.src.split("?")[1]);
const hash = params.get("hash") || "yuk";

window.location.replace(
  "https://www.feeldream.id/2023/01/script-feeldream.html?#" + hash
);
