let url = "https://randomuser.me/api"

window.onload = function (data) {
    fetch(url)
    .then(response => response.json())
    .then(data => dataReady(data))
}

function dataReady(data) {
    console.log(data);
    let result = data.results[0];
    let fullname = result.name.title + " " + result.name.first + " " + result.name.last;
    let username = (result.name.first + "_" + result.name.last).toLowerCase();
    let email = result.email;
    let country = result.location.country;
    let avatar = result.picture.medium;

    console.log("Random user: ", fullname, "user name: ", username, "email: ", email, "country: ", country);

    document.querySelector("#full-name").innerHTML = fullname;
    document.querySelector("#username").innerHTML = username;
    document.querySelector("#email").innerHTML = email;
    document.querySelector("#country").innerHTML = country;
    document.querySelector("#avatar-img").src = avatar;
    
}