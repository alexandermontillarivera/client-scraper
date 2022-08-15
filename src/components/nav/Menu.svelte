<script lang="ts">
  import ChangeLanguage from '../btn/ChangeLanguage.svelte'
  import {link} from 'svelte-routing'
  import { selectLang } from '../../util/lang.js'
  interface Lang {
    lang: string, places: {
      home: string,
      graph: string,
      meta: string,
      doc: string
    }
  }
    const menu: Array<Lang> = [
    {
      lang: 'en',
      places: {
        home: 'Home',
        graph: 'Open Graph',
        meta: 'Meta data',
        doc: 'Documentation'
      }
    },
    {
      lang: 'es',
      places: {
        home: 'Inicio',
        graph: 'Open Graph',
        meta: 'Meta data',
        doc: 'Documentación'
      }
    }
  ]
  const menuSelect = menu.filter(i => {
    let filter: Boolean
    if(selectLang.userPreferences === null){
      filter = i.lang === selectLang.default
    } else {
     filter = i.lang === selectLang.userPreferences
    }
    return filter
  })
  const title: string = 'Scraper'
  const { home,graph, meta, doc } = menuSelect[0].places
</script>

<header>
  <nav class="desktop">
    <div>
      <h2 class="main-title"><a href="/" use:link>{ title } <i class="fa-solid fa-glasses"></i></a></h2>
    </div>
    <ul>
      <li><a href="/" use:link>{ home }</a></li>
      <li><a href="/opengraph" use:link>{ graph }</a></li>
      <li><a href="/meta" use:link>{ meta }</a></li>
      <li><a href="/documentation" use:link>{ doc }</a></li>
      <li><ChangeLanguage id="desktop-lang"/></li>
    </ul>
  </nav>
  <nav class="mobile">
    <div class="menuToggle">
      <input type="checkbox" title="Menu"/>
			<span class="line" />
			<span class="line" />
			<span class="line" />
      <ul>
        <div>
          <h2><a href="/" use:link>{ title } <i class="fa-solid fa-glasses"></i></a></h2>
        </div>
        <li><a href="/" use:link><i class="fa-solid fa-house"></i><span>{ home }</span></a></li>
        <li><a href="/opengraph" use:link><i class="fa-solid fa-share-nodes"></i><span>{ graph }</span></a></li>
        <li><a href="/meta" use:link><i class="fa-solid fa-file-lines"></i><span>{ meta }</span></a></li>
        <li><a href="/documentation" use:link><i class="fa-solid fa-book"></i><span>{ doc }</span></a></li>
        <li class="c-lang-mb"><span class="mb-lang"><i class="fa-solid fa-language"></i><ChangeLanguage id="mobile-lang" /></span></li>
      </ul>
    </div>
  </nav>
</header>


<style>
  header{
    position: sticky;
    width: 100%;
    top: 0px;
  }
  .desktop li:hover{
    opacity: 0.5;
    -webkit-transform:scale(0.7);
    transform:scale(1.1);
  }
   .desktop{
    display: flex;
    width: 100%;
    padding: 20px;
  }
  .desktop div, ul{
    width: 50%;
  }
  .desktop :last-child{
    justify-content: right;
  }
  .desktop ul{
    display: inline-flex;
    list-style: none;
    width: 100%;
    margin-top: 5px;

  }
  .desktop li{
    margin: 0px 10px;
    transition: all 0.3s;

    text-transform: uppercase;
  }
  .mobile{
    display: none;
  }
  @media (max-width: 991px) {
    .desktop {
			display: none;
		}
		.mobile {
			display: block;
      position: absolute;
		}
		.menuToggle {
			position: fixed;
			top: 10px;
			right: 10px;
			z-index: 1111;
			user-select: none;
			padding: 19px 0 0 16px;
			width: 54px;
			height: 54px;
			border-radius: 5px;
		}
		.menuToggle input {
      display: flex;
      width: 54px;
      height: 54px;
      position: absolute;
      cursor: pointer;
      opacity: 0;
      z-index: 10;
      top: 0;
      left: 0;
		}
		input[type="checkbox"] {
			box-sizing: border-box;
			padding: 0;
		}
		.menuToggle > span {
			display: flex;
			width: 23px;
			height: 2px;
			margin-bottom: 5px;
			position: relative;
			border-radius: 3px;
			z-index: 1;
			transform-origin: 5px 0;
			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
		}
    .menuToggle input:checked ~ ul {
			transform: none;
		}
		.menuToggle input:checked ~ span {
			opacity: 1;
			transform: rotate(55deg) translate(4px, 0px);
		}
		.menuToggle input:checked ~ span:nth-last-child(2) {
			transform: rotate(-55deg) translate(2px, 0px);
		}
		.menuToggle input:checked ~ span:nth-last-child(3) {
			opacity: 0;
			transform: rotate(0deg) scale(0.2, 0.2);
		}
		.menuToggle ul {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			margin: 0;
			padding-top: 60px;
			-webkit-font-smoothing: antialiased;
			transform-origin: 0 0;
			transform: translate(-100%, 0);
			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		}
		.menuToggle ul li a {
			display: flex;
			position: relative;
      text-decoration: none;
      font-weight: 500;
      background-color: none;
		}
    .menuToggle ul li a i {
      margin-right: 10px;
      background-color: none;
      font-size: 19px;
      transition: 0.3s;
      padding: 1rem;
    }
    .menuToggle ul li a span{
      padding-top: 10px;
      font-size: 20px;
      text-align: left;
    }
    .menuToggle div{
      text-align: center;
    }
    .c-lang-mb{
      margin-top: 10px;
    }
    .mb-lang{
      margin: 0px 15px
    }
    .mb-lang i{
      margin-right: 18px;
    }
  }
  @media (prefers-color-scheme: light){
      header{
        background-color: var(--bg-clight);
      }
      .menuToggle .line{
        background-color: var(--color-dark);
      }
      .menuToggle, .menuToggle ul{
        background-color: var(--bg-clight);
      }
    }
    @media (prefers-color-scheme: dark){
      header{
        background-color: var(--bg-cdark);
      }
      .menuToggle .line{
        background-color: var(--color-light);
      }
      .menuToggle, .menuToggle ul{
        background-color: var(--bg-cdark);
      }
    }
</style>