// DTA Mail System brand mark. The official DevTrackAcademy logo lives at
// src/web/public/brand/dta-logo.png (served as /brand/dta-logo.png); replace that file to update
// the logo everywhere. It is drawn inside the same square box the previous mark used, so the
// layout is unchanged.
const LOGO_SRC = '/brand/dta-logo.png';

export function LogoMark({ size = 28 }: { size?: number }) {
  return <img src={LOGO_SRC} width={size} height={size} alt="" aria-hidden draggable={false} style={{ width: size, height: size, objectFit: 'contain' }} />;
}

export function Logo({ name = 'DTA Mail System' }: { name?: string }) {
  return (
    <div className="flex items-center gap-2">
      <LogoMark />
      <span className="text-[15px] font-semibold tracking-tight text-fg">{name}</span>
    </div>
  );
}
