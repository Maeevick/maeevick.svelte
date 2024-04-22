<script>
	import newsletter_logo from '$lib/assets/microsaas-maker.webp';
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
</svelte:head>

<h1>
	<p class="text-4xl text-center mt-10 md:mt-20">
		ton <strong>Product-Market Fit</strong> avec
		<strong>Fluidité</strong> et <strong>Sérénité</strong> !
	</p>
	<p class="text-lg md:text-xl text-center italic font-bold mt-5">
		CTPO as a Service · Coach · Newsletter
	</p>
</h1>
<hr class="w-full my-10" />
<em class="text-xl text-center">A venir... en attendant abonnes-toi à la newsletter 👇</em>
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
