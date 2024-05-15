var input = document.getElementsByTagName("input")[0];
var meaege = document.getElementById("rander");
var random = [
    { mesges: "Hy" },
    { mesges: "AP kasy hay" },
    { mesges: "AP age kia hay" },
    { mesges: "I love you 2" },
    { mesges: "Tum messge q ni karty" },
    { mesges: "Jao mughy ap say bat ni karti" },
    { mesges: "Phaly 1000 ka recharge" },
    { mesges: "Ap phone q ni otha ty" },
];

function mesges() {
    meaege.innerHTML += `<ul class="right">${input.value}</ul> `;
    input.value = "";

    // Wait for 1 second and then display a random message
    setTimeout(auto, 1500);
}

function auto() {
    var out = Math.floor(Math.random() * random.length);
    meaege.innerHTML += `<ul>${random[out].mesges}</ul> `;
}

// Example usage
// mesges();
