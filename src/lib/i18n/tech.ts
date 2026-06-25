import type { Locale } from "@/contexts/LanguageContext";

export const techTranslations = {
  ko: {
    badge: "NANUM LAB AI PLATFORM",
    title: "핵심 기술 솔루션",
    description:
      "나눔랩은 데이터 기반의 의사결정과 현장 최적화 DX 아키텍처를 통해 비즈니스의 디지털 전환을 가속화합니다. 복잡한 데이터를 누구나 이해할 수 있는 언어로 변환하는 AI 기술로 귀사의 혁신을 지원합니다.",
    backToHome: "홈으로",
    cards: [
      {
        title: "AI 데이터 분석 및 머신러닝",
        description:
          "정형·비정형 데이터를 통합 분석하여 성과를 최적화하는 플랫폼 기술과 비즈니스 현장 맞춤형 지능형 알고리즘을 공급합니다.",
      },
      {
        title: "통합 빅데이터 플랫폼(Data Lake)",
        description:
          "데이터 수집부터 분석, 워크플로우 시각화까지 데이터 전 생애주기를 관리하여 실질적인 비즈니스 인사이트를 도출합니다.",
      },
      {
        title: "현장 맞춤형 소통형 AI(XAI)",
        description:
          "AI 분석 결과를 누구나 이해할 수 있는 언어로 변환하여, 기술 도입 장벽을 낮추고 자율적인 운영 환경을 구축합니다.",
      },
      {
        title: "일의 속도를 높이는 '스마트 업무 최적화'",
        description:
          "기술 도입보다 중요한 것은 일하는 방식의 변화입니다. 나눔랩은 귀사의 업무 현장을 정밀하게 분석하여, 기술이 가장 자연스럽게 스며들도록 최적의 업무 흐름을 설계합니다.",
      },
    ],
  },
  en: {
    badge: "NANUM LAB AI PLATFORM",
    title: "Core Technology Solutions",
    description:
      "Nanum Lab accelerates business digital transformation through data-driven decision-making and field-optimized DX architecture. We support your innovation with AI that translates complex data into language everyone can understand.",
    backToHome: "Back to Home",
    cards: [
      {
        title: "AI Data Analytics & Machine Learning",
        description:
          "We deliver platform technology that integrates structured and unstructured data analysis for performance optimization, plus intelligent algorithms customized for your business operations.",
      },
      {
        title: "Integrated Big Data Platform (Data Lake)",
        description:
          "We manage the full data lifecycle — from collection and analysis to workflow visualization — to deliver actionable business insights.",
      },
      {
        title: "Explainable AI (XAI)",
        description:
          "We translate AI analysis results into plain language, lowering adoption barriers and building autonomous operational environments.",
      },
      {
        title: "Field-Centered Smart DX Architecture",
        description:
          "More important than introducing technology is changing the way work happens. Nanum Lab analyzes your field operations in detail and designs optimal workflows so technology can fit naturally into daily work.\n\nField-tailored process design: We restructure workflows in the way your actual field needs.\n\nPractical efficiency gains: Instead of complex systems, we build intuitive environments that operators can use comfortably.\n\nSustainable operation support: We stay with you after implementation so the technology can operate reliably.",
      },
    ],
  },
} as const satisfies Record<Locale, object>;

export function getTechT(locale: Locale) {
  return techTranslations[locale];
}
