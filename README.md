# Conecta Futuro

Projeto de exemplo desenvolvido para o **Minicurso de HTML | CSS | JS**, oficina de
extensão da Unitins (Câmpus Palmas) com foco no ensino do desenvolvimento de
páginas web. Esta página simula a divulgação de um evento fictício "Conecta
Futuro" e serve como material de referência para as práticas guiadas do
minicurso.

## Sobre o projeto

A página reúne, num único exemplo, as técnicas trabalhadas nos dois encontros
do minicurso: estrutura semântica em HTML, um design system simples em CSS e
uma interação básica em JavaScript. A proposta é que o projeto possa ser
demonstrado passo a passo durante as oficinas e depois usado como modelo para
os participantes criarem suas próprias páginas.

## Objetivos atendidos

| # | Objetivo do minicurso | Onde está no projeto |
|---|---|---|
| 1 | Explicar o que é HTML e o que é CSS, e o papel de cada um numa página web | `index.html` (conteúdo e estrutura) e `style.css` (apresentação visual), com comentários explicando a divisão de papéis |
| 2 | Montar a estrutura de uma página usando tags semânticas | `header`, `main`, `section` e `footer` em `index.html` |
| 3 | Aplicar um design system simples: paleta de cores, tipografia e espaçamento | Variáveis CSS no topo de `style.css` (`:root`), reaproveitadas em toda a folha de estilos |
| 4 | Adicionar pelo menos uma interação básica com JavaScript | Menu "hambúrguer" que abre/fecha em `script.js`, mais dois exemplos extras (ano automático no rodapé e confirmação do formulário) |
| 5 | Usar a cartilha final para continuar criando páginas de forma independente | Este projeto serve de ponto de partida: a cartilha final (entregue no dia 2) reúne os mesmos padrões usados aqui |

## Estrutura de arquivos

```
projeto-minicurso/
├── index.html   → estrutura e conteúdo da página
├── style.css    → design system e estilos visuais
├── script.js    → interações em JavaScript
├── banner.svg   → ilustração usada como imagem do banner
└── README.md    → este arquivo
```

Todos os arquivos devem ficar sempre na mesma pasta: `index.html` referencia
`style.css` e `script.js` por caminho relativo, e `style.css` referencia
`banner.svg` da mesma forma.

## Como visualizar

Não é necessário instalar nada. Basta abrir o arquivo `index.html` diretamente
no navegador (duplo clique, ou clique com o botão direito → "Abrir com" →
navegador de preferência).

## Design system

As cores, a tipografia e os espaçamentos ficam centralizados em variáveis no
início de `style.css`:

- **Cores**: `--cor-primaria`, `--cor-secundaria`, `--cor-texto`, `--cor-fundo`, entre outras.
- **Tipografia**: `--fonte-base` e uma escala de tamanhos (`--tamanho-h1`, `--tamanho-h2`, `--tamanho-h3`, `--tamanho-texto`).
- **Espaçamento**: escala de `--espaco-1` a `--espaco-6`, usada em margens, preenchimentos e distância entre elementos.

Alterar esses valores muda a aparência da página inteira, sem precisar editar
o restante do CSS — é um bom exemplo prático do papel de um design system.

## Interações em JavaScript

- **Menu responsivo**: ao clicar no botão "hambúrguer", o menu de navegação
  abre e fecha (classe `.aberto` adicionada/removida via `classList.toggle`).
- **Ano automático**: o rodapé exibe o ano atual, obtido com `new Date()`.
- **Formulário de inscrição**: ao enviar, a página exibe uma mensagem de
  confirmação sem recarregar (`event.preventDefault()`), simulando o retorno
  de um envio bem-sucedido.

## Contexto

Projeto elaborado por alunos do 1º período de Sistemas de Informação da
Unitins, como atividade de extensão vinculada à curricularização da
disciplina de Desenvolvimento Front-End, em parceria institucional para a
realização do minicurso com adolescentes em cumprimento de medida
socioeducativa em Palmas – TO.
