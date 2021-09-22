import Vue from "vue";
import Vuex from "vuex";
import movie from "./modules/movie";
import series from "./modules/series";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		movie,
		series,
	},
});
