const container = document.querySelector(".container .game")

const selects = document.querySelectorAll(".game select")
const places = document.querySelectorAll(".game .place")
const phrasesList = document.querySelector("ul.phrasesList")

selects.forEach(select => {
    select.addEventListener("change", (e) => {
        changeSelect(select)
    })
})

function changeSelect(select) {

    const place = select.closest(".place")
    const category = select.className
    const value = select.querySelector("option:checked").value

    if (category === "color") {
        place.className = "place"
        if (value === "") {
        } else {
            place.classList.add(`${value}`)
        }
    }

    pickOtherPlaces(place, category, value)
    changeProps(place.id, category, value)
    checkAll(category)
}

function pickOtherPlaces(placeSelected, category, value) {

    places.forEach(place => {
        if (place !== placeSelected) {
            const option = place.querySelector(`select.${category} option:checked`)
            if (option.value === value) {
                data[place.id][category] = null
                option.removeAttribute("checked")
                place.querySelector(`select.${category} option`).setAttribute("checked", "")
                place.querySelector(`select.${category}`).value = ""
                if (category === "color") {
                    if (value === "") {
                    } else {
                        place.classList.remove(`${value}`)
                    }
                }
            }
        }
    })

}

function changeProps(place, category, value) {

    data[place][category] = value

}

const data = {
    "place1": {
        place: "place1",
        color: null,
        nacionality: null,
        salary: null,
        hobby: null,
        car: null,
        film: null
    },
    "place2": {
        place: "place2",
        color: null,
        nacionality: null,
        salary: null,
        hobby: null,
        car: null,
        film: null
    },
    "place3": {
        place: "place3",
        color: null,
        nacionality: null,
        salary: null,
        hobby: null,
        car: null,
        film: null
    },
    "place4": {
        place: "place4",
        color: null,
        nacionality: null,
        salary: null,
        hobby: null,
        car: null,
        film: null
    },
    "place5": {
        place: "place5",
        color: null,
        nacionality: null,
        salary: null,
        hobby: null,
        car: null,
        film: null
    },
    "place6": {
        place: "place6",
        color: null,
        nacionality: null,
        salary: null,
        hobby: null,
        car: null,
        film: null
    }
}

const placesPhrases = [
    {
        id: 0,
        body: "A casa 1 é Azul",
        li: null,
        method: "place",
        answer: ["blue"],
        place: "place1",
        head: ["color"],
        checked: false
    },
    {
        id: 1,
        body: "O morador da Casa 2 tem um carro de origem Italiana",
        li: null,
        method: "place",
        answer: ["ferrari", "lamborguini"],
        place: "place2",
        head: ["car"],
        checked: false
    },
    {
        id: 4,
        body: "O morador da casa 3 é Angolano",
        li: null,
        method: "place",
        answer: ["angola"],
        place: "place3",
        head: ["nacionality"],
        checked: false
    },
    {
        id: 0,
        body: "A casa 5 é Laranja",
        li: null,
        method: "place",
        answer: ["orange"],
        place: "place5",
        head: ["color"],
        checked: false
    },
]

const anyPlaces = [
    {
        id: 2,
        body: "O irlandês tem casa vermelha",
        li: null,
        method: "any",
        answer: {
            nacionality: ["irland"],
            color: ["red"],
        },
        head: ["nacionality", "color"],
        checked: false
    },
    {
        id: 3,
        body: "O cidadão Português tem casa Amarela",
        li: null,
        method: "any",
        answer: {
            nacionality: ["portugal"],
            color: ["yellow"],
        },
        head: ["nacionality", "color"],
        checked: false
    },
    {
        id: 5,
        body: "O Japonês vive em umas das Extremidades",
        li: null,
        method: "any",
        answer: {
            nacionality: ["japon"],
            place: ["place1", "place6"],
        },
        head: ["nacionality", "place"],
        checked: false
    },
    {
        id: 7,
        body: "O Brasileiro ganha um Salario acima de 3000",
        li: null,
        method: "any",
        answer: {
            nacionality: ["brazil"],
            salary: ["3500", "4000", "4500"]
        },
        head: ["nacionality", "salary"],
        checked: false
    },
    {
        id: 3,
        body: "O Irlandês gosta de Tocar Piano",
        li: null,
        method: "any",
        answer: {
            nacionality: ["irland"],
            hobby: ["play_piano"],
        },
        head: ["nacionality", "hobby"],
        checked: false
    },
    {
        id: 3,
        body: "O morador que ganha 2000 tem Ferrari",
        li: null,
        method: "any",
        answer: {
            salary: ["2000"],
            car: ["ferrari"],
        },
        head: ["salary", "car"],
        checked: false
    },
    {
        id: 3,
        body: "O Angolano ganha 4000",
        li: null,
        method: "any",
        answer: {
            nacionality: ["angola"],
            salary: ["4000"],
        },
        head: ["nacionality", "salary"],
        checked: false
    },
    {
        id: 3,
        body: "O morador que gosta de O Senhor dos aneis tem uma Ford",
        li: null,
        method: "any",
        answer: {
            film: ["lordoftherings"],
            car: ["ford"],
        },
        head: ["film", "car"],
        checked: false
    },
    {
        id: 3,
        body: "O que gosta de Jogar Futebol tem uma Lamborguini",
        li: null,
        method: "any",
        answer: {
            hobby: ["play_football"],
            car: ["lamborguini"],
        },
        head: ["hobby", "car"],
        checked: false
    },
    {
        id: 3,
        body: "A pessoa que gosta de Alien não é Europeu",
        li: null,
        method: "any",
        answer: {
            film: ["alien"],
            nacionality: ["angola", "brazil", "japon"],
        },
        head: ["film", "nacionality"],
        checked: false
    },
    {
        id: 3,
        body: "O Português tem Mercedes",
        li: null,
        method: "any",
        answer: {
            nacionality: ["portugal"],
            car: ["mercedes"],
        },
        head: ["nacionality", "car"],
        checked: false
    },
    {
        id: 3,
        body: "O morador que gosta de Titanic tem casa Amarela",
        li: null,
        method: "any",
        answer: {
            film: ["titanic"],
            color: ["yellow"],
        },
        head: ["film", "color"],
        checked: false
    },
    {
        id: 3,
        body: "A pessoa que gosta de Exterminador do futuro ganha mais que 2000",
        li: null,
        method: "any",
        answer: {
            film: ["terminator"],
            salary: ["2500", "3000", "3500", "4000", "4500"],
        },
        head: ["film", "salary"],
        checked: false
    },
]

