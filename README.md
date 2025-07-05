<h1 align="center">   🎬 MoviesCameo </h1>  
<p align="center">   
  <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />   
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />   
  <img src="https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white" />   
  <img src="https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white" />   
  <img src="https://img.shields.io/badge/OMDb_API-red?style=for-the-badge" />   
  <img src="https://img.shields.io/badge/Gemini_API-blueviolet?style=for-the-badge" /> 
</p>  

<p align="center">   
  <strong>Discover trending, top-rated, and upcoming movies with AI-enhanced insights.</strong><br/>   
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
- 🎥 Real-time movie discovery (OMDb + Gemini)  
- ⚡ Lightning-fast UI powered by React + Vite  
- 🔍 Search, categories, and intelligent filtering  
- 📱 Fully responsive mobile-first design  
- 🧠 AI-enhanced recommendations  
- 🌐 REST API backend built with Express  

---  

## 🔧 Tech Stack  

### Architecture Flow Diagram

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
