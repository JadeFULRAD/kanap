// Récupérer l'ID du produit via l'URL
//const produit = window.location.search.split("?").join("");
//console.log(produit);

let paramsProduit = new URL(document.location).searchParams;
console.log(paramsProduit);

let paramsId = paramsProduit.get("id");
console.log(paramsId);

// Récupérer les données de l'ID pour les afficher dans la page
const fetchProduitApi = () => {
	fetch(`http://localhost:3000/api/products/${paramsId}`)
		.then((reponse) => reponse.json()) // ici une Promise nous sera retourné au format JSON
		.then((data) => {
			// la Promise sera retourné si résolue
			console.log("data", data);
			productDisplay(data);
		})
		.catch((err) => console.log(err)); // Sinon cette fonction s'exécutera si une erreur est survenue
};
fetchProduitApi();

// Afficher le produit sur la page Produit
const productDisplay = (product) => {
	// Instructions à passer
	let productImg = document.querySelector(".item__img");
	console.log(product);
};
productDisplay();
