import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../utils/particlesConfig";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={particlesConfig}
		/>
	);
};

export default ParticlesBackground;
