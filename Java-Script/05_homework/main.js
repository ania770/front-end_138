
let out = document.querySelector('.out')
let select = document.querySelector('.select')
let btnSearch = document.querySelector('.btn_search')
let input = document.querySelector('.input')
let btnSearchName = document.querySelector('.btn_search--name')
let btnReset = document.querySelector('.btn_reset')

let array = [
    {
        img: "./img/bella.jpg",
        name: 'Bella',
        age: 1
    },
    {
        img: "./img/ivan.jpg",
        name: 'Ivan',
        age: 3
    },
    {
        img: "./img/nazar.jpg",
        name: 'Nazar',
        age: 1
    },
    {
        img: "./img/sasha.jpg",
        name: 'Sasha',
        age: 5
    },
    {
        img: "./img/ola.jpg",
        name: 'Ola',
        age: 4
    },
    {
        img: "./img/nastya.jpg",
        name: 'Nastya',
        age: 7
    },
    {
        img: "./img/anya.jpg",
        name: 'Anya',
        age: 2
    },
    {
        img: "./img/sveta.jpg",
        name: 'Sveta',
        age: 1
    },
    {
        img: "./img/katia.jpg",
        name: 'Katia',
        age: 6
    },
    {
        img: "./img/roma.jpg",
        name: 'Roma',
        age: 2
    },
    {
        img: "./img/oleg.jpg",
        name: 'Oleg',
        age: 1
    },
    {
        img: "./img/dasha.jpg",
        name: 'Dasha',
        age: 6
    },
    {
        img: "./img/masha.jpg",
        name: 'Masha',
        age: 9
    },
    {
        img: "./img/karina.jpg",
        name: 'Karina',
        age: 2
    },
    {
        img: "./img/bogdan.jpg",
        name: 'Bogdan',
        age: 3
    },
]
array.map(item => {
    out.innerHTML += `  <div class="item">
<img src="${item.img}" alt="">
<h3 class="item_name">${item.name}</h3>
<p class="item_age">age: ${item.age}</p>
<div class="btn_content">
<button class="btn item_btn">Take to home</button>
</div>

</div>`
})

function test(item) {
    return ` <div class="item">
<img src="${item.img}" alt="">
<h3 class="item_name">${item.name}</h3>
<p class="item_age">age: ${item.age}</p>
<div class="btn_content">
<button class="btn item_btn">Take to home</button>
</div>

</div>`
}


btnSearch.onclick = () => {
    out.innerHTML = ''
    for (let i = 0; i < +select.value; i++) {
        out.innerHTML += test(array[i]);
    }
}

btnReset.onclick = () => {
    input.value = '';
    out.innerHTML = ''
}
btnSearchName.onclick = () => {
    let searchValue = input.value.trim().toLowerCase();
    let filteredArray = array.filter(item =>
        item.name.toLowerCase().includes(searchValue)
    )
    out.innerHTML = ''
    if (filteredArray.length > 0) {
        filteredArray.forEach(item => out.innerHTML += test(item));
    } else {
        out.innerHTML = `<p>Error</p>`;
    }
}