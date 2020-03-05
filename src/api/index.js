import req from "./http.js";

export const bannerReq = params => req("/banner"); //banner
export const personalizedReq = params => req("/personalized", params); //推荐歌单
export const playlistDetailReq = params => req("/playlist/detail", params); //歌单详情
