import React, { Component, createRef } from 'react';
import { connect } from 'react-redux'

class Lyric extends Component {
  constructor() {
    super()
    this.state = {
      lyric: "[00:00.000] 作曲 : 董亚千\n[00:01.000] 作词 : 姬赓\n[00:46.290]傍晚6点下班 换掉药厂的衣裳\n[00:55.880]妻子在熬粥 我去喝几瓶啤酒\n[01:05.698]如此生活30年 直到大厦崩塌\n[01:15.988]云层深处的黑暗啊 淹没心底的景观\n[01:26.280]\n[01:50.390]在八角柜台 疯狂的人民商场\n[01:58.590]用一张假钞 买一把假枪\n[02:08.400]保卫她的生活 直到大厦崩塌\n[02:19.590]夜幕覆盖华北平原 忧伤浸透她的脸\n[02:28.590]\n[02:51.999]河北师大附中 乒乓少年背向我\n[02:59.528]沉默的注视 无法离开的教室\n[03:10.990]生活在经验里 直到大厦崩塌\n[03:20.600]一万匹脱缰的马 在他脑海中奔跑\n[03:30.800]\n[04:13.190]如此生活30年 直到大厦崩塌\n[04:22.590]一万匹脱缰的马 在他脑海中奔跑\n[04:32.969]如此生活30年 直到大厦崩塌\n[04:42.958]云层深处的黑暗啊 淹没心底的景观\n[04:52.899]\n",
      lyricArr: []
    }
    this.lrcBox = createRef()
  }
  componentDidMount() {
    const formatLrc = (value) => {
      const arr = value.split("\n");
      const reg = new RegExp(/\[[^\]]*\]/, 'g');
      let reArr = [];
      let needSort = false;
      arr.forEach(ele => {
        const times = ele.match(reg) || [];
        if (times.length > 1) needSort = true;
        times.forEach(time => {
          if (time && ele.replace(times.join(''), '').trim() !== '') {
            const handleTime = time.trim().slice(1, -1).split(':');
            reArr.push({
              time: Math.floor(handleTime[0] * 60) + Math.floor(handleTime[1]),
              lrc: ele.replace(times.join(''), '').trim()
            })
          }
        })
      })
      function insertionSort(myArray) {
        let len = myArray.length,     // 数组的长度
          value,                      // 当前比较的值
          i,                          // 未排序部分的当前位置
          j;                          // 已排序部分的当前位置 
        for (i = 0; i < len; i++) {
          value = myArray[i];
          for (j = i - 1; j > -1 && myArray[j].time > value.time; j--) {
            myArray[j + 1] = myArray[j];
          }
          myArray[j + 1] = value;
        }
        return myArray;
      }
      if (needSort) {
        return insertionSort(reArr);
      } else {
        return reArr;
      }
    }
    const lyricArr = formatLrc(this.state.lyric)
    this.setState({
      lyricArr
    })

    window.addEventListener('scroll', this.lrcBoxScroll)
    document.body.scrollTop=300
    document.documentElement.scrollTop=300

  }

  componentWillReceiveProps(){
    const {  songPresent } = this.props
   
 
    let clientHeight = document.documentElement.clientHeight
    let top = clientHeight*(songPresent/100)

    document.documentElement.scrollTop=top
    document.body.scrollTop=top
  
  }

  render() {
    const { lyricArr } = this.state
    return (
      <div ref={this.lrcBox}>
        {
          lyricArr.map(item => {
            return (
              <p className="lyric-line" key={item.time}>{item.lrc}</p>
            )
          })
        }
      </div>
    );
  }
}

const mapState = state => {
  return {
    duration: state.player.duration,
    currentTime: state.player.currentTime,
    songPresent: state.player.songPresent
  }
}

export default connect(mapState)(Lyric);