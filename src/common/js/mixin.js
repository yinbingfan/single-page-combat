import Vue from 'vue'

Vue.mixin({
  methods: {
    setColor(id) {
      if(!id) return
      let v = String(id).slice(-1)
      switch (v) {
        case '0':
          return '#D6F4F1'
        case '1':
          return '#D6F4F1'
        case '2':
          return '#FEEFF1'
        case '3':
          return '#efc951'
        case '4':
          return '#ec7d6a'
        case '5':
          return '#c074b5'
        case '6':
          return '#32bd8b'
        case '7':
          return '#c6c7c8'
        case '8':
          return '#00c1df'
        case '9':
          return '#755cee'

      }

    },
    setFontColor(id) {
      if(!id) return
      let v = String(id).slice(-1)
      switch (v) {
        case '0':
          return '#00C7BB'
        case '1':
          return '#00C7BB'
        case '2':
          return '#FF6347'
        case '3':
          return '#FF8C00'
        case '4':
          return '#cc0033'
        case '5':
          return '#c074b5'
        case '6':
          return '#006666'
        case '7':
          return '#c6c7c8'
        case '8':
          return '#00c1df'
        case '9':
          return '#755cee'

      }

    }
  }
})
