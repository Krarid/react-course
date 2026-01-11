import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'uFicnsEStHhvogQWxO7uzozmqboviAeE';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const innerGiphyToBody = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
};

myRequest
.then((response) => response.json())
.then(({data}: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    innerGiphyToBody(imageUrl);
})
.catch((err)=>{
    console.error(err);
})