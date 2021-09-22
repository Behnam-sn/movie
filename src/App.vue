<template>
	<div id="app">
		<div class="flex-container">
			<navigator></navigator>
			<transition name="right" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
import navigator from "./components/Navigator";

export default {
	components: {
		navigator,
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	font-family: "Noto Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100vw;
	height: 100vh;
	background-color: $purple;
	color: $white;
	overflow-x: hidden;
}

// movie & series

.container {
	width: 92vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.flex-container {
	display: flex;
	flex-direction: row;
}

.detail {
	width: 60%;
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

.head {
	height: 13vh;
	font-size: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;

	svg {
		fill: $white;
		height: 2.5rem;
		width: 2.5rem;
		margin-right: 0.7rem;
	}
}

.headline {
	font-size: 20px;
	margin-top: 1.5rem;
}

.category {
	display: flex;
	flex-direction: row;
	font-size: 12px;
	margin-top: 1rem;
	margin-bottom: 1rem;

	div {
		cursor: pointer;
		margin-right: 0.6rem;
		padding: 0.5rem 1rem;
		border-radius: 25px;
		transition: 0.4s ease-in-out;

		&:hover {
			background-color: darken($color: $purple, $amount: 10);
		}
	}

	.active {
		background-color: $white;
		color: $black;

		&:hover {
			background-color: $white;
		}
	}
}

// animation
.down-enter-active {
	animation: fadeDown 0.4s ease-in-out;
}
.down-leave-active {
	animation: fadeDown 0.4s ease-in-out reverse;
}

@keyframes fadeDown {
	0% {
		transform: translateY(3.5rem);
		opacity: 0;
	}
	100% {
		transform: translateY(0rem);
		opacity: 1;
	}
}

.right-enter-active {
	animation: fadeRight 0.4s ease-in-out;
}
.right-leave-active {
	animation: fadeRight 0.4s ease-in-out reverse;
}

@keyframes fadeRight {
	0% {
		transform: translateX(5rem);
		opacity: 0;
	}
	100% {
		transform: translateX(0rem);
		opacity: 1;
	}
}
</style>
