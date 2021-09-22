<template>
	<div>
		<h1 class="headline">Browse by category</h1>
		<div class="category">
			<div
				@click="changeCategory('All')"
				:class="{ active: category === 'All' }"
			>
				All
			</div>
			<div
				@click="changeCategory('Action')"
				:class="{ active: category === 'Action' }"
			>
				Action
			</div>
			<div
				@click="changeCategory('Fantasy')"
				:class="{ active: category === 'Fantasy' }"
			>
				Fantasy
			</div>
			<div
				@click="changeCategory('Romance')"
				:class="{ active: category === 'Romance' }"
			>
				Romance
			</div>
		</div>
		<transition name="down" mode="out-in" appear>
			<div class="list-container" :key="category">
				<div
					v-for="item in items"
					:key="item.title"
					@click="show(item.title)"
					class="item"
				>
					<clazy-load :src="item.thumbnail">
						<img :src="item.thumbnail" />
						<div class="preloader" slot="placeholder">
							<svg
								version="1.1"
								preserveAspectRatio="xMidYMid meet"
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
					<div class="overlay"></div>
					<div class="name">{{ item.title }}</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "category",
	props: ["type"],
	data() {
		return {
			category: "All",
		};
	},
	computed: {
		items() {
			if (this.type === "movie") {
				return this.$store.getters.movieByCategory(this.category);
			} else {
				return this.$store.getters.seriesByCategory(this.category);
			}
		},
	},
	methods: {
		show(itemName) {
			this.$router.push({ name: this.type, params: { name: itemName } });
		},
		changeCategory(val) {
			this.category = val;
		},
	},
};
</script>

<style lang="scss">
.list-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	padding-right: 9.5rem;
}

.item {
	cursor: pointer;
	overflow: hidden;
	position: relative;
	border-radius: 15px;
	height: 97%;

	img {
		width: 100%;
		height: auto;
		z-index: 0;
	}

	svg {
		width: 100%;
		height: auto;
	}

	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		opacity: 0.4;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}

	.name {
		position: absolute;
		color: #f2f2f2;
		font-weight: bold;
		bottom: 1rem;
		left: 1rem;
		z-index: 2;
	}
}
</style>
