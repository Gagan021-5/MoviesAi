<!-- HEADER BANNER -->
<!-- HEADER BANNER -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=28&duration=4500&pause=1200&color=F44336&background=00000000&center=true&vCenter=true&multiline=true&width=800&lines=%F0%9F%8E%AC+Welcome+to+MoviesCameo!;%F0%9F%8C%9F+Discover+Cinema+with+AI+Insights;%F0%9F%8D%BF+Your+Next+Favorite+Movie+Awaits." alt="Animated MoviesCameo Header" />
</p>


<p align="center">
  <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/OMDb_API-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Gemini_API-blueviolet?style=for-the-badge" />
</p>  

<p align="center">
  <strong>Discover trending, top-rated, and upcoming movies with AI-powered insights.</strong><br/>
  Built using <b>React + Vite</b> on the frontend and <b>Express + Node.js</b> on the backend.
</p>

<p align="center">
  🔗 <a href="https://moviesfront-q1wi.onrender.com" target="_blank"><strong>Live Demo</strong></a>
</p>

---

## 🎞️ UI Previews

<table>
  <tr>
    <td>
      <img src="https://i.postimg.cc/9FCJP7ZZ/Screenshot-2025-06-17-001708.png" alt="Grid View" width="100%" />
    </td>
    <td>
      <img src="https://i.postimg.cc/9QSdkRRx/Screenshot-2025-06-17-002012.png" alt="Detail View" width="100%" />
    </td>
  </tr>
</table>

---

## ✨ Features

- 🎥 **Real-time Movie Discovery:** Powered by OMDb + Gemini AI
- 🤖 **AI-Powered Insights:** Get recommendations, summaries, and more from Gemini API
- 🔍 **Smart Search & Filtering:** Explore by genre, rating, and more
- ⚡ **Lightning Fast UI:** Built on React + Vite for blazing speed
- 📱 **Mobile First:** Fully responsive, beautiful on any device
- 🌐 **REST API Backend:** Scalable and robust Express server

---

## 🛠️ Tech Stack

| Frontend              | Backend                | Integrations         |
|:---------------------:|:---------------------:|:-------------------:|
| ⚛️ React (Vite)       | 🖥️ Node.js + Express  | 🎬 OMDb API         |
| 🎨 Tailwind CSS       | 🗃️ RESTful API        | 🤖 Gemini API       |


---

## 🗺️ Architecture Flow

```mermaid
graph TD
  A[React + Vite Frontend] -->|Sends requests| B[Express + Node.js Backend]
  B -->|Fetches movie data| C[OMDb API]
  B -->|Fetches AI insights| D[Gemini API]
  B -->|Sends processed data| A

  style A fill:#61dafb,stroke:#000,stroke-width:2px
  style B fill:#339933,stroke:#000,stroke-width:2px
  style C fill:#e60023,stroke:#000,stroke-width:2px
  style D fill:#8a2be2,stroke:#000,stroke-width:2px
```

---

## 🌐 Project Structure

```shell
moviescameo/
 ├─ client/      # React + Vite + Tailwind (Frontend)
 ├─ server/      # Node.js + Express (Backend)
 └─ README.md
```

---

## ⚡ Quickstart

```bash
# 1. Clone
git clone https://github.com/<your-username>/moviescameo.git && cd moviescameo

# 2. Install dependencies
cd client && npm i
cd ../server && npm i

# 3. Configure .env in both folders (API keys for OMDb and Gemini)

# 4. Run
cd client && npm run dev
cd ../server && npm run dev
```

---

## 💡 Inspired By

> <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=2500&pause=800&color=F44336&center=true&vCenter=true&width=600&lines=+IMDb+%7C+AI-powered+movie+apps+vibes" />

---

