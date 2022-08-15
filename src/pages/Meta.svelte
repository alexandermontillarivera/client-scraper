<script lang="ts">
	import Menu from "../components/nav/Menu.svelte"
	import { getLang } from "../util/lang.js"
  import Form from '../components/form/MetaForm.svelte'
  const lang: any = getLang('metadata')
</script>

<div>
	<Menu />
	<main>
		<div class="content">
			{#await lang}
				<p>Loading...</p>
			{:then page}
				<h1>{page.title}</h1>
				<img src="/img/meta-description.webp" alt="" />
				<blockquote cite={page.reference.url}>
					{@html page.description}
					<b>
						<a target="_blank" href={page.reference.url}>
							{page.reference.title}
						</a>
					</b>
				</blockquote>
        <Form 
            contentTitle={page.table.content} 
            label={page.places.label} 
            place={page.places.input.place} 
            propertyTitle={page.table.property}
            submit={page.places.send}
            title={page.table.title}
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
