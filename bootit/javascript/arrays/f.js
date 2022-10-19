var citytocheck = prompt("enter city");
var matchfound = false;
var cleanestcities = ["tirupathi", "bengaluru", "delhi", "mumbai"];
for (i = 0; i < cleanestcities.length; i++) {
    if (citytocheck === cleanestcities[i]) {
        matchfound = true;
        console.log("yes it is the cleanest city");

    }
    if ( matchfound = false) {
        console.log("no it is not the list");

    }

}