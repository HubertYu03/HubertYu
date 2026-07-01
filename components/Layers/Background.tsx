import LightPillar from "@/components/effects/LightPillar";
import Galaxy from "@/components/effects/Galaxy";
import { getRandomIntInclusive } from "@/lib/utils";
import { useBackground } from "@/lib/store/BackgroundStore";

const Background = () => {
	const nebulaRotation = getRandomIntInclusive(-50, 50);
	const starsHue = getRandomIntInclusive(0, 360);
	const pillarWidth = getRandomIntInclusive(1, 10);
	const pillarHeight = Math.max(0.1, Math.random());

	const nebulaTopColor = useBackground((state) => state.nebulaTopColor);
	const nebulaBottomColor = useBackground((state) => state.nebulaBottomColor);

	return (
		<div className="z-0 w-screen h-screen absolute">
			<div className="absolute inset-0">
				<LightPillar
					topColor={nebulaTopColor}
					bottomColor={nebulaBottomColor}
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
