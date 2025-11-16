---
sidebar: false
---
[中文](quickstart.md)
# Download Address
[![GitHub](https://img.shields.io/badge/GitHub-Project%20N.E.K.O.-181717?style=flat&logo=github)](https://github.com/wehos/N.E.K.O)
[![百度云](https://custom-icon-badges.demolab.com/badge/百度云-Link-4169E1?style=flat&logo=baidunetdisk)](https://pan.baidu.com/s/1qb9XVV94c2FwhIeQO2De5A?pwd=kuro)

# Quick Start

1. For *one-click package users*, simply run `新版启动器.exe` (New Launcher) to open the main control panel.

2. Click `启动对话服务器` (Start Dialogue Server) and `开始聊天` (Start Chat).

That's it! Life is so easy!

# Advanced Content

### Configure API Key

During use, you need to configure a third-party AI service. This project currently recommends using *StepFun* or *Alibaba Cloud*. *Developers* can directly modify the content in `config/api.py` (refer to `config/api_template.py` for initial configuration).

> Obtaining *Alibaba Cloud API*: Register an account on Alibaba Cloud's Bailian platform [official website](https://bailian.console.aliyun.com/). New users can receive substantial free credits after real-name verification—watch for "New User Benefits" ads on the page. After registration, visit the [console](https://bailian.console.aliyun.com/api-key?tab=model#/api-key) to get your API Key.

> Obtaining *Zhipu API*: Register an account on Zhipu AI Open Platform [official website](https://open.bigmodel.cn/) and recharge ¥1 to claim substantial free credits. After logging in, obtain your API Key from the [API Console](https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys).

> *For **developers**: After cloning this project, (1) create a new `python3.11` environment. (2) Run `pip install -r requirements.txt` to install dependencies. (3) Copy `config/api_template.py` to `config/api.py` and configure as necessary. (4) Run `python memory_server.py` and `python main_server.py`. (5) Access the web version through the port specified in main server (defaults to `http://localhost:48911`).*

## Modifying Character Persona

- Access `http://localhost:48911/chara_manager` on the web version to enter the character editing page. The default ~~catgirl~~ companion preset name is `小天` (XiaoTian); it's recommended to directly modify the name and add or change basic persona items one by one, but try to limit the quantity.

- Advanced persona settings mainly include **Live2D model settings (live2d)** and **voice settings (voice_id)**. If you want to change the **Live2D model**, first copy the model directory to the `static` folder in this project. You can enter the Live2D model management interface from advanced settings, where you can switch models and adjust their position and size by dragging and scrolling. If you want to change the **character voice**, prepare a continuous, clean voice recording of about 15 seconds. Enter the voice settings page through advanced settings and upload the recording to complete custom voice setup.

- Advanced persona also has a `system_prompt` option for complete system instruction customization, but modification is not recommended.

## Modifying API Provider

- Visit `http://localhost:48911/api_key` to switch the core API and auxiliary APIs (memory/voice) service providers. Qwen is fully-featured, GLM is completely free.

## Memory Review

- Visit `http://localhost:48911/memory_browser` to browse and proofread recent memories and summaries, which can somewhat alleviate issues like model repetition and cognitive errors.