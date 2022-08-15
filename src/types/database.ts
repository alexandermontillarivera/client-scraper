export interface home {
  data: {
    lang: string,
    title: string,
    message: string,
    featuresTitle: string,
    features: Array<{
      icon: string,
      title: string,
      description: string
    }>
  }
}

export interface opengraph {
  data: {
    lang: string,
    title: string,
    message: {
      content: string,
      reference: {
        title: string,
        url: string
      }
    },
    places: {
      label: string
      input: {
        place: string
        label: string
      }
      options: {
        place: string,
        data: Array<{place: string, value: string}>
      }
      table: {
        title: string
        property: string
        content: string
      }
      send: string
      listTitle: string
    }
  }
}

export interface metadata{
  data: {
    lang: string,
    title: string,
    description: string,
    reference: {
      url: string,
      title: string
    },
    table: {
      title: string
      property: string
      content: string
    },
    places: {
      label: string
      input: {
        place: string
        label: string
      }
      send: string
    }
  }
}

export interface documentation {
  data: {
    lang: string,
    title: string,
    description: string,
    metadata: {
      title: string
      description: string
      codeDescription: string
    },
    opengraph: {
      title: string
      description: string
      codeDescription: string
    }
  }
}
