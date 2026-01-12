# Quest: ToDo API (Back-end)

Projeto desenvolvido durante o módulo de Back-end do curso **DevQuest**. O objetivo foi criar uma API REST simples para gerenciamento de tarefas utilizando Node.js, TypeScript e Banco de Dados Relacional.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL

## ⚙️ Como rodar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure o Banco de Dados:**
   Crie um arquivo `.env` na raiz do projeto com a URL de conexão do seu Postgres (exemplo):
   ```env
   DATABASE_URL="postgresql://SEU_USER:SUA_SENHA@localhost:5432/todo_db?schema=public"
   ```

3. **Rode as migrações (Criar tabelas):**
   ```bash
   npx prisma migrate dev
   ```

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   *O servidor rodará em `http://localhost:3333`*

## 📍 Rotas da API

- **`GET /todos`**: Lista todas as tarefas cadastradas.
- **`POST /todos`**: Cria uma nova tarefa.
  - Body (JSON): `{ "title": "Estudar Backend", "done": false }`
- **`DELETE /todos/:id`**: Deleta uma tarefa pelo ID.