import LightPillar from "@/components/effects/LightPillar";
import Galaxy from "@/components/effects/Galaxy";
import { getRandomHexColor, getRandomIntInclusive } from "@/lib/utils";

const Background = () => {
	const nebulaRotation = getRandomIntInclusive(-50, 50);
	const starsHue = getRandomIntInclusive(0, 360);
	const pillarWidth = getRandomIntInclusive(1, 10);
	const pillarHeight = Math.max(0.1, Math.random());

	return (
		<div className="z-0 w-screen h-screen absolute">
			<div className="absolute inset-0">
				<LightPillar
					topColor={getRandomHexColor()}
					bottomColor={getRandomHexColor()}
					intensity={1}
					rotationSpeed={0.1}
					glowAmount={0.003}
					pillarWidth={pillarWidth}
					pillarHeight={pillarHeight}
					noiseIntensity={0.1}
					pillarRotation={nebulaRotation}
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
					hueShift={starsHue}
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
