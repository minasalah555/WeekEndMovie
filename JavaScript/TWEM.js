
function Main() {
    getData();
    pushData();
    getDataSection2();
    getDataImages();
}



function pushData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var str = xhr.responseText;
            var obj = JSON.parse(str);
            createMovieItem(obj);
        }
    }
    var baseUrl = "https://api.themoviedb.org/3/movie";
    var endPointUrl = "/top_rated";
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGUwYTBlZmQzZDY3Mjc1MWQ5Zjg3YmM3YWFhNjhkNiIsIm5iZiI6MTc0NTQzMDg1MS4wMDg5OTk4LCJzdWIiOiI2ODA5Mjk0MzZlMWE3NjllODFlZjBiNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tZEN6ZTQu_G2kyhKYg5kiJYrZP9Y_4NipjU67Ncaoec";
    xhr.open("GET", baseUrl + endPointUrl, true);
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();
}

function createMovieItem(obj) {
    var JSONData = obj.results;

    for (var i = 0; i < JSONData.length; i++) {
        document.getElementById('cards-list1').innerHTML += `
        <li class="card-item">
            <a href="movie.html?method=top_rated&id=${i}" class="card-link">
                <img src=https://image.tmdb.org/t/p/w500${JSONData[i].backdrop_path}; alt="" class="card-image">
                <p class="card-title">${JSONData[i].title}</p>
                <h3 class="card-description">${JSONData[i].release_date}</h3>
            </a>
         </li>`;
    }
    
    var movieItem = document.getElementsByClassName('card-item');
    console.log(movieItem);
    for (var item of movieItem) {
        item.addEventListener('mouseover', changeBgImage);
    }
}
function changeBgImage(event) {
    var imgSrc = event.currentTarget.querySelector('.card-image').src;
    var container = document.getElementById('container');

    container.style.background = `url(${imgSrc})`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.transition = 'background 0.2s ease-out';
    container.style.backgroundPosition = 'center';
}
function getData() {
    var xmlhttp = new XMLHttpRequest();
    let list;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                var str = xmlhttp.responseText;
                var obj = JSON.parse(str);
                list = obj.results;

                for (var i = 0; i < list.length; i++) {
                    var rate = (obj.results[i].vote_average * 10).toFixed(0);
                    document.getElementById('main-section').innerHTML += `
                 <div class="container">
                    <div class="slide-container">
                    <div class="card-wrapper">
                        <div class="card ">
 
                        <a href="movie.html?method=popular&id=${i}">
                            <div class="box-image" id="1" >
                                <img src=https://image.tmdb.org/t/p/w500${obj.results[i].backdrop_path}; alt="image" class="Image">
                            </div>
                        </a>
                            <div class="rate" id='${i + 20}'>
                                 <span style="font-weight: bold;"> ${rate}<sup style="font-weight: 600;font-size: 12px;">%</sup></span>
                            </div>  
                            <div class="profile-details">
                            <a href="newPage.html" class="name"> ${obj.results[i].title}</a>
                            <h3 class="date" style="color: black;font-weight: bold;">
                               ${obj.results[i].release_date}
                            </h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                         `;
                }

            } else {
                console.error("Error:", xmlhttp.status, xmlhttp.responseText);
            }
            for (let i = 0; i < list.length; i++) {
                var rate = (obj.results[i].vote_average * 10).toFixed(0);
                if (rate < 50) {
                    color = '#d63a0bff';
                    getRate(rate, document.getElementById(`${i + 20}`), color)
                } else if (rate >= 50 && rate <= 70) {
                    color = '#e6e20eff';
                    getRate(rate, document.getElementById(`${i + 20}`), color)
                } else {
                    color = '#09f07cff';
                    getRate(rate, document.getElementById(`${i + 20}`), color)
                }
            }


        }
    };

    var baseUrl = "https://api.themoviedb.org/3/movie";
    var endPointUrl = "/popular";
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGUwYTBlZmQzZDY3Mjc1MWQ5Zjg3YmM3YWFhNjhkNiIsIm5iZiI6MTc0NTQzMDg1MS4wMDg5OTk4LCJzdWIiOiI2ODA5Mjk0MzZlMWE3NjllODFlZjBiNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tZEN6ZTQu_G2kyhKYg5kiJYrZP9Y_4NipjU67Ncaoec";

    xmlhttp.open("GET", baseUrl + endPointUrl, true);
    xmlhttp.setRequestHeader("Authorization", "Bearer " + token);
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.send();
}

