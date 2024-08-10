var weddingDate = new Date("August 10,2024").getTime();

var time = setInterval(function () {
	var now = new Date().getTime();

	var timeBetween = weddingDate - now;
	var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

	document.getElementById("day-count").innerHTML =
		days + " days to our wedding";

	if ((days = -1)) {
		document.getElementById("day-count").innerHTML =
			" Today is our wedding day!";
	}
	if (days < -2) {
		document.getElementById("day-count").innerHTML = " We are married!";
	}
}, 1000);

//Footer
//**set automatic date in footer**//
const date = document.getElementById("current_date");
date.innerHTML = new Date().getFullYear();

// A marker with a with a URL pointing to a PNG.
/* const beachFlagImg = document.createElement("img");

beachFlagImg.src =
	"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

const beachFlagMarkerView = new AdvancedMarkerElement({
	map,
	position: { lat: 5.946063995361328, lng: -0.09924069792032242 },
	content: beachFlagImg,
	title: "A marker using a custom PNG Image",
}); */
