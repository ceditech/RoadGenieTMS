# RoadGenieTMS
RoadGenieTMS is a mobile-first, ADA-compliant Transportation Management System built with Angular and Firebase. It automates load ingestion from Gmail via n8n, centralizes dispatch workflow in a unified inbox, and enables secure, role-based load management for modern trucking dispatch operations.
Excellent — here is a **GitHub-optimized README.md layout** for **RoadGenieTMS**, structured professionally with badges, clean sections, and scalability for future growth.

You can paste this directly into your repository’s `README.md`.

---

# 🚛 RoadGenieTMS

### *From EDXSTORE LLC*

[![Angular](https://img.shields.io/badge/Angular-17+-red?logo=angular)](#)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore%20%7C%20Auth-orange?logo=firebase)](#)
[![Cloud Functions](https://img.shields.io/badge/Cloud%20Functions-TypeScript-blue)](#)
[![n8n](https://img.shields.io/badge/Automation-n8n-purple)](#)
[![Mobile First](https://img.shields.io/badge/UI-Mobile--First-brightgreen)](#)
[![ADA Compliant](https://img.shields.io/badge/Accessibility-ADA%20Compliant-success)](#)
[![License](https://img.shields.io/badge/License-Private-lightgrey)](#)

---

## 📌 Overview

**RoadGenieTMS** is a modern, mobile-first Transportation Management System (TMS) built for independent dispatchers and small carrier operations.

It centralizes:

* 📥 Automated load ingestion (Gmail → n8n → Firebase)
* 📊 Real-time load management
* 🔐 Role-based authentication
* 📋 Unified Load Inbox workflow
* 📱 Mobile-optimized dispatch operations

Built with Angular and Firebase, RoadGenieTMS enables dispatchers to operate efficiently, make informed decisions, and scale with confidence.

---

## 🎯 MVP Scope

Phase 1 includes:

* Angular SPA (Standalone Components)
* Firebase Authentication (Email/Password + role-based access)
* Firestore-backed Load Inbox
* Secure Cloud Function ingestion endpoint
* Gmail → n8n automation pipeline
* Load deduplication strategy
* Status workflow:

  * NEW
  * NEGOTIATING
  * ASSIGNED
  * BOOKED
  * SKIPPED
* ADA-compliant UI
* Mobile-first responsive layout

---

## 🏗 Architecture

```
Gmail (Trucker Path Alerts)
        ↓
       n8n
        ↓
Firebase Cloud Function (ingestTruckPathLoad)
        ↓
Firestore (loads collection)
        ↓
Angular SPA (Unified Load Inbox)
```

### Stack

| Layer        | Technology                            |
| ------------ | ------------------------------------- |
| Frontend     | Angular (Standalone, Mobile-First)    |
| Auth         | Firebase Authentication               |
| Database     | Firestore                             |
| Backend      | Firebase Cloud Functions (TypeScript) |
| Automation   | n8n                                   |
| Email Source | Gmail                                 |

---

## 📂 Project Structure

```
roadgenietms/
│
├── src/                         # Angular application
│   ├── app/
│   │   ├── auth/
│   │   ├── loads/
│   │   ├── core/
│   │   └── shared/
│
├── functions/                   # Firebase Cloud Functions
│   ├── src/
│   └── index.ts
│
├── docs/
│   └── delivery/
│       └── artifacts/
│           └── epics/
│               └── roadgenietms/
│
├── firebase.json
├── firestore.rules
└── README.md
```

---

## 🔐 Authentication & Roles

Roles are stored in Firestore (`users` collection):

* **owner** – full control
* **dispatcher** – operational control
* **viewer** – read-only

The first registered user automatically becomes `owner`.

---

## 📥 Load Ingestion

Loads are ingested via:

* Gmail label filtering (`TRUCKERPATH`)
* n8n parsing workflow
* Secure Cloud Function endpoint
* Dedupe strategy using hashed key
* Upsert into Firestore

---

## 📱 UI Principles

* Mobile-first layout
* Clean typography & spacing
* Accessible focus states
* Keyboard navigable
* High contrast color palette
* Accessible modals & drawers
* Dark / high-contrast mode ready

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Firebase Setup

```bash
firebase login
firebase use edx-roadgenietms
```

### 3️⃣ Start Development

```bash
ng serve
```

### 4️⃣ Run Firebase Emulator

```bash
firebase emulators:start
```

---

## 🔄 Deployment

```bash
ng build --configuration production
firebase deploy
```

---

## 📊 Future Phases (Post-MVP)

* 📈 KPI & analytics dashboard
* 💰 Profit engine & margin scoring
* 🤖 AI-assisted negotiation
* 🔄 DAT integration (dual load-board strategy)
* 👤 Driver portal
* 📦 BigQuery analytics layer

---

## 🛡 Security

* Firestore rules enforce role-based access
* HTTPS-only ingestion endpoint
* Ingest secret validation
* Dedupe protection
* Error logging to `ingest_errors`

---

## 📘 Documentation

See:

```
docs/delivery/artifacts/epics/roadgenietms/
```

For:

* Architecture notes
* Auth flows
* Ingestion contracts
* Security policies
* Deployment strategy

---

## 🏢 Company

RoadGenieTMS is developed and maintained by:

**EDXSTORE LLC**

---

## 📜 License

Private internal product.
All rights reserved © EDXSTORE LLC.

---

---

If you'd like next, I can provide:

* 🔵 A **professional open-source style README version**
* 🟢 A **private SaaS investor-ready README**
* 🟣 A **GitHub repository description (short 160-character version)**
* 🟡 A **brand positioning statement for RoadGenieTMS website**

Let me know which direction you want.
