export interface FacebookPost {
  id: string
  slug: string
  title: string
  publishedAt: string
  displayDate: string
  category:
    | 'Admissions Alert'
    | 'Visa Grant Update'
    | 'Scholarship Notice'
    | 'No-IELTS / MOI Pathway'
    | 'Career & Student Support'
  posterBadge: string
  posterHeadline: string
  posterSubheadline: string
  posterStats: { label: string; value: string }[]
  image: string
  captionLead: string
  captionBody: string[]
  keyHighlights: string[]
  relatedUniversitySlug?: string
  relatedUniversityName?: string
  seoKeywords: string[]
  facebookUrl: string
}

export const OFFICIAL_FACEBOOK_PAGE_URL =
  'https://www.facebook.com/SageRootsInternation'

export const facebookPosts: FacebookPost[] = [
  {
    id: 'sri-fb-1',
    slug: 'uk-higher-education-right-decision-brighter-future',
    title:
      'আজকের এই হাসির পেছনে আছে একটি সঠিক সিদ্ধান্ত — UK-তে উচ্চশিক্ষা, একটি উজ্জ্বল ভবিষ্যতের পথচলা',
    publishedAt: '2026-10-04',
    displayDate: '4 October 2026',
    category: 'Admissions Alert',
    posterBadge: 'OFFICIAL FACEBOOK POST',
    posterHeadline: 'A Right Decision Today Can Shape a Brighter Tomorrow',
    posterSubheadline:
      'University Selection | Application Support | Documentation Guidance | Student Visa Support | Pre-Departure Support',
    posterStats: [
      { label: 'Destination', value: 'United Kingdom' },
      { label: 'Support Scope', value: 'End-to-End Guidance' },
      { label: 'Service Charge', value: '100% Free Processing' },
    ],
    image: '/images/fb-posts/fb-post-1.jpg',
    captionLead:
      'A right decision today can shape a brighter tomorrow. আজকের এই হাসির পেছনে আছে একটি সঠিক সিদ্ধান্ত — UK-তে উচ্চশিক্ষা, একটি উজ্জ্বল ভবিষ্যতের পথচলা।',
    captionBody: [
      'For many families, studying in the UK is more than just earning a degree — it is about creating new opportunities, building a global career, and securing a better future.',
      'At Sage Roots International, we support students throughout their entire journey, from university selection and application processing to financial documentation, UKVI student visa guidance, and pre-departure orientation.',
      'Start your UK study journey with the right guidance from our London and international admissions team.',
    ],
    keyHighlights: [
      'University Selection tailored to your academic background and career goals',
      'Complete Application Support and fast Offer Letter processing',
      'Documentation Guidance and 28-Day financial compliance verification',
      'UKVI Student Visa Support and Pre-Departure Briefing',
    ],
    seoKeywords: [
      'UK Higher Education Bangladesh',
      'Study in UK Guidance',
      'Sage Roots International Facebook Post',
      'UK Student Visa Support London',
      'UK University Application Support',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122188577450685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-2',
    slug: 'entry-requirements-for-masters-in-the-uk-ielts-or-moi',
    title:
      'What Are the Entry Requirements for Master’s in the UK? Bachelor’s Degree, IELTS 6.0/6.5 or MOI',
    publishedAt: '2026-10-03',
    displayDate: '3 October 2026',
    category: 'No-IELTS / MOI Pathway',
    posterBadge: 'UK MASTER’S ENTRY CRITERIA',
    posterHeadline: 'What Are The Entry Requirements For Master’s in the UK?',
    posterSubheadline:
      'Bachelor’s Degree | IELTS 6.0/6.5 Or MOI | Professional Experience (Optional)',
    posterStats: [
      { label: 'Academic Entry', value: 'Bachelor’s Degree' },
      { label: 'English Pathway', value: 'IELTS 6/6.5 or MOI' },
      { label: 'Work Experience', value: 'Optional (Course Based)' },
    ],
    image: '/images/fb-posts/fb-post-2.jpg',
    captionLead:
      'Planning to pursue a Master’s in the UK? Understanding the core academic and English language requirements is the first step toward a successful offer letter.',
    captionBody: [
      'To apply for a UK Postgraduate taught degree (MSc, MA, or MBA), applicants require a recognised Bachelor’s degree alongside IELTS 6.0/6.5 or an accepted Medium of Instruction (MOI) certificate depending on the chosen university.',
      'Professional work experience is optional for most conversion and general management programmes, and can also be used to justify an academic study gap.',
      'Let Sage Roots International guide you through university selection, application submission, documentation checking, and UKVI student visa support.',
    ],
    keyHighlights: [
      'Bachelor’s Degree from any recognised university',
      'IELTS 6.0 / 6.5 or Medium of Instruction (MOI) accepted at selected partner universities',
      'Professional Experience (Optional) — accepted to bridge study gaps',
      'Direct application submission via our London admissions desk at £0 agency fee',
    ],
    seoKeywords: [
      'Masters in UK Entry Requirements',
      'Study in UK with MOI',
      'UK Postgraduate Admission Requirements',
      'IELTS 6.0 UK Universities',
      'Sage Roots International UK Masters',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122188506338685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-3',
    slug: 'january-2027-uk-intake-now-open-apply-now',
    title:
      'January 2027 UK Intake Is Now Open: Your Opportunity Isn’t Hidden — Just Enter and Fly to Abroad',
    publishedAt: '2026-09-29',
    displayDate: '29 September 2026',
    category: 'Admissions Alert',
    posterBadge: 'JANUARY 2027 INTAKE OPEN',
    posterHeadline: 'Your Opportunity Isn’t Hidden — Just Enter and Fly to Abroad',
    posterSubheadline:
      'Wide Range of Courses | UK University Options | Application Support | Visa Guidance',
    posterStats: [
      { label: 'Active Intake', value: 'January 2027' },
      { label: 'Course Options', value: 'UG & PG Programmes' },
      { label: 'Support Model', value: 'End-to-End UK Desk' },
    ],
    image: '/images/fb-posts/fb-post-3.jpg',
    captionLead:
      'JANUARY 2027 INTAKE IS NOW OPEN! Your opportunity to study abroad starts with one right decision.',
    captionBody: [
      'Planning to study in the UK for the upcoming January 2027 Intake? Let Sage Roots International help you take the right step — from course and university shortlisting to application filing and complete UKVI visa guidance.',
      'Early applicants benefit from wider university availability, automatic regional scholarships, and ample time to complete their Pre-CAS interview and 28-day bank statement maturity without stress.',
    ],
    keyHighlights: [
      'Wide Range of Undergraduate and Postgraduate Courses across the UK',
      'Multiple UK Partner University Options inside and outside London',
      'Priority Offer Letter & CAS Application Support',
      'Complete UKVI Student Visa Guidance and End-to-End Support',
    ],
    seoKeywords: [
      'January 2027 Intake UK',
      'UK University Admission January 2027',
      'Study Abroad UK Consultant',
      'Sage Roots International January Intake',
      'Apply UK University 2027',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122188176668685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-4',
    slug: 'uk-student-part-time-job-support-stratford-london-office',
    title:
      'Sage Roots International Provides Dedicated Part-Time Job Support in London for Enrolled Students',
    publishedAt: '2026-09-25',
    displayDate: '25 September 2026',
    category: 'Career & Student Support',
    posterBadge: 'LONDON ONSHORE STUDENT SUPPORT',
    posterHeadline: 'Dedicated Part-Time Job Support for Our Enrolled UK Students',
    posterSubheadline:
      'Open Recruitment: Stadium & Event Cleaning | 44 Broadway, Stratford, London E15 1XH',
    posterStats: [
      { label: 'London Office', value: 'Stratford E15 1XH' },
      { label: 'Sector', value: 'Stadium & Event Work' },
      { label: 'Eligibility', value: 'SRI Enrolled Students' },
    ],
    image: '/images/fb-posts/fb-post-4.jpg',
    captionLead:
      'Sage Roots International provides dedicated part-time job support and recruitment guidance in London to students who process their UK university admissions through us.',
    captionBody: [
      'Because our head office is physically located at 44 Broadway, Stratford, London E15 1XH, our support does not end when you land at Heathrow. We actively assist our newly arrived international students with UK CV formatting, National Insurance (NI) number application guidance, and direct connections to verified part-time roles.',
      'Our London recruitment desk regularly coordinates flexible student shifts in stadium operations, hospitality, and event services across London within legal UKVI Student Route working-hour regulations.',
    ],
    keyHighlights: [
      'Exclusively available to students who process their UK university admission through Sage Roots International',
      'Active recruitment connections for Stadium & Event Cleaning and hospitality shifts in London',
      'In-person registration and student support at 44 Broadway, Stratford, London E15 1XH',
      'Full compliance with UKVI term-time (20 hrs/week) and vacation-time working regulations',
    ],
    seoKeywords: [
      'Part Time Job Support UK Students London',
      'Stratford London Student Consultancy',
      'International Student Jobs London',
      'Sage Roots International Stratford Office',
      'UK Student Post Arrival Support',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122187855374685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-5',
    slug: 'the-uk-is-calling-will-you-answer-study-in-uk',
    title:
      'The UK Is Calling — Will You Answer? Start Your British University Journey Today',
    publishedAt: '2026-09-24',
    displayDate: '24 September 2026',
    category: 'Admissions Alert',
    posterBadge: 'STUDY IN THE UNITED KINGDOM',
    posterHeadline: 'The UK Is Calling... Will You Answer?',
    posterSubheadline:
      'Direct UK University Admissions | Scholarship Assessment | Complete Visa Support',
    posterStats: [
      { label: 'Direct Hotline', value: '+44 7776 181483' },
      { label: 'Location', value: 'London, United Kingdom' },
      { label: 'Assessment', value: 'Free Profile Check' },
    ],
    image: '/images/fb-posts/fb-post-5.jpg',
    captionLead:
      'The UK is calling — will you answer? Take the first step toward earning an internationally recognised British degree in the heart of the United Kingdom.',
    captionBody: [
      'From iconic historic universities to modern career-focused London campuses, studying in the UK opens doors to global employers and a 2-year Post-Study Work (Graduate Route) opportunity.',
      'Connect directly with Sage Roots International on WhatsApp at +44 7776 181483 or visit www.sagerootsinternational.co.uk to receive your personalised university shortlist within 24 hours.',
    ],
    keyHighlights: [
      'Fast-track admission to respected universities in London and across the UK',
      'Tailored guidance for Undergraduate, Postgraduate, and Foundation pathways',
      'One-to-one Pre-CAS mock interviews and SOP preparation',
      'Direct London office support before and after arrival in the UK',
    ],
    seoKeywords: [
      'The UK is Calling Study Abroad',
      'Study in London UK Universities',
      'Sage Roots International Contact',
      'British Degree Admission Support',
      'UK Student Visa Consultant',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122187823772685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-6',
    slug: 'your-global-journey-starts-here-study-explore-grow-belong',
    title:
      'Your Global Journey Starts Here: Right Guidance, Real Opportunities, A Brighter You',
    publishedAt: '2026-09-22',
    displayDate: '22 September 2026',
    category: 'Admissions Alert',
    posterBadge: 'GLOBAL HIGHER EDUCATION PATHWAYS',
    posterHeadline: 'Your Global Journey Starts Here — Study | Explore | Grow | Belong',
    posterSubheadline:
      'Right Guidance. Real Opportunities. A Brighter You — UK, Europe, USA, Canada & Australia',
    posterStats: [
      { label: 'Core Focus', value: 'UK & Global Universities' },
      { label: 'Counselling', value: '1-on-1 Personalised' },
      { label: 'Transparency', value: '100% Ethical Process' },
    ],
    image: '/images/fb-posts/fb-post-6.jpg',
    captionLead:
      'Your Global Journey Starts Here. Right guidance. Real opportunities. A brighter you.',
    captionBody: [
      'Study | Explore | Grow | Belong. Choosing where and what to study abroad is one of the most important milestones of your academic life.',
      'With transparent guidance and verified university partnerships across the United Kingdom, Europe, Canada, Australia, and the USA, Sage Roots International empowers ambitious students to transition smoothly into world-class institutions.',
    ],
    keyHighlights: [
      'Comprehensive profile evaluation based on your grades, budget, and career ambition',
      'Honest advice on tuition fees, living costs, and scholarship eligibility',
      'Step-by-step documentation verification to ensure visa compliance',
      'Dedicated student community and ongoing onshore mentorship',
    ],
    seoKeywords: [
      'Global Study Abroad Journey',
      'Sage Roots International Study Abroad',
      'UK and Europe Higher Education',
      'International Student Guidance',
      'Study Explore Grow Belong',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122187634802685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-7',
    slug: 'bpp-university-second-masters-in-uk-psw-ending-tuition-fee-reduced',
    title:
      'Is Your PSW Going to End Soon? BPP University Reduces Tuition Fee to £12,500 for 2nd Master’s Inside the UK',
    publishedAt: '2026-09-18',
    displayDate: '18 September 2026',
    category: 'Scholarship Notice',
    posterBadge: 'ONSHORE UK STUDENT ALERT — BPP UNIVERSITY',
    posterHeadline: 'PSW Ending Soon? Looking for a Second Master’s Inside the UK?',
    posterSubheadline:
      'BPP University Tuition Fee Decreased: £12,500 Total Fee | £3,000 CAS Deposit | Offer in 2 Days',
    posterStats: [
      { label: 'Total Tuition Fee', value: '£12,500 (18 Months)' },
      { label: 'CAS Deposit', value: '£3,000 Only' },
      { label: 'CAS Turnaround', value: 'No Interview / 10 Days' },
    ],
    image: '/images/fb-posts/fb-post-7.jpg',
    captionLead:
      'Is your PSW (Graduate Route visa) going to end soon? Are you looking for a second Master’s inside the UK? Great news for onshore international students!',
    captionBody: [
      'BPP University has decreased the tuition fee for 2nd Master’s applications submitted inside the UK. Students can now enrol on an 18-month career-focused Master’s programme granting a 22-month Student visa extension.',
      'With a reduced total tuition fee of £12,500 and a CAS deposit of only £3,000, eligible onshore students receive their Offer Letter within 2 working days and their CAS within 10 working days — with no CAS interview required.',
    ],
    keyHighlights: [
      '18-Month Master’s Course granting a 22-Month UK Student Visa',
      'Total Tuition Fee reduced to £12,500 with flexible instalment plan',
      'Low CAS Deposit of £3,000 only',
      'No CAS Interview required — Offer Letter in 2 Days & CAS issued in 10 Days',
    ],
    relatedUniversitySlug: 'bpp-university',
    relatedUniversityName: 'BPP University',
    seoKeywords: [
      'BPP University Second Masters UK',
      'PSW Ending Soon UK Student Visa Extension',
      'BPP University Tuition Fee 12500',
      '3000 GBP CAS Deposit UK University',
      'Onshore UK University Admission London',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122187347360685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-8',
    slug: 'uk-visa-approved-mariya-afroj-bsc-nursing-bpp-university-8000-scholarship',
    title:
      'UK Visa Approved: Congratulations to Mariya Afroj — BSc (Hons) Nursing at BPP University with £8,000/Year Scholarship',
    publishedAt: '2026-09-15',
    displayDate: '15 September 2026',
    category: 'Visa Grant Update',
    posterBadge: 'VERIFIED UK STUDENT VISA APPROVAL',
    posterHeadline: 'UK Visa Approved — Congratulations to Mariya Afroj!',
    posterSubheadline:
      'BSc (Hons) Nursing (Adult) at BPP University, Leeds Campus | £8,000 Per Year Scholarship Awarded',
    posterStats: [
      { label: 'University', value: 'BPP University (Leeds)' },
      { label: 'Programme', value: 'BSc (Hons) Nursing' },
      { label: 'Scholarship', value: '£8,000 Per Year' },
    ],
    image: '/images/fb-posts/fb-post-8.jpg',
    captionLead:
      'UK Visa Approved! Congratulations to Mariya Afroj on her successful UK Student Visa for the September 2026 intake!',
    captionBody: [
      'Mariya Afroj has been admitted to the 3-year full-time BSc (Hons) Nursing (Adult) programme at BPP University, Leeds Campus (Start Date: 14 September 2026).',
      'Even more impressively, she secured a massive £8,000 per year scholarship (£24,000 total tuition reduction across 3 years) with the complete application, interview, and visa filing support of Sage Roots International. We wish her a rewarding healthcare career in the UK!',
    ],
    keyHighlights: [
      'Student Name: Mariya Afroj — Verified UK Student Route Visa Grant',
      'Programme: BSc (Hons) Nursing (Adult), 3 Years Full-Time',
      'Institution: BPP University, Leeds Campus',
      'Scholarship Awarded: £8,000 per year through Sage Roots International',
    ],
    relatedUniversitySlug: 'bpp-university',
    relatedUniversityName: 'BPP University',
    seoKeywords: [
      'UK Visa Approved Success Story',
      'BSc Nursing BPP University Leeds Scholarship',
      '8000 GBP Scholarship UK University',
      'Mariya Afroj UK Student Visa',
      'Sage Roots International Visa Success',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122187167246685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-9',
    slug: 'study-in-united-kingdom-with-a-life-changing-scholarship',
    title:
      'Study in the United Kingdom With a Life-Changing Scholarship: Full & Partial Tuition Bursaries',
    publishedAt: '2026-09-14',
    displayDate: '14 September 2026',
    category: 'Scholarship Notice',
    posterBadge: 'UK SCHOLARSHIP OPPORTUNITIES',
    posterHeadline: 'Study in United Kingdom With a Life-Changing Scholarship',
    posterSubheadline:
      'Full or Partial Tuition Fees | Visa & Travel Support | Pre-Departure Orientation',
    posterStats: [
      { label: 'Bursary Type', value: 'Merit & Regional Awards' },
      { label: 'Coverage', value: 'Partial to Full Tuition' },
      { label: 'Application Help', value: 'Free Scholarship Audit' },
    ],
    image: '/images/fb-posts/fb-post-9.jpg',
    captionLead:
      'Study in the United Kingdom with a life-changing scholarship! Ready to experience world-class British education, cultural diversity, and global career opportunities?',
    captionBody: [
      'UK universities and Commonwealth/Chevening fellowship bodies offer a wide spectrum of financial awards — ranging from automatic £2,000–£8,000 per year vice-chancellor merit bursaries to fully funded postgraduate scholarships.',
      'Our advisors at Sage Roots International match your academic transcript with the highest available university bursaries and ensure your scholarship discount is officially deducted on your CAS letter.',
    ],
    keyHighlights: [
      'Full or partial tuition fee reductions at accredited UK partner universities',
      'Guidance on Vice-Chancellor Merit, Early Payment, and Regional Scholarships',
      'Complete visa documentation and financial statement calculation after scholarship deduction',
      'Pre-departure orientation and UK arrival preparation',
    ],
    seoKeywords: [
      'Study in UK with Scholarship',
      'UK University Scholarships for International Students',
      'Partial and Full Scholarships UK',
      'Sage Roots International Scholarship Guide',
      'UK Tuition Fee Discount',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122187104714685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-10',
    slug: 'study-in-ulster-university-january-2027-intake-tuition-10625',
    title:
      'Study in Ulster University (Jan 2027 Intake): Tuition Fee £10,625 GBP, CAS Deposit £6,500 & 5-Year Gap Accepted',
    publishedAt: '2026-09-09',
    displayDate: '9 September 2026',
    category: 'Admissions Alert',
    posterBadge: 'ULSTER UNIVERSITY — JAN 2027 INTAKE',
    posterHeadline: 'Study in Ulster University — January 2027 Intake Open',
    posterSubheadline:
      'Tuition Fee: £10,625 GBP | CAS Deposit: £6,500 GBP | Study Gap Accepted Up to 5 Years',
    posterStats: [
      { label: 'Net Tuition Fee', value: '£10,625 GBP' },
      { label: 'CAS Deposit', value: '£6,500 GBP' },
      { label: 'Study Gap Policy', value: 'Up to 5 Years Accepted' },
    ],
    image: '/images/fb-posts/fb-post-10.jpg',
    captionLead:
      'Study in Ulster University for the January 2027 Intake! Secure a prestigious British degree at one of the most affordable tuition rates in the United Kingdom.',
    captionBody: [
      'Ulster University is accepting applications for the January 2027 intake with an exceptionally competitive net tuition fee of £10,625 GBP and a CAS deposit of £6,500 GBP.',
      'Furthermore, applicants with a documented study gap of up to 5 years are eligible to apply. Contact Sage Roots International today to check your course options across Ulster’s Belfast, Derry-Londonderry, Londonderry, London, and Birmingham campuses.',
    ],
    keyHighlights: [
      'Highly Affordable Net Tuition Fee: £10,625 GBP',
      'CAS Deposit Requirement: £6,500 GBP',
      'Study Gap Accepted: Up to 5 Years with proper academic/professional justification',
      'Fast Offer Letter & Pre-CAS Interview preparation via Sage Roots International',
    ],
    relatedUniversitySlug: 'ulster-university',
    relatedUniversityName: 'Ulster University',
    seoKeywords: [
      'Study in Ulster University January 2027',
      'Ulster University Tuition Fee 10625 GBP',
      'Low Tuition Fee University in UK',
      '5 Years Study Gap Accepted UK University',
      'Ulster University Admission Bangladesh',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122186770490685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-11',
    slug: 'study-in-the-uk-january-2027-intake-ielts-5-5-business-management-law',
    title:
      'Study in the UK (January 2027 Intake Open): IELTS 5.5 Overall Accepted for Business, Management & Law',
    publishedAt: '2026-09-06',
    displayDate: '6 September 2026',
    category: 'No-IELTS / MOI Pathway',
    posterBadge: 'IELTS 5.5 OVERALL PATHWAY',
    posterHeadline: 'Study in the UK — January 2027 Intake Open (IELTS 5.5 Overall)',
    posterSubheadline:
      'Programmes Available in Business, Management & Law | Clear Admission & Visa Plan',
    posterStats: [
      { label: 'IELTS Requirement', value: '5.5 Overall Accepted' },
      { label: 'Key Faculties', value: 'Business, Mgmt & Law' },
      { label: 'Target Intake', value: 'January 2027' },
    ],
    image: '/images/fb-posts/fb-post-11.jpg',
    captionLead:
      'Your Dream. Your Future. Your Global Journey. January 2027 Intake is now open for studying in the UK with IELTS 5.5 overall entry options!',
    captionBody: [
      'Did you score 5.5 overall in IELTS and worry that you might miss the upcoming intake? Selected UK universities offer direct and integrated degree pathways in Business, Management, and Law for students holding IELTS 5.5 overall.',
      'At Sage Roots International, we help you take the right steps with proper guidance and a clear plan — matching your score to compliant UKVI degree routes without wasting a semester.',
    ],
    keyHighlights: [
      'IELTS 5.5 Overall accepted on selected Business, Management, and Law pathways',
      'January 2027 Intake applications currently open for priority review',
      'Alternative internal English test and MOI options also available for eligible profiles',
      'Complete Pre-CAS interview coaching and visa documentation support',
    ],
    seoKeywords: [
      'Study in UK with IELTS 5.5',
      'IELTS 5.5 Accepted Universities in UK',
      'January 2027 Intake Business Management Law UK',
      'Sage Roots International IELTS 5.5',
      'UK Admission with Low IELTS Score',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122186563772685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-12',
    slug: 'build-your-career-in-the-uk-care-and-support-work-opportunities',
    title:
      'Build Your Career in the UK: Care & Support Work Opportunities with Free Training for International Students',
    publishedAt: '2026-09-03',
    displayDate: '3 September 2026',
    category: 'Career & Student Support',
    posterBadge: 'UK CARE & SUPPORT WORK TRAINING',
    posterHeadline: 'Build Your Career in the UK — Care & Support Work Opportunities',
    posterSubheadline:
      'Free Training & Qualifications | International Students & Valid UK Right to Work Holders',
    posterStats: [
      { label: 'Training Cost', value: '100% Free Training' },
      { label: 'Sector', value: 'UK Care & Support' },
      { label: 'Support', value: 'CV + Interview Prep' },
    ],
    image: '/images/fb-posts/fb-post-12.jpg',
    captionLead:
      'Looking to start or develop your career in the UK Care & Support sector? Join a rewarding profession where your work truly makes a difference.',
    captionBody: [
      'We are looking for motivated, caring, and reliable individuals in the UK — including international students and graduates holding valid UK Right to Work — who want to build practical experience in health and social care.',
      'Sage Roots International provides free care training and qualifications, UK-standard CV preparation, interview coaching, and ongoing career guidance from our Stratford, London office.',
    ],
    keyHighlights: [
      'Free Care & Support Training and accredited UK certificates',
      'Open to International Students in the UK with valid Right to Work permissions',
      'Personalised UK CV preparation and employer interview coaching',
      'Contact our London desk at +44 7776 181483 to register for the next training batch',
    ],
    seoKeywords: [
      'Care and Support Work UK International Students',
      'Free Care Training London Students',
      'Part Time Care Jobs UK Right to Work',
      'Sage Roots International Career Support',
      'Student Jobs in London Health Care',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122186364146685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-13',
    slug: 'one-step-closer-to-leadership-100-percent-online-uk-mba',
    title:
      'One Step Closer to Leadership: Globally Recognised 100% Online MBA from Accredited UK Universities',
    publishedAt: '2026-08-18',
    displayDate: '18 August 2026',
    category: 'Admissions Alert',
    posterBadge: 'EXECUTIVE ONLINE MBA PATHWAY',
    posterHeadline: 'One Step Closer to Leadership — 100% Online MBA',
    posterSubheadline:
      '100% Online Flexible Learning | Globally Recognised British Degree | Career Growth Opportunities',
    posterStats: [
      { label: 'Study Mode', value: '100% Online Flexible' },
      { label: 'Qualification', value: 'British MBA Degree' },
      { label: 'Ideal For', value: 'Working Professionals' },
    ],
    image: '/images/fb-posts/fb-post-13.jpg',
    captionLead:
      'Your degree can be more than a qualification — it can be the first step toward executive leadership.',
    captionBody: [
      'For working professionals, entrepreneurs, and managers who wish to earn an accredited British Master of Business Administration without relocating or leaving their current job, our 100% Online MBA programmes offer complete flexibility.',
      'Earn the exact same globally recognised UK university degree certificate from anywhere in the world with modular payment options and dedicated academic support through Sage Roots International.',
    ],
    keyHighlights: [
      '100% Online Flexible Learning designed around your full-time career schedule',
      'Globally Recognised British MBA Degree from accredited UK institutions',
      'Accelerate your promotion into senior management and executive leadership roles',
      'Affordable tuition fees with flexible semester-by-semester instalments',
    ],
    seoKeywords: [
      'Online MBA UK University',
      'Flexible Online British MBA',
      'Executive MBA for Working Professionals',
      'Sage Roots International Online Degree',
      'Globally Recognised Online MBA',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122185261352685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-14',
    slug: 'step-by-step-guide-to-studying-abroad-sage-roots-international',
    title:
      'Step-by-Step Guide to Studying Abroad: From Free Counselling to UK Accommodation & Student Life',
    publishedAt: '2026-08-16',
    displayDate: '16 August 2026',
    category: 'Admissions Alert',
    posterBadge: '5-STEP STUDY ABROAD ROADMAP',
    posterHeadline: 'Step-by-Step Guide to Studying Abroad with Sage Roots International',
    posterSubheadline:
      'Step 1: Free Counselling | Step 2: University Application | Step 3: Visa Filing | Step 4: Pre-Departure | Step 5: Accommodation',
    posterStats: [
      { label: 'Process Stages', value: '5 Structured Steps' },
      { label: 'Counselling Fee', value: '£0 Complimentary' },
      { label: 'Post-Arrival', value: 'UK Housing & Life' },
    ],
    image: '/images/fb-posts/fb-post-14.jpg',
    captionLead:
      'Some dreams begin with a quiet wish. Others begin with a decision to go farther. With the right guidance, that dream turns into a clear path forward.',
    captionBody: [
      'Studying abroad does not have to feel overwhelming when your journey is broken down into five transparent, well-managed milestones.',
      'From the very first counselling conversation and university shortlisting to visa documentation filing, pre-departure flight briefing, and settling into your UK student accommodation — Sage Roots International walks beside you at every step.',
    ],
    keyHighlights: [
      'Step 1: Free Counselling — Profile evaluation and career-aligned country/course selection',
      'Step 2: University Shortlisting & Application — SOP review and fast offer letter issuance',
      'Step 3: Visa Documentation & Filing — 28-day bank statement check, Pre-CAS prep, and UKVI submission',
      'Step 4 & Step 5: Pre-Departure Briefing, Flight Guidance, UK Accommodation & Student Life Support',
    ],
    seoKeywords: [
      'Step by Step Guide to Study in UK',
      'Study Abroad Process from Bangladesh',
      'Free UK Study Counselling',
      'UK Visa and Pre Departure Support',
      'Sage Roots International 5 Step Process',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122185147850685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-15',
    slug: 'study-in-uk-exclusive-pg-scholarships-up-to-3500-gbp',
    title:
      'Study in the UK With Scholarships Up to £3,500: Exclusive PG Bursaries at Top UK Universities',
    publishedAt: '2026-08-13',
    displayDate: '13 August 2026',
    category: 'Scholarship Notice',
    posterBadge: 'UP TO £3,500 UK SCHOLARSHIP',
    posterHeadline: 'Study in UK — Scholarships Up to £3,500 Available Now',
    posterSubheadline:
      'Exclusive PG Scholarships | Top UK Universities | Hassle-Free Admission & Visa Support',
    posterStats: [
      { label: 'Scholarship Value', value: 'Up to £3,500 GBP' },
      { label: 'Eligible Level', value: 'Postgraduate & UG' },
      { label: 'Processing', value: 'Hassle-Free Visa Desk' },
    ],
    image: '/images/fb-posts/fb-post-15.jpg',
    captionLead:
      'Study in the UK, unlock new opportunities, and build a future you will be proud of — with exclusive scholarships worth up to £3,500!',
    captionBody: [
      'Top British partner universities are currently awarding up to £3,500 in tuition fee scholarships for international students enrolling in Postgraduate and Undergraduate programmes.',
      'Apply through Sage Roots International for hassle-free admission processing, automatic scholarship application, and complete UKVI visa compliance support from our London office.',
    ],
    keyHighlights: [
      'Automatic and merit-based scholarships up to £3,500 GBP deducted directly on CAS',
      'Exclusive Postgraduate (Master’s) and Undergraduate scholarship allocations',
      'Direct admission into top-ranked UK universities inside and outside London',
      'Hassle-free end-to-end admission and UK Student Route visa support',
    ],
    seoKeywords: [
      '3500 GBP Scholarship UK University',
      'Exclusive PG Scholarships UK',
      'Study in UK Scholarship 2026 2027',
      'Top UK Universities Admission Support',
      'Sage Roots International Scholarships',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122184928946685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-16',
    slug: 'study-mba-in-uk-build-global-skills-lead-the-future',
    title:
      'Study MBA in the UK: Build Global Skills & Lead the Future at Top-Ranked British Universities',
    publishedAt: '2026-07-24',
    displayDate: '24 July 2026',
    category: 'Admissions Alert',
    posterBadge: 'UK MBA ADMISSIONS SPOTLIGHT',
    posterHeadline: 'Study MBA in UK — Build Global Skills. Lead the Future.',
    posterSubheadline:
      'Top Ranked UK Universities | Global Recognition | Career Growth Opportunities | 100% Support Every Step',
    posterStats: [
      { label: 'Programme', value: '1-Year & 2-Year UK MBA' },
      { label: 'Recognition', value: 'CMI / AMBA Accredited' },
      { label: 'Post-Study Work', value: '2-Year Graduate Visa' },
    ],
    image: '/images/fb-posts/fb-post-17.jpg',
    captionLead:
      'The future depends on what you do today. Study MBA in the UK to build global executive skills and lead the future.',
    captionBody: [
      'A British Master of Business Administration (MBA) equips ambitious graduates and professionals with strategic management training, live consultancy projects, and global employer recognition.',
      'Whether you require an MBA that accepts fresh graduates without mandatory managerial experience or an executive placement-year MBA in London, Sage Roots International provides 100% support at every step.',
    ],
    keyHighlights: [
      'Direct entry to Top Ranked UK Universities offering 1-year and 2-year placement MBAs',
      'Globally recognised qualifications with Chartered Management Institute (CMI) dual accreditation options',
      'MBA options available both with and without prior managerial work experience',
      '100% support at every step — from SOP and interview prep to UK visa approval',
    ],
    seoKeywords: [
      'Study MBA in UK',
      'Top Ranked UK Universities for MBA',
      'UK MBA Without Work Experience',
      'MBA in London for International Students',
      'Sage Roots International MBA Admission',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122183587922685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-17',
    slug: 'study-in-the-uk-cas-deposit-from-5900-tuition-from-11200-ielts-waiver',
    title:
      'Study in the UK — Turn Your Dreams Into Reality: Tuition Fee From £11,200, CAS Deposit From £5,900 & IELTS Waiver',
    publishedAt: '2026-07-22',
    displayDate: '22 July 2026',
    category: 'No-IELTS / MOI Pathway',
    posterBadge: 'AFFORDABLE UK ADMISSION PATHWAY',
    posterHeadline: 'Study in the UK — Turn Your Dreams Into Reality',
    posterSubheadline:
      'Tuition Fee From £11,200 | CAS Deposit From £5,900 | IELTS Waiver Available | 60% or 3.0 GPA Eligible',
    posterStats: [
      { label: 'Tuition Fee From', value: '£11,200 / Year' },
      { label: 'CAS Deposit From', value: '£5,900 GBP' },
      { label: 'Minimum Grade', value: '60% Marks or 3.0 GPA' },
    ],
    image: '/images/fb-posts/fb-post-16.jpg',
    captionLead:
      'Invest in your future — education always pays the best interest. Turn your UK study dreams into reality with flexible academic entry and affordable fees!',
    captionBody: [
      'Students worried about high upfront costs or lower GPA scores can now apply to respected UK universities with annual tuition fees starting from £11,200 and initial CAS deposits starting from £5,900.',
      'IELTS waivers (via MOI or internal English assessment) are available, study gaps are accepted, and applications are welcomed from students holding 60% marks or a 3.0 GPA.',
    ],
    keyHighlights: [
      'Affordable Tuition Fee starting from £11,200 GBP per year',
      'Low initial CAS Deposit starting from £5,900 GBP',
      'IELTS Waiver Available for eligible English-medium and strong HSC/Bachelor profiles',
      'Applications accepted with lower GPA (eligible with 60% or 3.0 GPA) and study gaps accepted',
    ],
    seoKeywords: [
      'Tuition Fee From 11200 UK University',
      'CAS Deposit 5900 GBP UK',
      'Study in UK with 3.0 GPA or 60 Percent',
      'IELTS Waiver UK University Admission',
      'Low Cost UK Universities for Bangladeshi Students',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122183448200685159&set=pb.61570554791003.-2207520000',
  },
  {
    id: 'sri-fb-18',
    slug: 'refer-a-friend-and-win-a-brand-new-free-laptop-sage-roots-international',
    title:
      'বন্ধুকে Refer করুন, Brand New Laptop ফ্রি পান! সেরা ইউনিভার্সিটিতে ভর্তির সাপোর্ট নিন',
    publishedAt: '2026-07-18',
    displayDate: '18 July 2026',
    category: 'Career & Student Support',
    posterBadge: 'STUDENT REFERRAL REWARD CAMPAIGN',
    posterHeadline: 'বন্ধুকে Refer করুন, ল্যাপটপ ফ্রি পান — 100% Free Brand New Laptop!',
    posterSubheadline:
      '১ জন ফ্রেন্ড Refer করুন এবং সফল ভর্তি ও ভিসা শেষে জিতে নিন Brand New Laptop উপহার',
    posterStats: [
      { label: 'Referral Target', value: '1 Successful Student' },
      { label: 'Guaranteed Gift', value: 'Brand New Laptop' },
      { label: 'Service Charge', value: '£0 Free Application' },
    ],
    image: '/images/fb-posts/fb-post-18.jpg',
    captionLead:
      'বন্ধুকে Refer করুন, Laptop জিতে নিন! আপনার কোনো বন্ধু কি বিদেশে পড়াশোনা করার স্বপ্ন দেখছে? তাহলে এখনই তাকে Sage Roots International-এ রেফার করুন!',
    captionBody: [
      'আপনার রেফারে যদি আপনার বন্ধু বা পরিচিত কেউ সফলভাবে UK-এর সেরা ইউনিভার্সিটিতে ভর্তি ও ভিসা সম্পন্ন করে, তাহলে আপনার জন্য থাকছে ১০০% ফ্রি একটি Brand New Laptop জেতার দারুণ সুযোগ!',
      'দেরি না করে আজই আপনার বন্ধুকে রেফার করুন এবং আমাদের লন্ডন অফিসের (44 Broadway, Stratford, London) অভিজ্ঞ টিমের মাধ্যমে সম্পূর্ণ ফ্রি অ্যাপ্লিকেশন ও ভিসা প্রসেসিং সাপোর্ট গ্রহণ করুন। শর্ত প্রযোজ্য।',
    ],
    keyHighlights: [
      '১ জন বন্ধুকে Refer করলেই সফল ভর্তি ও ভিসা শেষে থাকছে Brand New Laptop ফ্রি',
      'যুক্তরাজ্যের শীর্ষস্থানীয় ইউনিভার্সিটিতে স্কলারশিপসহ দ্রুত অফার লেটার ও CAS প্রসেসিং',
      'অভিজ্ঞ লন্ডন টিমের তত্ত্বাবধানে ফ্রি প্রোফাইল অ্যাসেসমেন্ট ও ভিসা গাইডলাইন',
      'বিস্তারিত জানতে যোগাযোগ করুন WhatsApp: +44 7776 181483',
    ],
    seoKeywords: [
      'Refer a Friend Win Free Laptop Study Abroad',
      'Sage Roots International Referral Offer',
      'UK Study Abroad Offer Bangladesh',
      'Free Laptop Student Referral UK Admission',
      'Sage Roots International Stratford London',
    ],
    facebookUrl:
      'https://www.facebook.com/photo.php?fbid=122183170970685159&set=pb.61570554791003.-2207520000',
  },
]
