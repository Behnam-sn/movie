<template>
	<div
		id="show"
		class="sm:w-1/2 xl:w-2/5 m-5 p-10 rounded-2xl text-base overflow-x-hidden hidden sm:block"
	>
		<transition name="right" mode="out-in">
			<div v-if="itemName != ''" :key="item.title">
				<div class="title text-3xl font-bold">{{ item.title }}</div>
				<div class="categorys mt-4">{{ categorys }}</div>
				<div class="flex justify-between my-6">
					<div class="flex items-center">
						<div class="rate text-2xl font-bold mr-4">
							{{ item.rates[0] }}
						</div>
						<div class="votes">{{ item.rates[1] }}</div>
					</div>
					<div class="flex items-center">
						<div class="year text-xl font-bold mr-4">
							{{ item.year }}
						</div>
						<div class="duration">{{ item.duration }}</div>
					</div>
				</div>
				<div>
					<clazy-load :src="images[0]">
						<img
							:src="images[0]"
							class="cover w-64 h-auto rounded-2xl"
						/>
						<div class="preloader" slot="placeholder">
							<svg
								role="img"
								aria-labelledby="loading-aria"
								viewBox="0 0 1 1"
								preserveAspectRatio="none"
								class="w-64 h-96"
							>
								<title id="loading-aria">Loading...</title>
								<rect
									x="0"
									y="0"
									width="100%"
									height="100%"
									clip-path="url(#clip-path)"
									style='fill: url("#fill");'
								></rect>
								<defs>
									<clipPath id="clip-path">
										<rect
											x="0"
											y="0"
											rx="0"
											ry="0"
											width="100%"
											height="100%"
										/>
									</clipPath>
									<linearGradient id="fill">
										<stop
											offset="0.599964"
											stop-color="#f3f3f3"
											stop-opacity="1"
										>
											<animate
												attributeName="offset"
												values="-2; -2; 1"
												keyTimes="0; 0.25; 1"
												dur="2s"
												repeatCount="indefinite"
											></animate>
										</stop>
										<stop
											offset="1.59996"
											stop-color="#ecebeb"
											stop-opacity="1"
										>
											<animate
												attributeName="offset"
												values="-1; -1; 2"
												keyTimes="0; 0.25; 1"
												dur="2s"
												repeatCount="indefinite"
											></animate>
										</stop>
										<stop
											offset="2.59996"
											stop-color="#f3f3f3"
											stop-opacity="1"
										>
											<animate
												attributeName="offset"
												values="0; 0; 3"
												keyTimes="0; 0.25; 1"
												dur="2s"
												repeatCount="indefinite"
											></animate>
										</stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
					</clazy-load>
				</div>
				<div class="summary mt-16">{{ item.summary }}</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "show",
	data: () => ({
		itemName: "",
	}),
	computed: {
		...mapGetters({
			movieByName: "movieByName",
			seriesByName: "seriesByName",
		}),
		currentRouteName() {
			return this.$route.name;
		},
		item() {
			let str = [];
			if (this.currentRouteName === "movie") {
				str = this.movieByName(this.itemName);
			} else {
				str = this.seriesByName(this.itemName);
			}
			return str[0];
		},
		categorys() {
			return this.item.categorys.join(", ");
		},
		images() {
			return this.item.images;
		},
	},
	watch: {
		$route(to) {
			this.itemName = to.params.name;
		},
	},
};
</script>

<style lang="scss" scoped>
#show {
	color: $black;
	background-color: $white;
}
.title {
	color: darken($color: $purple, $amount: 15%);
}
.year,
.rate {
	color: darken($color: $purple, $amount: 5%);
}
.categorys,
.votes,
.duration {
	color: $gray;
}
.summary {
	color: #464589;
}
</style>
