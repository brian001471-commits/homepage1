"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

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

function isFormComplete(fields: {
  title: string;
  author: string;
  phone: string;
  affiliation: string;
  email: string;
  content: string;
}) {
  return Object.values(fields).every((value) => value.trim().length > 0);
}

export function DemoIntakeForm() {
  const { demo: t } = useTranslations();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [phone, setPhone] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setPhone("");
    setAffiliation("");
    setEmail("");
    setContent("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fields = { title, author, phone, affiliation, email, content };

    if (!isFormComplete(fields)) {
      alert(t.form.validationAlert);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          author: author.trim(),
          phone: phone.trim(),
          affiliation: affiliation.trim(),
          email: email.trim(),
          content: content.trim(),
        }),
      });

      if (!response.ok) {
        alert(t.form.errorAlert);
        return;
      }

      resetForm();
      alert(t.form.successAlert);
    } catch {
      alert(t.form.errorAlert);
    } finally {
      setIsSubmitting(false);
    }
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
          <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
            <div>
              <FieldLabel>{t.form.title}</FieldLabel>
              <input
                type="text"
                placeholder={t.form.titlePh}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClassName}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <FieldLabel>{t.form.author}</FieldLabel>
                <input
                  type="text"
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
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-brand-cyan text-brand-dark font-extrabold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-[#00dcf5] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.form.submitting : t.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
