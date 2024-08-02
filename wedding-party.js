//reference image path with respect to wedding html file to the image. not this js file to the image
//don't forget the jpg
const bridesMaids = [
	{
		id: 7,
		name: "Jewel Afua Obuo Precious-Maid of Honor",
		img: "../assets/bridesmaids/BM_8.jpg",
	},
	{
		id: 0,
		name: "Eunice Agyeiwaa",
		img: "../assets/bridesmaids/BM_1.jpg",
	},
	{
		id: 1,
		name: "Tracy",
		img: "../assets/bridesmaids/BM_2.jpg",
	},
	{
		id: 2,
		name: "Angelina Asah Yeboah",
		img: "../assets/bridesmaids/BM_3.jpg",
	},
	{
		id: 3,
		name: "Kate Ayebea",
		img: "../assets/bridesmaids/BM_4.jpg",
	},
	{
		id: 4,
		name: "Esther Addo",
		img: "../assets/bridesmaids/BM_5.jpg",
	},
	{
		id: 5,
		name: "Abigail David Lartey",
		img: "../assets/bridesmaids/BM_6.jpg",
	},
	{
		id: 8,
		name: "Benedicta",
		img: "../assets/bridesmaids/BM_9.jpg",
	},
	{
		id: 9,
		name: "Tracy Nyadu",
		img: "../assets/bridesmaids/BM_10.jpg",
	},
	{
		id: 10,
		name: "Obeyaa Sasu",
		img: "../assets/bridesmaids/BM_11.jpg",
	},
];

const image = document.getElementById("brides_maids_WP");
const person_name = document.getElementById("BM_name");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

//bridesmaids_slides
window.addEventListener("DOMContentLoaded", function () {
	const item = bridesMaids[currentItem];
	image.src = item.img;
	person_name.textContent = item.name;
});
console.log("4");
//show bridesmaids
function showBridesMaid(BM) {
	const item = bridesMaids[BM];
	image.src = item.img;
	person_name.textContent = item.name;
}
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > bridesMaids.length - 1) {
		currentItem = 0;
	}
	showBridesMaid(currentItem);
});

prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = bridesMaids.length - 1;
	}
	showBridesMaid(currentItem);
});

//groomsman
const groomsMan = [
	{
		id: 5,
		name: "Brian Atuobi-Yiadom Sasu - Best man",
		img: "../assets/groomsman/GM_6.jpg",
	},
	{
		id: 0,
		name: "Prince Ampong",
		img: "../assets/groomsman/GM_1.jpg",
	},
	{
		id: 1,
		name: "Josef Gyrmai",
		img: "../assets/groomsman/GM_2.jpg",
	},
	{
		id: 2,
		name: "Kyei Baffour",
		img: "../assets/groomsman/GM_3.jpg",
	},
	{
		id: 3,
		name: "Robert Nyadu",
		img: "../assets/groomsman/GM_4.jpg",
	},
	{
		id: 4,
		name: "Prince Boateng",
		img: "../assets/groomsman/GM_5.jpg",
	},
	{
		id: 6,
		name: "Albert Duodu",
		img: "../assets/groomsman/GM_7.jpg",
	},
	{
		id: 7,
		name: "Nana Yaw Siaw",
		img: "../assets/groomsman/GM_8.jpg",
	},
	{
		id: 8,
		name: "Emmanuel Oppong",
		img: "../assets/groomsman/GM_9.jpg",
	},
];

const image_GM = document.getElementById("groomsman_WP");
const person_name_GM = document.getElementById("GM_name");
const prevBtn_GM = document.querySelector(".prev-btnGM");
const nextBtn_GM = document.querySelector(".next-btnGM");

let currentItem_GM = 0;

//bridesmaids_slides
window.addEventListener("DOMContentLoaded", function () {
	const item = groomsMan[currentItem_GM];
	image_GM.src = item.img;
	person_name_GM.textContent = item.name;
});

//show bridesmaids
function showGroomsMan(GM) {
	const item = groomsMan[GM];
	image_GM.src = item.img;
	person_name_GM.textContent = item.name;
}
nextBtn_GM.addEventListener("click", function () {
	currentItem++;
	if (currentItem > groomsMan.length - 1) {
		currentItem = 0;
	}
	showGroomsMan(currentItem);
});

prevBtn_GM.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = groomsMan.length - 1;
	}
	showGroomsMan(currentItem);
});
