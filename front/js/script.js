// Récuperer les datas au format JSON dans le back (Product.js) en faisant une requête via la méthode Fetch...

const fetchProduitApi = () => {
	fetch("http://localhost:3000/api/products")
		.then((reponse) => reponse.json()) // ici une Promise nous sera retourné
		.then((data) => {
			console.log("data", data);
		})
		.catch((err) => console.log(err)); // ici cette fonction s'exécutera si une erreur est survenue
};
fetchProduitApi();
