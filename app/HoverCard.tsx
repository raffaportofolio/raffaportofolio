'use client'
import styles from './Button.module.css';
import Image from 'next/image';

interface HoverCardProps {
  badge?: string;
  title?: string;
  footer?: string;
  image?: string;
}

export default function HoverCard({ 
  badge = "Web Dev", 
  title = "My Project", 
  footer = "Next.js | Tailwind",
  image = "/assets/default.jpg",
}: HoverCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>

        {/* BACK - orange spinning tetap */}
        <div className={styles.back}>
          <div className={styles.backContent}>
            <strong>Hover Me</strong>
          </div>
        </div>

        {/* FRONT - foto + teks */}
        <div className={styles.front}>
          <div className={styles.img}>
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.frontContent}>
            <small className={styles.badge}>{badge}</small>
            <div className={styles.description}>
              <p className={styles.title}><strong>{title}</strong></p>
              <p className={styles.cardFooter}>{footer}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}