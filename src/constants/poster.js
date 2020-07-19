// poster
export default {
  // 画布
  width: 671, // 宽度
  height: 1212, // 高度
  // 背景
  backgroundImage: {
    src: 'https://cat.migu.cn/group1/M00/06/BD/CrUBjV8DLUmAXoFlAABD0t2nBDs831.png',
    w: 671,
    h: 1212,
    x: 0,
    y: 0,
  },
  // 二维码
  qrCode: {
    url: 'https://www.baidu.com',
    w: 148,
    h: 148,
    x: 422,
    y: 864,
    m: 0, // 边距
  },
  // 头像图片
  avatar: {
    src: 'https://cat.migu.cn/group1/M00/06/B4/CrUBjV79uxCAf38jAACKImz0xOA079.png',
    w: 213,
    h: 230,
    x: 72,
    y: 374,
  },
  // 文本
  text: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif',
    title: {
      y: 120,
      fontSize: 40,
      fontWeight: 'bold',
      color: '#826019',
      content: '大唐·天授-二年科举考试会试',
    },
    type: {
      y: 180,
      fontSize: 35,
      color: 'red',
      content: '(全国卷)',
    },
    rank: {
      y: 300,
      fontSize: 65,
      fontWeight: 'bold',
      color: ['white', 'red'], // 渐变
      content: '喜中探花',
    },
    list: {
      fontSize: 28,
      color: '#3c2a03',
      user: {
        x: 412,
        y: 385,
        content: '狄仁杰',
      },
      gender: {
        x: 412,
        y: 445,
        content: '男',
      },
      year: {
        x: 412,
        y: 512,
        content: '大唐天授年间',
      },
      type: {
        x: 460,
        y: 580,
        content: '全国卷',
      },
    },
    slogan: {
      y: 695,
      fontSize: 34,
      color: '#826019',
      content: '颜值担当,钦定驸马',
    },
    experience: {
      x: 96,
      y: 890,
      w: 310,
      h: 60,
      fontSize: 22,
      color: '#826019',
      content:
        '我搭乘咪咕穿越机，回到古代参加了科举考试，凭借我的帅气颜值竟燃被选为驸马，成为人生赢家！别打游戏了，快来开启你的穿越人生吧！',
    },
  },
}
