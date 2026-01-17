# Como Adicionar a Imagem da Capa do Livro

## Opção 1: Salvar a Imagem Localmente (Recomendado)

1. **Salve a imagem** que você enviou com o nome: `psicologia-riqueza-invisivel.jpg`

2. **Crie a pasta images** (se não existir):
   ```
   amazonia-criativa/images/produtos/
   ```

3. **Coloque a imagem** na pasta:
   ```
   amazonia-criativa/images/produtos/psicologia-riqueza-invisivel.jpg
   ```

4. **Atualize o HTML** no arquivo `produtos.html`, linha 78:
   
   **Trocar:**
   ```html
   <img src="https://i.imgur.com/placeholder.jpg" alt="A Psicologia da Riqueza Invisível" class="produto-img-real">
   ```
   
   **Por:**
   ```html
   <img src="images/produtos/psicologia-riqueza-invisivel.jpg" alt="A Psicologia da Riqueza Invisível" class="produto-img-real">
   ```

## Opção 2: Usar Link Externo (Imgur, Dropbox, etc.)

1. **Faça upload** da imagem para um serviço como:
   - Imgur: https://imgur.com/upload
   - ImgBB: https://imgbb.com/
   - Dropbox: Compartilhe o link público

2. **Copie o link direto** da imagem (deve terminar em .jpg ou .png)

3. **Atualize o HTML** no arquivo `produtos.html`, linha 78:
   
   **Trocar:**
   ```html
   <img src="https://i.imgur.com/placeholder.jpg" alt="A Psicologia da Riqueza Invisível" class="produto-img-real">
   ```
   
   **Por:**
   ```html
   <img src="SEU_LINK_AQUI.jpg" alt="A Psicologia da Riqueza Invisível" class="produto-img-real">
   ```

## Opção 3: Usar Base64 (Para Teste Rápido)

Se quiser testar rapidamente, posso converter a imagem para Base64 e incorporar diretamente no HTML.

---

## Resultado Esperado

A capa do livro "A Psicologia da Riqueza Invisível" aparecerá:
- ✅ No card do produto na página de produtos
- ✅ Com efeito hover (overlay escuro com botão "Ver Detalhes")
- ✅ Responsiva em todos os dispositivos
- ✅ Com boa qualidade e carregamento rápido

## Dica

Para melhor performance, otimize a imagem antes:
- Tamanho recomendado: 600x600 pixels
- Formato: JPG (menor tamanho) ou PNG (se precisar transparência)
- Qualidade: 80-90%
- Tamanho do arquivo: Máximo 200KB
