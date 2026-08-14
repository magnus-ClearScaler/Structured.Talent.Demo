import { ImageResponse } from "next/og";

export const alt =
  "Structured Talent · The multilingual sales talent to win in Europe, and the playbook to make them land.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The live site does have an Open Graph image, but it is a card exported from
 * the template. This one is generated from the brand's own palette and set in
 * the same serif as the page, so the preview matches what it opens.
 *
 * Satori reads ttf/otf/woff but not woff2, and Google serves ttf when the
 * request carries no modern browser User-Agent. If the fetch fails the card
 * still renders, just in the default sans.
 */
async function newsreader(style: "normal" | "italic") {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Newsreader${style === "italic" ? ":ital@1" : ""}`,
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\((.+?)\)/)?.[1];
    if (!url) return null;
    const data = await fetch(url).then((r) => r.arrayBuffer());
    return { name: "Newsreader", data, style, weight: 400 as const };
  } catch {
    return null;
  }
}

export default async function Image() {
  const fonts = (await Promise.all([newsreader("normal"), newsreader("italic")]))
    .filter((f) => f !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171310",
          padding: "72px 80px",
          fontFamily: "Newsreader, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#C9A227",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", width: 44, height: 4, background: "#C9A227" }} />
          GTM growth partner · DACH &amp; EMEA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.08,
              color: "#F8F3E9",
              letterSpacing: -1.5,
              maxWidth: 940,
            }}
          >
            The multilingual sales talent to win in Europe.
          </div>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.08,
              color: "#D9BC6B",
              fontStyle: "italic",
              letterSpacing: -1.5,
              maxWidth: 940,
              marginTop: 6,
            }}
          >
            And the playbook to make them land.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2e261e",
            paddingTop: 28,
            fontSize: 22,
            color: "#C4B697",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>Structured Talent · Harm Linnecke</div>
          <div style={{ display: "flex" }}>Dublin · structuredtalent.com</div>
        </div>
      </div>
    ),
    { ...size, ...(fonts.length ? { fonts } : {}) },
  );
}
