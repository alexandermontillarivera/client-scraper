<script lang="ts">
	import Menu from "../components/nav/Menu.svelte"
	import { getLang } from "../util/lang.js"
	import OpenGraphForm from "../components/form/OpenGraphForm.svelte"
  const lang: any = getLang('opengraph')
</script>

<div>
	<Menu />
	<main>
		<div class="content">
			{#await lang}
				<p>Loading...</p>
			{:then page}
				<h1>{page.title}</h1>
				<img src="/img/opengraph.jpg" alt="" />
				<blockquote cite={page.message.reference.url}>
					{@html page.message.content}
					<b>
						<a target="_blank" href={page.message.reference.url}>
							{page.message.reference.title}
						</a>
					</b>
				</blockquote>
				<OpenGraphForm
            contentTitle={page.places.table.content} 
            label={page.places.input.place} 
            place={page.places.input.place} 
            propertyTitle={page.places.table.property}
            submit={page.places.send}
            title={page.places.table.title}
            options={page.places.options}
            itemTitle={page.places.listTitle}
            
        />
			{/await}
		</div>
	</main>
</div>

<style>
	img {
		width: 100%;
		margin: 40px auto;
		display: block;
		border-radius: 20px;
	}
	blockquote {
		margin: 40px 0px;
		font-size: 20px;
	}
	a {
		font-variant: bold;
	}
</style>
