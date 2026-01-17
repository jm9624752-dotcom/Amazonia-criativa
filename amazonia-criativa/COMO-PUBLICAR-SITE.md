# 🌐 Como Publicar Seu Site na Internet

Seu site está rodando localmente em `http://127.0.0.1:3000`. Para torná-lo público e acessível de qualquer lugar, você tem estas opções:

---

## 🚀 Opção 1: GitHub Pages (GRÁTIS e RECOMENDADO)

### Vantagens:
- ✅ 100% Gratuito
- ✅ HTTPS automático
- ✅ Fácil de usar
- ✅ URL personalizada disponível

### Passo a Passo:

1. **Crie uma conta no GitHub** (se não tiver):
   - Acesse: https://github.com/signup

2. **Instale o Git** (se não tiver):
   - Windows: https://git-scm.com/download/win
   - Ou use: `winget install Git.Git`

3. **Crie um repositório**:
   - Vá em: https://github.com/new
   - Nome: `amazonia-criativa`
   - Deixe público
   - Clique em "Create repository"

4. **Publique seu site** (no terminal/CMD):
   ```cmd
   cd E:\Memoria\amazonia-criativa
   git init
   git add .
   git commit -m "Primeiro commit - Site Amazônia Criativa"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/amazonia-criativa.git
   git push -u origin main
   ```

5. **Ative o GitHub Pages**:
   - Vá em: Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root)
   - Clique em Save

6. **Seu site estará em**:
   ```
   https://SEU-USUARIO.github.io/amazonia-criativa/
   ```

---

## 🌟 Opção 2: Netlify (GRÁTIS)

### Vantagens:
- ✅ Gratuito
- ✅ Deploy automático
- ✅ HTTPS incluído
- ✅ Domínio personalizado grátis

### Passo a Passo:

1. **Acesse**: https://www.netlify.com/
2. **Crie uma conta** (pode usar GitHub)
3. **Arraste a pasta** `amazonia-criativa` para o Netlify
4. **Pronto!** Seu site estará online em segundos

**URL será algo como**: `https://amazonia-criativa-xyz.netlify.app`

---

## ⚡ Opção 3: Vercel (GRÁTIS)

### Vantagens:
- ✅ Gratuito
- ✅ Muito rápido
- ✅ HTTPS automático
- ✅ Fácil integração

### Passo a Passo:

1. **Acesse**: https://vercel.com/
2. **Crie uma conta** (pode usar GitHub)
3. **Clique em** "Add New Project"
4. **Importe** seu repositório do GitHub
5. **Deploy!**

**URL será algo como**: `https://amazonia-criativa.vercel.app`

---

## 🏠 Opção 4: Hospedagem Tradicional

### Hospedagens Brasileiras Baratas:
- **Hostinger**: R$ 6,99/mês
- **HostGator**: R$ 7,99/mês
- **Locaweb**: R$ 14,90/mês

### Como usar:
1. Contrate a hospedagem
2. Acesse o cPanel
3. Use o File Manager
4. Faça upload da pasta `amazonia-criativa`
5. Seu site estará em: `https://seudominio.com.br`

---

## 📱 Opção 5: Ngrok (Temporário - Para Testes)

### Para compartilhar rapidamente:

1. **Baixe o Ngrok**: https://ngrok.com/download

2. **Execute**:
   ```cmd
   ngrok http 3000
   ```

3. **Copie a URL** que aparece (ex: `https://abc123.ngrok.io`)

4. **Compartilhe** essa URL

⚠️ **Atenção**: A URL muda toda vez que você reinicia o Ngrok (versão grátis)

---

## 🎯 Recomendação Final

**Para seu caso (site de vendas):**

### 1ª Opção: **GitHub Pages** (Grátis)
- Perfeito para começar
- Confiável e rápido
- URL: `https://seu-usuario.github.io/amazonia-criativa/`

### 2ª Opção: **Netlify** (Grátis)
- Mais fácil que GitHub Pages
- URL mais bonita
- Deploy em 1 minuto

### 3ª Opção: **Domínio Próprio** (Pago)
- Quando quiser algo como: `www.amazoniacriativa.com.br`
- Mais profissional
- Custo: R$ 40/ano (domínio) + R$ 7/mês (hospedagem)

---

## 🔧 Preparando para Publicar

Antes de publicar, certifique-se:

✅ Todas as imagens estão na pasta `images/`
✅ Links funcionando corretamente
✅ Testado em diferentes navegadores
✅ Responsivo (mobile, tablet, desktop)

---

## 📞 Precisa de Ajuda?

Escolha uma opção e me avise qual você quer usar. Posso te guiar passo a passo! 😊

---

**Criado em**: 14/01/2026
**Última atualização**: 14/01/2026
