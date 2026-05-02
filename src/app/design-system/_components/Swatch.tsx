export function Swatch({
  name,
  cssVar,
  hexLight,
  hexDark,
  textOn,
}: {
  name: string;
  cssVar: string;
  hexLight: string;
  hexDark: string;
  textOn?: "light" | "dark";
}) {
  return (
    <div className="border-border overflow-hidden rounded-md border">
      <div
        className="h-20 w-full"
        style={{ background: `var(${cssVar})` }}
        aria-label={`${name} swatch`}
      />
      <div className="bg-background space-y-1 p-3">
        <div className="text-small font-medium">{name}</div>
        <div className="text-muted text-meta font-mono">{cssVar}</div>
        <div className="text-muted text-meta font-mono">
          {hexLight} <span className="opacity-50">/</span> {hexDark}
        </div>
        {textOn ? (
          <div className="text-muted text-meta font-mono opacity-70">
            text-on: {textOn}
          </div>
        ) : null}
      </div>
    </div>
  );
}
