// src/components/Monolith/MonolithScene.jsx

import React, { useRef, useState, Children } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const SpinningMonolith = ({ position, children }) => {
    const monolithRef = useRef();
    const [isSpinning, setIsSpinning] = useState(true);
  
    useFrame(() => {
      if (monolithRef.current && isSpinning) {
        monolithRef.current.rotation.y += 0.01;
      }
    });
  
    const handleHover = (hovered) => {
      setIsSpinning(!hovered);
    };
  
    return (
      <mesh
        ref={monolithRef}
        position={position}
        onPointerOver={() => handleHover(true)}
        onPointerOut={() => handleHover(false)}
      >
        <boxGeometry args={[2, 6, 0.5]} />
        <meshStandardMaterial color="silver" metalness={1} roughness={0.2} />
  
        {/* Add an iframe on one face of the monolith */}
        <Html scaleFactor={10} style={{ pointerEvents: 'none' }}>
          <div className="iframe-container" style={{ width: '200px', height: '150px', transform: 'translateZ(3.1px)' }}>
            {/** Add iframe content as a child */}
            {Children.toArray(children)}
          </div>
        </Html>
      </mesh>
    );
  };
  
  const MonolithScene = ({ position, children }) => {
    return (
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <spotLight intensity={5000} angle={0.4} penumbra={0.2} position={[0, 5, 5]} castShadow />
        <SpinningMonolith position={position} children={children}>
          {/* Access children directly */}
          {children}
        </SpinningMonolith>
      </Canvas>
    );
  };
  
  export default MonolithScene;