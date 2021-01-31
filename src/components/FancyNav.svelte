<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Hjem</a></li>
		<li><a aria-current="{segment === 'oppgave1' ? 'page' : undefined}" href="oppgave1">oppgave 1</a></li>
		<li><a aria-current="{segment === 'oppgave2' ? 'page' : undefined}" href="oppgave2">oppgave 2</a></li>
		<li><a aria-current="{segment === 'oppgave3' ? 'page' : undefined}" href="oppgave3">oppgave 3</a></li>
		<li><a aria-current="{segment === 'oppgave4' ? 'page' : undefined}" href="oppgave4">oppgave 4</a></li>
		<li><a aria-current="{segment === 'oppgave5' ? 'page' : undefined}" href="oppgave5">oppgave 5</a></li>
	</ul>
</nav>
