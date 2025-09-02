function getData() {
    let data = window.location.search;
    let splatData = data.split('&');
    method = splatData[0].split('=');
    id = splatData[1].split('=');
    console.log(id);
    console.log(method);
    var xmlhttp = new XMLHttpRequest();
    let list;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                var str = xmlhttp.responseText;
                var obj = JSON.parse(str);
                list = obj.results
                console.log(list[id[1]]);
                WorkWithMovie(list[id[1]]);
            }
        }
    }
    var baseUrl = "https://api.themoviedb.org/3/movie";
    var endPointUrl = `/${method[1]}`;
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGUwYTBlZmQzZDY3Mjc1MWQ5Zjg3YmM3YWFhNjhkNiIsIm5iZiI6MTc0NTQzMDg1MS4wMDg5OTk4LCJzdWIiOiI2ODA5Mjk0MzZlMWE3NjllODFlZjBiNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tZEN6ZTQu_G2kyhKYg5kiJYrZP9Y_4NipjU67Ncaoec";

    xmlhttp.open("GET", baseUrl + endPointUrl, true);
    xmlhttp.setRequestHeader("Authorization", "Bearer " + token);
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.send();




}
function WorkWithMovie(movie) {
    const movies = [
        "https://www.youtube.com/watch?v=d9erkpdh5o0",
        "https://www.youtube.com/watch?v=69ffwl-8pCU",
       " https://www.youtube.com/watch?v=qH6SqkWS9WA",
       'https://www.youtube.com/watch?v=2woCZg5QdVE',
       'https://www.youtube.com/watch?v=GXfl6nyltRo',
       'https://www.youtube.com/watch?v=jan5CFWs9ic',
       'https://www.youtube.com/watch?v=x7uLutVRBfI',
       'https://www.youtube.com/watch?v=2MVjg_SXjgM',
       'https://www.youtube.com/watch?v=TY1lWh20VSw',
       'https://www.youtube.com/watch?v=zwtZj6YB9xk',
       'https://www.youtube.com/watch?v=zwtZj6YB9xk',
       'https://www.youtube.com/watch?v=ETVi5_cnnaE',
       'https://www.youtube.com/watch?v=22w7z_lT6YM',
       'https://www.youtube.com/watch?v=NX8xhgrMvdc',
       'https://www.youtube.com/watch?v=AzCAwdp1uIQ',
       'https://www.youtube.com/watch?v=OpThntO9ixc',
       'https://www.youtube.com/watch?v=zie6QBbTK5s',
       'https://www.youtube.com/watch?v=rEnCEM48QaY',
       'https://www.youtube.com/watch?v=aSR8mOPBa0I',
       'https://www.youtube.com/watch?v=s7d3jEAhiAg',
        
    ];

    console.log(id[1]);
    document.getElementById('Date').innerHTML = movie.release_date;
    document.getElementById('p1').innerHTML = movie.overview;
    document.getElementById('h1').innerHTML = movie.title
    let asd = document.getElementById('Poster1');
    asd.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const playBtn = document.getElementById("playBtn");
    console.log(movies[(id[1] )]);
    playBtn.addEventListener("click", () => {
       
        const trailerUrl = `${movies[(id[1])%movies.length]}`;
        window.open(trailerUrl, "_blank");
    });

    const castList = document.getElementById("castList");
    document.querySelector(".scroll-left").addEventListener("click", () => {
        castList.scrollBy({ left: -250, behavior: "smooth" });
    });
    document.querySelector(".scroll-right").addEventListener("click", () => {
        castList.scrollBy({ left: 250, behavior: "smooth" });
    });

    const poster = document.querySelector(".poster");
    const topSection = document.getElementById("topSection");
    if (poster) {
        topSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`;
    }

    function setScore(percent) {
        const circle = document.querySelector(".circle");
        const text = document.querySelector(".percentage");
        circle.style.strokeDasharray = `${(movie.vote_average * 10).toFixed(0)}, 100`;

        let current = 0;
        const interval = setInterval(() => {
            if (current >= percent) clearInterval(interval);
            else text.textContent = `${++current}%`;
        }, 15);

        circle.style.stroke = percent >= 70 ? "#21d07a"
            : percent >= 50 ? "#d2d531"
                : "#db2360";
    }

    setScore((movie.vote_average * 10).toFixed(0));
    let list = [
        `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        'CastImg\\elia.png',
         'CastImg\\elin.png',
          'CastImg\\Jon.png',
          'CastImg\\nalim.png',
         ' CastImg\\morinal.png',
         ' CastImg\\lorram.png',
         'CastImg\\1AjNsr7eQb0L.jpg',
         'CastImg\\FRthVxAtCfrJ.jpg',
        'CastImg\\kZzG8qOIBOFH.jpg',
        'CastImg\\sQcWA7VhkFyp.jpg',
        'CastImg\\TP0k8LvSSecQ.jpg',
        'CastImg\\Wvg17nbImykZ.jpg',
        'CastImg\\YLhACN1zbOUe.jpg',
        'CastImg\\yXjPWJ1wZiWG.jpg',
        'CastImg\\zcZl2M8LO7yx.jpg',

        ];
const hollywoodActors = [
  "Leonardo DiCaprio",
  "Brad Pitt",
  "Tom Cruise",
  "Johnny Depp",
  "Robert Downey Jr.",
  "Denzel Washington",
  "Will Smith",
  "Keanu Reeves",
  "Christian Bale",
  "Matt Damon",
  "Ben Affleck",
  "Hugh Jackman",
  "Ryan Gosling",
  "Chris Hemsworth",
  "Chris Evans",
  "Mark Ruffalo",
  "Samuel L. Jackson",

  "Meryl Streep",
  "Julia Roberts",
  "Angelina Jolie",
  "Sandra Bullock",
  "Scarlett Johansson",
  "Jennifer Lawrence",
  "Anne Hathaway",
  "Natalie Portman",
  "Charlize Theron",
  "Cate Blanchett",
  "Emma Stone",
  "Margot Robbie",
  "Gal Gadot",
  "Emily Blunt",
  "Jessica Chastain",
  "Zoe Saldana"
];

    for (let i = 0; i < 20; i++) {
        document.getElementById('castList').innerHTML +=
            `<div class="actor">
               <img src='${list[i %list.length]}'; alt="Freddie" style="width: 200px;height: 300px;">
               <p>${ hollywoodActors[i]}</p>`;

    }


}