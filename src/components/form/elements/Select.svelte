<script lang="ts">
	export let data: Array<{
		place: string
		value: string
	}>
	export let label: string
	export let name: string
	export let placeholder: string
	export let req: boolean = false
</script>

<label for={label}>{label}</label>
<div>
	<select {name} required={req}>
		<option default value>{placeholder}</option>
		{#each data as item}
			<option value={item.value}>{item.place}</option>
		{/each}
	</select>
</div>

<style>
	select {
		appearance: none;
		outline: 0;
		border: 0;
		box-shadow: none;
		flex: 1;
		padding: 11px 26px;
		color: #767676;
		background-image: none;
		cursor: pointer;
		font-family: "Quicksand", Arial, Helvetica, sans-serif;
	}

	select::-ms-expand {
		display: none;
	}
	div {
		margin-top: 20px;
		display: flex;
		width: 100%;
		border-radius: 20px;
		overflow: hidden;
	}
	@media (prefers-color-scheme: light) {
		select {
			background-color: var(--bg-cclight);
		}
	}
	@media (prefers-color-scheme: dark) {
		select {
			background-color: var(--bg-ccdark);
		}
		div {
			border: 1px solid #a9a6a6;
		}
	}
</style>
