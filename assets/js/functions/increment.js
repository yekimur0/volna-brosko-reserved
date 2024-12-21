export function increment (target) {

  const parent = target.closest('.form-tariff-tab-row');

  let counterNumb = parent.querySelector('#num');
  counterNumb.textContent++;


}

export function decrement (target) {

  const parent = target.closest('.form-tariff-tab-row');
  let counterNumb = parent.querySelector('#num');

  if (+counterNumb.textContent <= 0) {
    return
  }

  counterNumb.textContent--;
}