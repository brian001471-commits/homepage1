"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";
import { buildSelectOptions, CUSTOM_INPUT_VALUE } from "@/lib/i18n";

interface SelectOption {
  value: string;
  label: string;
}

const inputClassName =
  "w-full py-3.5 px-4 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_12px_rgba(0,240,255,0.12)] transition-all";

function FieldLabel({ children, required = true }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="text-sm font-semibold text-slate-200 block mb-2">
      {children}
      {required && <span className="text-brand-cyan ml-0.5">*</span>}
    </label>
  );
}

function SelectField({
  value,
  onChange,
  options,
  required = true,
}: {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClassName} appearance-none pr-10 cursor-pointer`}
      >
        {options.map((opt) => (
          <option key={opt.value === "" ? "__placeholder__" : opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
    </div>
  );
}

function SelectWithCustomInput({
  label,
  value,
  customValue,
  onChange,
  onCustomChange,
  options,
  customPlaceholder,
}: {
  label: string;
  value: string;
  customValue: string;
  onChange: (value: string) => void;
  onCustomChange: (value: string) => void;
  options: SelectOption[];
  customPlaceholder: string;
}) {
  const isCustom = value === CUSTOM_INPUT_VALUE;

  const handleChange = (next: string) => {
    onChange(next);
    if (next !== CUSTOM_INPUT_VALUE) {
      onCustomChange("");
    }
  };

  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <SelectField value={value} onChange={handleChange} options={options} />
      {isCustom && (
        <input
          type="text"
          required
          placeholder={customPlaceholder}
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          className={`${inputClassName} mt-2`}
        />
      )}
    </div>
  );
}

function ContactIntro() {
  const { demo: t } = useTranslations();
  const p1 = t.intro.p1Parts;
  const p2 = t.intro.p2Parts;

  return (
    <div className="border-l-2 border-brand-cyan/35 pl-5 md:pl-6 space-y-5 max-w-lg">
      <p className="text-slate-400 text-sm md:text-[15px] leading-[1.9] tracking-wide indent-0 md:indent-1">
        {p1.before}
        <span className="text-slate-300 font-medium">{p1.kolas}</span>
        {p1.mid}
        <span className="text-brand-cyan font-medium">{p1.ai}</span>
        {p1.after}
        <span className="text-brand-cyan font-medium">{p1.dx}</span>
        {p1.end}
      </p>
      <p className="text-slate-400 text-sm md:text-[15px] leading-[1.9] tracking-wide indent-0 md:indent-1">
        {p2.before}
        <span className="text-slate-300 font-medium">{p2.fusion}</span>
        {p2.mid}
        <span className="text-slate-300 font-medium">{p2.roadmap}</span>
        {p2.end}
      </p>
    </div>
  );
}

export function DemoIntakeForm() {
  const { locale } = useLanguage();
  const { demo: t } = useTranslations();

  const mainCategoryOptions = useMemo(
    () => buildSelectOptions(locale, "main", ["regional-dx", "ai-ict", "manufacturing-dx"]),
    [locale]
  );
  const subCategoryOptions = useMemo(
    () => buildSelectOptions(locale, "sub", ["defect", "material", "predictive", "consulting"]),
    [locale]
  );

  const [mainCategory, setMainCategory] = useState("");
  const [mainCategoryCustom, setMainCategoryCustom] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryCustom, setSubCategoryCustom] = useState("");
  const [author, setAuthor] = useState("");
  const [phone, setPhone] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !mainCategory || !subCategory) return;
    if (mainCategory === CUSTOM_INPUT_VALUE && !mainCategoryCustom.trim()) return;
    if (subCategory === CUSTOM_INPUT_VALUE && !subCategoryCustom.trim()) return;

    setTimeout(() => {
      setMainCategory("");
      setMainCategoryCustom("");
      setSubCategory("");
      setSubCategoryCustom("");
      setAuthor("");
      setPhone("");
      setAffiliation("");
      setEmail("");
      setContent("");
      alert(t.form.successAlert);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-8 lg:sticky lg:top-28">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">{t.title}</h1>
            <ContactIntro />
          </div>
        </div>

        <div className="bg-[#1E293B]/30 border border-slate-800 rounded-2xl p-6 md:p-8">
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SelectWithCustomInput
                label={t.form.mainCategory}
                value={mainCategory}
                customValue={mainCategoryCustom}
                onChange={setMainCategory}
                onCustomChange={setMainCategoryCustom}
                options={mainCategoryOptions}
                customPlaceholder={t.form.mainCustomPh}
              />
              <SelectWithCustomInput
                label={t.form.subCategory}
                value={subCategory}
                customValue={subCategoryCustom}
                onChange={setSubCategory}
                onCustomChange={setSubCategoryCustom}
                options={subCategoryOptions}
                customPlaceholder={t.form.subCustomPh}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <FieldLabel>{t.form.author}</FieldLabel>
                <input
                  type="text"
                  required
                  placeholder={t.form.authorPh}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className={inputClassName}
                />
              </div>
              <div>
                <FieldLabel>{t.form.phone}</FieldLabel>
                <input
                  type="tel"
                  required
                  placeholder={t.form.phonePh}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <FieldLabel>{t.form.affiliation}</FieldLabel>
                <input
                  type="text"
                  required
                  placeholder={t.form.affiliationPh}
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                  className={inputClassName}
                />
              </div>
              <div>
                <FieldLabel>{t.form.email}</FieldLabel>
                <input
                  type="email"
                  required
                  placeholder={t.form.emailPh}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <FieldLabel>{t.form.content}</FieldLabel>
              <textarea
                required
                rows={6}
                placeholder={t.form.contentPh}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={`${inputClassName} resize-none`}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-brand-cyan text-brand-dark font-extrabold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-[#00dcf5] transition-all duration-300 cursor-pointer"
              >
                {t.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
