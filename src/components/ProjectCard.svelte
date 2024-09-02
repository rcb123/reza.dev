<script>
	export let company = '';
	export let year;
	export let role;
	export let link = '';
</script>

<div class="flex flex-col gap-4 w-full h-fit">
	{#if link}
		<a href={link} target="_blank">
			<div
				class="work-card flex items-center justify-center w-full p-4 min-h-48 bg-gradient-to-b from-cloudGray/10 via-white to-cloudGray/20 shadow-md shadow-cloudGray/20 rounded-md border border-cloudGray/30 hover:border-cloudGray/50"
			>
				<slot />
			</div>
		</a>
	{:else}
		<div
			class="work-card flex items-center justify-center w-full p-4 min-h-48 bg-gradient-to-b from-cloudGray/10 via-white to-cloudGray/20 shadow-md shadow-cloudGray/20 rounded-md border border-cloudGray/30 hover:border-cloudGray/50"
		>
			<slot />
		</div>
	{/if}
	<section class="flex flex-row justify-between gap-6">
		{#if company}
			<div class="flex flex-col flex-grow text-xl font-semibold">
				<h1>{company}</h1>
				<h2 class="text-cloudGray">
					{role}
				</h2>
			</div>
			<span class="text-sm">{year}</span>
		{:else}
			<div class="flex justify-between">
				<h1 class="text-xl font-semibold">{role}</h1>
				<span>{year}</span>
			</div>
		{/if}
	</section>
</div>

<style>
	.work-card {
		transition-property: transform, box-shadow, border;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
	}
	.work-card:hover {
		transform: scale(1.01);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
</style>
