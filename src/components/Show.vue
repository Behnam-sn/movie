<template>
	<div
		id="show"
		class="sm:w-1/2 xl:w-2/5 m-5 p-10 rounded-2xl overflow-x-hidden invisible sm:visible"
	>
		<transition name="right" mode="out-in">
			<div v-if="itemName != ''" :key="item.title">
				<div class="title">{{ item.title }}</div>
				<div class="categorys">{{ categorys }}</div>
				<div class="flex justify-between my-6">
					<div class="flex items-center">
						<div class="rate">{{ item.rates[0] }}</div>
						<div class="votes">{{ item.rates[1] }}</div>
					</div>
					<div class="flex items-center">
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
	font-size: 14px;
}

.title {
	color: darken($color: $purple, $amount: 15%);
	font-size: 30px;
	font-weight: bold;
}

.categorys {
	color: $gray;
	margin-top: 0.7rem;
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
}

.summary {
	margin-top: 3rem;
	text-align: center;
	color: #464589;
}
</style>
