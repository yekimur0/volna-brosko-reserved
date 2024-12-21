import {setData} from './setData.js';

const form = document.querySelector('.form');
let isValidate = false;


export function changeStepForm (target) {
    const formSteps = document.querySelectorAll('.form-step');

    if (target.dataset.formBtn === 'next') {
      validateForms();

      if(isValidate) {
        formSteps[0].classList.remove('active');
        formSteps[1].classList.add('active');

        
      }
    }

    if (target.dataset.formBtn === 'back') {
      formSteps[0].classList.add('active');
      formSteps[1].classList.remove('active');

      document.querySelector('#info-step').innerHTML = '';
    }

}

export function sendForm () {

 
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let target = e.target;
    
    
  })


}

export function validateForms () {
  const name = form.querySelector('input[name="name"]');
  const secondName = form.querySelector('input[name="second-name"]');
  const phone = form.querySelector('input[name="phone"]');
  const email = form.querySelector('input[name="email"]');
  const date = form.querySelector('input[name="date"]');
  const time = form.querySelector('[name="select-time"]');

   

  const requireElems = [name, secondName, phone, email, date, time];

  
  const data = {
    name: name.value.trim(),
    secondName: secondName.value.trim(),
    phone: phone.value,
    email: email.value,
    date: date.value,
    time: time.value,

    tickets: {
      unlimited: {
        adult: document.querySelector('[data-unlimited="adult"]').textContent,
        child: document.querySelector('[data-unlimited="child"]').textContent,
      },
      promo: {
        adult: document.querySelector('[data-promo="adult"]').textContent,
        child: document.querySelector('[data-promo="child"]').textContent,
      },
      hour: {
        adult: document.querySelector('[data-hour="adult"]').textContent,
        child: document.querySelector('[data-hour="child"]').textContent,
      }

    }
  }

  
  for (const elem of requireElems) {
    if (elem.value.trim() === '') {
      elem.classList.add('error-input');
    } else {
      elem.classList.remove('error-input');
    }
  }
  

  const isSuccessData = Object.values(data).every(value => value !== '');

  isSuccessData ? isValidate = true : isValidate = false;
 
  setData(data);
}


