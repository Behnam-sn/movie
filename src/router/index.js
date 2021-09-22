import Vue from "vue";
import VueRouter from "vue-router";
import Movie from "../views/Movie.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/movie",
		component: Movie,
		// component: () => import("../views/Movie.vue"),
	},
	{
		path: "/movie/:name",
		name: "movie",
		component: () => import("../views/Movie.vue"),
	},
	{
		path: "/series",
		component: () => import("../views/Series.vue"),
	},
	{
		path: "/series/:name",
		name: "series",
		component: () => import("../views/Series.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/About.vue"),
	},
	{ path: "/", redirect: { name: "movie" } },
];

const router = new VueRouter({
	routes,
});

export default router;
