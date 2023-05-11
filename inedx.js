const word = document.querySelector(".word");
const def = document.querySelector(".def");
const searchBtn = document.querySelector(".searchBtn");
const loading = document.querySelector(".loading");

word.value = "Tapez un mot !!!!";

searchBtn.addEventListener("click", () => {
  loading.classList.add("active");

  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word.value;
  fetch(url).then((response) =>
    response.json().then((data) => {
      try {
        for (let words of data) {
          let definintion = words.meanings[0].definitions[2].definition;
          loading.classList.remove("active");
          def.classList.add("defe");
          def.innerHTML = `definition: ${definintion}`;
        }
      } catch (err) {
        def.classList.add("defe");
        loading.classList.remove("active");
        def.innerHTML = `Aucun definition a été trouver`;
      }
    })
  );
});

word.addEventListener("click", () => {
  word.value = "";
});
