# Site Pessoal - Rafael Brinkhues

Site pessoal moderno e funcional para o Professor e Pesquisador Rafael Alfonso Brinkhues, especialista em Gestão de Sistemas de Informação.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com design responsivo
- **Navegação Intuitiva**: Menu de navegação claro com 6 seções principais
- **Conteúdo Estruturado**: Informações organizadas baseadas no CV e currículo Lattes
- **Funcionalidades Interativas**: Formulário de contato, filtros de publicações, busca
- **Responsivo**: Compatível com desktop, tablet e mobile
- **Performance**: Construído com React e Vite para carregamento rápido

## 📋 Seções do Site

### 1. **Início (Home)**
- Apresentação principal com foto e informações básicas
- Áreas de expertise em cards visuais
- Estatísticas de carreira (15+ anos, 50+ publicações, etc.)
- Destaques recentes (publicações e projetos)
- Prêmios e reconhecimentos

### 2. **Sobre**
- Biografia profissional completa
- Formação acadêmica detalhada (Doutorado, Mestrado, Graduação)
- Experiência profissional cronológica
- Liderança acadêmica e cargos
- Prêmios e reconhecimentos
- Idiomas

### 3. **Pesquisa**
- Grupos de pesquisa (líder e 2º líder)
- Projetos ativos com detalhes de financiamento
- Projetos concluídos
- Agências de fomento e estatísticas

### 4. **Publicações**
- Sistema de busca por título/autor
- Filtros por área de pesquisa
- Artigos em periódicos (6 principais)
- Trabalhos em eventos (3 principais)
- Áreas de pesquisa organizadas

### 5. **Ensino**
- Disciplinas atuais (UFRGS e IFRS)
- Cursos e workshops especiais
- Estatísticas de orientações
- Filosofia de ensino
- Áreas de interesse para orientação

### 6. **Contato**
- Informações de contato completas
- Afiliações institucionais
- Links para perfis acadêmicos
- Formulário de contato funcional
- Oportunidades de colaboração

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface
- **Vite**: Build tool moderno e rápido
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Componentes UI modernos
- **Lucide React**: Ícones SVG
- **React Router**: Navegação entre páginas
- **Framer Motion**: Animações (pré-instalado)

## 📦 Estrutura do Projeto

```
rafael-brinkhues-site/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/        # Componentes React
│   │   ├── common/       # Header, Footer
│   │   ├── cards/        # Componentes de cards
│   │   ├── sections/     # Seções específicas
│   │   └── ui/           # Componentes UI (shadcn)
│   ├── data/             # Dados estruturados em JSON
│   │   ├── personal.json     # Informações pessoais
│   │   ├── experience.json   # Formação e experiência
│   │   ├── publications.json # Publicações
│   │   └── projects.json     # Projetos de pesquisa
│   ├── pages/            # Páginas do site
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Research.jsx
│   │   ├── Publications.jsx
│   │   ├── Teaching.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── package.json          # Dependências
└── README.md            # Esta documentação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- pnpm, npm ou yarn

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   cd rafael-brinkhues-site
   pnpm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   pnpm run dev
   ```
   O site estará disponível em `http://localhost:5173`

3. **Build para produção:**
   ```bash
   pnpm run build
   ```
   Os arquivos otimizados estarão na pasta `dist/`

4. **Preview da build:**
   ```bash
   pnpm run preview
   ```

## 📝 Personalização

### Atualizando Conteúdo

Os dados do site estão organizados em arquivos JSON na pasta `src/data/`:

- **personal.json**: Informações pessoais, contato, expertise, estatísticas
- **experience.json**: Formação, experiência profissional, prêmios
- **publications.json**: Artigos, trabalhos em eventos, áreas de pesquisa
- **projects.json**: Projetos de pesquisa, grupos, agências de fomento

### Modificando Estilos

- **Cores**: Edite as variáveis CSS em `src/App.css`
- **Layout**: Modifique os componentes em `src/components/`
- **Páginas**: Edite os arquivos em `src/pages/`

### Adicionando Novas Seções

1. Crie um novo componente em `src/pages/`
2. Adicione a rota em `src/App.jsx`
3. Inclua no menu de navegação em `src/components/common/Header.jsx`

## 🌐 Deploy

### Opções de Deploy

1. **Vercel** (Recomendado)
   - Conecte o repositório GitHub
   - Deploy automático a cada commit

2. **Netlify**
   - Arraste a pasta `dist/` após build
   - Ou conecte via Git

3. **GitHub Pages**
   - Configure GitHub Actions para build automático

### Configuração de Build

O projeto já está configurado para build otimizado:
- Minificação automática
- Tree shaking
- Code splitting
- Otimização de assets

## 📧 Suporte

Para dúvidas sobre o site ou modificações:
- Email: rafael.brinkhues@viamao.ifrs.edu.br
- Site atual: https://www.rafaelbrinkhues.com/

## 📄 Licença

Este projeto foi desenvolvido especificamente para Rafael Alfonso Brinkhues.

---

**Desenvolvido com ❤️ usando React + Vite + Tailwind CSS**

