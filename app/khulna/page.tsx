import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  MapPin,
  PhoneCall,
  MessageCircle,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileCheck2,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Best UK & Abroad Student Visa Consultancy in Khulna | Sage Roots International',
  description:
    'Looking for the best UK & abroad student visa consultancy in Khulna? Sage Roots International provides 100% free counseling, IELTS/MOI admissions to 50+ UK universities, up to £10,000 scholarships, and 100% London part-time job support for students from Khulna, KU, KUET, and BL College.',
  keywords: [
    'best student consultancy in khulna',
    'uk student visa consultancy in khulna',
    'study abroad consultancy in khulna',
    'education consultancy in khulna',
    'khulna to uk student visa',
    'ielts waiver uk admission khulna',
    'study in uk from khulna bangladesh',
    'kuet higher study uk',
    'khulna university study abroad consultancy',
    'bl college daulatpur study abroad',
    'sage roots international khulna',
    'best abroad consultancy in khulna city',
    'খুলনায় সেরা ইউকে স্টুডেন্ট ভিসা কনসালটেন্সি',
    'খুলনা স্টুডেন্ট কনসালটেন্সি',
  ],
  alternates: {
    canonical: '/khulna',
  },
  openGraph: {
    title: 'Best UK & Abroad Student Visa Consultancy in Khulna | Sage Roots International',
    description:
      'Official London-headquartered UK admissions consultancy dedicated to Khulna students. 100% free file processing, £0 agency fee, CAS deposit from £3,000, and London job support.',
    url: 'https://www.sagerootsinternational.co.uk/khulna',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Khulna Desk',
      },
    ],
  },
}

const khulnaSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/khulna#localbusiness',
      name: 'Sage Roots International - Khulna Support Desk',
      alternateName: 'Sage Roots International Education Consultancy Khulna',
      url: 'https://www.sagerootsinternational.co.uk/khulna',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'The #1 trusted UK and abroad higher education consultancy serving students across Khulna, KUET, Khulna University, and BL College. 100% free processing, UKVI visa guidance, and Stratford London job support.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free Counseling & Admission)',
      currenciesAccepted: 'GBP, BDT',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Khulna',
        addressRegion: 'Khulna Division',
        addressCountry: 'BD',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.8456,
        longitude: 89.5403,
      },
      areaServed: [
        { '@type': 'City', name: 'Khulna' },
        { '@type': 'AdministrativeArea', name: 'Khulna Division' },
        { '@type': 'Country', name: 'Bangladesh' },
      ],
      sameAs: [
        'https://www.facebook.com/SageRootsInternation',
        'https://www.instagram.com/sagerootsinternational/',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/khulna#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is Sage Roots International the best UK student consultancy for Khulna students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sage Roots International is headquartered in Stratford, London (44 Broadway, E15 1XH) with a dedicated support desk for Khulna students. Unlike local middleman agents, we charge £0 agency fee (100% free service), represent 50+ UK universities directly, and provide 100% part-time job placement support once you land in the UK.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Khulna University, KUET, or BL College graduates apply to the UK without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! If your bachelor degree was taught in English, you can apply using an English Medium of Instruction (MOI) certificate without retaking IELTS at top partner universities including BPP University, Ulster University, and others.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do students from Khulna start their application with Sage Roots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Khulna students can submit their details through our online consultation form or message our WhatsApp desk at +44 7776 181483. Our UK-based senior counselors will assess your academic documents for free within 24 hours.',
          },
        },
      ],
    },
  ],
}

