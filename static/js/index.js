console.log('Start js');

function removeModal() {
  console.log('removeModal()');
  document.body.getElementsByClassName('Modal')[0].innerHTML = '';
}

function getFormData() {
  const formData = new FormData(document.querySelector('form'));
  console.log('!!! Некоторые поля не выводятся, т.к. указан атрибут disabled');
  for (var value of formData.values()) {
    console.log(value);
  }
  console.log('========================');
}
