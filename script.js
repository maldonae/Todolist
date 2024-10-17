/*ajout dans n'importe quelle liste.*/
function createList(tache, liste, strClass) {
  console.log(tache);
  const tacheAEffectuer = document.createElement("li");
  tacheAEffectuer.classList.add(strClass);

  tacheAEffectuer.innerHTML = `<p class="task">${tache}</p>`;

  const checkbox = document.createElement("input");
  checkbox.id = "checkbox";
  checkbox.type = "checkbox";

  tacheAEffectuer.appendChild(checkbox);

  liste.appendChild(tacheAEffectuer);

  checkbox.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      tacheAEffectuer.style.textDecoration = "line-through";
    } else {
      tacheAEffectuer.style.textDecoration = "none";
    }
  });
}

/*concerne les priorités*/
const tacheAAjouter = document.getElementById("liste-priorites");
const buttonAjoutPriorites = document.getElementById("bouton-priorites");
const arrayPrio = document.getElementsByClassName("list-element-priorite");

buttonAjoutPriorites.addEventListener("click", () => {
  if (arrayPrio.length < 5) {
    const clickButton = prompt("Quelle priorité souhaitez-vous ajouter ?");
    createList(clickButton, tacheAAjouter);
    alert("Priorité ajoutée avec succès !");
  } else {
    alert("Tu te prends pour un warrior ?");
  }
});

/*concerne les objectifs*/
const buttonAjoutObjectifs = document.getElementById("bouton-objectifs");
const objectifsAAjouter = document.getElementById("liste-objectifs");
const arrayObjectifs = document.getElementsByClassName("list-element-objectif");

buttonAjoutObjectifs.addEventListener("click", () => {
  if (arrayObjectifs.length < 5) {
    const clickButton = prompt("Quel objectif souhaitez-vous ajouter ?");
    createList(clickButton, objectifsAAjouter, "list-element-objectif");
    alert("Objectif ajouté avec succès !");
  } else {
    alert("T'es ambitieux toi !");
  }
});

/*concerne la to do List*/
const buttonAjoutToDoList = document.getElementById("bouton-to-do");
const toDoAAjouter = document.getElementById("liste-to-do");
const arrayToDo = document.getElementsByClassName("list-element-todo");

buttonAjoutToDoList.addEventListener("click", () => {
  if (arrayToDo.length < 5) {
    const clickButton = prompt("Quelle tâche souhaitez-vous ajouter ?");
    createList(clickButton, toDoAAjouter);
    alert("Tâche ajoutée avec succès !");
  } else {
    alert("Calmos !!!!");
  }
});
