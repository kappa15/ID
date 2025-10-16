// Smooth scroll para as seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// Efeito de digitação no título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Adicionar efeito glitch nos títulos ao hover
function addGlitchEffect() {
    const projectTitles = document.querySelectorAll('.project-title, .modal-title');
    
    projectTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            const originalText = this.textContent;
            let glitchInterval;
            let counter = 0;
            
            glitchInterval = setInterval(() => {
                if (counter < 3) {
                    // Substitui alguns caracteres aleatórios
                    this.textContent = originalText
                        .split('')
                        .map(char => Math.random() > 0.7 ? String.fromCharCode(33 + Math.random() * 94) : char)
                        .join('');
                    counter++;
                } else {
                    this.textContent = originalText;
                    clearInterval(glitchInterval);
                }
            }, 50);
        });
    });
}

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function checkKonamiCode(key) {
    konamiCode.push(key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateMatrixMode();
    }
}

function activateMatrixMode() {
    document.body.style.animation = 'glitch 0.3s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
        alert('🎮 CÓDIGO KONAMI ATIVADO! Modo Matrix desativado...');
    }, 3000);
}

// Efeito de paralaxe suave no scroll
function parallaxEffect() {
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        sections.forEach((section, index) => {
            const speed = (index + 1) * 0.1;
            section.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Cursor personalizado (opcional)
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--color-neon);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 10px var(--color-neon);
        transition: transform 0.1s;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// Sistema de partículas de fundo (opcional)
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.3;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ba55d3';
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Animações básicas
    addGlitchEffect();
    
    // Efeitos opcionais - descomente para ativar
    // createCustomCursor();
    // createParticles();
    // parallaxEffect();
    
    // Konami code listener
    document.addEventListener('keydown', (e) => {
        checkKonamiCode(e.key);
    });
    
    // Log inicial
    console.log('%c> SISTEMA INICIALIZADO', 'color: #ba55d3; font-size: 20px; font-family: monospace;');
    console.log('%cBem-vindo ao Portfólio Retro!', 'color: #00ffff; font-size: 16px; font-family: monospace;');
    console.log('%cTente o código Konami: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #ff1493; font-size: 12px; font-family: monospace;');
});

// Prevenir clique direito (opcional - estilo retro)
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     alert('🚫 ACESSO NEGADO');
// });
