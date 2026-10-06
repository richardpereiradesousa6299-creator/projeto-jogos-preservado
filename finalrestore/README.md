# Descubra Jogos (versão final)

**Aluno:** Richard Pereira de Sousa
**Disciplina:** Programação Web I (Projeto Integrador)
**Tema:** Site que ajuda o visitante a descobrir o próximo jogo.

## Páginas
- `index.html`: hero, números animados, gráfico por gênero, gêneros, destaques, plataformas, passos e dúvidas.
- `pages/catalogo.html`: 50 jogos com filtros, busca, ordenação, favoritos e modal de detalhes.
- `pages/quiz.html`: quiz de 4 perguntas que calcula a compatibilidade e mostra os 3 melhores jogos.
- `pages/contato.html`: formulário com validação, máscaras, busca de CEP e envio simulado.

## Tecnologias, bibliotecas e plug-ins
- HTML5 semântico e CSS3 próprio (Flexbox, Grid, variáveis CSS, tema escuro, media queries)
- Bootstrap 5.3 (grid, navbar, cards, modal, accordion, formulário, progress, badges)
- JavaScript puro e jQuery 3.7
- jQuery Mask 1.14 (plug-in de máscara), Chart.js 4 (gráfico)
- API ViaCEP (requisição AJAX), fonte Sora (Google Fonts)

## Funcionalidades
- **JavaScript:** quiz com pontuação, validação do formulário, contador de caracteres, tema claro/escuro, favoritos e renderização do catálogo a partir de dados (`js/dados.js`).
- **jQuery:** filtros e busca com animação, contadores animados, botão de topo, AJAX do CEP.
- **Armazenamento (localStorage):** tema, favoritos, último resultado do quiz e mensagens enviadas.

## Como executar
Precisa de internet (Bootstrap, jQuery, Chart.js e fontes vêm de CDN). Abra o `index.html` no navegador ou use a extensão Live Server do VS Code.

## Testes
Navegadores testados: Google Chrome e Microsoft Edge.

## Telas
As principais telas são: página inicial, catálogo, quiz e contato, descritas nas seções acima.

## Estrutura
```
projeto-jogos-final/
├── index.html
├── pages/ (catalogo.html, quiz.html, contato.html)
├── css/style.css
├── js/ (dados.js, script.js, index.js, catalogo.js, quiz.js, contato.js)
├── img/logo.svg
└── README.md
```

## Imagens dos jogos
As capas em `img/jogos/` são ilustrações originais em SVG, feitas para o projeto (não são as capas oficiais). Para usar imagens reais, coloque o arquivo na pasta e ajuste o campo `img` do jogo em `js/dados.js`.
