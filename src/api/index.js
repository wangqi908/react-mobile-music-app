import req from './http.js'

export const bannerReq = _ => req('/banner') //banner
export const searchReq = keywords => req('/search', keywords) //搜索关键词
export const personalizedReq = params => req('/personalized', params) //推荐歌单
export const personalizedNewSongReq = params =>
  req('/personalized/newsong', params) //推荐新音乐
export const playlistDetailReq = params => req('/playlist/detail', params) //歌单详情
export const songDetailReq = params => req('/song/detail', params) //获取音乐详情
export const songUrlReq = params => req('/song/url', params) //获取音乐 url
export const songLyricReq = params => req('/lyric', params) //获取音乐lyric
