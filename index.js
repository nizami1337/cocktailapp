function show(res) {
    document.getElementById('title').innerHTML = res['strDrink']
    document.getElementById('image').src = res['strDrinkThumb']
    document.getElementById('instructions').innerHTML = res['strInstructions']
    document.getElementById('ingredients').innerHTML = ''
    for (let i=1;i<=15;i++) {
        if (!res[`strIngredient${i}`]) {
            break
        }
        let el = document.createElement('li')
        el.className = 'ingredient'
        el.innerHTML = `${res[`strIngredient${i}`]} (${res[`strMeasure${i}`].trim()})`
        document.getElementById('ingredients').appendChild(el)
    }
}

async function random() {
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(x => x.json()).then(x => show(x['drinks'][0]));
}

document.getElementById('searchBtn').addEventListener('click', async () => {
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+document.getElementById('input').value).then(x => x.json()).then(x => show(x['drinks'][0]))
})

random()