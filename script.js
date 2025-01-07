// Utility Functions
const utils = {
    // Debounce function for performance optimization
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Validate email format
    isValidEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Animate number counting
    animateNumber: (elem, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            elem.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
};

// Theme Management
class ThemeManager {
    constructor() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.toggleBtn = document.querySelector('.dark-mode-toggle');
        this.init();
    }

    init() {
        // Set initial theme
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
        }

        // Add event listener
        this.toggleBtn.addEventListener('click', () => this.toggleTheme());

        // Add system theme detection
        window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
            this.darkMode = e.matches;
            this.updateTheme();
        });
    }

    toggleTheme() {
        this.darkMode = !this.darkMode;
        this.updateTheme();
    }

    updateTheme() {
        document.body.classList.toggle('dark-mode', this.darkMode);
        localStorage.setItem('darkMode', this.darkMode);
    }
}

// Skills Management
class SkillsManager {
    constructor() {
        this.skills = [
            { name: 'HTML & CSS', level: 95, color: '#2196F3' },
            { name: 'JavaScript', level: 90, color: '#FFC107' },
            { name: 'React', level: 85, color: '#00BCD4' },
            { name: 'Node.js', level: 80, color: '#4CAF50' },
            { name: 'Python', level: 85, color: '#9C27B0' },
            { name: 'SQL', level: 95, color: '#FF5722' }
        ];
        this.init();
    }

    init() {
        this.renderSkills();
        this.setupIntersectionObserver();
    }

    renderSkills() {
        const container = document.querySelector('.skills-grid');
        if (!container) return;

        this.skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.innerHTML = `
                <div class="skill-name">
                    <span>${skill.name}</span>
                    <span class="skill-percentage">0%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: 0; background-color: ${skill.color}"></div>
                </div>
            `;
            container.appendChild(skillElement);
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.querySelector('.section-skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    animateSkills() {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            const progress = item.querySelector('.progress');
            const percentage = item.querySelector('.skill-percentage');
            const skill = this.skills[index];

            setTimeout(() => {
                progress.style.width = `${skill.level}%`;
                utils.animateNumber(percentage, 0, skill.level, 1000);
            }, index * 200);
        });
    }
}

// Contact Form Management
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.setupFormValidation();
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.validateInput(input));
            input.addEventListener('blur', () => this.validateInput(input));
        });
    }

    validateInput(input) {
        const errorElement = this.getOrCreateErrorElement(input);
        
        if (!input.value.trim()) {
            this.showError(input, errorElement, 'Este campo é obrigatório');
            return false;
        }

        if (input.type === 'email' && !utils.isValidEmail(input.value)) {
            this.showError(input, errorElement, 'Por favor, insira um email válido');
            return false;
        }

        this.hideError(input, errorElement);
        return true;
    }

    getOrCreateErrorElement(input) {
        let errorElement = input.parentElement.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            input.parentElement.appendChild(errorElement);
        }
        return errorElement;
    }

    showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.style.display = 'none';
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Simulação de envio para API
            await this.submitForm(data);
            
            // Feedback visual
            const button = this.form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Enviado com sucesso!';
            button.classList.add('success');
            
            // Reset form
            setTimeout(() => {
                this.form.reset();
                button.textContent = originalText;
                button.classList.remove('success');
            }, 3000);
            
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        }
    }

    async submitForm(data) {
        // Simula uma chamada API
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form data:', data);
                resolve({ success: true });
            }, 1000);
        });
    }
}

// Navigation Management
class Navigation {
    constructor() {
        this.header = document.querySelector('header');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupScrollSpy();
        this.setupHeaderScroll();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', utils.debounce(() => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100));
    }

    setupHeaderScroll() {
        window.addEventListener('scroll', utils.debounce(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                this.header.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > this.lastScroll && !this.header.classList.contains('scroll-down')) {
                this.header.classList.remove('scroll-up');
                this.header.classList.add('scroll-down');
            } else if (currentScroll < this.lastScroll && this.header.classList.contains('scroll-down')) {
                this.header.classList.remove('scroll-down');
                this.header.classList.add('scroll-up');
            }
            
            this.lastScroll = currentScroll;
        }, 50));
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new SkillsManager();
    new ContactForm();
    new Navigation();
});