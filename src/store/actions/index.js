import {
  GET_BANNER,
  GET_PERSONALIZED,
  GET_PLAYLIST_DETAIL,
  GET_SONG_URL,
  NEXT,
  PREVIOUS,
  GET_RANDOM
} from '@/store/actions/actionTypes'
import {
  bannerReq,
  personalizedReq,
  playlistDetailReq,
  songUrlReq,
  songDetailReq
} from '@/api'

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

// 获取歌曲url
export const getSongUrlAction = payload => async dispatch => {
  // songUrlReq(payload).then(res => {
  //   if (res.data.code === 200) {
  //     return dispatch({
  //       type: GET_SONG_URL,
  //       payload: res.data.data
  //     })
  //   }
  // })
  const songUrRes = await songUrlReq(payload)
  const songDetailRes = await songDetailReq({ ids: payload.id })

  if (songUrRes.data.code === 200 && songDetailRes.data.code === 200) {
    let urlData = songUrRes.data.data
    let detailData = songDetailRes.data.songs
    let songList = []
    urlData.forEach(ele => {
      detailData.forEach(item => {
        if (ele.id === item.id) {
          songList.push(Object.assign({}, ele, item))
        }
      })
    })
    return dispatch({
      type: GET_SONG_URL,
      payload: songList
    })
  }
}

// 下一曲
export const nextAction = payload => {
  return {
    type: NEXT,
    payload
  }
}

// 上一曲
export const previousAction = payload => {
  return {
    type: PREVIOUS,
    payload
  }
}

// 随机
export const playRandomAction = payload => {
  return {
    type: GET_RANDOM,
    payload
  }
}
