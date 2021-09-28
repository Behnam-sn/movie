<template>
	<div id="about" class="w-full ml-0 m-6 p-10 rounded-3xl">
		<h1>About Page</h1>
		<div>
			<h2>Creator : Behnam</h2>
			<h2>
				Design and Insparion :
				<a
					href="https://dribbble.com/shots/6844561-Movie-App?utm_source=Clipboard_Shot&utm_campaign=Purrweb&utm_content=Movie%20App&utm_medium=Social_Share"
					class="underline"
					>Purrweb UX</a
				>
			</h2>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#about {
	font-weight: bold;
	background-color: darken($color: $purple, $amount: 7%);

	h1,
	h2 {
		margin-bottom: 2rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	a {
		color: #ffffff;
		transition: all 0.4s linear;

		&:hover {
			color: darken($color: #ffffff, $amount: 10%);
		}
	}
}
</style>
