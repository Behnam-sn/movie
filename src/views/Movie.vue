<template>
	<div class="container">
		<div class="detail">
			<div class="head">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425 425">
					<path
						d="M285.877 367.5C336.483 334.452 370 277.32 370 212.5c0-102.009-82.99-185-185-185S0 110.491 0 212.5s82.99 185 185 185h240v-30H285.877zM185 167.5c-24.814 0-45-20.187-45-45s20.186-45 45-45 45 20.187 45 45-20.186 45-45 45zm90 0c24.814 0 45 20.187 45 45s-20.186 45-45 45-45-20.187-45-45 20.186-45 45-45zm-135 45c0 24.813-20.187 45-45 45s-45-20.187-45-45 20.187-45 45-45 45 20.187 45 45zm45 45c24.814 0 45 20.187 45 45s-20.186 45-45 45-45-20.187-45-45 20.186-45 45-45z"
					/>
				</svg>
				<h1>Movie</h1>
			</div>
			<div class="scroll-container">
				<search></search>
				<category :type="type"></category>
			</div>
		</div>
		<show :type="type"></show>
	</div>
</template>

<script>
import show from "../components/Show";
import search from "../components/Search";
import category from "../components/Category";

export default {
	name: "movie",
	data() {
		return {
			type: "movie",
		};
	},
	components: {
		show,
		search,
		category,
	},
};
</script>
