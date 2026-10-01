(() => {
  const dictionary = {
    'TRUSTED BY AMBITIOUS BRANDS':'شركاء طموحون يثقون بنا','HANKER / BRAND IN THE REAL WORLD':'هانكر / الهوية على أرض الواقع','Your Next Step.':'خطوتك الجاية.','Previous project':'المشروع السابق','Next project':'المشروع التالي',
    'Ansaam Incense Kuwait':'بخور انسام الكويت','ANSAAM':'انسام',
    'Skip to content':'انتقل للمحتوى','DIGITAL MARKETING':'التسويق الرقمي','Creative':'إبداع','Performance':'أداء',
    'Capabilities':'خدماتنا','Selected work':'أعمالنا','Work':'أعمالنا','Process':'طريقة عملنا','Contact':'تواصل معنا','Results':'النتائج','Partners':'شركاء النجاح',
    'Independent creative agency':'وكالة إبداعية مستقلة','WE MAKE':'نصنع','BRANDS':'علامات','THAT MOVE':'تتحرك نحو','FORWARD.':'المستقبل.','MOVE.':'تترك أثرًا.',
    'Strategy. Creative. Digital. Results.':'استراتيجية. إبداع. رقمي. نتائج.',
    'Strategy, identity, content and performance media—built as one connected system to move attention into action.':'استراتيجية وهوية ومحتوى وإعلانات، تعمل معًا لتحوّل اهتمام الجمهور إلى خطوات حقيقية.',
    'See the work':'اكتشف أعمالنا','Strategy · Creative · Performance':'استراتيجية · إبداع · أداء',
    'STRATEGY':'استراتيجية','IDENTITY':'هوية','CONTENT':'محتوى','PERFORMANCE':'أداء',
    '01 / CAPABILITIES':'01 / خدماتنا','BUILT TO':'خدمات متكاملة.','WORK TOGETHER.':'هدف واحد.',
    'One direction across every touchpoint. We connect the thinking, the look, the content and the media around a single business objective.':'اتجاه واحد في كل نقطة تواصل. نربط الاستراتيجية والهوية والمحتوى والإعلانات بهدف واضح لنشاطك.',
    'Brand Strategy & Identity':'استراتيجية وهوية العلامة','Social Media Management':'إدارة السوشيال ميديا','Creative Production':'الإنتاج الإبداعي','Performance Marketing':'التسويق بالأداء','Integrated Marketing Support':'حلول تسويقية متكاملة',
    'Positioning, visual systems and practical guidelines that make the brand distinct and consistent.':'تموضع واضح وهوية بصرية ودليل استخدام يحافظ على تميّز العلامة واتساقها.',
    'Planning, creative direction and execution shaped around the audience and the objective.':'تخطيط وتوجيه إبداعي وتنفيذ مبني على فهم الجمهور والهدف.',
    'Campaign concepts and content assets made to feel coherent across every format.':'أفكار حملات ومحتوى يحافظ على شخصية العلامة في كل منصة ومقاس.',
    'Paid campaigns planned and refined around qualified demand rather than vanity metrics.':'حملات مدفوعة تُخطط وتُطوّر للوصول إلى العملاء المناسبين وتحقيق طلب فعلي.',
    '02 / SELECTED WORK':'02 / أعمال مختارة','BUILT TO BE':'أعمال تستحق','REMEMBERED.':'أن تُذكر.',
    'Identity systems, physical experiences and campaign worlds—built from concept through execution.':'هويات بصرية وتجارب على أرض الواقع وحملات إبداعية، من الفكرة إلى التنفيذ.',
    'All work':'كل الأعمال','Branding':'الهوية البصرية','Campaigns':'الحملات','Branding · STEP':'هوية بصرية · STEP','Campaigns · STEP':'حملات · STEP','Full-service brand partner':'شريك متكامل للهوية والتسويق','Full-service brand partner · STEP':'شريك متكامل للهوية والتسويق · STEP','View case':'تفاصيل المشروع',
    'STEP / PROJECT STORY':'STEP / قصة المشروع','Close ×':'إغلاق ×','CREATED BY STEP':'من تنفيذ STEP','Visit the brand on Facebook ↗':'زيارة صفحة العلامة على فيسبوك ↗',
    'From a selected logo concept to a complete visual identity, physical brand experience and social media launch.':'انطلقنا من كونسيبت لوجو تم اختياره، وطوّرناه إلى هوية بصرية متكاملة وتنفيذ فعلي للمكان، ثم إطلاق العمل على السوشيال ميديا.',
    'A premium automotive identity extended across brand communication, social systems and digital product design.':'هوية مميزة لقطاع السيارات، ممتدة من تواصل العلامة ومحتوى السوشيال إلى تصميم التجربة الرقمية.',
    'A sharp Arabic automotive campaign system built around customer needs, financing and buying decisions.':'حملات عربية لقطاع السيارات تتمحور حول احتياجات العميل والتمويل وقرار الشراء.',
    'A quiet luxury identity for scarves and accessories, shaped through color, typography, material and art direction.':'هوية راقية للطرح والإكسسوارات تجمع بين الألوان والخطوط والخامات والتوجيه الفني.',
    'A café identity expressed through bold typography, warm color, graphic pattern, packaging and applications.':'هوية لمقهى تجمع بين خطوط جريئة وألوان دافئة وعناصر جرافيكية وتغليف وتطبيقات متكاملة.',
    'Interior campaign work presenting space, material quality and smart storage through a premium editorial layout.':'حملة تعرض المساحات وجودة الخامات وحلول التخزين الذكية بتصميم بصري راقٍ.',
    'Distinct campaign concepts for a day program and women’s retreat, created for clarity, empathy and action.':'أفكار حملات لبرنامج يومي وتجربة استراحة للسيدات، برسائل واضحة وقريبة من الجمهور.',
    'A travel campaign that turns route, comfort and booking information into one focused visual message.':'حملة سفر تجمع معلومات الطريق والراحة والحجز في رسالة بصرية واضحة.',
    'Agricultural content that combines product detail, useful guidance and a distinctive natural visual language.':'محتوى زراعي يجمع تفاصيل المنتج والإرشادات المفيدة بلغة بصرية مستوحاة من الطبيعة.',
    'A contemporary luxury identity and packaging direction rooted in gifting, material richness and hospitality.':'هوية راقية وتوجه للتغليف يجمع ثقافة الإهداء وثراء الخامات وروح الضيافة.',
    'An end-to-end food brand partnership spanning identity, physical experience, content, campaigns and performance marketing.':'شراكة متكاملة لعلامة في قطاع المطاعم تشمل الهوية وتجربة المكان والمحتوى والحملات والتسويق بالأداء.',
    'An end-to-end automotive brand partnership covering identity, digital presence, content, campaigns and performance marketing.':'شراكة متكاملة لعلامة في قطاع السيارات تشمل الهوية والحضور الرقمي والمحتوى والحملات والتسويق بالأداء.',
    'A complete automotive brand system developed from identity through content, campaigns, digital communication and performance marketing.':'منظومة متكاملة لعلامة في قطاع السيارات تبدأ من الهوية وتمتد إلى المحتوى والحملات والتواصل الرقمي والتسويق بالأداء.',
    'A complete fashion brand partnership spanning identity, art direction, content, campaigns and performance marketing.':'شراكة متكاملة لعلامة أزياء تشمل الهوية والتوجيه الفني والمحتوى والحملات والتسويق بالأداء.',
    'An end-to-end café brand built through identity, physical applications, content, campaigns and performance marketing.':'علامة مقهى متكاملة بُنيت من الهوية والتطبيقات على أرض الواقع إلى المحتوى والحملات والتسويق بالأداء.',
    'A complete interior brand partnership covering identity, content direction, campaigns and performance marketing.':'شراكة متكاملة لعلامة في مجال التصميم الداخلي تشمل الهوية وتوجيه المحتوى والحملات والتسويق بالأداء.',
    'A complete wellness brand partnership developed from identity through sensitive content, campaigns and performance marketing.':'شراكة متكاملة لعلامة في مجال الصحة النفسية تبدأ من الهوية وتمتد إلى المحتوى المتخصص والحملات والتسويق بالأداء.',
    'An end-to-end travel brand partnership covering identity, content, campaigns, booking communication and performance marketing.':'شراكة متكاملة لعلامة سفر تشمل الهوية والمحتوى والحملات ورسائل الحجز والتسويق بالأداء.',
    'A complete agricultural brand partnership spanning identity, educational content, campaigns and performance marketing.':'شراكة متكاملة لعلامة زراعية تشمل الهوية والمحتوى التوعوي والحملات والتسويق بالأداء.',
    'An end-to-end incense brand partnership covering identity, packaging, content, campaigns and performance marketing.':'شراكة متكاملة لعلامة بخور تشمل الهوية والتغليف والمحتوى والحملات والتسويق بالأداء.',
    '01 / Identity':'01 / الهوية','02 / Experience':'02 / التجربة','03 / Launch':'03 / الإطلاق',
    'Develop the selected logo concept into a complete, usable visual system.':'تطوير كونسيبت اللوجو المختار إلى نظام بصري متكامل قابل للتطبيق.',
    'Translate the identity across the location, signage, menus, packaging and uniforms.':'تطبيق الهوية في المكان واللافتات والمنيو والتغليف والزي الرسمي.',
    'Create the campaign direction and social content that introduced the brand.':'ابتكار اتجاه الحملة ومحتوى السوشيال ميديا لتقديم العلامة للجمهور.',
    '01 / Brand foundation':'01 / تأسيس العلامة','02 / Brand in motion':'02 / العلامة في حركة','03 / Brand experience':'03 / تجربة العلامة',
    'Build a bold, scalable identity system with a distinctive urban food personality.':'بناء هوية جريئة وقابلة للتوسع بشخصية حضرية مميزة لعلامة الطعام.',
    'Translate the identity into campaign worlds and an always-on social content system.':'تحويل الهوية إلى عوالم حملات ونظام محتوى مستمر للسوشيال ميديا.',
    'Carry the same visual confidence into the physical space and future expansion.':'نقل الثقة البصرية نفسها إلى تجربة المكان وخطط التوسع المستقبلية.',
    '01 / BRAND FOUNDATION':'01 / تأسيس العلامة','Identity system, visual language and applications':'نظام الهوية واللغة البصرية والتطبيقات',
    '02 / CAMPAIGN WORLD':'02 / عالم الحملات','A cinematic launch system built for appetite and impact':'نظام إطلاق سينمائي مصمم لإثارة الشهية وتحقيق التأثير',
    '03 / SOCIAL CONTENT':'03 / محتوى السوشيال','A high-energy visual system for product and lifestyle stories':'نظام بصري عالي الطاقة لقصص المنتج وأسلوب الحياة',
    '04 / ALWAYS-ON CAMPAIGNS':'04 / حملات مستمرة','Flexible creative formats across Arabic and English':'قوالب إبداعية مرنة بالعربية والإنجليزية',
    '05 / PHYSICAL EXPERIENCE':'05 / التجربة الواقعية','Storefront, menu and interior brand implementation':'تنفيذ الهوية على الواجهة والمنيو والتصميم الداخلي',
    '06 / BUILT TO SCALE':'06 / جاهز للتوسع','A consistent system designed for growth and expansion':'نظام متسق مصمم للنمو والتوسع',
    '01 / BRAND FOUNDATION · Identity system, visual language and applications':'01 / تأسيس العلامة · نظام الهوية واللغة البصرية والتطبيقات',
    '02 / CAMPAIGN WORLD · A cinematic launch system built for appetite and impact':'02 / عالم الحملات · نظام إطلاق سينمائي مصمم لإثارة الشهية وتحقيق التأثير',
    '03 / SOCIAL CONTENT · A high-energy visual system for product and lifestyle stories':'03 / محتوى السوشيال · نظام بصري عالي الطاقة لقصص المنتج وأسلوب الحياة',
    '04 / ALWAYS-ON CAMPAIGNS · Flexible creative formats across Arabic and English':'04 / حملات مستمرة · قوالب إبداعية مرنة بالعربية والإنجليزية',
    '05 / PHYSICAL EXPERIENCE · Storefront, menu and interior brand implementation':'05 / التجربة الواقعية · تنفيذ الهوية على الواجهة والمنيو والتصميم الداخلي',
    '06 / BUILT TO SCALE · A consistent system designed for growth and expansion':'06 / جاهز للتوسع · نظام متسق مصمم للنمو والتوسع',
    '01 / Visual identity':'01 / الهوية البصرية','02 / Campaign system':'02 / نظام الحملات','03 / Customer action':'03 / تحفيز قرار العميل',
    'Engineer a premium automotive identity around a distinctive eye-and-wing emblem.':'بناء هوية فاخرة لقطاع السيارات تتمحور حول رمز العين والجناحين المميز.',
    'Turn product choice, pricing and finance messages into one coherent content language.':'تحويل رسائل تنوع السيارات والأسعار والتمويل إلى لغة محتوى واحدة متماسكة.',
    'Structure every offer around clearer decisions, qualified enquiries and faster conversion.':'بناء كل عرض لتسهيل القرار وجذب استفسارات مؤهلة وتسريع التحويل.',
    '01 / VISUAL IDENTITY':'01 / الهوية البصرية','Logo construction, color system and automotive brand assets':'بناء الشعار ونظام الألوان وعناصر العلامة لقطاع السيارات',
    '02 / BRAND INTRODUCTION':'02 / تقديم العلامة','A clear launch message built around the customer journey':'رسالة إطلاق واضحة تتمحور حول رحلة العميل',
    '03 / PRODUCT CHOICE':'03 / تنوع السيارات','A flexible campaign built around variety and selection':'حملة مرنة تبرز التنوع وسهولة الاختيار',
    '04 / VALUE POSITIONING':'04 / القيمة السعرية','Strong commercial communication for price-conscious buyers':'تواصل تجاري قوي للعملاء الباحثين عن أفضل قيمة',
    '05 / FINANCING CAMPAIGN':'05 / حملة التمويل','Bank-backed payment options presented with clarity':'عرض واضح لخيارات الدفع المدعومة من البنوك',
    '06 / LOW DOWN PAYMENT':'06 / أقل مقدم','A conversion-focused offer that reduces the entry barrier':'عرض موجه للتحويل يقلل عائق بدء الشراء',
    '07 / CASHBACK OFFER':'07 / عرض الكاش باك','Tactical creative for selected-vehicle promotions':'تصميم تكتيكي لعروض السيارات المختارة',
    '08 / ZERO ADMIN FEES':'08 / بدون مصاريف إدارية','A direct message designed for qualified enquiries':'رسالة مباشرة مصممة لجذب استفسارات مؤهلة',
    '09 / IMMEDIATE DELIVERY':'09 / الاستلام الفوري','A decisive closing message focused on speed and availability':'رسالة ختامية حاسمة تركز على السرعة والتوافر',
    '01 / VISUAL IDENTITY · Logo construction, color system and automotive brand assets':'01 / الهوية البصرية · بناء الشعار ونظام الألوان وعناصر العلامة لقطاع السيارات',
    '02 / BRAND INTRODUCTION · A clear launch message built around the customer journey':'02 / تقديم العلامة · رسالة إطلاق واضحة تتمحور حول رحلة العميل',
    '03 / PRODUCT CHOICE · A flexible campaign built around variety and selection':'03 / تنوع السيارات · حملة مرنة تبرز التنوع وسهولة الاختيار',
    '04 / VALUE POSITIONING · Strong commercial communication for price-conscious buyers':'04 / القيمة السعرية · تواصل تجاري قوي للعملاء الباحثين عن أفضل قيمة',
    '05 / FINANCING CAMPAIGN · Bank-backed payment options presented with clarity':'05 / حملة التمويل · عرض واضح لخيارات الدفع المدعومة من البنوك',
    '06 / LOW DOWN PAYMENT · A conversion-focused offer that reduces the entry barrier':'06 / أقل مقدم · عرض موجه للتحويل يقلل عائق بدء الشراء',
    '07 / CASHBACK OFFER · Tactical creative for selected-vehicle promotions':'07 / عرض الكاش باك · تصميم تكتيكي لعروض السيارات المختارة',
    '08 / ZERO ADMIN FEES · A direct message designed for qualified enquiries':'08 / بدون مصاريف إدارية · رسالة مباشرة مصممة لجذب استفسارات مؤهلة',
    '09 / IMMEDIATE DELIVERY · A decisive closing message focused on speed and availability':'09 / الاستلام الفوري · رسالة ختامية حاسمة تركز على السرعة والتوافر',
    '02 / CAMPAIGN GRID I':'02 / شبكة الحملة الأولى','Brand introduction, product choice, value and finance':'تقديم العلامة وتنوع السيارات والقيمة وحلول التمويل',
    '03 / CAMPAIGN GRID II':'03 / شبكة الحملة الثانية','Down payment, cashback, zero fees and immediate delivery':'المقدم والكاش باك وبدون مصاريف والاستلام الفوري',
    '02 / CAMPAIGN GRID I · Brand introduction, product choice, value and finance':'02 / شبكة الحملة الأولى · تقديم العلامة وتنوع السيارات والقيمة وحلول التمويل',
    '03 / CAMPAIGN GRID II · Down payment, cashback, zero fees and immediate delivery':'03 / شبكة الحملة الثانية · المقدم والكاش باك وبدون مصاريف والاستلام الفوري',
    'Logo concept and visual identity':'كونسيبت اللوجو والهوية البصرية','Packaging and brand applications':'التغليف وتطبيقات الهوية','On-site implementation and staff uniforms':'التنفيذ في المكان والزي الرسمي','Opening campaign and storefront':'حملة الافتتاح وواجهة المكان','Campaign concept development':'تطوير فكرة الحملة','Social media campaign':'حملة السوشيال ميديا','Brand presentation':'عرض العلامة','Color and typography system':'نظام الألوان والخطوط','Social media design system':'نظام تصميم السوشيال ميديا','Website and mobile interface designs':'تصميم واجهات الموقع والموبايل','Campaign hero artwork':'التصميم الرئيسي للحملة','Your car journey':'رحلتك لامتلاك سيارة','Finding the right car':'اختيار السيارة المناسبة','Car sourcing':'توفير السيارات','Budget-led selection':'اختيارات تناسب الميزانية','Lifestyle-led selection':'اختيارات تناسب أسلوب الحياة','Visual identity and brand applications':'الهوية البصرية وتطبيقاتها','Brand identity and applications':'هوية العلامة وتطبيقاتها','Kitchen campaign artwork':'تصميم حملة المطابخ','Day program campaign':'حملة البرنامج اليومي','Women’s retreat campaign':'حملة الاستراحة للسيدات','Travel campaign artwork':'تصميم حملة السفر','Palm care social artwork':'تصميم إرشادات العناية بالنخيل','Identity and packaging direction':'اتجاه الهوية والتغليف',
    'OUR SUCCESS PARTNERS':'شركاء النجاح','GREAT BRANDS.':'علامات مميزة.','SHARED AMBITION.':'طموح يجمعنا.',
    'Different industries. Distinct identities. A shared drive to create work that moves people.':'مجالات مختلفة وهويات مميزة، يجمعنا طموح لصناعة أعمال تصل للناس وتترك أثرًا.',
    'IN GOOD COMPANY':'نعتز بثقتهم','Selected clients':'نماذج من عملائنا','Meet our partners ↗':'تعرّف على شركائنا ↗','BUILT ON TRUST. MADE TO LAST.':'شراكات أساسها الثقة، وطموحها الاستمرار.','Your next chapter starts here ↗':'خطوتك القادمة تبدأ هنا ↗','Pause motion':'إيقاف الحركة','Resume motion':'تشغيل الحركة',
    '03 / PROCESS':'03 / طريقة عملنا','MOVE WITH':'كل خطوة','INTENT.':'لها هدف.',
    'A focused route from the commercial problem to a coherent system, then continuous improvement.':'رحلة واضحة تبدأ بفهم تحديات النشاط، ثم بناء منظومة متكاملة وتطويرها باستمرار.',
    'Diagnose':'نفهم','Direct':'نحدد الاتجاه','Create':'نبدع وننفذ','Improve':'نطوّر',
    'Align the audience, offer, market and business objective before deciding what to make.':'نفهم الجمهور والعرض والسوق وهدف النشاط قبل تحديد ما سننفذه.',
    'Define one strategic and creative direction that gives every output a shared purpose.':'نحدد اتجاهًا استراتيجيًا وإبداعيًا واحدًا يمنح كل مخرج هدفًا واضحًا.',
    'Build the content, visual system and campaign assets with consistency across formats.':'ننـفذ المحتوى والنظام البصري وعناصر الحملات باتساق عبر مختلف الصيغ.',
    'Read the real response, keep what works and refine what blocks growth.':'نقرأ استجابة الجمهور، ونطوّر ما ينجح، ونعالج ما يعطل النمو.',
    'PERFORMANCE / ANONYMOUS SNAPSHOT':'الأداء / نتائج دون اسم العميل','THE FIRST':'نتائج أول','28 DAYS.':'٢٨ يومًا.',
    'Performance overview':'نظرة على الأداء','Dashboard-reported change':'التغير وفق لوحة الإحصاءات',
    'Views':'مشاهدات','Engagements':'تفاعلات','Net followers':'صافي المتابعين',
    '↑ 152% · Dashboard-reported change':'↑ 152% · التغير وفق لوحة الإحصاءات','↑ 75% · Dashboard-reported change':'↑ 75% · التغير وفق لوحة الإحصاءات','↑ 171% · Dashboard-reported change':'↑ 171% · التغير وفق لوحة الإحصاءات',
    'Source: client-provided platform dashboard. Percentage changes are shown as reported; comparison dates and paid/organic split are not available.':'المصدر: لوحة إحصاءات المنصة المقدمة من العميل. نسب التغير كما وردت؛ تواريخ المقارنة وتوزيع النتائج بين المدفوع والطبيعي غير متاحة.',
    'READY FOR':'جاهز لخطوتك','THE':'','NEXT STEP?':'القادمة؟',
    'Tell us what you are building and where you need momentum. Your brief opens in WhatsApp for you to review before sending.':'احكِ لنا عن مشروعك وما تريد تحقيقه. سيفتح ملخص طلبك في واتساب لتراجعه قبل الإرسال.',
    'WhatsApp · +20 10 44824418':'واتساب · +20 10 44824418','Your name':'اسمك','Full name':'الاسم بالكامل','Company':'الشركة','Brand or company':'اسم العلامة أو الشركة','What do you need?':'ما الخدمة التي تحتاجها؟','Choose a service':'اختر الخدمة','Project brief':'نبذة عن المشروع','What are you trying to achieve?':'ما الذي تريد تحقيقه؟','CONTINUE ON WHATSAPP ↗':'المتابعة على واتساب ↗','Nothing is stored on this website.':'لا يتم حفظ بيانات النموذج على الموقع.','CALL':'اتصل بنا','WHATSAPP ↗':'واتساب ↗','© 2026 STEP Digital Marketing.':'© 2026 STEP للتسويق الرقمي.',
    'Main navigation':'التنقل الرئيسي','Footer navigation':'روابط التذييل','Open menu':'فتح القائمة','Close menu':'إغلاق القائمة','Close project':'إغلاق المشروع','Start a project':'ابدأ مشروعك','STEP home':'STEP الرئيسية','Our clients':'عملاؤنا','Filter selected work':'تصفية الأعمال'
  };
  Object.assign(dictionary, {'About STEP':'عن STEP','Explore Hanker Burger':'شاهد مشروع هانكر برجر','Hanker Burger brand identity by STEP':'الهوية البصرية لهانكر برجر من تنفيذ STEP','Brand identity · Campaigns · Experience':'هوية بصرية · حملات · تجربة العلامة'});
  Object.assign(dictionary, {"Brands That": "علامات", "Move": "تتحرك نحو", "Forward.": "المستقبل.", "Let’s Talk": "خلّينا نتكلم", "Explore our work": "اكتشف أعمالنا", "Featured brands": "علامات في أعمالنا", "Connected disciplines": "تخصصات متكاملة", "One shared direction": "اتجاه واحد", "Everything Your Brand": "كل اللي علامتك محتاجاه.", "Needs. In One Place.": "في مكان واحد.", "Real Brands.": "علامات حقيقية.", "Real Work.": "شغل حقيقي.", "04 / ABOUT STEP": "04 / عن STEP", "More Than": "أكتر من", "a Marketing Agency.": "وكالة تسويق.", "A Growth Partner.": "شريك في نموّك.", "05 / INSIGHTS": "05 / رؤى وأفكار", "Ideas. Perspectives.": "أفكار. رؤى.", "What’s Next.": "الخطوة الجاية.", "Let’s Build": "نبني مع بعض", "Meet all our partners": "شوف كل شركائنا", "Insights": "رؤى وأفكار", "Next Step.": "خطوتك الجاية.", "Your": "", "BRAND STRATEGY": "استراتيجية العلامة", "CREATIVE DIRECTION": "التوجيه الإبداعي", "Recognition starts with consistency.": "التميّز بيبدأ من الاتساق.", "One idea. A whole campaign.": "فكرة واحدة. حملة متكاملة.", "Make the next action clear.": "خلّي الخطوة الجاية واضحة.", "Read the perspective ↗": "اقرأ الفكرة ↗", "A strong identity connects typography, imagery and tone across every touchpoint. Define a small set of clear rules, then apply them consistently before adding more visual elements.": "الهوية القوية بتربط الخطوط والصور ونبرة الكلام في كل نقطة تواصل. حدّد قواعد بسيطة وواضحة، وطبّقها باتساق قبل ما تضيف عناصر بصرية جديدة.", "Start with one message your audience can understand quickly. Adapt the composition for each format while keeping the product, tone and visual cues recognizable.": "ابدأ برسالة واحدة جمهورك يفهمها بسرعة. غيّر التكوين حسب كل مقاس، مع الحفاظ على وضوح المنتج ونبرة العلامة وعناصرها البصرية.", "Connect the ad, landing page and enquiry journey around the same offer. Measure the action that matters to the business, then improve the step where people drop off.": "اربط الإعلان وصفحة الهبوط ورحلة الاستفسار بنفس العرض. قيس الإجراء المهم للنشاط، وطوّر الخطوة اللي الجمهور بيتوقف عندها."});
  Object.assign(dictionary, {
    'Strategy gives the idea direction. Creative makes people feel it. Performance keeps it moving.':'الاستراتيجية بتحدد اتجاه الفكرة، والإبداع بيخلّي الناس تحسّها، والأداء بيخليها تتحرك.',
    'NOT NOISE.':'مش دوشة.','DIRECTION.':'اتجاه واضح.','Strategy':'استراتيجية','Idea':'فكرة','Creative':'إبداع',
    'See the work':'شوف شغلنا','REAL IDEAS.':'أفكار حقيقية.','REAL PEOPLE.':'ناس حقيقية.','REAL MOVEMENT.':'حركة حقيقية.','REAL RESULTS.':'نتائج حقيقية.',
    '02 / IN GOOD COMPANY':'02 / وسط شركاء النجاح','Different industries. Distinct identities. One shared ambition: work that moves people.':'مجالات مختلفة وهويات مميزة، يجمعنا طموح واحد: شغل يحرّك الناس.','Meet our partners':'تعرّف على شركائنا',
    '03 / THE NETWORK':'03 / شبكة شركائنا','MAKE':'','Same people.':'نفس الناس.','Bigger stories.':'حكايات أكبر.','VIEW':'عرض','Twenty brands. Different worlds. A growing network shaped by honest collaboration and ambitious work.':'عشرون علامة من عوالم مختلفة، جمعتهم شراكات حقيقية وطموح كبير.','Your next chapter starts here':'خطوتك الجاية تبدأ هنا'
  });
  const reverse = new Map(Object.entries(dictionary).filter(([,v])=>v).map(([k,v])=>[v,k]));
  const originals=new WeakMap();
  let language=document.documentElement.lang==='ar'?'ar':'en';
  function translate(value){
    const key=value.trim();
    if(Object.hasOwn(dictionary,key))return value.replace(key,dictionary[key]);
    if(key.startsWith('Open ')&&key.endsWith(' case study'))return 'عرض مشروع '+key.slice(5,-11);
    if(key.includes(' — ')){const [brand,caption]=key.split(' — ');return brand+' — '+(dictionary[caption]||caption);}
    return value;
  }
  function localize(root=document.body){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    for(const node of nodes){
      if(node.parentElement.closest('script,style,.preferences'))continue;
      const current=node.nodeValue,old=originals.get(node);
      const original=old&&(current===old.en||current===old.ar)?old.en:(reverse.get(current.trim())||current);
      const ar=translate(original);originals.set(node,{en:original,ar});
      const wanted=language==='ar'?ar:original;if(current!==wanted)node.nodeValue=wanted;
    }
    const elements=[...(root.nodeType===1?[root]:[]),...root.querySelectorAll('[placeholder],[aria-label],img[alt]')];
    for(const el of elements){if(el.closest('.preferences'))continue;for(const attr of ['placeholder','aria-label','alt']){
      if(!el.hasAttribute(attr))continue;
      const key='original'+attr.replace(/(^|-)([a-z])/g,(_,dash,c)=>c.toUpperCase()),now=el.getAttribute(attr),saved=el.dataset[key];
      const original=saved&&(now===saved||now===translate(saved))?saved:(reverse.get(now)||now);
      el.dataset[key]=original;const wanted=language==='ar'?translate(original):original;
      if(wanted!==now)el.setAttribute(attr,wanted);
    }}
  }
  window.stepLocalize=localize;
  const controls=document.createElement('div');controls.className='preferences';
  controls.innerHTML='<button class="preference-button" type="button" id="languageToggle"></button><button class="preference-button" type="button" id="themeToggle"></button>';
  document.getElementById('menuButton').before(controls);
  const langButton=document.getElementById('languageToggle'),themeButton=document.getElementById('themeToggle');
  function remember(key,value){try{localStorage.setItem(key,value)}catch(e){}}
  function updateControls(){
    const light=document.documentElement.dataset.theme==='light';
    langButton.textContent=language==='ar'?'EN':'عربي';langButton.lang=language==='ar'?'en':'ar';langButton.setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');
    themeButton.textContent=light?'☾':'☀';themeButton.setAttribute('aria-label',language==='ar'?(light?'تفعيل الوضع الليلي':'تفعيل الوضع الفاتح'):(light?'Switch to dark mode':'Switch to light mode'));
    themeButton.setAttribute('aria-pressed',String(!light));
    document.querySelector('meta[name="theme-color"]').content='#0B0F1A';
  }
  function setLanguage(lang){language=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';localize();updateControls();document.title=lang==='ar'?'STEP — وكالة الإبداع والتسويق':'STEP — Creative & Performance Agency';}
  langButton.addEventListener('click',()=>{setLanguage(language==='ar'?'en':'ar');remember('step-language',language)});
  themeButton.addEventListener('click',()=>{const root=document.documentElement;root.classList.add('theme-switching');clearTimeout(themeButton._t);themeButton._t=setTimeout(()=>root.classList.remove('theme-switching'),320);const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;remember('step-theme',next);updateControls()});
  // Covers newly opened project stories and stateful menu/motion labels.
  const observer=new MutationObserver(records=>{observer.disconnect();for(const record of records){if(record.type==='attributes')localize(record.target);else if(record.target.nodeType===3)localize(record.target.parentElement);else localize(record.target)}observe()});
  function observe(){observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label']})}
  document.querySelectorAll('#service option').forEach(option=>{if(!option.hasAttribute('value'))option.value=option.textContent});
  document.getElementById('projectForm').addEventListener('submit',event=>{
    if(language!=='ar')return;event.preventDefault();event.stopImmediatePropagation();
    const data=new FormData(event.currentTarget),text=['مرحبًا STEP، أود مناقشة مشروع.','','الاسم: '+data.get('name'),'الشركة: '+(data.get('company')||'غير محدد'),'الخدمة: '+(dictionary[data.get('service')]||data.get('service')),'نبذة: '+data.get('message')].join('\n');
    window.open('https://wa.me/201044824418?text='+encodeURIComponent(text),'_blank','noopener');
  });
  setLanguage(language);observe();
})();
