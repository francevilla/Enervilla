import { ImageResponse } from "next/og";
import { site, tappaDettagli } from "@/lib/site";

/**
 * Immagine di anteprima per le condivisioni sui social.
 * È disegnata con il codice (nessuna fotografia, nessun dato non verificato):
 * sfondo grafite, titolo in avorio e accento lime.
 */
export const alt = `${site.nome} — ${site.posizionamento}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const grafite = "#0e1217";
const avorio = "#f4f2ed";
const grafiteChiaro = "#b9bfc4";
const verde = "#2f7a5f";
const lime = "#a3d977";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: grafite,
          padding: "72px 80px",
          color: avorio,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ width: 22, height: 22, backgroundColor: lime }} />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: grafiteChiaro,
            }}
          >
            Energia per imprese
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ fontSize: 74, lineHeight: 1.1, maxWidth: "920px" }}>
            Consulenza energetica per imprese
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.3,
              color: grafiteChiaro,
              maxWidth: "880px",
            }}
          >
            Acquisto aggregato di energia elettrica, gas al PSV,
            contrattualistica, diagnosi ed efficienza energetica.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ fontSize: 28, color: avorio }}>
            {tappaDettagli[0].titolo}
          </div>
          <div style={{ width: 28, height: 2, backgroundColor: verde }} />
          <div style={{ fontSize: 28, color: avorio }}>
            {tappaDettagli[1].titolo}
          </div>
          <div style={{ width: 28, height: 2, backgroundColor: verde }} />
          <div style={{ fontSize: 28, color: avorio }}>
            {tappaDettagli[2].titolo}
          </div>
          <div style={{ width: 28, height: 2, backgroundColor: lime }} />
          <div style={{ fontSize: 28, color: avorio }}>
            {tappaDettagli[3].titolo}
          </div>
        </div>
      </div>
    ),
    size,
  );
}