<template>
	<transition name="down" mode="out-in" appear>
		<div
			class="grid gap-5 grid-cols-1 lg:grid-cols-2 sm:pr-5 xl:pr-28 2xl:pr-52"
			:key="category"
		>
			<div
				v-for="item in items"
				:key="item.title"
				@click="show(item.title)"
				class="cursor-pointer overflow-hidden relative rounded-xl"
			>
				<clazy-load :src="item.thumbnail">
					<img class="w-full h-auto" :src="item.thumbnail" />
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
					class="overlay z-10 transition-all absolute inset-0 opacity-50"
				></div>
				<div
					class="z-20 text-gray-50 font-bold absolute bottom-5 left-5"
				>
					{{ item.title }}
				</div>
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

	&:hover {
		background: none;
	}
}
</style>
