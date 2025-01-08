
# Portfolio Pessoal

Um portfolio profissional moderno e responsivo, construído com HTML, CSS e JavaScript vanilla. O site possui modo escuro, animações suaves e seções interativas para mostrar habilidades e projetos.

![Preview do Portfolio]([preview.png](https://portfolioaarleyzin.netlify.app))

## 🚀 Funcionalidades

- ✨ Design moderno e responsivo
- 🌓 Modo escuro/claro com persistência
- 📊 Seção de habilidades com animações
- 📱 Layout adaptativo para todos os dispositivos
- 📬 Formulário de contato funcional
- 🎯 Animações de scroll suaves
- 🔍 SEO otimizado
- ♿ Acessibilidade implementada

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Flexbox & Grid)
- JavaScript (ES6+)
- LocalStorage para persistência
- Intersection Observer API
- CSS Custom Properties
- Animações CSS

## 📦 Estrutura do Projeto

```
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## 🚀 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/aarleyzin/portfolio.git
```

2. Navegue até a pasta do projeto:
```bash
cd portfolio
```

3. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Se você tem o Python instalado:
python -m http.server 8000

# Se você tem o Node.js instalado:
npx serve
```

## 🔧 Personalização

### Alterando as Habilidades

No arquivo `script.js`, encontre a classe `SkillsManager` e modifique o array de skills:

```javascript
this.skills = [
    { name: 'HTML & CSS', level: 95, color: '#2196F3' },
    { name: 'JavaScript', level: 90, color: '#FFC107' },
    // Adicione ou modifique as habilidades aqui
];
```

### Alterando as Cores

No arquivo `styles.css`, localize as variáveis CSS na raiz:

```css
:root {
    --primary-color: #004080;
    --secondary-color: #4a90e2;
    /* Modifique as cores aqui */
}
```

## 📱 Responsividade

O portfolio é totalmente responsivo e se adapta aos seguintes breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

O site foi otimizado para performance seguindo as melhores práticas:

- Imagens otimizadas
- CSS minificado
- JavaScript modular
- Lazy loading de imagens
- Animações otimizadas

## 🌐 SEO

Implementações para melhor SEO:

- Meta tags otimizadas
- HTML semântico
- Sitemap XML
- Robots.txt configurado
- Schema markup

## 🔒 Segurança

- Formulário com validação
- Proteção contra XSS
- Headers de segurança
- HTTPS ready

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📫 Contato

Seu Nome - [seu-email@exemplo.com](mailto:aarleyzin@gmail.com)

Link do Projeto: [https://github.com/seu-usuario/portfolio](https://github.com/aarleyzin/portfolio)

## 🙏 Agradecimentos

- [Font Awesome](https://fontawesome.com) - pelos ícones
- [Google Fonts](https://fonts.google.com) - pela fonte Inter
- [MDN Web Docs](https://developer.mozilla.org) - pela documentação

---
⭐️ From [seu-usuario](https://github.com/aarleyzin)
