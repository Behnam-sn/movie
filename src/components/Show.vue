<template>
	<div id="show">
		<transition name="right" mode="out-in">
			<div v-if="name != ''" :key="item.title">
				<div class="title">{{ item.title }}</div>
				<div class="categorys">{{ categorys }}</div>
				<div class="show-info">
					<div class="flex-container">
						<div class="rate">{{ item.rates[0] }}</div>
						<div class="votes">{{ item.rates[1] }}</div>
					</div>
					<div class="flex-container">
						<div class="year">{{ item.year }}</div>
						<div class="duration">{{ item.duration }}</div>
					</div>
				</div>
				<div class="images">
					<img :src="images[0]" class="cover" />
				</div>
				<div class="summary">{{ item.summary }}</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "show",
	props: ["type"],
	data() {
		return {
			name: "",
		};
	},
	computed: {
		item() {
			let str = [];
			if (this.type === "movie") {
				str = this.$store.getters.movieByName(this.name);
			} else {
				str = this.$store.getters.seriesByName(this.name);
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
			this.name = to.params.name;
		},
	},
};
</script>

<style lang="scss">
#show {
	width: 40%;
	margin: 1rem;
	padding: 2rem;
	border-radius: 25px;
	color: $black;
	background-color: $white;
	font-size: 14px;
	overflow-x: hidden;

	.title {
		color: darken($color: $purple, $amount: 15%);
		font-size: 30px;
		font-weight: bold;
	}

	.categorys {
		color: $gray;
		margin-top: 0.7rem;
	}

	.show-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 2rem 0;

		.flex-container {
			align-items: center;
		}
	}

	.year,
	.rate {
		color: darken($color: $purple, $amount: 5%);
		font-weight: bold;
	}

	.rate {
		font-size: 23px;
	}

	.year {
		font-size: 15px;
	}

	.votes,
	.duration {
		color: $gray;
		margin-left: 1rem;
	}

	.votes {
		font-size: 16px;
	}

	.images {
		display: flex;
		flex-direction: row;

		img {
			border-radius: 12px;
		}

		.cover {
			width: 40%;
			height: auto;

			margin-right: 1rem;
		}

		.wide {
			width: 100%;
			height: auto;
		}
	}

	.summary {
		margin-top: 3rem;
		text-align: center;
		color: #464589;
	}
}
</style>
