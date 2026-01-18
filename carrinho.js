// Sistema de Carrinho de Compras
class CarrinhoCompras {
    constructor() {
        this.itens = this.carregarCarrinho();
        this.inicializar();
    }

    inicializar() {
        this.atualizarContador();
        this.criarIconeCarrinho();
        this.configurarEventos();
    }

    criarIconeCarrinho() {
        const nav = document.querySelector('.nav-menu');
        if (nav && !document.querySelector('.carrinho-icon')) {
            const carrinhoLi = document.createElement('li');
            carrinhoLi.innerHTML = `
                <a href="#" class="carrinho-icon">
                    🛒 Carrinho <span class="carrinho-contador">0</span>
                </a>
            `;
            nav.appendChild(carrinhoLi);
        }
    }

    configurarEventos() {
        // Botões de compra
        document.querySelectorAll('.comprar-btn, .comprar-btn-modal').forEach(button => {
            button.addEventListener('click', (e) => {
                // Se for um link externo, não adicionar ao carrinho
                if (button.hasAttribute('data-produto-externo') || button.hasAttribute('href')) {
                    return; // Deixa o link funcionar normalmente
                }
                
                e.preventDefault();
                this.adicionarAoCarrinho(button);
            });
        });

        // Ícone do carrinho
        const carrinhoIcon = document.querySelector('.carrinho-icon');
        if (carrinhoIcon) {
            carrinhoIcon.addEventListener('click', (e) => {
                e.preventDefault();
                this.mostrarCarrinho();
            });
        }
    }

    adicionarAoCarrinho(button) {
        const produtoCard = button.closest('.produto-item, .modal-content');
        let nomeProduto, preco;

        if (produtoCard.classList.contains('modal-content')) {
            nomeProduto = document.getElementById('modal-titulo').textContent;
            preco = document.getElementById('modal-preco').textContent;
        } else {
            nomeProduto = produtoCard.querySelector('h3').textContent;
            preco = produtoCard.querySelector('.preco').textContent;
        }

        const item = {
            nome: nomeProduto,
            preco: preco,
            quantidade: 1
        };

        // Verificar se já existe
        const itemExistente = this.itens.find(i => i.nome === nomeProduto);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            this.itens.push(item);
        }

        this.salvarCarrinho();
        this.atualizarContador();
        this.mostrarFeedback(button);
    }

    mostrarFeedback(button) {
        const originalText = button.textContent;
        button.textContent = '✓ Adicionado!';
        button.style.background = '#28a745';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#ff6b35';
            button.disabled = false;
        }, 2000);
    }

    removerDoCarrinho(index) {
        this.itens.splice(index, 1);
        this.salvarCarrinho();
        this.atualizarContador();
        this.mostrarCarrinho();
    }

    atualizarQuantidade(index, novaQuantidade) {
        if (novaQuantidade <= 0) {
            this.removerDoCarrinho(index);
        } else {
            this.itens[index].quantidade = novaQuantidade;
            this.salvarCarrinho();
            this.mostrarCarrinho();
        }
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => {
            const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.').trim());
            return total + (preco * item.quantidade);
        }, 0);
    }

    mostrarCarrinho() {
        const modalHTML = `
            <div id="carrinho-modal" class="modal" style="display: block;">
                <div class="modal-content carrinho-modal-content">
                    <span class="close" onclick="carrinho.fecharCarrinho()">&times;</span>
                    <h2>🛒 Seu Carrinho</h2>
                    <div class="carrinho-itens">
                        ${this.itens.length === 0 ? 
                            '<p class="carrinho-vazio">Seu carrinho está vazio</p>' :
                            this.itens.map((item, index) => `
                                <div class="carrinho-item">
                                    <div class="item-info">
                                        <h4>${item.nome}</h4>
                                        <p class="item-preco">${item.preco}</p>
                                    </div>
                                    <div class="item-controles">
                                        <button onclick="carrinho.atualizarQuantidade(${index}, ${item.quantidade - 1})">-</button>
                                        <span>${item.quantidade}</span>
                                        <button onclick="carrinho.atualizarQuantidade(${index}, ${item.quantidade + 1})">+</button>
                                        <button class="remover" onclick="carrinho.removerDoCarrinho(${index})">🗑️</button>
                                    </div>
                                </div>
                            `).join('')
                        }
                    </div>
                    ${this.itens.length > 0 ? `
                        <div class="carrinho-total">
                            <h3>Total: R$ ${this.calcularTotal().toFixed(2).replace('.', ',')}</h3>
                            <button class="finalizar-btn" onclick="carrinho.finalizarCompra()">Finalizar Compra</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        // Remover modal existente
        const modalExistente = document.getElementById('carrinho-modal');
        if (modalExistente) {
            modalExistente.remove();
        }

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    fecharCarrinho() {
        const modal = document.getElementById('carrinho-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }

    finalizarCompra() {
        alert(`Compra finalizada!\n\nTotal: R$ ${this.calcularTotal().toFixed(2).replace('.', ',')}\n\nObrigado por comprar na Amazônia Criativa! 🌿`);
        this.itens = [];
        this.salvarCarrinho();
        this.atualizarContador();
        this.fecharCarrinho();
    }

    atualizarContador() {
        const contador = document.querySelector('.carrinho-contador');
        if (contador) {
            const total = this.itens.reduce((sum, item) => sum + item.quantidade, 0);
            contador.textContent = total;
            contador.style.display = total > 0 ? 'inline-block' : 'none';
        }
    }

    salvarCarrinho() {
        localStorage.setItem('carrinho-amazonia', JSON.stringify(this.itens));
    }

    carregarCarrinho() {
        const dados = localStorage.getItem('carrinho-amazonia');
        return dados ? JSON.parse(dados) : [];
    }
}

// Inicializar carrinho quando a página carregar
let carrinho;
document.addEventListener('DOMContentLoaded', () => {
    carrinho = new CarrinhoCompras();
});
