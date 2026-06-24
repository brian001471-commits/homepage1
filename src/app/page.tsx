"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Cpu,
  Layers,
  Settings,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Droplet,
  Flame,
  Shield,
  TrendingUp,
  Award,
  Network,
  Mail,
  ArrowRight,
  Sliders,
  Loader2,
  Check,
  FileText,
  ArrowUp
} from "lucide-react";

// Types & Interfaces
interface ResearchCard {
  title: string;
  category: string;
  metric: string;
  description: string;
  tag: string;
}

interface StepperItem {
  step: string;
  title: string;
  desc: string;
}

// Static Data
const RESEARCH_DATA: ResearchCard[] = [
  {
    title: "PLANMATE 알고리즘 및 자동화 엔진 특허",
    category: "AI & PATENTS",
    metric: "생산성 180% 향상",
    description: "LLM Chain of Thought 아키텍처 기반의 공정 자동화 경로 설정 및 최적 배합비 탐색 엔진.",
    tag: "특허 출원 완료"
  },
  {
    title: "리빙코트·드라코트 표면 제어 시험성적서",
    category: "CHEMICAL MATERIALS",
    metric: "네이버 스토어 1위 검증",
    description: "KOLAS 공인 시험 기관 검증 완료. 환경 호르몬 불검출 및 반영구적 내마모성 표면 제어 기술.",
    tag: "KOLAS 검증"
  },
  {
    title: "강원 지역혁신창업 협동조합(RISE) 구축",
    category: "REGIONAL DX GOVERNANCE",
    metric: "지자체 인재 양성 허브",
    description: "춘천시 기반 산학관 4대 핵심 분과(성장, 비즈니스, 공공, 대외협력) 구조를 통한 지역 특화 제조업 DX 연계.",
    tag: "지자체 거버넌스"
  }
];

const STEPPER_DATA: StepperItem[] = [
  {
    step: "STEP 01",
    title: "실시간 공정 센서 데이터 AI 연동",
    desc: "현장 가동 설비 및 환경 센서의 데이터(온도, 습도, 속도 등)를 실시간 예측 처리를 위해 AI 인풋 레이어에 동역학적으로 매핑합니다."
  },
  {
    step: "STEP 02",
    title: "예측 분석 AI 엔진 튜닝 및 학습",
    desc: "KOLAS 검증 정밀 배합 데이터와 현장 스트림 로그를 바탕으로 RandomForest 예지보전 모델의 의사결정 경로를 맞춤형으로 학습시킵니다."
  },
  {
    step: "STEP 03",
    title: "실시간 AI 불량 사전 관제 개시",
    desc: "설비 스크린 및 통합 알림 보드에 실시간 불량률 예보와 원인 분석 피드백을 실시간으로 출력하여 제조 공정 수율을 즉각 극대화합니다."
  }
];

