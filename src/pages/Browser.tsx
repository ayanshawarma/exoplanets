import React, { useEffect, useState } from "react";
import { Exoplanet } from "../pages/SkyView";

export default function BrowserPage() {
  const [planets, setPlanets] = useState<Exoplanet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/exoplanets.json`)
      .then((r) => r.json())
      .then((data: Exoplanet[]) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-star text-lg">Loading planets…</p>
      </div>
    );
  }

  // Helper to render dt with help tooltip
  const InfoLabel = ({ label, help }: { label: string; help: string }) => (
    <dt className="font-medium" title={help}>
      {label}
    </dt>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Exoplanet Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {planets.map((p) => (
          <div
            key={p.pl_name}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">{p.pl_name}</h2>
              <span className="text-yellow-400 text-2xl">⭐</span>
            </div>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-sm">
              <InfoLabel
                label="Host Star"
                help="Name of the star this planet orbits."
              />
              <dd>{p.hostname}</dd>

              <InfoLabel
                label="Planet Letter"
                help="Letter designation of the planet around its star."
              />
              <dd>{p.pl_letter}</dd>

              <InfoLabel
                label="Distance"
                help="Distance to this planetary system in light years."
              />
              <dd>
                {p.sy_dist != null
                  ? `${(p.sy_dist * 3.26156).toFixed(1)} ly`
                  : "—"}
              </dd>

              <InfoLabel
                label="Discovered"
                help="Year this exoplanet was first discovered."
              />
              <dd>{p.disc_year}</dd>

              <InfoLabel
                label="Orbital Period"
                help="Time planet takes to complete one orbit around its star (days)."
              />
              <dd>
                {p.pl_orbper != null ? `${p.pl_orbper.toFixed(2)} d` : "—"}
              </dd>

              <InfoLabel
                label="Radius"
                help="Size of planet, in Earth radii (Earth = 1)."
              />
              <dd>{p.pl_rade != null ? `${p.pl_rade.toFixed(2)} R⊕` : "—"}</dd>

              <InfoLabel
                label="Mass (M·sin i)"
                help="Planet mass (or M·sin i) in Earth masses (Earth = 1)."
              />
              <dd>
                {p.pl_bmasse != null ? `${p.pl_bmasse.toFixed(2)} M⊕` : "—"}
              </dd>

              <InfoLabel
                label="Density"
                help="Mass per unit volume, in g/cm³ (Earth ≈ 5.5)."
              />
              <dd>
                {p.pl_dens != null ? `${p.pl_dens.toFixed(2)} g/cm³` : "—"}
              </dd>

              <InfoLabel
                label="Brightness (B/V)"
                help="Johnson B and V magnitudes (lower = brighter)."
              />
              <dd>
                {p.sy_bmag != null &&
                  p.sy_vmag != null &&
                  `${p.sy_bmag.toFixed(2)}/${p.sy_vmag.toFixed(2)}`}
              </dd>

              <InfoLabel
                label="Coordinates (RA/Dec)"
                help="Celestial longitude (RA) and latitude (Dec) in degrees."
              />
              <dd>{`${p.ra.toFixed(2)}°, ${p.dec.toFixed(2)}°`}</dd>

              <InfoLabel
                label="Galactic Lat/Lon"
                help="Position relative to Milky Way plane in degrees."
              />
              <dd>{`${p.glat.toFixed(2)}°, ${p.glon.toFixed(2)}°`}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
