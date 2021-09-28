<template>
	<div>
		<h1 class="text-xl font-bold mt-5">Browse by category</h1>
		<div class="flex my-4 overflow-x-hidden">
			<div
				v-for="item in categorysList"
				:key="item"
				@click="setCategory(item)"
				class="category px-5 py-2 mr-2 rounded-full cursor-pointer"
				:class="{ active: category === item }"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "category",
	data: () => ({
		categorysList: ["All", "Action", "Fantasy", "Romance"],
	}),
	computed: {
		...mapGetters({
			category: "getCategory",
		}),
	},
	methods: {
		...mapMutations(["setCategory"]),
	},
};
</script>

<style lang="scss" scoped>
.category {
	transition: 0.4s ease-in-out;

	&:hover {
		background-color: darken($color: $purple, $amount: 10);
	}
}
.active {
	background-color: $white !important;
	color: $black;
}
</style>
