---
sidebar: false
---
[中文](qa.md)
# Q&A

> *Why does my AI seem a bit dumb?*

This project cannot be responsible for the AI's **intelligence level**; it can only help you choose the solution with the best overall performance currently available. If you've watched this project's videos on Bilibili, the live version and open-source version have identical code logic, differing only in supported API interfaces. Those with resources can replace `CORE_URL`/`CORE_API_KEY`/`CORE_MODEL` in `config/api.py` with OpenAI's `GPT-Realtime` version to upgrade from Qwen to `GPT-Realtime`. You can also **wait for Alibaba or other domestic providers to upgrade and catch up**.

**Technological progress doesn't happen overnight. Please be patient and watch the AI grow!**

> *Which language models does this project support?*

This project relies on realtime fully multimodal APIs. The live version uses Gemini Live API, while the open-source version uses the [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime). Gemini Live offers better results but currently **only supports Google**. The OpenAI Realtime API specification is currently **supported by OpenAI, Alibaba Cloud, Zhipu, and StepFun**, with potential for more models in the future. The open-source version supports four models: `Step-Audio`, `Qwen-Omni-Realtime`, `GLM-Realtime`, and `GPT-Realtime`.

**Other known models supporting realtime mode but incompatible with OpenAI Realtime:** (ByteDance) Doubao Realtime Voice Interaction, (SenseTime) SenseNova V6 Omni, (iFlytek) Spark Cognitive Hyperrealistic