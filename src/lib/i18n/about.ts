import type { Locale } from "@/contexts/LanguageContext";

export const aboutTranslations = {
  ko: {
    badge: "ABOUT NANUM LAB",
    pageLabel: "ABOUT US",
    companyName: "주식회사 나눔랩",
    companyNameEn: "NanumLab Inc.",
    brandPersonality:
      "공공 디지털 전환(DX·AX)을 위한 AI·데이터·플랫폼 전문 실행형 ICT 기업",
    slogan: "AI·데이터 기술로 공공서비스의 일상을 다시 설계합니다.",
    introBadge: "COMPANY OVERVIEW",
    introTitle: "기업 소개",
    intro:
      "주식회사 나눔랩은 복잡하고 까다로운 공공·기업 현장의 업무 환경을 깊이 이해하고, 이를 디지털로 전환하여 실제로 즉시 운영 가능한 실용적인 AI 서비스를 구축합니다.",
    valuesBadge: "CORE VALUES",
    valuesTitle: "3대 핵심 가치",
    values: [
      {
        title: "실용성",
        titleEn: "Practicality",
        description:
          "과장 없는 AI 기술 적용으로 실제 공공 현장에 즉시 도입·운영 가능한 플랫폼 구축",
      },
      {
        title: "신뢰성",
        titleEn: "Reliability",
        description:
          "개인정보보호, 철저한 권한 관리, 감사로그 기반의 안전한 보안 컴플라이언스 준수",
      },
      {
        title: "확장성",
        titleEn: "Scalability",
        description:
          "기관별 망분리 정책과 인프라에 맞춘 클라우드(Public/Private) 및 온프레미스 유연 배포 지원",
      },
    ],
    targetsBadge: "TARGET & PARTNERS",
    targetsTitle: "주요 타겟 및 파트너",
    targets: [
      {
        title: "정부 부처 · 지자체 및 공기업",
        description:
          "행정 효율화가 필요한 공공기관 (예: 지자체 행정 포털 구축, 공공 문서 OCR 자동화, 오픈데이터 및 위성정보 기반 도시통계 리포트 자동 생성 등)",
        highlight: "주요 실적: 강원도청 행정 플랫폼 개발 및 운영 성공 사례 보유",
      },
      {
        title: "대형 콜센터 및 민원 상담 조직",
        description:
          "상담 자동화 및 고도화가 필요한 조직 (예: 실시간 STT 음성 인식, 상담 내용 요약, 감정 분석 및 민원 분류 기반의 스마트 AI 민원콜센터 구축)",
      },
      {
        title: "SI 파트너사 및 지역 기반 공공서비스 사업자",
        description:
          "End-to-End 시스템 통합 파트너십 (예: 공공마이데이터 연동 스마트 티켓팅, 벡터 DB 기반의 로컬 검색 및 지역 음식점 추천 플랫폼 협업)",
      },
    ],
    servicesBadge: "OUR SERVICES",
    servicesTitle: "주요 사업 영역",
    servicesIntro:
      "주식회사 나눔랩은 현장 중심의 실용형 공공·B2B 디지털 플랫폼을 개발 및 공급하며, 분절 없는 End-to-End 시스템 통합을 통해 공공과 기업의 업무를 혁신합니다.",
    services: [
      {
        num: "01",
        title: "공공마이데이터 연동 스마트 티켓 발권 플랫폼",
        description:
          "자격 확인부터 본인 인증, QR 예약 및 결제까지 복잡한 과정을 하나의 흐름으로 묶은 모바일 통합 발권 시스템입니다.",
        features: [
          "실시간 자격 검증",
          "모바일 본인 인증",
          "QR 코드 기반 예약 및 결제 통합",
        ],
      },
      {
        num: "02",
        title: "AI 기반 로컬 검색 및 지역 음식점 추천 플랫폼 (공공·관광 특화)",
        description:
          "자연어 문장 질의와 벡터 DB 기술을 활용하여, 사용자 맞춤형 지역 식당 및 카페를 정밀하게 찾아주는 똑똑한 관광 가이드 서비스입니다.",
        features: [
          "자연어 문장 질의 해석",
          "벡터 DB 기반 검색",
          "개인화된 맞춤형 지역 추천",
        ],
      },
      {
        num: "03",
        title: "AI 민원콜센터 및 음성 AI 서비스",
        description:
          "대규모 상담 조직과 민원 현장의 업무를 자동화하여 상담원의 업무 피로도를 낮추고 민원 만족도를 극대화하는 음성 지능 시스템입니다.",
        features: [
          "실시간 STT(음성-텍스트 전환)",
          "상담 내용 자동 요약",
          "고객 감정 분석 및 화자 인증",
          "민원 분류 기반 상담 자동화",
        ],
      },
      {
        num: "04",
        title: "공공데이터·위성정보 AI 분석 서비스",
        description:
          "방대한 공공 오픈데이터와 위성 및 공간정보를 결합·분석하여, 정책 수립과 의사결정에 필요한 정량 리포트를 자동으로 생성합니다.",
        features: [
          "공공 데이터+위성·공간정보 융합 분석",
          "환경·안전·도시통계 정량 리포트 자동 생성",
        ],
      },
      {
        num: "05",
        title: "XR·3D 공간 데이터 기반 디지털 콘텐츠 (미래 확장)",
        description:
          "공공 공간 및 관광 자원을 3D로 시각화하여 생생한 가상 체험을 제공하고, 디지털 트윈 기술로의 확장을 준비하는 혁신 콘텐츠입니다.",
        features: [
          "공공/관광 자원 3D 시각화",
          "가상 체험 콘텐츠 기획",
          "디지털 트윈 응용",
        ],
      },
      {
        num: "06",
        title: "통합 개발 플랫폼 (End-to-End 시스템 통합)",
        description:
          "모바일 앱, 관리자 웹(CMS), API 서버, 데이터베이스를 단일 흐름으로 통합 설계 및 구축하여 외주 분절로 인한 시스템 정합성 문제를 완벽히 해결합니다.",
        features: [
          "모바일 앱 & 관리자 CMS 연동",
          "API 서버 및 DB 통합 설계",
          "외주 구조 정합성 이슈 해결",
        ],
      },
    ],
    servicesFeaturesLabel: "주요 기능",
    techStackBadge: "TECHNICAL STACK",
    techStackTitle: "나눔랩만의 차별화된 기술 역량",
    techStack: [
      {
        label: "AI & 자연어 처리",
        description:
          "대형언어모델(LLM) 기반 챗봇, RAG(검색 증강 생성) 파이프라인, 지식 검색, Tool Calling 업무 자동화, 벡터 DB 역량 보유",
      },
      {
        label: "음성 및 시각 지능",
        description:
          "실시간 STT, 대규모 비정형 데이터 전처리, 영수증·신청서·증빙자료 정밀 추출용 고성능 OCR, 위성 및 공간 데이터 분석",
      },
      {
        label: "설명 가능한 AI (XAI)",
        description:
          "복잡한 AI 분석 결과나 불량/이상 징후의 원인을 일방적으로 통보하지 않고, 작업자가 쉽게 이해할 수 있는 '현장 언어'로 풀어서 대화하듯 설명하는 소통형 기술 모듈 적용",
        highlight: true,
      },
      {
        label: "현장 중심 DX 아키텍처",
        description:
          "기술 편의주의를 배제하고, 프로그래밍 지식이 없는 현장 직원도 쉽게 다룰 수 있도록 '일하는 방식'을 먼저 분석하여 맞춤형 프로세스로 설계",
      },
    ],
    backToHome: "홈으로 돌아가기",
  },
  en: {
    badge: "ABOUT NANUM LAB",
    pageLabel: "ABOUT US",
    companyName: "NanumLab Inc.",
    companyNameEn: "NanumLab Inc.",
    brandPersonality:
      "An execution-focused ICT company specializing in AI, data, and platforms for public digital transformation (DX·AX).",
    slogan: "We redesign everyday public services with AI and data technology.",
    introBadge: "COMPANY OVERVIEW",
    introTitle: "Company Overview",
    intro:
      "NanumLab deeply understands complex public and enterprise field environments and transforms them digitally—building practical AI services that are ready to operate from day one.",
    valuesBadge: "CORE VALUES",
    valuesTitle: "Three Core Values",
    values: [
      {
        title: "Practicality",
        titleEn: "Practicality",
        description:
          "Deploying AI without hype—building platforms that can be adopted and operated immediately in real public-sector environments.",
      },
      {
        title: "Reliability",
        titleEn: "Reliability",
        description:
          "Ensuring privacy protection, rigorous access control, and audit-log-based security compliance.",
      },
      {
        title: "Scalability",
        titleEn: "Scalability",
        description:
          "Flexible deployment across public/private cloud and on-premises, aligned with each agency's network isolation policies and infrastructure.",
      },
    ],
    targetsBadge: "TARGET & PARTNERS",
    targetsTitle: "Target & Partners",
    targets: [
      {
        title: "Government Ministries, Local Governments & Public Enterprises",
        description:
          "Public institutions seeking administrative efficiency (e.g., local government portal development, public document OCR automation, open data and satellite-based urban statistics report generation)",
        highlight:
          "Key track record: Successful development and operation of the Gangwon Provincial Government administrative platform",
      },
      {
        title: "Large Call Centers & Civil Complaint Consultation Teams",
        description:
          "Organizations requiring consultation automation and advancement (e.g., real-time STT speech recognition, call summarization, smart AI civil complaint call centers based on sentiment analysis and complaint classification)",
      },
      {
        title: "SI Partners & Region-Based Public Service Providers",
        description:
          "End-to-end system integration partnerships (e.g., public MyData-linked smart ticketing, vector DB-based local search and regional restaurant recommendation platform collaboration)",
      },
    ],
    servicesBadge: "OUR SERVICES",
    servicesTitle: "Our Services",
    servicesIntro:
      "NanumLab develops and delivers field-centered public and B2B digital platforms, innovating public and enterprise operations through seamless end-to-end system integration.",
    services: [
      {
        num: "01",
        title: "Public MyData Smart Ticketing Platform",
        description:
          "A mobile integrated ticketing system that unifies complex flows from eligibility verification and identity authentication to QR reservation and payment.",
        features: [
          "Real-time eligibility verification",
          "Mobile identity authentication",
          "QR-based reservation and payment integration",
        ],
      },
      {
        num: "02",
        title: "AI Local Search & Regional Restaurant Recommendation (Public/Tourism)",
        description:
          "A smart tourism guide service that uses natural language queries and vector DB technology to precisely find personalized local restaurants and cafes.",
        features: [
          "Natural language query interpretation",
          "Vector DB-based search",
          "Personalized regional recommendations",
        ],
      },
      {
        num: "03",
        title: "AI Civil Complaint Call Center & Voice AI",
        description:
          "A voice intelligence system that automates large-scale consultation and civil complaint operations, reducing agent fatigue and maximizing satisfaction.",
        features: [
          "Real-time STT (speech-to-text)",
          "Automatic call summarization",
          "Customer sentiment analysis and speaker verification",
          "Complaint classification-based consultation automation",
        ],
      },
      {
        num: "04",
        title: "Public Data & Satellite AI Analytics",
        description:
          "Combines and analyzes vast public open data with satellite and spatial information to automatically generate quantitative reports for policy and decision-making.",
        features: [
          "Public data + satellite/spatial information fusion analysis",
          "Auto-generated quantitative reports on environment, safety, and urban statistics",
        ],
      },
      {
        num: "05",
        title: "XR·3D Spatial Digital Content (Future Expansion)",
        description:
          "Innovative content that visualizes public spaces and tourism resources in 3D for immersive virtual experiences, preparing for digital twin expansion.",
        features: [
          "3D visualization of public/tourism resources",
          "Virtual experience content planning",
          "Digital twin applications",
        ],
      },
      {
        num: "06",
        title: "Integrated Development Platform (End-to-End Integration)",
        description:
          "Unified design and build of mobile apps, admin web (CMS), API servers, and databases in a single flow—fully resolving system consistency issues from fragmented outsourcing.",
        features: [
          "Mobile app & admin CMS integration",
          "API server and DB unified design",
          "Resolution of outsourced structure consistency issues",
        ],
      },
    ],
    servicesFeaturesLabel: "Key Features",
    techStackBadge: "TECHNICAL STACK",
    techStackTitle: "NanumLab's Differentiated Technical Capabilities",
    techStack: [
      {
        label: "AI & Natural Language Processing",
        description:
          "LLM-based chatbots, RAG pipelines, knowledge search, Tool Calling automation, and vector database capabilities.",
      },
      {
        label: "Voice & Visual Intelligence",
        description:
          "Real-time STT, large-scale unstructured data preprocessing, high-performance OCR for receipts/applications/evidence, satellite and spatial data analysis.",
      },
      {
        label: "Explainable AI (XAI)",
        description:
          "Rather than one-way alerts about complex AI analysis or defect/anomaly causes, our conversational module explains outcomes in plain 'field language' operators can easily understand.",
        highlight: true,
      },
      {
        label: "Field-Centered DX Architecture",
        description:
          "Rejecting technology for its own sake—we first analyze how work actually happens and design tailored processes so field staff without programming knowledge can use systems with ease.",
      },
    ],
    backToHome: "Back to Home",
  },
} as const satisfies Record<Locale, object>;

export function getAboutT(locale: Locale) {
  return aboutTranslations[locale];
}
