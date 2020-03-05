import React, { Component } from "react";
import { Player } from "@/components";

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          title: "ttp://p2.music.126.net/KGgKLekykDH5jAMLrYs-4Q==/109951163327",
          cover:
            "http://p2.music.126.net/KGgKLekykDH5jAMLrYs-4Q==/109951163327361563.jpg",
          src: "http://192.168.10.78:8088/aaa.mp3"
        },
        {
          id: 2,
          title: "2",
          cover: "",
          src: "http://192.168.10.78:8088/bbb.mp3"
        },
        {
          id: 3,
          title: "3",
          src: "http://192.168.10.78:8088/ccc.mp3"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Player list={this.state.list} />
      </div>
    );
  }
}
