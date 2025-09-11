document.addEventListener('DOMContentLoaded', function() {
    // Mensagem de boas-vindas animada
    const msg = document.getElementById('welcomeMsg');
    msg.classList.add('show');
    setTimeout(() => msg.classList.remove('show'), 2500);

    // Tema escuro/claro com animação e feedback
    const btn = document.getElementById('toggleTheme');
    if (!btn) return;
    btn.onclick = function() {
        document.body.classList.toggle('dark-mode');
        btn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌑 Modo Escuro';
        msg.textContent = document.body.classList.contains('dark-mode') ? 'Modo escuro ativado! 🌑' : 'Modo claro ativado! ☀️';
        msg.classList.add('show');
        setTimeout(() => {
            msg.textContent = 'Bem-vindo ao portfólio! 👋';
            msg.classList.remove('show');
        }, 1800);
    };
});