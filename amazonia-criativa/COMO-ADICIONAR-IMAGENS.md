# Como Adicionar Imagens Reais aos Produtos

## 📸 Estrutura de Imagens

Para substituir os placeholders por imagens reais dos seus produtos, siga estas instruções:

### 1. Organize suas imagens na pasta `images/`

```
amazonia-criativa/
├── images/
│   ├── produtos/
│   │   ├── creme-acai.jpg
│   │   ├── shampoo-andiroba.jpg
│   │   ├── sabonete-buriti.jpg
│   │   ├── acai-po.jpg
│   │   ├── guarana-natural.jpg
│   │   ├── cesta-fibra.jpg
│   │   ├── bolsa-juta.jpg
│   │   ├── oleo-copaiba.jpg
│   │   └── oleo-priprioca.jpg
│   └── hero/
│       └── amazonia-hero.jpg
```

### 2. Atualize o CSS para usar imagens reais

No arquivo `css/produtos.css`, substitua as imagens SVG por suas fotos:

```css
/* Exemplo para o Creme Facial Açaí */
.produto-item[data-categoria="cosmeticos"]:nth-child(1) .placeholder {
    background-image: url('../images/produtos/creme-acai.jpg');
    background-size: cover;
    background-position: center;
}

/* Exemplo para o Shampoo Andiroba */
.produto-item[data-categoria="cosmeticos"]:nth-child(2) .placeholder {
    background-image: url('../images/produtos/shampoo-andiroba.jpg');
    background-size: cover;
    background-position: center;
}
```

### 3. Especificações das Imagens

**Tamanho recomendado para produtos:**
- **Resolução**: 400x300 pixels (proporção 4:3)
- **Formato**: JPG ou PNG
- **Qualidade**: Alta resolução para web (72-150 DPI)
- **Tamanho do arquivo**: Máximo 200KB por imagem

**Tamanho para imagem hero:**
- **Resolução**: 1200x800 pixels
- **Formato**: JPG
- **Qualidade**: Alta resolução
- **Tamanho do arquivo**: Máximo 500KB

### 4. Dicas de Fotografia

**Para produtos cosméticos:**
- Fundo neutro (branco ou madeira clara)
- Iluminação suave e uniforme
- Mostrar o produto em ângulo de 45°
- Incluir elementos naturais (folhas, sementes)

**Para alimentos:**
- Mostrar o produto em recipiente transparente
- Usar elementos que remetam à Amazônia
- Cores vibrantes e naturais

**Para artesanato:**
- Mostrar textura e detalhes
- Ambiente natural ou rústico
- Boa iluminação para destacar fibras

**Para óleos:**
- Frascos elegantes
- Gotas ou aplicação do produto
- Elementos da planta de origem

### 5. Exemplo de Implementação Completa

```css
/* Substitua no arquivo css/produtos.css */

/* Cosméticos */
.produto-item[data-categoria="cosmeticos"]:nth-child(1) .placeholder {
    background-image: url('../images/produtos/creme-acai.jpg');
    background-size: cover;
    background-position: center;
    text-indent: -9999px; /* Esconde o texto */
}

.produto-item[data-categoria="cosmeticos"]:nth-child(2) .placeholder {
    background-image: url('../images/produtos/shampoo-andiroba.jpg');
    background-size: cover;
    background-position: center;
    text-indent: -9999px;
}

/* Continue para todos os produtos... */
```

### 6. Otimização de Imagens

**Ferramentas recomendadas:**
- **TinyPNG** - Compressão online
- **Photoshop** - "Save for Web"
- **GIMP** - Alternativa gratuita
- **Squoosh** - Ferramenta do Google

**Configurações de exportação:**
- Qualidade JPEG: 80-90%
- Formato PNG apenas se precisar de transparência
- Sempre otimizar para web

### 7. Imagem Hero da Página Principal

Para substituir o placeholder da seção hero, edite o arquivo `css/style.css`:

```css
.hero {
    background: linear-gradient(rgba(45, 80, 22, 0.7), rgba(74, 124, 89, 0.7)), 
                url('../images/hero/amazonia-hero.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```

### 8. Responsividade das Imagens

As imagens se adaptarão automaticamente aos diferentes tamanhos de tela graças ao CSS responsivo já implementado.

### 9. Checklist Final

- [ ] Todas as imagens estão na pasta correta
- [ ] Nomes dos arquivos correspondem ao CSS
- [ ] Imagens otimizadas para web
- [ ] Testado em diferentes dispositivos
- [ ] Carregamento rápido verificado

---

**Nota**: O sistema atual usa imagens SVG geradas automaticamente que funcionam perfeitamente. Substitua apenas quando tiver fotos reais dos produtos para melhorar ainda mais a apresentação visual.