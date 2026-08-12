import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card, generated at build time with the light palette.
 * Colours are inlined because this image is rendered outside the browser and
 * cannot read CSS custom properties.
 */
export default function OpengraphImage() {
  const rings = [420, 330, 240, 150];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#f6f2ea",
          color: "#262320",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid #ded4c3",
            padding: 56,
            position: "relative",
          }}
        >
          {/* Ripple motif */}
          <div
            style={{
              position: "absolute",
              right: -60,
              bottom: -140,
              width: 460,
              height: 460,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {rings.map((size_, index) => (
              <div
                key={size_}
                style={{
                  position: "absolute",
                  width: size_,
                  height: size_ * 0.42,
                  borderRadius: 9999,
                  border: `2px solid ${index % 2 === 0 ? "#97a382" : "#5f6d4e"}`,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                width: 64,
                height: 27,
                borderRadius: 9999,
                backgroundColor: "#5f6d4e",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 20,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  color: "#8a8375",
                }}
              >
                {site.tagline}
              </div>
              <div
                style={{
                  marginTop: 40,
                  fontSize: 104,
                  lineHeight: 1.02,
                  letterSpacing: -3,
                  maxWidth: 720,
                }}
              >
                Return to yourself, slowly.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: 44, letterSpacing: -1 }}>{site.name}</div>
              <div style={{ fontSize: 22, color: "#58534a" }}>
                cove.example.com
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
