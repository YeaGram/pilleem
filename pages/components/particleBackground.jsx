import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = () => {
   const particlesInit = async (main) => {
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
   };

   const particlesLoaded = (container) => {};
   return (
      <Particles
         id="tsparticles"
         init={particlesInit}
         loaded={particlesLoaded}
         options={{
            background: {
               color: {
                  value: "#881337",
               },
            },
            fpsLimit: 120,
            interactivity: {
               events: {
                  onClick: {
                     enable: false,
                     mode: "push",
                  },
                  onHover: {
                     enable: false,
                     mode: "repulse",
                  },
                  resize: true,
               },
               modes: {
                  push: {
                     quantity: 4,
                  },
                  repulse: {
                     distance: 200,
                     duration: 0.4,
                  },
               },
            },
            particles: {
               color: {
                  value: "#ffffff",
               },
               collisions: {
                  enable: true,
               },
               move: {
                  direction: "top",
                  enable: true,
                  random: false,
                  outModes: {
                     default: "bounce",
                  },
                  speed: 6,
                  straight: true,
               },
               number: {
                  density: {
                     enable: true,
                     area: 800,
                  },
                  value: 80,
               },
               opacity: {
                  value: 0.5,
               },
               shape: {
                  type: "polygon",
               },
               size: {
                  value: { min: 1, max: 3 },
               },
            },
            detectRetina: true,
         }}
      />
   );
};
export default App;
