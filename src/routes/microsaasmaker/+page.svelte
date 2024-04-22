<script>
	import newsletter_logo from '$lib/assets/microsaas-maker.webp';
</script>

<svelte:head>
	<title>MicroSaaS Maker</title>
	<meta
		name="keywords"
		content="Newsletter, MicroSaaS, Product Management, UX Design, Tech, Marketing, Solopreneurs"
	/>
	<meta
		name="description"
		property="og:description"
		content="Je t'aide chaque semaine avec un nouvel épisode de ma newsletter à créer, lancer et vivre de ton MicroSaaS."
	/>
</svelte:head>

<h1>
	<p class="text-4xl text-center mt-10 md:mt-20">🧢 Code ta liberté, lance ton SaaS !</p>
	<p class="text-lg md:text-xl text-center italic font-bold mt-5">
		👉 Des tips Mindset, Product, Tech et Marketing chaque semaine, pour t'aider à créer, lancer et
		scaler ton MicroSaaS !
	</p>
</h1>
<hr class="w-full my-10" />
<h2 id="newsletter">
	<div
		class="bg-transparent border border-maeevick-orange shadow shadow-maeevick-cta transition ease-in-out delay-150 hover:shadow-none"
	>
		<a href="https://maeevick.substack.com/" target="_blank" class="flex p-4 items-center">
			<div class="flex flex-col">
				<div class="flex flex-row items-center justify-center">
					<img
						src={newsletter_logo}
						width="50"
						height="50"
						alt="the logo of MicroSaaS Maker, Newsletter"
					/>
					<span class="text-lg md:text-xl px-4 font-semibold underline text-center">
						MicroSaaS Maker, La Newletter
					</span>
				</div>
				<span class="p-4 italic text-center">
					Abonne-toi pour rejoindre des centaines de SoloTech qui craftent leur liberté.
				</span>
			</div>
		</a>
	</div>
</h2>
