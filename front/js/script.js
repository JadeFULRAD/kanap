// Récuperer les datas au format JSON dans le back (Product.js) en faisant une requête via la méthode Fetch...
const listeProduit = document.getElementById("items");
const fetchProduitApi = () => {
	fetch("http://localhost:3000/api/products")
		.then((reponse) => reponse.json()) // ici une Promise nous sera retourné au format JSON
		.then((data) => {
			// la Promise sera retourné si résolue
			console.log("data", data);
			productsDisplay(data);
		})
		.catch((err) => console.log(err)); // Sinon cette fonction s'exécutera si une erreur est survenue
};
fetchProduitApi();

// Afficher les données récupérées et les afficher via le DOM
const productsDisplay = (products) => {
	for (let i in products) {
		// On créé une boucle for afin de parcourir le tableau
		console.log(products[i]);

		// On créé les élements à afficher
		/*let itemLink = document.createElement("a");*/
		/*itemLink.setAttribute("href", products.html);
	itemLink.appendChild(listeProduit);*/
		listeProduit.innerHTML += `<a href="#">
		<article>
		<img src="${products[i].imageUrl}">
		</article>
		</a>`;
	}
};
