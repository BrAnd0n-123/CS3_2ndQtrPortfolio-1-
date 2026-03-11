let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || {}; //Start up a new object to hold all information

            function displayMovie() {
                const list = document.getElementById("movieList");
                list.innerHTML = "";

                for (let i in savedMovies) {
                    const info = savedMovies[i];

                    const ratingsArray = info.ratings || [Number(info.stars) || 0];
                    const avgStars = Math.ceil(
                        ratingsArray.reduce((sum, s) => sum + s, 0) / ratingsArray.length
                    );

                    const div = document.createElement("div");
                    div.className = "infoSavedMovie"; 

                    div.innerHTML = `
                        <div class="movieInfoText">
                            <span class="savedTitle">${info.title}</span>
                            <span class="savedYear">(${info.year})</span>
                            <div class="savedDetails">${info.genre} | Rating: ${"★".repeat(avgStars)}</div>
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

          if (savedMovies[key]) {
                savedMovies[key].ratings.push(Number(stars));
            } else {
                savedMovies[key] = {title, year, genre, ratings: [Number(stars)]};
            }
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          displayMovie();
          this.reset();
          });

          function deleteMovie(key) { 
            delete savedMovies[key]; 
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies)); 
            displayMovie(); 
        }
