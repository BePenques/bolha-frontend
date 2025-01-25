# 🎥 Projeto de Filmes

Este é um projeto de aplicação web para exibição e filtragem de filmes. A aplicação utiliza uma interface moderna e responsiva, permitindo que os usuários explorem filmes, filtrem por categorias e obtenham detalhes adicionais ao clicar em um filme.

---

## 🚀 Funcionalidades

  
- **🔎 Campo de Busca:**
  - Permite pesquisar filmes pelo nome.

- **🎭 Filtro de Categorias:**
  - Exibe apenas as categorias com filmes relacionados.

- **📌 Toggle de Destaque:**
  - Ordena os filmes com base na flag de "em destaque".

- **ℹ️ Modal de Detalhes do Filme:**
  - Ao clicar na thumb de um filme, um modal exibe informações detalhadas, incluindo:
    - Nome do filme
    - Sinopse
    - Gêneros
    - Nota média (rating)
    - Data de lançamento

- **⚙️ Integração com API Strapi:**
  - A API [Strapi](https://strapi.io/) é utilizada para cadastrar os filmes e categorias. A aplicação consome os dados dessa API no frontend. A api esta hospedada em [Strapi cloud](https://cloud.strapi.io/).

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
- **React**: Framework para criar a interface de usuário.
- **Radix UI**: Biblioteca de componentes acessíveis (usada no modal de detalhes).

### Backend:
- **Strapi**: Headless CMS utilizado para cadastrar e gerenciar os filmes e categorias.
- **SQLite** (banco padrão): Gerenciamento dos dados durante o desenvolvimento.

---


### **Passos para rodar o projeto:**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependencias:
   ```bash
   npm install

3. Inicie o frontend:
   ```bash
   npm run start

4. Acesse a aplicação no navegador:
    http://localhost:3000
