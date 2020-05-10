// Data Source
const apiUrl = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

const cardContainer = document.querySelector("#cards");

let data = [];

async function fetchCards(){
	return await fetch(apiUrl)
	.then(async(r) => await r.json())
}

function readCards(cards){
	cardContainer.innerHTML = "";
	cards.map(readCard);
}

function readCard(card){
	const div = document.createElement("div");
	div.className = "card";
	div.style.width = "20rem";
    div.style.margin = "2rem";
	div.innerHTML = `<img src="${card.photo}" class="card-img-top" alt="${card.name}">
				 	<div class="card-body">
				   		<h5 class="card-title">${card.name}</h5>
						<p class="card-text">Tipo: ${card.property_type}</p>
						<p class="card-text">Preço: R$ ${card.price},00</p>`;
	cardContainer.appendChild(div);

}

async function main(){
	data = await fetchCards();
	if (data) {
		readCards(data);
	}
}
main();