import { useEffect, useMemo, useRef, useState } from 'react';
import Silk from './components/Silk/Silk.jsx';

const WA_NUMBER = '923215544664';
const WA_DISPLAY = '0321 5544664';
const IG_URL = 'https://www.instagram.com/tiny_tots.dha';

const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const TOPICS = ['Timings', 'Fees', 'Activities', 'Admission'];
const AGES = ['Under 2 years', '2 to 4 years', '4 years and up'];

const PROGRAMS = [
  {
    tag: 'Toddlers',
    name: 'Tiny Steps',
    desc: 'Gentle first days away from home. Short, warm routines built around naps, snacks, songs and lots of cuddles.',
  },
  {
    tag: 'Preschool',
    name: 'Little Explorers',
    desc: 'Play-led learning through stories, art, blocks and outdoor time. Curiosity first, worksheets never.',
  },
  {
    tag: 'Full day',
    name: 'Daycare',
    desc: 'A calm, home-like day for working parents. Meals, rest, play and patient supervision from morning to evening.',
  },
  {
    tag: 'After school',
    name: 'Activity Hour',
    desc: 'An unhurried afternoon of creative play, reading corners and garden time for school-going children.',
  },
];

const GALLERY = [
  { img: './d1.jpg', alt: 'Kindergarten children on an outdoor trip, standing together by a pond', cap: 'Outdoor days' },
  { img: './d2.jpg', alt: 'Young children playing together outdoors with fallen leaves', cap: 'Play, every day' },
  { img: './d3.jpg', alt: 'A toddler looking at a colourful picture book', cap: 'Story time' },
  { img: './d4.jpg', alt: 'A teacher reading a picture book with two young girls', cap: 'Read with love' },
];

const MARQUEE_ITEMS = ['Timings', 'Fees', 'Activities', 'Admission', 'Play', 'Naps', 'Stories', 'Snacks'];

function Icon({ d, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      <path d={d} />
    </svg>
  );
}

