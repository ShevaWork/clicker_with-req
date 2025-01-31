if (document.querySelector('[data-appid="startcntr"]')) {
  console.log("startcntr - true_check-xml");
  const header = document.getElementById("mfe19e91b-bl"); //блок, який змінює колір при оновлені
  let counter = 0;

  function trackingXML() {
    const originalXHR = XMLHttpRequest;

    // Перевизначення XMLHttpRequest
    XMLHttpRequest = function () {
      const xhr = new originalXHR();

      xhr.addEventListener("load", function () {
        // Завершення запиту
        if (
          xhr.responseURL ===
            "https://hd.ukrgasbank.com/maximo/ui/maximo.jsp" &&
          xhr.status === 200 &&
          document.querySelectorAll("td[headers='mbaf55d-content_0']").length >
            1
        ) {
          document
            .querySelectorAll("td[headers='mbaf55d-content_0']")[1]
            .firstElementChild.click();
          document.getElementById("m68f91188-co2_0").classList.toggle("lh");
          console.log("Завдання знайдено");
        } else if (
          xhr.responseURL ===
            "https://hd.ukrgasbank.com/maximo/ui/maximo.jsp" &&
          xhr.status === 200 &&
          document.querySelectorAll("td[headers='mbaf55d-content_0']").length <=
            1 //заявок немає
        ) {
          header.classList.toggle("lh");
          sendEvent("refreshdata", "mbaf55d-content", "refresh");
          console.log("Блок оновлено.");
          counter++;
          document.getElementById("m68f91188-co2_0").innerText = counter;
        }
      });

      return xhr;
    };
    console.log("Перехоплення XHR-запитів увімкнено");
  }

  document.addEventListener("keydown", function (event) {
    if (event.code === "NumpadMultiply") {
      sendEvent("refreshdata", "mbaf55d-content", "refresh");
      trackingXML();
    }
  });
}
