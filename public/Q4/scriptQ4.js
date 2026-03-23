let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || {}; //Start up a new object to hold all information

            function displayMovie() { //Function to display movie
                const list = document.getElementById("movieList"); //declare
                list.innerHTML = "";

                for (let i in savedMovies) { //loops to put in all info from the list
                    const info = savedMovies[i];

                    const ratingsArray = info.ratings || [Number(info.stars) || 0]; //allows the stars to be averaged
                    const avgStars = Math.ceil(
                        ratingsArray.reduce((sum, s) => sum + s, 0) / ratingsArray.length
                    );

                    const div = document.createElement("div");
                    div.className = "infoSavedMovie";  //creates a div to put in stuff

                    div.innerHTML = `
                        <div class="movieInfoText">
                            <span class="savedTitle">${info.title}</span>
                            <span class="savedYear">(${info.year})</span>
                            <div class="savedDetails">${info.genre} | Rating: ${"★".repeat(avgStars)}</div>
                        </div>
                        <button class="deleteBtn" onclick="deleteMovie('${i}')">DELETE</button>
                    `; //inputs
                    list.appendChild(div);
                }
            }

          document.getElementById("formMovie").addEventListener("submit", function(event) { //on event of submitting...

          event.preventDefault(); //prevent webpage reset

          const title = document.getElementById('movieTitle').value.trim();
          const year = document.getElementById('movieYear').value.trim();
          const genre = document.getElementById('genre').value.trim();
          const stars = document.querySelector('input[name="movieStars"]:checked')?.value;
          const key = title.toLowerCase(); //declare stuff

          if (savedMovies[key]) {
                savedMovies[key].ratings.push(Number(stars));
            } else {
                savedMovies[key] = {title, year, genre, ratings: [Number(stars)]};
            } //put in the stuff inside the object
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          displayMovie();
          this.reset(); //output
          });

          function deleteMovie(key) { 
            delete savedMovies[key];  //simple deleting code
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies)); 
            displayMovie(); 
        }
