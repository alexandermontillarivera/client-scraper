import type { data } from '../types/scrapper.js'

export let dataDefaultOpenGraph: Array<data> = [
  {
    property: 'og:type',
    content: 'Website title',
    name: 'Website title'
  },
  {
    property: 'og:title',
    content: 'Title of pages',
    name: 'Title of pages',
  },
  {
    property: 'og:description',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic suscipit, repudiandae aliquam officiis molestiae earum.',
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic suscipit, repudiandae aliquam officiis molestiae earum.'
  },
  {
    property: 'og:image',
    content: 'https://alexandermontillarivera.com/img/opengraph-preview.png',
    name: 'https://alexandermontillarivera.com/img/opengraph-preview.png',
  },
  {
    property: 'og:url',
    content: 'https://alexandermontillarivera.com',
    name: 'https://alexandermontillarivera.com'
  },
  {
    property: 'og:image:width',
    content: '400',
    name: '400'
  },
  {
    property: 'og:image:height',
    content: '1200',
    name: '1200'
  },
  {
    property: 'og:locale',
    content: 'es',
    name: 'es'
  },
  {
    property: 'twitter:text:title',
    content: 'Website title',
    name: 'Website title'
  },
  {
    property: 'twitter:image',
    content: 'https://alexandermontillarivera.com/img/opengraph-preview.png',
    name: 'https://alexandermontillarivera.com/img/opengraph-preview.png',
  },
  {
    property: 'twitter:card',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic suscipit, repudiandae aliquam officiis molestiae earum.',
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic suscipit, repudiandae aliquam officiis molestiae earum.'
  },
  {
    property: 'twitter:site',
    content: 'alexandermontillarivera.com',
    name: 'alexandermontillarivera.com'
  },
  {
    property: 'twitter:creator',
    content: 'jksalexander',
    name: 'jksalexander'
  }
]

export const dataDefaultMetaInfo: Array<data> = [
  {
    content: "Alexander Montilla Rivera 👨‍💻",
    name: "title",
    property: "title"
  },
  {
    content: "Alexander Montilla Rivera un estudiante de programación y diseño gráfico ✅ Conoce más acerca de él y de su trabajo. ¿Qué esperas? ENTRA YA. 🥇",
    name: "description",
    property: "description"
  },
  {
    content: "¿Quien es Alexander Montilla Rivera?, Alexander Montilla Rivera, Alexander Montilla",
    name: "keywords",
    property: "keywords"
  }
]

export const getDataOpenGraph: Array<data> = JSON.parse(localStorage.getItem("openGraph"))