import { ImageResponse } from "next/og";
import { marchio, site, tappaDettagli } from "@/lib/site";

/**
 * Immagine di anteprima per le condivisioni sui social.
 * È disegnata con il codice (nessuna fotografia, nessun dato non verificato):
 * sfondo grafite, titolo in avorio e accento champagne, in coerenza con
 * i token oklch di app/globals.css.
 */
export const alt = `${marchio.lockup} — ${site.nome}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const grafite = "#060e19"; // grafite-950
const avorio = "#f2f0ea"; // avorio-50
const grafiteChiaro = "#9a9fa6"; // grafite-300
const verde = "#3f9b65"; // verde-600
const champagne = "#d7b174"; // champagne-400

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
          /* Campo scuro con leggera risalita di luce in alto, come il fondo
             pagina (vedi app/globals.css). */
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(154,159,166,0.12), transparent)",
          padding: "72px 80px",
          color: avorio,
        }}
      >
        {/*
          Lockup V5: serif editoriale con descrittore in champagne + payoff in
          maiuscoletto, come nella tavola docs/marchio-varianti.html. Niente
          quadrato (era lo stile V1).
        */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 40,
            }}
          >
            {marchio.nome}
            <span style={{ color: grafiteChiaro }}> · </span>
            <span style={{ color: champagne }}>{marchio.descrittore}</span>
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: grafiteChiaro,
            }}
          >
            {marchio.payoff}
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
            Acquisto aggregato, gas al PSV, energia come servizio (EaaS),
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
          <div style={{ width: 28, height: 2, backgroundColor: champagne }} />
          <div style={{ fontSize: 28, color: avorio }}>
            {tappaDettagli[3].titolo}
          </div>
        </div>
      </div>
    ),
    size,
  );
}