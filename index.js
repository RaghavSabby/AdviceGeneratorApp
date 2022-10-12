const getAdviceAPI = async () => {
    const reponse = await fetch("https://api.adviceslip.com/advice");
    return reponse.json();
}

const loadAdvice = ({ slip: { id, advice } }) => {
    const adviceContainer = document.querySelector("#advice-container");
    adviceContainer.querySelector(".advice-id").textContent = `ADVICE #${id}`;
    adviceContainer.querySelector(".advice-text").textContent = advice;
}

let getAdviceAPIResponse;
document.addEventListener("DOMContentLoaded", async () => {
    getAdviceAPIResponse = await getAdviceAPI();
    console.log(getAdviceAPIResponse);
    loadAdvice(getAdviceAPIResponse);
    
    const clickableBtn = document.querySelector("button.clickable-btn");
    clickableBtn.addEventListener("click", async function() {
        console.log("Clicked");
        getAdviceAPIResponse = await getAdviceAPI();
        console.log(getAdviceAPIResponse);
        loadAdvice(getAdviceAPIResponse);
    });
});
