import {
  GET_BANNER,
  GET_PERSONALIZED,
  GET_PERSONALIZED_NEW_SONG,
  GET_SEARCH
} from '@/store/actions/actionTypes'

const initState = {
  bannerList: [],
  personalizedList: [],
  personalizedNewSongList: [],
  searchResult: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_BANNER:
      return { ...state, bannerList: action.payload }

    case GET_PERSONALIZED:
      return { ...state, personalizedList: action.payload }

    case GET_PERSONALIZED_NEW_SONG:
      return { ...state, personalizedNewSongList: action.payload }

    case GET_SEARCH:
      return { ...state, searchResult: action.payload }

    default:
      return state
  }
}
