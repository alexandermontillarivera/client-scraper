<script lang="ts">
  export let data: Array<string>
  export let title: string
</script>

<span>{title}</span>
<ul>
  {#each data as item}
    <li>{item}</li>
  {/each}
</ul>

<style>
  ul{
    display: flex;
    list-style: none;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  li{
    margin: 10px;
    text-align: center;
    width: 10rem;
    padding: 10px;
    background-color: red;
    border-radius: 10px;
    transition: ease 0.4s;
  }
  li:hover{
    transform: scale(1.1);
  }
	@media (prefers-color-scheme: light) {
    li{
			background-color: var(--bg-cclight);
    }
  }
	@media (prefers-color-scheme: dark) {
    li{
			background-color: var(--bg-ccdark);
    }
  }
</style>