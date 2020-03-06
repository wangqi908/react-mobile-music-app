import {
  GET_BANNER,
  GET_SEARCH,
  GET_PERSONALIZED,
  GET_PERSONALIZED_NEW_SONG,
  GET_PLAYLIST_DETAIL,
  GET_SONG_URL,
  GET_CURRENT_TIME,
  GET_DURATION,
  GET_SONG_PRESENT,
  GET_SONG_LYRIC,
  CLEAN_PLAY_DATA,
  ADD_SONG
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
export const getBannerAction = _ => dispatch => {
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
export const searchAction = params => dispatch => {
  searchReq(params).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_SEARCH,
        payload: res.data.result.songs
      })
    }
  })
}

// 获取推荐歌单
export const getPersonalizedAction = params => dispatch => {
  personalizedReq(params).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_PERSONALIZED,
        payload: res.data.result
      })
    }
  })
}

// 获取推荐新音乐
export const getPersonalizedNewSongAction = params => dispatch => {
  personalizedNewSongReq(params).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_PERSONALIZED_NEW_SONG,
        payload: res.data.result
      })
    }
  })
}

// 获取歌单详情
export const getPlaylistDetailAction = params => dispatch => {
  playlistDetailReq(params).then(res => {
    if (res.data.code === 200) {
      return dispatch({
        type: GET_PLAYLIST_DETAIL,
        payload: res.data.playlist
      })
    }
  })
}

// 获取歌曲歌词
export const getSongLrcAction = params => dispatch => {
  songLyricReq(params).then(res => {
    if (res.data.code === 200) {
      let payload = res.data.lrc ? res.data.lrc.lyric : ''
      return dispatch({
        type: GET_SONG_LYRIC,
        payload
      })
    }
  })
}

// 获取歌曲url
export const getSongUrlAction = params => async dispatch => {
  const songUrRes = await songUrlReq(params)
  const songDetailRes = await songDetailReq({ ids: params.id })

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

// 添加音乐列表
export const addSongAction = payload => {
  return {
    type: ADD_SONG,
    payload
  }
}
