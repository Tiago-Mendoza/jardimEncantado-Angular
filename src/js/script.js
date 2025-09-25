const hamburger = document.querySelector(".hamburger-elegant"); // Seleciona o hamburger com a nova classe
const navMenu = document.querySelector(".nav-menu-elegant");     // Seleciona o menu com a nova classe

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link-elegant").forEach(n => n.addEventListener("click", () => { // Seleciona os links com a nova classe
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

// Cria um conjunto de 20 itens de placeholder para cada categoria
function buildCatalog(baseName, folderName, filePrefix, total = 20) {
    const items = [];
    for (let i = 1; i <= total; i++) {
        const oldPrice = 50 + i * 3;
        // aplica desconto em alguns itens alternados
        const discounted = i % 3 !== 0; // 2 de cada 3 com desconto
        const price = discounted ? +(oldPrice * (0.6 + (i % 5) * 0.05)).toFixed(2) : oldPrice;
        const padded = i.toString().padStart(2, '0');
        items.push({
            title: `${baseName} ${i.toString().padStart(2, '0')}`,
            image: `img/${folderName}/${filePrefix}-${padded}.jpg`,
            oldPrice: oldPrice,
            price: discounted ? price : oldPrice,
            bestSeller: i <= 6 && i % 2 === 1 // 3 best sellers
        });
    }
    return items;
}

function initCatalogs() {
    // Buquês 
    const buques = buildCatalog('Buquê', 'buques', 'buque');
    const maisVendidosBuques = buques.filter(p => p.bestSeller).slice(0, 6);
    mountGrid('grid-mais-vendidos-buques', maisVendidosBuques);
    mountGrid('grid-buques', buques);

    // Arranjos 
    const arranjos = buildCatalog('Arranjo', 'arranjos', 'arranjo');
    const maisVendidosArranjos = arranjos.filter(p => p.bestSeller).slice(0, 6);
    mountGrid('grid-mais-vendidos-arranjos', maisVendidosArranjos);
    mountGrid('grid-arranjos', arranjos);

    // Presentes 
    const presentes = buildCatalog('Presente', 'presentes', 'presente');
    const maisVendidosPresentes = presentes.filter(p => p.bestSeller).slice(0, 6);
    mountGrid('grid-mais-vendidos-presentes', maisVendidosPresentes);
    mountGrid('grid-presentes', presentes);
}

document.addEventListener('DOMContentLoaded', initCatalogs);