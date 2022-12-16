document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const image = document.querySelector('img');
    image.src = "./loading.gif";
    image.alt = "loading";
    const text = document.querySelector("#text").value;
    document.querySelector("#text").value = '';

    const response = await fetch("/openai/generateimage", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: text })
    })
    const data = await response.json();
    setTimeout(() => {
        image.src = '';
        image.alt = '';
        image.src = data.url;
        image.alt = (data.url != undefined) ? `${text} - picture` : "Unable to generate"
    }, 3000)
})