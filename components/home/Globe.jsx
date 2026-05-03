import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cities = [
  { name: "Dharampur",     country: "India",     continent: "Asia",          lat: 20.5,  lng:  73.2,    hub: true },
  { name: "Mumbai",        country: "India",     continent: "Asia",          lat: 19.07, lng:  72.87 },
  { name: "Dubai",         country: "UAE",       continent: "Asia",          lat: 25.2,  lng:  55.27 },
  { name: "Singapore",     country: "Singapore", continent: "Asia",          lat:  1.35, lng: 103.8  },
  { name: "London",        country: "UK",        continent: "Europe",        lat: 51.5,  lng:  -0.12 },
  { name: "Toronto",       country: "Canada",    continent: "N. America",    lat: 43.6,  lng: -79.4  },
  { name: "Poconos",       country: "USA",       continent: "N. America",    lat: 41.0,  lng: -75.3  },
  { name: "New Jersey",    country: "USA",       continent: "N. America",    lat: 40.7,  lng: -74.1  },
  { name: "Nairobi",       country: "Kenya",     continent: "Africa",        lat: -1.28, lng:  36.82 },
  { name: "Dar es Salaam", country: "Tanzania",  continent: "Africa",        lat: -6.79, lng:  39.21 },
  { name: "Cape Town",     country: "S. Africa", continent: "Africa",        lat: -33.9, lng:  18.42 },
  { name: "Sydney",        country: "Australia", continent: "Oceania",       lat: -33.8, lng: 151.2  },
];

const cityEvents = {
  Dharampur: {
    venue: "Shrimad Rajchandra Ashram",
    date: "Year-round",
    type: "Sadhana · Satsang · Seva",
    capacity: "Open to all",
    desc: "The spiritual heart of the Mission — home to satsang, sadhana, and the Jivamaitridham initiative.",
    cta: "Plan a Visit",
  },
  Mumbai: {
    venue: "Jio World Convention Centre",
    date: "25 – 26 Sep 2026",
    type: "A Divine Assembly · Grand Inauguration",
    capacity: "16,000+",
    desc: "The historic launch of Aho Gurudev — Samarpan, Sankalp & Saanidhya across two days.",
    cta: "Register Now",
    image: "/images/venues/jio-world.jpg",
  },
  Dubai: {
    venue: "Dubai Opera",
    date: "14 Mar 2026",
    type: "An Evening of Awakening",
    capacity: "2,000",
    desc: "An intimate evening of discourse and music at the iconic Dubai Opera.",
    cta: "Reserve a Seat",
    image: "/images/venues/dubai-opera.jpg",
  },
  Singapore: {
    venue: "Marina Bay Sands Expo",
    date: "21 Jun 2026",
    type: "Asia Pacific Satsang",
    capacity: "8,000",
    desc: "A regional gathering for seekers across South-East Asia.",
    cta: "Reserve a Seat",
  },
  London: {
    venue: "Wembley Stadium",
    date: "12 Jul 2026",
    type: "European Satsang & Cultural Tribute",
    capacity: "90,000",
    desc: "The largest gathering of devotees ever held outside India.",
    cta: "Reserve a Seat",
    image: "/images/venues/wembley.jpg",
  },
  Toronto: {
    venue: "Scotiabank Arena",
    date: "29 Aug 2026",
    type: "North American Discourse",
    capacity: "19,000",
    desc: "A discourse and diksha ceremony for the Canadian community.",
    cta: "Reserve a Seat",
  },
  Poconos: {
    venue: "Shrimad Rajchandra Center, Poconos",
    date: "5 – 7 Sep 2026",
    type: "Yuva Retreat",
    capacity: "1,200",
    desc: "A three-day immersion at the Mission's flagship US centre.",
    cta: "Apply",
  },
  "New Jersey": {
    venue: "Prudential Center, Newark",
    date: "4 Oct 2026",
    type: "American Discourse & Diksha",
    capacity: "20,000",
    desc: "An evening of awakening for the East Coast sangha.",
    cta: "Reserve a Seat",
  },
  Nairobi: {
    venue: "Kenyatta International Convention Centre",
    date: "16 May 2026",
    type: "East Africa Satsang",
    capacity: "5,000",
    desc: "A discourse and seva celebration across the Kenyan sangha.",
    cta: "Reserve a Seat",
  },
  "Dar es Salaam": {
    venue: "Mlimani City Conference Centre",
    date: "23 May 2026",
    type: "Tanzania Satsang",
    capacity: "3,500",
    desc: "Gurudev's address to the East African seekers.",
    cta: "Reserve a Seat",
  },
  "Cape Town": {
    venue: "Cape Town International Convention Centre",
    date: "11 Apr 2026",
    type: "Southern Africa Gathering",
    capacity: "4,000",
    desc: "A weekend of discourse, music, and seva.",
    cta: "Reserve a Seat",
  },
  Sydney: {
    venue: "ICC Sydney Theatre",
    date: "9 Aug 2026",
    type: "Pacific Seekers Summit",
    capacity: "9,000",
    desc: "The Mission's largest-ever Australian gathering.",
    cta: "Reserve a Seat",
  },
};

