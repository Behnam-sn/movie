<template>
	<div class="flex justify-between w-full">
		<div class="w-full sm:w-1/2 xl:w-3/5">
			<div id="title" class="title flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425 425">
					<path
						d="M285.877 367.5C336.483 334.452 370 277.32 370 212.5c0-102.009-82.99-185-185-185S0 110.491 0 212.5s82.99 185 185 185h240v-30H285.877zM185 167.5c-24.814 0-45-20.187-45-45s20.186-45 45-45 45 20.187 45 45-20.186 45-45 45zm90 0c24.814 0 45 20.187 45 45s-20.186 45-45 45-45-20.187-45-45 20.186-45 45-45zm-135 45c0 24.813-20.187 45-45 45s-45-20.187-45-45 20.187-45 45-45 45 20.187 45 45zm45 45c24.814 0 45 20.187 45 45s-20.186 45-45 45-45-20.187-45-45 20.186-45 45-45z"
					/>
				</svg>
				<h1 class="text-4xl font-bold">Movie</h1>
			</div>
			<div class="scroll-container">
				<search></search>
				<category></category>
				<shelf :type="'movie'"></shelf>
			</div>
		</div>
		<show></show>
	</div>
</template>

<script>
import show from "../components/Show";
import search from "../components/Search";
import category from "../components/Category";
import shelf from "../components/Shelf";

export default {
	name: "movie",
	components: {
		show,
		search,
		category,
		shelf,
	},
};
</script>

<style lang="scss" scoped>
#title {
	height: 13vh;
}

svg {
	fill: $white;
	height: 2.5rem;
	width: 2.5rem;
	margin-right: 0.7rem;
}

.scroll-container {
	overflow-y: scroll;
	height: 87vh;
	padding-bottom: 5rem;

	&::-webkit-scrollbar {
		width: 5px;
		background-color: $purple;
	}

	&::-webkit-scrollbar-thumb {
		background-color: $white;
		border-radius: 10px;
	}
}
</style>
