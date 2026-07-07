import type { Locale } from "@/contexts/LanguageContext";

export const techTranslations = {
  ko: {
    badge: "CORE TECHNOLOGY",
    title: "핵심 기술 역량",
    slogan: "운영 가능한 AI 서비스를 위한 기술역량",
    capabilities: [
      {
        id: "frontend",
        title: "Frontend",
        description:
          "공공·기업 고객이 사용하는 대면 화면과 관리자 화면을 안정적으로 구성합니다.",
        tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "ShadCN UI", "Responsive UI"],
      },
      {
        id: "backend",
        title: "Backend",
        description: "업무 로직, 파일 처리, AI 연동, 관리자 기능을 API 중심으로 설계합니다.",
        tags: ["FastAPI", "Node.js", "REST API", "Auth", "Validation", "Batch Processing"],
      },
      {
        id: "database",
        title: "Database",
        description: "문의, 문서, 처리상태, 통계, 사용자 데이터를 구조적으로 저장합니다.",
        tags: ["PostgreSQL", "Schema Design", "Query Optimization", "Audit Log"],
      },
      {
        id: "ai-ocr",
        title: "AI/OCR",
        description: "문서 인식, 요약, 검색, 업무지원 기능을 실제 서비스에 연결합니다.",
        tags: ["OCR API", "PaddleOCR", "문서AI", "LLM", "RAG", "Embedding", "Prompt Workflow"],
      },
      {
        id: "infra",
        title: "Infra",
        description: "VPS와 온프레미스 환경 모두 고려해 배포와 운영 구조를 설계합니다.",
        tags: ["Linux", "Docker", "Nginx", "VPS", "Object Storage", "HTTPS"],
      },
      {
        id: "monitoring",
        title: "Monitoring",
        description: "운영 중 상태와 오류를 확인할 수 있도록 로그와 알림 체계를 구성합니다.",
        tags: ["로그", "상태 모니터링", "알림", "재처리", "장애 추적"],
      },
      {
        id: "integration",
        title: "Integration",
        description: "기존 시스템과 외부 API, 데이터베이스, 관리자 CMS를 연결합니다.",
        tags: ["API 연동", "외부 시스템 연동", "관리자 CMS", "Webhook", "Data Pipeline"],
      },
    ],
    xai: {
      badge: "NANUM LAB DIFFERENTIATOR",
      title: "설명 가능한 AI (XAI)",
      subtitle: "현장과 소통하는 차별화 기술",
      description:
        "복잡한 AI 분석 결과나 이상 징후 원인을 일방적으로 통보하지 않고, 작업자가 이해할 수 있는 '현장 언어'로 대화하듯 쉽게 풀어 설명하는 소통형 기술 모듈입니다.",
    },
    backToHome: "홈으로",
  },
  en: {
    badge: "CORE TECHNOLOGY",
    title: "Core Technology Capabilities",
    slogan: "Technical capabilities for operation-ready AI services",
    capabilities: [
      {
        id: "frontend",
        title: "Frontend",
        description:
          "We stably build customer-facing screens and admin interfaces for public and enterprise clients.",
        tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "ShadCN UI", "Responsive UI"],
      },
      {
        id: "backend",
        title: "Backend",
        description:
          "We design business logic, file processing, AI integration, and admin features with an API-first approach.",
        tags: ["FastAPI", "Node.js", "REST API", "Auth", "Validation", "Batch Processing"],
      },
      {
        id: "database",
        title: "Database",
        description:
          "We structurally store inquiries, documents, processing status, analytics, and user data.",
        tags: ["PostgreSQL", "Schema Design", "Query Optimization", "Audit Log"],
      },
      {
        id: "ai-ocr",
        title: "AI/OCR",
        description:
          "We connect document recognition, summarization, search, and workflow support to live services.",
        tags: ["OCR API", "PaddleOCR", "Document AI", "LLM", "RAG", "Embedding", "Prompt Workflow"],
      },
      {
        id: "infra",
        title: "Infra",
        description:
          "We design deployment and operations for both VPS and on-premises environments.",
        tags: ["Linux", "Docker", "Nginx", "VPS", "Object Storage", "HTTPS"],
      },
      {
        id: "monitoring",
        title: "Monitoring",
        description:
          "We configure logging and alerting so operational status and errors can be tracked in production.",
        tags: ["Logging", "Status Monitoring", "Alerts", "Reprocessing", "Incident Tracking"],
      },
      {
        id: "integration",
        title: "Integration",
        description:
          "We connect existing systems with external APIs, databases, and admin CMS platforms.",
        tags: ["API Integration", "External Systems", "Admin CMS", "Webhook", "Data Pipeline"],
      },
    ],
    xai: {
      badge: "NANUM LAB DIFFERENTIATOR",
      title: "Explainable AI (XAI)",
      subtitle: "Differentiated technology that speaks with the field",
      description:
        "Rather than one-way alerts about complex AI analysis or anomaly causes, our conversational module explains outcomes in plain 'field language' that operators can understand and act on.",
    },
    backToHome: "Back to Home",
  },
} as const satisfies Record<Locale, object>;

export function getTechT(locale: Locale) {
  return techTranslations[locale];
}
