(function () {
  "use strict";

  const data = window.portfolioData;

  if (!data) {
    console.error("portfolioData is missing. Check data.js load order.");
    return;
  }

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value || "";
  };

  const createAnchor = (href, label, className, ariaLabel) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    a.className = className;
    if (ariaLabel) a.setAttribute("aria-label", ariaLabel);
    if (!href.startsWith("mailto:")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  };

  const renderProfile = () => {
    setText("hero-name", data.profile?.name);
    setText("hero-role", data.profile?.role);
    setText("hero-tagline-ko", data.profile?.taglineKo);
    setText("hero-tagline-en", data.profile?.taglineEn);
  };

  const renderAbout = () => {
    setText("about-summary-ko", data.about?.summaryKo);
    setText("about-summary-en", data.about?.summaryEn);
  };

  const renderHeroCta = () => {
    const cta = document.getElementById("hero-cta");
    if (!cta) return;

    const { githubUrl, linkedinUrl, email } = data.contact || {};
    const ctaItems = [
      {
        href: githubUrl,
        label: "GitHub",
        className: "btn btn-primary",
        ariaLabel: "GitHub 프로필 열기",
      },
      {
        href: linkedinUrl,
        label: "LinkedIn",
        className: "btn btn-secondary",
        ariaLabel: "LinkedIn 프로필 열기",
      },
      {
        href: email ? `mailto:${email}` : "",
        label: "Email",
        className: "btn btn-secondary",
        ariaLabel: "이메일 보내기",
      },
    ];

    ctaItems.forEach((item) => {
      if (item.href && item.href !== "mailto:") {
        cta.appendChild(createAnchor(item.href, item.label, item.className, item.ariaLabel));
      }
    });
  };

  const renderSkills = () => {
    const skillsList = document.getElementById("skills-list");
    if (!skillsList) return;

    const skills = Array.isArray(data.skills) ? data.skills : [];
    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.className = `skill-tag skill--${skill.level || "working"}`;
      li.textContent = skill.name || "Unnamed Skill";
      skillsList.appendChild(li);
    });
  };

  const renderProjects = () => {
    const projectsList = document.getElementById("projects-list");
    if (!projectsList) return;

    const projects = Array.isArray(data.projects) ? data.projects : [];
    if (projects.length !== 3) {
      console.warn(
        `Expected exactly 3 projects for MVP layout, but received ${projects.length}. Rendering anyway.`
      );
    }

    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.setAttribute("aria-labelledby", `project-title-${project.slug}`);

      const title = document.createElement("h3");
      title.className = "project-title";
      title.id = `project-title-${project.slug}`;
      title.textContent = project.title || "Untitled Project";

      const descKo = document.createElement("p");
      descKo.className = "project-desc-ko";
      descKo.textContent = project.descriptionKo || "";

      const descEn = document.createElement("p");
      descEn.className = "project-desc-en";
      descEn.lang = "en";
      descEn.textContent = project.descriptionEn || "";

      const highlights = document.createElement("ul");
      highlights.className = "project-highlights";
      (project.highlights || []).slice(0, 3).forEach((line) => {
        const item = document.createElement("li");
        item.textContent = line;
        highlights.appendChild(item);
      });

      const techList = document.createElement("ul");
      techList.className = "tech-list";
      (project.tech || []).forEach((tech) => {
        const item = document.createElement("li");
        item.textContent = tech;
        techList.appendChild(item);
      });

      const linkWrap = document.createElement("div");
      linkWrap.className = "project-links";

      if (project.repoUrl) {
        linkWrap.appendChild(
          createAnchor(project.repoUrl, "Repository", "btn btn-secondary", `${project.title} 저장소`)
        );
      }

      if (project.demoUrl) {
        linkWrap.appendChild(
          createAnchor(project.demoUrl, "Demo", "btn btn-secondary", `${project.title} 데모`)
        );
      }

      card.append(title, descKo, descEn, highlights, techList, linkWrap);
      projectsList.appendChild(card);
    });
  };

  const renderContact = () => {
    const contactList = document.getElementById("contact-list");
    if (!contactList) return;

    const { email, githubUrl, linkedinUrl } = data.contact || {};
    const entries = [
      { label: "Email", value: email, href: `mailto:${email}` },
      { label: "GitHub", value: githubUrl, href: githubUrl },
      { label: "LinkedIn", value: linkedinUrl, href: linkedinUrl },
    ];

    entries.forEach((entry) => {
      if (!entry.value) return;

      const li = document.createElement("li");
      li.className = "contact-item";

      const link = createAnchor(entry.href, "", "", `${entry.label} 열기`);
      const label = document.createElement("span");
      label.className = "contact-label";
      label.textContent = entry.label;
      const value = document.createElement("span");
      value.className = "contact-value";
      value.textContent = entry.value;

      link.append(label, value);
      li.appendChild(link);
      contactList.appendChild(li);
    });
  };

  const setupRevealAnimation = () => {
    const sections = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!sections.length) return;

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    sections.forEach((section, idx) => {
      section.style.transitionDelay = `${Math.min(idx * 60, 180)}ms`;
      observer.observe(section);
    });
  };

  const renderFooter = () => {
    const year = document.getElementById("current-year");
    if (year) year.textContent = String(new Date().getFullYear());
  };

  const init = () => {
    renderProfile();
    renderAbout();
    renderHeroCta();
    renderSkills();
    renderProjects();
    renderContact();
    renderFooter();
    setupRevealAnimation();
  };

  init();
})();
