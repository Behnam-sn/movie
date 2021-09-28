<template>
	<div id="app" class="flex overflow-x-hidden">
		<navigator></navigator>
		<transition name="right" mode="out-in">
			<router-view></router-view>
		</transition>
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
#app {
	font-family: "Noto Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: $purple;
	color: $white;
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
