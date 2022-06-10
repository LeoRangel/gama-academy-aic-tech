$(document).ready(function(){
  $('.btn-bg-warning').click(function(){
    $('.jumbotron').addClass('bg-warning')
  })
  $('.btn-bg-cinza').click(function(){
    $('.jumbotron').removeClass('bg-warning')
  })
  
  $('#formulario').submit(function(e){
    e.preventDefault();
    let data = {
      nome: $('#inputNome').val(),
      email: $('#inputEmail').val(),
      assunto: $('#inputAssunto').val(),
      mensagem: $('#inputMensagem').val(),
    }
    console.log(data);
    let badyContent = JSON.stringify(data);
    console.log(badyContent);
    $.ajax({
      url: 'https://webhook.site/27821974-a95d-4fcd-ab54-bcb05ab463ae',
      type: 'POST',
      data: badyContent,
      contentType: 'application/json',
      success: function(){
        $('#success-msg').html(`
          <div class="alert alert-success mt-2" role="alert">
            Mensagem enviada!
          </div>
        `)
      }

    })

  })
})
