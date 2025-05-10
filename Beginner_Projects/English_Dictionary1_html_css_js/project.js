const input = document.getElementById("input");
const info = document.getElementById("instruction");
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio");

async function fetchAPI(word) {

    try {
        info.innerText = `Searching the meaning of "${word}"...`;
        meaningContainer.style.display = "none";

        const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((res) => res.json());

        if (result.title) {
            info.innerText = "";
            meaningContainer.style.display = "block";
            title.innerText = word;
            meaning.innerText = "N/A";
            audio.style.display = "none";
        }
        else {
            info.innerText = "";
            meaningContainer.style.display = "block";
            title.innerText = word;

            const meaningItem = result[0].meanings[0].definitions.find(item => item.definition && item.definition.trim() != "");
            if (meaningItem) meaning.innerText = meaningItem.definition;
            else meaning.innerText = "N/A";

            audio.style.display = "inline-flex";
            const audioItem = result[0].phonetics.find(item => item.audio && item.audio.trim() != "");
            if (audioItem) audio.src = audioItem.audio;
            else audio.src = "";
        }
    }
    catch (error) {
        info.innerText = `An error happend, try again later`;
    }
};

input.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
});