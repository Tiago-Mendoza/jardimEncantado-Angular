# 🚀 Quick Start - Jardim Encantado Angular

## Iniciar o Projeto

1. **Navegue até a pasta do projeto Angular:**
```bash
cd jardim-encantado-angular
```

2. **Instale as dependências (se necessário):**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm start
```
ou
```bash
ng serve
```

4. **Abra no navegador:**
```
http://localhost:4200
```

## 🎯 Como Usar

### Como Cliente

1. **Explorar Produtos:**
   - Acesse a página inicial para ver Buquês
   - Clique em "Arranjos" ou "Presentes" no menu
   - Veja os produtos mais vendidos e todo o catálogo

2. **Adicionar ao Carrinho:**
   - Clique no botão "Comprar" em qualquer produto
   - Um alerta confirmará que o item foi adicionado
   - O contador do carrinho (🛒) será atualizado

3. **Finalizar Compra:**
   - Clique no ícone do carrinho (🛒)
   - Revise os itens
   - Preencha os dados de pagamento
   - Clique em "Finalizar Compra"

### Como Administrador

1. **Fazer Login:**
   - Clique em "Login" no menu
   - Usuário: `admin`
   - Senha: `123456`
   - Clique em "Entrar"

2. **Adicionar Produtos:**
   - No painel, selecione a categoria
   - Preencha os dados do produto:
     - Título
     - URL da imagem (ex: `assets/img/buques/buque-21.jpg`)
     - Preço Original
     - Preço Atual
   - Clique em "Adicionar"

3. **Remover Produtos:**
   - Na lista de produtos cadastrados
   - Clique no ✕ no produto desejado
   - Confirme a remoção

4. **Sair do Painel:**
   - Clique no botão "Sair" no topo

## 📱 Recursos Disponíveis

- ✅ Catálogo de Produtos (Buquês, Arranjos, Presentes)
- ✅ Carrinho de Compras
- ✅ Simulação de Checkout
- ✅ Painel Administrativo
- ✅ Design Responsivo
- ✅ Persistência de Dados (LocalStorage)

## 🔍 Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
ng serve

# Compilar para produção
ng build

# Gerar novo componente
ng generate component nome-do-componente

# Gerar novo service
ng generate service nome-do-service

# Executar testes
ng test

# Verificar linting
ng lint
```

## 📂 Estrutura de Pastas

```
jardim-encantado-angular/
├── src/
│   ├── app/
│   │   ├── components/         # Todos os componentes
│   │   ├── services/           # Services de lógica de negócio
│   │   ├── models/             # Interfaces TypeScript
│   │   ├── app.routes.ts       # Configuração de rotas
│   │   ├── app.ts              # Componente raiz
│   │   └── app.config.ts       # Configuração da app
│   ├── assets/                 # Imagens e recursos
│   ├── styles.css              # Estilos globais
│   └── index.html              # HTML principal
├── public/                     # Arquivos públicos
└── package.json                # Dependências
```

## 💡 Dicas

1. **Dados Persistentes:**
   - Os dados são salvos no LocalStorage do navegador
   - Para limpar: Abra DevTools → Application → Local Storage → Clear

2. **Desenvolvimento:**
   - O servidor recarrega automaticamente ao salvar mudanças
   - Use o DevTools do navegador para debug

3. **Imagens:**
   - As imagens estão em `public/assets/img/`
   - Use caminhos relativos: `assets/img/categoria/imagem.jpg`

4. **Customização:**
   - Cores em `src/styles.css` (variáveis CSS)
   - Componentes individuais em `src/app/components/`

## 🐛 Solução de Problemas

### Porta 4200 já em uso
```bash
ng serve --port 4201
```

### Erro de dependências
```bash
rm -rf node_modules
npm install
```

### Cache do navegador
- Pressione `Ctrl + Shift + R` (ou `Cmd + Shift + R` no Mac)

## 📖 Documentação Adicional

- `README-PT.md` - Documentação completa em português
- `MIGRATION-GUIDE.md` - Guia de migração do projeto original

## ✅ Checklist de Teste

- [ ] Navegar entre páginas (Buquês, Arranjos, Presentes)
- [ ] Adicionar produtos ao carrinho
- [ ] Ver contador do carrinho atualizar
- [ ] Visualizar carrinho
- [ ] Remover itens do carrinho
- [ ] Simular finalização de compra
- [ ] Fazer login como admin
- [ ] Adicionar novo produto
- [ ] Remover produto
- [ ] Testar responsividade (redimensionar navegador)
- [ ] Testar menu mobile (< 768px)

---

**Divirta-se explorando o Jardim Encantado! 🌸**

