import { useEffect, useRef } from "react";

const THREE_URL = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let frameId = 0;
    let renderer: any = null;
    let geometry: any = null;
    let material: any = null;
    let onMouseMove: ((e: MouseEvent) => void) | null = null;
    let onResize: (() => void) | null = null;

    const init = () => {
      const THREE = (window as any).THREE;
      const canvas = canvasRef.current;
      if (!THREE || !canvas) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Random star positions
      const starsCount = 3200;
      const posArray = new Float32Array(starsCount * 3);
      for (let i = 0; i < posArray.length; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
      }
      geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

      // Soft round star texture
      const tc = document.createElement("canvas");
      tc.width = 32;
      tc.height = 32;
      const ctx = tc.getContext("2d")!;
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 14);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.5, "rgba(255,255,255,0.8)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.arc(16, 16, 14, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      material = new THREE.PointsMaterial({
        size: 0.15,
        map: new THREE.CanvasTexture(tc),
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
        depthWrite: false,
      });

      const starMesh = new THREE.Points(geometry, material);
      scene.add(starMesh);
      camera.position.z = 20;

      // Mouse parallax
      let mouseX = 0;
      let mouseY = 0;
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX - halfX) * 0.0001;
        mouseY = (e.clientY - halfY) * 0.0001;
      };
      window.addEventListener("mousemove", onMouseMove);

      const animate = () => {
        starMesh.rotation.y += 0.0001 + mouseX * 0.5;
        starMesh.rotation.x += 0.00005 + mouseY * 0.5;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();

      onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);
    };

    if ((window as any).THREE) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = THREE_URL;
      script.onload = init;
      document.head.appendChild(script);
    }

    return () => {
      cancelAnimationFrame(frameId);
      if (onMouseMove) window.removeEventListener("mousemove", onMouseMove);
      if (onResize) window.removeEventListener("resize", onResize);
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default StarField;
