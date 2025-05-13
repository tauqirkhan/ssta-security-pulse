import React from "react";
import { Award, Shield, Briefcase } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import CallToAction from "@/components/CallToAction";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Leadership = () => {
  const { language } = useLanguage();
  const t = translations.leadership[language];
  const isArabic = language === "ar";

  // Arabic translations for team members
  const teamMemberTranslations = {
    major: {
      name: "اللواء م. معيض الشهري",
      position: "الرئيس التنفيذي",
      bio: `
      اللواء م. معيض الشهري هو شخصية مرموقة في قطاع الدفاع السعودي، يتمتع بخبرة عسكرية متميزة تمتد لأكثر من 35 عامًا. خلال مسيرته المهنية، شغل أدوارًا قيادية محورية، لا سيما منصبه كنائب قائد في أكاديمية الملك خالد العسكرية، حيث لعب دورًا حاسمًا في تشكيل الجيل القادم من الضباط العسكريين.
تشمل خبرته الواسعة التخطيط الاستراتيجي، وأمن المعلومات، والقيادة التنظيمية. ساهم التزام اللواء الشهري بالتميز والابتكار بشكل كبير في تحديث وتطوير القوات المسلحة السعودية.
بصفته الرئيس التنفيذي للأكاديمية السعودية للتدريب الأمني (SSTA)، يستثمر اللواء الشهري خبرته الواسعة لتطوير مبادرات التدريب الأمني في المملكة. تحت قيادته، تكرس الأكاديمية جهودها لتعزيز قدرات المتخصصين في مجال الأمن، بما يتماشى مع أهداف رؤية المملكة ٢٠٣٠ لتعزيز الأمن الوطني وتشجيع الاعتماد على الذات تكنولوجيًا.
      `,
    },
    nawaf: {
      name: "نواف القحطاني",
      position: "مدير الشراكات",
      bio: `
        يعمل نواف القحطاني كمدير للشراكات في الأكاديمية السعودية للتدريب الأمني (SSTA)، حيث يلعب دورًا محوريًا في تطوير قطاع الأمن الخاص في المملكة. بخلفيته القوية في المبيعات والتسويق وتطوير الأعمال، يتفوق نواف في بناء التحالفات الاستراتيجية وقيادة المبادرات التعاونية التي ترفع من مستوى معايير القطاع الأمني.
إدراكًا منه للفجوات الحرجة في التدريب والمعايير والتطوير المهني عبر الصناعة، يكرس نواف جهوده لترسيخ معايير جديدة تتماشى مع أهداف رؤية المملكة ٢٠٣٠. تمكنه خبرته من تحديد ومعالجة هذه الفجوات بفعالية، مما يضمن أن القوى العاملة الأمنية مستعدة جيدًا لتلبية متطلبات بيئة سريعة التغير.
نهج نواف استراتيجي وشخصي في آن واحد. في عصر تضع فيه المشاريع العملاقة، والفعاليات الكبرى، والاهتمام العالمي ضغوطًا غير مسبوقة على الأمن، يدافع عن الاعتقاد بأن الأمن الوطني الحقيقي يبدأ من أولئك الموجودين على الأرض. من خلال قيادته في الأكاديمية، يواصل نواف تشكيل مستقبل قطاع الأمن الخاص في المملكة العربية السعودية، مما يضمن أن كل حارس، وكل فريق، وكل منظمة تعكس قوة المملكة واستعدادها، والتزامها بالتميز على المستوى العالمي.
      `,
    },
    sukh: {
      name: "سك جيل",
      position: "المؤسس والمدير الاستراتيجي",
      bio: `
        المؤسس والمدير الاستراتيجي
سك جيل هو استراتيجي ورائد أعمال ذو توجه عالمي، كرس خبرته لدعم رؤية المملكة ٢٠٣٠. بخلفيته في إطلاق مشاريع مبتكرة عبر التسويق الرقمي والتكنولوجيا والاستشارات التجارية، تطور صخ ليصبح قائدًا معروفًا بتصميم أطر تحويلية تمكّن الدول والصناعات والأفراد.
ولد ونشأ في المملكة المتحدة، يعيش سك الآن في الرياض، حيث كرس نفسه بالكامل لمستقبل المملكة. بإلهام من التحول السريع للمملكة العربية السعودية واعترافًا بالفجوات الحرجة في تطوير القوى العاملة، أسس الأكاديمية السعودية للتدريب الأمني (SSTA) لإعادة تعريف المعايير الأمنية، ومؤسسة شفاء المستقبل الصحية لقيادة اتحاد من الأطباء المدربين في المملكة المتحدة يركزون على تطوير الرعاية الصحية من خلال تعزيز مهارات المواهب السعودية.
معروف بقدرته على دمج الخبرة العالمية مع الأولويات الوطنية، يتخصص صخ في بناء أنظمة بيئية هادفة تدفع النمو المستدام عبر الأمن والرعاية الصحية وما بعدها. يركز عمله على تمكين المواهب السعودية، وترسيخ أفضل الممارسات الدولية، وضمان توافق كل مشروع مع رؤية المملكة طويلة المدى للتميز والسيادة.
بالتزامه العميق بتحول المملكة العربية السعودية، يمثل صخ جيل فئة جديدة من القيادة، يمزج بين الرشاقة الريادية والخبرة عبر القطاعات والإيمان الراسخ بإمكانات المملكة لوضع معايير عالمية عبر الصناعات الحيوية.

      `,
    },
    mark: {
      name: "مارك برامويل",
      position: "مدير التدريب والاستشاري الرئيسي",
      bio: `
        مارك برامويل هو متخصص أمني معتمد وذو خبرة عالية، مع أكثر من ٢٥ عامًا من الخبرة في مجالات الاستخبارات العسكرية، والأمن الدبلوماسي، وضمان المخاطر الوطنية، وأنظمة التدريب على مستوى المؤسسات.
كضابط استخبارات سابق بالجيش البريطاني، خدم مارك في مسارح عالمية حساسة بما في ذلك العراق وسوريا وأفغانستان، حيث قدم المشورة لكبار المسؤولين العسكريين والحكوميين بشأن استراتيجية الأزمات وعمليات الاستخبارات والبنية التحتية للأمن المادي. شغل منصب الملحق الدفاعي المساعد في دمشق، حيث أدار عمليات الطوارئ عالية الضغط، وقدم تحليلات استخباراتية استراتيجية شكلت سياسة الحكومة البريطانية. يتحدث مارك اللغة العربية بطلاقة، مما يمنحه ميزة عملياتية نادرة في القيادة عبر الثقافات والتوجيه وبناء الثقة.
بعد حياته المهنية العسكرية، انتقل مارك إلى القيادة في القطاع الخاص كرئيس للأمن التشغيلي في شركة Mitie، أكبر مزود للأمن وإدارة المرافق في المملكة المتحدة. في هذا الدور، قاد تقييمات المخاطر المادية للبنية التحتية الحيوية في جميع أنحاء المملكة المتحدة، وطور بروتوكولات إجراءات التشغيل القياسية على مستوى البلاد، وقدم المشورة للعملاء متعددي القطاعات بشأن الامتثال التنظيمي، وتخفيف التهديدات، واستمرارية الأعمال.
مارك هو أيضًا مصمم تدريب معتمد للمؤسسات، حيث بنى ونشر أنظمة بيئية وطنية لـ "تدريب المدربين" لأكثر من 3000 موظف. شملت برامجه التدريبية العسكرية والمدنية:
• القتال والاستخبارات البشرية
 • حماية الشخصيات الهامة والتنفيذيين
 • الاستجابة للأزمات وتدريبات الإخلاء
 • تدقيق المخاطر والتحليل التنبؤي
 • تصميم المحاكاة وقيادة السيناريوهات الغامرة
يحمل شهادات بريطانية ودولية في المجال:
 • المستوى 6 (بكالوريوس مع مرتبة الشرف) - متخصص معتمد في إدارة الأمن
 • عضو في المعهد الدولي لإدارة الأمن
 • عضو في معهد الأمن البريطاني
 • عضو في معهد إدارة المخاطر الاستراتيجية
المؤهلات التدريبية:
 • المستوى 3 - التعليم والتدريب - مؤهل تدريبي لقطاع تعليم وتدريب الكبار
 • NUCO - مدرب الإسعافات الأولية
 • NUCO - مدرب الصحة والسلامة
 • تدريب المدربين الدفاعي
 • النهج الدفاعي لأنظمة التدريب (DSAT) - مدير
 • DSAT - تحليل احتياجات التدريب
 • مشرف التدريب الدفاعي
 • مدير التدريب الدفاعي
كمدير التدريب في الأكاديمية السعودية للتدريب الأمني، مارك مسؤول عن:
 • تصميم والتحقق من صحة إطار الشهادة المكون من 40 دورة
 • الإشراف على التقييمات القائمة على المحاكاة عبر الأكاديميات الوطنية
 • تدريب مجموعة النخبة السعودية لتصبح مدربين رئيسيين متخصصين في القطاعات
 • ضمان توافق جميع الشهادات مع المعايير العالمية مع تمكين القوى العاملة السعودية أولاً
مارك لا يدرب الحراس. إنه يبني أنظمة سيادية لاعتماد أولئك الذين يقودونهم.
      `,
    },
    samraj: {
      name: "سامراج بادا",
      position: "المدرب الأول ومسؤول الجودة",
      bio: `
      بخبرة تزيد عن 20 عامًا في الخطوط الأمامية، سامراج بادا هو خبير عمليات تكتيكية متمرس معروف بقيادة فرق حماية عالية المخاطر في جميع أنحاء المملكة المتحدة. من تأمين العائلة الملكية والتنفيذيين إلى إدارة العمليات المباشرة في استوديوهات سكاي، تجمع قيادته بين الدقة في الوقت الحقيقي والبصيرة التشغيلية العميقة.
في الأكاديمية السعودية للتدريب الأمني، يقود سامراج التدريب العملي وضمان الجودة عبر جميع برامج الشهادات. يقود التدريبات الحية، والمحاكاة عالية الضغط، ويدرب المدربين السعوديين على الأداء بثقة تحت الضغط. كمتعاون طويل الأمد مع مارك برامويل، فهو يضمن أن كل دورة تقدم ليس فقط النظرية - بل الأداء الجاهز للميدان.
يعد سامراج الفرق للحظات التي لا يكون فيها الفشل خيارًا.
      `,
    },
    tauqir: {
      name: "توقير خان",
      position: "المسؤول التنفيذي للتسويق",
      bio: `
      يجمع توقير خان بين مزيج فريد من الخبرة التقنية والفطنة التسويقية، ويتمتع بخبرة تزيد عن أربع سنوات في البرمجة إلى جانب خلفية قوية في المبيعات والتسويق. بصفته المسؤول التنفيذي للتسويق في الأكاديمية السعودية للتدريب الأمني، يستفيد من عقليته التحليلية واستراتيجيته الإبداعية لتعزيز ظهور العلامة التجارية، ودفع المشاركة، ودعم أهداف نمو الأكاديمية في صناعة التدريب الأمني.
      `,
    },
  };

  // Arabic translations for vision section
  const visionSectionContent = {
    paragraph1: {
      en: t.visionSection.paragraph1,
      ar: "في الأكاديمية السعودية للتدريب الأمني، نؤمن بأن الأمن فن استراتيجي يعتمد على القيادة التي تلهم الثقة وتبني النظم الفعالة والمستدامة. فريق قيادتنا هو مزيج متميز من الخبراء العسكريين والمهنيين المدنيين والمتخصصين السعوديين الذين يشكلون معًا مستقبل التدريب الأمني في المملكة.",
    },
    paragraph2: {
      en: t.visionSection.paragraph2,
      ar: "بتوجيه من الرؤية الاستراتيجية للمؤسسين والخبرة العملية لكبار المدربين لدينا، نلتزم بتعزيز مواهب الجيل القادم من قادة الأمن السعوديين الذين سيقودون المملكة نحو مستقبل أكثر أمانًا وازدهارًا.",
    },
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            {t.hero.title}
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-white/90 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t.executiveTeam.title}
            subtitle={t.executiveTeam.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <TeamMemberCard
              name="Major General R. Maeed Alshehri"
              position="CEO"
              arabicName={teamMemberTranslations.major.name}
              arabicPosition={teamMemberTranslations.major.position}
              arabicBio={teamMemberTranslations.major.bio}
              imageUrl="/leadership/major.jpg"
              bio={`Major General R. Maeed Alshehri is a highly respected figure in Saudi Arabia's defense sector, bringing over 35 years of distinguished military service. Throughout his career, he has held pivotal leadership roles, notably serving as Deputy Commandant at King Khalid Military Academy, where he played a crucial role in shaping the next generation of military officers.

His extensive experience encompasses strategic planning, information security, and organizational leadership. Major General Alshehri's commitment to excellence and innovation has significantly contributed to the modernization and professionalization of Saudi Arabia's armed forces.

As the Chief Executive Officer of the Saudi Security Training Academy (SSTA), Major General Alshehri leverages his vast expertise to advance the Kingdom's security training initiatives. Under his leadership, SSTA is dedicated to enhancing the capabilities of security professionals, aligning with Saudi Arabia's Vision 2030 objectives to strengthen national security and promote technological self-reliance.
`}
            />

            <TeamMemberCard
              name="Nawaf Y M Alqahtani"
              position="Senior Partnership Manager"
              arabicName={teamMemberTranslations.nawaf.name}
              arabicPosition={teamMemberTranslations.nawaf.position}
              arabicBio={teamMemberTranslations.nawaf.bio}
              imageUrl="/leadership/nawaf.jpg"
              bio={`Nawaf Alqahtani serves as the Senior Partnership Manager at the Saudi Security Training Academy (SSTA), where he plays a pivotal role in advancing the Kingdom's private security sector. With a strong background in sales, marketing, and business development, Nawaf excels at forging strategic alliances and driving collaborative initiatives that elevate industry standards.

Recognizing the critical gaps in training, standards, and professional development across the industry, Nawaf is dedicated to embedding new benchmarks that align with Saudi Arabia's Vision 2030 objectives. His expertise enables him to identify and address these gaps effectively, ensuring that the security workforce is well-prepared to meet the demands of a rapidly changing environment.

Nawaf's approach is both strategic and personal. In an era where giga-projects, mega-events, and global attention place unprecedented pressure on frontline security, he champions the belief that true national security begins with those on the ground. Through his leadership at SSTA, Nawaf continues to shape the future of Saudi Arabia's private security sector, ensuring that every guard, every team, and every organization reflects the Kingdom's strength, readiness, and commitment to excellence on the world stage.`}
            />

            <TeamMemberCard
              name="Sukh Gill"
              position="Founder & Strategic Director"
              arabicName={teamMemberTranslations.sukh.name}
              arabicPosition={teamMemberTranslations.sukh.position}
              arabicBio={teamMemberTranslations.sukh.bio}
              imageUrl="/leadership/sukh.jpg"
              bio={`Sukh Gill is a globally-minded strategist and entrepreneur who has dedicated his expertise to supporting Saudi Arabia's Vision 2030. With a background in launching innovative ventures across digital marketing, technology, and business consultancy, Sukh has evolved into a leader known for designing transformative frameworks that empower nations, industries, and people.
            
Born and raised in the UK, Sukh now lives in Riyadh, having fully committed himself to the Kingdom's future. Inspired by Saudi Arabia's rapid transformation and recognising critical gaps in workforce development, he founded the Saudi Security Training Academy (SSTA) to redefine security standards and Shifa Future Health to lead a consortium of UK-trained doctors focused on advancing healthcare through upskilling Saudi talent.
            
Renowned for his ability to merge global expertise with national priorities, Sukh specialises in building purpose-driven ecosystems that drive sustainable growth across security, healthcare, and beyond. His work focuses on empowering Saudi talent, embedding international best practices, and ensuring every project aligns with the Kingdom's long-term vision of excellence and sovereignty.
            
With a deep commitment to Saudi Arabia's transformation, Sukh Gill represents a new class of leadership — blending entrepreneurial agility, cross-sector expertise, and an unwavering belief in the Kingdom's potential to set global benchmarks across critical industries.`}
            />

            <TeamMemberCard
              name="Mark Bramwell"
              position="Director of Training & Principle Consultant"
              arabicName={teamMemberTranslations.mark.name}
              arabicPosition={teamMemberTranslations.mark.position}
              arabicBio={teamMemberTranslations.mark.bio}
              imageUrl="/leadership/mark.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
              bio={`Mark Bramwell is a highly accomplished and credentialed security professional, with over 25 years of experience across military intelligence, diplomatic security, national risk assurance, and enterprise-level training systems.
            
A former British Army Intelligence Officer, Mark served in sensitive global theatres including Iraq, Syria, and Afghanistan, where he advised senior Military and Government officials on Crisis Strategy, Intelligence Operations, and Physical Security Infrastructure. He held the role of Assistant Defence Attaché in Damascus, where he managed high-pressure emergency operations, and provided strategic MI analysis that shaped UK Government policy. Mark speaks conversational Arabic, giving him rare operational edge in cross-cultural command, mentoring, and trust-building.
            
Following his military career, Mark transitioned into leadership in the private sector leadership as Head of Operational Security at Mitie, the UK's largest Security and FM provider. In this role, he has led physical risk assessments for critical infrastructure across the UK, developed nationwide SOP protocols, and advised multi-sector clients on regulatory compliance, threat mitigation, and business continuity.
            
Mark is also a certified enterprise training designer, having built and deployed national "Train-the-Trainer" ecosystems for over 3,000 personnel. His civilian and military training programs have covered:
            
• Combat & HUMINT
            
• VIP and Executive protection
            
• Crisis response and evacuation drills
            
• Risk auditing and predictive analysis
            
• Simulation design and immersive scenario leadership
            
            
He holds UK and International certifications in the field:
            
• Level 6 (BA Hons) – Certified Security Management Professional
• M.ISMI – Member of the International Security Management Institute
• MSyI – Member of the UK Security Institute
• M.ISRM – Member of the Institute of Strategic Risk Management
            
Training Qualifications
            
• Level 3 - Education & Training - Training qualification for the adult education and skills sector
• NUCO - First Aid Instructor
• NUCO - Health & Safety Instructor
• Defence Train The Trainer
            
• Defence Systems Approach to Training (DSAT) - Manager
• DSAT - Training Needs Analysis
• Defence Training Supervisor
• Defence Training Manager
            
            
As SSTA's Director of Training, Mark is responsible for:
            
• Designing and validating the 40-course certification framework
            
• Overseeing simulation-based assessments across national academies
            
• Training SAFE's elite Saudi cohort to become sector-specific master instructors
            
• Ensuring all certification aligns with global benchmarks while empowering a Saudi-first workforce
            
Mark does not teach guards. He builds sovereign systems to certify those who lead them.
            
                  `}
            />

            <TeamMemberCard
              name="Samraj Padda"
              position="Senior Trainer & Quality Lead"
              arabicName={teamMemberTranslations.samraj.name}
              arabicPosition={teamMemberTranslations.samraj.position}
              arabicBio={teamMemberTranslations.samraj.bio}
              imageUrl="/leadership/samraj.jpg"
              bio={`With over 20 years of frontline experience, Samraj Padda is a seasoned tactical operations expert known for leading high-stakes protection teams across the UK. From securing royalty and executives to managing live operations at Sky Studios, his leadership blends real-time precision with deep operational insight.

At SSTA, Samraj drives hands-on training and quality assurance across all certification programs. He leads live drills, high-pressure simulations, and trains Saudi instructors to perform with confidence under stress. A long-time collaborator with Mark Bramwell, he ensures every course delivers not just theory — but field-ready performance.

Samraj prepares teams for moments where failure is not an option.
            `}
            />

            <TeamMemberCard
              name="Tauqir Khan"
              position="Marketing Executive"
              arabicName={teamMemberTranslations.tauqir.name}
              arabicPosition={teamMemberTranslations.tauqir.position}
              arabicBio={teamMemberTranslations.tauqir.bio}
              imageUrl="/leadership/tauqir.jpg"
              bio={`Blending a unique combination of technical expertise and marketing acumen, Tauqir Khan brings over four years of coding experience alongside a solid background in sales and marketing. As Marketing Executive at SSTA, he leverages his analytical mindset and creative strategy to enhance brand visibility, drive engagement, and support the academy's growth objectives in the security training industry.`}
            />
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              isArabic ? "rtl" : "ltr"
            }`}
          >
            <div>
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
                <img
                  src="/section_images/leadershipVision.png"
                  alt="Leadership Meeting"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <SectionTitle
                title={t.visionSection.title}
                subtitle={t.visionSection.subtitle}
                centered={false}
              />

              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic
                  ? visionSectionContent.paragraph1.ar
                  : visionSectionContent.paragraph1.en}
              </p>

              <p
                className={`text-gray-700 mb-6 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic
                  ? visionSectionContent.paragraph2.ar
                  : visionSectionContent.paragraph2.en}
              </p>

              <div className="space-y-6">
                <div
                  className={`flex ${
                    isArabic ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div
                    className={`bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center ${
                      isArabic ? "ml-4" : "mr-4"
                    } flex-shrink-0`}
                  >
                    <Shield className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-2 text-ssta-dark ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.visionSection.saudiFirst.title}
                    </h3>
                    <p
                      className={`text-gray-600 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.visionSection.saudiFirst.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex ${
                    isArabic ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div
                    className={`bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center ${
                      isArabic ? "ml-4" : "mr-4"
                    } flex-shrink-0`}
                  >
                    <Award className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-2 text-ssta-dark ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.visionSection.globalExcellence.title}
                    </h3>
                    <p
                      className={`text-gray-600 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.visionSection.globalExcellence.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex ${
                    isArabic ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div
                    className={`bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center ${
                      isArabic ? "ml-4" : "mr-4"
                    } flex-shrink-0`}
                  >
                    <Briefcase className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-2 text-ssta-dark ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.visionSection.industryTransformation.title}
                    </h3>
                    <p
                      className={`text-gray-600 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.visionSection.industryTransformation.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title={t.cta.title}
        description={t.cta.description}
        buttonText={t.cta.buttonText}
        buttonLink="/contact"
      />
    </>
  );
};

export default Leadership;