const keyFeatures = [
  {
    icon: ShieldCheck,
    title: '£0 Agency Processing Fee',
    desc: 'খুলনার শিক্ষার্থীদের জন্য ফাইল ওপেনিং এবং ইউনিভার্সিটি প্রসেসিং সম্পূর্ণ ফ্রি। কোনো হিডেন চার্জ নেই।',
  },
  {
    icon: Building2,
    title: 'লন্ডন হেড অফিস থেকে সরাসরি সাপোর্ট',
    desc: 'আমাদের প্রধান অফিস লন্ডনের স্ট্র্যাটফোর্ডে (Stratford, London)। আপনি সরাসরি ইউকে-ভিত্তিক আসল প্রতিনিধির সাথে কাজ করবেন।',
  },
  {
    icon: Briefcase,
    title: '১০০% পার্ট-টাইম জব নিশ্চয়তা',
    desc: 'ইউকে পৌঁছানোর সাথে সাথে লন্ডনের স্ট্র্যাটফোর্ড অফিস থেকে পার্ট-টাইম কাজ ও ক্যারিয়ার ট্রেনিং দেওয়া হয়।',
  },
  {
    icon: Award,
    title: 'আপ টু £10,000 স্কলারশিপ',
    desc: 'মেধা ও ব্যাকগ্রাউন্ড অনুযায়ী যুক্তরাজ্যের শীর্ষ ইউনিভার্সিটিতে আকর্ষণীয় স্কলারশিপ পাওয়ার সুযোগ।',
  },
  {
    icon: FileCheck2,
    title: 'IELTS ছাড়া MOI সুবিধা',
    desc: 'খুলনা বিশ্ববিদ্যালয়, কুয়েট বা অন্যান্য স্বীকৃত প্রতিষ্ঠান থেকে পাস করা শিক্ষার্থীরা MOI দিয়ে আবেদন করতে পারবেন।',
  },
  {
    icon: Clock,
    title: 'দ্রুত অফার লেটার ও CAS ডেলিভারি',
    desc: 'জানুয়ারি ও সেপ্টেম্বর ইনটেকের জন্য ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডকুমেন্ট অ্যাসেসমেন্ট ও দ্রুত অ্যাডমিশন।',
  },
]

const targetColleges = [
  'Khulna University (KU)',
  'Khulna University of Engineering & Technology (KUET)',
  'Govt. Brajalal (BL) College, Daulatpur',
  'Govt. Majid Memorial City College',
  'Northern University of Business & Technology Khulna',
  'Khulna Govt. Girls College',
  'North Western University, Khulna',
  'Sheikh Burhanuddin & Khulna Region Colleges',
]

const popularPathways = [
  {
    title: 'BPP University (London / Birmingham)',
    fee: 'Tuition from £12,500 • CAS Deposit £3,000',
    desc: '2nd Master’s pathway with reduced tuition and post-study work visa support.',
    href: '/posts/bpp-university-second-masters-in-uk-psw-ending-tuition-fee-reduced',
  },
  {
    title: 'Ulster University (London & Birmingham)',
    fee: 'Tuition from £10,625 • Up to 5 Years Study Gap Accepted',
    desc: 'Popular among Khulna graduates for MBA, Data Science, and Computing programs.',
    href: '/posts/study-in-ulster-university-january-2027-intake-tuition-10625',
  },
  {
    title: 'Cyprus & Malta European Pathways',
    fee: 'Affordable Tuition • Schengen & EU Opportunities',
    desc: 'Ideal low-cost alternative study destinations with high visa success rate.',
    href: '/destinations',
  },
]

