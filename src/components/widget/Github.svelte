<script lang="ts">
  export let title: string
  export let description: string
  export let url: string
</script>


<a href={url} target="_blank">
  <article>
    <div>
      <span>
        <i class="fa-brands fa-github"></i>
      </span>
    </div>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <b class="action">
        Click Me
      </b>
    </div>
  </article>
</a>


<style>
  article{
    padding: 50px;
    border-radius: 10px;
    display: flex;
    width: 100%;
    transition: all 0.3s;
  }
  article :first-child {
    width: 25%;
    margin-right: 20px;
  }
  article :last-child{
    width: 100%;
  }
  h3{
    font-size: x-large;
    margin-bottom: 10px;
  }
  span{
    padding: 1rem;
    font-size: 4em;
    width: 100%;
    height: 100%;
  }
  p{
    margin-bottom: 10px;
  }
  i{
    text-align: center;
    width: 100%;
    height: 100%;
  }
  a:hover article{
    transform: scale(1.1);
  }
  @media (max-width: 605px) {
    article{
      display: block;
    }
    span{
      display: block;
      margin: 0px auto;
      width: 100%;
      justify-content: center;
      text-align: center;
    }
  }
  @media (prefers-color-scheme: light) {
    article{
      background-color: var(--bg-clight);
    }
  }
  @media (prefers-color-scheme: dark) {
    article{
      background-color: var(--bg-cdark);
    }
  }
</style>
