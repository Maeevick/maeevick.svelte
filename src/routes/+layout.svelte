<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Maeevick</title>
	<meta
		name="keywords"
		content="Coach, SaaS, MicroSaaS,CTPO as a Service, Product-Market Fit, Go-To-Market, Product Management, User Experience, Growth Marketing, Extreme Programming, Software Craftsmanship, Data Management"
	/>
	<meta
		name="description"
		property="og:description"
		content="Je t'aide avec ton 'Software as a Service' (SaaS/MicroSaaS) pour atteindre ton Product-Market Fit avec Fluidité et Sérénité ! On choisit l'accompagnement qui te convient le mieux en fonction de ton besoin et de ton contexte : Coaching, CTPO as a Service, Contenu/Newsletter, Formation à la demande..."
	/>
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
