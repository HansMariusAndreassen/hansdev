"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Mesh, Vector3, DirectionalLight } from "three";

interface ThreeBackgroundProps {
  imageUrls: string[];
}

const RotatingBox: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  const meshRef = useRef<Mesh>(null);

  const textures = useLoader(THREE.TextureLoader, imageUrls);

  const materials = useMemo(
    () =>
      textures.map(
        (texture) =>
          new THREE.MeshStandardMaterial({
            map: texture,
            side: THREE.DoubleSide,
          })
      ),
    [textures]
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 3, 3]} />
      {materials.map((material, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          {...material}
        />
      ))}
    </mesh>
  );
};

const CameraLight: React.FC = () => {
  const lightRef = useRef<DirectionalLight>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.target = camera;
    }
  }, [camera]);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.position);
    }
  });

  return <directionalLight ref={lightRef} intensity={1} />;
};

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ imageUrls }) => {
  if (imageUrls.length < 6) {
    console.error("You need 6 image URLs to cover each face of the box.");
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: new Vector3(0, 0, 5), fov: 75 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ambientLight intensity={2} />
        <CameraLight />
        <RotatingBox imageUrls={imageUrls} />
        <OrbitControls enableZoom={false} enablePan={window.innerWidth > 768} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
