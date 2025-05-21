const select = document.getElementById('sel');
const out = document.querySelector('.out');
const selContent = document.querySelector('.main__select_content')
const searchInput = document.getElementById('inp_search');
let allEpisodes = [];

async function loadGoTEpisodes() {
    try {
        const response = await fetch('https://api.tvmaze.com/shows/82?embed=episodes');
        const data = await response.json();
        allEpisodes = data._embedded.episodes;

        const seasonNumbers = [...new Set(allEpisodes.map(ep => ep.season))].sort((a, b) => a - b);

        // Заполняем select с сезонами
        select.innerHTML = seasonNumbers.map(num =>
            `<option value="${num}">Season ${num}</option>`
        ).join('');

        // Загружаем эпизоды для первого сезона по умолчанию
        loadEpisodesForSeason(seasonNumbers[0]);

        initHeroSwiper()

        // Обработчик изменения селекта
        select.addEventListener('change', (e) => {
            loadEpisodesForSeason(e.target.value);
        });

        // Обработчик для поиска
        searchInput.addEventListener('input', (e) => {
            filterAndRenderEpisodes(e.target.value); // Поиск по всему массиву эпизодов
        });



    } catch (error) {
        out.innerHTML = `<p>Ошибка загрузки данных 😢</p>`;
    }
}


function filterAndRenderEpisodes(searchQuery) {
    const filteredEpisodes = allEpisodes.filter(ep => {
        const searchLower = searchQuery.toLowerCase();

        return (
            ep.name.toLowerCase().includes(searchLower) ||
            `s${ep.season}e${ep.number}`.toLowerCase().includes(searchLower) ||
            `season ${ep.season} episode ${ep.number}`.toLowerCase().includes(searchLower) ||
            String(ep.number).includes(searchQuery)
        );
    });

    // Сортировка по номеру сезона и эпизода
    filteredEpisodes.sort((a, b) => a.season - b.season || a.number - b.number);

    renderEpisodes(filteredEpisodes);
    addFavListeners();
}
//episodes
function renderEpisodes(episodes) {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    // if (favoritesBtn) {
    //     selContent.classList.add('hidden');
    // } else {
    //     selContent.classList.remove('hidden');
    // }

    if (episodes.length === 0) {
        out.innerHTML = `<p>No episodes found</p>`;
        return;
    }

    out.innerHTML = episodes.map(ep => {
        const isFavorited = favs.includes(String(ep.id));
        return `
        <div class="episode" data-id="${ep.id}">
            <h3>Season ${ep.season} Episode ${ep.number}: ${ep.name}</h3>
            ${ep.image ? `<img class="img_episode" src="${ep.image.medium}" alt="${ep.name}">` : ''}
            <p class="text text_episode">${ep.summary ? ep.summary.replace(/<[^>]*>/g, '') : 'No description'}</p>
            <small>Aired: ${ep.airdate}</small>
            <svg class="fav-btn heart-icon ${isFavorited ? 'favorited' : ''}" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
  <path d="M12 21s-6.5-4.75-9.1-8.5C1.1 9.75 2 6.5 5 5.1C7.25 4 9.5 5 12 7.5C14.5 5 16.75 4 19 5.1C22 6.5 22.9 9.75 21.1 12.5C18.5 16.25 12 21 12 21Z"/>
</svg>

        </div>
    `;

    }).join('');



    // Обработчики клика
    document.querySelectorAll('.episode').forEach(div => {
        div.addEventListener('click', (e) => {

            if (e.target.closest('.fav-btn')) return;

            const clickedId = div.dataset.id;
            const clickedEp = episodes.find(ep => ep.id == clickedId);
            const favs = JSON.parse(localStorage.getItem('favs')) || [];
            const isFavorited = favs.includes(String(clickedEp.id));
            selContent.classList.add('hidden')
            //single episode
            out.innerHTML = `
                <div class="episode_single">
                    <button class="btn back-btn">← Back</button>
                    <h3>Season ${clickedEp.season} Episode ${clickedEp.number}: ${clickedEp.name}</h3>
                    ${clickedEp.image ? `<img src="${clickedEp.image.medium}" alt="${clickedEp.name}">` : ''}
                    <p>${clickedEp.summary ? clickedEp.summary.replace(/<[^>]*>/g, '') : 'No description'}</p>
                    <small>Aired: ${clickedEp.airdate}</small>
                 <svg class="fav-btn heart-icon ${isFavorited ? 'favorited' : ''}" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
  <path d="M12 21s-6.5-4.75-9.1-8.5C1.1 9.75 2 6.5 5 5.1C7.25 4 9.5 5 12 7.5C14.5 5 16.75 4 19 5.1C22 6.5 22.9 9.75 21.1 12.5C18.5 16.25 12 21 12 21Z"/>
</svg>

                </div>
            `;

            document.querySelector('.back-btn').addEventListener('click', () => {
                selContent.classList.remove('hidden')
                filterAndRenderEpisodes(searchInput.value);
            });
        });
    });
}
//logo
const headerLogo = document.querySelector('.header__logo')
headerLogo.addEventListener('click', () => {
    hero.classList.remove('hidden');
    profilePage.classList.add('hidden');
    selContent.classList.remove('hidden');
    renderEpisodes(allEpisodes);
    addFavListeners();
})
//fav


