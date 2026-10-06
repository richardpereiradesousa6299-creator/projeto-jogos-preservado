/* ===== Quiz: pontua cada jogo e mostra os 3 mais compatíveis ===== */
(function () {
  var form = document.getElementById('quiz');
  if (!form) return;
  var campos = ['q-tempo', 'q-clima', 'q-aparelho', 'q-genero'];
  var val = function (id) { return document.getElementById(id).value; };

  // Barra de progresso: conta quantas perguntas foram respondidas
  function progresso() {
    var n = campos.filter(function (id) { return val(id) !== ''; }).length;
    var barra = document.getElementById('prog');
    barra.style.width = (n * 25) + '%';
    barra.textContent = n + '/4';
    barra.parentNode.setAttribute('aria-valuenow', n * 25);
  }
  campos.forEach(function (id) { document.getElementById(id).addEventListener('change', progresso); });
  document.getElementById('limpar').addEventListener('click', function () {
    setTimeout(progresso, 0);
    document.getElementById('resultado').innerHTML = '';
  });

  // Regra de pontuação (máximo 10): clima 4 + tempo 3 + gênero 3; aparelho incompatível elimina o jogo
  function pontuar(j, r) {
    if (j.plat.indexOf(r.aparelho) < 0) { return -1; }
    var p = 0;
    if (j.clima.indexOf(r.clima) > -1) { p += 4; }
    if (j.tempo === r.tempo) { p += 3; }
    if (r.genero === 'qualquer' || j.genero === r.genero) { p += 3; }
    return p;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var aviso = document.getElementById('aviso');
    var faltam = campos.some(function (id) { return val(id) === ''; });
    aviso.classList.toggle('d-none', !faltam);
    if (faltam) { return; }
    var r = { tempo: val('q-tempo'), clima: val('q-clima'), aparelho: val('q-aparelho'), genero: val('q-genero') };
    var top = JOGOS.map(function (j) { return { j: j, p: pontuar(j, r) }; })
      .filter(function (x) { return x.p >= 0; })
      .sort(function (a, b) { return b.p - a.p || a.j.nome.localeCompare(b.j.nome); })
      .slice(0, 3);
    var html = '<h2 class="h4 mb-3">Seus 3 jogos mais compatíveis</h2><div class="row row-cols-1 row-cols-md-3 g-3">';
    top.forEach(function (x, i) {
      var pct = x.p * 10;
      html += '<div class="col"><div class="card h-100"><div class="card-body"><span class="badge text-bg-info mb-2">' + (i + 1) + 'º lugar</span>' +
        '<h3 class="h5">' + x.j.nome + '</h3><p class="small text-body-secondary">' + GENEROS[x.j.genero] + ' · ' + x.j.tipo + '</p>' +
        '<div class="progress mb-2" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width:' + Math.max(pct, 12) + '%">' + pct + '%</div></div>' +
        '<p class="mb-0 small">' + x.j.desc + '</p></div></div></div>';
    });
    document.getElementById('resultado').innerHTML = html + '</div><a class="btn btn-rosa mt-3" href="catalogo.html">Ver no catálogo</a>';
    try { localStorage.setItem('ultimoQuiz', JSON.stringify(top.map(function (x) { return x.j.nome; }))); } catch (err) {}
  });

  // Mostra o último resultado salvo, se houver
  try {
    var ult = JSON.parse(localStorage.getItem('ultimoQuiz'));
    if (ult && ult.length) {
      document.getElementById('resultado').innerHTML = '<p class="text-body-secondary">Seu último resultado: <strong>' + ult.join(', ') + '</strong>. Refaça o quiz para atualizar.</p>';
    }
  } catch (err) {}
})();
