import { ADD, INCREMENT, GET_BANNER, GET_PERSONALIZED, GET_PLAYLIST_DETAIL } from '@/store/actions/actionTypes'
import { bannerReq, personalizedReq, playlistDetailReq } from '@/api'

// 获取banner
export const getBannerAction = payload => dispatch => {
  bannerReq().then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_BANNER,
        payload: res.data.banners
      })
    }
  })
}

// 获取推荐歌单
export const getPersonalizedAction = payload => dispatch => {
  personalizedReq(payload).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_PERSONALIZED,
        payload: res.data.result
      })
    }
  })
}

// 获取歌单详情
export const getPlaylistDetailAction = payload => dispatch => {
  playlistDetailReq(payload).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_PLAYLIST_DETAIL,
        payload: res.data.playlist
      })
    }
  })
}

// 增加
export const addAction = payload => dispatch => {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 10 + 1)
    return dispatch({
      type: ADD,
      payload: num
    })
  }, 1000);
}

// 减少
export const incrementAction = payload => {
  return {
    type: INCREMENT,
    payload
  }
}