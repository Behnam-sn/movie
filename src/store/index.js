import Vue from "vue";
import Vuex from "vuex";
import movie from "./modules/movie";
import series from "./modules/series";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		category: "All",
	},
	getters: {
		getCategory: (state) => state.category,
	},
	mutations: {
		setCategory(state, payload) {
			state.category = payload;
		},
	},
	actions: {},
	modules: {
		movie,
		series,
	},
});
