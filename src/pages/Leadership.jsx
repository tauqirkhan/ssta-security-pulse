import React from "react";
import { Award, Shield, Briefcase } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import CallToAction from "@/components/CallToAction";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import andrewImage from "@/assets/training/andrew.jpg";
import benImage from "@/assets/training/ben.jpg";
import darrenImage from "@/assets/training/darren.jpg";

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
        يعمل نواف القحطاني كمدير للشراكات في سعودي سيكيوريتي ترينينغ آند أدفانسمنت (SSTA)، حيث يلعب دورًا محوريًا في تطوير قطاع الأمن الخاص في المملكة. بخلفيته القوية في المبيعات والتسويق وتطوير الأعمال، يتفوق نواف في بناء التحالفات الاستراتيجية وقيادة المبادرات التعاونية التي ترفع من مستوى معايير القطاع الأمني.
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
ولد ونشأ في المملكة المتحدة، يعيش سك الآن في الرياض، حيث كرس نفسه بالكامل لمستقبل المملكة. بإلهام من التحول السريع للمملكة العربية السعودية واعترافًا بالفجوات الحرجة في تطوير القوى العاملة، أسس سعودي سيكيوريتي ترينينغ آند أدفانسمنت (SSTA) لإعادة تعريف المعايير الأمنية، ومؤسسة شفاء المستقبل الصحية لقيادة اتحاد من الأطباء المدربين في المملكة المتحدة يركزون على تطوير الرعاية الصحية من خلال تعزيز مهارات المواهب السعودية.
معروف بقدرته على دمج الخبرة العالمية مع الأولويات الوطنية، يتخصص صخ في بناء أنظمة بيئية هادفة تدفع النمو المستدام عبر الأمن والرعاية الصحية وما بعدها. يركز عمله على تمكين المواهب السعودية، وترسيخ أفضل الممارسات الدولية، وضمان توافق كل مشروع مع رؤية المملكة طويلة المدى للتميز والسيادة.
بالتزامه العميق بتحول المملكة العربية السعودية، يمثل صخ جيل فئة جديدة من القيادة، يمزج بين الرشاقة الريادية والخبرة عبر القطاعات والإيمان الراسخ بإمكانات المملكة لوضع معايير عالمية عبر الصناعات الحيوية.

      `,
    },
    samraj: {
      name: "سامراج بادا",
      position: "المدرب الأول ومسؤول الجودة",
      bio: `
      بخبرة تزيد عن 20 عامًا في الخطوط الأمامية، سامراج بادا هو خبير عمليات تكتيكية متمرس معروف بقيادة فرق حماية عالية المخاطر في جميع أنحاء المملكة المتحدة. من تأمين العائلة الملكية والتنفيذيين إلى إدارة العمليات المباشرة في استوديوهات سكاي، تجمع قيادته بين الدقة في الوقت الحقيقي والبصيرة التشغيلية العميقة.
في سعودي سيكيوريتي ترينينغ آند أدفانسمنت، يقود سامراج التدريب العملي وضمان الجودة عبر جميع برامج الشهادات. يقود التدريبات الحية، والمحاكاة عالية الضغط، ويدرب المدربين السعوديين على الأداء بثقة تحت الضغط. كمتعاون طويل الأمد مع مارك برامويل، فهو يضمن أن كل دورة تقدم ليس فقط النظرية - بل الأداء الجاهز للميدان.
يعد سامراج الفرق للحظات التي لا يكون فيها الفشل خيارًا.
      `,
    },
    tauqir: {
      name: "توقير خان",
      position: "المسؤول التنفيذي للتسويق",
      bio: `
      يجمع توقير خان بين مزيج فريد من الخبرة التقنية والفطنة التسويقية، ويتمتع بخبرة تزيد عن أربع سنوات في البرمجة إلى جانب خلفية قوية في المبيعات والتسويق. بصفته المسؤول التنفيذي للتسويق في سعودي سيكيوريتي ترينينغ آند أدفانسمنت، يستفيد من عقليته التحليلية واستراتيجيته الإبداعية لتعزيز ظهور العلامة التجارية، ودفع المشاركة، ودعم أهداف نمو الأكاديمية في صناعة التدريب الأمني.
      `,
    },
    indy: {
      name: "إندي ناغرا",
      position: "رئيس الحماية المرافقة في",
      bio: `
      إندي ناغرا خبير أمنيّ ذو خبرة واسعة ومرموق، وُلد في لندن، يتمتع بخبرة دولية تزيد عن 20 عامًا في مجال الأمن الوقائي. تشمل مسيرته المهنية عمليات انتشار في العراق وأفغانستان مع فوج المظلات السابع التابع للجيش البريطاني، بالإضافة إلى عمله مع وزارة الدفاع الأمريكية في الشرق الأوسط، وقطاع النفط والغاز، وأفراد من العائلة المالكة الإماراتية، ومشاهير، ورؤساء تنفيذيين لشركات.

