export interface University {
  id: string
  slug: string
  name: string
  city: string
  country: string
  countryCode: string
  image: string
  logo?: string
  studyLevels: string[]
  subjects: string[]
  intakes: string[]
  tuitionFeeNote: string
  scholarshipNote: string
  overview: string
  entryRequirements: string
  englishRequirements: string
  applicationNote: string
  website: string
  featured: boolean
}

export const universities: University[] = [
  {
    "id": "1",
    "slug": "abertay-university",
    "name": "Abertay University",
    "city": "Dundee, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Computer Games Technology",
      "Cyber Security",
      "Business Management",
      "Food Science",
      "Psychology",
      "Civil Engineering"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £16,500 per year.",
    "scholarshipNote": "International Merit Scholarship up to £3,000 per year.",
    "overview": "Abertay University is a globally recognized UK university located in Dundee, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.abertay.ac.uk",
    "featured": false
  },
  {
    "id": "2",
    "slug": "aberystwyth-university",
    "name": "Aberystwyth University",
    "city": "Aberystwyth, Wales",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Politics",
      "Computer Science",
      "Agriculture & Environmental Science",
      "Business & Finance",
      "Law",
      "Psychology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £18,800 per year.",
    "scholarshipNote": "International Accommodation & Merit Award up to £2,000 - £4,000.",
    "overview": "Aberystwyth University is a globally recognized UK university located in Aberystwyth, Wales, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.aber.ac.uk",
    "featured": false
  },
  {
    "id": "3",
    "slug": "anglia-ruskin-university",
    "name": "Anglia Ruskin University (ARU)",
    "city": "Cambridge & Chelmsford",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business Administration (MBA)",
      "Data Science",
      "Medicine & Healthcare",
      "Civil Engineering",
      "Law",
      "Optometry"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £17,200 per year.",
    "scholarshipNote": "International Early Payment Discount and Merit Scholarships up to £4,000.",
    "overview": "Named Times Higher Education University of the Year 2023, ARU has modern campuses in Cambridge and Chelmsford, focusing on career-ready practical training and enterprise.",
    "entryRequirements": "A-Levels / HSC (55%+); recognized Bachelor's degree with 50%+ for master's admission.",
    "englishRequirements": "IELTS 6.0 overall with no band lower than 5.5, or accepted MOI / internal test.",
    "applicationNote": "Multiple start dates across the year with extensive international student support.",
    "website": "https://www.aru.ac.uk",
    "featured": false
  },
  {
    "id": "4",
    "slug": "arts-university-bournemouth",
    "name": "Arts University Bournemouth (AUB)",
    "city": "Poole & Bournemouth",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Film Production",
      "Animation & Visual Effects",
      "Graphic Design",
      "Architecture",
      "Fashion & Textiles",
      "Interior Design"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£17,950 - £19,950 per year.",
    "scholarshipNote": "Vice-Chancellor International Scholarship up to £3,000.",
    "overview": "Arts University Bournemouth (AUB) is a globally recognized UK university located in Poole & Bournemouth, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://aub.ac.uk",
    "featured": false
  },
  {
    "id": "5",
    "slug": "arts-university-plymouth",
    "name": "Arts University Plymouth",
    "city": "Plymouth",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Fine Art",
      "Digital Media & Games",
      "Fashion Design",
      "Photography",
      "Graphic Communication",
      "Interior Design"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,000 per year.",
    "scholarshipNote": "International Creative Talent Scholarship up to £2,500.",
    "overview": "Arts University Plymouth is a globally recognized UK university located in Plymouth, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.aup.ac.uk",
    "featured": false
  },
  {
    "id": "6",
    "slug": "aston-university",
    "name": "Aston University",
    "city": "Birmingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & MBA",
      "Computer Science & AI",
      "Pharmacy & Optometry",
      "Mechanical Engineering",
      "Supply Chain Management",
      "Finance"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £21,500 per year.",
    "scholarshipNote": "Aston Global Advantage & Merit Scholarships up to £5,000.",
    "overview": "Aston University is a globally recognized UK university located in Birmingham, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.aston.ac.uk",
    "featured": false
  },
  {
    "id": "7",
    "slug": "bangor-university",
    "name": "Bangor University",
    "city": "Bangor",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Marine Sciences",
      "Business",
      "Psychology",
      "Engineering",
      "Natural Sciences",
      "Computer Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,000 - £18,500 per year.",
    "scholarshipNote": "Vice-Chancellor's Scholarship up to £5,000 for exceptional international students.",
    "overview": "Bangor University is a historic research university in North Wales, nestled between Snowdonia National Park and the Menai Strait, world-renowned for marine and environmental sciences.",
    "entryRequirements": "BBB to CCC at A-Level or Foundation; 50-55%+ in Bachelor's for master's programs.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5 in each component).",
    "applicationNote": "Ranked among the safest and most budget-friendly university towns in Britain.",
    "website": "https://www.bangor.ac.uk",
    "featured": false
  },
  {
    "id": "8",
    "slug": "bath-spa-university",
    "name": "Bath Spa University",
    "city": "Bath & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Management",
      "Creative Computing",
      "Media & Communications",
      "Education",
      "Design & Fine Art",
      "Marketing"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,500 per year.",
    "scholarshipNote": "International Excellence Scholarship up to £3,000.",
    "overview": "Bath Spa University is a globally recognized UK university located in Bath & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bathspa.ac.uk",
    "featured": false
  },
  {
    "id": "9",
    "slug": "birkbeck-university-of-london",
    "name": "Birkbeck, University of London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Data Science & Computing",
      "Management & Marketing",
      "Law (LLB / LLM)",
      "Financial Economics",
      "Psychological Sciences",
      "International Relations"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £20,500 per year.",
    "scholarshipNote": "Global Future & South Asia Scholarships up to £4,000.",
    "overview": "Birkbeck, University of London is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bbk.ac.uk",
    "featured": false
  },
  {
    "id": "10",
    "slug": "birmingham-city-university",
    "name": "Birmingham City University (BCU)",
    "city": "Birmingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business Administration (MBA)",
      "Computer Science & Cyber Security",
      "Engineering",
      "Nursing & Public Health",
      "Law",
      "Media & Design"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,000 - £17,700 per year.",
    "scholarshipNote": "Automatic International Merit Discount up to £2,000 - £3,000.",
    "overview": "Birmingham City University (BCU) is a globally recognized UK university located in Birmingham, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bcu.ac.uk",
    "featured": false
  },
  {
    "id": "11",
    "slug": "birmingham-newman-university",
    "name": "Birmingham Newman University",
    "city": "Birmingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business Management",
      "Computing & IT",
      "Education & Teaching",
      "Psychology & Counselling",
      "Health & Social Care",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,000 per year.",
    "scholarshipNote": "International Bursary up to £2,500 off first-year tuition.",
    "overview": "Birmingham Newman University is a globally recognized UK university located in Birmingham, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.newman.ac.uk",
    "featured": false
  },
  {
    "id": "12",
    "slug": "bishop-grosseteste-university",
    "name": "Bishop Grosseteste University (BGU)",
    "city": "Lincoln",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Education & TESOL",
      "Business & Leadership",
      "Psychology",
      "Health & Social Care",
      "Special Educational Needs",
      "English Literature"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,250 - £15,500 per year.",
    "scholarshipNote": "International Welcome Scholarship up to £2,000.",
    "overview": "Bishop Grosseteste University (BGU) is a globally recognized UK university located in Lincoln, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bgu.ac.uk",
    "featured": false
  },
  {
    "id": "13",
    "slug": "bournemouth-university",
    "name": "Bournemouth University",
    "city": "Bournemouth",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Tourism & Hospitality Management",
      "Computer Animation & Media",
      "Cyber Security",
      "Business & Marketing",
      "Public Health",
      "Data Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £18,800 per year.",
    "scholarshipNote": "Academic Excellence Scholarship up to £3,500.",
    "overview": "Bournemouth University is a globally recognized UK university located in Bournemouth, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bournemouth.ac.uk",
    "featured": false
  },
  {
    "id": "14",
    "slug": "bpp-university",
    "name": "BPP University",
    "city": "London & Manchester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate"
    ],
    "subjects": [
      "Law (SQE & LPC)",
      "ACCA / Accounting & Finance",
      "Healthcare & Nursing",
      "Data & Technology",
      "Management"
    ],
    "intakes": [
      "January 2025",
      "May 2025",
      "September 2025",
      "January 2026",
      "May 2026"
    ],
    "tuitionFeeNote": "£14,000 - £16,500 per year.",
    "scholarshipNote": "Dean of BPP School of Business / Law Scholarships available for outstanding students.",
    "overview": "BPP University is a premier specialist institution in the UK focusing on professional credentials in Law, Accounting, Technology, and Healthcare, training top legal and financial firms.",
    "entryRequirements": "Recognized secondary certificate or bachelor's degree with 50%+; work experience considered.",
    "englishRequirements": "IELTS 6.0 - 6.5 depending on programme.",
    "applicationNote": "Direct pathways into UK professional qualifications in Law (SQE) and Accounting (ACCA).",
    "website": "https://www.bpp.com",
    "featured": false
  },
  {
    "id": "15",
    "slug": "brunel-university-london",
    "name": "Brunel University London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Brunel Business School",
      "Engineering & Design",
      "Computer Science",
      "Law",
      "Biomedical Sciences",
      "Public Health"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,400 - £23,600 per year.",
    "scholarshipNote": "Brunel International Excellence Scholarship offering £6,000 fee reduction.",
    "overview": "Named after the legendary engineer Isambard Kingdom Brunel, this single-campus London university in Uxbridge offers world-leading engineering, design, and business programs.",
    "entryRequirements": "AAB to BBB at A-Level; Bachelor's degree with 55-60%+ for PG.",
    "englishRequirements": "IELTS 6.0 - 6.5 with at least 5.5 in each component.",
    "applicationNote": "All accommodation, teaching facilities, and sports complexes are situated on one self-contained campus.",
    "website": "https://www.brunel.ac.uk",
    "featured": true
  },
  {
    "id": "16",
    "slug": "buckinghamshire-new-university",
    "name": "Buckinghamshire New University (BNU)",
    "city": "High Wycombe & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Aviation & Airport Management",
      "Business & MBA",
      "Cyber Security & Computing",
      "Nursing & Healthcare",
      "Art & Design",
      "Supply Chain"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £16,800 per year.",
    "scholarshipNote": "Vice-Chancellor International Student Scholarship up to £3,000.",
    "overview": "Buckinghamshire New University (BNU) is a globally recognized UK university located in High Wycombe & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bucks.ac.uk",
    "featured": false
  },
  {
    "id": "17",
    "slug": "canterbury-christ-church-university",
    "name": "Canterbury Christ Church University",
    "city": "Canterbury, Kent",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business",
      "Public Health & Nursing",
      "Computer Science",
      "Tourism & Event Management",
      "Law",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £16,800 per year.",
    "scholarshipNote": "International Student Bursary up to £2,500.",
    "overview": "Canterbury Christ Church University is a globally recognized UK university located in Canterbury, Kent, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.canterbury.ac.uk",
    "featured": false
  },
  {
    "id": "18",
    "slug": "cardiff-metropolitan-university",
    "name": "Cardiff Metropolitan University",
    "city": "Cardiff, Wales",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MBA & Business Management",
      "Data Science & Software Engineering",
      "Public Health",
      "Hospitality & Tourism",
      "Sport Management",
      "Food Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,000 per year.",
    "scholarshipNote": "Global Academics Scholarship up to £2,500 - £3,500.",
    "overview": "Cardiff Metropolitan University is a globally recognized UK university located in Cardiff, Wales, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.cardiffmet.ac.uk",
    "featured": false
  },
  {
    "id": "19",
    "slug": "cardiff-university",
    "name": "Cardiff University",
    "city": "Cardiff",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Cardiff Business School",
      "Journalism & Media (JOMEC)",
      "Architecture",
      "Civil Engineering",
      "Biosciences",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£19,500 - £27,000 per year.",
    "scholarshipNote": "Vice-Chancellor's International Scholarships up to £5,000.",
    "overview": "The only Russell Group university in Wales, Cardiff is recognized for high student satisfaction, affordable capital city living, and top-ranked journalism and architecture schools.",
    "entryRequirements": "AAB to BBB at A-Level or Foundation; recognized Bachelor's with 55-60%+.",
    "englishRequirements": "IELTS 6.5 overall with 5.5 - 6.0 in sub-skills.",
    "applicationNote": "Cardiff is one of the most affordable capital cities in Europe for students.",
    "website": "https://www.cardiff.ac.uk",
    "featured": true
  },
  {
    "id": "20",
    "slug": "city-university-of-london",
    "name": "City St George's, University of London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Finance & Actuarial Science",
      "Computer Science & AI",
      "Civil & Mechanical Engineering",
      "Law (City Law School)",
      "Journalism",
      "Health Sciences"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,500 - £25,500 per year.",
    "scholarshipNote": "Bayes & City International Merit Scholarships up to £5,000.",
    "overview": "City St George's, University of London is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.city.ac.uk",
    "featured": false
  },
  {
    "id": "21",
    "slug": "coventry-university",
    "name": "Coventry University",
    "city": "Coventry",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Automotive Engineering",
      "Business & Marketing",
      "Computing & AI",
      "Health Sciences",
      "Law",
      "Media & Communication"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,000 - £19,800 per year.",
    "scholarshipNote": "International Pathways Scholarship of up to £3,000.",
    "overview": "Awarded 5 Stars by QS for employability and facilities, Coventry University features modern campuses in Coventry and London with cutting-edge engineering simulation hubs.",
    "entryRequirements": "A-Levels or HSC (60%+); Bachelor's degree with 55%+ for Master's programs.",
    "englishRequirements": "IELTS 6.5 overall (minimum 5.5-6.0) or Coventry University internal English test.",
    "applicationNote": "Campuses available both in Coventry (West Midlands) and London Financial District.",
    "website": "https://www.coventry.ac.uk",
    "featured": true
  },
  {
    "id": "22",
    "slug": "cranfield-university",
    "name": "Cranfield University",
    "city": "Cranfield, Bedfordshire",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Aerospace & Aviation",
      "Logistics & Supply Chain Management",
      "Management (MBA)",
      "Renewable Energy",
      "Advanced Manufacturing",
      "Automotive Engineering"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,500 - £28,000 per year.",
    "scholarshipNote": "Cranfield Merit & Regional Scholarships up to £5,000 - £8,000.",
    "overview": "Cranfield University is a globally recognized UK university located in Cranfield, Bedfordshire, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.cranfield.ac.uk",
    "featured": false
  },
  {
    "id": "23",
    "slug": "de-montfort-university",
    "name": "De Montfort University (DMU)",
    "city": "Leicester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Art & Design",
      "Business & Management",
      "Software Engineering",
      "Pharmacy",
      "Law",
      "Fashion & Footwear"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,250 - £16,750 per year.",
    "scholarshipNote": "DMU International Scholarship of £1,500 for postgraduate candidates.",
    "overview": "De Montfort University in Leicester provides a vibrant campus community, recognized worldwide for design innovation, business incubator spaces, and sustainable development teaching.",
    "entryRequirements": "A-Levels or HSC (55-60%); Bachelor's with 50-55%+ for master's programs.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5 in all skills) or DMU internal English test.",
    "applicationNote": "Affordable living costs in Leicester, one of the UK's most multicultural student cities.",
    "website": "https://www.dmu.ac.uk",
    "featured": false
  },
  {
    "id": "24",
    "slug": "durham-university",
    "name": "Durham University",
    "city": "Durham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Finance",
      "Law",
      "Computer Science",
      "Engineering",
      "Earth Sciences",
      "Politics & International Relations"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£23,500 - £31,000 per year.",
    "scholarshipNote": "Inspiring Excellence Scholarships up to £5,000 - £10,000.",
    "overview": "Durham University is a globally recognized UK university located in Durham, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.durham.ac.uk",
    "featured": false
  },
  {
    "id": "25",
    "slug": "university-of-east-london",
    "name": "East London University (University of East London - UEL)",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MBA & Business",
      "Data Science & AI",
      "Civil Engineering",
      "Health & Social Care",
      "Psychology",
      "Architecture"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,500 per year.",
    "scholarshipNote": "International scholarship discounts of £1,000 - £2,500 available for early tuition deposits.",
    "overview": "With waterside campuses at Royal Docks and Stratford, UEL is a forward-looking university focused on career-readiness, diversity, and practical innovation.",
    "entryRequirements": "HSC/12th grade with 55%+ or Diploma; Bachelor's degree with 50%+ for Master's programmes.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5) or accepted LanguageCert / Oxford ELLT / PTE.",
    "applicationNote": "Offers September, January, and May intakes with on-campus riverside student accommodation.",
    "website": "https://www.uel.ac.uk",
    "featured": true
  },
  {
    "id": "26",
    "slug": "edge-hill-university",
    "name": "Edge Hill University",
    "city": "Ormskirk, Lancashire",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Computer Science & Computing",
      "Business & Management",
      "Public Health & Nursing",
      "Education",
      "Law & Criminology",
      "Biosciences"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £16,800 per year.",
    "scholarshipNote": "Automatic International Tuition Fee Discount up to £3,000.",
    "overview": "Edge Hill University is a globally recognized UK university located in Ormskirk, Lancashire, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.edgehill.ac.uk",
    "featured": false
  },
  {
    "id": "27",
    "slug": "edinburgh-napier-university",
    "name": "Edinburgh Napier University",
    "city": "Edinburgh, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Computing & Cyber Security",
      "International Business Management",
      "Civil & Transport Engineering",
      "Nursing & Healthcare",
      "Renewable Energy",
      "Accounting & Finance"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,200 - £18,500 per year.",
    "scholarshipNote": "South Asia Merit Scholarship up to £3,000.",
    "overview": "Edinburgh Napier University is a globally recognized UK university located in Edinburgh, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.napier.ac.uk",
    "featured": false
  },
  {
    "id": "28",
    "slug": "falmouth-university",
    "name": "Falmouth University",
    "city": "Falmouth, Cornwall",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Game Development & AI",
      "Film & Television",
      "Sustainable Fashion",
      "Graphic Design",
      "Architecture",
      "Creative Advertising"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£17,950 - £19,500 per year.",
    "scholarshipNote": "International Creative Talent Award up to £3,000.",
    "overview": "Falmouth University is a globally recognized UK university located in Falmouth, Cornwall, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.falmouth.ac.uk",
    "featured": false
  },
  {
    "id": "29",
    "slug": "glasgow-caledonian-university",
    "name": "Glasgow Caledonian University (GCU)",
    "city": "Glasgow & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business & Fashion",
      "Public Health",
      "Computing & Cyber Security",
      "Construction & Project Management",
      "Risk & Finance",
      "Electrical Engineering"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,200 - £17,500 per year.",
    "scholarshipNote": "New to GCU International Scholarship up to £2,500 - £4,000.",
    "overview": "Glasgow Caledonian University (GCU) is a globally recognized UK university located in Glasgow & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.gcu.ac.uk",
    "featured": false
  },
  {
    "id": "30",
    "slug": "goldsmiths-university-of-london",
    "name": "Goldsmiths, University of London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Media & Communications",
      "Computer Science & AI",
      "Design & Fine Art",
      "Psychology",
      "Management & Entrepreneurship",
      "Sociology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£17,500 - £22,500 per year.",
    "scholarshipNote": "Goldsmiths International Response Scholarship up to £4,000.",
    "overview": "Goldsmiths, University of London is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.gold.ac.uk",
    "featured": false
  },
  {
    "id": "31",
    "slug": "harper-adams-university",
    "name": "Harper Adams University",
    "city": "Newport, Shropshire",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Agricultural Sciences",
      "Agribusiness & Food Chain",
      "Robotics & Engineering",
      "Environmental Management",
      "Veterinary Biosciences",
      "Data Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,500 per year.",
    "scholarshipNote": "International Agri-Tech Scholarship up to £3,000.",
    "overview": "Harper Adams University is a globally recognized UK university located in Newport, Shropshire, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.harper-adams.ac.uk",
    "featured": false
  },
  {
    "id": "32",
    "slug": "hartpury-university",
    "name": "Hartpury University",
    "city": "Gloucester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Sports Business Management",
      "Animal & Equine Science",
      "Agriculture",
      "Strength & Conditioning",
      "Sports Coaching",
      "Biological Sciences"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £16,500 per year.",
    "scholarshipNote": "International Academic Vice-Chancellor Bursary up to £2,500.",
    "overview": "Hartpury University is a globally recognized UK university located in Gloucester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.hartpury.ac.uk",
    "featured": false
  },
  {
    "id": "33",
    "slug": "heriot-watt-university",
    "name": "Heriot-Watt University",
    "city": "Edinburgh, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Actuarial Science & Finance",
      "Petroleum & Chemical Engineering",
      "Computer Science & Robotics",
      "Logistics & Supply Chain",
      "Civil Engineering",
      "Business Analytics"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£17,500 - £22,500 per year.",
    "scholarshipNote": "International Merit Award up to £4,000.",
    "overview": "Heriot-Watt University is a globally recognized UK university located in Edinburgh, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.hw.ac.uk",
    "featured": false
  },
  {
    "id": "34",
    "slug": "imperial-college-london",
    "name": "Imperial College London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "PhD"
    ],
    "subjects": [
      "Engineering",
      "Computing",
      "Medicine",
      "Business Analytics",
      "Natural Sciences",
      "Data Science"
    ],
    "intakes": [
      "September 2025",
      "September 2026"
    ],
    "tuitionFeeNote": "£35,000 - £42,000 per year for STEM & Business programmes.",
    "scholarshipNote": "President's Undergraduate Scholarships, World Scientific Fellowships, and Imperial Bursaries.",
    "overview": "Imperial College London is a world top-10 university dedicated exclusively to science, technology, engineering, medicine, and business (STEMB).",
    "entryRequirements": "A*A*A to AAA at A-Level with strong mathematics/science background. High GPA for graduate programs.",
    "englishRequirements": "IELTS 6.5 - 7.0 overall with minimum 6.0 - 6.5 in all elements depending on standard or higher requirement.",
    "applicationNote": "High competition for STEM seats. Early preparation recommended through Sage Roots International.",
    "website": "https://www.imperial.ac.uk",
    "featured": true
  },
  {
    "id": "35",
    "slug": "keele-university",
    "name": "Keele University",
    "city": "Keele, Staffordshire",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Data Science & AI",
      "Pharmaceutical & Health Sciences",
      "International Business",
      "Environmental Sustainability",
      "Law",
      "Psychology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £20,200 per year.",
    "scholarshipNote": "Keele Developing Countries & Global Scholarship up to £5,000.",
    "overview": "Keele University is a globally recognized UK university located in Keele, Staffordshire, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.keele.ac.uk",
    "featured": false
  },
  {
    "id": "36",
    "slug": "kings-college-london",
    "name": "King's College London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Law (Dickson Poon)",
      "Medicine & Dentistry",
      "Nursing",
      "Business",
      "International Affairs",
      "Psychiatry"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£23,500 - £35,000 per year.",
    "scholarshipNote": "King's International Scholarships, Desmond Tutu Scholarships, and departmental merit awards.",
    "overview": "King's College London is a historic university located right along the River Thames in the heart of London, celebrated for healthcare education, humanities, and legal studies.",
    "entryRequirements": "A*AA to AAB at A-Level or high secondary certificate + recognized International Foundation Programme.",
    "englishRequirements": "IELTS Band A to Band D: 6.5 to 7.5 overall with specified component minimums.",
    "applicationNote": "Popular across South Asian students for its central London campuses and hospital affiliations.",
    "website": "https://www.kcl.ac.uk",
    "featured": true
  },
  {
    "id": "37",
    "slug": "kingston-university-london",
    "name": "Kingston University London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Aerospace & Mechanical Engineering",
      "International Business & MBA",
      "Pharmacy & Pharmaceutical Science",
      "Cyber Security & Computing",
      "Art, Design & Architecture",
      "Marketing"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,800 - £19,200 per year.",
    "scholarshipNote": "Kingston International Scholarship up to £4,000.",
    "overview": "Kingston University London is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.kingston.ac.uk",
    "featured": false
  },
  {
    "id": "38",
    "slug": "lancaster-university",
    "name": "Lancaster University",
    "city": "Lancaster",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Management & MBA",
      "Accounting & Finance",
      "Data Science & Cyber Security",
      "Environmental Science",
      "Engineering",
      "Linguistics"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£22,000 - £28,500 per year.",
    "scholarshipNote": "Lancaster Global Scholarship up to £5,000.",
    "overview": "Lancaster University is a globally recognized UK university located in Lancaster, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.lancaster.ac.uk",
    "featured": false
  },
  {
    "id": "39",
    "slug": "leeds-arts-university",
    "name": "Leeds Arts University",
    "city": "Leeds",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Animation",
      "Graphic Design",
      "Fashion Branding",
      "Fine Art",
      "Illustration",
      "Filmmaking"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £18,000 per year.",
    "scholarshipNote": "International Creative Progression Award up to £2,500.",
    "overview": "Leeds Arts University is a globally recognized UK university located in Leeds, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.leeds-art.ac.uk",
    "featured": false
  },
  {
    "id": "40",
    "slug": "leeds-beckett-university",
    "name": "Leeds Beckett University",
    "city": "Leeds",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business & MBA",
      "Civil & Built Environment Engineering",
      "Computer Science & Cyber Security",
      "Public Health",
      "Hospitality & Events",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,000 - £17,500 per year.",
    "scholarshipNote": "International Dean's Scholarship up to £3,000 - £4,000.",
    "overview": "Leeds Beckett University is a globally recognized UK university located in Leeds, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.leedsbeckett.ac.uk",
    "featured": false
  },
  {
    "id": "41",
    "slug": "leeds-trinity-university",
    "name": "Leeds Trinity University",
    "city": "Leeds",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Management",
      "Computer Science",
      "Journalism & Media",
      "Psychology",
      "Criminology & Law",
      "Supply Chain Management"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,000 per year.",
    "scholarshipNote": "International Bursary up to £2,500.",
    "overview": "Leeds Trinity University is a globally recognized UK university located in Leeds, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.leedstrinity.ac.uk",
    "featured": false
  },
  {
    "id": "42",
    "slug": "liverpool-hope-university",
    "name": "Liverpool Hope University",
    "city": "Liverpool",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Marketing",
      "Computer Science & Robotics",
      "Education",
      "Psychology",
      "Health & Social Care",
      "International Relations"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,000 per year.",
    "scholarshipNote": "Vice-Chancellor International Scholarship up to £3,000.",
    "overview": "Liverpool Hope University is a globally recognized UK university located in Liverpool, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.hope.ac.uk",
    "featured": false
  },
  {
    "id": "43",
    "slug": "liverpool-john-moores-university",
    "name": "Liverpool John Moores University (LJMU)",
    "city": "Liverpool",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Civil & Mechanical Engineering",
      "Pharmacy & Biomolecular Sciences",
      "Maritime & Logistics",
      "Computer Science & AI",
      "Business Management",
      "Sport Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,600 - £18,250 per year.",
    "scholarshipNote": "Automatic International Achievement Scholarship up to £3,500.",
    "overview": "Liverpool John Moores University (LJMU) is a globally recognized UK university located in Liverpool, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.ljmu.ac.uk",
    "featured": false
  },
  {
    "id": "44",
    "slug": "london-metropolitan-university",
    "name": "London Metropolitan University",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business Administration",
      "Computing & IT",
      "Architecture & Interior Design",
      "Biomedical Sciences",
      "Law",
      "Criminology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,800 per year.",
    "scholarshipNote": "International Excellence Scholarship and fee discounts of up to £2,500.",
    "overview": "Situated in central London (Holloway and Aldgate), London Met provides practical education with strong ties to city employers and industry-standard labs.",
    "entryRequirements": "HSC / A-Levels (50-55%+); recognized Bachelor's degree with 50%+ for Master's programmes.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5) or accepted internal assessments.",
    "applicationNote": "Affordable London option with high accessibility for international applicants.",
    "website": "https://www.londonmet.ac.uk",
    "featured": false
  },
  {
    "id": "45",
    "slug": "london-school-of-economics",
    "name": "London School of Economics and Political Science (LSE)",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "PhD"
    ],
    "subjects": [
      "Economics",
      "Finance",
      "International Relations",
      "Law",
      "Management",
      "Social Policy"
    ],
    "intakes": [
      "September 2025",
      "September 2026"
    ],
    "tuitionFeeNote": "£26,184 - £34,000 per year.",
    "scholarshipNote": "LSE Undergraduate Support Scheme and LSE Master's Awards covering partial/full fees.",
    "overview": "LSE is a specialist university with an international reputation for research and teaching across the full range of social, political and economic sciences.",
    "entryRequirements": "A*AA to AAB at A-Level. Top academic results and rigorous personal statement.",
    "englishRequirements": "IELTS 7.0 overall with at least 7.0 in reading and 6.5 in other bands.",
    "applicationNote": "Rigorous selection emphasizing analytical capability and passionate personal statement.",
    "website": "https://www.lse.ac.uk",
    "featured": true
  },
  {
    "id": "46",
    "slug": "london-south-bank-university",
    "name": "London South Bank University (LSBU)",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Architecture & Civil Engineering",
      "Business & Accounting",
      "Computer Science & IT",
      "Electrical & Electronic Engineering",
      "Law",
      "Health & Social Care"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,800 - £17,900 per year.",
    "scholarshipNote": "LSBU Global Success & Merit Scholarship up to £3,000.",
    "overview": "London South Bank University (LSBU) is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.lsbu.ac.uk",
    "featured": false
  },
  {
    "id": "47",
    "slug": "loughborough-university",
    "name": "Loughborough University",
    "city": "Loughborough & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Sports Science & Management",
      "Automotive & Mechanical Engineering",
      "Digital Innovation & FinTech",
      "Business Analytics",
      "Industrial Design",
      "Media & Creative Industries"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,500 - £27,500 per year.",
    "scholarshipNote": "Loughborough Excellence Scholarship up to 20% off tuition.",
    "overview": "Loughborough University is a globally recognized UK university located in Loughborough & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.lboro.ac.uk",
    "featured": false
  },
  {
    "id": "48",
    "slug": "manchester-metropolitan-university",
    "name": "Manchester Metropolitan University (MMU)",
    "city": "Manchester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Architecture",
      "Business & FinTech",
      "Computer Science & Cyber Security",
      "Mechanical & Electrical Engineering",
      "Fashion & Design",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£17,500 - £20,500 per year.",
    "scholarshipNote": "International Postgraduate & Undergraduate Scholarship up to £3,500.",
    "overview": "Manchester Metropolitan University (MMU) is a globally recognized UK university located in Manchester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.mmu.ac.uk",
    "featured": false
  },
  {
    "id": "49",
    "slug": "middlesex-university-london",
    "name": "Middlesex University London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business Management",
      "Computer Science",
      "Information Technology",
      "Biomedical Science",
      "Law",
      "Creative Arts"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,300 - £17,500 per year.",
    "scholarshipNote": "Middlesex International Merit Awards from £1,000 up to £2,000.",
    "overview": "Middlesex University is based in Hendon, North London, offering modern career-aligned degrees, state-of-the-art labs, and strong partnerships with multinational companies.",
    "entryRequirements": "A-Levels/HSC (55-60%); Bachelor's degree with 50%+ from recognized university.",
    "englishRequirements": "IELTS 6.0 with minimum 5.5 in each component, or accepted equivalent tests.",
    "applicationNote": "Fast-track application processing and direct support through Sage Roots International.",
    "website": "https://www.mdx.ac.uk",
    "featured": true
  },
  {
    "id": "50",
    "slug": "newcastle-university",
    "name": "Newcastle University",
    "city": "Newcastle upon Tyne",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Medicine",
      "Business & Marketing",
      "Civil Engineering",
      "Computing Science",
      "Architecture",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£20,400 - £27,600 per year.",
    "scholarshipNote": "Vice-Chancellor's Global Scholarships and International Foundation awards.",
    "overview": "A founding member of the Russell Group, Newcastle University is situated directly in Newcastle's vibrant city center, celebrated for teaching excellence, medical research, and student community.",
    "entryRequirements": "AAA to BBB at A-Level; 60-65% in recognized undergraduate degree.",
    "englishRequirements": "IELTS 6.5 overall with minimum 5.5 - 6.0 in each sub-skill.",
    "applicationNote": "Ranked among the friendliest and most cost-effective student cities in Great Britain.",
    "website": "https://www.ncl.ac.uk",
    "featured": true
  },
  {
    "id": "51",
    "slug": "northumbria-university",
    "name": "Northumbria University",
    "city": "Newcastle & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Management",
      "Computer Science",
      "Law",
      "Design & Architecture",
      "Engineering",
      "Nursing"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £19,500 per year.",
    "scholarshipNote": "Global Scholarship offering £2,000 to £3,000 fee reduction.",
    "overview": "Named Times Higher Education University of the Year, Northumbria combines academic rigor with business-focused coursework across Newcastle and London campuses.",
    "entryRequirements": "A-Levels / HSC (60%+); Bachelor's degree with minimum 55% for postgraduate entry.",
    "englishRequirements": "IELTS 6.0 - 6.5 with at least 5.5 in each component.",
    "applicationNote": "AACSB double-accredited Newcastle Business School offers exceptional career mentoring.",
    "website": "https://www.northumbria.ac.uk",
    "featured": true
  },
  {
    "id": "52",
    "slug": "norwich-university-of-the-arts",
    "name": "Norwich University of the Arts",
    "city": "Norwich",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Games Art & Design",
      "User Experience (UX) Design",
      "Animation",
      "Architecture",
      "Fashion Communication",
      "Fine Art"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£17,500 - £19,000 per year.",
    "scholarshipNote": "International Merit Scholarship up to £3,000.",
    "overview": "Norwich University of the Arts is a globally recognized UK university located in Norwich, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://norwichuni.ac.uk",
    "featured": false
  },
  {
    "id": "53",
    "slug": "nottingham-trent-university",
    "name": "Nottingham Trent University (NTU)",
    "city": "Nottingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Management",
      "Computer Science & Data Analytics",
      "Art, Fashion & Design",
      "Biosciences",
      "Law",
      "Civil Engineering"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,800 - £19,800 per year.",
    "scholarshipNote": "NTU International Excellence Scholarships up to 50% tuition.",
    "overview": "Nottingham Trent University (NTU) is a globally recognized UK university located in Nottingham, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.ntu.ac.uk",
    "featured": false
  },
  {
    "id": "54",
    "slug": "plymouth-marjon-university",
    "name": "Plymouth Marjon University",
    "city": "Plymouth",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Education & Teaching",
      "Sport Rehabilitation & Coaching",
      "Business & Management",
      "Psychology",
      "Public Health",
      "Journalism"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,000 - £15,500 per year.",
    "scholarshipNote": "International Welcome Bursary up to £2,000.",
    "overview": "Plymouth Marjon University is a globally recognized UK university located in Plymouth, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.marjon.ac.uk",
    "featured": false
  },
  {
    "id": "55",
    "slug": "queen-margaret-university",
    "name": "Queen Margaret University (QMU)",
    "city": "Edinburgh, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Hospitality & Tourism",
      "Public Health & Nutrition",
      "Business Management",
      "Media & Communication",
      "Physiotherapy",
      "Arts Management"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £16,800 per year.",
    "scholarshipNote": "International Santander & QMU Bursary up to £3,000.",
    "overview": "Queen Margaret University (QMU) is a globally recognized UK university located in Edinburgh, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.qmu.ac.uk",
    "featured": false
  },
  {
    "id": "56",
    "slug": "queen-mary-university-of-london",
    "name": "Queen Mary University of London (QMUL)",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Commercial Law (CCLS)",
      "Dentistry & Medicine",
      "Business & Management",
      "Computer Science",
      "Artificial Intelligence"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£22,000 - £29,750 per year.",
    "scholarshipNote": "Queen Mary Global Excellence Scholarships worth up to £3,000 - £5,000.",
    "overview": "The only self-contained campus university among London's Russell Group institutions, QMUL offers vibrant campus life right in Mile End, minutes from Canary Wharf.",
    "entryRequirements": "A*AA to ABB at A-Level or recognized foundation; 3.0+ CGPA for graduate entry.",
    "englishRequirements": "IELTS 6.5 - 7.0 overall depending on subject.",
    "applicationNote": "Its Centre for Commercial Law Studies (CCLS) is world-renowned for LLM specializations.",
    "website": "https://www.qmul.ac.uk",
    "featured": true
  },
  {
    "id": "57",
    "slug": "queens-university-belfast",
    "name": "Queen's University Belfast",
    "city": "Belfast",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Business",
      "Law",
      "Engineering",
      "Health Sciences",
      "Arts",
      "Computer Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,800 - £25,000 per year.",
    "scholarshipNote": "International Office Undergraduate & Postgraduate Scholarships of £2,000 to £5,000.",
    "overview": "Queen's University Belfast is a prestigious Russell Group member in Northern Ireland, offering world-class research, stunning heritage architecture, and the lowest student living costs in the UK.",
    "entryRequirements": "AAB to BBB at A-Level or equivalent; 55-60%+ for Master's admissions.",
    "englishRequirements": "IELTS 6.0 - 6.5 overall depending on subject area.",
    "applicationNote": "Belfast boasts the lowest living cost among all Russell Group university cities.",
    "website": "https://www.qub.ac.uk",
    "featured": true
  },
  {
    "id": "58",
    "slug": "ravensbourne-university-london",
    "name": "Ravensbourne University London",
    "city": "London (Greenwich Peninsula)",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Computer Science & Cloud Computing",
      "Cyber Security",
      "Digital Marketing",
      "UX/UI & Product Design",
      "Digital Film Production",
      "MBA Fashion & Luxury"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £18,000 per year.",
    "scholarshipNote": "International Creative & Tech Scholarship up to £3,500.",
    "overview": "Ravensbourne University London is a globally recognized UK university located in London (Greenwich Peninsula), offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.ravensbourne.ac.uk",
    "featured": false
  },
  {
    "id": "59",
    "slug": "regents-university-london",
    "name": "Regent's University London",
    "city": "London (Regent's Park)",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Luxury Brand Management",
      "International Business",
      "Finance & Investment",
      "Entrepreneurship",
      "Digital Marketing & Analytics",
      "Psychology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,000 - £25,500 per year.",
    "scholarshipNote": "Dean's International Enterprise Scholarship up to £4,000.",
    "overview": "Regent's University London is a globally recognized UK university located in London (Regent's Park), offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.regents.ac.uk",
    "featured": false
  },
  {
    "id": "60",
    "slug": "richmond-american-university-london",
    "name": "Richmond American University London",
    "city": "London (Chiswick Park)",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business",
      "Finance & Investment",
      "Communications & Media",
      "International Relations",
      "Data Science",
      "MBA"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £18,000 per year.",
    "scholarshipNote": "Dual UK & US Degree Merit Scholarship up to £3,000.",
    "overview": "Richmond American University London is a globally recognized UK university located in London (Chiswick Park), offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.richmond.ac.uk",
    "featured": false
  },
  {
    "id": "61",
    "slug": "robert-gordon-university",
    "name": "Robert Gordon University (RGU)",
    "city": "Aberdeen, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Oil, Gas & Renewable Energy Engineering",
      "Pharmacy & Life Sciences",
      "Project Management",
      "Accounting & Finance",
      "Architecture",
      "Data Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £18,300 per year.",
    "scholarshipNote": "RGU International Student Discount up to £3,000.",
    "overview": "Robert Gordon University (RGU) is a globally recognized UK university located in Aberdeen, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.rgu.ac.uk",
    "featured": false
  },
  {
    "id": "62",
    "slug": "roehampton-university-london",
    "name": "Roehampton University London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Global Business Management (MBA)",
      "Project Management",
      "Computing & Web Development",
      "Clinical Nutrition & Public Health",
      "Psychology",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,750 - £17,500 per year.",
    "scholarshipNote": "Vice-Chancellor International Scholarship up to £4,000.",
    "overview": "Roehampton University London is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.roehampton.ac.uk",
    "featured": false
  },
  {
    "id": "63",
    "slug": "royal-agricultural-university",
    "name": "Royal Agricultural University (RAU)",
    "city": "Cirencester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Sustainable Agriculture & Food Security",
      "Business & Enterprise",
      "Real Estate & Land Management",
      "Environment & Conservation",
      "Agritech",
      "Equine Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,500 per year.",
    "scholarshipNote": "International Food & Agribusiness Bursary up to £3,000.",
    "overview": "Royal Agricultural University (RAU) is a globally recognized UK university located in Cirencester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.rau.ac.uk",
    "featured": false
  },
  {
    "id": "64",
    "slug": "royal-holloway-university-of-london",
    "name": "Royal Holloway, University of London",
    "city": "Egham & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Information Security & Cyber Security",
      "Data Science & AI",
      "Business & Management",
      "Economics",
      "Psychology",
      "Media Arts"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£19,500 - £26,500 per year.",
    "scholarshipNote": "Royal Holloway Global Future Scholarship up to £5,000.",
    "overview": "Royal Holloway, University of London is a globally recognized UK university located in Egham & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.royalholloway.ac.uk",
    "featured": false
  },
  {
    "id": "65",
    "slug": "sheffield-hallam-university",
    "name": "Sheffield Hallam University",
    "city": "Sheffield",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Sheffield Business School",
      "Applied Computing",
      "Engineering",
      "Health & Social Care",
      "Architecture",
      "Sport Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,860 - £17,200 per year.",
    "scholarshipNote": "Transform Together Scholarships offering 50% tuition fee reduction.",
    "overview": "One of the UK's largest modern universities, Sheffield Hallam is celebrated for applied learning, state-of-the-art city-centre campus buildings, and industry links.",
    "entryRequirements": "A-Levels / HSC (55-60%); Bachelor's degree with 50-55%+ for Master's programs.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5 each skill) or equivalent qualification.",
    "applicationNote": "Sheffield is celebrated as England's greenest city, bordered by the Peak District National Park.",
    "website": "https://www.shu.ac.uk",
    "featured": false
  },
  {
    "id": "66",
    "slug": "soas-university-of-london",
    "name": "SOAS University of London",
    "city": "London (Bloomsbury)",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Development Studies",
      "International Relations & Diplomacy",
      "International Law",
      "Finance & Economic Policy",
      "Global Media",
      "Anthropology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,000 - £25,500 per year.",
    "scholarshipNote": "SOAS International Postgraduate Merit Award up to £5,000.",
    "overview": "SOAS University of London is a globally recognized UK university located in London (Bloomsbury), offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.soas.ac.uk",
    "featured": false
  },
  {
    "id": "67",
    "slug": "solent-university-southampton",
    "name": "Solent University Southampton",
    "city": "Southampton",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Maritime Business & Shipping",
      "Applied AI & Data Science",
      "Computer Engineering",
      "International Business Management",
      "Digital Marketing",
      "Sports Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,200 per year.",
    "scholarshipNote": "International Academic Merit Scholarship up to £2,500.",
    "overview": "Solent University Southampton is a globally recognized UK university located in Southampton, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.solent.ac.uk",
    "featured": false
  },
  {
    "id": "68",
    "slug": "st-georges-university-of-london",
    "name": "St George's, University of London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Biomedical Science",
      "Global Health & Infectious Diseases",
      "Genomic Medicine",
      "Clinical Pharmacology",
      "Translational Medicine",
      "Healthcare Practice"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,500 - £26,000 per year.",
    "scholarshipNote": "Postgraduate Global Health Scholarship up to £3,500.",
    "overview": "St George's, University of London is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.sgul.ac.uk",
    "featured": false
  },
  {
    "id": "69",
    "slug": "st-marys-university-twickenham",
    "name": "St Mary's University, Twickenham",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business Management",
      "Computer Science",
      "International Finance & Accounting",
      "Sports Science & Nutrition",
      "Law",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,100 per year.",
    "scholarshipNote": "International Academic Excellence Scholarship up to £3,000.",
    "overview": "St Mary's University, Twickenham is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.stmarys.ac.uk",
    "featured": false
  },
  {
    "id": "70",
    "slug": "staffordshire-university",
    "name": "Staffordshire University",
    "city": "Stoke-on-Trent & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Computer Games Design & Esports",
      "Computer Science & AI",
      "Cyber Security",
      "International Business & MBA",
      "Digital Marketing",
      "Mechanical Engineering"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,750 - £17,500 per year.",
    "scholarshipNote": "SMART International Scholarship up to £3,000 - £3,500.",
    "overview": "Staffordshire University is a globally recognized UK university located in Stoke-on-Trent & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.staffs.ac.uk",
    "featured": false
  },
  {
    "id": "71",
    "slug": "swansea-university",
    "name": "Swansea University",
    "city": "Swansea",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Engineering (Bay Campus)",
      "Computer Science",
      "Management School",
      "Law",
      "Health Science",
      "Sports Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£17,000 - £22,500 per year.",
    "scholarshipNote": "International Excellence Scholarships up to £4,000 for undergraduate and postgraduate.",
    "overview": "Famous for its stunning beachfront Bay Campus, Swansea University is a top UK institution for engineering, computer science, and student satisfaction.",
    "entryRequirements": "AAB to BBC at A-Level or Foundation; 55-60%+ in Bachelor's for PG.",
    "englishRequirements": "IELTS 6.0 - 6.5 with no band under 5.5.",
    "applicationNote": "Modern Bay Campus is one of the few global campuses with direct beachfront access.",
    "website": "https://www.swansea.ac.uk",
    "featured": false
  },
  {
    "id": "72",
    "slug": "teesside-university",
    "name": "Teesside University",
    "city": "Middlesbrough & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Computer Games & Animation",
      "Data Science & AI",
      "Business",
      "Mechanical Engineering",
      "Health & Nursing",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £17,000 per year.",
    "scholarshipNote": "Global Excellence Scholarship up to £2,000 for international students.",
    "overview": "Teesside University in Middlesbrough is an award-winning modern university renowned for digital innovation, game design, cybersecurity, and affordable living.",
    "entryRequirements": "HSC / A-Levels (55%+); Bachelor's degree with 50-55%+ for postgraduates.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5) or accepted English test.",
    "applicationNote": "One of the most cost-effective student towns in the UK with modern accommodation.",
    "website": "https://www.tees.ac.uk",
    "featured": false
  },
  {
    "id": "73",
    "slug": "university-college-london",
    "name": "UCL (University College London)",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Architecture (Bartlett)",
      "Law",
      "Computer Science",
      "Economics",
      "Life Sciences",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "September 2026"
    ],
    "tuitionFeeNote": "£24,000 - £35,000 per year across disciplines.",
    "scholarshipNote": "UCL Global Undergraduate Scholarship, UCL Graduate Research Scholarships.",
    "overview": "London's leading multidisciplinary university, UCL is ranked in the world's top 10 and renowned for pioneering research, progressive teaching, and prime central London location in Bloomsbury.",
    "entryRequirements": "A*A*A to AAB at A-Level or recognized foundation/international diploma. 3.3+ GPA for Master's admissions.",
    "englishRequirements": "IELTS Level 1 to 5 ranging from 6.5 to 8.0 overall based on program tier.",
    "applicationNote": "Undergraduate entry through UCAS. Postgraduate applications handled directly with UCL portal.",
    "website": "https://www.ucl.ac.uk",
    "featured": true
  },
  {
    "id": "74",
    "slug": "ulster-university",
    "name": "Ulster University",
    "city": "Belfast & Derry",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Accounting",
      "Computing & AI",
      "Health Sciences",
      "Biomedical Engineering",
      "Law",
      "Art"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,840 - £18,000 per year.",
    "scholarshipNote": "International Postgraduate Scholarship of £2,000 applied automatically.",
    "overview": "Ulster University operates modern campuses including its flagship £350M Belfast city-centre campus, boasting top national rankings for pharmacy, nursing, and creative computing.",
    "entryRequirements": "A-Levels / HSC (55-60%); Bachelor's with 50%+ for Master's admissions.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5 in each section) or accepted equivalent.",
    "applicationNote": "State-of-the-art Belfast campus opened recently with extraordinary facilities.",
    "website": "https://www.ulster.ac.uk",
    "featured": false
  },
  {
    "id": "75",
    "slug": "university-college-birmingham",
    "name": "University College Birmingham (UCB)",
    "city": "Birmingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Hospitality & Tourism Management",
      "Aviation & Airport Management",
      "Computer Science",
      "Enterprise Management (MBA)",
      "Finance & Accounting",
      "Culinary Arts"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £16,500 per year.",
    "scholarshipNote": "International Dean's Award & Early Payment Discount up to £2,500.",
    "overview": "University College Birmingham (UCB) is a globally recognized UK university located in Birmingham, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.ucb.ac.uk",
    "featured": false
  },
  {
    "id": "76",
    "slug": "university-for-the-creative-arts",
    "name": "University for the Creative Arts (UCA)",
    "city": "Farnham, Canterbury & Epsom",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Global MBA & Creative Business",
      "Architecture & Interior Design",
      "Computer Games & Animation",
      "Fashion & Luxury Management",
      "Graphic Design",
      "Human-Computer Interaction"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,950 - £18,500 per year.",
    "scholarshipNote": "UCA Creative International Scholarship up to £3,000 - £4,500.",
    "overview": "University for the Creative Arts (UCA) is a globally recognized UK university located in Farnham, Canterbury & Epsom, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uca.ac.uk",
    "featured": false
  },
  {
    "id": "77",
    "slug": "university-of-aberdeen",
    "name": "University of Aberdeen",
    "city": "Aberdeen",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Petroleum & Renewable Energy Engineering",
      "Law",
      "Business",
      "Medicine",
      "Data Science",
      "Environmental Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£19,000 - £26,500 per year.",
    "scholarshipNote": "Aberdeen Global Scholarship up to £5,000 - £8,000 tuition fee waiver.",
    "overview": "Founded in 1495, Aberdeen is Scotland's third-oldest university and a global hub for energy transition, maritime engineering, and business studies.",
    "entryRequirements": "AAB to BBB at A-Level; 58-62%+ in relevant Bachelor's degree.",
    "englishRequirements": "IELTS 6.0 - 6.5 with at least 5.5 - 6.0 in components.",
    "applicationNote": "Recognized leader in energy transition and offshore engineering qualifications.",
    "website": "https://www.abdn.ac.uk",
    "featured": true
  },
  {
    "id": "78",
    "slug": "university-of-bath",
    "name": "University of Bath",
    "city": "Bath",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Management & Finance",
      "Mechanical & Aerospace Engineering",
      "Architecture & Civil Engineering",
      "Computer Science & AI",
      "Pharmacy & Pharmacology",
      "Economics"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£22,500 - £29,500 per year.",
    "scholarshipNote": "Bath Global Excellence & Deans Award up to £5,000 - £8,000.",
    "overview": "University of Bath is a globally recognized UK university located in Bath, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bath.ac.uk",
    "featured": false
  },
  {
    "id": "79",
    "slug": "university-of-bedfordshire",
    "name": "University of Bedfordshire",
    "city": "Luton & Bedford",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Management",
      "Computer Science",
      "Health & Social Care",
      "Media Production",
      "Law",
      "Cyber Security"
    ],
    "intakes": [
      "September 2025",
      "November 2025",
      "January 2026",
      "March 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,000 per year.",
    "scholarshipNote": "Vice Chancellor's Scholarship and prompt payment discount up to £1,500.",
    "overview": "Located just 30 minutes north of London with campuses in Luton and Bedford, the university is famous for accessible tuition, flexible multiple intakes, and student diversity.",
    "entryRequirements": "HSC / A-Levels (50%+); Bachelor's degree with 50%+ for postgraduate courses.",
    "englishRequirements": "IELTS 6.0 (5.5 minimum) or Bedfordshire English Language Placement Test (BPT).",
    "applicationNote": "High flexibility with 4 to 6 entry intakes throughout the academic year.",
    "website": "https://www.beds.ac.uk",
    "featured": false
  },
  {
    "id": "80",
    "slug": "university-of-birmingham",
    "name": "University of Birmingham",
    "city": "Birmingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Business",
      "Mechanical Engineering",
      "Computer Science",
      "Biomedical Sciences",
      "Law",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,000 - £29,800 per year.",
    "scholarshipNote": "Global Masters Scholarships and Birmingham International Academy awards.",
    "overview": "A founding red brick Russell Group institution located on an expansive parkland campus in the UK's second-largest city, with its own dedicated university railway station.",
    "entryRequirements": "A*AA to ABB at A-Level; 60-70% in Bachelor's degree from recognized university.",
    "englishRequirements": "IELTS 6.0 - 7.0 depending on program.",
    "applicationNote": "Strong industry placement links in the West Midlands automotive and financial sectors.",
    "website": "https://www.birmingham.ac.uk",
    "featured": true
  },
  {
    "id": "81",
    "slug": "university-of-bolton",
    "name": "University of Bolton (Greater Manchester)",
    "city": "Bolton, Greater Manchester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Motorsport & Automotive Engineering",
      "MBA & Supply Chain Management",
      "Software Engineering & Cloud Computing",
      "Civil Engineering",
      "Accountancy",
      "Health & Social Care"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,950 - £15,950 per year.",
    "scholarshipNote": "International Excellence Bursary up to £2,500.",
    "overview": "University of Bolton (Greater Manchester) is a globally recognized UK university located in Bolton, Greater Manchester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bolton.ac.uk",
    "featured": false
  },
  {
    "id": "82",
    "slug": "university-of-bradford",
    "name": "University of Bradford",
    "city": "Bradford",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Applied Artificial Intelligence",
      "MBA & Financial Management",
      "Civil & Chemical Engineering",
      "Pharmacy & Optometry",
      "Peace & International Development",
      "Cyber Security"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £21,000 per year.",
    "scholarshipNote": "Global Development & Regional Scholarship up to £4,000 - £5,000.",
    "overview": "University of Bradford is a globally recognized UK university located in Bradford, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.bradford.ac.uk",
    "featured": false
  },
  {
    "id": "83",
    "slug": "university-of-brighton",
    "name": "University of Brighton",
    "city": "Brighton",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Design & Arts",
      "Business",
      "Engineering",
      "Pharmacy & Health",
      "Computing",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,900 - £17,900 per year.",
    "scholarshipNote": "Brighton International Scholarship awarding £2,500 - £3,000 reduction.",
    "overview": "The University of Brighton is a creative and dynamic institution on England's south coast, celebrated for art, design, architecture, engineering, and applied health research.",
    "entryRequirements": "A-Levels or HSC (55-60%); Bachelor's degree with 50-55%+ for Master's degrees.",
    "englishRequirements": "IELTS 6.0 overall with minimum 5.5 in each area.",
    "applicationNote": "Brighton is known as the UK's capital of creativity, diversity, and coastal living.",
    "website": "https://www.brighton.ac.uk",
    "featured": false
  },
  {
    "id": "84",
    "slug": "university-of-bristol",
    "name": "University of Bristol",
    "city": "Bristol",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Aerospace Engineering",
      "Civil Engineering",
      "Law",
      "Economics",
      "Biological Sciences",
      "Data Science"
    ],
    "intakes": [
      "September 2025",
      "September 2026"
    ],
    "tuitionFeeNote": "£22,200 - £31,500 per year.",
    "scholarshipNote": "Think Big Scholarships offering up to £13,000 - £26,000 tuition fee reductions.",
    "overview": "Ranked among the UK's top 10 universities, Bristol combines academic excellence with a vibrant, creative city lifestyle known for innovation and engineering heritage.",
    "entryRequirements": "A*AA to ABB at A-Level or recognized foundation pathway. 60-70% in Bachelor's for PG.",
    "englishRequirements": "IELTS 6.5 - 7.0 overall with sub-skill thresholds of 6.0 - 6.5.",
    "applicationNote": "The Think Big scholarship scheme is one of the most generous in the UK for international students.",
    "website": "https://www.bristol.ac.uk",
    "featured": true
  },
  {
    "id": "85",
    "slug": "university-of-buckingham",
    "name": "University of Buckingham",
    "city": "Buckingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "2-Year Fast-Track LLB Law",
      "Business & Enterprise",
      "Computing & AI",
      "Accounting & Finance",
      "Psychology",
      "Medicine & Health"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £22,000 per year.",
    "scholarshipNote": "2-Year Accelerated Honours Degree & High Achiever Scholarship up to £3,000.",
    "overview": "University of Buckingham is a globally recognized UK university located in Buckingham, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.buckingham.ac.uk",
    "featured": false
  },
  {
    "id": "86",
    "slug": "university-of-central-lancashire",
    "name": "University of Central Lancashire (UCLan)",
    "city": "Preston, Lancashire",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Aerospace & Mechanical Engineering",
      "MBA & International Business",
      "Pharmacy & Medical Sciences",
      "Cyber Security & Computing",
      "Construction Project Management",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £17,500 per year.",
    "scholarshipNote": "International Bursary & Excellence Scholarship up to £3,500.",
    "overview": "University of Central Lancashire (UCLan) is a globally recognized UK university located in Preston, Lancashire, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uclan.ac.uk",
    "featured": false
  },
  {
    "id": "87",
    "slug": "university-of-chester",
    "name": "University of Chester",
    "city": "Chester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business & Management",
      "Program & Project Management",
      "Cyber Security & Data Science",
      "Public Health",
      "Engineering",
      "Accounting & Finance"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,750 - £16,000 per year.",
    "scholarshipNote": "International & Regional Merit Scholarship up to £2,500.",
    "overview": "University of Chester is a globally recognized UK university located in Chester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.chester.ac.uk",
    "featured": false
  },
  {
    "id": "88",
    "slug": "university-of-chichester",
    "name": "University of Chichester",
    "city": "Chichester, West Sussex",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business",
      "Sports Science & Coaching",
      "Psychology",
      "Education",
      "Creative & Digital Technologies",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £16,500 per year.",
    "scholarshipNote": "Global Merit Scholarship up to £2,500.",
    "overview": "University of Chichester is a globally recognized UK university located in Chichester, West Sussex, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.chi.ac.uk",
    "featured": false
  },
  {
    "id": "89",
    "slug": "university-of-cumbria",
    "name": "University of Cumbria",
    "city": "Carlisle, Lancaster & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MBA & International Management",
      "Project Management",
      "Supply Chain & Logistics",
      "Health & Social Care",
      "Education",
      "Environmental Conservation"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£13,500 - £15,500 per year.",
    "scholarshipNote": "International Tuition Fee Bursary up to £2,000.",
    "overview": "University of Cumbria is a globally recognized UK university located in Carlisle, Lancaster & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.cumbria.ac.uk",
    "featured": false
  },
  {
    "id": "90",
    "slug": "university-of-derby",
    "name": "University of Derby",
    "city": "Derby",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Mechanical & Motorsport Engineering",
      "Hospitality & Tourism Management",
      "International Business & Finance",
      "Big Data & Cyber Security",
      "Supply Chain Improvement",
      "Public Health"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,900 - £16,900 per year.",
    "scholarshipNote": "Vice-Chancellor & Merit Scholarships up to £3,000.",
    "overview": "University of Derby is a globally recognized UK university located in Derby, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.derby.ac.uk",
    "featured": false
  },
  {
    "id": "91",
    "slug": "university-of-dundee",
    "name": "University of Dundee",
    "city": "Dundee",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Life Sciences",
      "Art & Design (Duncan of Jordanstone)",
      "Civil Engineering",
      "Dentistry",
      "Law",
      "Business"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,500 - £24,000 per year.",
    "scholarshipNote": "Global Excellence Scholarship offering up to £6,000 per year of study.",
    "overview": "Ranked #1 in Scotland for graduate prospects, Dundee offers a compact, friendly city-centre campus with world-class medical, art, and life sciences research.",
    "entryRequirements": "BBB at A-Level or Foundation; Bachelor's degree with 55-60%+ for PG.",
    "englishRequirements": "IELTS 6.0 - 6.5 with at least 5.5 in all skills.",
    "applicationNote": "High quality of life, affordable student accommodation, and beautiful coastal setting.",
    "website": "https://www.dundee.ac.uk",
    "featured": false
  },
  {
    "id": "92",
    "slug": "university-of-east-anglia",
    "name": "University of East Anglia (UEA)",
    "city": "Norwich",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Environmental & Climate Science",
      "International Development",
      "Pharmacy & Health Sciences",
      "Business & Finance",
      "Computer Science",
      "Creative Writing"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£19,500 - £24,500 per year.",
    "scholarshipNote": "UEA International Excellence Scholarship up to £4,000 - £6,000.",
    "overview": "University of East Anglia (UEA) is a globally recognized UK university located in Norwich, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uea.ac.uk",
    "featured": false
  },
  {
    "id": "93",
    "slug": "university-of-edinburgh",
    "name": "University of Edinburgh",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "PhD"
    ],
    "subjects": [
      "Informatics & AI",
      "Medicine",
      "Biological Sciences",
      "Literature",
      "Business",
      "Philosophy"
    ],
    "intakes": [
      "September 2025",
      "September 2026"
    ],
    "tuitionFeeNote": "£24,500 - £34,800 per year.",
    "scholarshipNote": "Edinburgh Global Undergraduate Mathematics Scholarships and Edinburgh Doctoral College Scholarships.",
    "overview": "One of Scotland's ancient universities, the University of Edinburgh is globally renowned for research excellence, producing Nobel laureates, philosophers, and pioneers in Artificial Intelligence.",
    "entryRequirements": "A*AA to ABB at A-Level or 80-85%+ equivalent in higher secondary certificates.",
    "englishRequirements": "IELTS 6.5 - 7.0 overall with no score below 6.0.",
    "applicationNote": "Scottish 4-year undergraduate degree allows tremendous academic flexibility.",
    "website": "https://www.ed.ac.uk",
    "featured": true
  },
  {
    "id": "94",
    "slug": "university-of-essex",
    "name": "University of Essex",
    "city": "Colchester & Southend",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Data Science & Artificial Intelligence",
      "Economics & Finance",
      "Human Rights & International Law",
      "Business & Entrepreneurship",
      "Computer Engineering",
      "Political Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,500 - £22,500 per year.",
    "scholarshipNote": "South Asia Regional Scholarship up to £4,000 - £5,000.",
    "overview": "University of Essex is a globally recognized UK university located in Colchester & Southend, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.essex.ac.uk",
    "featured": false
  },
  {
    "id": "95",
    "slug": "university-of-exeter",
    "name": "University of Exeter",
    "city": "Exeter",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Business & Finance",
      "Renewable Energy",
      "Environmental Sciences",
      "Law",
      "Sports Science",
      "Data Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,500 - £29,000 per year.",
    "scholarshipNote": "Global Excellence Scholarships of £5,000 to £10,000 for high achievers.",
    "overview": "A Russell Group institution with one of the most picturesque botanical campuses in the UK, Exeter combines top-tier research with an enviable coastal and countryside setting.",
    "entryRequirements": "AAA to ABB at A-Level; UK 2:1 or equivalent overseas degree.",
    "englishRequirements": "IELTS 6.5 overall with 6.0 in writing and 5.5 - 6.0 in other bands.",
    "applicationNote": "Triple-accredited Exeter Business School is a magnet for prospective international graduates.",
    "website": "https://www.exeter.ac.uk",
    "featured": true
  },
  {
    "id": "96",
    "slug": "university-of-glasgow",
    "name": "University of Glasgow",
    "city": "Glasgow",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Medicine",
      "Adam Smith Business School",
      "Computing Science",
      "Engineering",
      "Law",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,500 - £30,240 per year.",
    "scholarshipNote": "Undergraduate & Postgraduate Excellence Scholarships up to £10,000.",
    "overview": "Established in 1451, Glasgow is the fourth-oldest university in the English-speaking world. A Russell Group leader featuring iconic neo-Gothic campus architecture.",
    "entryRequirements": "AAA to BBB at A-Level; recognized bachelor's degree with 60%+ for PG admissions.",
    "englishRequirements": "IELTS 6.5 overall with no sub-test under 6.0.",
    "applicationNote": "Offers both September and selected January master's intakes.",
    "website": "https://www.gla.ac.uk",
    "featured": true
  },
  {
    "id": "97",
    "slug": "university-of-gloucestershire",
    "name": "University of Gloucestershire",
    "city": "Cheltenham & Gloucester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Cyber & Computer Science",
      "MBA & Business Management",
      "Accounting & Finance",
      "Landscape Architecture",
      "Media Production",
      "Nursing & Health"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,200 - £17,600 per year.",
    "scholarshipNote": "International Grant & Merit Award up to £3,000.",
    "overview": "University of Gloucestershire is a globally recognized UK university located in Cheltenham & Gloucester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.glos.ac.uk",
    "featured": false
  },
  {
    "id": "98",
    "slug": "university-of-greenwich",
    "name": "University of Greenwich",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business",
      "Computing & Data Science",
      "Engineering",
      "Nursing & Healthcare",
      "Law",
      "Accounting & Finance"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,100 - £18,000 per year.",
    "scholarshipNote": "International Scholarship Award offering up to £3,000 fee discount for year one.",
    "overview": "Located on a UNESCO World Heritage campus along the Thames, the University of Greenwich provides modern courses, excellent employment support, and convenient central London connectivity.",
    "entryRequirements": "HSC / A-Levels (60%+) or recognized diploma; Bachelor's degree with 50-55%+ for Master's.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 each) or accepted internal English assessment / MOI for eligible candidates.",
    "applicationNote": "One of the most popular UK universities for South Asian students due to multiple intakes and prime London location.",
    "website": "https://www.gre.ac.uk",
    "featured": true
  },
  {
    "id": "99",
    "slug": "university-of-hertfordshire",
    "name": "University of Hertfordshire",
    "city": "Hatfield",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Aerospace & Automotive Engineering",
      "Computer Science",
      "Business & Finance",
      "Pharmacy",
      "Law",
      "Data Analytics"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £17,500 per year.",
    "scholarshipNote": "Vice-Chancellor's Scholarships of £1,000 to £4,000 for international students.",
    "overview": "Just 25 minutes by train from central London, Hertfordshire is known as the UK's leading business-facing university, boasting an aerospace simulation center and close Formula 1 industry ties.",
    "entryRequirements": "A-Levels or HSC equivalent (60%+); 4-year Bachelor's degree with 55%+ for postgraduates.",
    "englishRequirements": "IELTS 6.0 overall with no band below 5.5, or approved English password test.",
    "applicationNote": "High graduate placement rate and option for one-year industry placement with postgrad degrees.",
    "website": "https://www.herts.ac.uk",
    "featured": true
  },
  {
    "id": "100",
    "slug": "university-of-huddersfield",
    "name": "University of Huddersfield",
    "city": "Huddersfield",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Huddersfield Business School",
      "Computing & Engineering",
      "Pharmacy & Chemistry",
      "Music & Audio",
      "Education",
      "Architecture"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,000 - £18,700 per year.",
    "scholarshipNote": "Global Professional Scholarships awarding up to £4,000 annually.",
    "overview": "Huddersfield is a TEF Gold-rated university acclaimed for outstanding teaching, industry placements for every course, and a welcoming canal-side campus in Yorkshire.",
    "entryRequirements": "A-Levels or HSC (55-60%+); Bachelor's with 55%+ from accredited institution.",
    "englishRequirements": "IELTS 6.0 overall with no band under 5.5.",
    "applicationNote": "100% of undergraduate students are given the opportunity to undertake professional work experience.",
    "website": "https://www.hud.ac.uk",
    "featured": false
  },
  {
    "id": "101",
    "slug": "university-of-hull",
    "name": "University of Hull",
    "city": "Hull & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Logistics & Supply Chain Management",
      "Artificial Intelligence & Data Science",
      "Renewable Energy & Chemical Engineering",
      "Business Management",
      "Biomedical Science",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £18,500 per year.",
    "scholarshipNote": "Hull Fairer Future Global Scholarship up to £3,000.",
    "overview": "University of Hull is a globally recognized UK university located in Hull & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.hull.ac.uk",
    "featured": false
  },
  {
    "id": "102",
    "slug": "university-of-kent",
    "name": "University of Kent",
    "city": "Canterbury & Medway",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Actuarial Science & Finance",
      "Computer Science & Cyber Security",
      "Law (Kent Law School)",
      "International Relations",
      "Architecture",
      "Biotechnology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,600 - £22,700 per year.",
    "scholarshipNote": "Kent Future Student Global Scholarship up to £4,000 - £5,000.",
    "overview": "University of Kent is a globally recognized UK university located in Canterbury & Medway, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.kent.ac.uk",
    "featured": false
  },
  {
    "id": "103",
    "slug": "university-of-law",
    "name": "University of Law (ULaw)",
    "city": "London, Birmingham, Manchester & Leeds",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "LLB & LLM International Law",
      "SQE & Bar Practice Courses",
      "MSc Corporate Financial Management",
      "MSc Project Management",
      "Business Analytics",
      "Cyber Security Management"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £18,500 per year.",
    "scholarshipNote": "Career Changer & International Bursary up to £3,000.",
    "overview": "University of Law (ULaw) is a globally recognized UK university located in London, Birmingham, Manchester & Leeds, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.law.ac.uk",
    "featured": false
  },
  {
    "id": "104",
    "slug": "university-of-leeds",
    "name": "University of Leeds",
    "city": "Leeds",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Leeds University Business School (LUBS)",
      "Engineering",
      "Media & Communication",
      "Law",
      "Design",
      "Food Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,500 - £29,500 per year.",
    "scholarshipNote": "International Excellence Scholarships offering 50% tuition reduction across select faculties.",
    "overview": "Established in 1904, Leeds is a major research-intensive Russell Group institution and one of the most popular universities in the UK by application volume.",
    "entryRequirements": "AAA to ABB at A-Level; 60-70% in Bachelor's degree for postgraduate entry.",
    "englishRequirements": "IELTS 6.5 overall with no band below 6.0.",
    "applicationNote": "Vibrant single-site campus just a 10-minute walk from Leeds city center.",
    "website": "https://www.leeds.ac.uk",
    "featured": true
  },
  {
    "id": "105",
    "slug": "university-of-leicester",
    "name": "University of Leicester",
    "city": "Leicester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Space Science & Aerospace Engineering",
      "Data Analysis & Computer Science",
      "Museum Studies & Media",
      "Finance & Banking",
      "Genetics & Biological Sciences",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£19,500 - £24,500 per year.",
    "scholarshipNote": "Citizens of Change International Scholarship up to £5,000.",
    "overview": "University of Leicester is a globally recognized UK university located in Leicester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://le.ac.uk",
    "featured": false
  },
  {
    "id": "106",
    "slug": "university-of-lincoln",
    "name": "University of Lincoln",
    "city": "Lincoln",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Agri-Food Technology & Robotics",
      "International Business Management",
      "Computer Science & Games Computing",
      "Pharmacy & Pharmaceutical Sciences",
      "Engineering",
      "Journalism"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £18,800 per year.",
    "scholarshipNote": "Lincoln Global Leaders Scholarship up to £4,000.",
    "overview": "University of Lincoln is a globally recognized UK university located in Lincoln, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.lincoln.ac.uk",
    "featured": false
  },
  {
    "id": "107",
    "slug": "university-of-liverpool",
    "name": "University of Liverpool",
    "city": "Liverpool",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Management School (ULMS)",
      "Architecture",
      "Veterinary Science",
      "Computer Science",
      "Engineering",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£20,000 - £28,000 per year.",
    "scholarshipNote": "Vice-Chancellor's International Attainment Scholarship up to £5,000.",
    "overview": "Original redbrick Russell Group university with 9 Nobel Prize laureates, situated in a world-famous cultural and maritime city renowned for music, sport, and welcoming hospitality.",
    "entryRequirements": "AAB to BBB at A-Level; 60%+ in recognized bachelor's degree.",
    "englishRequirements": "IELTS 6.5 overall with 5.5 - 6.0 in each section.",
    "applicationNote": "AACSB, AMBA, and EQUIS triple-accredited Management School.",
    "website": "https://www.liverpool.ac.uk",
    "featured": true
  },
  {
    "id": "108",
    "slug": "university-of-manchester",
    "name": "University of Manchester",
    "city": "Manchester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Engineering",
      "Business & Finance (AMBS)",
      "Computer Science",
      "Physics",
      "Biomedical Sciences",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£22,000 - £32,000 per year depending on lab or classroom based coursework.",
    "scholarshipNote": "Global Futures Scholarships up to £10,000 for outstanding international candidates.",
    "overview": "A member of the Russell Group, Manchester is famous for groundbreaking innovations like graphene and the modern computer. It hosts the UK's largest single-site student community.",
    "entryRequirements": "AAA to ABB at A-Level; Bachelor's degree with 65%+ or 3.2+ CGPA for Master's programmes.",
    "englishRequirements": "IELTS 6.5 - 7.0 with at least 6.0 in each sub-test.",
    "applicationNote": "High graduate employability rating. Apply early through Sage Roots International.",
    "website": "https://www.manchester.ac.uk",
    "featured": true
  },
  {
    "id": "109",
    "slug": "university-of-northampton",
    "name": "University of Northampton",
    "city": "Northampton",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MBA (With Optional Placement)",
      "Project Management",
      "Computing & Data Analytics",
      "Logistics & Supply Chain Management",
      "Public Health",
      "Accounting & Finance"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,200 - £17,000 per year.",
    "scholarshipNote": "International Scholarship up to 30% off tuition fees.",
    "overview": "University of Northampton is a globally recognized UK university located in Northampton, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.northampton.ac.uk",
    "featured": false
  },
  {
    "id": "110",
    "slug": "university-of-nottingham",
    "name": "University of Nottingham",
    "city": "Nottingham",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Pharmacy & Pharmacology",
      "Nottingham University Business School (NUBS)",
      "Law",
      "Engineering",
      "Computer Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£20,500 - £28,000 per year.",
    "scholarshipNote": "Developing Solutions Scholarships providing 50% to 100% tuition waivers for eligible students.",
    "overview": "A pioneer of international education with award-winning 300-acre University Park campus, top-tier pharmacy and life science faculties, and a global alumni network.",
    "entryRequirements": "AAA to BBB at A-Level; 60%+ in recognized bachelor's degree.",
    "englishRequirements": "IELTS 6.0 - 7.0 depending on program tier.",
    "applicationNote": "The Developing Solutions Scholarship is highly targeted toward South Asian and Commonwealth students.",
    "website": "https://www.nottingham.ac.uk",
    "featured": true
  },
  {
    "id": "111",
    "slug": "university-of-plymouth",
    "name": "University of Plymouth",
    "city": "Plymouth",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Marine & Ocean Engineering",
      "Cyber Security & Robotics",
      "International Logistics & Supply Chain",
      "Business & Management",
      "Environmental Science",
      "Data Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,800 - £19,500 per year.",
    "scholarshipNote": "International Academic Excellence Scholarship up to £4,000.",
    "overview": "University of Plymouth is a globally recognized UK university located in Plymouth, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.plymouth.ac.uk",
    "featured": false
  },
  {
    "id": "112",
    "slug": "university-of-portsmouth",
    "name": "University of Portsmouth",
    "city": "Portsmouth",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Cybersecurity & Networking",
      "Business Management",
      "Mechanical Engineering",
      "Pharmacy",
      "Architecture",
      "Logistics"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,200 - £19,200 per year.",
    "scholarshipNote": "Vice-Chancellor's Global Development Scholarship of £1,600 to £3,000.",
    "overview": "A top-ranked modern university located on the sunny south coast of England, Portsmouth is celebrated for career-focused degrees and high student employability.",
    "entryRequirements": "A-Levels or HSC with good grades; 55%+ in undergraduate degree.",
    "englishRequirements": "IELTS 6.0 - 6.5 with at least 5.5 in each component.",
    "applicationNote": "Island city with pleasant climate and vibrant maritime culture.",
    "website": "https://www.port.ac.uk",
    "featured": false
  },
  {
    "id": "113",
    "slug": "university-of-reading",
    "name": "University of Reading",
    "city": "Reading",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Real Estate, Finance & Investment (Henley)",
      "Agriculture & Food Science",
      "Meteorology & Climate Change",
      "Computer Science",
      "International Business",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£20,500 - £27,500 per year.",
    "scholarshipNote": "Henley Business School & Reading Global Scholarship up to £5,000.",
    "overview": "University of Reading is a globally recognized UK university located in Reading, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.reading.ac.uk",
    "featured": false
  },
  {
    "id": "114",
    "slug": "university-of-salford",
    "name": "University of Salford",
    "city": "Manchester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Media & Digital Technologies (MediaCityUK)",
      "Computer Science",
      "Civil Engineering",
      "Business & Finance",
      "Biomedical Sciences"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,700 - £18,500 per year.",
    "scholarshipNote": "Salford International Excellence Award offering £3,000 - £5,000.",
    "overview": "Situated right beside Manchester city centre and featuring an exclusive campus at MediaCityUK next to BBC and ITV, Salford is renowned for hands-on, industry-embedded degrees.",
    "entryRequirements": "A-Levels or HSC 60%+; Bachelor's degree with 50-55%+ for MSc programmes.",
    "englishRequirements": "IELTS 6.0 overall with no band under 5.5.",
    "applicationNote": "Exceptional location for students wishing to live and work in the Greater Manchester area.",
    "website": "https://www.salford.ac.uk",
    "featured": true
  },
  {
    "id": "115",
    "slug": "university-of-sheffield",
    "name": "University of Sheffield",
    "city": "Sheffield",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Advanced Manufacturing",
      "Engineering",
      "Architecture",
      "Management School",
      "Journalism",
      "Biomedicine"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,000 - £28,500 per year.",
    "scholarshipNote": "International Undergraduate & Postgraduate Merit Scholarships of £2,500 to £10,000.",
    "overview": "A world top-100 Russell Group member known for engineering research in collaboration with Boeing and Rolls-Royce, and the UK's #1 voted Students' Union.",
    "entryRequirements": "AAB to BBB at A-Level or recognized foundation; 2:1 or equivalent bachelor's.",
    "englishRequirements": "IELTS 6.5 overall with 6.0 in each section.",
    "applicationNote": "Exceptional student satisfaction and welcoming, cost-effective green city.",
    "website": "https://www.sheffield.ac.uk",
    "featured": true
  },
  {
    "id": "116",
    "slug": "university-of-south-wales",
    "name": "University of South Wales (USW)",
    "city": "Cardiff, Newport & Pontypridd",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Aviation & Aeronautical Engineering",
      "MBA Global",
      "Cyber Security & Computer Forensics",
      "Civil & Mechanical Engineering",
      "Public Health",
      "Supply Chain & Project Management"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,200 - £17,200 per year.",
    "scholarshipNote": "International Development Scholarship up to £2,500.",
    "overview": "University of South Wales (USW) is a globally recognized UK university located in Cardiff, Newport & Pontypridd, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.southwales.ac.uk",
    "featured": false
  },
  {
    "id": "117",
    "slug": "university-of-southampton",
    "name": "University of Southampton",
    "city": "Southampton",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Electronics & Computer Science (ECS)",
      "Marine & Oceanography",
      "Civil Engineering",
      "Business",
      "Health Sciences"
    ],
    "intakes": [
      "September 2025",
      "September 2026"
    ],
    "tuitionFeeNote": "£20,300 - £28,500 per year.",
    "scholarshipNote": "Southampton Presidential International Scholarship and Faculty merit discounts.",
    "overview": "A world top-100 Russell Group university celebrated as a world leader in electronics, computer science, photonics, and maritime engineering.",
    "entryRequirements": "AAA to ABB at A-Level or Foundation equivalent. Good honours degree for MSc.",
    "englishRequirements": "IELTS 6.5 overall with at least 6.0 in each band.",
    "applicationNote": "Consistently rated #1 for engineering, marine sciences, and cybersecurity research in the UK.",
    "website": "https://www.southampton.ac.uk",
    "featured": true
  },
  {
    "id": "118",
    "slug": "university-of-st-andrews",
    "name": "University of St Andrews",
    "city": "St Andrews, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Relations",
      "Computer Science",
      "Economics & Finance",
      "Physics & Astronomy",
      "Management",
      "Sustainable Development"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£24,500 - £30,500 per year.",
    "scholarshipNote": "St Andrews Global Merit & Wardlaw Scholarships.",
    "overview": "University of St Andrews is a globally recognized UK university located in St Andrews, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.st-andrews.ac.uk",
    "featured": false
  },
  {
    "id": "119",
    "slug": "university-of-stirling",
    "name": "University of Stirling",
    "city": "Stirling, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Data Science for Business",
      "Investment Analysis & Finance",
      "Aquaculture & Environmental Science",
      "Sports Management",
      "Media & Communications",
      "Marketing"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£16,500 - £20,900 per year.",
    "scholarshipNote": "Postgraduate & Undergraduate International Merit Award up to £4,000.",
    "overview": "University of Stirling is a globally recognized UK university located in Stirling, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.stir.ac.uk",
    "featured": false
  },
  {
    "id": "120",
    "slug": "university-of-strathclyde",
    "name": "University of Strathclyde",
    "city": "Glasgow",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Strathclyde Business School",
      "Electrical & Mechanical Engineering",
      "FinTech",
      "Pharmacy",
      "Computer Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£18,000 - £25,500 per year.",
    "scholarshipNote": "Faculty Dean's International Excellence Award offering £3,000 - £7,000.",
    "overview": "A leading technological university in the heart of Glasgow, Strathclyde is renowned for triple-accredited business degrees and high-impact engineering research.",
    "entryRequirements": "AAB to BBB at A-Level; 60%+ in Bachelor's degree from recognized university.",
    "englishRequirements": "IELTS 6.5 overall with 5.5 - 6.0 in each band.",
    "applicationNote": "Strathclyde Business School is one of the top business schools in Europe.",
    "website": "https://www.strath.ac.uk",
    "featured": false
  },
  {
    "id": "121",
    "slug": "university-of-suffolk",
    "name": "University of Suffolk",
    "city": "Ipswich & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "International Business & Management",
      "Data Science & AI",
      "Public Health",
      "Cyber Security",
      "Games Development",
      "Regenerative Biomedicine"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,900 - £16,200 per year.",
    "scholarshipNote": "International Merit Scholarship up to £2,000 - £3,000.",
    "overview": "University of Suffolk is a globally recognized UK university located in Ipswich & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uos.ac.uk",
    "featured": false
  },
  {
    "id": "122",
    "slug": "university-of-sunderland",
    "name": "University of Sunderland",
    "city": "Sunderland & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Pharmacy",
      "Nursing",
      "MBA & International Management",
      "Computer Science",
      "Engineering",
      "Tourism & Hospitality"
    ],
    "intakes": [
      "September 2025",
      "November 2025",
      "January 2026",
      "April 2026",
      "June 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,000 - £16,500 per year.",
    "scholarshipNote": "International Scholarship of £1,500 automatically awarded to eligible students.",
    "overview": "With campuses in Sunderland and in Canary Wharf, London, the University of Sunderland is recognized for modern facilities, health sciences, and flexible year-round intakes.",
    "entryRequirements": "HSC or equivalent; Bachelor's degree with 50%+ for master's programs.",
    "englishRequirements": "IELTS 6.0 (minimum 5.5) or Sunderland English language test.",
    "applicationNote": "London campus offers 5+ intakes a year, ideal for international career progression.",
    "website": "https://www.sunderland.ac.uk",
    "featured": false
  },
  {
    "id": "123",
    "slug": "university-of-surrey",
    "name": "University of Surrey",
    "city": "Guildford, Surrey",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Hospitality & Tourism Management (Top Ranked)",
      "5G/6G & Electronic Engineering",
      "Artificial Intelligence",
      "Aerospace Engineering",
      "Business Analytics",
      "Biosciences"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£20,500 - £26,500 per year.",
    "scholarshipNote": "International Excellence Award up to £5,000.",
    "overview": "University of Surrey is a globally recognized UK university located in Guildford, Surrey, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.surrey.ac.uk",
    "featured": false
  },
  {
    "id": "124",
    "slug": "university-of-sussex",
    "name": "University of Sussex",
    "city": "Brighton",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Development Studies (#1 Globally)",
      "Artificial Intelligence & Adaptive Systems",
      "International Business & Innovation",
      "Media & Cultural Studies",
      "Finance",
      "Quantum Technology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£20,500 - £25,500 per year.",
    "scholarshipNote": "Sussex Chancellor's International Scholarship up to £5,000.",
    "overview": "University of Sussex is a globally recognized UK university located in Brighton, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.sussex.ac.uk",
    "featured": false
  },
  {
    "id": "125",
    "slug": "university-of-the-arts-london",
    "name": "University of the Arts London (UAL)",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Fashion Design (Central Saint Martins / LCF)",
      "Graphic Communication Design",
      "Architecture & Spatial Design",
      "Creative Computing",
      "Fine Art",
      "Design Management"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£22,500 - £28,500 per year.",
    "scholarshipNote": "UAL International Postgraduate Scholarship up to £7,000.",
    "overview": "University of the Arts London (UAL) is a globally recognized UK university located in London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.arts.ac.uk",
    "featured": false
  },
  {
    "id": "126",
    "slug": "university-of-highlands-and-islands",
    "name": "University of the Highlands and Islands (UHI)",
    "city": "Inverness, Scotland",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Sustainable Energy & Marine Science",
      "Tourism & Hospitality",
      "Business & Management",
      "Applied Computing",
      "Environmental Science",
      "Public Health"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,500 per year.",
    "scholarshipNote": "International Bursary up to £2,000.",
    "overview": "University of the Highlands and Islands (UHI) is a globally recognized UK university located in Inverness, Scotland, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uhi.ac.uk",
    "featured": false
  },
  {
    "id": "127",
    "slug": "university-of-the-west-of-england",
    "name": "University of the West of England (UWE Bristol)",
    "city": "Bristol",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Aerospace & Robotics Engineering",
      "Architecture & Built Environment",
      "Business Management & MBA",
      "Data Science & Cyber Security",
      "Public Health",
      "Animation & Film"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,850 - £18,000 per year.",
    "scholarshipNote": "Chancellor & Millennium Scholarships up to £4,000.",
    "overview": "University of the West of England (UWE Bristol) is a globally recognized UK university located in Bristol, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uwe.ac.uk",
    "featured": false
  },
  {
    "id": "128",
    "slug": "university-of-the-west-of-scotland",
    "name": "University of the West of Scotland (UWS)",
    "city": "Paisley, Glasgow & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MSc Project Management",
      "Information Technology",
      "MBA & Digital Marketing",
      "Advanced Manufacturing & Engineering",
      "Public Health",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,250 per year.",
    "scholarshipNote": "UWS Global Scholarship up to £2,000 - £3,000.",
    "overview": "University of the West of Scotland (UWS) is a globally recognized UK university located in Paisley, Glasgow & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uws.ac.uk",
    "featured": false
  },
  {
    "id": "129",
    "slug": "university-of-wales-trinity-saint-david",
    "name": "University of Wales Trinity Saint David (UWTSD)",
    "city": "Swansea, Carmarthen & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MBA & International Business",
      "Automotive & Motorsport Engineering",
      "Cloud Computing & Cyber Security",
      "Hospitality & Tourism",
      "Supply Chain Management",
      "Education"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£13,500 - £15,500 per year.",
    "scholarshipNote": "International Bursary up to £2,500.",
    "overview": "University of Wales Trinity Saint David (UWTSD) is a globally recognized UK university located in Swansea, Carmarthen & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.uwtsd.ac.uk",
    "featured": false
  },
  {
    "id": "130",
    "slug": "university-of-warwick",
    "name": "University of Warwick",
    "city": "Coventry",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Warwick Business School (WBS)",
      "Economics",
      "Computer Science",
      "Engineering",
      "Mathematics",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "September 2026"
    ],
    "tuitionFeeNote": "£24,800 - £33,000 per year.",
    "scholarshipNote": "Warwick Undergraduate Global Excellence Scholarship (£2,000 to full tuition discount).",
    "overview": "The University of Warwick is known for world-leading research, its highly rated Warwick Business School (WBS), and exceptionally strong recruitment links with global employers.",
    "entryRequirements": "A*AA to AAB at A-Level; 3.3/4.0 GPA or UK 2:1 equivalent for postgraduate entry.",
    "englishRequirements": "IELTS 6.5 to 7.5 across four tiers depending on faculty.",
    "applicationNote": "Campus-based university with state-of-the-art facilities located near Coventry and Birmingham.",
    "website": "https://warwick.ac.uk",
    "featured": true
  },
  {
    "id": "131",
    "slug": "university-of-west-london",
    "name": "University of West London (UWL)",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Claude Littner Business School",
      "Hospitality & Tourism (London Geller)",
      "Computing & Engineering",
      "Nursing",
      "Music & Media"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,750 - £16,250 per year.",
    "scholarshipNote": "International Ambassador Scholarships worth up to £5,000.",
    "overview": "Recognized as the Career University, UWL boasts high student satisfaction, state-of-the-art Ealing and Brentford campuses, and exceptional employer partnerships in West London.",
    "entryRequirements": "A-Levels or HSC (55%+); Bachelor's degree with 50%+ for Master's courses.",
    "englishRequirements": "IELTS 6.0 overall with no component under 5.5.",
    "applicationNote": "Ranked #1 in London for student positivity in the National Student Survey.",
    "website": "https://www.uwl.ac.uk",
    "featured": false
  },
  {
    "id": "132",
    "slug": "university-of-westminster",
    "name": "University of Westminster",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Architecture & Built Environment",
      "Media & Communication",
      "Business & Marketing",
      "Computer Science",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,000 - £18,000 per year.",
    "scholarshipNote": "Westminster International Postgraduate Scholarships offering partial tuition fees.",
    "overview": "Established in 1838 as Britain's first polytechnic, Westminster boasts historic campuses in prime central London including Regent Street, Marylebone, and Harrow.",
    "entryRequirements": "A-Levels or HSC (60%+); Bachelor's degree with 55%+ from accredited institution.",
    "englishRequirements": "IELTS 6.0 - 6.5 with minimum 5.5 - 6.0 in writing and other components.",
    "applicationNote": "Prime central London locations close to major media headquarters and corporate employers.",
    "website": "https://www.westminster.ac.uk",
    "featured": false
  },
  {
    "id": "133",
    "slug": "university-of-winchester",
    "name": "University of Winchester",
    "city": "Winchester, Hampshire",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Digital Marketing & Analytics",
      "Business Management",
      "Project Management",
      "Computer Science & Cyber Security",
      "Education",
      "Psychology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,500 - £16,900 per year.",
    "scholarshipNote": "International Student Merit Scholarship up to £2,500.",
    "overview": "University of Winchester is a globally recognized UK university located in Winchester, Hampshire, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.winchester.ac.uk",
    "featured": false
  },
  {
    "id": "134",
    "slug": "university-of-wolverhampton",
    "name": "University of Wolverhampton",
    "city": "Wolverhampton",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Civil & Construction Engineering",
      "International Business & MBA",
      "Cyber Security & Computer Science",
      "Public Health & Nursing",
      "Pharmacy",
      "Supply Chain Management"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,950 - £16,500 per year.",
    "scholarshipNote": "Lord Paul Excellence Scholarship up to £2,000 - £3,000.",
    "overview": "University of Wolverhampton is a globally recognized UK university located in Wolverhampton, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.wlv.ac.uk",
    "featured": false
  },
  {
    "id": "135",
    "slug": "university-of-worcester",
    "name": "University of Worcester",
    "city": "Worcester",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Business & Project Management",
      "Computing & IT",
      "Nursing & Healthcare",
      "Education & Leadership",
      "Biological & Environmental Sciences",
      "Psychology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£15,200 - £16,700 per year.",
    "scholarshipNote": "International Merit Scholarship up to £2,500 - £3,000.",
    "overview": "University of Worcester is a globally recognized UK university located in Worcester, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.worcester.ac.uk",
    "featured": false
  },
  {
    "id": "136",
    "slug": "university-of-york",
    "name": "University of York",
    "city": "York",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation",
      "PhD"
    ],
    "subjects": [
      "Computer Science & Cyber Security",
      "Economics",
      "Psychology",
      "Management",
      "Chemistry",
      "Law"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£21,000 - £28,800 per year.",
    "scholarshipNote": "Be Exceptional Scholarships providing up to £7,500 fee discounts.",
    "overview": "A member of the elite Russell Group, York is acclaimed for high-impact research, a supportive collegiate system, and modern lakeside campuses in historic York.",
    "entryRequirements": "AAA to BBB at A-Level; 60%+ in Bachelor's for PG programmes.",
    "englishRequirements": "IELTS 6.5 overall with 6.0 in all components.",
    "applicationNote": "Collegiate system provides immediate community, housing, and social clubs.",
    "website": "https://www.york.ac.uk",
    "featured": true
  },
  {
    "id": "137",
    "slug": "wrexham-university",
    "name": "Wrexham University",
    "city": "Wrexham, Wales",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MBA & Business Management",
      "Computing & Cyber Security",
      "Aeronautical & Mechanical Engineering",
      "Public Health & Wellbeing",
      "Project Management",
      "Creative Arts"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£12,500 - £15,000 per year.",
    "scholarshipNote": "Automatic International Bursary up to £2,000.",
    "overview": "Wrexham University is a globally recognized UK university located in Wrexham, Wales, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://wrexham.ac.uk",
    "featured": false
  },
  {
    "id": "138",
    "slug": "writtle-university-college",
    "name": "Writtle University College (ARU Writtle)",
    "city": "Chelmsford, Essex",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "Sustainable Agriculture",
      "Horticulture & Landscape Design",
      "Animal & Equine Science",
      "Environmental Conservation",
      "Floristry & Design",
      "Sports Science"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,500 - £16,000 per year.",
    "scholarshipNote": "International Agriculture & Animal Science Bursary up to £2,500.",
    "overview": "Writtle University College (ARU Writtle) is a globally recognized UK university located in Chelmsford, Essex, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://writtle.ac.uk",
    "featured": false
  },
  {
    "id": "139",
    "slug": "york-st-john-university",
    "name": "York St John University",
    "city": "York & London",
    "country": "United Kingdom",
    "countryCode": "UK",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "studyLevels": [
      "Undergraduate",
      "Postgraduate",
      "Foundation"
    ],
    "subjects": [
      "MBA & Global Business",
      "Computer Science & Data Science",
      "Project Management",
      "Public Health",
      "Digital Marketing",
      "Psychology"
    ],
    "intakes": [
      "September 2025",
      "January 2026",
      "May 2026",
      "September 2026"
    ],
    "tuitionFeeNote": "£14,000 - £16,500 per year.",
    "scholarshipNote": "International Tuition Fee Discount up to £2,500.",
    "overview": "York St John University is a globally recognized UK university located in York & London, offering career-focused undergraduate and postgraduate degrees with dedicated international student support and post-study career pathways.",
    "entryRequirements": "A-Levels / HSC / International Foundation for Undergraduate; recognized Bachelor's degree (50%–60%+) for Postgraduate Master's admission.",
    "englishRequirements": "IELTS 6.0 overall (minimum 5.5 in each band), PTE Academic, Duolingo, or accepted MOI / internal English test where applicable.",
    "applicationNote": "Fast-track offer letter processing and automatic scholarship assessment available through Sage Roots International.",
    "website": "https://www.yorksj.ac.uk",
    "featured": false
  }
]
