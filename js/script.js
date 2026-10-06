/* ===== Funções comuns a todas as páginas ===== */

/* Tema claro/escuro (salvo no navegador) */
(function () {
  var btn = document.getElementById('tema-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var html = document.documentElement;
    var novo = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', novo);
    try { localStorage.setItem('tema', novo); } catch (e) {}
  });
})();

/* Favoritos: lista de ids guardada em localStorage */
var Fav = {
  lista: function () { try { return JSON.parse(localStorage.getItem('favoritos')) || []; } catch (e) { return []; } },
  tem: function (id) { return this.lista().indexOf(id) > -1; },
  alternar: function (id) {
    var l = this.lista(), i = l.indexOf(id);
    if (i > -1) { l.splice(i, 1); } else { l.push(id); }
    try { localStorage.setItem('favoritos', JSON.stringify(l)); } catch (e) {}
    this.atualizar();
    return i === -1; // true se agora é favorito
  },
  atualizar: function () { $('#fav-badge').text(this.lista().length); }
};

$(function () {
  Fav.atualizar();
  // Botão "voltar ao topo" (jQuery: fade e animação)
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) { $('#topo-btn').fadeIn(200); } else { $('#topo-btn').fadeOut(200); }
  });
  $('#topo-btn').on('click', function () { $('html, body').animate({ scrollTop: 0 }, 500); });
});
