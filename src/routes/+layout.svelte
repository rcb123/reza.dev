<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import '../app.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex flex-col md:flex-row">
	<div
		class="md:fixed flex flex-row flex-none md:flex-col bg-white max-md:justify-between md:min-h-screen pt-4 pb-4 md:pt-10 md:pb-0 border-b md:border-r border-cloudGray/50 select-none"
	>
		<section class="flex flex-row md:flex-col px-5 lg:px-8 md:pb-8 font-semibold">
			<a href="/">
				<h1
					class="text-xl sm:text-2xl hover:underline transition-all inline md:block md:whitespace-pre-line"
				>
					{'Reza\nBanankhah'}
				</h1>
			</a>
		</section>
		<section
			class="flex flex-col gap-2 md:border-t md:border-cloudGray/50 px-5 lg:px-8 md:py-8 justify-center"
		>
			<h2 class="text-xs tracking-wider text-cloudGray uppercase max-md:hidden">Navigation</h2>
			<nav
				class="flex flex-row md:flex-col gap-4 md:gap-1 text-lg sm:text-xl md:text-sm font-medium"
			>
				<a class="hover:text-black/60 transition-colors" href="/">Home</a>
				<a class="hover:text-black/60 transition-colors" href="/resume">Resume</a>
			</nav>
		</section>
		<section
			class="flex flex-col gap-2 border-t border-cloudGray/50 px-5 lg:px-8 py-8 max-md:hidden"
		>
			<h2 class="text-xs tracking-wider text-cloudGray uppercase">Contact</h2>
			<nav class="text-sm flex flex-col gap-1">
				<a class="hover:text-black/60 transition-colors" href="mailto:rbanankhah@gmail.com">
					Email
				</a>
				<a
					class="hover:text-black/60 transition-colors"
					href="https://www.linkedin.com/in/rbanankhah/"
				>
					LinkedIn
				</a>
				<a class="hover:text-black/60 transition-colors" href="https://github.com/rcb123">
					GitHub
				</a>
			</nav>
		</section>
	</div>
	<div class="flex flex-col w-full md:pl-[172px] lg:pl-[196px]">
		<slot />
	</div>
</div>
