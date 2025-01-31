function injectScript(src) {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL(src); // Використовуємо chrome.runtime.getURL
  script.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(script);
}
injectScript("injected_observer_new.js");
injectScript("injected_observer_old.js");
injectScript("injected_get-work.js");
