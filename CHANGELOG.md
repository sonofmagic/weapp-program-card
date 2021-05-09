
## 1.3.1 (2021-05-09)

又鸽了一个月了,嘿嘿，我只有心情好才会更新

### new features
- Github导入关键字审查，这个功能会做一个全文检索，主要是防止一些Github的轮子，瞎搞，一截图，小程序必定被封
- 转发图片，根据Canvas自动生成图片([link](https://zhuanlan.zhihu.com/p/369898263))
- `wx.getUserInfo` 弃用，更换 `wx.getUserProfile` ,同时进行登录注册的改造，添加 新的云函数 -> `checkHasUser` [微信公告](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=getUserInfo)

- 导入仓库功能样式行为细节优化(原先大部分人都不导入仓库)

### bugs fixed

- [#16](https://github.com/sonofmagic/programer-card/issues/16)
- [#20](https://github.com/sonofmagic/programer-card/issues/20)
- [#21](https://github.com/sonofmagic/programer-card/issues/21)
- [#22](https://github.com/sonofmagic/programer-card/issues/22)


## 1.2.0 (2021-03-23)

### new features

- 导入仓库 Readme.md 预览
- 用户反馈直接创建 Github issue

### bugs fixed
- [#6](https://github.com/sonofmagic/programer-card/issues/6)

---

## 1.1.x (2021-03-17)

### new features

- 分享一键三连功能（点赞，收藏，关注）
- 收藏关注列表
- 自定义分享文字

### bugs fixed

- [#5](https://github.com/sonofmagic/programer-card/issues/5) 当初英文没有考虑在内

---
## 1.0.1 (2021-02-20)

修复部分体验性问题:
close issues:

- [#2](https://github.com/sonofmagic/programer-card/issues/2) pixelratio 问题，是我一开始就疏忽了
- [#3](https://github.com/sonofmagic/programer-card/issues/3) 添加首页 loading ,出错或者未授权，进入授权页
- [#4](https://github.com/sonofmagic/programer-card/issues/4) 添加新建第一次的提示

---
## 1.0.0 (2021-02-19)

第一版正式发布:
功能主要包括:

- 名片的 CRUD
- Github 导入
