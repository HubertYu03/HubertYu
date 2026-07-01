import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import * as THREE from "three";
import Planet from "../models/Planet";
import { useBackground } from "@/lib/store/BackgroundStore";

const sunDirection = new THREE.Vector3(-3, 1, -4.5);

const Experience = () => {
	const { x, y, z } = sunDirection;
	const nebulaBottomColor = useBackground((state) => state.nebulaBottomColor);

	return (
		<div className="z-20 w-screen h-screen pointer-events-none">
			<Canvas>
				<directionalLight position={[x, y, z]} intensity={5} color={nebulaBottomColor} />
				<Planet />

				<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
					<GizmoViewport axisColors={["#ff3600", "#009900", "#0033ff"]} labelColor="white" />
				</GizmoHelper>
			</Canvas>
		</div>
	);
};

export default Experience;
