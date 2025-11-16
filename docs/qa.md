---
sidebar: false
---
[English](qa_en.md)
# 技术Q&A

> *为什么我的AI感觉笨笨的？*

本项目无法对AI的**智能水平**负责，只能帮助您选择当前综合性能最优的解决方案。如果您已经看过本项目在Bilibili的视频，那么直播版与开源版代码逻辑一致，只有支持的API接口不一致。有条件者可以将`config/api.py`中的`CORE_URL`/`CORE_API_KEY`/`CORE_MODEL`替换成OpenAI的`GPT-Realtime`版本，即可将模型从Qwen升级为`GPT-Realtime`。也可以**等待阿里或其他国内厂家的升级与跟进**。

**技术的进步不在一朝一夕，请耐心守候AI的成长**！

> *本项目支持哪些语言模型？*

本项目依赖于实时全模态API。直播版本使用的是Gemini Live API，开源版本使用的是[OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime)。Gemini Live接口具有更好的效果，但目前**只支持谷歌**。OpenAI Realtime接口规范目前**有OpenAI，阿里云，智谱，阶跃星辰 四家服务商**支持，未来可能兼容更多模型。开源版支持`Step-Audio`,`Qwen-Omni-Realtime`,`GLM-Realtime`和`GPT-Realtime`四个模型。

**已知其他支持实时模式但不兼容OpenAI Realtime的模型：**(字节跳动)豆包实时语音交互，(商汤)SenseNova V6 Omni，(科大讯飞)星火认知超拟人