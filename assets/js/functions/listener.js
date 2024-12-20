import { formTabs } from "./formTabs.js";
import { increment, decrement } from "./increment.js";
import { changeStepForm } from "./forms.js";


export function listener () {
  document.body.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('form-tariff-btn')) formTabs(target);
    if (target.classList.contains('plus')) increment(target);
    if (target.classList.contains('minus')) decrement(target);
    if (target.dataset.formBtn === 'next' || target.dataset.formBtn === 'back' || target.dataset.formBtn === 'submit') changeStepForm(target);


  })
}