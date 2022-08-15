<script>
	export let place = "Enviar"
</script>

<div>
	<button type="submit" class="btn">
		<span>{place}</span>
	</button>
</div>

<style>
	div {
		margin-top: 40px;
	}
	button {
		cursor: pointer;
		border: none;
		transition: all 0.3s;
	}
	button:hover {
		transform: scale(1.02);
	}
	@media (prefers-color-scheme: light) {
		button {
			background-color: var(--bg-cclight);
		}
    span{
      color: var(--color-dark)
    }
	}
	@media (prefers-color-scheme: dark) {
		button {
			background-color: var(--bg-ccdark);
		}
    span{
      color: var(--color-light);
    }
	}
</style>