يتمتع إندي بخبرة مثبتة في مجال الحماية الشخصية والتدريب وتكامل القوى العاملة. ومؤخرًا، قاد خدمات الحماية الشخصية لنجوم من الصف الأول في مهرجان البحر الأحمر السينمائي، كما قدّم خدمات أمن خاص لكبار الشخصيات وعملاء من أصحاب الثروات الكبيرة في المملكة العربية السعودية.
      `
    }
  };

  // Arabic translations for vision section
  const visionSectionContent = {
    paragraph1: {
      en: t.visionSection.paragraph1,
      ar: "في سعودي سيكيوريتي ترينينغ آند أدفانسمنت، نؤمن بأن الأمن فن استراتيجي يعتمد على القيادة التي تلهم الثقة وتبني النظم الفعالة والمستدامة. فريق قيادتنا هو مزيج متميز من الخبراء العسكريين والمهنيين المدنيين والمتخصصين السعوديين الذين يشكلون معًا مستقبل التدريب الأمني في المملكة.",
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

As the Chief Executive Officer of the Saudi Security Training & Advancement (SSTA), Major General Alshehri leverages his vast expertise to advance the Kingdom's security training initiatives. Under his leadership, SSTA is dedicated to enhancing the capabilities of security professionals, aligning with Saudi Arabia's Vision 2030 objectives to strengthen national security and promote technological self-reliance.
`}
            />

            <TeamMemberCard
              name="Nawaf Y M Alqahtani"
              position="Senior Partnership Manager"
              arabicName={teamMemberTranslations.nawaf.name}
              arabicPosition={teamMemberTranslations.nawaf.position}
              arabicBio={teamMemberTranslations.nawaf.bio}
              imageUrl="/leadership/nawaf.jpg"
              bio={`Nawaf Alqahtani serves as the Senior Partnership Manager at the Saudi Security Training & Advancement (SSTA), where he plays a pivotal role in advancing the Kingdom's private security sector. With a strong background in sales, marketing, and business development, Nawaf excels at forging strategic alliances and driving collaborative initiatives that elevate industry standards.

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
            
Born and raised in the UK, Sukh now lives in Riyadh, having fully committed himself to the Kingdom's future. Inspired by Saudi Arabia's rapid transformation and recognising critical gaps in workforce development, he founded the Saudi Security Training & Advancement (SSTA) to redefine security standards and Shifa Future Health to lead a consortium of UK-trained doctors focused on advancing healthcare through upskilling Saudi talent.
            
Renowned for his ability to merge global expertise with national priorities, Sukh specialises in building purpose-driven ecosystems that drive sustainable growth across security, healthcare, and beyond. His work focuses on empowering Saudi talent, embedding international best practices, and ensuring every project aligns with the Kingdom's long-term vision of excellence and sovereignty.
            
With a deep commitment to Saudi Arabia's transformation, Sukh Gill represents a new class of leadership — blending entrepreneurial agility, cross-sector expertise, and an unwavering belief in the Kingdom's potential to set global benchmarks across critical industries.`}
            />

            <TeamMemberCard
              name="Indy Nagra"
              position="Head Of Close Protection"
              arabicName={teamMemberTranslations.indy.name}
              arabicPosition={teamMemberTranslations.indy.position}
              arabicBio={teamMemberTranslations.indy.bio}
              imageUrl="/leadership/indy.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
              bio={`
                    Indy Nagra is a highly experienced and respected London-born security professional with over 20 years of international expertise in protective security. His career includes operational deployments in Iraq and Afghanistan with the British Army’s 7th Parachute Regiment RHA, as well as work with the US Department of Defense in the Middle East, the oil and gas sector, UAE Royalty, celebrities, and corporate CEOs.

Indy has a proven background in close protection, training, and workforce integration. Most recently, he led close protection for A-list stars at the Red Sea Film Festival and has also provided private security for VIP and high-net-worth clients in Saudi Arabia.
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

      {/* Training Team */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t.trainingTeam.title}
            subtitle={t.trainingTeam.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <TeamMemberCard
              name="Andrew Foster"
              position="Training Manager"
              arabicName="أندرو فوستر"
              arabicPosition="مدير التدريب"
              arabicBio="يجلب أندرو فوستر أكثر من 25 عامًا من الخبرة في الخطوط الأمامية في الجيش والأمن الخاص، بما في ذلك 13 عامًا مع كتيبة المظلات الأولى (SFSG)، ويواصل الخدمة كاحتياطي نشط في الجيش. مدرب بدني مؤهل في الجيش، يلعب أيضًا الرجبي ويدربه، ويجلب نفس التركيز على العمل الجماعي والانضباط والقيادة إلى نهجه التدريبي."
              imageUrl="/training_leadership/andrew_boa.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.1s" }}
              bio={`Andrew Foster brings over 25 years of frontline experience in military and private security, including 13 years with the 1st Battalion Parachute Regiment (SFSG), and continues to serve as an active Army Reservist. A qualified Army Physical Training Instructor, he also plays and coaches rugby, bringing the same focus on teamwork, discipline, and leadership into his training approach.

He has trained and led teams in high-risk environments across Iraq, Afghanistan, and Libya. His instruction is built on extensive operational experience and a strong foundation of professional qualifications, preparing officers to perform confidently, ethically, and effectively in real-world situations.`}
            />

            <TeamMemberCard
              name="Ben Wilmott"
              position="Team Development Manager"
              arabicName="بن ويلموت"
              arabicPosition="مدير تطوير الفريق"
              arabicBio="بخلفية متميزة كعضو سابق في كوماندوز البحرية الملكية، يجلب بن أكثر من 22 عامًا من الخبرة التشغيلية إلى دوره كمدير تطوير الفرق. تمتد مسيرته المهنية عبر مجموعة واسعة من البيئات عالية المخاطر، حيث قدم خدمات استشارات أمنية حول العالم."
              imageUrl="/training_leadership/ben_boa.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
              bio={`With a distinguished background as a former Royal Marines Commando, Ben brings over 22 years of operational experience to his role as Teams Development Manager. His career spans a wide range of high-risk environments, where he has delivered security consultancy services across the globe.

He has provided close protection for senior members of the Abu Dhabi and Brunei Royal Families, served as a media high-risk advisor for major news networks covering the Israel–Hamas war, and worked as a crisis management consultant for Google in Ukraine, supporting personnel safety in complex environments.

Ben has also operated as a diplomatic close protection operator for the UK's Foreign Commonwealth & Development Office (FCDO), the Australian Department of Foreign Affairs and Trade (DFAT), British Petroleum, and NATO, with deployments in Iraq and Ukraine.

Today, Ben draws on this extensive experience to deliver practical, mission-focused training tailored to the realities of modern security operations.`}
            />

            <TeamMemberCard
              name="Darren Clacher"
              position="Instructor"
              arabicName="دارين كلاشر"
              arabicPosition="مدرب"
              arabicBio="دارين كلاشر، مدرب تدريب مخصص، ينمو باستمرار في الخبرة والمهارة كل يوم. شغفه بالتعلم والتطوير يدفعه لتحسين أساليبه وتعزيز برامجه التدريبية. مع اكتساب دارين المزيد من الخبرة، يبقى ملتزمًا بتقديم تعليم فعال وجذاب ومؤثر يدعم نمو ونجاح متدربيه."
              imageUrl="/training_leadership/darren_boa.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
              bio={`Darren Clacher, a dedicated Training Instructor, is continually growing in expertise and skill each day. His passion for learning and development drives him to refine his methods and enhance his training programs. As Darren gains more experience, he remains committed to delivering effective, engaging, and impactful instruction that supports the growth and success of his trainees.`}
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
    </>
  );
};

export default Leadership;
