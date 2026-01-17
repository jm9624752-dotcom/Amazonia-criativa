// Filtros de produtos
const filtros = document.querySelectorAll('.filtro-btn');
const produtos = document.querySelectorAll('.produto-item');

filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        // Remove active de todos os filtros
        filtros.forEach(f => f.classList.remove('active'));
        // Adiciona active ao filtro clicado
        filtro.classList.add('active');
        
        const categoria = filtro.getAttribute('data-categoria');
        
        produtos.forEach(produto => {
            produto.classList.remove('show', 'hidden');
            
            if (categoria === 'todos' || produto.getAttribute('data-categoria') === categoria) {
                produto.classList.add('show');
            } else {
                produto.classList.add('hidden');
            }
        });
    });
});

// Modal de produtos
const modal = document.getElementById('produto-modal');
const closeModal = document.querySelector('.close');
const verDetalhesButtons = document.querySelectorAll('.ver-detalhes');

// Dados dos produtos para o modal
const produtosData = {
    'Dieta Low Carb': {
        categoria: 'Guia Nutricional',
        preco: 'R$ 19,99',
        descricao: 'Guia completo e prático para uma alimentação saudável com baixo carboidrato. Aprenda a emagrecer de forma saudável e sustentável com receitas deliciosas e dicas nutricionais.',
        beneficios: [
            'Emagrecimento saudável e sustentável',
            'Mais de 100 receitas low carb',
            'Plano alimentar personalizado',
            'Acompanhamento nutricional online'
        ]
    },
    'A Psicologia da Riqueza Invisível': {
        categoria: 'Livro Digital',
        preco: 'R$ 20,99',
        descricao: 'Descubra como a humildade financeira pode transformar sua relação com o dinheiro e gerar verdadeira liberdade. Um guia prático sobre mentalidade financeira, investimentos conscientes e construção de riqueza sustentável.',
        beneficios: [
            'Transforme sua mentalidade financeira',
            'Aprenda a investir com consciência',
            'Construa riqueza de forma sustentável',
            'Alcance liberdade financeira verdadeira'
        ]
    }
};

// Abrir modal
verDetalhesButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const produtoCard = button.closest('.produto-item');
        const nomeProduto = produtoCard.querySelector('h3').textContent;
        const dadosProduto = produtosData[nomeProduto];
        
        if (dadosProduto) {
            document.getElementById('modal-titulo').textContent = nomeProduto;
            document.getElementById('modal-categoria').textContent = dadosProduto.categoria;
            document.getElementById('modal-preco').textContent = dadosProduto.preco;
            document.getElementById('modal-descricao').textContent = dadosProduto.descricao;
            
            // Atualizar imagem do modal baseada no produto
            const modalImagem = document.querySelector('.modal-imagem .placeholder');
            if (nomeProduto === 'A Psicologia da Riqueza Invisível') {
                modalImagem.outerHTML = '<img src="images/produtos/psicologia-riqueza-invisivel.jpg" alt="A Psicologia da Riqueza Invisível" class="modal-img-real">';
            } else if (nomeProduto === 'Dieta Low Carb') {
                modalImagem.outerHTML = '<img src="images/produtos/dieta-low-carb.jpg" alt="Dieta Low Carb" class="modal-img-real">';
            } else {
                if (modalImagem.tagName === 'IMG') {
                    modalImagem.outerHTML = '<div class="placeholder">Imagem do Produto</div>';
                } else {
                    modalImagem.style.backgroundImage = '';
                    modalImagem.textContent = 'Imagem do Produto';
                }
            }
            
            const beneficiosList = document.getElementById('modal-beneficios-lista');
            beneficiosList.innerHTML = '';
            dadosProduto.beneficios.forEach(beneficio => {
                const li = document.createElement('li');
                li.textContent = beneficio;
                beneficiosList.appendChild(li);
            });
            
            // Atualizar botão de compra no modal
            const btnComprarModal = document.querySelector('.comprar-btn-modal');
            if (nomeProduto === 'A Psicologia da Riqueza Invisível') {
                btnComprarModal.outerHTML = '<a href="https://pay.herospark.com/a-psicologia-da-riqueza-invisivel-495714" target="_blank" class="comprar-btn-modal" data-produto-externo="true">Comprar Agora</a>';
            } else if (nomeProduto === 'Dieta Low Carb') {
                btnComprarModal.outerHTML = '<a href="https://pay.herospark.com/segredos-dieta-lowcarb-495615" target="_blank" class="comprar-btn-modal" data-produto-externo="true">Comprar Agora</a>';
            } else {
                if (btnComprarModal.tagName === 'A') {
                    btnComprarModal.outerHTML = '<button class="comprar-btn-modal">Comprar Agora</button>';
                }
            }
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animação inicial dos produtos
document.addEventListener('DOMContentLoaded', () => {
    produtos.forEach((produto, index) => {
        produto.style.opacity = '0';
        produto.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            produto.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            produto.style.opacity = '1';
            produto.style.transform = 'translateY(0)';
        }, index * 100);
    });
});