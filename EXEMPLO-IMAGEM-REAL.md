# Como Usar a Imagem Real no Produto 1

## 📸 Implementação da Imagem Real

Para usar a imagem que você forneceu no primeiro produto (Creme Facial Açaí), siga estes passos:

### 1. Salvar a Imagem
Salve a imagem fornecida como:
```
amazonia-criativa/images/produtos/creme-acai-real.jpg
```

### 2. Atualizar o CSS
No arquivo `css/produtos.css`, substitua a linha do primeiro produto:

**ANTES:**
```css
.produto-item[data-categoria="cosmeticos"]:nth-child(1) .placeholder {
    background-image: url('data:image/svg+xml,...');
    text-indent: -9999px;
}
```

**DEPOIS:**
```css
.produto-item[data-categoria="cosmeticos"]:nth-child(1) .placeholder {
    background-image: url('../images/produtos/creme-acai-real.jpg');
    background-size: cover;
    background-position: center;
    text-indent: -9999px;
}
```

### 3. Atualizar o Modal
No arquivo `js/produtos.js`, na função do modal, substitua:

**ANTES:**
```javascript
modalImagem.style.backgroundImage = "url('data:image/svg+xml,...)";
```

**DEPOIS:**
```javascript
modalImagem.style.backgroundImage = "url('../images/produtos/creme-acai-real.jpg')";
modalImagem.style.backgroundSize = "cover";
modalImagem.style.backgroundPosition = "center";
```

### 4. Otimização da Imagem
Para melhor performance, otimize a imagem:
- **Resolução**: 400x300 pixels para produtos
- **Formato**: JPG (melhor compressão)
- **Qualidade**: 80-85%
- **Tamanho**: Máximo 150KB

### 5. Exemplo Completo de Implementação

```css
/* No arquivo css/produtos.css */
.produto-item[data-categoria="cosmeticos"]:nth-child(1) .placeholder {
    background-image: url('../images/produtos/creme-acai-real.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-indent: -9999px;
    position: relative;
}

/* Adicionar overlay sutil para melhor legibilidade */
.produto-item[data-categoria="cosmeticos"]:nth-child(1) .placeholder::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(45, 80, 22, 0.1);
}
```

```javascript
// No arquivo js/produtos.js
if (nomeProduto === 'Creme Facial Açaí') {
    modalImagem.style.backgroundImage = "url('../images/produtos/creme-acai-real.jpg')";
    modalImagem.style.backgroundSize = "cover";
    modalImagem.style.backgroundPosition = "center";
    modalImagem.textContent = '';
}
```

### 6. Estrutura de Pastas Recomendada

```
amazonia-criativa/
├── images/
│   ├── produtos/
│   │   ├── creme-acai-real.jpg          ← Sua imagem aqui
│   │   ├── shampoo-andiroba.jpg
│   │   ├── sabonete-buriti.jpg
│   │   └── condicionador-cupuacu.jpg
│   └── hero/
│       └── amazonia-background.jpg
├── css/
├── js/
└── ...
```

## 🎨 Estado Atual

Atualmente implementei:
- **SVG realista** que simula um pote de creme com rótulo
- **Cores temáticas** (verde amazônico, laranja, roxo do açaí)
- **Elementos visuais** como bolinhas de açaí
- **Modal personalizado** com imagem específica

## 🚀 Próximos Passos

1. Salve sua imagem na pasta `images/produtos/`
2. Siga as instruções acima para implementar
3. Teste em diferentes dispositivos
4. Repita o processo para outros produtos

---

**Nota**: O SVG atual já oferece uma boa representação visual. Use imagem real apenas se tiver fotos profissionais dos produtos.