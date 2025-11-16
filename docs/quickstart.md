---
sidebar: false
---
[English](quickstart_en.md)
# 下载地址
[![GitHub](https://img.shields.io/badge/GitHub-Project%20N.E.K.O.-181717?style=flat&logo=github)](https://github.com/wehos/N.E.K.O)
[![百度云](https://custom-icon-badges.demolab.com/badge/百度云-Link-4169E1?style=flat&logo=baidunetdisk)](https://pan.baidu.com/s/1qb9XVV94c2FwhIeQO2De5A?pwd=kuro)

# 快速开始

1. 对于*一键包用户*，直接运行`新版启动器.exe`即可打开主控面板。

1. 点击`启动对话服务器`和`开始聊天`。

# 进阶使用

### 配置API Key

当你想要通过配置自己的API来获得额外功能时，您可以配置一个第三方AI服务。本项目目前推荐使用 *阶跃星辰* 或 *阿里云*。*开发者*可以直接修改`config/api.py`里的内容（首次配置请参考`config/api_template.py`）。

> 获取 *阿里云API*。在阿里云的百炼平台[官网](https://bailian.console.aliyun.com/)注册账号。新用户实名认证后可以获取大量免费额度，记得留意页面上的"新人福利"广告。注册完成后，请访问[控制台](https://bailian.console.aliyun.com/api-key?tab=model#/api-key)获取API Key。

> 获取 *智谱API*。在智谱开放平台[官网](https://open.bigmodel.cn/)注册账号并充值1元后，可以领取大量免费额度。登陆成功后，请从[API 控制台](https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys)获取API Key。

>  *对于**开发者**，请在克隆本项目后，(1)新建`pyhon3.11`环境。(2)执行`pip install -r requirements.txt`安装依赖。(3)复制`config/api_template.py`到`config/api.py`并进行必要配置。(4)执行`python memory_server.py`和`python main_server.py`。(5)通过main server中指定的端口（默认为`http://localhost:48911`）访问网页版。*

### 修改人设

- 网页版访问`http://localhost:48911/chara_manager`即可进入人设编辑页面。初始 ~~猫娘~~ 伙伴的预设名称为`小天`，建议直接修改名字，并一项一项添加或修改基础人设，但尽量控制数量。

- 进阶人设主要包括**Live2D模型设置(live2d)**和**声音设置(voice_id)**。如果你想要更改**Live2D模型**，请先将模型目录复制到本项目中的`static`文件夹下。从进阶设置中可以进入Live2D模型管理界面，可以更换模型，并通过拖拽和鼠标滚轮调整模型的位置和大小。如果你想要更改**角色声音**，请准备一段15秒左右的连贯、干净的语音录音。通过进阶设置进入语音设置页面，上传录音即可完成自定义语音。

- 进阶人设中还有一个`system_prompt`，可以对系统指令进行完全自定义，但不建议修改。

### 修改API提供商

- 通过访问`http://localhost:48911/api_key`可以切换核心API和辅助API（记忆/语音）的服务提供商。Qwen功能全面，GLM完全免费。

### 记忆整理

- 通过访问`http://localhost:48911/memory_browser`可以浏览和校对近期记忆与摘要，一定程度上缓解模型复读、认知错误等问题。