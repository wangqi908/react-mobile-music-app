import { GET_PLAYLIST_DETAIL } from '@/store/actions/actionTypes'

const initState = {
  playListInfo: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PLAYLIST_DETAIL:
      return { ...state, playListInfo: action.payload }

    default:
      return state
  }
}
