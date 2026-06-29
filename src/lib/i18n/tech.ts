import type { Locale } from "@/contexts/LanguageContext";

export const techTranslations = {
  ko: {
    badge: "CORE TECHNOLOGY",
    title: "핵심 기술 역량",
    slogan: "현장과 소통하는 실용적 AI 기술로 디지털 전환을 완성합니다.",
    capabilities: [
      {
        id: "ai-nlp",
        title: "AI & 자연어 처리",
        keywords: [
          "LLM 챗봇",
          "RAG 파이프라인",
          "지식 검색",
          "Tool Calling 업무 자동화",
          "벡터 DB",
        ],
      },
      {
        id: "voice-vision",
        title: "음성 및 시각 지능",
        keywords: [
          "실시간 STT",
          "비정형 데이터 전처리",
          "증빙자료 정밀 추출용 고성능 OCR",
          "위성 및 공간 데이터 분석",
        ],
      },
      {
        id: "philosophy",
        title: "현장 중심 프로세스 설계",
        description:
          "기술 편의주의를 배제하고 프로그래밍 지식이 없는 현장 직원도 쉽게 다룰 수 있도록 '일하는 방식'을 먼저 살펴 맞춤형 프로세스로 설계합니다.",
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
    slogan:
      "We complete digital transformation with practical AI technology that communicates with the field.",
    capabilities: [
      {
        id: "ai-nlp",
        title: "AI & Natural Language Processing",
        keywords: [
          "LLM Chatbots",
          "RAG Pipelines",
          "Knowledge Search",
          "Tool Calling Automation",
          "Vector Databases",
        ],
      },
      {
        id: "voice-vision",
        title: "Voice & Visual Intelligence",
        keywords: [
          "Real-time STT",
          "Unstructured Data Preprocessing",
          "High-performance OCR for Evidence Extraction",
          "Satellite & Spatial Data Analysis",
        ],
      },
      {
        id: "philosophy",
        title: "Field-Centered Process Design",
        description:
          "We reject technology for its own sake—first understanding how work actually happens, then designing tailored processes so field staff without programming knowledge can use the system with ease.",
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
