# 🚀 Publicar no GitHub Pages - Passo a Passo

## ✅ Filtros Atualizados!
- ✅ Removido: Cosméticos, Artesanato, Óleos
- ✅ Mantido: Todos e Livros Digitais

---

## 📋 Passo 1: Instalar o Git

### Opção A: Instalador Oficial
1. Baixe: https://git-scm.com/download/win
2. Execute o instalador
3. Clique em "Next" em tudo (configuração padrão)
4. Reinicie o terminal/CMD

### Opção B: Via Winget (Mais Rápido)
Abra o PowerShell como Administrador e execute:
```powershell
winget install Git.Git
```

### Verificar se instalou:
```cmd
git --version
```
Deve mostrar algo como: `git version 2.43.0`

---

## 📋 Passo 2: Criar Conta no GitHub

1. Acesse: https://github.com/signup
2. Preencha:
   - Email
   - Senha
   - Username (ex: `seu-nome`)
3. Verifique o email
4. Faça login

---

## 📋 Passo 3: Criar Repositório

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `amazonia-criativa`
   - **Description**: Site de vendas Amazônia Criativa
   - Marque: **Public** ✅
   - **NÃO** marque "Add a README file"
3. Clique em: **Create repository**
4. **COPIE A URL** que aparece (algo como: `https://github.com/SEU-USUARIO/amazonia-criativa.git`)

---

## 📋 Passo 4: Publicar o Site

Abra o CMD ou PowerShell e execute estes comandos **UM POR VEZ**:

### 1. Entrar na pasta do site:
```cmd
cd E:\Memoria\amazonia-criativa
```

### 2. Inicializar Git:
```cmd
git init
```

### 3. Configurar seu nome (primeira vez):
```cmd
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### 4. Adicionar todos os arquivos:
```cmd
git add .
```

### 5. Fazer o primeiro commit:
```cmd
git commit -m "Site Amazônia Criativa - Primeira versão"
```

### 6. Renomear branch para main:
```cmd
git branch -M main
```

### 7. Conectar com GitHub (SUBSTITUA A URL):
```cmd
git remote add origin https://github.com/SEU-USUARIO/amazonia-criativa.git
```

### 8. Enviar para GitHub:
```cmd
git push -u origin main
```

**Vai pedir login:**
- Username: seu-usuario-github
- Password: use um **Personal Access Token** (não a senha)

---

## 📋 Passo 5: Criar Personal Access Token

Se pedir senha ao fazer push:

1. Vá em: https://github.com/settings/tokens
2. Clique em: **Generate new token (classic)**
3. Preencha:
   - Note: `Amazonia Criativa`
   - Expiration: `No expiration`
   - Marque: ✅ **repo** (todos os sub-itens)
4. Clique em: **Generate token**
5. **COPIE O TOKEN** (só aparece uma vez!)
6. Use esse token como senha no git push

---

## 📋 Passo 6: Ativar GitHub Pages

1. Vá no seu repositório: `https://github.com/SEU-USUARIO/amazonia-criativa`
2. Clique em: **Settings** (⚙️)
3. No menu lateral, clique em: **Pages**
4. Em **Source**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
5. Clique em: **Save**
6. Aguarde 2-3 minutos

---

## 🎉 Passo 7: Acessar Seu Site

Seu site estará em:
```
https://SEU-USUARIO.github.io/amazonia-criativa/
```

Exemplo: Se seu usuário é `joaosilva`, será:
```
https://joaosilva.github.io/amazonia-criativa/
```

---

## 🔧 Comandos Resumidos (Copie e Cole)

```cmd
cd E:\Memoria\amazonia-criativa
git init
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git add .
git commit -m "Site Amazônia Criativa"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/amazonia-criativa.git
git push -u origin main
```

---

## 🆘 Problemas Comuns

### Erro: "git não é reconhecido"
- Instale o Git (Passo 1)
- Reinicie o terminal

### Erro: "Permission denied"
- Use Personal Access Token em vez de senha
- Siga o Passo 5

### Erro: "remote origin already exists"
```cmd
git remote remove origin
git remote add origin SUA-URL
```

### Site não aparece
- Aguarde 5 minutos
- Verifique se ativou o GitHub Pages (Passo 6)
- Acesse: Settings → Pages

---

## 🔄 Atualizar o Site Depois

Quando fizer mudanças:

```cmd
cd E:\Memoria\amazonia-criativa
git add .
git commit -m "Atualização do site"
git push
```

Aguarde 1-2 minutos e as mudanças estarão online!

---

## ✅ Checklist Final

- [ ] Git instalado
- [ ] Conta GitHub criada
- [ ] Repositório criado
- [ ] Site enviado (git push)
- [ ] GitHub Pages ativado
- [ ] Site acessível na URL

---

**Precisa de ajuda?** Me avise em qual passo você está! 😊

**Criado em**: 14/01/2026
