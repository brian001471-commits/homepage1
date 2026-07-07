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
    process: {
      badge: "BUILD PROCESS",
      title: "체계적이고 안정적인 AI 서비스 구축 프로세스",
      subtitle:
        "기획부터 튜닝, 배포까지 나눔랩의 베테랑 전문 인력이 엔드투엔드(End-to-End)로 함께합니다.",
      steps: [
        {
          step: "01",
          title: "AI 서비스 기획",
          description:
            "고객사의 비즈니스 환경과 데이터 구조를 정밀 진단하여, 도입 가능한 최적의 AI 모델과 요구사항을 정의합니다.",
        },
        {
          step: "02",
          title: "데이터 학습 및 모델 튜닝",
          description:
            "수집된 데이터를 전처리하고, LLM, STT, OCR 등 핵심 AI 알고리즘을 현장 도메인 지식에 맞춰 정밀 파인튜닝합니다.",
        },
        {
          step: "03",
          title: "시스템 통합 및 API 연동",
          description:
            "기존 업무 시스템 및 데이터베이스와 매끄럽게 연결되도록 고성능 API와 사용자 중심의 관리자 웹/모바일 인터페이스를 구축합니다.",
        },
        {
          step: "04",
          title: "안정적 배포 및 운영 전환",
          description:
            "기관의 보안 정책에 맞춰 클라우드 또는 온프레미스(폐쇄망) 환경에 안전하게 배포하고, 지속적인 모니터링 체계를 수립합니다.",
        },
      ],
    },
    research: {
      badge: "Nanum Lab Archive",
      title: "연구 성과 및 비즈니스 실적",
      subtitle:
        "AI 솔루션 개발 및 DX 프로젝트 성과를 데이터 바인딩 패턴으로 연계한 신뢰성 지표 정보망입니다.",
      cards: [
        {
          title: "강원도청 행정 플랫폼 개발 및 운영",
          category: "PUBLIC · GOVERNMENT",
          metric: "지자체 행정 플랫폼 구축",
          description:
            "지자체의 핵심 행정 포털 및 관리자 시스템을 성공적으로 구축하고 안정적으로 운영함으로써, 대규모 공공 프로젝트를 이끄는 높은 기술 리더십과 공공 시장에서의 신뢰성을 입증하였습니다.",
          tag: "기술 리더십",
        },
        {
          title: "대규모 공공 문서 OCR 및 데이터 최적화",
          category: "DATA · AI",
          metric: "문서 AI · OCR",
          description:
            "복잡하고 다양한 형태의 비정형 공공 문서 양식을 자동으로 인식하는 고성능 OCR 기술과 AI 학습에 최적화된 데이터 전처리 기술을 구현하여, 행정 처리 과정의 대폭적인 자동화를 실현했습니다.",
          tag: "문서 AI",
        },
        {
          title: "공공 및 관광 분야 특화 플랫폼 안착",
          category: "PUBLIC · TOURISM DX",
          metric: "공공·관광 DX",
          description:
            "공공마이데이터 연동 스마트 티켓 발권 플랫폼, 자격 확인 및 결제 통합 시스템, 그리고 지역 음식점 추천 플랫폼을 성공적으로 안착시켜 공공·관광 산업의 실질적인 디지털 전환을 수행했습니다.",
          tag: "플랫폼 안착",
        },
      ],
    },
    location: {
      badge: "LOCATION",
      title: "찾아오시는길",
      addressLine1: "춘천시 후석로 462번길 7",
      addressLine2: "춘천ICT벤처센터 307호",
      mapQuery: "춘천시 후석로 462번길 7 춘천ICT벤처센터 307호",
      mapReset: "지정 위치로 돌아가기",
    },
    footer: {
      company: "주식회사 나눔랩 | 대표자: 김대준 | T: 033-912-1004 E: june@nanumlab.com",
      address: "춘천시 후석로 462번길 7 춘천ICT벤처센터 307호",
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
    process: {
      badge: "BUILD PROCESS",
      title: "Systematic & Reliable AI Service Build Process",
      subtitle:
        "From planning through tuning to deployment—NanumLab's veteran experts accompany you end-to-end.",
      steps: [
        {
          step: "01",
          title: "AI Service Planning",
          description:
            "We precisely diagnose your business environment and data structure to define the optimal AI models and requirements for adoption.",
        },
        {
          step: "02",
          title: "Data Training & Model Tuning",
          description:
            "We preprocess collected data and finely tune core AI algorithms—LLM, STT, OCR—to match field domain knowledge.",
        },
        {
          step: "03",
          title: "System Integration & API Linking",
          description:
            "We build high-performance APIs and user-centered admin web/mobile interfaces that connect seamlessly with existing systems and databases.",
        },
        {
          step: "04",
          title: "Stable Deployment & Operations",
          description:
            "We securely deploy to cloud or on-premises (closed network) environments per agency security policies and establish continuous monitoring.",
        },
      ],
    },
    research: {
      badge: "Nanum Lab Archive",
      title: "Research & Business Achievements",
      subtitle:
        "A reliability index network linking AI solution development and DX project outcomes.",
      cards: [
        {
          title: "Gangwon Provincial Government Platform Development & Operations",
          category: "PUBLIC · GOVERNMENT",
          metric: "Local Gov Platform",
          description:
            "By successfully building and stably operating core administrative portals and admin systems for local governments, we demonstrated strong technical leadership in large-scale public projects and earned trust in the public sector market.",
          tag: "Leadership",
        },
        {
          title: "Large-Scale Public Document OCR & Data Optimization",
          category: "DATA · AI",
          metric: "Document AI · OCR",
          description:
            "We implemented high-performance OCR for diverse unstructured public document formats and data preprocessing optimized for AI learning—achieving dramatic automation of administrative processing.",
          tag: "Document AI",
        },
        {
          title: "Public & Tourism Specialized Platform Deployment",
          category: "PUBLIC · TOURISM DX",
          metric: "Public · Tourism DX",
          description:
            "We successfully deployed a Public MyData smart ticketing platform, integrated eligibility verification and payment systems, and a regional restaurant recommendation platform—driving real digital transformation in public and tourism industries.",
          tag: "Platform Launch",
        },
      ],
    },
    location: {
      badge: "LOCATION",
      title: "Directions",
      addressLine1: "7, Huseok-ro 462beon-gil, Chuncheon",
      addressLine2: "Room 307, Chuncheon ICT Venture Center",
      mapQuery: "Chuncheon ICT Venture Center, 7 Huseok-ro 462beon-gil, Chuncheon",
      mapReset: "Back to marked location",
    },
    footer: {
      company: "Nanum Lab Co., Ltd. | CEO: Kim Dae-jun | T: 033-912-1004 E: june@nanumlab.com",
      address: "Room 307, Chuncheon ICT Venture Center, 7 Huseok-ro 462beon-gil, Chuncheon",
    },
    backToTop: "Back to top",
  },
} as const satisfies Record<Locale, object>;

export function getHomeT(locale: Locale) {
  return homeTranslations[locale];
}
