# Jardim Encantado - Aplicação Angular

Este é o projeto **Jardim Encantado** migrado para Angular. É uma aplicação de e-commerce de floricultura com funcionalidades de catálogo de produtos, carrinho de compras e painel administrativo.

## 🚀 Tecnologias Utilizadas

- Angular 19
- TypeScript
- RxJS
- CSS3
- LocalStorage para persistência de dados

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (geralmente vem com o Node.js)

## 🔧 Instalação

1. Navegue até o diretório do projeto:
```bash
cd jardim-encantado-angular
```

2. Instale as dependências (se ainda não instalou):
```bash
npm install
```

## ▶️ Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

ou

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes da aplicação
│   │   ├── header/         # Cabeçalho e navegação
│   │   ├── footer/         # Rodapé
│   │   ├── home/           # Página inicial (Buquês)
│   │   ├── arranjos/       # Página de Arranjos
│   │   ├── presentes/      # Página de Presentes
│   │   ├── cart/           # Carrinho de compras
│   │   ├── admin-login/    # Login do administrador
│   │   └── admin-dashboard/ # Painel administrativo
│   ├── models/             # Interfaces TypeScript
│   │   ├── product.model.ts
│   │   └── cart-item.model.ts
│   ├── services/           # Services Angular
│   │   ├── products.service.ts  # Gerenciamento de produtos
│   │   ├── cart.service.ts      # Gerenciamento do carrinho
│   │   └── auth.service.ts      # Autenticação
│   └── app.routes.ts       # Configuração de rotas
├── assets/                 # Imagens e recursos estáticos
└── styles.css             # Estilos globais
```

## 🔐 Credenciais de Acesso

### Administrador
- **Usuário**: admin
- **Senha**: 123456

### Cliente
- **Usuário**: cliente
- **Senha**: 123456

## 🌟 Funcionalidades

### Para Clientes
- ✅ Visualizar catálogo de produtos (Buquês, Arranjos, Presentes)
- ✅ Filtrar produtos mais vendidos
- ✅ Adicionar produtos ao carrinho
- ✅ Visualizar e remover itens do carrinho
- ✅ Simular processo de compra
- ✅ Design responsivo para mobile

### Para Administradores
- ✅ Fazer login no painel administrativo
- ✅ Adicionar novos produtos ao catálogo
- ✅ Remover produtos
- ✅ Gerenciar produtos por categoria

## 🎨 Características do Design

- Design moderno e elegante
- Paleta de cores inspirada em natureza (verde salva, rosa e dourado)
- Animações suaves
- Totalmente responsivo
- Experiência de usuário otimizada

## 📦 Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 🔄 Diferenças da Versão Original

Esta é uma versão Angular do projeto original em HTML/CSS/JS vanilla. As principais diferenças incluem:

1. **Componentização**: Código organizado em componentes reutilizáveis
2. **TypeScript**: Type safety e melhor experiência de desenvolvimento
3. **Services**: Lógica de negócio separada em services
4. **Routing**: Navegação SPA (Single Page Application)
5. **Reactive Programming**: Uso de RxJS para gerenciamento de estado
6. **Melhor Manutenibilidade**: Código mais organizado e fácil de manter

## 🛠️ Desenvolvimento

### Criar um novo componente
```bash
ng generate component components/nome-do-componente
```

### Criar um novo service
```bash
ng generate service services/nome-do-service
```

## 📝 Notas Importantes

- Os dados são armazenados no LocalStorage do navegador
- As imagens dos produtos estão na pasta `public/assets/img/`
- O projeto usa standalone components (Angular 14+)
- Não há backend real - todas as operações são simuladas no frontend

## 🤝 Contribuindo

Este é um projeto educacional/demonstrativo. Sinta-se à vontade para fork e modificar conforme necessário.

## 📄 Licença

Este projeto é fornecido como está para fins educacionais.

---

**Desenvolvido com ❤️ usando Angular**

