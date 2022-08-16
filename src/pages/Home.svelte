<script lang="ts">
  import Menu from '../components/nav/Menu.svelte'
  import { getLang } from '../util/lang.js'
  import Features from '../components/card/Features.svelte'
  const lang: any = getLang('home')
</script>

<div>
  <Menu active={{home: true}}/>
  <main>
    <div class="content">
      {#await lang}
      <p>Loading...</p>
    {:then lang} 
      <h1>{lang.title}</h1>
      <img src="/img/searchEngine.svg" alt="">
      <p>{lang.message}</p>
      <h2>{lang.featuresTitle}</h2>
      <Features data={lang.features}/>
    {/await}
    </div>
  </main>
</div>

<style>
  p{
    margin: 40px 0px;
    font-size: 20px;
    text-align: center;
  }
  img{
    margin: 40px auto;
    width: 100%;
    max-width: 800px;
    display: block;
  }
  h2{
    margin: 40px 0px
  }
</style>