# SZTUnetControl操作手册

## 基本使用

### 登录

任何操作都需要登录，这里至关重要

![image-20211029143411463](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211029143411463.png)

单击login（如密码正确但是登录无响应可以刷新重试，服务器很垃圾）

登录成功会自动跳转到该界面

![image-20211025194621204](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025194621204.png)

## 网络办理/续费功能

1. 单击该按钮开始处理

![image-20211025194713152](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025194713152.png)

2. 在这里可以处理扫了你的缴费二维码的单子

支持导入支付宝账单和微信账单进行核验，如何导出支付宝账单和微信账单参考**附录一**

![image-20211025200318136](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025200318136.png)

导入后，系统会从账单中初步筛选得到一些数据，在右方显示。此时可以点击NEXT

![image-20211025201731532](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025201731532.png)

3. 导入后进入核验阶段，系统目前会筛选一些问题单出来，点击可以进行手动处理

![image-20211029143511781](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211029143511781.png)

目前支持以下几个操作

![image-20211025202031443](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025202031443.png)

- 修改单号会下发消息要求用户重新选择套餐并修改单号
- 补充身份证信息允许用户修改身份证信息
- 退回则会将您的联系方式推送给用户，方便退款
- 由于有些用户在提交完可能发现自己错了，出现提前联系，这里可以修改类型为完成本单，会按照正常单处理

**目前点击确认后想进行下一步需要手动在右边的验证数据中取消选中**

4. 最后一步，点击NEXT下载导出的单据

![image-20211029143533851](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211029143533851.png)

可以看到导出的excel



# 附录一

## 支付宝账单导出

1. 电脑打开https://alipay.com，点击登录，用手机扫码登录

![image-20211025194957701](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025194957701.png)

2. 登录后找到“对账中心”，单击

![image-20211025195136781](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025195136781.png)

3. 单击“实时账单（业务查询）—— 资金流水（账务明细）”

![image-20211025195255758](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025195255758.png)

4. 自由确定查询时间后，可以点击下载

![image-20211025195405567](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025195405567.png)

注意这里要选择csv格式进行下载

5. 得到账单文件，解压得到csv文件

![image-20211025195519994](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211025195519994.png)



## 微信账单导出

1. 搜索微信支付，按照如图输入，点击个人对账的链接

   <img src="https://gitee.com/grinzero/imgs/raw/master/typora/0A2519F783928DF510F17D983CE8407C.jpg" alt="img" style="zoom:50%;" />

2. 自由选择时间，点击下一步

   <img src="https://gitee.com/grinzero/imgs/raw/master/typora/5F6B25E0C10E466EFD63647F89EDB648.jpg" alt="img" style="zoom:50%;" />

3. 填写邮箱地址，下一步

   ![image-20211029143631899](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211029143631899.png)

4. 之后可以在此处收到解压密码

![image-20211029143700740](https://gitee.com/grinzero/imgs/raw/master/typora/image-20211029143700740.png)

5. 在对应邮箱下载账单文件，使用解压密码解压得到如下文件

![image-20211025200223627](C:\Users\WYQ51\AppData\Roaming\Typora\typora-user-images\image-20211025200223627.png)

![image-20211025200241142](C:\Users\WYQ51\AppData\Roaming\Typora\typora-user-images\image-20211025200241142.png)

