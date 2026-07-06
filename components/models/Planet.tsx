import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import AtmosphereMesh from "./AtmosphereMesh";
import { getRandomPlanetTexture } from "@/lib/utils";

const planetPosition = new THREE.Vector3(1.75, -0.75, 3.5);

const Planet = () => {
	const planetRef = useRef<THREE.Mesh>(null);
	const map = useLoader(THREE.TextureLoader, getRandomPlanetTexture());

	const planetRadius = 1.5;

	useFrame(() => {
		if (planetRef.current) {
			planetRef.current.rotation.y += 0.00025;
		}
	});

	return (
		<group position={planetPosition} rotation-z={THREE.MathUtils.degToRad(-23)}>
			<mesh ref={planetRef}>
				<icosahedronGeometry args={[planetRadius, 32]} />
				<meshStandardMaterial map={map} />
			</mesh>

			<AtmosphereMesh radius={planetRadius * 1.005} />
		</group>
	);
};

export default Planet;
