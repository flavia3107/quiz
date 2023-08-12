const difficultyList = document.getElementById('difficulty-container');
const navigateNext = document.getElementById('navigate-next-play');
navigateNext.addEventListener('click', () => {
    return window.location.assign('../game/game.html');
});
navigateNext.disabled = true;

function appendDifficultyLevels() {
    levels.forEach(level => {
        const optionElement = document.createElement("li");
        optionElement.addEventListener('click', clickHandler);
        optionElement['data-value'] = level;
        optionElement.textContent = `${level ? level : 'All'}`;
        optionElement.classList = 'difficulty-item';
        difficultyList.appendChild(optionElement);
    });
}

function clickHandler() {
    const selectedCategory = this['data-value'];
    params.difficulty = selectedCategory ? `&difficulty=${selectedCategory}` : '';
    console.log(params)

    document.querySelectorAll('.difficulty-item')
        .forEach(option => option.classList.remove('selected'));
    this.classList.add('selected');
    navigateNext.disabled = false;
}


appendDifficultyLevels();