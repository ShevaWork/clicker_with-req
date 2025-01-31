if (document.querySelector('[data-appid="activity"]')) {
  const woElement = document.querySelector('[id="m43f6b5e4_hyperlink_0-lb"]');
  if (woElement && document.getElementById("me4d43413-tb2").value.length < 3) {
    sendEvent("click", "m43f6b5e4_hyperlink_0-lb", "MYWOACT");
    console.log("wo_in_my_work");
    sendTelegramMessage(document.getElementById("m562b4778-tb").value); //відправлення сповіщення до чатботу
  }
  console.log(`wo_${document.getElementById("me4d43413-tb2").value}`);
} else if (document.querySelector('[data-appid="incident"]')) {
  const incElement = document.querySelector('[id="mb4bffc9f_hyperlink_0-lb"]');
  if (incElement && document.getElementById("m817d10bc-tb2").value.length < 3) {
    const incElement = document.querySelector(
      '[id="mb4bffc9f_hyperlink_0-lb"]'
    );
    sendEvent("click", "mb4bffc9f_hyperlink_0-lb", "INC_OWNER");
    console.log("inc_in_my_work");
    sendTelegramMessage(document.getElementById("m77a6936f-lb").innerText); //відправлення сповіщення до чатботу
  }
  console.log(`inc_${document.getElementById("m817d10bc-tb2").value}`);
}

function sendTelegramMessage(workid) {
  const token = "7237892895:AAGcXAsWV3xZMgPHUz0dxof2At14C9BnDGE"; //токен
  const chatId = "488336347"; //chat_id
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `Ми зайшли у заявку ${workid}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        console.log("Повідомлення успішно надіслано!");
      } else {
        console.error("Помилка:", data);
      }
    })
    .catch((error) => console.error("Помилка підключення:", error));
}
