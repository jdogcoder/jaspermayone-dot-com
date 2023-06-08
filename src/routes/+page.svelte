<header>
	<title>Single Feather | Under Construction</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</header>
<div class="bg">
	<main>
		<h1>🚧 Site Under Construction... 🚧</h1>
		<img
			src="https://s3.singlefeather.com/cdn/gifs/minions-under-construction.gif"
			alt="Minions Engineering GIF"
			width={500}
			height={277}
		/>
		<div>
			<p>
				Sorry for the inconvenience but we&rsquo;re curently redesigning our website! If you need to
				you can always <a href="mailto:webmaster@singlefeather.com">contact us</a>.
			</p>
			<p>~ The Web & Development Team @ Single Feather LLC</p>
		</div>
		<footer>© 2023 Single Feather LLC ©</footer>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	header {
		background: #333;
		color: rgb(100, 230, 170);
		padding: 10px;
		font-size: 1.2rem;
	}
	main {
		color: black;
		font-size: 1rem;
		text-align: center;
		height: 100%;
		margin: 0;
	}

	.bg {
		background: #f09819 no-repeat center center fixed; /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #edde5d, #f09819) no-repeat center center fixed; /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #edde5d, #f09819) no-repeat center center fixed; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		/* Set rules to fill background */
		min-height: 100%;
		min-width: 1024px;

		/* Set up proportionate scaling */
		width: 100%;
		height: auto;

		/* Set up positioning */
		position: fixed;
		top: 0;
		left: 0;
	}

	@media screen and (max-width: 1024px) {
		/* Specific to this particular image */
		.bg {
			left: 50%;
			margin-left: -512px; /* 50% */
		}
	}

	footer {
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: 0.9rem;
		display: flex;
		padding: 10px;
	}
</style>
