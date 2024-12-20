import { isExist } from "./isExist.js";

export function vendors () {


  if (isExist('#tel')) {
    IMask(
      document.querySelector('#tel'),
      {
        mask: '+{7}(000)000-00-00'
      }
    )
  }

 
  if (isExist('#select-time')) {
    new SlimSelect({
      select: '#select-time'
    })
  }

  if (isExist) {
    flatpickr("#datepicker", {
        dateFormat: "d-m-Y", 
        minDate: "today",   
        enableTime: false,
    });
  } 



}