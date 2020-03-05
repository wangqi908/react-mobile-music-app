import { GET_BANNER, GET_PERSONALIZED } from '@/store/actions/actionTypes'

const initState = {
  bannerList: [],
  personalizedList: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_BANNER:
      return { ...state, bannerList: action.payload }

    case GET_PERSONALIZED:
      return { ...state, personalizedList: action.payload }

    default:
      return state
  }
}
