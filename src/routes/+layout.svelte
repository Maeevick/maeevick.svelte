<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta name="author" content="Aurel Estoup" />
	<meta name="theme-color" content="#ff6100" />
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/microsaasmaker">MicroSaaS Maker</a>
</nav>

<hr />

<slot />

<hr />
<footer>
	Made with Svelte and &#129505; by <a href="https://github.com/Maeevick/" target="_blank"
		>Maeevick</a
	>
</footer>
