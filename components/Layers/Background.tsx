import LightPillar from "@/components/effects/LightPillar";
import Galaxy from "@/components/effects/Galaxy";

const Background = () => {
	return (
		<>
			<div className="w-full h-screen absolute inset-0">
				<LightPillar
					topColor="#5227FF"
					bottomColor="#FF9FFC"
					intensity={1}
					rotationSpeed={0.1}
					glowAmount={0.002}
					pillarWidth={5}
					pillarHeight={0.4}
					noiseIntensity={0.5}
					pillarRotation={25}
					interactive={false}
					mixBlendMode="screen"
					quality="high"
				/>
			</div>

			<div className="w-full h-screen absolute inset-0 z-10">
				<Galaxy
					mouseRepulsion={false}
					mouseInteraction={false}
					density={8}
					glowIntensity={0.7}
					saturation={0}
					hueShift={140}
					twinkleIntensity={0.1}
					rotationSpeed={0}
					autoCenterRepulsion={0}
					starSpeed={0}
					speed={0.1}
					transparent
				/>
			</div>
		</>
	);
};

export default Background;
