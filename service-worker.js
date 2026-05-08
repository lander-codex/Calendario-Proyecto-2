self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", event => {
  // De momento no hacemos nada especial
});