const favoritesBtn = document.getElementById('favoritesBtn');
favoritesBtn.addEventListener('click', function (e) {
    const favBtn = e.target.closest('.fav-btn');
    // const selectCon = document.querySelector('.select_content')
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const favEpisodes = allEpisodes.filter(ep => favs.includes(String(ep.id)));
    renderEpisodes(favEpisodes, true);
    addFavListeners();
    // renderEpisodes(favEpisodes);



    if (!favBtn) return;

    e.stopPropagation();

    const epId = favBtn.closest('.episode, .episode_single')?.dataset?.id;
    if (!epId) return;



    if (favs.includes(epId)) {
        favs = favs.filter(id => id !== epId);
        favBtn.classList.remove('favorited');
    } else {
        favs.push(epId);
        favBtn.classList.add('favorited');
    }

    localStorage.setItem('favs', JSON.stringify(favs));
});

function addFavListeners() {
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();

            const favs = JSON.parse(localStorage.getItem('favs')) || [];
            const epId = btn.closest('.episode, .episode_single')?.dataset?.id;

            if (!epId) return;

            if (favs.includes(epId)) {
                btn.classList.remove('favorited');
                localStorage.setItem('favs', JSON.stringify(favs.filter(id => id !== epId)));
            } else {
                btn.classList.add('favorited');
                favs.push(epId);
                localStorage.setItem('favs', JSON.stringify(favs));
            }
        });
    });
}


// favoritesBtn.addEventListener('click', () => {
//     const favs = JSON.parse(localStorage.getItem('favs')) || [];
//     const favEpisodes = allEpisodes.filter(ep => favs.includes(String(ep.id)));
//     selContent.classList.add('hidden')
//     renderEpisodes(favEpisodes);
// });

const favoritesBtnProfile = document.getElementById('favoritesBtnProfile');

favoritesBtnProfile.addEventListener('click', () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const favEpisodes = allEpisodes.filter(ep => favs.includes(String(ep.id)));

    // Показываем секцию hero
    hero.classList.remove('hidden');

    // Скрываем профиль
    profilePage.classList.add('hidden');

    // Скрываем селект
    selContent.classList.add('hidden');

    // Рендерим избранные эпизоды
    renderEpisodes(favEpisodes);
    addFavListeners();
});


function loadEpisodesForSeason(seasonNum) {
    const seasonEpisodes = allEpisodes.filter(ep => ep.season == seasonNum);
    seasonEpisodes.sort((a, b) => a.number - b.number);
    renderEpisodes(seasonEpisodes);
    addFavListeners();
}


const profile = document.querySelector('.profile')
const profileMenu = document.querySelector('.profile__menu')

profile.addEventListener('click', (e) => {
    profileMenu.classList.toggle('hidden');
    e.stopPropagation();
})
document.addEventListener('click', (e) => {
    if (!profile.contains(e.target)) {
        profileMenu.classList.add('hidden');
    }
});
//profilebtn
const hero = document.querySelector('.hero');
const profileBtn = document.getElementById('profileBtn');
const profilePage = document.querySelector('.profile-page');
profileBtn.addEventListener('click', () => {
    hero.classList.add('hidden');
    selContent.classList.add('hidden');
    out.innerHTML = '';
    profilePage.classList.remove('hidden');
})

//swiper
function initHeroSwiper() {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const lastFiveEpisodes = allEpisodes
        .slice(-5)
        .reverse();

    swiperWrapper.innerHTML = lastFiveEpisodes.map(ep => `
    <div class="swiper-slide">
      <img src="${ep.image ? ep.image.medium : 'placeholder.jpg'}" alt="Season ${ep.season} Episode ${ep.number}" />
    </div>
  `).join('');


    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2000,
        }
    });
}

//inp label change 

document.querySelectorAll('.inp').forEach(input => {

    input.addEventListener('input', () => {
        if (!input.value) {
            input.classList.remove('change');

        } else {
            input.classList.add('change');
        }
    })
});



// log in
setTimeout(() => {
    document.querySelector('.register-popup').classList.remove('hidden');
    localStorage.setItem('modal', 'true')
}, 10000);

document.querySelector('.back-link').addEventListener('click', () => {
    document.querySelector('.register-popup').classList.add('hidden');
});
// Запускаем загрузку
console.log('out =', out);
document.addEventListener('DOMContentLoaded', () => {
    loadGoTEpisodes();
});
