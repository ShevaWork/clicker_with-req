if (document.querySelector('[data-appid="startcntr"]')) {
  console.log("startcntr - true");
  let intervalId = null; // Для основного інтервалу
  let additionalCheckId = null; // Для додаткового інтервалу
  const reload_time = 30000;
  const check_time = 25000;
  // const reload_time = 450;
  // const check_time = 250;
  let counter = 0;

  async function click_sr() {
    const tasks = document.querySelectorAll("td[headers='mbaf55d-content_0']");
    if (tasks.length > 1) {
      tasks[1].firstElementChild.click(); // Клікаємо по новому завданню
      console.log("Завдання виконано, інтервал зупинено");
      clearInterval(intervalId); // Зупиняємо основний інтервал
      clearInterval(additionalCheckId); // Зупиняємо додатковий інтервал
      intervalId = null; // Скидаємо intervalId
      additionalCheckId = null; // Скидаємо additionalCheckId
    }
  }
  async function reload_block() {
    intervalId = setInterval(async () => {
      sendEvent("refreshdata", "mbaf55d-content", "refresh"); // Натискаємо на кнопку
      const header = document.getElementById("mfe19e91b-bl");
      if (header) {
        header.classList.toggle("lh");
      }

      console.log("Блок оновлено.");
      counter++;
      document.getElementById("m68f91188-co2_0").innerText =
        "Древнє оновлення працює: " + counter;
    }, reload_time);
  }
  async function check_block() {
    additionalCheckId = setInterval(async () => {
      await click_sr();
    }, check_time);
  }
  document.addEventListener("keydown", function (event) {
    // Перевірка на натискання кнопки множення на нумпаді
    if (event.code === "NumpadDivide") {
      if (intervalId === null && additionalCheckId === null) {
        reload_block();
        check_block();
        console.log("Функція checkElement_OLD запущена");
      } else {
        console.log("Функція вже виконується");
      }
    }
  });
  document.addEventListener("keydown", function (event) {
    // Перевірка на натискання кнопки множення на нумпаді
    if (event.code === "NumpadSubtract") {
      if (intervalId === null && additionalCheckId === null) {
        reload_block();
        console.log("Функція checkElement_OLD запущена");
      } else {
        console.log("Функція вже виконується");
      }
    }
  });
}
