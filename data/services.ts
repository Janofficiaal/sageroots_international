export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Free Profile Counselling',
    description: 'Personalised assessment of your academic background, career goals, and study gap.',
    icon: 'UserCheck',
  },
  {
    id: '2',
    title: 'University Application Guidance',
    description: 'Fast-track direct submission to 50+ UK partner universities with priority offer tracking.',
    icon: 'GraduationCap',
  },
  {
    id: '3',
    title: 'Scholarship Maximization',
    description: 'Securing automatic bursaries, early-bird discounts, and Vice-Chancellor merit awards.',
    icon: 'Award',
  },
  {
    id: '4',
    title: 'Pre-CAS Mock Interview Prep',
    description: '1-on-1 mock credibility interviews to ensure 100% confidence before CAS issuance.',
    icon: 'FileText',
  },
  {
    id: '5',
    title: 'SOP & CV Architecture',
    description: 'Expert crafting and review of your Statement of Purpose, academic CV, and references.',
    icon: 'PenLine',
  },
  {
    id: '6',
    title: 'UK Student Accommodation',
    description: 'Guaranteed assistance booking university halls or verified private student housing.',
    icon: 'Home',
  },
  {
    id: '7',
    title: 'UKVI Visa & Bank Compliance',
    description: '28-day bank statement auditing, IHS calculation, TB test & error-free VFS visa filing.',
    icon: 'Plane',
  },
  {
    id: '8',
    title: 'Post-Arrival & Career Support',
    description: 'Guidance on UK eVisa share codes, NI number, bank account, and 20hr/week student jobs.',
    icon: 'Briefcase',
  },
]

export const subjects = [
  {
    id: '1',
    name: 'Computer Science & IT',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
    slug: 'computer-science',
  },
  {
    id: '2',
    name: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    slug: 'business',
  },
  {
    id: '3',
    name: 'Engineering & Technology',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    slug: 'engineering',
  },
  {
    id: '4',
    name: 'Health Sciences',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
    slug: 'health-sciences',
  },
  {
    id: '5',
    name: 'Law & Humanities',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
    slug: 'law',
  },
  {
    id: '6',
    name: 'Foundation Pathways',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
    slug: 'foundation',
  },
]

export interface Testimonial {
  id: string
  caseId: string
  name: string
  initials: string
  origin: string
  university: string
  course: string
  academicProfile: string
  englishPathway: string
  scholarship: string
  visaTurnaround: string
  intake: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    caseId: 'SRI-UK-2025-104',
    name: 'Tahmid Hasan Chowdhury',
    initials: 'TH',
    origin: 'Dhaka, Bangladesh',
    university: 'University of Greenwich (London)',
    course: 'MSc International Business',
    academicProfile: 'BBA CGPA 3.18 | 2 Years Work Gap',
    englishPathway: 'MOI Certificate (No IELTS)',
    scholarship: '£3,000 Automatic Bursary',
    visaTurnaround: 'Approved in 10 Working Days',
    intake: 'September Intake',
    quote:
      'Sage Roots International handled my entire UK admission and visa journey seamlessly. Their mock Pre-CAS interview sessions gave me full confidence, and my visa was granted without any additional UKVI query.',
  },
  {
    id: '2',
    caseId: 'SRI-UK-2025-119',
    name: 'Nusrat Jahan Mim',
    initials: 'NJ',
    origin: 'Sylhet, Bangladesh',
    university: 'The University of Manchester',
    course: 'MSc Data Science & Artificial Intelligence',
    academicProfile: 'BSc CSE CGPA 3.62 | No Study Gap',
    englishPathway: 'IELTS Overall 6.5 (No Band < 6.0)',
    scholarship: '£5,000 Global Merit Award',
    visaTurnaround: 'Approved in 8 Working Days',
    intake: 'September Intake',
    quote:
      'From SOP editing to 28-day bank statement compliance, the counselors were extraordinarily thorough. They helped me secure a £5,000 merit scholarship at my target Russell Group university.',
  },
  {
    id: '3',
    caseId: 'SRI-UK-2026-014',
    name: 'Farhan Sadiq Rahman',
    initials: 'FS',
    origin: 'Chattogram, Bangladesh',
    university: "Queen's University Belfast",
    course: 'BEng (Hons) Software Engineering',
    academicProfile: 'HSC GPA 4.83 | 1 Year Study Gap',
    englishPathway: 'IELTS Overall 6.0',
    scholarship: '£3,500 International Award',
    visaTurnaround: 'Approved in 12 Working Days',
    intake: 'January Intake',
    quote:
      'I wanted a Russell Group university in an affordable UK city. Sage Roots recommended Queen’s University Belfast, audited my parents’ bank sponsorship documents, and made the entire process stress-free.',
  },
  {
    id: '4',
    caseId: 'SRI-UK-2026-028',
    name: 'Sadia Afrin Tisha',
    initials: 'SA',
    origin: 'Dhaka, Bangladesh',
    university: 'University of Portsmouth',
    course: 'MSc Cyber Security & Forensic IT',
    academicProfile: 'BSc IT CGPA 2.95 | 3 Years Work Experience',
    englishPathway: 'MOI + University Pre-CAS Interview',
    scholarship: '£2,000 Merit Fee Discount',
    visaTurnaround: 'Approved in 11 Working Days',
    intake: 'January Intake',
    quote:
      'Even with a 2.95 CGPA and a 3-year gap, I received my Unconditional Offer using my MOI and work experience letters, and cleared the Portsmouth credibility interview on my first attempt.',
  },
  {
    id: '5',
    caseId: 'SRI-UK-2026-041',
    name: 'Mahmudul Islam Rafi',
    initials: 'MI',
    origin: 'Rajshahi, Bangladesh',
    university: 'Coventry University (London Campus)',
    course: 'MBA Global Business',
    academicProfile: 'BBA CGPA 3.08 | 4 Years Banking Experience',
    englishPathway: 'University Internal English Test',
    scholarship: '£2,500 Vice-Chancellor Bursary',
    visaTurnaround: 'Approved in 9 Working Days',
    intake: 'May Intake',
    quote:
      'Zero hidden charges and 100% transparent advice. After clearing the Coventry internal English test, my CAS arrived within 4 days of deposit payment, and their UK desk helped me arrange London housing.',
  },
  {
    id: '6',
    caseId: 'SRI-UK-2025-152',
    name: 'Anika Tabassum',
    initials: 'AT',
    origin: 'Khulna, Bangladesh',
    university: 'University of Hertfordshire',
    course: 'MSc International Finance (With Placement)',
    academicProfile: 'BBA Finance CGPA 3.34 | 1 Year Gap',
    englishPathway: 'PTE Academic 61',
    scholarship: '£2,000 Early Payment Discount',
    visaTurnaround: 'Approved in 13 Working Days',
    intake: 'September Intake',
    quote:
      'Their guidance on selecting a 2-year Master’s with an industrial placement year and preparing my OANDA bank calculation made all the difference for my UK visa approval.',
  },
]
