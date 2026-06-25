import type { Locale } from "@/contexts/LanguageContext";

export const homeTranslations = {
  ko: {
    hero: {
      badge: "AI · DX Platform",
      titleLine1: "데이터로 여는",
      titleLine2Prefix: "지능형 비즈니스,",
      titleHighlight: "나눔랩",
      titleLine2Suffix: "과 함께",
      titleLine3: "디지털 전환을 설계합니다.",
      subtitle:
        "응용 소프트웨어 개발 및 AI 기반 DX를 선도하는 기술 전문 기업. 범용 AI 솔루션, DX 컨설팅, 지역산업 DX 확산, AI 실무 교육을 제공합니다.",
      downloadPdf: "서비스 소개서(PDF) 다운로드",
      scroll: "SCROLL TO EXPLORE",
    },
    about: {
      badge: "ABOUT NANUM LAB",
      title: "회사소개",
      subtitle: "데이터로 여는 지능형 비즈니스의 미래, 나눔랩",
      body: "나눔랩은 응용 소프트웨어 개발 및 AI 기반의 디지털 전환(DX)을 선도하는 기술 전문 기업입니다. 우리는 공공기관과 기업의 업무 프로세스를 데이터 기반으로 진단하고, 현장에 최적화된 맞춤형 AI 자동화 솔루션을 제공합니다. 복잡한 데이터 속에서 가치를 찾아내는 나눔랩의 기술력은 귀사의 비즈니스 효율을 극대화하고, 지속 가능한 혁신을 지원하는 강력한 파트너가 될 것입니다.",
      capabilities: [
        {
          title: "데이터 기반 의사결정 체계",
          description:
            "정형·비정형 데이터를 통합 분석하는 플랫폼 기술을 통해, 직관이 아닌 객관적 데이터에 근거한 성공적인 비즈니스 성과를 창출합니다.",
        },
        {
          title: "현장 중심 DX 아키텍처",
          description:
            "단순히 기술을 도입하는 것을 넘어, 고객의 업무 현장을 정밀하게 설계하여 최적화된 프로세스를 구축하고 지능형 운영 환경을 지원합니다.",
        },
      ],
    },
    process: {
      badge: "OUR PROCESS",
      title: "나눔랩과 함께하는 과정",
      subtitle: "고객의 DX 여정을 체계적으로 설계하고, 현장까지 함께합니다.",
      steps: [
        {
          step: "01",
          title: "요구사항 분석 및 계획 수립",
          description:
            "고객의 현안을 정밀하게 분석하여 비즈니스 목표에 부합하는 최적의 DX 전략을 수립합니다.",
        },
        {
          step: "02",
          title: "디자인 및 맞춤 개발",
          description:
            "기획된 DX 로드맵을 바탕으로 고객사와 긴밀히 협업하여 최적의 솔루션을 설계하고 개발합니다.",
        },
        {
          step: "03",
          title: "테스트 및 검증",
          description:
            "시스템 도입 후 현장에 안정적으로 안착할 수 있도록 철저한 검증과 피드백 과정을 거칩니다.",
        },
      ],
    },
    research: {
      badge: "Nanum Lab Archive",
      title: "연구 성과 및 비즈니스 실적",
      subtitle:
        "AI 솔루션 개발 및 DX 프로젝트 성과를 데이터 바인딩 패턴으로 연계한 신뢰성 지표 정보망입니다.",
      confirmed: "CONFIRMED DATA",
      cards: [
        { title: "빈칸", category: "빈칸", metric: "빈칸", description: "빈칸", tag: "빈칸" },
        { title: "빈칸", category: "빈칸", metric: "빈칸", description: "빈칸", tag: "빈칸" },
        { title: "빈칸", category: "빈칸", metric: "빈칸", description: "빈칸", tag: "빈칸" },
      ],
    },
    footer: {
      company: "주식회사 나눔랩 | 대표자: 나눔랩 | 사업자등록번호: [000-00-00000]",
      address: "강원특별자치도 춘천시 거두공단길 산학관 융합 DX 혁신 센터",
      designed: "Designed with Minimal Tech Concept & Powered by Next.js",
    },
    backToTop: "최상단으로 이동",
  },
  en: {
    hero: {
      badge: "AI · DX Platform",
      titleLine1: "Intelligent business",
      titleLine2Prefix: "powered by data —",
      titleHighlight: "Nanum Lab",
      titleLine2Suffix: "",
      titleLine3: "designs your digital transformation.",
      subtitle:
        "A technology company leading applied software development and AI-driven DX. We deliver universal AI solutions, DX consulting, regional industry DX expansion, and hands-on AI training.",
      downloadPdf: "Download Brochure (PDF)",
      scroll: "SCROLL TO EXPLORE",
    },
    about: {
      badge: "ABOUT NANUM LAB",
      title: "About Us",
      subtitle: "The future of intelligent business, opened by data — Nanum Lab",
      body: "Nanum Lab is a technology company leading applied software development and AI-based digital transformation (DX). We diagnose public and enterprise workflows with data, and deliver customized AI automation solutions optimized for the field. Our technology finds value in complex data, maximizes your business efficiency, and becomes a strong partner for sustainable innovation.",
      capabilities: [
        {
          title: "Data-Driven Decision Framework",
          description:
            "Our platform integrates structured and unstructured data analysis to deliver business outcomes grounded in objective data — not intuition.",
        },
        {
          title: "Field-Centered DX Architecture",
          description:
            "Beyond technology adoption, we precisely design your operational environment, build optimized processes, and support intelligent operations.",
        },
      ],
    },
    process: {
      badge: "OUR PROCESS",
      title: "How We Work With You",
      subtitle: "We systematically design your DX journey — from strategy to the field.",
      steps: [
        {
          step: "01",
          title: "Requirements Analysis & Planning",
          description:
            "We analyze your challenges in depth and establish an optimal DX strategy aligned with your business goals.",
        },
        {
          step: "02",
          title: "Design & Custom Development",
          description:
            "Based on the DX roadmap, we collaborate closely with your team to design and develop the best-fit solution.",
        },
        {
          step: "03",
          title: "Testing & Validation",
          description:
            "We ensure stable adoption in the field through rigorous verification and continuous feedback.",
        },
      ],
    },
    research: {
      badge: "Nanum Lab Archive",
      title: "Research & Business Achievements",
      subtitle:
        "A reliability index network linking AI solution development and DX project outcomes.",
      confirmed: "CONFIRMED DATA",
      cards: [
        { title: "Blank", category: "Blank", metric: "Blank", description: "Blank", tag: "Blank" },
        { title: "Blank", category: "Blank", metric: "Blank", description: "Blank", tag: "Blank" },
        { title: "Blank", category: "Blank", metric: "Blank", description: "Blank", tag: "Blank" },
      ],
    },
    footer: {
      company: "Nanum Lab Co., Ltd. | CEO: Nanum Lab | Business Reg. [000-00-00000]",
      address: "DX Innovation Center, Geodu Industrial Complex, Chuncheon, Gangwon",
      designed: "Designed with Minimal Tech Concept & Powered by Next.js",
    },
    backToTop: "Back to top",
  },
} as const satisfies Record<Locale, object>;

export function getHomeT(locale: Locale) {
  return homeTranslations[locale];
}
