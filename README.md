# 🚀 Tauri + React + Vite Design System

Tauri와 React를 활용한 고성능 데스크톱 애플리케이션 보일러플레이트입니다. 로컬 리소스 활용을 극대화하고, 데이터 보안을 최우선으로 하는 **Local-First** 철학을 바탕으로 설계되었습니다.

## 🛠 Tech Stack

| Category            | Technology                    |
| :------------------ | :---------------------------- |
| **Frontend**        | React 18+, Vite               |
| **Backend**         | Rust (Tauri v2)               |
| **Styling**         | Tailwind CSS v4, shadcn/ui    |
| **Design System**   | Radix UI (Base) + Nova Preset |
| **Routing**         | TanStack Router               |
| **Package Manager** | pnpm                          |

## ✨ Design System Features

- **shadcn/ui (Nova Preset)**: 데이터 중심의 인터페이스에 최적화된 고밀도(High-Density) 레이아웃을 제공합니다.
- **Tailwind CSS v4**: `@tailwindcss/vite` 플러그인을 통한 초고속 빌드 및 최신 CSS 기능을 지원합니다.
- **Radix UI**: 접근성(Accessibility)이 보장된 로우 레벨 컴포넌트를 기반으로 정교한 UI를 구성합니다.
- **Dark Mode**: 시스템 테마에 맞춘 자연스러운 다크 모드 전환을 기본으로 지원합니다.

## 📂 Project Structure

```text
.
├── src/                # React Frontend
│   ├── components/     # shadcn/ui & Shared Components
│   ├── routes/         # TanStack Router Definitions
│   ├── lib/            # Utilities (utils.ts, etc.)
│   └── index.css       # Tailwind v4 Entry Point
├── src-tauri/          # Rust Backend
│   ├── src/            # Rust source code (main.rs, commands)
│   └── tauri.conf.json # Tauri Application Config
├── tailwind.config.js  # Tailwind Bridge for shadcn/ui
└── tsconfig.json       # Path Alias (@/*) Configuration
```

## 🚀 Getting Started

### 1. Prerequisites

- **Rust**: [최신 안정 버전 설치](https://www.rust-lang.org/tools/install)
- **pnpm**: `brew install pnpm`

### 2. Installation

```bash
# 의존성 설치
pnpm install

# pnpm 빌드 스크립트 승인 (esbuild 등 보안 정책 허용)
pnpm approve-builds
```

## 🛸 Tauri 개발 모드 및 Vite 서버 실행

```
pnpm tauri dev
```

## 💡 Development Tips

- Import Alias: @/ 경로 별칭이 설정되어 있어 src 폴더 내부를 절대 경로로 깔끔하게 참조할 수 있습니다.

- Tauri Commands: Rust의 강력한 성능이 필요할 때 invoke API를 통해 시스템 레벨의 명령을 안전하게 호출합니다.

- Adding Components: 새로운 shadcn/ui 컴포넌트가 필요하면 pnpm dlx shadcn@latest add [component] 명령어를 사용하세요.
