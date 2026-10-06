/* ===== Catálogo: filtros, busca, ordenação, favoritos e detalhes ===== */
$(function () {
  var estado = { genero: 'todos', plat: '', busca: '', ordem: 'az', fav: false };
  var hash = location.hash.replace('#', '');            // ex.: catalogo.html#acao
  if (hash === 'favoritos') { estado.fav = true; } else if (GENEROS[hash]) { estado.genero = hash; }
  var NOME_PLAT = { pc: '💻 PC', console: '🎮 Console', celular: '📱 Celular' };
  var EMOJI = { acao: '⚔️', estrategia: '🧠', simulacao: '🌱', puzzle: '🧩', corrida: '🏎️', rpg: '🗺️' };
  var NOME_CLIMA = { relaxar: 'Relaxar', desafio: 'Desafio', amigos: 'Amigos' };

  function card(j) {
    var fav = Fav.tem(j.id);
    var plats = j.plat.map(function (p) { return '<span class="badge text-bg-secondary">' + NOME_PLAT[p] + '</span>'; }).join('');
    return '<div class="col"><article class="card card-jogo h-100"><div class="capa g-' + j.genero + '"><span aria-hidden="true">' + EMOJI[j.genero] + '</span><img src="../img/jogos/' + j.img + '" alt="Capa de ' + j.nome + '" loading="lazy" onerror="this.remove()"></div><div class="card-body d-flex flex-column">' +
      '<h2 class="h5">' + j.nome + '</h2><p class="text-body-secondary small mb-2">' + GENEROS[j.genero] + ' · ' + j.tipo + '</p>' +
      '<p>' + j.desc + '</p><div class="mb-3">' + plats + '</div>' +
      '<div class="d-flex gap-2 mt-auto"><button class="btn btn-sm btn-rosa btn-det" data-id="' + j.id + '">Detalhes</button>' +
      '<button class="btn btn-sm btn-fav" data-id="' + j.id + '" aria-pressed="' + fav + '" aria-label="Favoritar ' + j.nome + '">♥</button></div>' +
      '</div></article></div>';
  }

  function render() {
    var lista = JOGOS.filter(function (j) {
      return (estado.genero === 'todos' || j.genero === estado.genero) &&
             (!estado.plat || j.plat.indexOf(estado.plat) > -1) &&
             j.nome.toLowerCase().indexOf(estado.busca) > -1 &&
             (!estado.fav || Fav.tem(j.id));
    });
    lista.sort(function (a, b) {
      if (estado.ordem === 'za') { return b.nome.localeCompare(a.nome); }
      if (estado.ordem === 'curto' && a.tempo !== b.tempo) { return a.tempo === 'curto' ? -1 : 1; }
      return a.nome.localeCompare(b.nome);
    });
    $('#lista').html(lista.map(card).join('')).hide().fadeIn(200);
    $('#total').text('Mostrando ' + lista.length + ' de ' + JOGOS.length + ' jogos');
    $('#vazio').toggleClass('d-none', lista.length > 0);
  }

  // Eventos dos controles
  $('.filtro').on('click', function () {
    estado.genero = $(this).data('genero');
    $('.filtro').removeClass('active');
    $(this).addClass('active');
    render();
  });
  $('#busca').on('input', function () { estado.busca = $(this).val().toLowerCase().trim(); render(); });
  $('#plat').on('change', function () { estado.plat = $(this).val(); render(); });
  $('#ordem').on('change', function () { estado.ordem = $(this).val(); render(); });
  $('#so-fav').on('change', function () { estado.fav = this.checked; render(); });

  // Favoritar (delegação de eventos, pois os cartões são criados por JavaScript)
  $('#lista').on('click', '.btn-fav', function () {
    var ativo = Fav.alternar(Number($(this).data('id')));
    $(this).attr('aria-pressed', ativo);
    if (estado.fav) { render(); }
  });

  // Detalhes no modal do Bootstrap
  $('#lista').on('click', '.btn-det', function () {
    var j = JOGOS.filter(function (x) { return x.id === Number($(this).data('id')); }.bind(this))[0];
    $('#detTitulo').text(j.nome);
    $('#detCorpo').html('<p class="text-body-secondary">' + GENEROS[j.genero] + ' · ' + j.tipo + '</p><p>' + j.desc + '</p>' +
      '<ul class="list-unstyled mb-0"><li><strong>Plataformas:</strong> ' + j.plat.map(function (p) { return NOME_PLAT[p]; }).join(', ') + '</li>' +
      '<li><strong>Sessão:</strong> ' + (j.tempo === 'curto' ? 'curta (até 30 min)' : 'longa (mais de 1 hora)') + '</li>' +
      '<li><strong>Bom para:</strong> ' + j.clima.map(function (c) { return NOME_CLIMA[c]; }).join(', ') + '</li></ul>');
    bootstrap.Modal.getOrCreateInstance(document.getElementById('detModal')).show();
  });

  // Estado inicial dos controles
  $('.filtro[data-genero="' + estado.genero + '"]').addClass('active');
  $('#so-fav').prop('checked', estado.fav);
  render();
});
