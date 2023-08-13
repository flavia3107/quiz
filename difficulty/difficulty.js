const difficultyList = document.getElementById('difficulty-container');
const navigateNext = document.getElementById('navigate-next-play');
const navigatePrevious = document.getElementById('navigate-previous');

navigateNext.addEventListener('click', () => {
    return window.location.assign('../game/game.html');
});
navigatePrevious.addEventListener('click', () => {
    return window.location.assign('../configuration/configuration.html');
});

navigateNext.disabled = true;

function appendDifficultyLevels() {
    params = JSON.parse(localStorage.getItem('config'));
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
    params.difficulty = !!this['data-value'] ? `&difficulty=${this['data-value']}` : '';
    document.querySelectorAll('.difficulty-item')
        .forEach(option => option.classList.remove('selected'));
    this.classList.add('selected');
    navigateNext.disabled = false;
    localStorage.setItem('config', JSON.stringify(params));
}

appendDifficultyLevels();