const continents = [
  "Asia",
  "Europe",
  "N. America",
  "Africa",
  "Oceania",
];

function latLngToVec3(lat, lng, radius) {
  const latRad = lat * (Math.PI / 180);
  const lngRad = lng * (Math.PI / 180);
  return {
    x: radius * Math.cos(latRad) * Math.cos(lngRad),
    y: radius * Math.sin(latRad),
    z: -radius * Math.cos(latRad) * Math.sin(lngRad),
  };
}

function Globe() {
  const sectionRef     = useRef(null);
  const eyebrowRef     = useRef(null);
  const titleARef      = useRef(null);
  const titleBRef      = useRef(null);
  const subRef         = useRef(null);
  const globeWrapRef   = useRef(null);
  const canvasRef      = useRef(null);
  const cityListRef    = useRef(null);
  const animFrameRef   = useRef(null);
  const globeMeshRef   = useRef(null);
  const pinObjectsRef  = useRef([]); // [{ city, dot, ring, ringMat, label, phase }]
  const focusOnCityRef = useRef(null);
  const userEngagedRef = useRef(false);
  const focusedIdxRef  = useRef(null);
  const [activeIdx, setActiveIdx] = useState(null);
  const [popupCity, setPopupCity] = useState(null);
  const activeIdxRef   = useRef(null);

  // keep ref in sync for use inside the rAF loop without re-binding
  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  const handleCityClick = (city, idx) => {
    focusedIdxRef.current = idx;
    setActiveIdx(idx);
    setPopupCity(city);
    userEngagedRef.current = true;
    if (focusOnCityRef.current) focusOnCityRef.current(city);
  };

  const closePopup = () => setPopupCity(null);

  const handleCityHover = (idx) => setActiveIdx(idx);
  const handleCityLeave = () => setActiveIdx(focusedIdxRef.current);

  /* === SECTION-LEVEL ANIMATIONS === */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });
      tl.to(eyebrowRef.current, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      })
        .to(titleARef.current, {
          opacity: 1,
          clipPath: "inset(-20% 0% -20% 0%)",
          duration: 1.0, ease: "power3.out",
        }, "-=0.25")
        .to(titleBRef.current, {
          opacity: 1,
          clipPath: "inset(-20% 0% -20% 0%)",
          duration: 1.0, ease: "power3.out",
        }, "-=0.7")
        .to(subRef.current, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        }, "-=0.5")
        .to(globeWrapRef.current, {
          opacity: 1, duration: 1.0, ease: "power2.out",
        }, "-=0.4")
        .to(cityListRef.current, {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        }, "-=0.6");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* === THREE.JS GLOBE === */
  useEffect(() => {
    let THREE;
    let CSS2DRenderer, CSS2DObject;
    let renderer, labelRenderer, scene, camera;
    let isMobile = window.innerWidth < 900;

    async function init() {
      THREE = await import("three");
      const CSS2DModule = await import(
        "three/examples/jsm/renderers/CSS2DRenderer.js"
      );
      CSS2DRenderer = CSS2DModule.CSS2DRenderer;
      CSS2DObject = CSS2DModule.CSS2DObject;

      const canvas = canvasRef.current;
      const wrapper = globeWrapRef.current;
      if (!canvas || !wrapper) return;

      const computeSize = () => ({
        w: wrapper.clientWidth || 600,
        h: wrapper.clientHeight || 600,
      });
      let { w, h } = computeSize();

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);

      // Scene & Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 1000);
      camera.position.set(0, 0.3, isMobile ? 7.2 : 6.4);

      // Earth — day/night shader blend (Blue Marble + city lights)
      const geometry = new THREE.SphereGeometry(2, 96, 96);
      const loader = new THREE.TextureLoader();
      const dayTex = loader.load(
        "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      );
      const nightTex = loader.load(
        "https://unpkg.com/three-globe/example/img/earth-night.jpg"
      );
      // Anisotropic filtering for crisper texture at angles
      const maxAniso = renderer.capabilities.getMaxAnisotropy();
      dayTex.anisotropy = maxAniso;
      nightTex.anisotropy = maxAniso;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          dayTexture:   { value: dayTex },
          nightTexture: { value: nightTex },
          sunDirection: { value: new THREE.Vector3(0.85, 0.45, 0.95).normalize() },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vWorldNormal;
          void main() {
            vUv = uv;
            vWorldNormal = normalize(mat3(modelMatrix) * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D dayTexture;
          uniform sampler2D nightTexture;
          uniform vec3 sunDirection;
          varying vec2 vUv;
          varying vec3 vWorldNormal;

          void main() {
            vec3 day = texture2D(dayTexture, vUv).rgb;
            vec3 night = texture2D(nightTexture, vUv).rgb;

            // Sun illumination angle (-1..1)
            float lightAngle = dot(normalize(vWorldNormal), normalize(sunDirection));

            // Smooth dawn/dusk terminator
            float dayMix = smoothstep(-0.18, 0.22, lightAngle);

            // Day side — slight warm tone, brighter for visibility on dark bg
            vec3 dayWarm = day * vec3(1.10, 1.02, 0.94) * 1.15;

            // Night side — boost city lights to a warm gold
            vec3 nightWarm = night * vec3(1.55, 1.25, 0.78) * 1.7;

            vec3 color = mix(nightWarm, dayWarm, dayMix);

            // Subtle rim/atmosphere kiss at the terminator (warm halo)
            float rim = pow(1.0 - abs(lightAngle), 2.5) * (1.0 - dayMix);
            color += vec3(0.95, 0.66, 0.32) * rim * 0.18;

            gl_FragColor = vec4(color, 1.0);
          }
        `,
      });
      const globe = new THREE.Mesh(geometry, material);
      // Tilt the axis 23.5° like real Earth — feels more natural
      globe.rotation.z = 23.5 * Math.PI / 180;
      scene.add(globe);
      globeMeshRef.current = globe;

      // Atmosphere glow
      const atmosGeometry = new THREE.SphereGeometry(2.10, 64, 64);
      const atmosMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(0.79, 0.64, 0.34, 1.0) * intensity;
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      const atmosphere = new THREE.Mesh(atmosGeometry, atmosMaterial);
      scene.add(atmosphere);

      // Lighting
      scene.add(new THREE.AmbientLight(0x331418, 0.45));
      const sun = new THREE.DirectionalLight(0xf8f1e5, 0.9);
      sun.position.set(5, 3, 5);
      scene.add(sun);
      scene.add(new THREE.PointLight(0xa76228, 0.5, 20));

      // CSS2D label renderer
      labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(w, h);
      labelRenderer.domElement.style.position = "absolute";
      labelRenderer.domElement.style.inset = "0";
      labelRenderer.domElement.style.pointerEvents = "none";
      wrapper.appendChild(labelRenderer.domElement);

      // OrbitControls — drag rotate, scroll/pinch zoom, gentle auto-rotate
      const { OrbitControls } = await import(
        "three/examples/jsm/controls/OrbitControls.js"
      );
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.enableZoom = true;
      controls.zoomSpeed = 0.5;
      controls.minDistance = 3.4;
      controls.maxDistance = 11;
      controls.enablePan = false;
      controls.rotateSpeed = 0.55;
      controls.autoRotate = false;

      // Mark engaged whenever the user starts dragging the camera
      controls.addEventListener("start", () => {
        userEngagedRef.current = true;
      });

      // Imperative focus function — animates the globe so the city faces the camera
      focusOnCityRef.current = (city) => {
        if (!globeMeshRef.current) return;
        const cityPos = latLngToVec3(city.lat, city.lng, 1);
        const cityVec = new THREE.Vector3(cityPos.x, cityPos.y, cityPos.z).normalize();
        // Slight downward tilt so the focused city sits a touch above center
        const facingDir = new THREE.Vector3(0, 0.18, 1).normalize();
        const target = new THREE.Quaternion().setFromUnitVectors(cityVec, facingDir);
        const start = globeMeshRef.current.quaternion.clone();
        const obj = { t: 0 };
        gsap.to(obj, {
          t: 1,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            globeMeshRef.current.quaternion.slerpQuaternions(start, target, obj.t);
          },
        });
      };

      // City pins
      pinObjectsRef.current = [];
      cities.forEach((city, i) => {
        const pos = latLngToVec3(city.lat, city.lng, 2.05);

        // Gold dot (slightly larger for hub)
        const dotRadius = city.hub ? 0.034 : 0.024;
        const dotGeo = new THREE.SphereGeometry(dotRadius, 12, 12);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0xc9a257 });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(pos.x, pos.y, pos.z);
        globe.add(dot);

        // Pulse ring
        const ringGeo = new THREE.RingGeometry(0.04, 0.06, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xc9a257,
          transparent: true,
          opacity: 0.6,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(pos.x, pos.y, pos.z);
        ring.lookAt(pos.x * 2, pos.y * 2, pos.z * 2);
        globe.add(ring);

        // Label (desktop only) — kept very subtle, brightens when active
        let label = null;
        if (!isMobile) {
          const labelDiv = document.createElement("div");
          labelDiv.style.fontFamily = "'Montserrat', sans-serif";
          labelDiv.style.fontSize = "9px";
          labelDiv.style.fontWeight = "700";
          labelDiv.style.letterSpacing = "0.18em";
          labelDiv.style.textTransform = "uppercase";
          labelDiv.style.color = "#f8f1e5";
          labelDiv.style.opacity = city.hub ? "0.85" : "0.32";
          labelDiv.style.borderLeft = "1px solid #c9a257";
          labelDiv.style.paddingLeft = "6px";
          labelDiv.style.pointerEvents = "none";
          labelDiv.style.whiteSpace = "nowrap";
          labelDiv.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          labelDiv.textContent = city.name;

          label = new CSS2DObject(labelDiv);
          label.position.set(pos.x, pos.y, pos.z);
          globe.add(label);
        }

        pinObjectsRef.current.push({
          city,
          dot,
          ring,
          ringMat,
          label,
          phase: Math.random() * Math.PI * 2,
        });
      });

      // Gold arcs from Dharampur (hub) to every other city
      const hub = cities.find((c) => c.hub);
      const hubVec = latLngToVec3(hub.lat, hub.lng, 2.05);
      const hubV = new THREE.Vector3(hubVec.x, hubVec.y, hubVec.z);
      const arcs = [];
      cities.forEach((city, i) => {
        if (city.hub) return;
        const p = latLngToVec3(city.lat, city.lng, 2.05);
        const end = new THREE.Vector3(p.x, p.y, p.z);
        const distance = hubV.distanceTo(end);
        const mid = hubV.clone().add(end).multiplyScalar(0.5);
        // Lift the midpoint outward proportional to distance
        mid.normalize().multiplyScalar(2.05 + distance * 0.45);

        const curve = new THREE.QuadraticBezierCurve3(hubV, mid, end);
        const segs = 64;
        const points = curve.getPoints(segs);
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        geo.setDrawRange(0, 0);
        const mat = new THREE.LineBasicMaterial({
          color: 0xc9a257,
          transparent: true,
          opacity: 0.85,
        });
        const line = new THREE.Line(geo, mat);
        globe.add(line);
        arcs.push({ line, geo, mat, segs });
      });

      // Animate arcs drawing on (after a small delay)
      arcs.forEach((arc, i) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: arc.segs + 1,
          duration: 1.4,
          ease: "power2.out",
          delay: 1.2 + i * 0.10,
          onUpdate: () => {
            arc.geo.setDrawRange(0, Math.round(obj.val));
          },
        });
      });

      // Resize
      const handleResize = () => {
        isMobile = window.innerWidth < 900;
        const sz = computeSize();
        if (sz.w < 1 || sz.h < 1) return;
        camera.aspect = sz.w / sz.h;
        camera.updateProjectionMatrix();
        renderer.setSize(sz.w, sz.h);
        labelRenderer.setSize(sz.w, sz.h);
      };
      window.addEventListener("resize", handleResize);
      const ro = new ResizeObserver(handleResize);
      ro.observe(wrapper);

      // Animation loop
      const clock = new THREE.Clock();
      function animate() {
        animFrameRef.current = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Slow globe spin — pauses once user clicks a city or drags the camera
        if (!userEngagedRef.current) {
          globe.rotation.y += 0.0009;
        }
        controls.update();

        // Pulse rings + active highlight
        const active = activeIdxRef.current;
        pinObjectsRef.current.forEach((p, i) => {
          const isActive = active === i;
          const isHub = p.city.hub;
          const t = ((elapsed + p.phase) % 2) / 2;
          const baseScale = isActive ? 1.2 : 1.0;
          const scale = baseScale + t * (isActive ? 2.2 : 1.4);
          p.ring.scale.set(scale, scale, scale);
          const baseOpacity = isActive ? 0.95 : 0.55;
          p.ringMat.opacity = baseOpacity * (1 - t);

          // Brighten dot when active
          p.dot.material.color.setHex(isActive ? 0xf8d990 : 0xc9a257);
          p.dot.scale.setScalar(isActive ? 1.4 : (isHub ? 1.0 : 1.0));

          // Brighten label when active
          if (p.label) {
            const div = p.label.element;
            if (isActive) {
              div.style.opacity = "1";
              div.style.color = "#f8d990";
              div.style.borderLeftColor = "#f8d990";
              div.style.transform = "translateX(2px)";
            } else {
              div.style.opacity = isHub ? "0.85" : "0.32";
              div.style.color = "#f8f1e5";
              div.style.borderLeftColor = "#c9a257";
              div.style.transform = "translateX(0)";
            }
          }
        });

        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
      }
      animate();

      // Cleanup refs
      canvasRef.current._cleanup = () => {
        cancelAnimationFrame(animFrameRef.current);
        window.removeEventListener("resize", handleResize);
        ro.disconnect();
        controls.dispose();
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        atmosGeometry.dispose();
        atmosMaterial.dispose();
        if (labelRenderer.domElement && labelRenderer.domElement.parentNode) {
          labelRenderer.domElement.parentNode.removeChild(
            labelRenderer.domElement
          );
        }
      };
    }

    init();

    return () => {
      if (canvasRef.current && canvasRef.current._cleanup) {
        canvasRef.current._cleanup();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="gl">
      <div className="gl-inner">
        {/* === HEADER === */}
        <div className="gl-head">
          <p ref={eyebrowRef} className="gl-eyebrow">
            <span className="gl-eyebrow-rule" />
            Worldwide Presence
          </p>
          <h2 className="gl-title">
            <span ref={titleARef} className="gl-title-a seasons">Across the</span>
            <span ref={titleBRef} className="gl-title-b seasons">Globe</span>
          </h2>
          <p ref={subRef} className="gl-sub">
            From Dharampur to Dar es Salaam, from London to Sydney — a network
            of centres, missions, and seekers spanning every habitable continent.
          </p>
        </div>

        {/* === GLOBE + LIST === */}
        <div className="gl-stage">
          <div ref={globeWrapRef} className="gl-canvas-wrap">
            <canvas ref={canvasRef} className="gl-canvas" />
            <div className="gl-stage-grad" />
          </div>

          <aside ref={cityListRef} className="gl-cities">
            <p className="gl-cities-label">
              <span className="gl-cities-rule" />
              Featured Cities
            </p>

            {continents.map((cont) => {
              const list = cities
                .map((c, i) => ({ ...c, idx: i }))
                .filter((c) => c.continent === cont);
              if (list.length === 0) return null;
              return (
                <div key={cont} className="gl-cont">
                  <h4 className="gl-cont-title">{cont}</h4>
                  <ul className="gl-cont-list">
                    {list.map((c) => {
                      const active = activeIdx === c.idx;
                      return (
                        <li
                          key={c.idx}
                          className={`gl-city ${active ? "is-active" : ""} ${c.hub ? "is-hub" : ""}`}
                          onMouseEnter={() => handleCityHover(c.idx)}
                          onMouseLeave={handleCityLeave}
                          onClick={() => handleCityClick(c, c.idx)}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="gl-city-dot" />
                          <span className="gl-city-name seasons">{c.name}</span>
                          <span className="gl-city-country">{c.country}</span>
                          {c.hub && <span className="gl-city-hub">HUB</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </aside>
        </div>

        {popupCity && (
          <div className="gl-popup-overlay" onClick={closePopup}>
            <div className="gl-popup" onClick={(e) => e.stopPropagation()}>
              <button className="gl-popup-close" onClick={closePopup} aria-label="Close">×</button>
              {(() => {
                const ev = cityEvents[popupCity.name];
                return ev?.image ? (
                  <div
                    className="gl-popup-img"
                    style={{ backgroundImage: `url(${ev.image})` }}
                  />
                ) : null;
              })()}
              <p className="gl-popup-eyebrow">
                {popupCity.continent} · {popupCity.country}
              </p>
              <h3 className="gl-popup-city seasons">{popupCity.name}</h3>
              {(() => {
                const ev = cityEvents[popupCity.name];
                if (!ev) {
                  return (
                    <p className="gl-popup-desc">
                      Event details for {popupCity.name} coming soon.
                    </p>
                  );
                }
                return (
                  <>
                    <div className="gl-popup-meta">
                      <div>
                        <span className="gl-popup-label">Venue</span>
                        <span className="gl-popup-val">{ev.venue}</span>
                      </div>
                      <div>
                        <span className="gl-popup-label">Date</span>
                        <span className="gl-popup-val">{ev.date}</span>
                      </div>
                      <div>
                        <span className="gl-popup-label">Capacity</span>
                        <span className="gl-popup-val">{ev.capacity}</span>
                      </div>
                    </div>
                    <p className="gl-popup-type">{ev.type}</p>
                    <p className="gl-popup-desc">{ev.desc}</p>
                    <a href="#register" className="gl-popup-cta">
                      {ev.cta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="13 6 19 12 13 18" />
                      </svg>
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        .gl {
          position: relative;
          padding: clamp(96px, 10vw, 160px) clamp(24px, 4.167vw, 80px);
          overflow: hidden;
          color: var(--color-cream, #f8f1e5);
          background:
            radial-gradient(60% 50% at 18% 0%, rgba(201, 162, 87, 0.18), transparent 60%),
            radial-gradient(60% 50% at 100% 100%, rgba(167, 98, 40, 0.16), transparent 60%),
            linear-gradient(180deg, #1a0a09 0%, #2a1110 50%, #3a1815 100%);
        }
        /* Stars */
        .gl::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.4;
          background-image:
            radial-gradient(1px 1px at 12% 18%, rgba(248,241,229,0.6), transparent 50%),
            radial-gradient(1px 1px at 28% 8%,  rgba(248,241,229,0.4), transparent 50%),
            radial-gradient(1px 1px at 44% 28%, rgba(248,241,229,0.5), transparent 50%),
            radial-gradient(1px 1px at 62% 14%, rgba(248,241,229,0.3), transparent 50%),
            radial-gradient(1px 1px at 80% 36%, rgba(248,241,229,0.5), transparent 50%),
            radial-gradient(1px 1px at 92% 22%, rgba(248,241,229,0.4), transparent 50%),
            radial-gradient(1px 1px at  6% 70%, rgba(248,241,229,0.4), transparent 50%),
            radial-gradient(1px 1px at 36% 84%, rgba(248,241,229,0.3), transparent 50%),
            radial-gradient(1px 1px at 70% 78%, rgba(248,241,229,0.5), transparent 50%),
            radial-gradient(1px 1px at 88% 90%, rgba(248,241,229,0.4), transparent 50%);
        }
        /* Grain */
        .gl::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }
        .gl-inner {
          position: relative;
          z-index: 2;
          max-width: 1480px;
          margin: 0 auto;
        }

        /* === HEADER === */
        .gl-head {
          margin: 0 0 56px;
          max-width: 740px;
        }
        .gl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--color-gold, #c9a257);
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(8px);
        }
        .gl-eyebrow-rule {
          width: 28px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }
        .gl-title {
          display: block;
          margin: 0 0 28px;
          font-family: "The Seasons", serif !important;
          color: var(--color-cream, #f8f1e5);
          font-weight: 400;
        }
        .gl-title-a {
          display: block;
          font-family: "The Seasons", serif !important;
          font-size: clamp(28px, 3.2vw, 52px);
          color: rgba(248, 241, 229, 0.8);
          letter-spacing: -0.005em;
          line-height: 1.1;
          margin-bottom: 0.04em;
          padding-left: 0.05em;
          opacity: 0;
          clip-path: inset(-20% 100% -20% 0%);
        }
        .gl-title-b {
          display: block;
          font-family: "The Seasons", serif !important;
          font-style: italic;
          color: var(--color-gold, #c9a257);
          font-size: clamp(80px, 11.5vw, 192px);
          letter-spacing: -0.025em;
          line-height: 0.92;
          padding: 0.05em 0.04em 0;
          margin-left: -0.04em;
          opacity: 0;
          clip-path: inset(-20% 100% -20% 0%);
        }
        .gl-sub {
          font-family: "Montserrat", sans-serif;
          max-width: 580px;
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.8;
          color: rgba(248, 241, 229, 0.72);
          margin: 0;
          opacity: 0;
          transform: translateY(10px);
        }

        /* === STAGE: Globe + City List === */
        .gl-stage {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: clamp(40px, 4vw, 80px);
          align-items: center;
          margin: 0 0 80px;
        }
        .gl-canvas-wrap {
          position: relative;
          width: 100%;
          height: clamp(440px, 72vh, 700px);
          opacity: 0;
          /* pan-y lets vertical scroll pass through; horizontal touches rotate the globe */
          touch-action: pan-y;
        }
        .gl-canvas {
          display: block;
          width: 100% !important;
          height: 100% !important;
          cursor: grab;
        }
        .gl-canvas:active {
          cursor: grabbing;
        }
        .gl-stage-grad {
          position: absolute;
          inset: -8% -10%;
          z-index: -1;
          background: radial-gradient(
            55% 55% at 50% 50%,
            rgba(201, 162, 87, 0.08),
            transparent 60%
          );
          pointer-events: none;
        }

        /* === CITY LIST === */
        .gl-cities {
          opacity: 0;
          transform: translateY(20px);
        }
        .gl-cities-label {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--color-gold, #c9a257);
          margin: 0 0 22px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(201, 162, 87, 0.25);
          width: 100%;
        }
        .gl-cities-rule {
          width: 22px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }
        .gl-cont {
          margin-bottom: 26px;
        }
        .gl-cont:last-child { margin-bottom: 0; }
        .gl-cont-title {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(248, 241, 229, 0.45);
          margin: 0 0 10px;
        }
        .gl-cont-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .gl-city {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 6px 8px 0;
          cursor: pointer;
          transition: gap 0.3s ease, transform 0.3s ease;
          position: relative;
        }
        .gl-city:hover { gap: 16px; }
        .gl-city-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(201, 162, 87, 0.35);
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          flex-shrink: 0;
        }
        .gl-city.is-active .gl-city-dot,
        .gl-city.is-hub .gl-city-dot {
          background: var(--color-gold, #c9a257);
        }
        .gl-city.is-active .gl-city-dot {
          transform: scale(1.4);
          box-shadow: 0 0 0 4px rgba(201, 162, 87, 0.18);
        }
        .gl-city-name {
          font-family: "The Seasons", serif !important;
          font-size: clamp(18px, 1.5vw, 22px);
          color: rgba(248, 241, 229, 0.78);
          line-height: 1.1;
          transition: color 0.3s ease;
        }
        .gl-city.is-active .gl-city-name { color: #f8d990; }
        .gl-city-country {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(248, 241, 229, 0.4);
          margin-left: auto;
        }
        .gl-city-hub {
          font-family: "Montserrat", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--color-burgundy-deep, #331418);
          background: var(--color-gold, #c9a257);
          padding: 2px 8px;
          border-radius: 9999px;
        }

        /* === RESPONSIVE === */
        @media (max-width: 1100px) {
          .gl-stage {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .gl-cities { max-width: 560px; }
          .gl-canvas-wrap { height: clamp(380px, 60vh, 560px); }
        }
        @media (max-width: 700px) {
          .gl {
            padding: 64px 22px;
          }
          .gl-head { margin-bottom: 28px; }
          .gl-title-a { font-size: clamp(22px, 6.5vw, 36px); }
          .gl-title-b { font-size: clamp(64px, 17vw, 110px); line-height: 0.95; }
          .gl-eyebrow { font-size: 10px; letter-spacing: 0.24em; }
          .gl-canvas-wrap { height: 320px; margin-bottom: 8px; }
          .gl-cities-label { margin: 28px 0 14px; font-size: 10px; }
          .gl-cont { margin-bottom: 16px; }
          .gl-cont-title { font-size: 12px; margin-bottom: 8px; }
          .gl-cont-list { gap: 4px; }
          .gl-city { padding: 10px 12px; }
          .gl-city-name { font-size: 15px; }
          .gl-city-country { font-size: 11px; opacity: 0.7; }
          .gl-city-hub { font-size: 9px; padding: 2px 6px; }
        }

        /* === City popup === */
        .gl-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 8, 7, 0.72);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 24px;
          animation: glOverlayIn 0.25s ease;
        }
        @keyframes glOverlayIn { from { opacity: 0; } to { opacity: 1; } }
        .gl-popup {
          position: relative;
          width: min(520px, 100%);
          background: linear-gradient(180deg, #2a1110 0%, #3a1815 100%);
          border: 1px solid rgba(201, 162, 90, 0.35);
          border-radius: 6px;
          padding: clamp(28px, 4vw, 48px);
          color: #f5e3ba;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.6);
          animation: glPopIn 0.35s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        @keyframes glPopIn {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .gl-popup-close {
          position: absolute;
          top: 14px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid rgba(201, 162, 90, 0.4);
          color: #c9a25a;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .gl-popup-close:hover { background: rgba(201, 162, 90, 0.18); color: #f5e3ba; }
        .gl-popup-img {
          width: calc(100% + clamp(56px, 8vw, 96px));
          height: clamp(180px, 30vh, 260px);
          margin: calc(-1 * clamp(28px, 4vw, 48px)) calc(-1 * clamp(28px, 4vw, 48px) / 2) clamp(20px, 2vw, 28px);
          margin-left: calc(-1 * clamp(28px, 4vw, 48px));
          margin-right: calc(-1 * clamp(28px, 4vw, 48px));
          margin-top: calc(-1 * clamp(28px, 4vw, 48px));
          background-size: cover;
          background-position: center;
          border-radius: 6px 6px 0 0;
          position: relative;
        }
        .gl-popup-img::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(42, 17, 16, 0.7) 100%);
          border-radius: 6px 6px 0 0;
        }
        .gl-popup-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #c9a25a;
          margin: 0 0 12px;
        }
        .gl-popup-city {
          font-family: "The Seasons", serif !important;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1;
          margin: 0 0 24px;
          color: #f5e3ba;
        }
        .gl-popup-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          padding: 16px 0;
          border-top: 1px solid rgba(201, 162, 90, 0.3);
          border-bottom: 1px solid rgba(201, 162, 90, 0.3);
          margin-bottom: 18px;
        }
        .gl-popup-label {
          display: block;
          font-family: "Montserrat", sans-serif;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(201, 162, 90, 0.7);
          margin-bottom: 6px;
        }
        .gl-popup-val {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          color: #f5e3ba;
          line-height: 1.35;
        }
        .gl-popup-type {
          font-family: "The Seasons", serif;
          font-style: italic;
          font-size: 16px;
          color: #c9a25a;
          margin: 0 0 12px;
        }
        .gl-popup-desc {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          color: rgba(245, 227, 186, 0.78);
          margin: 0 0 24px;
        }
        .gl-popup-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #331418;
          background: linear-gradient(180deg, #f5dca0 0%, #c9a25a 100%);
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .gl-popup-cta:hover { transform: translateY(-2px); filter: brightness(1.06); }

        @media (max-width: 600px) {
          .gl-popup-meta { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}

export default Globe;
