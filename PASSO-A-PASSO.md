# 📸 Passo a Passo - Adicionar Imagem da Capa

## Siga estes passos:

### 1️⃣ Salve a imagem que você enviou
- Clique com botão direito na imagem
- Escolha "Salvar imagem como..."
- Salve com o nome: **`psicologia-riqueza-invisivel.jpg`**

### 2️⃣ Crie as pastas necessárias
Dentro da pasta `amazonia-criativa`, crie:
```
amazonia-criativa/
└── images/
    └── produtos/
```

**No Windows (CMD):**
```cmd
cd amazonia-criativa
mkdir images
cd images
mkdir produtos
```

**No Windows (PowerShell):**
```powershell
cd amazonia-criativa
New-Item -ItemType Directory -Path "images\produtos" -Force
```

### 3️⃣ Coloque a imagem na pasta
Mova o arquivo `psicologia-riqueza-invisivel.jpg` para:
```
amazonia-criativa/images/produtos/psicologia-riqueza-invisivel.jpg
```

### 4️⃣ Pronto! ✅
Abra o arquivo `produtos.html` no navegador e a imagem aparecerá!

---

## 🔍 Verificar se está correto

A estrutura final deve ficar assim:
```
amazonia-criativa/
├── index.html
├── produtos.html
├── css/
├── js/
└── images/
    └── produtos/
        └── psicologia-riqueza-invisivel.jpg  ← Sua imagem aqui!
```

---

## ⚠️ Problemas?

**Imagem não aparece?**
- Verifique se o nome do arquivo está correto (com hífen, não espaço)
- Verifique se está na pasta correta: `images/produtos/`
- Abra o Console do navegador (F12) para ver erros

**Imagem muito grande?**
- Redimensione para 600x600 pixels
- Use um editor online: https://www.iloveimg.com/resize-image

---

## 💡 Dica Extra

Se quiser adicionar mais imagens de produtos no futuro, basta:
1. Salvar a imagem em `images/produtos/`
2. Atualizar o `src` no HTML para o nome da imagem
