import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE


const SpinningMonolith = ({ position, children }) => {
  const monolithRef = useRef();
  const [isSpinning, setIsSpinning] = useState(true);
  const [iframeStyle, setIframeStyle] = useState({});

  useFrame(() => {
    if (monolithRef.current && isSpinning) {
      monolithRef.current.rotation.y += 0.01;
    }
  });

  const handleHover = (hovered) => {
    setIsSpinning(!hovered);
  };

  useFrame(({ camera }) => {
    if (monolithRef.current) {
      // Get the world position of the 3D object
      const worldPosition = new THREE.Vector3();
      monolithRef.current.getWorldPosition(worldPosition);

      // Calculate the position of the iframe overlay
      const screenPosition = worldPosition.clone().project(camera);
      const x = (screenPosition.x + 1) / 2 * window.innerWidth;
      const y = (-screenPosition.y + 1) / 2 * window.innerHeight;

      // Set the position of the iframe overlay
      setIframeStyle({
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      });
    }
  });

  return (
    <mesh
      ref={monolithRef}
      position={position}
      onPointerOver={() => handleHover(true)}
      onPointerOut={() => handleHover(false)}
    >
      <boxGeometry args={[2.4, 5.4, 0.6]} />
      <meshStandardMaterial color="silver" metalness={1} roughness={0.15} />

      {/* This HTML element will overlay the 3D canvas */}
      <Html style={{ pointerEvents: 'none', ...iframeStyle }}>
        <div className="iframe-container" style={{ width: '200px', height: '150px' }}>
          {children}
        </div>
      </Html>
    </mesh>
  );
};

const MonolithScene = ({ position, children }) => {
  return (
    <Canvas
      style={{ width: '100%', height: '30vh' }} // Set the canvas size here
      camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 0] }} // Adjust the camera properties
    shadows>
      <ambientLight intensity={0.1} />
      <spotLight intensity={5000} angle={1} penumbra={0.2} position={[0, 0, 5]} castShadow />
      <SpinningMonolith position={position}>
        {children}
      </SpinningMonolith>
    </Canvas>
  );
};

export default MonolithScene;

// {monolithPositions.map((position, index) => (
//     <div key={index}>
//       <MonolithScene position={position}>
//         {/** Add your iframe content here */}
//         <iframe
//           title={`iframe-${index}`}
//           src={`data:text/html,<html><body><p>This is some text on the iframe.</p></body></html>`}
//           style={{ width: '100%', height: '100%' }}
//         ></iframe>
//       </MonolithScene>
//     </div>
//   ))}