document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

function showInfo(imageSrc, text) {
    document.getElementById('infoImage').src = imageSrc;
    document.getElementById('infoText').textContent = text;
    document.getElementById('infoBox').classList.remove('hidden');
}
