'use client';

interface ContactMapProps {
  mapSrc: string;
}

export default function ContactMap({
  mapSrc
}: ContactMapProps) {
  return (
    <div className="absolute inset-0 z-0">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
