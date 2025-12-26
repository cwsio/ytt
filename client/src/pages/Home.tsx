import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Full height, left-aligned, editorial */}
      <section className="min-h-screen flex flex-col justify-end pb-24 md:pb-32 pt-32 bg-[#0c1420]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-[#c9a227] tracking-[0.3em] text-xs md:text-sm uppercase mb-8 md:mb-12">
              Since 1985
            </p>
            <h1 className="text-white text-5xl md:text-7xl lg:text-[6.5rem] font-serif leading-[0.95] max-w-4xl mb-10 md:mb-14">
              Yeshiva Tiferes Torah
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light max-w-md leading-relaxed">
              Every child matters.<br />
              Every child can grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section - Two column with sticky headline */}
      <section id="about" className="py-32 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-32">
                <p className="text-[#c9a227] tracking-[0.25em] text-xs uppercase mb-6">About Us</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0c1420] leading-[1.1]">
                  Chinuch that<br />feels personal.
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-lg md:text-xl text-[#4a5568] leading-relaxed">
                Yeshiva Tiferes Torah (YTT) is built on one guiding idea: every child matters, and every child can grow.
              </p>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                For 40 years, YTT has been a place where chinuch feels personal. You notice it right away. The warmth, the sincerity, the realness. It's not a slogan. It's the atmosphere. It's the way rebbeim speak to talmidim, the way boys are seen, and the way growth is celebrated.
              </p>
              <div className="border-l-2 border-[#c9a227] pl-8 py-4 my-12">
                <p className="text-2xl md:text-3xl font-serif italic text-[#0c1420] leading-snug">
                  A yeshiva that meets a boy where he is, and helps him become who he can be.
                </p>
              </div>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                What began in 1985 with 21 talmidim has, by 2025, grown to 443 talmidim and 1,300 alumni, all connected by the same foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Dark band with large quote */}
      <section id="philosophy" className="py-32 md:py-48 bg-[#0c1420]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="text-[#c9a227] tracking-[0.25em] text-xs uppercase mb-16 md:mb-24">Our Philosophy</p>
          
          <blockquote className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.15] max-w-5xl mb-20 md:mb-32">
            "YTT exists to educate the Ribono Shel Olam's children with responsibility, care, and clarity."
          </blockquote>
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            <div>
              <p className="text-white/90 text-lg leading-relaxed">
                We don't believe a talmid should have to squeeze into one mold. Our job is to understand the boy in front of us and give him the tools, support, and encouragement to move forward, step by step.
              </p>
            </div>
            <div>
              <p className="text-white/90 text-lg leading-relaxed">
                Growth isn't forced here. It's built through patience, partnership, and genuine belief in each child's potential. Rebbeim, parents, and talmidim work as one team, focused on one mission.
              </p>
            </div>
            <div>
              <p className="text-white/90 text-lg leading-relaxed">
                Helping every boy uncover the greatness within him and develop into a productive ben Torah. The result is a yeshiva defined by simchas haTorah, real connection, and boys who truly love coming to yeshiva each morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section - Large numerals, minimal */}
      <section id="numbers" className="py-32 md:py-48 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="text-[#c9a227] tracking-[0.25em] text-xs uppercase mb-20 md:mb-32">By The Numbers</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-y-0">
            <div className="md:border-r md:border-[#0c1420]/10 md:pr-12">
              <p className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#0c1420] leading-none mb-4">40</p>
              <p className="text-sm text-[#4a5568] tracking-wide">Years of making every child matter</p>
            </div>
            <div className="md:border-r md:border-[#0c1420]/10 md:px-12">
              <p className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#0c1420] leading-none mb-4">21</p>
              <p className="text-sm text-[#4a5568] tracking-wide">Talmidim in 1985</p>
            </div>
            <div className="md:border-r md:border-[#0c1420]/10 md:px-12">
              <p className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#0c1420] leading-none mb-4">443</p>
              <p className="text-sm text-[#4a5568] tracking-wide">Talmidim in 2025</p>
            </div>
            <div className="md:pl-12">
              <p className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#0c1420] leading-none mb-4">1,300</p>
              <p className="text-sm text-[#4a5568] tracking-wide">Alumni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Split layout, typographic */}
      <section id="contact" className="py-32 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[#c9a227] tracking-[0.25em] text-xs uppercase mb-6">Contact Us</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0c1420] leading-[1.1] mb-8">
                Get in touch
              </h2>
              <p className="text-lg text-[#4a5568] leading-relaxed max-w-md">
                We welcome you to reach out and connect with our office.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#4a5568] mb-3">Address</p>
                <p className="text-2xl md:text-3xl font-serif text-[#0c1420]">
                  873 Vine Ave<br />
                  Lakewood, NJ 08701
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#4a5568] mb-3">Telephone</p>
                <p className="text-2xl md:text-3xl font-serif text-[#0c1420]">
                  (732) 370-9889
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