// Canvas Background Component
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track particles
    const particleCount = Math.min(Math.floor(width / 15), 80);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1
      });
    }

    // Mouse coordinates
    let mouse = { x: -9999, y: -9999 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines
      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Mouse connection
        if (mouse.x !== -9999) {
          const mDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (mDist < 180) {
            const alpha = (1 - mDist / 180) * 0.25;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Draw particle
        ctx.fillStyle = "rgba(0, 240, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update positions
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Boundary collision
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) {
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0" />;
};

export default function Home() {
  // Navigation active state
  const [activeSection, setActiveSection] = useState("hero");

  // Custom tab switching
  const [activeTab, setActiveTab] = useState<"ai" | "chemical">("ai");

  // Live Simulator state
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  const [rpm, setRpm] = useState(2500);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<{
    status: "emerald" | "amber" | "red";
    probability: number;
    msg: string;
    metrics: { hardness: string; adhesion: string; flowRate: string };
  }>({
    status: "emerald",
    probability: 8.5,
    msg: "현재 공정 환경이 아주 안정적입니다. 예측 도막 경도 3H, 부착력 5B 수준을 유지하며, 용제 휘발 속도가 최적 상태입니다.",
    metrics: { hardness: "3H", adhesion: "5B (최우수)", flowRate: "98%" }
  });

  // B2B Contact Form state
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Simulator calculation logic
  const handleSimulate = () => {
    setIsSimulating(true);

    setTimeout(() => {
      // Calculate Defect Score (0 to 100)
      // High humidity (>75) increases defect rate significantly (blistering).
      // Excess RPM at cold temp increases defect rate (viscosity flow shear).
      // Perfect zone: Temp 45-65°C, Humidity 30-50%, RPM 2000-3200
      let defectScore = 0;

      // Humidity impact
      if (humidity > 70) {
        defectScore += (humidity - 70) * 1.8;
      } else if (humidity < 25) {
        defectScore += (25 - humidity) * 0.6;
      }

      // RPM impact
      const rpmOffset = Math.abs(rpm - 2600);
      if (rpmOffset > 1000) {
        defectScore += (rpmOffset - 1000) * 0.015;
      }

      // Temperature impact
      const tempOffset = Math.abs(temperature - 55);
      if (tempOffset > 15) {
        defectScore += (tempOffset - 15) * 0.7;
      }

      // Context-aware combine
      if (humidity > 78 && rpm > 3200) {
        defectScore += 25; // Combination failure risk
      }

      const probability = Math.min(Math.max(Number(defectScore.toFixed(1)), 3.2), 99.4);

      let status: "emerald" | "amber" | "red" = "emerald";
      let msg = "";
      let hardness = "3H";
      let adhesion = "5B (최우수)";
      let flowRate = "98%";

      if (probability > 65) {
        status = "red";
        hardness = "1H 이하";
        adhesion = "1B (박리 발생)";
        flowRate = "62% (불량)";
        msg = `위험 감지: 고습도(${humidity}%) 및 고속 회전(${rpm} RPM) 조합으로 용제 증발 저하가 누적됩니다. 건조 도막 표면에 미세 기포(Blistering) 및 도막 박리 현상이 예측됩니다. 즉각 건조실 온도를 15°C 올리거나 RPM을 2,500 이하로 제어하십시오.`;
      } else if (probability > 30) {
        status = "amber";
        hardness = "2H";
        adhesion = "3B (보통)";
        flowRate = "84% (주의)";
        msg = `주의 필요: 공정 습도(${humidity}%)가 높아 건조 지연 현상이 우려됩니다. 도막의 고른 흐름성 확보를 위해 속도를 약 300 RPM 감속하거나 건조 온도를 5~8°C 추가로 보정하는 배합 비율 변경을 권장합니다.`;
      } else {
        status = "emerald";
        hardness = "3H ~ 4H";
        adhesion = "5B (최우수)";
        flowRate = "97% ~ 99%";
        msg = "정상 가동: 공정 내 온도 및 상대습도가 최적의 물리 반응 평형을 유지하고 있습니다. 나눔랩의 Smart Coat-Ops 제어 기준에 적합한 생산 상태입니다.";
      }

      setSimulationResult({
        status,
        probability,
        msg,
        metrics: { hardness, adhesion, flowRate }
      });
      setIsSimulating(false);
    }, 1200);
  };

  // Toggle checkboxes
  const handleCheckboxChange = (option: string) => {
    if (checkedOptions.includes(option)) {
      setCheckedOptions(checkedOptions.filter((item) => item !== option));
    } else {
      setCheckedOptions([...checkedOptions, option]);
    }
  };

  // Submit Contact Form
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setEmail("");
      setCompany("");
      setMessage("");
      setCheckedOptions([]);
      alert("문의가 성공적으로 전달되었습니다. 나눔랩 기술지원 부서에서 이메일로 신속히 답변해 드리겠습니다.");
    }, 1000);
  };

  // Back to Top button show state
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Tracking active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "core-tech", "research", "contact"];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show back to top button after 500px scroll
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden flex flex-col">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/85 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#00F0FF] text-2xl font-black tracking-widest text-glow-cyan">
              NANUM LAB
            </span>
            <div className="w-[1px] h-4 bg-slate-700 hidden sm:block"></div>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest hidden sm:block">
              INTEGRATED WEB PLATFORM
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "hero", label: "홈" },
              { id: "about", label: "회사 소개" },
              { id: "core-tech", label: "핵심 기술" },
              { id: "research", label: "연구 성과" },
              { id: "contact", label: "도입 문의" }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[18px] font-extrabold tracking-tight transition-colors duration-200 hover:text-brand-cyan ${activeSection === link.id ? "text-brand-cyan" : "text-slate-400"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mini CTA in Navbar */}
          <a
            href="#contact"
            className="text-[16px] font-extrabold tracking-tight text-brand-cyan border border-brand-cyan/40 px-6 py-2.5 rounded-full hover:bg-brand-cyan/10 transition-all duration-200"
          >
            데모 신청
          </a>
        </div>
      </header>

      {/* [1층] 메인 히어로 섹션 (Hero Section) */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-dark"
      >
        <ParticleBackground />

        {/* Ambient Radial Overlay for visual richness */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#0B0F19_95%)] pointer-events-none z-0" />

        <div className="relative max-w-6xl mx-auto px-6 text-center z-10 select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Small Technical Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/35 px-4 py-1.5 rounded-full text-xs text-brand-cyan font-mono tracking-widest uppercase">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Smart Coat-Ops SaaS Released
            </div>

            {/* Huge Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] 2xl:text-[4.8rem] font-extrabold tracking-tight text-white leading-[1.2] max-w-6xl mx-auto font-sans break-keep">
              경험에 의존하던 코팅 품질 관리,
              <br />
              이제 <span className="text-brand-cyan text-glow-cyan">AI 데이터</span>로 확실하게
              <br />
              예측하십시오.
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-lg text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
              IoT 센서와 실시간 AI 분석을 통해 생산 공정 중 불량률을 사전에 시뮬레이션하고,
              <br className="hidden md:inline" />
              KOLAS 시험 데이터를 기반으로 최적의 배합비를 가이딩하는 나눔랩의 'Smart Coat-Ops' 솔루션.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-cyan text-brand-dark font-extrabold text-sm tracking-wider hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:scale-105 text-center"
              >
                무료 데모 시연 신청
              </a>
              <a
                href="#core-tech"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-extrabold text-sm tracking-wider transition-all duration-300 text-center bg-slate-900/30 hover:bg-slate-900/60"
              >
                서비스 소개서 다운로드 (PDF)
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-brand-cyan transition-colors duration-200">
          <span className="text-[10px] tracking-widest font-mono">SCROLL TO DX</span>
          <div className="w-1.5 h-6 rounded-full border border-slate-600 flex justify-center p-0.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-brand-cyan rounded-full"
            />
          </div>
        </div>
      </section>

      {/* [2층] 나눔랩 소개 & 비전 (About Us) */}
      <section id="about" className="py-32 relative bg-brand-dark border-t border-slate-900">
        {/* Fine grid pattern for premium minimal-tech look */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-brand-cyan font-bold tracking-widest text-xs uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                About Nanum Lab
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans">
                제조업 기반의 탄탄한
                <br />
                화학 기술과 지능형 예지보전
                <br />
                AI 시스템의 완벽한 융합
              </h2>
              <div className="w-20 h-1 bg-gradient-to-right from-brand-cyan to-transparent"></div>
            </motion.div>

            {/* Right Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-8 text-slate-350 leading-relaxed text-base"
            >
              <p className="text-slate-300 font-semibold text-lg">
                주식회사 나눔랩은 독창적인 화학 물질 표면 제어 원천 기술 기반의 특수 코팅 물질 사업부와, 머신러닝 기반의 예지보전 인공지능 알고리즘을 설계하는 AI 솔루션 사업부를 통합 운영하는 고신뢰성 기술 혁신 기업입니다.
              </p>
              <p className="text-slate-400 font-normal">
                단순히 보기 좋은 대시보드 모니터링이나 단순 데이터 중개 매칭 플랫폼이 아닙니다. 나눔랩은 업계 최고 권위의 <strong>KOLAS 공인 시험 기관 검증 시험 성적서</strong>에서 도출된 화학적 배합 데이터와 정밀 물리 물성 데이터(표면 경도, 인장 강도, 내화학성, 점착 부착력)를 수집하여 지능형 AI 모델 예지보전 연산 엔진에 주입합니다.
              </p>
              <p className="text-slate-400 font-normal">
                이를 통해 다양한 제조업 공정 현장 내 온도, 습도, RPM 및 소재 배합비 변화에 따라 도막의 화학 구조가 어떻게 변하고 어떤 불량이 생길 것인지를 가동 개시 전 예측하여, 절대적인 생산 수율 향상 및 원가 절감을 도모합니다.
              </p>

              {/* Icon Badges for Key Value Propositions */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-cyan">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">KOLAS 공인 검증</h4>
                    <p className="text-xs text-slate-500">정밀 물성 빅데이터 확보</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-cyan">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">수율 약 15% 상승</h4>
                    <p className="text-xs text-slate-500">배합 불량률 사전 차단</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [3층] 핵심 기술 & Smart Coat-Ops 데모 (Core Technology) */}
      <section id="core-tech" className="py-32 relative bg-brand-dark/95 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest">
              TECHNOLOGY PLATFORM
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              나눔랩 코어 사업부 핵심 역량
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              탭을 전환하여 인공지능 기반의 지능형 제어 시스템 스펙을 확인하고, 실시간 예지보전 시뮬레이션을 돌려보세요.
            </p>
          </div>

          {/* Large Tab Switcher (Naver Cloud Style) */}
          <div className="flex border-b border-slate-800 max-w-2xl mx-auto mb-16 p-1 bg-slate-900/60 rounded-xl">
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex-1 py-4 text-xs md:text-sm font-bold tracking-widest rounded-lg transition-all duration-300 ${activeTab === "ai"
                  ? "bg-brand-card text-brand-cyan border border-slate-700/60 shadow-lg text-glow-cyan"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              AI 예지보전 솔루션 부문 (Smart Coat-Ops)
            </button>
            <button
              onClick={() => setActiveTab("chemical")}
              className={`flex-1 py-4 text-xs md:text-sm font-bold tracking-widest rounded-lg transition-all duration-300 ${activeTab === "chemical"
                  ? "bg-brand-card text-brand-cyan border border-slate-700/60 shadow-lg text-glow-cyan"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              기능성 화학 소재 부문 (코팅 레시피)
            </button>
          </div>

          {/* Content Area with Animation */}
          <AnimatePresence mode="wait">
            {activeTab === "ai" ? (
              <motion.div
                key="ai-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Left: Spec Card List (5 columns) */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Cpu className="text-brand-cyan w-5 h-5" />
                      Smart Coat-Ops 핵심 스펙
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      제조 공장 내 실시간 센서 및 환경 데이터를 분석하여 화학 코팅 배합 조건과 불량 발생 확률을 정밀하게 연산하는 지능형 AI 예측 솔루션입니다.
                    </p>
                  </div>

                  <div className="space-y-4 my-6">
                    {/* Spec Item 1 */}
                    <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-800 hover:border-brand-cyan/25 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan border border-slate-800">
                          <Network className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                            실시간 공정 센서 데이터 AI 피딩
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            온도, 습도, 풍속, 설비 회전수(RPM) 등 밀리초(ms) 단위의 실시간 공정 데이터를 AI 모델링 추론 인풋과 동역학적으로 즉각 연동합니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spec Item 2 */}
                    <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-800 hover:border-brand-cyan/25 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan border border-slate-800">
                          <Activity className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                            RandomForest 기반 품질 예지보전 AI
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            수만 건의 KOLAS 화학 정밀 물성 데이터를 다층 의사결정 나무 알고리즘에 학습시켜, 가동 전에 도막 불량 가능성 및 물성을 정확히 도출합니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spec Item 3 */}
                    <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-800 hover:border-brand-cyan/25 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan border border-slate-800">
                          <Settings className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                            Explainable AI (XAI) 원인 규명 모듈
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            단순 수치 통계 제시를 넘어, 어떤 변수 조합이 도막 탈락이나 크레이터 불량을 유발하는지 작업자가 이해할 수 있는 산업 현장 언어로 설명합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 font-mono">
                    * Powered by RandomForest Machine Learning Models & Explainable AI Framework
                  </div>
                </div>

                {/* Right: Live Simulator (7 columns) */}
                <div className="lg:col-span-7 bg-[#1E293B]/40 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

                  {/* Simulator Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse"></span>
                      <h3 className="text-xs font-mono font-bold tracking-widest text-slate-300">
                        LIVE SIMULATION WORKSPACE v1.8
                      </h3>
                    </div>
                    <div className="text-[10px] bg-slate-800 px-2 py-0.5 rounded font-mono text-slate-400">
                      STATUS: READY
                    </div>
                  </div>

                  {/* Sliders Container */}
                  <div className="space-y-6">
                    {/* Temperature Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-orange-500" />
                          건조 온도 (Dry Temperature)
                        </span>
                        <span className="text-white font-bold">{temperature} °C</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={temperature}
                        onChange={(e) => setTemperature(Number(e.target.value))}
                        className="w-full accent-brand-cyan cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600 font-mono">
                        <span>10°C (하한)</span>
                        <span>55°C (권장)</span>
                        <span>100°C (상한)</span>
                      </div>
                    </div>

                    {/* Humidity Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Droplet className="w-3.5 h-3.5 text-blue-400" />
                          대기 상대습도 (Humidity)
                        </span>
                        <span className="text-white font-bold">{humidity} %</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={humidity}
                        onChange={(e) => setHumidity(Number(e.target.value))}
                        className="w-full accent-brand-cyan cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600 font-mono">
                        <span>10% (건조)</span>
                        <span>40% (권장)</span>
                        <span>100% (다습)</span>
                      </div>
                    </div>

                    {/* RPM Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                          코터 헤드 회전 속도 (RPM)
                        </span>
                        <span className="text-white font-bold">{rpm.toLocaleString()} RPM</span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="5000"
                        step="100"
                        value={rpm}
                        onChange={(e) => setRpm(Number(e.target.value))}
                        className="w-full accent-brand-cyan cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600 font-mono">
                        <span>500 (저속)</span>
                        <span>2,600 (권장)</span>
                        <span>5,000 (고속)</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulator Action Button */}
                  <div className="my-6">
                    <button
                      onClick={handleSimulate}
                      disabled={isSimulating}
                      className="w-full py-4 rounded-xl bg-slate-900 border border-slate-700/60 text-brand-cyan hover:border-brand-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 font-bold text-xs tracking-widest flex items-center justify-center gap-2"
                    >
                      {isSimulating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          AI 예측 추론 가동 중...
                        </>
                      ) : (
                        <>
                          <Activity className="w-4 h-4" />
                          품질 예측 모델 시뮬레이션 가동 (Execute AI)
                        </>
                      )}
                    </button>
                  </div>

                  {/* Prediction Results Box */}
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-900 pb-3">
                      <div className="flex items-center gap-3">
                        {/* Traffic light system */}
                        <div className="flex gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                          <span
                            className={`w-3 h-3 rounded-full ${simulationResult.status === "emerald"
                                ? "bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]"
                                : "bg-slate-800"
                              }`}
                          />
                          <span
                            className={`w-3 h-3 rounded-full ${simulationResult.status === "amber"
                                ? "bg-amber-500 animate-pulse shadow-[0_0_10px_#F59E0B]"
                                : "bg-slate-800"
                              }`}
                          />
                          <span
                            className={`w-3 h-3 rounded-full ${simulationResult.status === "red"
                                ? "bg-red-500 animate-pulse shadow-[0_0_10px_#EF4444]"
                                : "bg-slate-800"
                              }`}
                          />
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 font-mono leading-none">
                            DECISION CODE
                          </div>
                          <div className="text-xs font-bold text-white uppercase mt-0.5">
                            {simulationResult.status === "emerald" && "NORMAL (안정)"}
                            {simulationResult.status === "amber" && "WARNING (주의)"}
                            {simulationResult.status === "red" && "CRITICAL DANGER (위험)"}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-[10px] text-slate-500 font-mono leading-none">
                          DEFECT PROBABILITY
                        </div>
                        <div
                          className={`text-xl font-black mt-0.5 font-mono ${simulationResult.status === "red"
                              ? "text-red-400"
                              : simulationResult.status === "amber"
                                ? "text-amber-400"
                                : "text-emerald-400"
                            }`}
                        >
                          {simulationResult.probability} %
                        </div>
                      </div>
                    </div>

                    {/* Explanatory feedback in Factory field language */}
                    <div className="space-y-3">
                      <div className="text-xs text-slate-400 leading-relaxed min-h-[60px] flex items-center">
                        {simulationResult.msg}
                      </div>

                      {/* Predicted Physical Properties */}
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-900 text-center font-mono">
                        <div>
                          <div className="text-[9px] text-slate-650">예측 경도</div>
                          <div className="text-xs font-bold text-slate-200 mt-1">
                            {simulationResult.metrics.hardness}
                          </div>
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-650">예측 부착력</div>
                          <div className="text-xs font-bold text-slate-200 mt-1">
                            {simulationResult.metrics.adhesion}
                          </div>
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-650">도막 형성률</div>
                          <div className="text-xs font-bold text-slate-200 mt-1">
                            {simulationResult.metrics.flowRate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="chemical-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
              >
                {/* Product 1: 리빙코트 */}
                <div className="p-8 rounded-3xl bg-[#1E293B] border border-slate-800 hover:border-brand-cyan/20 transition-all duration-300 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="text-[10px] text-brand-cyan font-mono tracking-widest font-bold">
                          PREMIUM BRAND 01
                        </div>
                        <h3 className="text-2xl font-black text-white">리빙코트 (Living Coat)</h3>
                      </div>
                      <span className="text-[10px] bg-slate-900 text-brand-cyan px-3 py-1 rounded-full border border-slate-850 font-bold">
                        네이버 스마트스토어 1위
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      친환경 표면 제어 및 실내 마모 보호에 고밀도로 포커싱된 프리미엄 홈&상업 공간 방청 코팅제입니다. 우수한 유해물질 차단율과 내오염성을 확보하였습니다.
                    </p>

                    {/* Chemical Spec Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">표면 경도 수치</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">9H 등급 검증 완료</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">KOLAS 자극 테스트</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">무자극·안전 기준 획득</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">도막 점착도</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">5B (최상위 접착강도)</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">주요 화학 특징</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">실리카 분자 복합 코팅</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>* 주 사용처: 가정용 상판, 타일 가구, 주방 위생 도구 표면 코팅</span>
                    <Shield className="w-5 h-5 text-brand-cyan" />
                  </div>
                </div>

                {/* Product 2: 드라코트 */}
                <div className="p-8 rounded-3xl bg-[#1E293B] border border-slate-800 hover:border-brand-cyan/20 transition-all duration-300 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="text-[10px] text-brand-cyan font-mono tracking-widest font-bold">
                          PREMIUM BRAND 02
                        </div>
                        <h3 className="text-2xl font-black text-white">드라코트 (Dra Coat)</h3>
                      </div>
                      <span className="text-[10px] bg-slate-900 text-brand-cyan px-3 py-1 rounded-full border border-slate-850 font-bold">
                        산업 특화 중방식용
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      극한의 내구성과 강력한 내화학 표면 방어 성능을 구현한 중공업 및 선박, 가혹 산업 환경 특화 보호 피막 코팅제입니다. 염수분무 테스트 2,000시간 이상 통과 성적을 기록하였습니다.
                    </p>

                    {/* Chemical Spec Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">내식성(염수분무)</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">2,000hr 노화 현상 무</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">내화학 보호 능력</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">황산/염산 침지 72hr 통과</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">코팅 구조 복원</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">열경화 마이크로 자가 수복</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                        <div className="text-slate-500">주요 성분 물질</div>
                        <div className="text-slate-200 font-bold mt-1 text-sm">불소-실록산 하이브리드</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>* 주 사용처: 기계 가공물 표면, 선박 흘수선 외판, 옥외 철강 구조물</span>
                    <Shield className="w-5 h-5 text-brand-cyan" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* [4층] 연구 성과 & 포트폴리오 아카이브 (Research & Insights) */}
      <section id="research" className="py-32 relative bg-brand-dark border-t border-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
                Nanum Lab Archive
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white">
                연구 성과 및 비즈니스 실적
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              실제 공인 성적서 검증 지수와 특허 출원 데이터를 데이터 바인딩 패턴(`data.map()`)으로 연계한 신뢰성 지표 정보망입니다.
            </p>
          </div>

          {/* 3-Column Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_DATA.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-[#1E293B]/70 border border-slate-800 rounded-3xl p-8 hover:border-brand-cyan/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-xl group-hover:bg-brand-cyan/15 transition-all duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Category Badge & Tag */}
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                    <span className="text-brand-cyan tracking-widest">{card.category}</span>
                    <span className="bg-slate-900/60 px-2 py-0.5 rounded text-slate-450 border border-slate-800">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Quantitative Metric Callout */}
                  <div className="py-2">
                    <span className="text-2xl md:text-3xl font-black text-white font-mono bg-slate-900/40 border border-slate-800/80 px-4 py-1.5 rounded-xl block text-center text-glow-cyan text-brand-cyan">
                      {card.metric}
                    </span>
                  </div>

                  {/* Detailed Copy */}
                  <p className="text-xs text-slate-450 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Footer Link Arrow */}
                <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 group-hover:text-brand-cyan transition-colors">
                  <span>CONFIRMED DATA</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [5층] 도입 가이드 및 B2B 문의하기 (Contact Us) */}
      <section
        id="contact"
        className="py-32 relative bg-brand-dark/95 border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Stepper Timeline UI */}
          <div className="mb-24">
            <div className="text-center space-y-4 mb-16">
              <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest">
                IMPLEMENTATION STEPPER
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                B2B Smart Coat-Ops 도입 절차
              </h2>
            </div>

            {/* Stepper Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {/* Stepper Line Connecting (Desktop Only) */}
              <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[1px] bg-slate-800 z-0 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-right from-brand-cyan/20 via-brand-cyan to-brand-cyan/20"></div>
              </div>

              {STEPPER_DATA.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center px-4"
                >
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-brand-cyan/45 hover:border-brand-cyan flex items-center justify-center font-mono font-extrabold text-xs text-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)] mb-6 transition-colors duration-300">
                    {idx + 1}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] text-brand-cyan font-mono font-bold tracking-widest block">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Minimal Katoz Style B2B Intake Form */}
          <div className="max-w-xl mx-auto">
            <div className="text-center space-y-4 mb-10">
              <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest">
                B2B CONSULTING INTAKE
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                함께 기술의 미래를 나눕니다.
              </h2>
              <p className="text-slate-400 text-xs">
                귀사 공정의 당면 과제들을 체크해 주시면, 적합한 맞춤형 AI 모델과 화학 코팅 가이드를 제안해 드립니다.
              </p>
            </div>

            {/* Form Wrap Card */}
            <div className="bg-[#1E293B]/40 border border-slate-800 rounded-3xl p-8 relative">
              <form onSubmit={handleFormSubmit} className="space-y-8">
                {/* Checkbox Grid */}
                <div className="space-y-3">
                  <label className="text-[10px] text-slate-400 font-mono tracking-widest font-bold uppercase block mb-1">
                    01. 주요 기술 검토 목적 (복수 선택 가능)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "불량률 감소 필요",
                      "배합비 보정",
                      "원자재 절감",
                      "예지보전"
                    ].map((option) => {
                      const isChecked = checkedOptions.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleCheckboxChange(option)}
                          className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-200 text-left flex items-center justify-between ${isChecked
                              ? "bg-brand-cyan/10 border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                              : "bg-slate-900/60 border-slate-850 text-slate-400 hover:border-slate-700"
                            }`}
                        >
                          {option}
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${isChecked
                                ? "bg-brand-cyan border-brand-cyan text-brand-dark"
                                : "border-slate-700"
                              }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Text/Email Fields */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-mono tracking-widest font-bold uppercase block">
                      02. 담당자 연락용 이메일
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. manager@factory.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-4 px-5 rounded-xl bg-slate-900/80 border border-slate-850 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-mono tracking-widest font-bold uppercase block">
                      03. 회사명 / 소속 기관명
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 나눔제조 주식회사"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full py-4 px-5 rounded-xl bg-slate-900/80 border border-slate-850 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-mono tracking-widest font-bold uppercase block">
                      04. 건조 설비 유형 또는 주요 문제 서술 (선택)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 컨베이어식 열풍 건조기를 사용하고 있으나 습도가 높을 때 크레이터 현상이 지속적으로 발생합니다."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full py-4 px-5 rounded-xl bg-slate-900/80 border border-slate-850 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-cyan text-brand-dark font-extrabold text-sm tracking-widest hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-[#00dcf5] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    B2B 맞춤 진단서 신청 (Request Diagnostics)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-brand-dark border-t border-slate-900/80 py-12 relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-black tracking-widest text-lg">
              NANUM LAB
            </span>
            <p className="text-[10px] text-slate-500 font-mono">
              주식회사 나눔랩 | 대표자: 나눔랩 | 사업자등록번호: [000-00-00000]
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              강원특별자치도 춘천시 거두공단길 산학관 융합 DX 혁신 센터
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-right">
            <p className="text-[11px] text-slate-400 font-mono">
              © {new Date().getFullYear()} NANUM LAB Co., Ltd. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-650 font-mono">
              Designed with Minimal Tech Concept & Powered by Next.js 15
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-slate-900/80 border border-brand-cyan/40 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] text-brand-cyan transition-all duration-300 backdrop-blur-sm cursor-pointer"
            aria-label="최상단으로 이동"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
