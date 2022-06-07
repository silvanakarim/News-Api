var myGeneralNews = document.getElementById('myGeneralNews')
var lis = document.querySelectorAll('.nav-item a , .dropdown a')
var lis2 = document.querySelectorAll('.dropdown-menu li')
var posts = [];
var category = '';
var country = '';
var url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=b0a9ec91648b45899b43371a3bd0bb65`;

async function requestApi(url) {
    var result= await fetch(url);
    var finalResult= await result.json();
    posts= finalResult.articles;
    displayNews();
}

requestApi(url); 

function displayNews() {
    var cartona = '';
    for (var i = 0; i < posts.length; i++) {
        cartona += `
            <div class="col-md-4">
                <div class="item">
                    <img src="${posts[i].urlToImage}" class="w-100">
                    <p class="pt-3">${posts[i].title}</p>
                </div>
            </div>`
    }
    myGeneralNews.innerHTML = cartona;

}


for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
        category = e.target.innerText;
        requestApi(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=b0a9ec91648b45899b43371a3bd0bb65`)
    })
}


function chooseCountry() {
    for (var i = 0; i < lis2.length; i++) {
        lis2[i].addEventListener('click', function (e) {
            if (e.target.innerText == 'Egypt') {
                country = 'eg'
            }
            else if (e.target.innerText == 'America') {
                country = 'us'
            }
            else if (e.target.innerText == 'Australia') {
                country = 'au'
            }
            else if (e.target.innerText == 'France') {
                country = 'fr'
            }
            else if (e.target.innerText == 'India') {
                country = 'in'
            }
            else if (e.target.innerText == 'Italy') {
                country = 'it'
            }
            else if (e.target.innerText == 'Portugal') {
                country = 'pt'
            }
            else if (e.target.innerText == 'Saudi Arabia') {
                country = 'sa'
            }
            else if (e.target.innerText == 'Turkey') {
                country = 'tr'
            }
            requestApi(`https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=b0a9ec91648b45899b43371a3bd0bb65`)
            for (var i = 0; i < lis.length; i++) {
                lis[i].addEventListener('click', function (e) {
                    category = e.target.innerText;
                    requestApi(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b0a9ec91648b45899b43371a3bd0bb65`)
                })
            }

        })

    }
}

chooseCountry();


