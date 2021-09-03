var btnShowMembers = document.getElementById("btnShowMembers");
var teamMembers = document.querySelector(".teamMembers");
var project = document.querySelector(".project")
var card = document.getElementById("card");


btnShowMembers.addEventListener("click", move)

function move() {
    teamMembers.style.left = "0"
}
document.addEventListener("mousemove", function(e) {
    if (e.target != btnShowMembers && e.target != card && e.target != project) {
        teamMembers.style.left = "110%"
    }
})