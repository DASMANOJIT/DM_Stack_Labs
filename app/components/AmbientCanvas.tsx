"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function FloatingField({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  const positions = useMemo(() => {
    const count = 120;
    const buffer = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const i = index * 3;
      buffer[i] = (Math.random() - 0.5) * 10;
      buffer[i + 1] = (Math.random() - 0.5) * 6;
      buffer[i + 2] = (Math.random() - 0.5) * 8;
    }

    return buffer;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current || !wireRef.current) return;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.current.y * 0.12,
      0.02,
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.current.x * 0.12,
      0.02,
    );
    groupRef.current.rotation.y += delta * 0.015;

    wireRef.current.rotation.x += delta * 0.05;
    wireRef.current.rotation.y += delta * 0.08;
    wireRef.current.position.x = THREE.MathUtils.lerp(
      wireRef.current.position.x,
      1.8 + pointer.current.x * 0.75,
      0.02,
    );
    wireRef.current.position.y = THREE.MathUtils.lerp(
      wireRef.current.position.y,
      0.8 + pointer.current.y * 0.35,
      0.02,
    );
  });

  return (
    <group ref={groupRef}>
      <points position={[0, 0, -2.2]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#1E90FF"
          size={0.042}
          sizeAttenuation
          transparent
          opacity={0.62}
        />
      </points>

      <mesh ref={wireRef} position={[1.8, 0.8, -1.4]} scale={1.25}>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshBasicMaterial color="#00C6FF" wireframe transparent opacity={0.14} />
      </mesh>

      <mesh position={[-2.1, -1.1, -2.6]} scale={1.55}>
        <sphereGeometry args={[0.82, 24, 24]} />
        <meshBasicMaterial color="#FFA500" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export default function AmbientCanvas() {
  const [enabled, setEnabled] = useState(false);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );

    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener("change", updateEnabled);

    const handleMouseMove = (event: MouseEvent) => {
      pointer.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: 0.5 - event.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 top-24 z-0 overflow-hidden opacity-65 sm:top-28">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_12%_18%,rgba(30,144,255,0.10),transparent_42%),radial-gradient(900px_circle_at_88%_22%,rgba(0,198,255,0.08),transparent_42%),radial-gradient(700px_circle_at_50%_85%,rgba(255,165,0,0.04),transparent_46%)]" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, 1.35]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <FloatingField pointer={pointer} />
      </Canvas>
    </div>
  );
}
