import Image from 'next/image'
import Link from 'next/link'
import {
  facebookPosts,
  OFFICIAL_FACEBOOK_PAGE_URL,
} from '@/data/facebookPosts'

export default function LatestFacebookPosts() {
  const featuredPosts = facebookPosts.slice(0, 3)

  return (
    <section
      className="py-20 bg-[#F4F9F6] border-t border-emerald-100"
      aria-labelledby="home-fb-posts-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-magenta bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-3">
              Official Social Media &amp; SEO Feed
            </span>
            <h2
              id="home-fb-posts-heading"
              className="text-3xl sm:text-4xl font-black text-[#06241B] leading-tight"
            >
              Latest Facebook Page Posts &amp; UK Admissions Alerts
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Explore our official Facebook page announcements with original graphic posters, complete captions, MOI university updates, and UKVI visa success stories.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a
              href={OFFICIAL_FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#073224] border border-emerald-200 text-xs sm:text-sm font-bold transition-colors"
            >
              Official Facebook Page
            </a>
            <Link
              href="/posts"
              className="px-6 py-3 rounded-xl bg-[#073224] hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
            >
              View All {facebookPosts.length} Facebook Posts
            </Link>
          </div>
        </div>

        {/* 3 Showcase Posts with Full Original Facebook Posters & Captions */}
        <div className="space-y-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Top Official Facebook Page Bar */}
              <div className="bg-[#06241B] text-white px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-amber-400/70 flex-shrink-0">
                    <Image
                      src="/images/sri-logo.jpg"
                      alt="Sage Roots International"
                      fill
                      className="object-cover scale-[1.04]"
                      sizes="36px"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block leading-tight">
                      Sage Roots International — Official Facebook Post
                    </span>
                    <span className="text-[11px] text-white/60">
                      Published {post.displayDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {post.category}
                  </span>
                  <a
                    href={post.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Facebook Link
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Full Uncropped Official Facebook Poster */}
                <div className="lg:col-span-5 bg-[#042017] p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-emerald-100">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="block rounded-2xl overflow-hidden bg-white shadow-lg border border-white/15 group"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1080}
                      height={1200}
                      className="w-full h-auto object-contain group-hover:scale-[1.015] transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </Link>

                  <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-white/15">
                    {post.posterStats.map((st) => (
                      <div
                        key={st.label}
                        className="bg-white/5 border border-white/10 rounded-xl p-2.5"
                      >
                        <span className="block text-[10px] uppercase tracking-wider text-white/60 font-semibold">
                          {st.label}
                        </span>
                        <span className="block text-xs font-black text-amber-300 mt-0.5">
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Full Caption */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#06241B] leading-snug mb-4">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="hover:text-brand-magenta transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <p className="font-bold text-[#073224]">
                        {post.captionLead}
                      </p>
                      {post.captionBody.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-5 bg-[#F4F9F6] border border-emerald-100 rounded-xl p-4">
                      <ul className="space-y-1.5">
                        {post.keyHighlights.slice(0, 3).map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-gray-800 font-medium pl-3 border-l-2 border-emerald-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2.5">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="px-4 py-2 rounded-xl bg-[#073224] hover:bg-emerald-950 text-white text-xs font-bold transition-colors"
                      >
                        Read Full Post &amp; Details
                      </Link>
                      <a
                        href={`https://wa.me/447776181483?text=${encodeURIComponent(
                          `Hello Sage Roots International! I saw your Facebook post "${post.title}" and would like to enquire.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-brand-magenta hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                      >
                        Enquire on WhatsApp
                      </a>
                    </div>

                    <Link
                      href="/posts"
                      className="text-xs font-bold text-[#073224] hover:text-brand-magenta underline underline-offset-4"
                    >
                      See All {facebookPosts.length} Posts
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
