import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  imageUrl: string;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ imageUrl }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2.5, 3, 3);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageUrl);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 100,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(-1, 4, 6);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x9d4edd, 1, 10);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    camera.position.z = 5;

    const bgGeometry = new THREE.PlaneGeometry(10, 10);
    const bgMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x10002b) },
        color2: { value: new THREE.Color(0x240046) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 0.1);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    bgMesh.position.z = -3;
    scene.add(bgMesh);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const container = mountRef.current;
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container?.removeChild(renderer.domElement);
    };
  }, [imageUrl]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ThreeBackground;
