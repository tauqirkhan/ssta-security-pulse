import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const CallToAction = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section className="py-16 bg-ssta-dark text-white">
      {/* Using bg-ssta-dark as the background */}
      <div
        className={`container mx-auto px-4 text-center ${
          isArabic ? "rtl" : ""
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-4 ${isArabic ? "font-arabic" : ""}`}
        >
          {isArabic
            ? "دعوة للتقدم كشريك مؤسس"
            : "Invitation to Apply as a Founding Partner"}
        </h2>
        <p
          className={`text-lg text-white/80 max-w-2xl mx-auto mb-8 ${
            isArabic ? "font-arabic" : ""
          }`}
        >
          {isArabic
            ? "نحن نبحث عن ثلاث شركات سعودية مرموقة للانضمام إلينا في ريادة معيار تدريب أمني وطني. يوفر هذا التعاون الحصري والموجه فقط دعوة فرصة فريدة لتشكيل مستقبل الأمن السعودي."
            : "We are seeking three esteemed Saudi firms to join us in pioneering a national security training standard. This exclusive, invitation-only partnership offers a unique opportunity to shape the future of Saudi security."}
        </p>

        <h3
          className={`text-2xl font-bold mb-4 ${isArabic ? "font-arabic" : ""}`}
        >
          {isArabic ? "لماذا الشراكة مع SSTA؟" : "Why Partner with SSTA?"}
        </h3>
        <ul
          className={`list-disc text-left mx-auto mb-8 max-w-3xl ${
            isArabic ? "font-arabic" : ""
          }`}
        >
          <li className="mb-2">
            {isArabic
              ? "قيادة السوق: كن في طليعة تأسيس نموذج شهادة سعودي بقيادة سعودية، تم تطويره بخبرة بريطانية ويقدمه شركات سعودية مرخصة."
              : "Lead the Market: Be at the forefront of establishing a Saudi-led certification model, developed with UK expertise and delivered through licensed Saudi security firms."}
          </li>
          <li className="mb-2">
            {isArabic
              ? "تمكين قوتك العاملة: قدم لفريقك تدريبًا معترفًا به دوليًا ومتوافقًا مع أفضل الممارسات."
              : "Empower Your Workforce: Provide your team with internationally recognised training aligned with best practices."}
          </li>
          <li className="mb-2">
            {isArabic
              ? "التأثير على اللوائح المستقبلية: تعاون مع SSTA والشركاء لتشكيل الأطر التنظيمية الناشئة، مما يضع شركتك في المقدمة من أجل الاعتراف الوزاري القادم."
              : "Influence Future Regulations: Collaborate with SSTA and partners to shape emerging regulatory frameworks, positioning your firm ahead of forthcoming ministry recognition."}
          </li>
          <li className="mb-2">
            {isArabic
              ? "بناء المعيار الوطني: الأمر لا يتعلق بالحصول على شهادة؛ بل يتعلق بالمشاركة في إنشاء المعيار الوطني المستقبلي لتدريب الأمن."
              : "Build the National Standard: This is not about acquiring a certificate; it's about co-creating the future national standard for security training."}
          </li>
        </ul>

        <h3
          className={`text-2xl font-bold mb-4 ${isArabic ? "font-arabic" : ""}`}
        >
          {isArabic ? "الخطوات التالية" : "Next Steps"}
        </h3>
        <p
          className={`text-lg text-white/80 mb-8 ${
            isArabic ? "font-arabic" : ""
          }`}
        >
          {isArabic
            ? "إذا كانت شركتك مستعدة لقيادة مستقبل الأمن السعودي، قدم تعبيرًا عن اهتمامك. سنقوم بترتيب استشارة خاصة لاستكشاف التوافق، الجاهزية، وإمكانات الشراكة."
            : "If your firm is ready to lead the future of Saudi security, submit your Expression of Interest. We will arrange a private consultation to explore alignment, readiness, and partnership potential."}
        </p>

        <Button
          asChild
          className={`bg-ssta-gold hover:bg-ssta-gold-light text-black px-6 py-2 ${
            isArabic ? "font-arabic" : ""
          }`}
          size="lg"
        >
          <Link to="/contact">
            {isArabic ? "تقديم الاهتمام" : "Submit Your Expression of Interest"}
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