function getDataSection2() {
    var xmlhttp = new XMLHttpRequest();
    let list;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                var str = xmlhttp.responseText;
                var obj = JSON.parse(str);
                list = obj.results;
                for (var i = 0; i < list.length; i++) {
                    var rate = (obj.results[i].vote_average * 10).toFixed(0);
                    document.getElementById('main-section2').innerHTML += `
                 <div class="container">
                    <div class="slide-container">
                    <div class="card-wrapper">
                        <div class="card ">
                         <a href="movie.html?method=upcoming&id=${i}">
                            <div class="box-image" id="1" >
                                <img src=https://image.tmdb.org/t/p/w500${obj.results[i].backdrop_path}; alt="image" class="Image">
                            </div>
                        </a>
                            <div class="rate" id='${i + 40}'>
                                 <span style="font-weight: bold;"> ${rate}<sup style="font-weight: 600;font-size: 12px;">%</sup></span>
                            </div>  
                            <div class="profile-details">
                            <a href="" class="name"> ${obj.results[i].title}</a>
                            <h3 class="date" style="color: black;font-weight: bold;">
                               ${obj.results[i].release_date}
                            </h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                         `;
                }

            } else {
                console.error("Error:", xmlhttp.status, xmlhttp.responseText);
            }
            for (let i = 0; i < list.length; i++) {
                var rate = (obj.results[i].vote_average * 10).toFixed(0);
                if (rate < 50) {
                    color = '#d63a0bff';
                    getRate(rate, document.getElementById(`${i + 40}`), color)
                } else if (rate >= 50 && rate <= 70) {
                    color = '#e6e20eff';
                    getRate(rate, document.getElementById(`${i + 40}`), color)
                } else {
                    color = '#09f07cff';
                    getRate(rate, document.getElementById(`${i + 40}`), color)
                }
            }


        }
    };

    var baseUrl = "https://api.themoviedb.org/3/movie";
    var endPointUrl = "/upcoming";
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGUwYTBlZmQzZDY3Mjc1MWQ5Zjg3YmM3YWFhNjhkNiIsIm5iZiI6MTc0NTQzMDg1MS4wMDg5OTk4LCJzdWIiOiI2ODA5Mjk0MzZlMWE3NjllODFlZjBiNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tZEN6ZTQu_G2kyhKYg5kiJYrZP9Y_4NipjU67Ncaoec";

    xmlhttp.open("GET", baseUrl + endPointUrl, true);
    xmlhttp.setRequestHeader("Authorization", "Bearer " + token);
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.send();
}

function getRate(rate, item, color) {
    let prograss = 0;
    let intervalT = setInterval(() => {
        if (prograss >= rate) {
            clearInterval(intervalT);
        } else {
            prograss++;
            item.style.background =
                'conic-gradient(' + color + ' 0% ' + prograss + '%, #01060aff ' + prograss + '% 100%)';

        }
    }, 6);
}

let currentImageIndex = 0;
let movieData = [];
const searchBar = document.querySelector('.search-bar');

function changeBackgroundImage() {
    if (movieData.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % movieData.length;
    let path = movieData[currentImageIndex].backdrop_path;
    if (path) {
        searchBar.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${path}')`;
    }
}

function getDataImages() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                let obj = JSON.parse(xmlhttp.responseText);
                movieData = obj.results || [];
                if (movieData.length > 0 && movieData[0].backdrop_path) {
                    searchBar.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movieData[0].backdrop_path}')`;
                }
                setInterval(changeBackgroundImage, 2000);
            } else {
                console.error("Error:", xmlhttp.status, xmlhttp.responseText);
            }
        }
    };

    var baseUrl = "https://api.themoviedb.org/3/movie";
    var endPointUrl = "/now_playing";
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGUwYTBlZmQzZDY3Mjc1MWQ5Zjg3YmM3YWFhNjhkNiIsIm5iZiI6MTc0NTQzMDg1MS4wMDg5OTk4LCJzdWIiOiI2ODA5Mjk0MzZlMWE3NjllODFlZjBiNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tZEN6ZTQu_G2kyhKYg5kiJYrZP9Y_4NipjU67Ncaoec";

    xmlhttp.open("GET", baseUrl + endPointUrl, true);
    xmlhttp.setRequestHeader("Authorization", "Bearer " + token);
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.send();
}

document.getElementById("Welcomeuser").innerText = localStorage.getItem("login_username")



let txtH = "Welcome to Weekend Movie!";
let txtP = "Discover the latest and greatest movies and TV shows. Explore popular titles, find your next binge-worthy series, and enjoy a world of entertainment—all in one place.";

typeWriter(txtH, "enimationH");
typeWriter(txtP, "enimationP");

function typeWriter(text, elementId) {
    const target = document.getElementById(elementId);
    let index = 0;

    if (!document.getElementById('typewriter-cursor-style')) {
        const style = document.createElement('style');
        style.id = 'typewriter-cursor-style';
        style.innerHTML = `
            .typewriter-cursor {
                display: inline-block;
                width: 1ch;
                animation: blink 1s steps(1) infinite;
                color: white;
                font-weight: bold;
            }
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    let cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    target.innerHTML = '';
    target.appendChild(cursor);
 

    let interval = setInterval(function () {
        if (index < text.length) {
            cursor.remove();
            target.innerHTML += text.charAt(index);
            target.appendChild(cursor);
 
            index++;
        } else {
            clearInterval(interval);
         }
    }, 100);
 
}
