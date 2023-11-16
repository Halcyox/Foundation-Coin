import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Cylinder, SpotLight } from '@react-three/drei';
import { TextureLoader } from 'three';
import coinTextureUrl from './voyager.png'; // Ensure this is the path to your texture file

const RotatingCoin = () => {
  const coinRef = useRef();
  const texture = useLoader(TextureLoader, coinTextureUrl); // Load the texture

  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Cylinder
        ref={coinRef}
        args={[1, 1, 0.1, 32]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.5, 0.5, 0.5]}
      >
        {/* Apply the loaded texture to the material */}
        <meshStandardMaterial map={texture} metalness={0.95} roughness={0.001} />
      </Cylinder>
      <SpotLight
        position={[1, -1, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={1800}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
};

const Scene = () => {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 10],
        zoom: 400,
        up: [0, 0, 1],
        near: -100,
        far: 100,
      }}
    >
      <ambientLight intensity={0.5} />
      <RotatingCoin />
    </Canvas>
  );
};

export default Scene;
