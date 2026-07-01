import { useBackground } from "@/lib/store/BackgroundStore";
import * as THREE from "three";

function getFresnelShaderArgs({ rimHex = "0xffffff", facingHex = "0xffffff" } = {}) {
	const uniforms = {
		color1: { value: new THREE.Color(rimHex) },
		color2: { value: new THREE.Color(facingHex) },
		fresnelBias: { value: 0.1 },
		fresnelScale: { value: 1.0 },
		fresnelPower: { value: 4.0 },
	};
	const vs = `
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `;
	const fs = `
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;
	const args = {
		uniforms: uniforms,
		vertexShader: vs,
		fragmentShader: fs,
		transparent: true,
		blending: THREE.AdditiveBlending,
	};
	return args;
}

const AtmosphereMesh = ({ radius }: { radius: number }) => {
	const nebulaTopColor = useBackground((state) => state.nebulaTopColor);
	const nebulaBottomColor = useBackground((state) => state.nebulaBottomColor);
	const args = getFresnelShaderArgs({
		rimHex: nebulaTopColor,
		facingHex: nebulaBottomColor,
	});

	return (
		<mesh>
			<icosahedronGeometry args={[radius, 32]} />
			<shaderMaterial {...args} />
		</mesh>
	);
};

export default AtmosphereMesh;
