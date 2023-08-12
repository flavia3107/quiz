const categoryList = document.getElementById('category');
const navigateNext = document.getElementById('navigate-next');
navigateNext.addEventListener('click', () => {
    return window.location.assign('../difficulty/difficulty.html');
});
navigateNext.disabled = true;

function appendCategories() {
    categories.forEach(category => {
        const optionElement = document.createElement("li");
        optionElement.addEventListener('click', clickHandler);
        optionElement['data-value'] = `${category.id}`;
        optionElement.classList = 'category-item grid-item';
        optionElement.innerHTML = `
        <i class="${category.icon}"></i>
            <span class="category-name">${category.name}</span>
        `
        categoryList.appendChild(optionElement);
    });
}

function clickHandler() {
    const selectedCategory = this['data-value'] === 0 ? null : this['data-value'];
    params.category = selectedCategory ? `category=${selectedCategory}&` : '';
    document.querySelectorAll('.category-item')
        .forEach(option => option.classList.remove('selected'));
    this.classList.add('selected');
    navigateNext.disabled = false;
    url = `https://opentdb.com/api.php?${params.amount}&${params.category}${params.difficulty}&${params.type}`;
}

appendCategories();