<script>
	import { page } from '$app/stores';
	import '../app.css';
	import banner from '$lib/assets/maeevick-banner.webp';
</script>

<svelte:head>
	<meta name="author" content="Aurel Estoup" />
	<meta name="theme-color" content="#ff6100" />
</svelte:head>

<main class="min-h-screen flex flex-col items-center">
	<div class="w-4/5 md:w-3/5 flex flex-col items-center">
		<img
			class="mt-20"
			src={banner}
			alt="the banner with the USP in french : 'ton Product-Market Fit avec Fluidité et Sérénité!', the url : 'www.maeevick.com' and the main services :'Coach SaaS/MicroSaaS, CTPO as a Service and Newsletter'"
		/>

		<slot />

		<hr class="w-full my-10" />
	</div>
</main>

<footer class="mb-10 text-center">
	Made with Svelte and &#129505; by <a href="https://github.com/Maeevick/" target="_blank"
		>Maeevick</a
	>
</footer>

<style lang="postcss">
	:global(html) {
	}
</style>
