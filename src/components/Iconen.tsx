/** Lijniconen uit de Artifact-homepage, één bestand zodat ze overal gelijk blijven. */
export type IcoonNaam =
  | "ringen" | "taart" | "kiem" | "vuur" | "gebouw" | "glazen" | "koffie" | "raket" | "huis"
  | "plan" | "vink";

const paden: Record<IcoonNaam, React.ReactNode> = {
  ringen: <><circle cx="9" cy="14.5" r="5" /><circle cx="15" cy="14.5" r="5" /><path d="M12 4.5l1.6 2.4h-3.2z" /></>,
  taart: <><path d="M4 20h16v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" /><path d="M8 12V8M12 12V7M16 12V8" /><path d="M8 5.5c0-1 1-1.5 0-2.5M12 4.5c0-1 1-1.5 0-2.5M16 5.5c0-1 1-1.5 0-2.5" /></>,
  kiem: <><path d="M12 21V11" /><path d="M12 11c0-4 3-6 7-6 0 4-3 6-7 6zM12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" /></>,
  vuur: <path d="M12 21c-5 0-7.5-3.5-5.8-7.6C7.3 10.6 10 9.6 9.4 6 12 7.6 14 10.6 13.5 13c1.3-.9 1.8-2.2 1.8-3.4 2.6 2.6 3.9 5 2.9 7.6-.8 2.2-2.5 3.8-6.2 3.8z" />,
  gebouw: <><path d="M4 21V5.5L13 3v18" /><path d="M13 9h7v12" /><path d="M7 8h3M7 12h3M7 16h3M16 13h1M16 17h1" /></>,
  glazen: <><path d="M5 3h6l-1 6a2 2 0 0 1-4 0zM8 9v9M6 21h4" /><path d="M14 4h6l-1 6a2 2 0 0 1-4 0zM17 10v8M15 21h4" /></>,
  koffie: <><path d="M4 9h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" /><path d="M16 11h2.5a2.5 2.5 0 0 1 0 5H16" /><path d="M8 6c0-1 .8-1.5 0-3M12 6c0-1 .8-1.5 0-3" /></>,
  raket: <><path d="M12 3c3 2.5 4.5 6 4.5 9.5L12 17l-4.5-4.5C7.5 9 9 5.5 12 3z" /><circle cx="12" cy="10" r="1.6" /><path d="M9 17.5 7 21l3.5-1.5M15 17.5 17 21l-3.5-1.5" /></>,
  huis: <><path d="M3.5 11 12 4l8.5 7" /><path d="M6 10.5V20h12v-9.5" /><path d="M10 20v-5h4v5" /></>,
  plan: <><rect x="3" y="3" width="18" height="18" /><path d="M3 8.5h18M8.5 3v18" /></>,
  vink: <><circle cx="12" cy="12" r="9" /><path d="M7.5 12.5l3.2 3.2L16.5 9" /></>,
};

export default function Icoon({ naam, className = "" }: { naam: IcoonNaam; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      {paden[naam]}
    </svg>
  );
}
