<script lang="ts">
	import profile_picture_lowres from '../assets/images/profile_pic/profile_pic_lowres.webp';
	import profile_picture_medres from '../assets/images/profile_pic/profile_pic_medres.webp';
	import profile_picture_hires from '../assets/images/profile_pic/profile_pic_hires.webp';

	import roblox from '../assets/images/roblox/roblox.svg';

	import pennymac from '../assets/images/pennymac/pennymac.svg';

	import rapideye from '../assets/images/rapideye/rapideye.svg';

	import activ_256 from '../assets/images/activ/activ_256.webp';
	import activ_512 from '../assets/images/activ/activ_512.webp';
	import activ_768 from '../assets/images/activ/activ_768.webp';
	import activ_1024 from '../assets/images/activ/activ_1024.webp';

	import nowanalytics from '../assets/images/nowanalytics/nowanalytics.webp';

	import sveltype_256 from '../assets/images/sveltype/sveltype_256.webp';
	import sveltype_512 from '../assets/images/sveltype/sveltype_512.webp';
	import sveltype_768 from '../assets/images/sveltype/sveltype_768.webp';
	import sveltype_1024 from '../assets/images/sveltype/sveltype_1024.webp';

	import media_converter_256 from '../assets/images/media_converter/media_converter_256.webp';
	import media_converter_512 from '../assets/images/media_converter/media_converter_512.webp';
	import media_converter_768 from '../assets/images/media_converter/media_converter_768.webp';
	import media_converter_1024 from '../assets/images/media_converter/media_converter_1024.webp';

	import ProjectCard from '../components/ProjectCard.svelte';
</script>

<span class="select-none">
	<section
		class="mx-auto flex flex-col justify-center gap-6 md:gap-4 pt-10 pb-4 px-6 md:px-8 lg:px-10 text-black"
	>
		<div class="flex items-center justify-between">
			<div class="relative w-fit">
				<picture>
					<source srcset={profile_picture_hires} media="(min-width: 2048px)" />
					<source srcset={profile_picture_medres} media="(min-width: 1024px)" />
					<img
						src={profile_picture_lowres}
						alt="Reza Banankhah standing on a beach, with waves in the background"
						class="!z-10 rounded-[20%] size-32 md:size-40 lg:size-48 object-cover"
					/>
				</picture>
			</div>
			<!-- <a
				href="mailto:rbanankhah@gmail.com"
				class="flex items-center justify-between space-x-2 group"
			>
				<div class="h-0.5 w-4 bg-black sm:w-8 md:w-10 group-hover:bg-blue-600 transition-colors" />
				<div
					class="text-sm font-semibold capitalize text-black ease-in-out group-hover:text-blue-600 transition-colors md:text-lg xl:text-xl"
				>
					Available for internship
				</div>
			</a> -->
		</div>
		<div class="flex flex-col gap-2 md:gap-4">
			<h1 class="text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl">Hi I'm Reza Banankhah</h1>
			<p class="text-lg sm:text-xl md:text-3xl">
				Passionate Software Engineer, AI Enthusiast, & Aspiring Tech Innovator.
			</p>
			<p class="text-base text-zinc-500 sm:text-lg md:text-xl">
				Merging my love for software development with an excitement for AI exploration, I approach
				each project ready to learn and innovate, driven by the belief that technology can create a
				better future.
			</p>
		</div>
	</section>
	<section class="flex flex-col border-t border-cloudGray/50 px-6 md:px-8 lg:px-10 pt-4">
		<h1 class="text-lg text-cloudGray tracking-wider uppercase">Work</h1>
		<div class="container columns-1 sm:columns-2 lg:columns-3 gap-4 py-8">
			<ProjectCard
				company="Roblox"
				year="2025"
				role="Software Engineer, Creator Analytics"
				link="https://corp.roblox.com/"
			>
				<picture>
					<img src={roblox} alt="Roblox logo" class="w-full h-full object-contain" />
				</picture>
			</ProjectCard>
			<ProjectCard
				company="PennyMac"
				year="2024"
				role="Software Engineering Intern, Backend Engineer"
				link="https://www.pennymac.com/"
			>
				<picture>
					<img src={pennymac} alt="PennyMac logo" class="w-full h-full object-contain" />
				</picture>
			</ProjectCard>
			<ProjectCard
				company="Rapideye"
				year="2024"
				role="Lead Software Engineer (Intern)"
				link="https://www.rapideye.ai/"
			>
				<picture>
					<img src={rapideye} alt="Rapideye logo" class="w-full h-full object-contain" />
				</picture>
			</ProjectCard>
			<ProjectCard
				company="Activ"
				year="2023-2024"
				role="Cofounder, CTO"
				link="https://www.linkedin.com/company/activla/"
			>
				<picture>
					<source srcset={activ_1024} media="(min-width: 1024px)" />
					<source srcset={activ_768} media="(min-width: 800px)" />
					<source srcset={activ_512} media="(min-width: 640px)" />
					<source srcset={activ_768} media="(min-width: 256px)" />
					<img src={activ_256} alt="Activ logo" class="w-full h-full object-contain" />
				</picture>
			</ProjectCard>
			<ProjectCard
				company="NowAnalytics"
				year="2023"
				role="Software Engineering Intern, Data Analytics"
				link="https://www.nowanalytics.com/"
			>
				<picture>
					<img src={nowanalytics} alt="NowAnalytics logo" class="w-full h-full object-contain" />
				</picture>
			</ProjectCard>
			<ProjectCard
				company="Sveltype"
				year="2022"
				role="Personal Project"
				link="https://reza-sveltype.vercel.app"
			>
				<picture>
					<source srcset={sveltype_1024} media="(min-width: 1024px)" />
					<source srcset={sveltype_768} media="(min-width: 800px)" />
					<source srcset={sveltype_512} media="(min-width: 640px)" />
					<source srcset={sveltype_768} media="(min-width: 338px)" />
					<img
						src={sveltype_256}
						alt="Sveltype logo"
						class="w-full h-full rounded-md object-contain"
					/>
				</picture>
			</ProjectCard>
			<ProjectCard
				company="Media Converter"
				year="2024"
				role="Personal Project"
				link="https://convert-media.vercel.app/"
			>
				<picture>
					<source srcset={media_converter_1024} media="(min-width: 1024px)" />
					<source srcset={media_converter_768} media="(min-width: 800px)" />
					<source srcset={media_converter_512} media="(min-width: 640px)" />
					<source srcset={media_converter_768} media="(min-width: 338px)" />
					<img
						src={media_converter_256}
						alt="Media Converter logo"
						class="w-full h-full rounded-md object-contain"
					/>
				</picture>
			</ProjectCard>
		</div>
	</section>
	<footer
		class="flex flex-row items-center justify-between px-8 lg:px-16 py-6 border-t border-cloudGray/50"
	>
		<p class="text-sm">Reza Banankhah</p>
		<p class="text-sm">© 2024</p>
	</footer>
</span>
