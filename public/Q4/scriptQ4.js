let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || {}; //Start up a new object to hold all information

          function displayMovie(){ //Display the information
            const list = document.getElementById("movieList"); 
            list.innerHTML = ""; //Creates a list- this will store all information inside your savedMovies object and lists each one down

              for(let i in savedMovies){ //Loops inside the object to output each id
                const info = savedMovies[i];
                const div = document.createElement("div");
                div.className = "infoSavedMovie"; //Create an element called div to store in everything
                div.innerHTML = `
                ${info.title} - (${info.year}) - ${info.genre}, Rating: ${"⭐".repeat(info.stars)} <button onclick="deleteMovie('${i}')">Delete</button>
                `; //Text output
                list.appendChild(div); //Add in the div
              }
          }

          document.getElementById("formMovie").addEventListener("submit", function(event) {

          event.preventDefault();

          const title = document.getElementById('movieTitle').value.trim();
          const year = document.getElementById('movieYear').value.trim();
          const genre = document.getElementById('genre').value.trim();
          const stars = document.querySelector('input[name="movieStars"]:checked')?.value;
          const key = title.toLowerCase();

          savedMovies[key] = {title, year, genre, stars};
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          displayMovie();
          this.reset();
          });

          function deleteMovie(key) { 
            delete savedMovies[key]; 
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies)); 
            displayMovie(); 
        }
