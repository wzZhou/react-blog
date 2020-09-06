import React from 'react';
import { Avatar, Divider } from 'antd';

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%A4%B4%E5%83%8F%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=99&spn=0&di=32230&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3890232542%2C4128252417&os=3404798798%2C3826377798&simid=14244315%2C774641249&adpicid=0&lpn=0&ln=30&fr=&fmq=1599406477666_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=head&bdtype=0&oriquery=%E5%A4%B4%E5%83%8F%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa8014c086e061d959c8f8af179f40ad163d9ca2a.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzit1w5_z%26e3Bkwt17_z%26e3Bv54AzdH3Fq7jfpt5gAzdH3Fmbbdddlbbd99l000d9_z%26e3Bip4s&gsm=69&rpstart=0&rpnum=0&islist=&querylist=&force=undefined" /></div>
      <div className="author-introduction">
        明镜亦非台， 本来无一物，何处惹尘改。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account"  />
        <Avatar size={28} icon="qq"  className="account" />
        <Avatar size={28} icon="wechat"  className="account"  />
      </div>
    </div>
  )
}

export default Author;