const faqs = [
  {
    q: 'খুলনায় সেজ রুটস ইন্টারন্যাশনাল কীভাবে সার্ভিস প্রদান করে?',
    a: 'খুলনার শিক্ষার্থীদের সুবিধার জন্য আমাদের রয়েছে ডেডিকেটেড অনলাইন ও সরাসরি হোয়াটসঅ্যাপ সাপোর্ট ডেস্ক। আপনার সব ডকুমেন্টস অনলাইনেই স্ক্যান করে পাঠাতে পারেন। আমাদের লন্ডনের অভিজ্ঞ কাউন্সিলররা সরাসরি আপনার ফাইল হ্যান্ডেল করবেন এবং যুক্তরাজ্যের ইউনিভার্সিটির সাথে যোগাযোগ করে দ্রুত অফার লেটার এনে দেবেন।',
  },
  {
    q: 'আমি কি IELTS ছাড়া খুলনা থেকে UK-তে আবেদন করতে পারব?',
    a: 'হ্যাঁ, অবশ্যই! আপনার পূর্ববর্তী ডিগ্রি যদি ইংরেজিতে সম্পন্ন হয়ে থাকে (Medium of Instruction - MOI), তবে যুক্তরাজ্যের অনেক নামকরা পার্টনার ইউনিভার্সিটিতে IELTS ছাড়াই সরাসরি অ্যাডমিশন ও ক্যাশ (CAS) পাওয়া সম্ভব। এছাড়া IELTS 5.5 বা Duolingo স্কোর নিয়েও আবেদন করা যায়।',
  },
  {
    q: 'লন্ডনে পৌঁছানোর পর পার্ট-টাইম জবের ক্ষেত্রে কীভাবে সাপোর্ট পাব?',
    a: 'লন্ডনের স্ট্র্যাটফোর্ডে (44 Broadway, Stratford, London E15 1XH) আমাদের নিজস্ব হেড অফিস রয়েছে। খুলনার শিক্ষার্থীরা যখন ইউকে পৌঁছায়, আমাদের টিম তাদের এনআই (NI Number), ব্যাংক অ্যাকাউন্ট খোলা, সিভি ফরম্যাটিং এবং কেয়ার/হসপিটালিটি সেক্টরে ১০০% পার্ট-টাইম কাজের ব্যবস্থা করতে সরাসরি সাহায্য করে।',
  },
  {
    q: 'ব্যাংক স্টেটমেন্ট ও ভিসা ইন্টারভিউয়ের জন্য কি গাইডলাইন দেওয়া হয়?',
    a: 'হ্যাঁ। UKVI-এর রুলস অনুযায়ী ২৮ দিনের ব্যাংক স্টেটমেন্ট কীভাবে ক্যালকুলেট করতে হয় (আমাদের ওয়েবসাইটে ফ্রি ব্যাংক ক্যালকুলেটরও আছে) এবং ইউনিভার্সিটির Pre-CAS ও অ্যাম্বাসি ইন্টারভিউতে কী কী প্রশ্ন করা হয়, তার জন্য আমরা ওয়ান-টু-ওয়ান স্পেশাল মক ইন্টারভিউ প্রস্তুতি করাই।',
  },
]

