import { Section, SectionHeader } from "@/components/Section";
import { MapPin, Phone, Users, GraduationCap, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-navy/80 z-10" />
        
        {/* Abstract Background - Replacing stock image with gradient/pattern for clean look */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy via-[#1a2333] to-[#0f172a]" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium">
              EST. 1985
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
              Yeshiva Tiferes Torah
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Every child matters.<br/>Every child can grow.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* About Us */}
      <Section id="about">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-4 lg:col-span-5 relative">
            <div className="sticky top-32">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gold mb-2">Who We Are</h2>
              <h3 className="text-4xl lg:text-5xl font-serif text-navy leading-tight">
                Chinuch that feels personal.
              </h3>
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Yeshiva Tiferes Torah (YTT) is built on one guiding idea: every child matters, and every child can grow.
            </p>
            <p>
              For 40 years, YTT has been a place where chinuch feels personal. You notice it right away. The warmth, the sincerity, the realness. It’s not a slogan. It’s the atmosphere. It’s the way rebbeim speak to talmidim, the way boys are seen, and the way growth is celebrated.
            </p>
            <p>
              What began in 1985 with 21 talmidim has, by 2025, grown to 443 talmidim and 1,300 alumni, all connected by the same foundation: a yeshiva that meets a boy where he is, and helps him become who he can be.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section id="philosophy" dark className="relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <SectionHeader title="The Yeshiva's Philosophy" centered />
          <p className="text-2xl font-serif text-white/90 italic leading-relaxed">
            "YTT exists to educate the Ribono Shel Olam’s children with responsibility, care, and clarity."
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <h4 className="text-xl font-bold text-gold mb-4">Individual Growth</h4>
            <p className="text-white/80 leading-relaxed">
              We don’t believe a talmid should have to squeeze into one mold. Our job is to understand the boy in front of us and give him the tools, support, and encouragement to move forward, step by step.
            </p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <h4 className="text-xl font-bold text-gold mb-4">Genuine Partnership</h4>
            <p className="text-white/80 leading-relaxed">
              Growth isn’t forced here. It’s built through patience, partnership, and genuine belief in each child’s potential. Rebbeim, parents, and talmidim work as one team.
            </p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <h4 className="text-xl font-bold text-gold mb-4">True Connection</h4>
            <p className="text-white/80 leading-relaxed">
              The result is a yeshiva defined by simchas haTorah, real connection, and boys who truly love coming to yeshiva each morning.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats / Numbers */}
      <Section id="numbers" className="bg-slate-50">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <Clock className="w-10 h-10 mx-auto text-gold mb-4" />
            <div className="text-4xl md:text-5xl font-serif font-bold text-navy mb-2">40</div>
            <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Years of Excellence</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <Users className="w-10 h-10 mx-auto text-gold mb-4" />
            <div className="text-4xl md:text-5xl font-serif font-bold text-navy mb-2">21</div>
            <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Talmidim in 1985</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <GraduationCap className="w-10 h-10 mx-auto text-gold mb-4" />
            <div className="text-4xl md:text-5xl font-serif font-bold text-navy mb-2">443</div>
            <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Talmidim in 2025</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <Calendar className="w-10 h-10 mx-auto text-gold mb-4" />
            <div className="text-4xl md:text-5xl font-serif font-bold text-navy mb-2">1,300+</div>
            <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Alumni Connected</div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto bg-navy text-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">Contact Us</h2>
            <p className="text-white/70 mb-10 text-lg">
              We welcome you to reach out and connect with our office.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mt-1 shrink-0 mr-4" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Address</h4>
                  <p className="text-white/80">873 Vine Ave<br />Lakewood, NJ 08701</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mt-1 shrink-0 mr-4" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-white/80 text-xl font-medium">(732) 370-9889</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative side - simplified map representation */}
          <div className="md:w-1/2 bg-[#1a2333] relative h-64 md:h-auto overflow-hidden flex items-center justify-center">
            {/* Using a placeholder visual since we don't need a real map embed per requirements */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center mix-blend-overlay"></div>
            
            {/* This is a decorative element instead of an interactive map */}
            <div className="text-center p-8 relative z-10">
              <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif">Visit YTT</h3>
              <p className="text-sm text-white/60 mt-2">Vine Ave, Lakewood</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
