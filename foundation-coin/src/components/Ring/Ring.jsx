import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Cylinder, SpotLight } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useDrag } from '@use-gesture/react';
import coinTextureUrl from './voyagercoin.png'; // Ensure this is the path to your texture file

const RotatingCoin = () => {
  const coinRef = useRef();
  const texture = useLoader(TextureLoader, coinTextureUrl);

  // UseFrame for continuous rotation
  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.x += 0.01;
      coinRef.current.rotation.y += 0.01;
    }
  });

  // Drag handler to add additional rotation
  const bind = useDrag(({ movement: [mx, my], memo = coinRef.current.rotation }) => {
    if (coinRef.current) {
      coinRef.current.rotation.x = memo.x + my * 0.01;
      coinRef.current.rotation.y = memo.y + mx * 0.01;
    }
    return memo;
  });

  return (
    <>
      <Cylinder
        {...bind()}
        ref={coinRef}
        args={[1, 1, 0.1, 32]}
        rotation={[0, 0, Math.PI]}
        scale={[0.3, 0.3, 0.3]}
      >
        <meshStandardMaterial map={texture} metalness={0.95} roughness={0.001} />
      </Cylinder>
      <SpotLight
        position={[-1, -1, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={13800}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
};

const Scene = () => {
  return (
    <div style={{ width: '100%', height: '28vh' }}> {/* Adjust the size as needed */}
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 10],
          zoom: 400,
          up: [0, 0, 1],
          near: -100,
          far: 100,
        }}
        style={{ width: '100%', height: '35vh' }} // Set the size of the Canvas
      >
        <ambientLight intensity={0} />
        <RotatingCoin />
      </Canvas>
    </div>
  );
};

export default Scene;