export default function KhulnaPage() {
  return (
    <div className="bg-[#FAFDFB]">
      {/* Inject Local Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(khulnaSchemaJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-emerald-400" />
            খুলনার শিক্ষার্থীদের জন্য বিশ্বমানের ইউকে উচ্চশিক্ষা কনসালটেন্সি
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Best UK &amp; Abroad Student Consultancy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Khulna
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            খুলনা বিশ্ববিদ্যালয় (KU), কুয়েট (KUET), বি এল কলেজসহ খুলনার সকল শিক্ষার্থীদের জন্য <strong>লন্ডন হেড অফিস</strong> পরিচালিত <strong>১০০% ফ্রি</strong> অ্যাডমিশন, আপ টু £10,000 স্কলারশিপ, IELTS/MOI সুবিধা ও লন্ডনে পৌঁছানোর পর ১০০% পার্ট-টাইম জব নিশ্চয়তা।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#consultation"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              বিনামূল্যে ফাইল অ্যাসেসমেন্ট বুক করুন
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20a%20student%20from%20Khulna%20interested%20in%20UK%20study%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              খুলনা হেল্পডেস্ক WhatsApp
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Service Fee', value: '£0 / ফ্রি', desc: 'কোনো গোপন বা ফাইল চার্জ নেই' },
              { label: 'Partner Universities', value: '50+ UK', desc: 'শীর্ষস্থানীয় ব্রিটিশ বিশ্ববিদ্যালয়' },
              { label: 'Scholarship Amount', value: 'Up to £10k', desc: 'মেধার ভিত্তিতে স্কলারশিপ' },
              { label: 'London Job Support', value: '100% Guaranteed', desc: 'লন্ডন অফিসে জব সহায়তা' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl font-black text-emerald-300 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{stat.label}</div>
                <div className="text-[11px] text-white/60">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sage Roots for Khulna Students */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2">
            The #1 Trusted Choice in Khulna
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            খুলনার শিক্ষার্থীরা কেন সেজ রুটস ইন্টারন্যাশনাল বেছে নেয়?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            সাধারণ দালালি ও লোকাল এজেন্সির প্রতারণা এড়িয়ে সরাসরি যুক্তরাজ্যের রেজিস্টার্ড হেড অফিসের মাধ্যমে সম্পূর্ণ নিরাপদে আবেদন করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#073224] flex items-center justify-center mb-5 ring-1 ring-emerald-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#06241B] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Target Institutions in Khulna */}
      <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Dedicated Support Across Khulna Division
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              খুলনার সকল শীর্ষ শিক্ষা প্রতিষ্ঠানের শিক্ষার্থীদের জন্য উন্মুক্ত
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {targetColleges.map((col, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8FAF9] border border-emerald-100/80 flex items-center gap-3 text-sm font-semibold text-[#06241B]"
              >
                <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>{col}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs sm:text-sm text-gray-500">
            এছাড়াও যশোর, সাতক্ষীরা, বাগেরহাট ও সমগ্র খুলনা বিভাগের শিক্ষার্থীরা সরাসরি আমাদের সার্ভিস পাচ্ছেন।
          </div>
        </div>
      </section>

      {/* Popular Study Pathways for Bangladeshi Students */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2">
            Top University Admissions
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            খুলনার শিক্ষার্থীদের জন্য জনপ্রিয় কোর্স ও বিশ্ববিদ্যালয়সমূহ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularPathways.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold mb-3">
                  {item.fee}
                </span>
                <h3 className="text-lg font-bold text-[#06241B] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Job Guarantee Highlight in London */}
      <section className="py-16 bg-[#073224] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full px-3.5 py-1 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Exclusive Student Welfare Program
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              ইউকে পৌঁছানোর পর লন্ডনে পার্ট-টাইম জব সাপোর্ট
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              অনেকেই বিদেশে গিয়ে কাজ না পেয়ে দিশেহারা হয়ে পড়ে। আমাদের স্ট্র্যাটফোর্ড অফিস খুলনার প্রত্যেক শিক্ষার্থীকে ইউকে পৌঁছানোর পরপরই ন্যাশনাল ইন্স্যুরেন্স (NIN), সিভি অপটিমাইজেশন ও বিশ্বস্ত পার্ট-টাইম কর্মসংস্থানের ব্যবস্থা করে দেয়।
            </p>
          </div>
          <a
            href="https://wa.me/447776181483"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#073224] hover:bg-emerald-50 font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg whitespace-nowrap transition"
          >
            লন্ডন টিমের সাথে কথা বলুন
          </a>
        </div>
      </section>

      {/* Frequently Asked Questions (Khulna Local SEO FAQs) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-1">Got Questions?</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            খুলনার শিক্ষার্থীদের সাধারণ প্রশ্নোত্তর (FAQs)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm"
            >
              <h3 className="text-base font-bold text-[#06241B] flex items-start gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Form for Khulna */}
      <section id="consultation" className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Fast Track Application
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            খুলনা থেকে ফ্রি ফাইল প্রসেসিং শুরু করুন
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            নিচের ফর্মে আপনার তথ্য দিন — আমাদের এক্সপার্ট টিম ২৪ ঘণ্টার মধ্যে সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করবে।
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
