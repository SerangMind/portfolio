# Portfolio (GitHub Pages MVP)

채용 담당자가 빠르게 핵심 정보를 파악할 수 있도록 설계된 1페이지 포트폴리오 템플릿입니다.

## Stack
- Static `HTML/CSS/JS`
- Single source content file: `data.js`
- GitHub Actions deployment to GitHub Pages

## Project Structure
```text
.
├── .github/workflows/deploy.yml
├── app.js
├── assets/
├── data.js
├── index.html
└── styles.css
```

## Run Locally
`index.html`을 브라우저에서 직접 열어도 동작하지만, 로컬 서버 실행을 권장합니다.

```bash
# Option 1
python -m http.server 8000

# Option 2
npx serve .
```

이후 `http://localhost:8000` 또는 `http://localhost:3000`에서 확인합니다.

## Content Editing
주요 텍스트와 링크는 `data.js`에서만 수정합니다.

### Required replacement checklist
- [ ] `YOUR NAME`
- [ ] `EMAIL@example.com`
- [ ] `https://github.com/USERNAME`
- [ ] `https://www.linkedin.com/in/LINKEDIN_URL`
- [ ] 각 프로젝트의 `repoUrl`
- [ ] 각 프로젝트의 `demoUrl`
- [ ] 프로젝트 설명/하이라이트(문제-해결-결과)

## Data Interface (stable)
`app.js`는 아래 스키마를 전제로 렌더링합니다.

```js
const portfolioData = {
  profile: {
    name: "",
    role: "",
    taglineKo: "",
    taglineEn: ""
  },
  about: {
    summaryKo: "",
    summaryEn: ""
  },
  skills: [
    { name: "", level: "core|strong|working" }
  ],
  projects: [
    {
      slug: "",
      title: "",
      descriptionKo: "",
      descriptionEn: "",
      tech: [""],
      repoUrl: "",
      demoUrl: "",
      highlights: [""]
    }
  ],
  contact: {
    email: "",
    githubUrl: "",
    linkedinUrl: ""
  }
};
```

`projects.length !== 3`이면 콘솔 경고를 출력하지만 렌더링은 계속 진행됩니다.

## Deployment (GitHub Pages + Actions)
1. 저장소 이름을 `portfolio`로 생성합니다.
2. 코드 푸시 후 GitHub 저장소 설정에서 `Settings > Pages`로 이동합니다.
3. `Build and deployment`의 `Source`를 `GitHub Actions`로 선택합니다.
4. `main` 브랜치에 푸시하면 워크플로우가 자동으로 배포합니다.

기본 URL 형식:
`https://<github-username>.github.io/portfolio/`

## QA Checklist
- [ ] 375px / 768px / 1280px 반응형 레이아웃 확인
- [ ] 키보드 탭 순서 및 포커스 스타일 확인
- [ ] GitHub / LinkedIn / Email 링크 동작 확인
- [ ] Lighthouse 기본 점검 (Performance, Best Practices, SEO, Accessibility)
