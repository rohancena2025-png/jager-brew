import { useContactForm } from "@/hooks/useContactForm";
import type { ContactInquiry } from "@/types";
import { motion } from "motion/react";
import { useState } from "react";

const INQUIRY_TYPES: { value: ContactInquiry["inquiryType"]; label: string }[] =
  [
    { value: "retail", label: "Retail Partnership" },
    { value: "bulk", label: "Bulk Orders" },
    { value: "collaboration", label: "Brand Collaboration" },
    { value: "other", label: "Other" },
  ];

const CONTACT_HIGHLIGHTS = [
  {
    icon: "🏪",
    title: "Retail Partners",
    desc: "Stock Jager Brew in your store or venue",
  },
  { icon: "📦", title: "Bulk Orders", desc: "Wholesale pricing for 50+ cases" },
  {
    icon: "🤝",
    title: "Collaborations",
    desc: "Co-branded events, sponsorships, influencer deals",
  },
];

export function ContactSection() {
  const { isSubmitting, isSuccess, error, submit, reset } = useContactForm();

  const [form, setForm] = useState<ContactInquiry>({
    name: "",
    email: "",
    company: "",
    inquiryType: "retail",
    message: "",
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactInquiry, boolean>>
  >({});

  const handleBlur = (field: keyof ContactInquiry) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleChange = (field: keyof ContactInquiry, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validateField = (field: keyof ContactInquiry): string => {
    if (field === "name" && !form.name.trim()) return "Name is required";
    if (field === "email") {
      if (!form.email.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        return "Enter a valid email";
    }
    if (field === "message" && !form.message.trim())
      return "Message is required";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const hasErrors =
      validateField("name") ||
      validateField("email") ||
      validateField("message");
    if (hasErrors) return;
    await submit(form);
  };

  const inputStyle = {
    background: "oklch(0.12 0 0)",
    border: "1px solid oklch(0.22 0 0)",
    color: "oklch(0.95 0 0)",
  };

  const inputFocusClass =
    "w-full px-4 py-3 rounded-sm font-body text-sm transition-smooth focus:outline-none focus:border-primary/60 focus:bg-card placeholder:text-muted-foreground";

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 section-divider"
      style={{ background: "oklch(0.10 0.006 89)" }}
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 font-body">
            Distribution & Partnerships
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-4">
            Partner <span className="gradient-gold-text">With Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-base leading-relaxed">
            Whether you&apos;re a retailer, distributor, or brand — we&apos;re
            ready to build something exceptional together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: highlights */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {CONTACT_HIGHLIGHTS.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.14 0.008 89), oklch(0.12 0 0))",
                  border: "1px solid oklch(0.72 0.15 86 / 0.12)",
                }}
                data-ocid={`contact.highlight.${i + 1}`}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-sm gradient-gold-text uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="p-5 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.14 0.008 89), oklch(0.12 0 0))",
                border: "1px solid oklch(0.72 0.15 86 / 0.12)",
              }}
            >
              <p className="font-display font-bold text-sm gradient-gold-text uppercase tracking-wider mb-2">
                📧 Direct Inquiries
              </p>
              <p className="text-muted-foreground text-sm font-body">
                partners@jagerbrew.com
              </p>
              <p className="text-muted-foreground text-xs font-body mt-1">
                Response within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg p-10 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.14 0.02 89), oklch(0.11 0 0))",
                  border: "1px solid oklch(0.72 0.15 86 / 0.3)",
                  boxShadow: "0 0 40px oklch(0.72 0.15 86 / 0.1)",
                }}
                data-ocid="contact.success_state"
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-display font-black text-2xl gradient-gold-text mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Thank you for reaching out. Our team will be in touch within
                  24 hours.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="px-6 py-3 rounded-sm font-display font-semibold text-sm uppercase tracking-widest transition-smooth"
                  style={{
                    background: "oklch(0.65 0.15 89 / 0.15)",
                    border: "1px solid oklch(0.65 0.15 89 / 0.4)",
                    color: "oklch(0.78 0.13 86)",
                  }}
                  data-ocid="contact.send_another_button"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-lg p-8 space-y-5"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.13 0.006 89), oklch(0.10 0 0))",
                  border: "1px solid oklch(0.72 0.15 86 / 0.15)",
                }}
                noValidate
                data-ocid="contact.form"
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-body font-medium text-muted-foreground uppercase tracking-widest mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      placeholder="Your name"
                      className={inputFocusClass}
                      style={inputStyle}
                      data-ocid="contact.name_input"
                    />
                    {touched.name && validateField("name") && (
                      <p
                        className="mt-1.5 text-xs font-body"
                        style={{ color: "oklch(0.65 0.19 22)" }}
                        data-ocid="contact.name.field_error"
                      >
                        {validateField("name")}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-body font-medium text-muted-foreground uppercase tracking-widest mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="you@company.com"
                      className={inputFocusClass}
                      style={inputStyle}
                      data-ocid="contact.email_input"
                    />
                    {touched.email && validateField("email") && (
                      <p
                        className="mt-1.5 text-xs font-body"
                        style={{ color: "oklch(0.65 0.19 22)" }}
                        data-ocid="contact.email.field_error"
                      >
                        {validateField("email")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-body font-medium text-muted-foreground uppercase tracking-widest mb-2"
                  >
                    Company / Brand
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Your company name"
                    className={inputFocusClass}
                    style={inputStyle}
                    data-ocid="contact.company_input"
                  />
                </div>

                {/* Category select */}
                <div>
                  <label
                    htmlFor="contact-type"
                    className="block text-xs font-body font-medium text-muted-foreground uppercase tracking-widest mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="contact-type"
                    value={form.inquiryType}
                    onChange={(e) =>
                      handleChange(
                        "inquiryType",
                        e.target.value as ContactInquiry["inquiryType"],
                      )
                    }
                    className={inputFocusClass}
                    style={inputStyle}
                    data-ocid="contact.type_select"
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option
                        key={t.value}
                        value={t.value}
                        style={{ background: "oklch(0.12 0 0)" }}
                      >
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-body font-medium text-muted-foreground uppercase tracking-widest mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us about your inquiry, volume needs, or vision..."
                    rows={5}
                    className={`${inputFocusClass} resize-none`}
                    style={inputStyle}
                    data-ocid="contact.message_textarea"
                  />
                  {touched.message && validateField("message") && (
                    <p
                      className="mt-1.5 text-xs font-body"
                      style={{ color: "oklch(0.65 0.19 22)" }}
                      data-ocid="contact.message.field_error"
                    >
                      {validateField("message")}
                    </p>
                  )}
                </div>

                {/* Error */}
                {error && (
                  <p
                    className="text-sm font-body px-4 py-3 rounded-sm"
                    style={{
                      background: "oklch(0.65 0.19 22 / 0.1)",
                      border: "1px solid oklch(0.65 0.19 22 / 0.3)",
                      color: "oklch(0.75 0.16 22)",
                    }}
                    data-ocid="contact.error_state"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-sm font-display font-bold text-sm uppercase tracking-widest transition-smooth disabled:opacity-60"
                  style={{
                    background: isSubmitting
                      ? "oklch(0.65 0.15 89 / 0.6)"
                      : "oklch(0.65 0.15 89)",
                    color: "oklch(0.08 0 0)",
                    boxShadow: isSubmitting
                      ? "none"
                      : "0 0 24px oklch(0.72 0.15 86 / 0.3)",
                  }}
                  data-ocid="contact.submit_button"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
