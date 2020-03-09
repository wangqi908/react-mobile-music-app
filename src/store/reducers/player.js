import {
  GET_SONG_URL,
  GET_CURRENT_TIME,
  GET_DURATION,
  GET_SONG_PRESENT,
  GET_SONG_LYRIC,
  CLEAN_PLAY_DATA,
  ADD_SONG
} from '@/store/actions/actionTypes'
import { duplicateRemoval } from '@/utils'

const initState = {
  list: [],
  activePlaying: {},
  duration: 0,
  currentTime: 0,
  songPresent: 0,
  lyric: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SONG_URL:
      let activePlaying = action.payload[0]
      let newList = duplicateRemoval([...state.list, activePlaying])
      return {
        ...state,
        activePlaying,
        list: newList
      }

    case GET_CURRENT_TIME:
      return { ...state, duration: action.payload }

    case GET_DURATION:
      return { ...state, currentTime: action.payload }

    case GET_SONG_PRESENT:
      return { ...state, songPresent: action.payload }

    case GET_SONG_LYRIC:
      return { ...state, lyric: action.payload }

    case ADD_SONG:
      return {
        ...state,
        list: duplicateRemoval([...state.list, action.payload])
      }

    case CLEAN_PLAY_DATA:
      return {
        list: [],
        activePlaying: {},
        duration: 0,
        currentTime: 0,
        songPresent: 0,
        lyric: ''
      }

    default:
      return state
  }
}
