<template>
	<div class="container">
		<div id="about">
			<h1>About Page</h1>
			<div>
				<h2>Creator : Behnam</h2>
				<h2>
					Design and Insparion :
					<a
						href="https://dribbble.com/shots/6844561-Movie-App?utm_source=Clipboard_Shot&utm_campaign=Purrweb&utm_content=Movie%20App&utm_medium=Social_Share"
						>Purrweb UX</a
					>
				</h2>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#about {
	width: 100%;
	padding: 2rem;
	margin: 2rem;
	margin-left: 0;
	border-radius: 25px;
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
		text-decoration: none;
		background-color: transparent;
		transition: all 0.4s linear;
	}

	a:hover {
		color: darken($color: #ffffff, $amount: 10%);
	}
}
</style>
