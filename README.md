# 방가 (Banga) - 첫 자취 집 마련 서비스

청년층의 첫 자취집 마련을 돕는 부동산 실거래가 검색 및 맞춤 추천 웹 서비스입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS 4
- TanStack Query (React Query) 5
- pnpm
- ESLint, Prettier, Husky, lint-staged

## 프로젝트 구조

```
banga-fe/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 홈 페이지
│   │   └── globals.css         # 전역 스타일
│   ├── components/             # 재사용 가능한 컴포넌트
│   │   ├── common/             # 공통 UI 컴포넌트 (Button, Input 등)
│   │   ├── features/           # 기능별 컴포넌트 (Search, Map 등)
│   │   └── layouts/            # 레이아웃 컴포넌트 (Header, Footer 등)
│   ├── lib/                    # 라이브러리 및 유틸리티
│   │   ├── api/                # API 클라이언트
│   │   ├── hooks/              # 커스텀 훅
│   │   └── utils/              # 유틸리티 함수
│   ├── providers/              # React Context Providers
│   │   └── query-provider.tsx  # TanStack Query Provider
│   ├── types/                  # TypeScript 타입 정의
│   ├── constants/              # 상수 정의
│   └── styles/                 # 추가 스타일 파일
├── public/                     # 정적 파일
└── .vooster/                   # Vooster AI 설정
```

## 주요 기능

- 부동산 실거래가 검색
- 가격 추이 시각화
- 개인 맞춤 추천
- 지도 기반 마커 표시