const asidePlaces = [
    {
        id: 6,
        body: "O Irlandês vive a direita do Brasileiro",
        li: null,
        method: "aside",
        answer: {
            nacionality: ["irland"],
            aside: ["brazil"]
        },
        side: "left",
        head: ["nacionality", "nacionality"],
        checked: false
    },
    {
        id: 3,
        body: "O morador da casa Azul vive ao lado do que gosta de Pintar",
        li: null,
        method: "aside",
        answer: {
            color: ["blue"],
            aside: ["paint"],
        },
        side: null,
        head: ["color", "hobby"],
        checked: false
    },
    {
        id: 3,
        body: "A pessoa que gosta de Alien vive ao lado do morador que gosta de Pescar",
        li: null,
        method: "aside",
        answer: {
            film: ["alien"],
            aside: ["fish"],
        },
        side: null,
        head: ["film", "hobby"],
        checked: false
    },
    {
        id: 3,
        body: "A pessoa que gosta de O cavaleiro das trevas vive a esquerda do que ganha 3500",
        li: null,
        method: "aside",
        left: true,
        answer: {
            film: ["thedarkknight"],
            aside: ["3500"],
        },
        side: "right",
        head: ["film", "salary"],
        checked: false
    },
    {
        id: 3,
        body: "O habitante da casa Verde vive ao lado do que gosta de O Senhor dos Aneis",
        li: null,
        method: "aside",
        answer: {
            color: ["green"],
            aside: ["lordoftherings"],
        },
        side: null,
        head: ["color", "film"],
        checked: false
    },
    {
        id: 3,
        body: "O Francês vive ao lado do Japonês",
        li: null,
        method: "aside",
        answer: {
            nacionality: ["france"],
            aside: ["japon"],
        },
        side: null,
        head: ["nacionality", "nacionality"],
        checked: false
    },
    {
        id: 3,
        body: "A pessoa que tem Volkswagen vive ao lado do que gosta de Futebol",
        li: null,
        method: "aside",
        answer: {
            car: ["volkswagen"],
            aside: ["play_football"],
        },
        side: null,
        head: ["car", "hobby"],
        checked: false
    },
    {
        id: 3,
        body: "O morador que gosta de Caminhar vive ao lado do que ganha 3000",
        li: null,
        method: "aside",
        answer: {
            hobby: ["walk"],
            aside: ["3000"],
        },
        side: null,
        head: ["hobby", "salary"],
        checked: false
    },
]

const phrases = [
    ...placesPhrases,
    ...anyPlaces,
    ...asidePlaces,
]

phrases.map(phrase => {
    const li = document.createElement("li")
    li.innerText = phrase.body
    phrase.li = li
    phrasesList.appendChild(li)
})

function checkAll(category) {

    if (!category) {
        update()
        return
    }

    const filteredLogics = phrases.filter(item => {
        return item.head.includes(category)
    })

    if (filteredLogics.length > 0) {
        validate(filteredLogics, category)
    }

}

checkAll(null, null)

function validate(array, category) {

    array.map(item => {

        if (item.method === "place") {

            functionPlace(item, category)

        } else if (item.method === "any") {

            functionAny(item)

        } else if (item.method === "aside") {

            functionAside(item)

        }

    })

}

function functionPlace(phrase, category) {
    const value = data[phrase.place][category]
    const confirm = phrase.answer.includes(value)
    putTrueOrFalse(phrase, confirm)
    update(phrase)
}

function functionAny(phrase) {

    const head = phrase.head
    const array = []

    for (const index in data) {
        const place = data[index]
        array.push(place)
    }

    const confirm = array.some(item => {
        if (phrase.answer[head[0]].includes(item[head[0]])) {
            return phrase.answer[head[1]].includes(item[head[1]])
        }
    })

    putTrueOrFalse(phrase, confirm)
    update(phrase)

}

function functionAside(phrase) {

    const head = phrase.head
    const array = []

    for (const index in data) {
        const place = data[index]
        array.push(place)
    }

    let confirm = false

    for (let index in array) {
        index = Number(index)
        const center = array[index]
        const left = array[index - 1]
        const right = array[index + 1]

        if (phrase.answer[head[0]].includes(center[head[0]])) {

            if (left && phrase.side !== "right") {
                if (phrase.answer.aside.includes(left[head[1]])) {
                    confirm = true
                }
            }
            if (right && phrase.side !== "left") {
                if (phrase.answer.aside.includes(right[head[1]])) {
                    confirm = true
                }
            }
        }

    }

    putTrueOrFalse(phrase, confirm)
    update(phrase)
}

function putTrueOrFalse(item, confirm) {
    if (confirm) {
        item.checked = true
    } else {
        item.checked = false
    }
}

function update(item) {
    if (!item) {
        phrases.map(phrase => {
            phrase.li.className = "false"
        })
    } else {
        if (item.checked) {
            item.li.className = "true"
        } else {
            item.li.className = "false"
        }
    }

}