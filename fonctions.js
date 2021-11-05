function changePhoto(){
    let photos=5;
    let num = document.getElementById("photoProjetL").src.split("pl")[1].split(".")[0];
    console.log(num);
    numSuivant = num<photos ? (parseInt(num)+1).toString():1;
    document.getElementById("photoProjetL").src="pl"+numSuivant+".png";
}