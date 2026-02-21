/**
 * Public data interface for the portfolio.
 * Keep this shape stable to preserve app.js compatibility.
 */
const portfolioData = {
  profile: {
    name: "YOUR NAME",
    role: "Frontend Developer",
    taglineKo:
      "사용자 문제를 제품 가치로 연결하는 프론트엔드 개발자입니다. 명확한 구조와 빠른 성능을 중요하게 생각합니다.",
    taglineEn: "Frontend engineer focused on clear UX, robust structure, and fast delivery.",
  },
  about: {
    summaryKo:
      "실무에서 서비스 개선 과제를 정의하고, UI/UX 설계부터 구현·배포까지 책임지며 반복 가능한 개발 흐름을 구축해 왔습니다.",
    summaryEn:
      "I turn ambiguous product goals into shippable interfaces with maintainable code and measurable outcomes.",
  },
  skills: [
    { name: "JavaScript (ES6+)", level: "core" },
    { name: "TypeScript", level: "strong" },
    { name: "React", level: "core" },
    { name: "HTML/CSS", level: "core" },
    { name: "Accessibility", level: "strong" },
    { name: "Testing", level: "working" },
    { name: "Performance Optimization", level: "strong" },
    { name: "Git/GitHub", level: "core" },
  ],
  projects: [
    {
      slug: "project-alpha",
      title: "Project Alpha",
      descriptionKo: "대시보드 사용성 저하 문제를 데이터 중심 인터페이스로 개선한 프로젝트",
      descriptionEn: "Improved dashboard usability with data-first interaction patterns.",
      tech: ["React", "TypeScript", "CSS"],
      repoUrl: "https://github.com/USERNAME/project-alpha",
      demoUrl: "https://USERNAME.github.io/project-alpha/",
      highlights: [
        "문제: 정보 밀도가 높아 주요 지표 탐색 시간이 길어짐",
        "해결: 카드 우선순위 재설계와 필터 동선 단축",
        "결과: 핵심 지표 도달 클릭 수와 탐색 시간을 감소",
      ],
    },
    {
      slug: "project-beta",
      title: "Project Beta",
      descriptionKo: "레거시 UI를 컴포넌트 기반 구조로 전환해 유지보수성을 높인 프로젝트",
      descriptionEn: "Migrated legacy UI into reusable components for maintainability.",
      tech: ["JavaScript", "HTML", "SCSS"],
      repoUrl: "https://github.com/USERNAME/project-beta",
      demoUrl: "https://USERNAME.github.io/project-beta/",
      highlights: [
        "문제: 화면별 중복 코드가 많아 수정 영향 범위 예측이 어려움",
        "해결: 공통 컴포넌트/토큰 체계 도입",
        "결과: 신규 기능 개발 리드타임 단축 및 회귀 이슈 감소",
      ],
    },
    {
      slug: "project-gamma",
      title: "Project Gamma",
      descriptionKo: "접근성 기준을 강화해 다양한 사용자 환경에서 사용성을 개선한 프로젝트",
      descriptionEn: "Raised accessibility baseline for broader usability across devices.",
      tech: ["Vanilla JS", "ARIA", "Performance"],
      repoUrl: "https://github.com/USERNAME/project-gamma",
      demoUrl: "https://USERNAME.github.io/project-gamma/",
      highlights: [
        "문제: 키보드 탐색 및 스크린리더 사용 시 흐름 단절 발생",
        "해결: 시맨틱 구조와 포커스 관리 로직 정비",
        "결과: 접근성 점수 개선 및 사용자 피드백 품질 향상",
      ],
    },
  ],
  contact: {
    email: "EMAIL@example.com",
    githubUrl: "https://github.com/USERNAME",
    linkedinUrl: "https://www.linkedin.com/in/LINKEDIN_URL",
  },
};

window.portfolioData = portfolioData;
