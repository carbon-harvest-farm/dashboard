const notificationsContainer = document.getElementById("notifications-container");

const componentMount = () => {
  for (let index = 0; index < notifications.length; index++) {
    const readNotification = notifications[index];


    const notificationActionsDiv = document.createElement('div');
    notificationActionsDiv.classList.add('notification-actions');

    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notification');

    switch (readNotification.type) {
      case "danger":
        notificationDiv.classList.add('danger')
        break;
      case "info":
        notificationDiv.classList.add('info')
        break;
      case "warning":
        notificationDiv.classList.add('warning')
        break;
      case "good":
        notificationDiv.classList.add('good')
        break;
      default:
        notificationDiv.classList.add('info')
        break;
    }

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('notification-header');
    headerDiv.innerHTML = `<h2>${readNotification.title}</h2>`;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('notification-content');
    contentDiv.textContent = readNotification.message;

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('notification-footer');

    let data = new Date(readNotification.emitedAt);
    footerDiv.textContent = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(data);

    if (!readNotification.hasRead) {
      const badgeDiv = document.createElement('div');
      badgeDiv.classList.add('notification-badge');
      badgeDiv.innerHTML = '<p>Novo</p>';

      switch (notifications[index].type) {
        case "danger":
          badgeDiv.classList.add('notify-danger')
          break;
        case "info":
          badgeDiv.classList.add('notify-info')
          break;
        case "warning":
          badgeDiv.classList.add('notify-warning')
          break;
        case "good":
          badgeDiv.classList.add('notify-good')
          break;
        default:
          badgeDiv.classList.add('notify-info')
          break;
      }

      notificationDiv.appendChild(badgeDiv);

      const markButton = document.createElement('button');
      markButton.classList.add('notification-mark');
      markButton.textContent = 'Marcar como lido';

      markButton.addEventListener("click", () => {
        notifications[index].hasRead = true;
      })

      notificationActionsDiv.appendChild(markButton);
    }

    notificationDiv.appendChild(headerDiv);
    notificationDiv.appendChild(contentDiv);
    notificationDiv.appendChild(footerDiv);

    notificationActionsDiv.appendChild(notificationDiv);

    notificationsContainer.appendChild(notificationActionsDiv);
  }
}
window.addEventListener("load", () => componentMount())
