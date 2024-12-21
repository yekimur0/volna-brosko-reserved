export function setData (data) {

  const parent = document.querySelector('#info-step');
  const name = data.name;
  const secondName = data.secondName;
  const phone = data.phone;
  const email = data.email;
  const time = data.time;
  const date = data.date;
  const tickets = data.tickets;

  const template = `

            <div class="form-info">
              <div class="form-info-title">Персональные данные</div>

              <div class="form-info-block">
                <div class="form-info-text">
                  <span>ФИ:</span>
                  <span id="fio">${name + ' ' + secondName}</span>
                </div>
  
                <div class="form-info-text">
                  <span>Моб.телефон:</span>
                  <span id="tel-text">${phone}</span>
                </div>
  
                <div class="form-info-text">
                  <span>E-mail:</span>
                  <span id="email">${email}</span>
                </div>
              </div>

            </div>

            <div class="form-info">
              <div class="form-info-title">Дата и время посещения</div>

              <div class="form-info-block">
                <div class="form-info-text">
                  <span>Дата:</span>
                  <span id="date">${date}</span>
                </div>
  
                <div class="form-info-text">
                  <span>Время:</span>
                  <span id="time">${time}</span>
                </div>
              </div>

            </div>

            <div class="form-info">
              <div class="form-info-title">Билеты</div>

              <div class="form-info-block form-info-tickets" id="tickets-block">

              </div>

            </div>
  
  `

  parent.insertAdjacentHTML('beforeend', template);

  const ticketsBlock = document.querySelector('#tickets-block');
  let ticketNumber = 1;

  for(const [tariff, types] of Object.entries(tickets)) {
    for (const [type, count] of Object.entries(types)) {
      if (parseInt(count, 10) > 0) {
        const ticketText = `${count} ${type === 'adult' ? 'взрослый' : 'детских'}, ${tariff === 'unlimited' ? 'безлимит' : tariff === 'promo' ? '3+1 час' : '1 час'}`;
        const ticketTemplate = `
          <div class="form-info-text">
            <span data-ticket-number>Билет №${ticketNumber}</span>
            <span data-ticket-info>${ticketText}</span>
          </div>
        `;
        ticketsBlock.insertAdjacentHTML('beforeend', ticketTemplate);
        ticketNumber++;
      }
    }
  }
}
