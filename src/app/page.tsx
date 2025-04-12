'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);
targetDate.setHours(10, 0, 0, 0);

const quotes: string[] = [
  'Let the galaxy burn!',
  'Blood for the Blood God!',
  'Hope is the first step on the road to disappointment.',
  'There is no peace among the stars, only an eternity of carnage and slaughter.',
  'The gods demand sacrifice!',
  'Skulls for the Skull Throne!',
  'Maim, kill, burn!',
  'Only the insane have strength enough to prosper.'
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Quote rotator with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsFading(false); // Fade-in new quote
      }, 800); // Match CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Toggle audio play/pause
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle privacy notice
  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };

  return (
    <div className={styles.container}>

      <audio ref={audioRef} loop preload="none">
        <source src="/audio/chaos-ambient.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleAudio}
        className={styles.audioButton}
        aria-label={isPlaying ? "Pause chaos chants" : "Play chaos chants"}
      >
        {isPlaying ? "Silence the Warp" : "Hear the Whispers of Chaos"}
      </button>

      <main className={styles.main}>
        <h1 className={styles.heading}>The Ritual Begins In:</h1>
        {timeLeft ? (
          <div className={styles.timer}>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        ) : (
          <h2 className={styles.unleashed}>IT IS TIME. UNLEASH CHAOS!</h2>
        )}
        <p className={`${styles.quote} ${isFading ? styles.quoteHidden : ''}`}>
          &quot;{quotes[quoteIndex]}&quot;
        </p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.disclaimer}>
          <p>
            This is a fan-made website for private gaming purposes only.
            All Warhammer 40,000 content belongs to Games Workshop Limited.
            This site is not affiliated with or endorsed by Games Workshop.
          </p>
        </div>

        <div className={styles.links}>
          <button onClick={togglePrivacy} className={styles.footerLink}>
            Privacy Policy
          </button>
          <span className={styles.divider}>|</span>
          <span className={styles.imprint}>
            Imprint: Private Fan Project
          </span>
        </div>

        {showPrivacy && (
          <div className={styles.privacyModal}>
            <div className={styles.privacyContent}>
              <h3>Privacy Notice</h3>
              <button
                onClick={togglePrivacy}
                className={styles.closeButton}
                aria-label="Close privacy notice"
              >
                ×
              </button>
              <div className={styles.privacyText}>
                <p><strong>Hosting Information:</strong> This website is hosted by Vercel Inc.</p>
                <p><strong>Analytics:</strong> Vercel collects certain analytics data about visitors to improve performance and service. This may include:</p>
                <ul>
                  <li>IP addresses (anonymized)</li>
                  <li>Browser information</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                </ul>
                <p><strong>Cookies:</strong> This site does not use cookies for tracking purposes.</p>
                <p><strong>Third-Party Services:</strong> We use Vercel for hosting, which may collect data according to their privacy policy.</p>
                <p>For more information, please refer to <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&quot;s Privacy Policy</a>.</p>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
