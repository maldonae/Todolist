/*ajout dans n'importe quelle liste.*/
function createList(tache, liste) {
	console.log(tache);
	const tacheAEffectuer = document.createElement("li");
	tacheAEffectuer.classList.add("list-element");

	tacheAEffectuer.innerHTML = `<p class="task">${tache}</p>`;

	const checkbox = document.createElement("input");
	checkbox.id = "checkbox";
	checkbox.type = "checkbox";

	tacheAEffectuer.appendChild(checkbox);

	liste.appendChild(tacheAEffectuer);

	checkbox.addEventListener("change", (event) => {
		const isChecked = event.target.checked;
		if (isChecked) {
			liste.style.textDecoration = "line-through";
		} else {
			liste.style.textDecoration = "none";
		}
	});
}

/*concerne les priorités*/
const tacheAAjouter = document.getElementById("liste-priorites");
const buttonAjoutPriorites = document.getElementById("bouton-priorites");

buttonAjoutPriorites.addEventListener("click", () => {
	const clickButton = prompt("Quelle priorité souhaitez-vous ajouter ?");
	createList(clickButton, tacheAAjouter);
	alert("Priorité ajoutée avec succès !");
});

/*concerne les objectifs*/
const buttonAjoutObjectifs = document.getElementById("bouton-objectifs");
const objectifsAAjouter = document.getElementById("liste-objectifs");

buttonAjoutObjectifs.addEventListener("click", () => {
	const clickButton = prompt("Quel objectif souhaitez-vous ajouter ?");
	createList(clickButton, objectifsAAjouter);
	alert("Objectif ajouté avec succès !");
});

/*concerne la to do List*/
const buttonAjoutToDoList = document.getElementById("bouton-to-do");
const toDoAAjouter = document.getElementById("liste-to-do");

buttonAjoutToDoList.addEventListener("click", () => {
	const clickButton = prompt("Quelle tâche souhaitez-vous ajouter ?");
	createList(clickButton, toDoAAjouter);
	alert("Tâche ajoutée avec succès !");
});
