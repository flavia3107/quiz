console.log('config', categories);

const categoryList = document.getElementById('category');


function appendCategories() {
    categories.forEach(category => {
        const optionElement = document.createElement("li");
        // optionElement.text = `${category.name}`;
        optionElement.value = `${category.id}`;
        optionElement.classList = 'category-item grid-item';
        optionElement.innerHTML = `
        <i class="fa-solid fa-heart"></i>
            <span class="category-name">${category.name}</span>
        `
        categoryList.appendChild(optionElement);
    });
}



appendCategories();