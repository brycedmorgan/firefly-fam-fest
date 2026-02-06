'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Clock, Ticket, X, ChevronDown, Check } from 'lucide-react';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Firefly Fam Fest"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-base font-semibold transition-colors hover:text-cyan-400 ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>About</a>
            <a href="#attractions" className={`text-base font-semibold transition-colors hover:text-cyan-400 ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>Attractions</a>
            <a href="#faq" className={`text-base font-semibold transition-colors hover:text-cyan-400 ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>FAQ</a>
            <a href="#register" className={`text-base font-semibold transition-colors hover:text-cyan-400 ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>Register</a>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            Register Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-aerial.jpg"
            alt="Firefly Community Aerial View"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90" />
        <div className="absolute inset-0 confetti-heavy opacity-40" />
        
        {/* Animated falling confetti - MORE! */}
        <div className="confetti-animated">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="confetti-piece" />
          ))}
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 leading-tight">
                Utah's Premier<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-cyan-400">
                  Festival for Families
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-xl leading-relaxed">
                An unforgettable day of wonder, play, and togetherness at Eagle Mountain's newest community.
              </p>
              
              {/* BIG Date & Time */}
              <div className="mb-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
                <p className="text-2xl md:text-4xl font-bold text-white mb-2">Saturday, May 9, 2026</p>
                <p className="text-xl md:text-3xl font-semibold text-amber-400">11 AM – 8 PM</p>
                <p className="text-lg md:text-xl text-white/80 mt-2">📍 Eagle Mountain, Utah</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button 
              onClick={() => setShowModal(true)}
              className="group bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 flex items-center justify-center gap-2"
            >
              <Ticket className="w-5 h-5" />
              Register Free
            </button>
            <a 
              href="#attractions"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Explore Activities
            </a>
              </div>
            </div>
            
            {/* Right side - BIG Logo */}
            <div className="hidden lg:flex justify-center items-center">
              <Image
                src="/images/logo.png"
                alt="Firefly Fam Fest"
                width={600}
                height={660}
                className="w-full max-w-lg h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* Why Register Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 confetti-medium opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm tracking-wide uppercase">Free Registration</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mt-3 mb-6">
                Skip the Lines.<br />Get the Perks.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Walk-ins are welcome, but registered families get exclusive benefits that make the day even better.
              </p>
              
              <div className="space-y-4">
                {[
                  '5 free activity tickets (bounce houses, train, crafts)',
                  '🎨 Craft punch pass — visit every station, enter to win a FAMILY GETAWAY!',
                  '🚚 Touch-a-Truck punch card — explore all vehicles, win GIANT TONKA TRUCKS!',
                  'Priority entry — skip the registration line'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setShowModal(true)}
                className="mt-10 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Register Your Family
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 p-8">
                <div className="w-full h-full rounded-2xl bg-white shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎟️</div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">Your Free Pass</p>
                    <p className="text-gray-500">5 Activity Tickets + Perks</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 confetti-light opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm tracking-wide uppercase">All-Day Entertainment</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mt-3 mb-4">
              Something for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From toddlers to grandparents, we've planned a full day of unforgettable experiences.
            </p>
          </div>

          {/* Alternating Feature Sections */}
          <div className="space-y-24">
            
            {/* Screen Free Fun / Bounce Houses */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 scroll-reveal-left">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4">
                  Requires Activity Ticket
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-serif mb-4">
                  Utah's Largest Bounce Village
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  An entire inflatable playground featuring massive slides, obstacle courses, and bounce houses for all ages. This action-packed zone will keep kids jumping with joy all day.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Giant slides & obstacle courses</li>
                  <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Age-appropriate zones</li>
                  <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Shaded rest areas for parents</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 scroll-reveal-right">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                  <video
                    src="/images/bounce-village.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Tiny Town */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal-left">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                  <Image
                    src="/images/tiny-town.png"
                    alt="Tiny Town toddler zone"
                    fill
                    className="object-cover ken-burns group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="scroll-reveal-right">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full mb-4">
                  Requires Activity Ticket
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-serif mb-4">
                  Tiny Town — Ages 2-4
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A dedicated soft-play zone designed just for your littlest ones. Featuring mini bounce houses, a giant corn box, and a Tonka truck sandbox — safe, shaded, and perfectly sized.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-purple-500">•</span> Soft, safe play structures</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">•</span> Sensory sandbox play</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">•</span> Fully shaded & enclosed</li>
                </ul>
              </div>
            </div>

            {/* Food Trucks */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 scroll-reveal-left">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full mb-4">
                  Open to All
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-serif mb-4">
                  The Munchyard Food Village
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Fuel your fun at our outdoor food truck roundup, offering a tasty mix of savory meals and sweet desserts. Whether you're craving BBQ, tacos, or gourmet treats, there's something for every appetite.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-green-500">•</span> 10+ local food trucks</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">•</span> Shaded seating areas</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">•</span> Sweet treats & desserts</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 scroll-reveal-right">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                  <video
                    src="/images/food-trucks.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Live Entertainment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal-left">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                  <Image
                    src="/images/entertainment.png"
                    alt="Live entertainment and performers"
                    fill
                    className="object-cover ken-burns group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="scroll-reveal-right">
                <div className="inline-block px-3 py-1 bg-violet-100 text-violet-600 text-sm font-medium rounded-full mb-4">
                  Free — Open to All
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-serif mb-4">
                  Live Shows All Day
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Non-stop family entertainment all day on our main stage. From dazzling magic shows to incredible acrobats and jugglers, there's always something amazing happening.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-violet-500">•</span> Magic shows & acrobatic performers</li>
                  <li className="flex items-center gap-2"><span className="text-violet-500">•</span> Professional jugglers & stilt walkers</li>
                  <li className="flex items-center gap-2"><span className="text-violet-500">•</span> Reptile & exotic animal encounters</li>
                  <li className="flex items-center gap-2"><span className="text-violet-500">•</span> Live music & family singalongs</li>
                </ul>
              </div>
            </div>

            {/* Creation Stations */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 scroll-reveal-left">
                <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-4">
                  Requires Activity Ticket
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-serif mb-4">
                  Creation Stations
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Let creativity soar at our hands-on craft zones! Kids can build, design, and take home their own masterpieces. Complete your craft punch pass for a chance to win a family getaway!
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-pink-500">•</span> Sky High Flyers — design your own kite</li>
                  <li className="flex items-center gap-2"><span className="text-pink-500">•</span> Glow & Go Streamers — colorful ribbon wands</li>
                  <li className="flex items-center gap-2"><span className="text-pink-500">•</span> Breeze Catchers — wind-spinning windsocks</li>
                  <li className="flex items-center gap-2"><span className="text-pink-500">•</span> Hat-tastic Creations — decorate your own hat</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 scroll-reveal-right">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                  <Image
                    src="/images/crafts-for-kids.png"
                    alt="Kids creation stations and crafts"
                    fill
                    className="object-cover ken-burns group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grand Opening Ceremony */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 confetti-medium opacity-30" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-amber-400/20 rounded-full mb-6">
              <span className="text-amber-600 font-semibold text-sm tracking-wide uppercase">✨ Special Event</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-6">
              Grand Opening Ceremony
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join us as we officially open the Firefly community with a special ribbon-cutting, 
                remarks from local leaders, and a sneak peek into the future of Active Family living at Firefly.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">✂️</div>
                    <h3 className="font-bold text-gray-900 mb-1">Ribbon Cutting</h3>
                    <p className="text-gray-600 text-sm">Official community opening</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎤</div>
                    <h3 className="font-bold text-gray-900 mb-1">Local Leaders</h3>
                    <p className="text-gray-600 text-sm">Special remarks & welcome</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🏡</div>
                    <h3 className="font-bold text-gray-900 mb-1">Sneak Peek</h3>
                    <p className="text-gray-600 text-sm">Future of Active Family living</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Activities Grid */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 confetti-light opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
              Plus So Much More
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: '/images/face-painting.mp4', title: 'Face Painting', desc: 'Professional artists, endless designs', tag: 'Ticket', isVideo: true, wordOverlay: '/images/word-face-painting.png' },
              { image: '/images/balloon-art.png', title: 'Balloon Artists', desc: 'Custom creations for every kid', tag: 'Ticket' },
              { image: '/images/performers.png', title: 'Character Meet & Greet', desc: 'Elsa, Anna, Belle, Spiderman, Mario, Bluey & more!', tag: 'Free' },
              { image: '/images/train-rides.jpg', title: '🚂 Firefly Express', desc: 'Trackless train ride through the festival grounds', tag: 'Ticket' },
              { image: '/images/fire-truck.mp4', title: '🚒 Big Truck Corral', desc: 'Touch-a-Truck zone + punch card for Giant Tonka raffle!', tag: 'Free', isVideo: true, wordOverlay: '/images/word-touch-a-truck.png' },
              { image: '/images/music-singalongs.png', title: 'Music & Singalongs', desc: 'Family-friendly tunes all day', tag: 'Free' },
              { image: '/images/prizes-raffles.png', title: '🏆 Grand Prizes', desc: 'Craft pass → Family Getaway! Truck pass → Giant Tonka Set!', tag: 'Free' },
              { image: '/images/crafts-for-kids.png', title: 'Punch Card Fun', desc: 'Complete activities to enter prize drawings!', tag: 'Free' },
            ].map((item, i) => (
              <div key={i} className={`scroll-reveal stagger-${i + 1} bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  {item.isVideo ? (
                    <video
                      src={item.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {item.wordOverlay && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={item.wordOverlay}
                        alt=""
                        width={200}
                        height={100}
                        className="w-3/4 h-auto drop-shadow-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.tag === 'Free' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {item.tag === 'Free' ? '✓ Free' : '🎟️ Ticket'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Map Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 confetti-light opacity-15" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm tracking-wide uppercase">Plan Your Day</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mt-3 mb-4">
              Festival Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your way around — from bounce houses to food trucks, we've got it all mapped out.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="/images/event-map.jpg"
              alt="Firefly Fam Fest Event Map"
              width={1400}
              height={1000}
              className="w-full h-auto"
            />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500"></div>
              <span className="text-gray-600">Activities</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-600"></div>
              <span className="text-gray-600">Food & Dining</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500"></div>
              <span className="text-gray-600">Vendor Areas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-400"></div>
              <span className="text-gray-600">Entertainment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-emerald-600"></div>
              <span className="text-gray-600">Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-pink-400"></div>
              <span className="text-gray-600">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Darker Navy */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '8+', label: 'Hours of Fun' },
              { num: '20+', label: 'Activities' },
              { num: '10+', label: 'Food Trucks' },
              { num: '1000s', label: 'Expected Guests' },
            ].map((stat, i) => (
              <div key={i} className="scroll-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.num}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="register" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated confetti */}
        <div className="confetti-animated">
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
        </div>
        <div className="absolute inset-0 confetti-heavy opacity-25" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Ready for the Best Day Ever?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Register now to secure your free activity tickets, exclusive coupons, and priority entry. It only takes 30 seconds.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25"
          >
            Register Free Now
          </button>
          <p className="mt-6 text-white/50 text-sm">
            Saturday, May 9, 2026 • 11 AM – 8 PM • Eagle Mountain, Utah
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 confetti-light opacity-15" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm tracking-wide uppercase">Questions?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know before you go!
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is the event free to attend?',
                a: 'Yes! General admission is free — anyone can walk through the gates, tour model homes, visit vendor areas, watch main stage entertainment, buy from food trucks, and take photos with roaming characters.'
              },
              {
                q: 'What do I get if I register?',
                a: 'Registered guests receive: 5 FREE activity tickets (for bounce houses, train rides, face painting, crafts), a craft station punch card (complete all stations to enter the Family Getaway raffle!), a Touch-a-Truck punch card (visit all vehicles to win Giant Tonka Trucks!), free treat coupons, and priority entry.'
              },
              {
                q: 'Can I buy more activity tickets?',
                a: 'Yes! Additional activity tickets are available for just $1 each at the event. This helps with line control at our most popular attractions.'
              },
              {
                q: 'What activities require tickets?',
                a: 'Bounce houses, Tiny Town toddler zone, face painting, balloon artists, the Firefly Express trackless train, and craft stations all require activity tickets. The main stage entertainment, Touch-a-Truck zone, food trucks, and vendor areas are free for everyone!'
              },
              {
                q: 'Where is the event located?',
                a: 'Firefly Fam Fest is held at the Firefly Community in Eagle Mountain, Utah. Full address and parking directions will be sent to registered attendees.'
              },
              {
                q: 'What time does it start and end?',
                a: 'The festival runs from 11 AM to 8 PM on Saturday, May 9, 2026. Come for an hour or stay all day — there\'s always something happening!'
              },
              {
                q: 'Will there be a ribbon-cutting ceremony?',
                a: 'Yes! The Mayor will be present for a special ribbon-cutting ceremony as we officially open the Firefly community. It\'s a historic moment you won\'t want to miss!'
              },
              {
                q: 'Are there activities for toddlers?',
                a: 'Absolutely! Tiny Town is a dedicated soft-play zone designed specifically for ages 2-4, featuring mini bounce houses, a giant corn box with Tonka trucks and buckets, and a sandbox — all shaded, enclosed, and safe.'
              },
              {
                q: 'Will there be vendors?',
                a: 'Yes! We\'ll have 25-35 vendor booths featuring a mix of kid-focused vendors and local businesses/artisans. Browse unique finds while enjoying the festival!'
              },
              {
                q: 'Can I bring outside food and drinks?',
                a: 'Small snacks and water bottles are welcome, but we encourage you to explore The Munchyard with 10+ amazing food trucks offering everything from BBQ and tacos to gourmet treats and desserts!'
              },
              {
                q: 'What prizes can I win?',
                a: 'Complete your Craft Punch Card at all creation stations to enter the FAMILY GETAWAY raffle! Complete your Touch-a-Truck Punch Card to win a GIANT TONKA TRUCK bundle! Plus, tour model homes for separate prize drawings.'
              },
              {
                q: 'What should I bring?',
                a: 'Comfortable shoes, sunscreen, and your camera! We\'ll have shaded rest areas throughout the venue, but it\'s always good to be prepared for a full day of outdoor fun.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="text-amber-500 text-xl">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <a 
              href="mailto:info@fireflycommunityfest.com"
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              Contact us at info@fireflycommunityfest.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/logo.png"
              alt="Firefly Fam Fest"
              width={100}
              height={110}
              className="w-20 h-auto"
            />
            <p className="text-sm text-center">
              A <a href="https://www.candlelighthomes.com/firefly-vision" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Candlelight Homes</a> Community Event
            </p>
            <p className="text-sm">© 2026 Firefly Community</p>
          </div>
        </div>
      </footer>

      {/* Registration Modal - Luma Embed */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Firefly Fam Fest"
                width={120}
                height={130}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                Register Your Family
              </h3>
              <p className="text-gray-600 text-sm">
                Get 5 free activity tickets + exclusive perks
              </p>
            </div>

            {/* Luma Registration Embed - wrapper hides cover image */}
            <div className="relative overflow-hidden rounded-xl" style={{ height: '450px' }}>
              <iframe 
                src="https://luma.com/embed/checkout/evt-wSH7R185vaXhneD"
                width="100%"
                height="550"
                frameBorder="0"
                style={{ border: 'none', marginTop: '-100px' }}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              By registering, you agree to receive event updates via email and SMS.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
// Trigger rebuild

