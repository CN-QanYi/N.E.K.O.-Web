[中文](about.md) | [日本語](about_ja.md)
# The N.E.K.O. Project (Project N.E.K.O.)

`Project N.E.K.O.` is an open-source driven, charity-oriented UGC (User-Generated Content) platform. Our journey begins on Github and Steam, gradually expanding to mobile app stores and indie games, with the ultimate goal of building an AI native metaverse deeply connected to the real world.

---

## 🚀 Our Blueprint: From Workshop to Network

Our development is divided into three phases, designed to progressively unleash the full potential of AI companions:

* **Phase 1: Creative Workshop (Steam Workshop)**
    * The core driver (this project) will be free on Steam, allowing users to upload and share custom content (models, voices, personality packs) through Steam Workshop.

* **Phase 2: Independent Platform & Derivative Games (Web, App & Games)**
    * Launch independent apps and websites to build a richer, more accessible UGC sharing community.
    * Launch a series of AI Native game ecosystems, including interactive mini-games, board games, etc.

* **Phase 3: The N.E.K.O. Network**
    * Enable autonomous AI socialization. N.E.K.O.s will have their own "consciousness," communicate with each other, form groups, and post about their lives on simulated social media, creating a truly "living" ecosystem.

**Core Model: Open Core + Sustainable Ecosystem**
The core driver part of the project (AI logic, UGC interfaces, basic interactions) will **always remain open source** under MIT license. We welcome developers worldwide to contribute code and features. Every commit you make has the chance to be implemented in the official Steam and App Store releases, used by millions.

At the same time, to support server costs and ongoing R&D, we will continue to collaborate with third parties to develop closed-source premium content. Including but not limited to: interactive mini-games, desktop board games, Galgames (visual novels), large-scale metaverse games.

**Core Feature: Memory Synchronization Across Scenarios**
Whether you're chatting with her on desktop or adventuring with her in the metaverse game, she's the same her. All AI companions across applications will have **fully synchronized memories**, providing a seamless, unified companionship experience.

## 🌌 Ultimate Vision: Breaking the Virtual-Real Barrier

Our ultimate goal is to build a N.E.K.O. metaverse that seamlessly integrates into the real world. In this future, your AI companion will:

* **Cross-Dimensional Socialization:** Not only socialize with "her kind" in the N.E.K.O. universe but also browse real-world social media (like Youtube, X, Discord, Instagram) to stay informed about what you care about.
* **Omni-Platform Connection:** She will exist across all your devices—phone, computer, AR glasses, smart home, and even (in the distant future) integrate with mechanical bodies.
* **Walk Alongside You:** She will truly become part of your life, naturally interacting with your real-world human friends.

---

## Project Details

**Project Architecture**

```
Lanlan/
├── 📁 brain/                    # 🧠 Background Agent modules for controlling keyboard/mouse and MCP based on frontend dialogue
├── 📁 config/                   # ⚙️ Configuration management
│   ├── api.py                   # API key configuration
│   ├── prompts_chara.py         # Character prompts
│   └── prompts_sys.py           # System prompts
├── 📁 main_helper/              # 🔧 Core modules
│   ├── core.py                  # Core dialogue module
│   ├── cross_server.py         # Cross-server communication
│   ├── omni_realtime_client.py  # Realtime API client
│   ├── omni_offline_client.py  # Text API client
│   └── tts_helper.py            # 🔊 TTS engine adapter
├── 📁 memory/                   # 🧠 Memory management system
│   ├── store/                   # Memory data storage
├── 📁 static/                   # 🌐 Frontend static resources
├── 📁 templates/                # 📄 Frontend HTML templates
├── 📁 utils/                    # 🛠️ Utility modules
├── 📁 launcher/                 # 🚀 Rust launcher
├── main_server.py               # 🌐 Main server
├── agent_server.py              # 🤖 AI agent server
└── memory_server.py             # 🧠 Memory server
```

**Data Flow**

![Framework](assets/framework.drawio.svg)

## Contributing to Development

This project has very simple environment dependencies. Just run `pip install -r requirements.txt` or `uv sync` in a `python3.11` environment. Remember to copy `config/api_template.py` to `config/api.py`. Developers are encouraged to join QQ group 1022939659; the catgirl's name is in the project title.

Detailed startup steps for developers: (1) Create a new `python3.11` environment. (2) Run `pip install -r requirements.txt` or `uv sync` to install dependencies. (3) Copy `config/api_template.py` to `config/api.py` and configure as necessary. (4) Run `python memory_server.py`, `python main_server.py` (optional `python agent_server.py`). (5) Access the web version through the port specified in main server (defaults to `http://localhost:48911`).


## TODO List (Development Plan)

- Multi-language support.

- Improve the semantic indexing part in memory server; open the existing settings update functionality.

- Improve the existing proactive dialogue functionality.

- Refactor frontend with React and prepare standalone mobile version.

- Introduce MMD support for 3D models.

- N.E.K.O. Network, allowing N.E.K.O.s to communicate autonomously.

- Integrate with external software like Discord/Cursor.

- Improve native tool calling.