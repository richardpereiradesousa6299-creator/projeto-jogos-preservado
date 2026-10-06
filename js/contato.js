/* ===== Contato: validação, contador, máscaras (plug-in), CEP (AJAX) e envio simulado ===== */
$(function () {
  var form = document.getElementById('form-contato');
  if (!form) return;

  // Plug-in jQuery Mask
  $('#telefone').mask('(00) 00000-0000');
  $('#cep').mask('00000-000');

  // Contador de caracteres
  $('#mensagem').on('input', function () { $('#contador').text(this.value.length); });

  // AJAX: busca o endereço pelo CEP na API ViaCEP
  $('#cep').on('blur', function () {
    var cep = $(this).val().replace(/\D/g, '');
    if (cep.length !== 8) { return; }
    $('#cep-status').text('Buscando endereço...');
    $.getJSON('https://viacep.com.br/ws/' + cep + '/json/')
      .done(function (d) {
        if (d.erro) { $('#cep-status').text('CEP não encontrado.'); return; }
        $('#rua').val(d.logradouro);
        $('#cidade').val(d.localidade + ' - ' + d.uf);
        $('#cep-status').text('Endereço preenchido.');
      })
      .fail(function () { $('#cep-status').text('Não foi possível buscar o CEP agora. Preencha manualmente.'); });
  });

  // Marca o campo como válido/inválido (classes do Bootstrap)
  function marcar(id, ok) {
    var c = document.getElementById(id);
    c.classList.toggle('is-invalid', !ok);
    c.classList.toggle('is-valid', ok);
    return ok;
  }
  var v = function (id) { return document.getElementById(id).value.trim(); };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = [
      marcar('nome', v('nome').length >= 3),
      marcar('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))),
      marcar('telefone', v('telefone').length >= 14),
      marcar('cep', v('cep') === '' || v('cep').length === 9),
      marcar('assunto', v('assunto') !== ''),
      marcar('mensagem', v('mensagem').length >= 10)
    ].every(Boolean);
    if (!ok) { return; }

    // Envio simulado: guarda a mensagem no navegador e mostra um protocolo
    var protocolo = 'DJ-' + String(Date.now()).slice(-6);
    try {
      var lista = JSON.parse(localStorage.getItem('mensagens')) || [];
      lista.push({ protocolo: protocolo, nome: v('nome'), email: v('email'), assunto: v('assunto'), mensagem: v('mensagem') });
      localStorage.setItem('mensagens', JSON.stringify(lista));
    } catch (err) {}
    $('#sucesso').text('Mensagem enviada! Seu protocolo é ' + protocolo + '.').removeClass('d-none').hide().fadeIn(300);
    form.reset();
    $('#contador').text('0');
    $('#cep-status').text('');
    $('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
  });
});
