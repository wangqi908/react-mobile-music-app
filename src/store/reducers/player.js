import { GET_SONG_URL } from '@/store/actions/actionTypes'

const initState = {
  list: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SONG_URL:
      return { ...state, list: action.payload }

    default:
      return state
  }
}
