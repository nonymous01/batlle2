let AfficheInfo= JSON.parse(localStorage.getItem("session"))
let profil= document.querySelector("#affich")
profil.innerText= AfficheInfo.nom