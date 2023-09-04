<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<div class="title">{data.title}</div>
	<div class="desc">{data.description}</div>
	<div class="images">
		{#each data.images as image}
			<img src={image} class="image" />
		{/each}
	</div>
</div>

<style>
	.title {
		font-family: Century Gothic, Arial, sans-serif;
		font-size: 30px;
		padding: var(--spacing-l);
	}

	.desc {
		padding: 0 var(--spacing-l);
	}

	.images {
		display: flex;
		flex-direction: row;
		justify-items: center;
		align-items: center;
		border-radius: var(--border-radius);
		gap: var(--spacing-s);
		flex-wrap: wrap;
	}

	.image {
		width: 100%;
		max-width: 24vw;
		height: 100%;
	}
</style>