const WA_ICON = 'M21 12a9 9 0 1 1-16.6 4.8L3 21l4.3-1.4A9 9 0 0 1 21 12z M9 9.5c.5 2.5 3.5 5.5 6 6l1.5-1.5 2.5 1.5c-.5 1.5-1.5 2-3 1.5-3.5-1.5-7-5-8.5-8.5-.5-1.5 0-2.5 1.5-3L10.5 8 9 9.5z';

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { el.classList.add('in'); io.disconnect(); }
      }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function App() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [age, setAge] = useState(AGES[1]);
  const [barShow, setBarShow] = useState(false);

  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroInnerRef = useRef(null);
  const reduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const onScroll = () => {
      setBarShow(window.scrollY > window.innerHeight * 0.7);
      if (reduced) return;
      const hero = heroRef.current;
      if (!hero) return;
      const h = hero.offsetHeight || 1;
      const p = Math.max(0, Math.min(1, window.scrollY / h));
      window.dispatchEvent(new CustomEvent('silk-scroll', { detail: p }));
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px) scale(${1 + p * 0.08})`;
      }
      if (heroInnerRef.current) {
        heroInnerRef.current.style.transform = `translateY(${-window.scrollY * 0.1}px)`;
        heroInnerRef.current.style.opacity = String(1 - p * 0.9);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced]);

  const enquiryText = useMemo(
    () => `Assalamualaikum! I have a question about Tiny Tots Daycare.\nTopic: ${topic}\nChild's age: ${age}`,
    [topic, age]
  );

  return (
    <>
      {/* HERO */}
      <header className="hero" ref={heroRef}>
        <div className="hero-bg" ref={heroBgRef}>
          {reduced ? <div className="hero-static" /> : (
            <Silk color="#8FD0F2" speed={2.2} scale={1.0} noiseIntensity={1.0} rotation={0} lightMode={true} />
          )}
        </div>
        <div className="hero-shade" />
        <div className="wrap hero-inner" ref={heroInnerRef}>
          <p className="eyebrow">Tiny Tots Daycare · DHA Lahore</p>
          <h1>A little home where little hearts feel <em>safe, loved</em> and happy.</h1>
          <p className="lead">
            Daycare and preschool in DHA Lahore. Tell us your child's age and what kind of
            care you are looking for, and we will happily guide you about our timings,
            fees, activities and admission.
          </p>
          <div className="cta-row">
            <a className="btn btn-solid" href={waLink('Assalamualaikum! I want to know more about Tiny Tots Daycare.')}>
              <Icon d={WA_ICON} /> Ask on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#day">See a day at Tiny Tots</a>
          </div>
        </div>
        <p className="scroll-hint">Scroll</p>
      </header>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k}>
              {MARQUEE_ITEMS.map((m) => (<span key={m + k}>{m}<span className="dot">◆</span></span>))}
            </span>
          ))}
        </div>
      </div>

      {/* PROGRAMS */}
      <section id="programs">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Our day</p>
              <h2>Rooms for <em>every</em> age</h2>
              <p>Every group follows its own gentle rhythm. Exact timings and fees are shared personally on WhatsApp.</p>
            </div>
          </Reveal>
          <div>
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="program">
                  <div>
                    <p className="tag">{p.tag}</p>
                    <h3>{p.name}</h3>
                  </div>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="day" className="section-alt">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Why Tiny Tots</p>
              <h2>In their <em>own</em> words</h2>
            </div>
          </Reveal>
          <div className="why-grid">
            <Reveal>
              <div className="quote-card">
                <blockquote>
                  “We treat every child with the care, love and attention we would want for our own.”
                </blockquote>
                <cite>— Team Tiny Tots</cite>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="note-card">
                <h3>A home, not a classroom</h3>
                <p>
                  Tiny Tots is home-based daycare in DHA Lahore. Small groups, familiar faces,
                  and days built around play, rest and stories. Parents hear from us directly,
                  on WhatsApp or in person, whenever they want to know how their little one is doing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Glimpses</p>
              <h2>Days that look like <em>this</em></h2>
            </div>
          </Reveal>
          <div className="gallery">
            {GALLERY.map((g, i) => (
              <Reveal key={g.img} delay={i * 70}>
                <figure>
                  <img src={g.img} alt={g.alt} loading="lazy" />
                  <figcaption>{g.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="section-alt">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Enquire</p>
              <h2>Ask us <em>anything</em></h2>
              <p>Pick a topic and your message writes itself. It opens in WhatsApp, addressed to us.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="enquiry">
              <h3>What would you like to know?</h3>
              <p className="hint">Choose a topic, tell us your child's age, then send.</p>
              <div className="chip-row" role="group" aria-label="Enquiry topic">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="chip"
                    aria-pressed={topic === t}
                    onClick={() => setTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="field">
                <label htmlFor="age">Child's age</label>
                <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
                  {AGES.map((a) => (<option key={a} value={a}>{a}</option>))}
                </select>
              </div>
              <p className="wa-preview" aria-label="Message preview">{enquiryText}</p>
              <a className="btn btn-solid" href={waLink(enquiryText)}>
                <Icon d={WA_ICON} /> Send on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Visit</p>
              <h2>Come say <em>salam</em></h2>
              <p>The best way to know us is to see the little home yourself. Message first and we will set a time.</p>
            </div>
          </Reveal>
          <div className="visit-grid">
            <Reveal>
              <div className="visit-card">
                <h3><Icon d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /> Find us</h3>
                <p>DHA Lahore<br />Exact location shared on WhatsApp</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="visit-card">
                <h3><Icon d={WA_ICON} /> WhatsApp</h3>
                <p><a href={waLink('Assalamualaikum! I want to know more about Tiny Tots Daycare.')}>{WA_DISPLAY}</a><br />We reply personally, usually the same day.</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="visit-card">
                <h3><Icon d="M4 4h16v12H8l-4 4z" /> Instagram</h3>
                <p><a href={IG_URL} target="_blank" rel="noreferrer">@tiny_tots.dha</a><br />Daily glimpses of our little world.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <p className="serif">Tiny Tots</p>
          <p>A little home where little hearts feel safe, loved and happy.</p>
          <p>DHA Lahore · WhatsApp {WA_DISPLAY} · <a href={IG_URL} target="_blank" rel="noreferrer">@tiny_tots.dha</a></p>
          <p className="photo-credit">Photos: CC-BY via Flickr and Openverse. Demo site made with love for Tiny Tots Daycare.</p>
        </div>
      </footer>

      {/* STICKY BAR */}
      <div className={`sticky-bar${barShow ? ' show' : ''}`} role="region" aria-label="Quick contact">
        <p>Questions about timings or fees?</p>
        <a className="btn btn-solid" href={waLink('Assalamualaikum! I have a question about Tiny Tots Daycare.')}>
          <Icon d={WA_ICON} /> WhatsApp us
        </a>
      </div>
    </>
  );
}
