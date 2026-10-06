/* ===== Página inicial: contadores (jQuery) e gráfico (Chart.js) ===== */
$(function () {
  // Contadores animados: começam quando aparecem na tela
  $('.contador').each(function () {
    var $el = $(this), alvo = Number($el.data('alvo')), feito = false;
    new IntersectionObserver(function (entradas, obs) {
      if (entradas[0].isIntersecting && !feito) {
        feito = true;
        $({ n: 0 }).animate({ n: alvo }, {
          duration: 1500,
          step: function (n) { $el.text(Math.floor(n)); },
          complete: function () { $el.text(alvo); }
        });
        obs.disconnect();
      }
    }).observe(this);
  });

  // Gráfico de rosca: quantidade de jogos por gênero (usa o array JOGOS)
  var cv = document.getElementById('grafico');
  if (cv && window.Chart) {
    var cont = {};
    JOGOS.forEach(function (j) { cont[j.genero] = (cont[j.genero] || 0) + 1; });
    var chaves = Object.keys(cont);
    new Chart(cv, {
      type: 'doughnut',
      data: {
        labels: chaves.map(function (k) { return GENEROS[k]; }),
        datasets: [{ data: chaves.map(function (k) { return cont[k]; }),
                     backgroundColor: ['#ff4d8d', '#35e0d0', '#ffd23f', '#8a6cff', '#ff8a4d', '#4da3ff'] }]
      },
      options: { plugins: { legend: { position: 'bottom' } } }
    });
  }
});
