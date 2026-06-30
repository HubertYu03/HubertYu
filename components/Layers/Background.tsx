import LightPillar from "@/components/effects/LightPillar";
import Galaxy from "@/components/effects/Galaxy";

const Background = () => {
	return (
		<div className="z-0 w-full h-screen absolute">
			<div className="absolute inset-0">
				<LightPillar
					topColor="#5227FF"
					bottomColor="#FF9FFC"
					intensity={1}
					rotationSpeed={0.1}
					glowAmount={0.005}
					pillarWidth={3}
					pillarHeight={0.4}
					noiseIntensity={0.1}
					pillarRotation={25}
					interactive={false}
					mixBlendMode="screen"
					quality="medium"
				/>
			</div>

			<div className="absolute inset-0">
				<Galaxy
					mouseRepulsion={false}
					mouseInteraction={true}
					density={3}
					glowIntensity={0.8}
					twinkleIntensity={1}
					saturation={1}
					hueShift={220}
					rotationSpeed={0}
					autoCenterRepulsion={0}
					starSpeed={1}
					speed={0.01}
					transparent
				/>
			</div>
		</div>
	);
};

export default Background;
