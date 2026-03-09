let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || {}; //Start up a new object to hold all information

          function displayMovie() {
            const list = document.getElementById("movieList");
            list.innerHTML = "";

            for (let i in savedMovies) {
                const info = savedMovies[i];
                const div = document.createElement("div");
                div.className = "infoSavedMovie"; 
                
                // Use structured HTML for easier styling
                div.innerHTML = `
                    <div class="movieInfoText">
                        <span class="savedTitle">${info.title}</span>
                        <span class="savedYear">(${info.year})</span>
                        <div class="savedDetails">${info.genre} | Rating: ${"★".repeat(info.stars)}</div>
                    </div>
                    <button class="deleteBtn" onclick="deleteMovie('${i}')">DELETE</button>
                `;
                list.appendChild(div);
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
