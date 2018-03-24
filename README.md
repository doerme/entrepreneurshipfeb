## 服务器业务API
### 提交表单接口
>参数：
```
name：姓名
no：工号
mobile：手机
openid：openid
sentence:句子
http://test.weixinlm.com/addons/api/Millionbusinessforum/create_user?name=asda&mobile=13111212212&no=123123&openid=asdasd&sentence=XXX
```
###　获取用户信息
>参数：
```
openid：用户openid
http://test.weixinlm.com/addons/api/Millionbusinessforum/get_user_info?openid=testopenid
```

### 点赞
>参数：
```
openid：被点赞者OPENID
http://test.weixinlm.com/addons/api/Millionbusinessforum/like?openid=testopenid
```

### 排行榜
>参数：无
```
http://test.weixinlm.com/addons/api/Millionbusinessforum/like_rank
```