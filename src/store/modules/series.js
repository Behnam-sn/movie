const state = {
	series: [
		{
			title: "Peaky Blinders",
			season: "4",
			episode: "31",
			categorys: ["Crime", "Drama"],
			rates: ["8.8", "218,360"],
			year: "2013 - Now",
			duration: "1h",
			summary:
				"A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
			thumbnail: require("@/assets/img/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpeg"),
			],
		},
		{
			title: "Game of Thrones",
			season: "8",
			episode: "73",
			categorys: ["Action", "Adventure", "Drama"],
			rates: ["9.4", "1,582,327"],
			year: "2011 - 2019",
			duration: "57min",
			summary:
				"Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
			thumbnail: require("@/assets/img/MV5BZDk2YzAwZDAtNjhmOS00MWY1LWFhMzgtNWVkNTM1NmJlMGMwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_SY1000_CR0,0,701,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpeg"),
			],
		},
		{
			title: "Stranger Things",
			season: "3",
			episode: "25",
			categorys: ["Drama", "Fantasy", "Horror"],
			rates: ["8.8", "653,492"],
			year: "2016 - Now",
			duration: "51min",
			summary:
				"When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
			thumbnail: require("@/assets/img/MV5BOWI5ODc5MmYtYTU0Yi00MzVmLWEzZWItMWNiM2RiOTg0OGQzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,675,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMjQ5ODIyODg5Ml5BMl5BanBnXkFtZTgwOTI4Njk5MzI@._V1_SY1000_CR0,0,668,1000_AL_.jpeg"),
			],
		},
		{
			title: "13 Reasons Why",
			season: "3",
			episode: "41",
			categorys: ["Drama", "Mystery"],
			rates: ["7.9", "221,378"],
			year: "2017 - Now",
			duration: "1h",
			summary:
				"Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
			thumbnail: require("@/assets/img/MV5BYmRhZjkyMjEtNjRkMS00MDQ0LTg2NGMtMTQ3ZjE0NjJmMjM2L2ltYWdlXkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,675,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BOTcxMGY2NTktNWYxYS00NDJhLTkwNzAtMzg2NGM4YzExM2QwXkEyXkFqcGdeQXVyNzQ0MzY1MTA@._V1_.jpeg"),
			],
		},
		{
			title: "Arrow",
			season: "7",
			episode: "170",
			categorys: ["Action", "Adventure", "Crime"],
			rates: ["7.6", "383,780"],
			year: "2012 - Now",
			duration: "42min",
			summary:
				"Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
			thumbnail: require("@/assets/img/MV5BZDc5N2M3OTMtYmJmMy00MzczLWJmMTktZGNkYzlhNDczZWEzXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SY1000_CR0,0,665,1000_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTQ3OTc3OTg4MV5BMl5BanBnXkFtZTgwMjE5MTIxMDI@._V1_SY1000_CR0,0,666,1000_AL_.jpeg"),
			],
		},
		{
			title: "The Flash",
			season: "6",
			episode: "125",
			categorys: ["Action", "Adventure", "Drama"],
			rates: ["7.8", "280,881"],
			year: "2014 - Now",
			duration: "43min",
			summary:
				"After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.",
			thumbnail: require("@/assets/img/MV5BZGRhYzg2NmMtYWJiNy00NGM3LTljOWYtNWRiYmQzMjBjYTQ2XkEyXkFqcGdeQXVyOTE1OTM2MTk@._V1_SY1000_SX800_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BMTQ5MzY5ODE5M15BMl5BanBnXkFtZTgwNzU4OTM1MjE@._V1_.jpeg"),
			],
		},
		{
			title: "Big Little Lies",
			season: "2",
			episode: "14",
			categorys: ["Crime", "Drama", "Mystery"],
			rates: ["8.6", "122,175"],
			year: "2017 - Now",
			duration: "1h",
			summary:
				"The apparently perfect lives of upper-class mothers, at a prestigious elementary school, unravel to the point of murder when a single-mother moves to their quaint Californian beach town.",
			thumbnail: require("@/assets/img/MV5BMjEzNzc3NzA0OF5BMl5BanBnXkFtZTgwMzM5NDY0MTI@._V1_c.jpeg"),
			images: [
				require("@/assets/img/MV5BZmNjYzdjN2ItOTBlNy00Mjc0LWE4YmMtYTQ4ZjQzNTMyNDc4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpeg"),
			],
		},
		{
			title: "Breaking Bad",
			season: "5",
			episode: "62",
			categorys: ["Crime", "Drama", "Thriller"],
			rates: ["9.5", "1,249,953"],
			year: "2008 - 2013",
			duration: "49min",
			summary:
				"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			thumbnail: require("@/assets/img/MV5BNTEwMDhmNmUtNGJmNi00NGUwLTkxOWQtNzI1NDUwZTFkMThkXkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpeg"),
			images: [
				require("@/assets/img/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpeg"),
			],
		},
		{
			title: "Legion",
			season: "3",
			episode: "27",
			categorys: ["Action", "Drama", "Sci-Fi"],
			rates: ["8.3", "75,202"],
			year: "2017 - 2019",
			duration: "1h",
			summary:
				"David Haller is a troubled young man diagnosed as schizophrenic, but after a strange encounter, he discovers special powers that will change his life forever.",
			thumbnail: require("@/assets/img/MV5BMGFiYjhjOWUtMTk3NS00OTY3LWFkOTYtMjg3NWVhZTYxZjdiXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_SX800_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BNmYxMjM5MzMtNTczZC00MGM3LTk2MTQtZmNmMTg4ZDI4ZTkxXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpeg"),
			],
		},
		{
			title: "The Punisher",
			season: "2",
			episode: "26",
			categorys: ["Action", "Adventure", "Crime"],
			rates: ["8.6", "155,081"],
			year: "2017 - 2019",
			duration: "53min",
			summary:
				"After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as 'The Punisher,' with only one goal in mind: to avenge them.",
			thumbnail: require("@/assets/img/MV5BMjQzMTE1NjQwNl5BMl5BanBnXkFtZTgwNTM0NjM5MjI@._V1_SY1000_SX655_AL_c.jpeg"),
			images: [
				require("@/assets/img/MV5BZjI4MzQ1ZDQtZTU5NC00OTc2LThhNjUtYjQ0NzBmY2Y4MjdkXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SY1000_CR0,0,676,1000_AL_.jpeg"),
			],
		},
	],
};

const getters = {
	series: (state) => {
		return state.series;
	},
	seriesByCategory: (state) => (category) => {
		if (category === "All") {
			return state.series;
		} else {
			return state.series.filter((series) => {
				if (series.categorys.includes(category)) {
					return series;
				}
			});
		}
	},
	seriesByName: (state) => (name) => {
		return state.series.filter((series) => {
			if (series.title == name) {
				return series;
			}
		});
	},
};

export default {
	state,
	getters,
};
