# 덴탈인사이드 DENTAL INSIDE

치과 전문 마케팅 에이전시 **덴탈인사이드(DENTAL INSIDE)** 다페이지 웹사이트입니다. 기존 디자인과 콘텐츠를 유지한 채 GitHub 저장소 및 Vercel 배포에 적합한 Vite 기반 정적 멀티페이지 프로젝트로 정리했습니다.

## 기술 구성

- Vite
- HTML, CSS, Vanilla JavaScript
- 정적 멀티페이지 구조(총 15개 경로)
- Vercel clean URL rewrite 설정
- 빌드 시 canonical, OG URL, sitemap, robots 자동 생성

## 로컬 실행

Node.js 20 이상을 권장합니다.

```bash
npm install
npm run dev
```

프로덕션 빌드와 로컬 미리보기:

```bash
npm run build
npm run preview
```

## 환경 변수

`.env.example`을 참고해 최종 도메인을 설정할 수 있습니다.

```env
SITE_URL=https://www.example.com
```

Vercel에서는 `SITE_URL`을 실제 운영 도메인으로 설정하세요. 설정하지 않으면 Vercel의 프로덕션 프로젝트 URL을 자동으로 사용합니다.

## GitHub 업로드

1. 이 폴더의 파일을 새 GitHub 저장소 루트에 업로드합니다.
2. `node_modules`와 `dist`는 업로드하지 않습니다.
3. `package.json`, 잠금 파일, `vite.config.js`, `vercel.json`, `src`, `public`이 저장소 루트에 있어야 합니다.

## Vercel 배포

1. Vercel에서 **Add New → Project**를 선택합니다.
2. GitHub 저장소를 Import합니다.
3. Framework Preset은 **Vite**로 선택합니다.
4. Build Command는 `npm run build`를 사용합니다.
5. Output Directory는 `dist`로 설정합니다.
6. 필요하면 Environment Variables에 `SITE_URL`을 추가합니다.
7. Deploy를 실행합니다.

`vercel.json`에 15개 페이지의 clean URL rewrite가 포함되어 있어 `/about`, `/services/ads` 같은 주소로 직접 접속해도 정상 표시됩니다.

## 페이지 목록

- `/`
- `/about`
- `/services`
- `/services/naver-place`
- `/services/dental-content`
- `/services/shorts-youtube`
- `/services/profile-photo`
- `/services/aeo-geo`
- `/services/patient-funnel`
- `/services/ads`
- `/services/website-consulting`
- `/cases`
- `/process`
- `/insights`
- `/contact`

## 주요 폴더

- `src/main.js`: 페이지 콘텐츠 및 인터랙션
- `src/styles.css`: 사이트 전체 스타일과 반응형 규칙
- `public/assets/images`: 최적화된 로고, 히어로, 서비스 이미지
- `scripts/generate-sitemap.mjs`: 빌드 시 sitemap과 robots 생성

## 운영 전 확인 사항

- 문의 폼은 현재 프런트엔드 데모 동작입니다. 실제 접수를 위해 서버리스 함수, 이메일 서비스 또는 CRM 연동이 필요합니다.
- 전화번호, 이메일, 운영시간 등 연락처를 실제 정보로 교체하세요.
- 치과 마케팅 성과 수치와 의료 관련 표현은 실제 근거 및 관련 법규를 기준으로 최종 검토하세요.
- 외부 Google Fonts를 사용하므로 네트워크가 차단된 환경에서는 시스템 폰트로 대체될 수 있습니다.
