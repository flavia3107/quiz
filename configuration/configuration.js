let selectedCategory = null;

const categoryList = document.getElementById('category');


function appendCategories() {
    categories.forEach(category => {
        const optionElement = document.createElement("li");
        optionElement.addEventListener('click', clickHandler);
        // optionElement.text = `${category.name}`;
        optionElement.value = `${category.id}`;
        optionElement.classList = 'category-item grid-item';
        optionElement.innerHTML = `
        <i class="${category.icon}"></i>
            <span class="category-name">${category.name}</span>
        `
        categoryList.appendChild(optionElement);
    });
}

function clickHandler() {
    document.querySelectorAll('.category-item')
        .forEach(option => option.classList.remove('selected'));
    selectedCategory = this.value === 0 ? null : this.value;
    params.category = this.value ? `category=${this.value}&` : '';
    this.classList.add('selected');
    url = `https://opentdb.com/api.php?${params.amount}&${params.category}${params.difficulty}&${params.type}`;
    console.log('url', url)
}

appendCategories();