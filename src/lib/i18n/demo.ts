import type { Locale } from "@/contexts/LanguageContext";

export const demoTranslations = {
  ko: {
    title: "문의하기",
    intro: {
      p1Parts: {
        before: "나눔랩은 ",
        kolas: "데이터 기반",
        mid: " 분석과 ",
        ai: "AI 기술",
        after: "을 융합하여 공공·기업의 ",
        dx: "디지털 전환(DX)",
        end: "을 선도합니다.",
      },
      p2Parts: {
        before: "범용 AI 솔루션, DX 컨설팅, 지역산업 DX 확산, AI 실무 교육을 제공하는 ",
        fusion: "기술 전문 기업",
        mid: "으로서, 귀사의 업무 프로세스에 최적화된 ",
        roadmap: "맞춤형 AI 자동화",
        end: " 솔루션을 설계하고 지원합니다.",
      },
    },
    form: {
      title: "제목",
      author: "작성자",
      phone: "연락처",
      affiliation: "소속",
      email: "이메일",
      content: "내용",
      submit: "문의하기",
      submitting: "전송 중...",
      titlePh: "문의 제목을 입력해 주세요.",
      authorPh: "홍길동",
      phonePh: "010-1234-5678",
      affiliationPh: "나눔제조 주식회사",
      emailPh: "id@youremail.com",
      contentPh: "문의하실 내용을 입력해 주세요.",
      validationAlert: "내용을 모두입력하세요.",
      errorAlert: "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      successAlert:
        "문의가 성공적으로 전달되었습니다. 나눔랩 기술지원 부서에서 이메일로 신속히 답변해 드리겠습니다.",
    },
    header: {
      back: "홈으로 돌아가기",
    },
  },
  en: {
    title: "Contact Us",
    intro: {
      p1Parts: {
        before: "NANUMLAB leads ",
        kolas: "data-driven",
        mid: " analysis fused with ",
        ai: "AI technology",
        after: " to drive ",
        dx: "digital transformation (DX)",
        end: " for public and enterprise clients.",
      },
      p2Parts: {
        before: "As a ",
        fusion: "technology company",
        mid: " delivering universal AI solutions, DX consulting, regional DX expansion, and AI training, we design ",
        roadmap: "customized AI automation",
        end: " tailored to your workflows.",
      },
    },
    form: {
      title: "Subject",
      author: "Name",
      phone: "Phone",
      affiliation: "Organization",
      email: "Email",
      content: "Message",
      submit: "Submit Inquiry",
      submitting: "Sending...",
      titlePh: "Enter inquiry subject.",
      authorPh: "John Doe",
      phonePh: "+82-10-1234-5678",
      affiliationPh: "Nanum Manufacturing Co.",
      emailPh: "id@youremail.com",
      contentPh: "Please describe your inquiry.",
      validationAlert: "Please fill in all fields.",
      errorAlert: "Failed to send your inquiry. Please try again later.",
      successAlert:
        "Your inquiry has been submitted. NANUMLAB support will respond via email shortly.",
    },
    header: {
      back: "Back to Home",
    },
  },
} as const satisfies Record<Locale, object>;

export function getDemoT(locale: Locale) {
  return demoTranslations[locale];
}
