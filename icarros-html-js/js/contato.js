let contactForm = document.querySelector('#mensagemForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let name = document.querySelector('#inputNome').value,
  email = document.querySelector('#inputEmail').value,
  phone = document.querySelector('#inputTelefone').value,
  message = document.querySelector('#inputMensagem').value;

  let loaderContent = document.querySelector('#loader');
  loaderContent.classList.remove('loader_inative')
  loaderContent.classList.add('loader_active');

  axios.post('https://webhook.site/4c639737-c1c9-488d-a085-013d2a26e614', 
  {
    name,
    email,
    phone,
    message
  }).finally(
    () => {
      loaderContent.classList.add('loader_inative');
      loaderContent.classList.remove('loader_active')
    }
  ) 
})




