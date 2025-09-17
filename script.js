document.addEventListener('DOMContentLoaded', function() {
    // Garante que a página está no topo após a animação principal
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, 1300); // 1.2s animação + 0.1s margem de segurança

    // Tema escuro/claro
    const btn = document.getElementById('toggleTheme');
    if (!btn) return;
    btn.onclick = function() {
        document.body.classList.toggle('dark-mode');
        btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    };

    document.querySelectorAll('.card').forEach(card => {
        const btn = card.querySelector('.card-toggle');
        btn.addEventListener('click', e => {
            e.stopPropagation();
            card.classList.toggle('minimized');
            btn.textContent = card.classList.contains('minimized') ? '＋' : '－';
        });
        // Minimizar/maximizar ao clicar no topo do card (opcional)
        card.addEventListener('dblclick', () => {
            card.classList.toggle('minimized');
            btn.textContent = card.classList.contains('minimized') ? '＋' : '－';
        });
    });
});