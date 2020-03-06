import {
  GET_BANNER,
  GET_SEARCH,
  GET_PERSONALIZED,
  GET_PERSONALIZED_NEW_SONG,
  GET_PLAYLIST_DETAIL,
  GET_SONG_URL,
  NEXT,
  PREVIOUS,
  GET_RANDOM,
  GET_CURRENT_TIME,
  GET_DURATION,
  GET_SONG_PRESENT,
  GET_SONG_LYRIC,
  CLEAN_PLAY_DATA
} from '@/store/actions/actionTypes'
import {
  bannerReq,
  searchReq,
  personalizedReq,
  personalizedNewSongReq,
  playlistDetailReq,
  songUrlReq,
  songDetailReq,
  songLyricReq
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

// 搜索
export const searchAction = payload => dispatch => {
  searchReq(payload).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_SEARCH,
        payload: res.data.result.songs
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

// 获取推荐新音乐
export const getPersonalizedNewSongAction = payload => dispatch => {
  personalizedNewSongReq(payload).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_PERSONALIZED_NEW_SONG,
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
  const songLyricRes = await songLyricReq(payload)

  if (
    songUrRes.data.code === 200 &&
    songDetailRes.data.code === 200 &&
    songLyricRes.data.code === 200
  ) {
    let urlData = songUrRes.data.data
    let detailData = songDetailRes.data.songs

    let lyricData = songLyricRes.data.lrc ? songLyricRes.data.lrc.lyric : ''
    let songList = []
    urlData.forEach(ele => {
      detailData.forEach(item => {
        if (ele.id === item.id) {
          item.lrc = lyricData
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

// 音乐当前时间
export const songCurrentTimeAction = payload => {
  return {
    type: GET_CURRENT_TIME,
    payload
  }
}

// 音乐总时长
export const songDurationAction = payload => {
  return {
    type: GET_DURATION,
    payload
  }
}

// 音乐播放时间百分比
export const songPresentAction = payload => {
  return {
    type: GET_SONG_PRESENT,
    payload
  }
}

// 清除player数据
export const cleanPlayDataAction = payload => {
  return {
    type: CLEAN_PLAY_DATA,
    payload
  }
}
