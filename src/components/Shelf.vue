<template>
	<transition name="down" mode="out-in" appear>
		<div class="flex flex-wrap" :key="category">
			<div
				v-for="item in items"
				:key="item.title"
				@click="show(item.title)"
				class="max-w-sm cursor-pointer overflow-hidden relative rounded-xl mb-5 mr-5"
			>
				<clazy-load :src="item.thumbnail">
					<img :src="item.thumbnail" />
					<div class="preloader" slot="placeholder">
						<svg
							version="1.1"
							preserveAspectRatio="xMidYMid meet"
							class="w-full h-48"
						>
							<rect
								clip-path="url(#qslpq5b8klo)"
								x="0"
								y="0"
								rx="5"
								ry="5"
								width="100%"
								height="100%"
								style="fill: url('#8teiyp73ulg')"
							/>
							<defs>
								<clipPath id="qslpq5b8klo">
									<rect
										x="0"
										y="0"
										rx="5"
										ry="5"
										width="100%"
										height="100%"
									/>
								</clipPath>
								<linearGradient id="8teiyp73ulg">
									<stop
										offset="0.847846"
										stop-color="#f9f9f9"
										stop-opacity="1"
									>
										<animate
											attributeName="offset"
											values="-2; 1"
											dur="2s"
											repeatCount="indefinite"
										/>
									</stop>
									<stop
										offset="1.34785"
										stop-color="#ecebeb"
										stop-opacity="1"
									>
										<animate
											attributeName="offset"
											values="-1.5; 1.5"
											dur="2s"
											repeatCount="indefinite"
										/>
									</stop>
									<stop
										offset="1.84785"
										stop-color="#f9f9f9"
										stop-opacity="1"
									>
										<animate
											attributeName="offset"
											values="-1; 2"
											dur="2s"
											repeatCount="indefinite"
										/>
									</stop>
								</linearGradient>
							</defs>
						</svg>
					</div>
				</clazy-load>
				<div
					class="overlay transition-all absolute inset-0 opacity-40"
				></div>
				<div class="title absolute">{{ item.title }}</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "Shelf",
	props: ["type"],
	computed: {
		...mapGetters({
			category: "getCategory",
			movieByCategory: "movieByCategory",
			seriesByCategory: "seriesByCategory",
		}),
		items() {
			if (this.type === "movie") {
				return this.movieByCategory(this.category);
			} else {
				return this.seriesByCategory(this.category);
			}
		},
	},
	methods: {
		...mapMutations(["setCategory"]),
		show(itemName) {
			this.$router.push({ name: this.type, params: { name: itemName } });
		},
	},
};
</script>

<style lang="scss" scoped>
.overlay {
	background: rgba(0, 0, 0, 0.6);
	z-index: 1;

	&:hover {
		background: none;
	}
}
.title {
	color: #f2f2f2;
	font-weight: bold;
	bottom: 1rem;
	left: 1rem;
	z-index: 2;
}
</style>
