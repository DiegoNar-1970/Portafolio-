import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const PcRender = () => {
  const mountRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, orbit, gltfLoader;

    const init = () => {
      // Crear la escena
      scene = new THREE.Scene();

      // Configurar la cámara
      const container = mountRef.current;
      if (container.children.length > 0) {
        container.removeChild(container.firstChild); // Elimina el canvas previo
      }
      const { clientWidth, clientHeight } = container;

      camera = new THREE.PerspectiveCamera(50, clientWidth / clientHeight, 0.1, 200);
      camera.position.set(-1, 5.5, 2);

      // Configurar el renderizador
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 1); // Fondo negro
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 1.5; // Ajusta la exposición
      container.appendChild(renderer.domElement);

      // Luces
      const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
      scene.add(ambientLight);

      const centralLight = new THREE.PointLight(0xffffff, 2, 2000);
      centralLight.position.set(0, 5, 0);
      scene.add(centralLight);

      // OrbitControls
      orbit = new OrbitControls(camera, renderer.domElement);
      orbit.enableDamping = true;
      orbit.dampingFactor = 0.05;

      // Cargar el modelo GLTF
      gltfLoader = new GLTFLoader();
      gltfLoader.load("0models_3d/space2/scene.gltf", (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);


        scene.add(model);
      });

      // Iniciar la animación
      const animate = () => {
        requestAnimationFrame(animate);
        orbit.update();
        renderer.render(scene, camera);
      };

      animate();

      // Actualizar tamaño al redimensionar
      const onResize = () => {
        if (container) {
          const { clientWidth, clientHeight } = container;
          camera.aspect = clientWidth / clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(clientWidth, clientHeight);
        }
      };

      window.addEventListener("resize", onResize);

      return () => {
        // Cleanup
        window.removeEventListener("resize", onResize);
        renderer.dispose();
      };
    };

    init();
  }, []);

  return (
    <div
      ref={mountRef}
      className="top-0 end-0 w-[490px] h-[320px] sm:w-[440px] sm:h-[320px] 
      md:w-[600px] md:h-[370px] overflow-hidden rounded-[1em]"
    ></div>
  );
};

export default PcRender;



// const textureLoader = new THREE.TextureLoader();
// const keyboardTexture = textureLoader.load(
//   "../../public/models_3d/laptop/textures/Keyboard_baseColor.jpeg"
// );
// const logoTexture = textureLoader.load(
//   "../../public/models_3d/laptop/textures/Metal_logo_baseColor.png"
// );
// const screenTexture = textureLoader.load(
//   "../../public/models_3d/laptop/textures/screen_baseColor.jpeg"
// );
// if (child.isMesh) {
//   // Aquí podrías usar child.name para identificar partes específicas del modelo
//   if (child.name === "Keyboard") {
//     child.material = new THREE.MeshStandardMaterial({ map: keyboardTexture });
//   } else if (child.name === "Logo") {
//     child.material = new THREE.MeshStandardMaterial({ map: logoTexture });
//   } else if (child.name === "Screen") {
//     child.material = new THREE.MeshStandardMaterial({ map: screenTexture });
//   }
// }
// top-0 end-0 w-[490px] h-[320px] sm:w-[440px] sm:h-[320px] duration-1000 
//       md:w-[600px] md:h-[370px] overflow-hidden rounded-[1em]