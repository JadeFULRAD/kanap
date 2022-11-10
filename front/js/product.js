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

			let productImg = document.querySelector(".item__img");
			productImg.src = data.imageUrl;

			document.querySelector("#price").innerText = data.price;
			document.querySelector("#title").innertext = data.name;
			document.querySelector("#description").innerText = data.description;
			document.querySelector("#colors").value = data.colors[0];
			// Boucle
			for (let i in colors) colors < array.length; index++) {
				const element = array[index];
			}
			//document.querySelector(".option1").innerHTML = data.colors[0];
			//document.querySelector(".option2").innerHTML = data.colors[1];
			//document.querySelector(".option3").innerHTML = data.colors[2];
			//document.querySelector(".option1").value = data.colors[0];
			//document.querySelector(".option2").value = data.colors[1];
			//document.querySelector(".option3").value = data.colors[2];
		})
		.catch((err) => console.log(err)); // Sinon cette fonction s'exécutera si une erreur est survenue
};
fetchProduitApi();


//fonction qui récupère la valeur de la quantité du formulaire dans le balisage

let productQuantity = document.querySelector("#quantity");
let productQuantityLabel = document.querySelector("#labelQuantity");

function changeQuantity(valeur) {
	productQuantityLabel.innerHTML = "Quantité : " + valeur;
	console.log(valeur);
}

document.querySelector("#quantity").addEventListener("input", (event) => {
	let valeur = productQuantity.value;
	changeQuantity(valeur);
});
