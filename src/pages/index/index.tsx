import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
// import { AtInput } from "taro-ui";
import "./index.scss";

export default class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>ndy</Text>
        {/* <AtInput name="aaa" onChange={() => {}} placeholder="占位文本"></AtInput> */}
        <View>
          <Text>带onClick回调的Text变成了image标签</Text>
          <Text onClick={() => {}}>带onClick回调的Text变成了image标签</Text>
        </View>
        <View>
          <Text>Image标签变成了view标签</Text>
          <Image src="https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=7dc22361d83b7799549b25be32854925"></Image>
        </View>
      </View>
    );
  }
}
