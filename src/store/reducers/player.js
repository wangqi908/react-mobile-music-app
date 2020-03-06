import {
  GET_SONG_URL,
  NEXT,
  PREVIOUS,
  GET_RANDOM,
  GET_CURRENT_TIME,
  GET_DURATION,
  GET_SONG_PRESENT,
  GET_SONG_LYRIC
} from '@/store/actions/actionTypes'

const initState = {
  list: [],
  activePlaying: {},
  isRandom: false,
  duration: 0,
  currentTime: 0,
  songPresent: 0,
  lyric: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SONG_URL:
      let list = action.payload
      return { ...state, list, activePlaying: list[0] }

    case NEXT:
      if (!state.list.length) return { ...state }
      const activeIndexByNext = state.list.findIndex(
        item => item.id === state.activePlaying.id
      )
      const listLengthByNext = state.list.length
      // 下一首
      const nextSong =
        listLengthByNext - 1 === activeIndexByNext
          ? state.list[0]
          : state.list[activeIndexByNext + 1]
      // 随机
      const randomIndex = Math.floor(Math.random() * listLengthByNext)
      const randomSong = state.list[randomIndex]
      return { ...state, activePlaying: state.isRandom ? randomSong : nextSong }

    case PREVIOUS:
      if (!state.list.length) return
      const activeIndexByPrevious = state.list.findIndex(
        item => item.id === state.activePlaying.id
      )
      const listLengthByPrevious = state.list.length
      const previousSong =
        activeIndexByPrevious === 0
          ? state.list[listLengthByPrevious - 1]
          : state.list[activeIndexByPrevious - 1]
      return { ...state, activePlaying: previousSong }

    case GET_RANDOM:
      return { ...state, isRandom: !state.isRandom }

    case GET_CURRENT_TIME:
      return { ...state, duration: action.payload }

    case GET_DURATION:
      return { ...state, currentTime: action.payload }

    case GET_SONG_PRESENT:
      return { ...state, songPresent: action.payload }

    case GET_SONG_LYRIC:
      return { ...state, lyric: action.payload }

    default:
      return state
  }
}
