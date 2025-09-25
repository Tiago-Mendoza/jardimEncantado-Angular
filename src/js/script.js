const hamburger = document.querySelector(".hamburger-elegant"); 
const navMenu = document.querySelector(".nav-menu-elegant");     

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link-elegant").forEach(n => n.addEventListener("click", () => { 
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- Catálogos dinâmicos (20 produtos por categoria) ---

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function createProductCard(product) {
    const hasDiscount = product.oldPrice && product.price && product.oldPrice > product.price;
    const discountPercent = hasDiscount ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    return `
        <div class="product-card">
            ${product.bestSeller ? '<span class="badge-bestseller">Mais vendidos</span>' : ''}
            <img src="${product.image}" alt="${product.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/600x400?text=Imagem+indispon%C3%ADvel'">
            <div class="product-info">
                <h3>${product.title}</h3>
                <div class="pricing">
                    ${hasDiscount ? `<span class="old-price">de ${formatCurrency(product.oldPrice)}</span>` : ''}
                    <span class="new-price">${product.price ? `por ${formatCurrency(product.price)}` : formatCurrency(product.oldPrice || 0)}</span>
                </div>
                <a href="#" class="buy-button">Comprar <i class="fa-solid fa-chevron-right"></i></a>
                ${hasDiscount ? `<div class="discount-tag">${discountPercent}% DE DESCONTO</div>` : ''}
            </div>
        </div>
    `;
}

function mountGrid(gridId, products) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = products.map(createProductCard).join('');
}

// Cria um conjunto de 20 itens de placeholder para cada categoria (suporta nomes personalizados)
function buildCatalog(baseName, folderName, filePrefix, total = 20, customTitles = []) {
    const items = [];
    for (let i = 1; i <= total; i++) {
        const oldPrice = 50 + i * 3;
        // aplica desconto em alguns itens alternados
        const discounted = i % 3 !== 0; // 2 de cada 3 com desconto
        const price = discounted ? +(oldPrice * (0.6 + (i % 5) * 0.05)).toFixed(2) : oldPrice;
        const padded = i.toString().padStart(2, '0');
		const title = customTitles[i - 1] && customTitles[i - 1].trim() ? customTitles[i - 1].trim() : `${baseName} ${padded}`;
		items.push({
			title: title,
            image: `img/${folderName}/${filePrefix}-${padded}.jpg`,
            oldPrice: oldPrice,
            price: discounted ? price : oldPrice,
            bestSeller: i <= 6 && i % 2 === 1 
        });
    }
    return items;
}

function initCatalogs() {
    // Buquês 
	const buqueTitles = [
		'Aurora Rosé',
		'Jardim da Manhã',
		'Encanto do Campo',
		'Doce Primavera',
		'Brisa de Lavanda',
		'Amor Perene',
		'Luar de Jasmim',
		'Sol de Outono',
		'Céu de Hortênsias',
		'Rubor de Peônia',
		'Alvorada Tropical',
		'Romance Provençal',
		'Citrus & Mel',
		'Serenata Vermelha',
		'Névoa de Eucalipto',
		'Orquídea Real',
		'Tons da Terra',
		'Caramelo & Creme',
		'Noite Estrelada',
		'Clássico Elegante'
	];
	const buques = buildCatalog('Buquê', 'buques', 'buque', 20, buqueTitles);
    const maisVendidosBuques = buques.filter(p => p.bestSeller).slice(0, 6);
    mountGrid('grid-mais-vendidos-buques', maisVendidosBuques);
    mountGrid('grid-buques', buques);

    // Arranjos 
	const arranjoTitles = [
		'Centro de Mesa Botânico',
		'Elegância de Sala',
		'Verde & Dourado',
		'Clássico de Vidro',
		'Minimalista Nórdico',
		'Campo em Casa',
		'Primavera na Mesa',
		'Luxo Tropical',
		'Paz & Neve',
		'Romance na Varanda',
		'Brilho de Suculentas',
		'Doce Provença',
		'Outono Sofisticado',
		'Brisa Marinha',
		'Urban Jungle',
		'Lavanda & Linho',
		'Raízes da Serra',
		'Pôr do Sol',
		'Jardim Suspenso',
		'Natal Atemporal',
          
	];
	const arranjos = buildCatalog('Arranjo', 'arranjos', 'arranjo', 20, arranjoTitles);
    const maisVendidosArranjos = arranjos.filter(p => p.bestSeller).slice(0, 6);
    mountGrid('grid-mais-vendidos-arranjos', maisVendidosArranjos);
    mountGrid('grid-arranjos', arranjos);

    // Presentes 
	const presenteTitles = [
		'Kit Bem-Estar',
		'Delícias de Chocolate',
		'Café da Manhã Feliz',
		'Combo Spa em Casa',
		'Vela Aromática Premium',
		'Cesta Doçura',
		'Chá & Carinho',
		'Vinho & Flores',
		'Mimo Romântico',
		'Box Surpresa',
		'Doces Artesanais',
		'Aromas da Serra',
		'Bem-vinda, Bebê',
		'Parabéns Gourmet',
		'Self-care Deluxe',
		'Carinho em Caixa',
		'Afeto de Domingo',
		'Sabor & Afeto',
		'Kit Relax',
		'Tudo de Bom'
	];
	const presentes = buildCatalog('Presente', 'presentes', 'presente', 20, presenteTitles);
    const maisVendidosPresentes = presentes.filter(p => p.bestSeller).slice(0, 6);
    mountGrid('grid-mais-vendidos-presentes', maisVendidosPresentes);
    mountGrid('grid-presentes', presentes);
}

document.addEventListener('DOMContentLoaded', initCatalogs);