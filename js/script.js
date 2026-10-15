/* ============================================================
   INTERAÇÃO 1: abrir/fechar o menu (objetivo 4 do minicurso)
   ============================================================ */
const botaoMenu = document.getElementById("menuToggle");
const menu = document.getElementById("mainNav");

botaoMenu.addEventListener("click", () => {
  // alterna a classe "aberto" no menu
  const estaAberto = menu.classList.toggle("aberto");

  // atualiza o atributo de acessibilidade do botão
  botaoMenu.setAttribute("aria-expanded", estaAberto);
});

// fecha o menu automaticamente ao clicar em um link (útil no celular)
const linksDoMenu = menu.querySelectorAll("a");
linksDoMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});

/* ============================================================
   INTERAÇÃO 2: ano atual automático no rodapé
   ============================================================ */
document.getElementById("ano").textContent = new Date().getFullYear();

/* ============================================================
   INTERAÇÃO 3: envio do formulário de inscrição
   (sem servidor — aqui é só um exemplo de feedback ao usuário)
   ============================================================ */
const formulario = document.getElementById("formInscricao");
const mensagem = document.getElementById("formMensagem");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // impede o recarregamento da página

  const nome = document.getElementById("nome").value;

  mensagem.textContent = `Inscrição recebida, ${nome}! Em breve enviaremos mais informações por e-mail.`;
  mensagem.hidden = false;

  formulario.reset();
});
