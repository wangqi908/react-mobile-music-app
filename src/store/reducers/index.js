import { combineReducers } from 'redux'
import home from './home.js'
import player from './player.js'
import playlist from './playlist.js'

export default combineReducers({ player, home, playlist })