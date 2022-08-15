<script lang="ts">
  export let data: Array<{
    icon: string,
    title: string,
    description: string
  }>
</script>

<section>
  {#each data as item}
    <div>
      <i class={item.icon}></i>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  {/each}
</section>

<style>
  section{
    display: grid;
    grid-gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  }
  div{
    background-color: var(--bg-cdark);
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 1rem;
  }
  div{
    text-align: center;
  }
  i{
    margin-top: 40px;
    font-size: 40px;
  }
  h3{
    margin: 40px 0px;
  }
  p{
    margin-bottom: 40px;
  }
  @media (prefers-color-scheme: light) {
    div{
      background-color: var(--bg-clight);
    }
  }
  @media (prefers-color-scheme: dark) {
    div{
      background-color: var(--bg-cdark);
    }
  }

</style>