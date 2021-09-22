const state = {
	movie: [
		{
			title: "Avengers: Endgame",
			categorys: ["Action", "Adventure", "Sci-Fi"],
			rates: ["8.6", "541,695"],
			year: "2019",
			duration: "3h 1m",
			summary:
				"Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers",
			thumbnail: require("@/assets/img/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpeg"),
			],
		},
		{
			title: "Captain Marvel",
			categorys: ["Action", "Adventure", "Sci-Fi"],
			rates: ["7", "352,161"],
			year: "2019",
			duration: "2h 5m",
			summary:
				"Captain Marvel is an extratesrrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls.",
			thumbnail: require("@/assets/img/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpeg"),
			],
		},
		{
			title: "The Lion King",
			categorys: ["Drama", "Adventure", "Animation"],
			rates: ["7.1", "93,887"],
			year: "2019",
			duration: "1h 58m",
			summary:
				"Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa.",
			thumbnail: require("@/assets/img/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SY1000_CR0,0,674,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpeg"),
			],
		},
		{
			title: "Black Panther",
			categorys: ["Action", "Adventure", "Sci-Fi"],
			rates: ["7.3", "536,837"],
			year: "2018",
			duration: "2h 15m",
			summary:
				"fter the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king.",
			thumbnail: require("@/assets/img/MV5BMjQ1MDYzMTM2OV5BMl5BanBnXkFtZTgwODYzODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpeg"),
			],
		},
		{
			title: "Mission: Impossible – Fallout",
			categorys: ["Action", "Adventure", "Thriller"],
			rates: ["7.8", "244,745"],
			year: "2018",
			duration: "2h 28m",
			summary:
				"Ethan Hunt and the IMF team join forces with CIA assassin August Walker to prevent a disaster of epic proportions.",
			thumbnail: require("@/assets/img/MV5BMjIxYTUzMDYtNGFiNS00NTJkLWFjYWUtNzdjNDRiZmNjYmMzXkEyXkFqcGdeQXVyOTAyMTM4MTk@._V1_SY1000_CR0,0,666,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMjVmNzM2MWUtYzY3YS00NDc2LWI1MWUtNDk3NmMyNDEwNjA3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,699,1000_AL_.jpeg"),
			],
		},
		{
			title: "Deadpool 2",
			categorys: ["Action", "Adventure", "Comedy"],
			rates: ["7.7", "410,823"],
			year: "2018",
			duration: "2h 14m",
			summary:
				"Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.",
			thumbnail: require("@/assets/img/MV5BY2I0NGE0ODEtZDI5NC00ZTc0LTllZTItMDQ0YTVmZjQzZTBlXkEyXkFqcGdeQXVyNzc1MTA5OTY@._V1_c.jpeg"),
			images: [
				require("@/assets/img/MV5BOWExNDFiOGItMWRmOC00ODkwLWIxMjctODk2YjdjYTQ5YTc3XkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SY1000_CR0,0,676,1000_AL_.jpeg"),
			],
		},
		{
			title: "Avengers: Infinity War",
			categorys: ["Action", "Adventure", "Sci-Fi"],
			rates: ["8.5", "701,879"],
			year: "2018",
			duration: "2h 40m",
			summary:
				"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
			thumbnail: require("@/assets/img/MV5BMTU4NTM4ODQ2MF5BMl5BanBnXkFtZTgwMDE1OTQzNTM@._V1_SY1000_CR0,0,707,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpeg"),
			],
		},
		{
			title: "Me Before You",
			categorys: ["Drama", "Romance"],
			rates: ["7.4", "179,801"],
			year: "2016",
			duration: "1h 51m",
			summary:
				"A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
			thumbnail: require("@/assets/img/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SY1000_CR0,0,674,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SY1000_CR0,0,674,1000_AL_.jpeg"),
			],
		},
		{
			title: "The Fault in Our Stars",
			categorys: ["Drama", "Romance"],
			rates: ["7.7", "319,792"],
			year: "2014",
			duration: "2h 6min",
			summary:
				"Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
			thumbnail: require("@/assets/img/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwNzQ3OTMxMTE@._V1_SY1000_CR0,0,675,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwNzQ3OTMxMTE@._V1_SY1000_CR0,0,675,1000_AL_.jpeg"),
			],
		},
		{
			title: "John Wick",
			categorys: ["Action", "Crime", "Thriller"],
			rates: ["7.4", "472,435"],
			year: "2014",
			duration: "1h 41min",
			summary:
				"An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
			thumbnail: require("@/assets/img/MV5BMTU4MTg5OTc3NV5BMl5BanBnXkFtZTgwMDI1MTc2MjE@._V1_SY1000_CR0,0,674,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SY1000_CR0,0,666,1000_AL_.jpeg"),
			],
		},
	],
};
const getters = {
	movie: (state) => {
		return state.movie;
	},
	movieByCategory: (state) => (category) => {
		if (category === "All") {
			return state.movie;
		} else {
			return state.movie.filter((movie) => {
				if (movie.categorys.includes(category)) {
					return movie;
				}
			});
		}
	},
	movieByName: (state) => (name) => {
		return state.movie.filter((movie) => {
			if (movie.title == name) {
				return movie;
			}
		});
	},
};

export default {
	state,
	getters,
};
