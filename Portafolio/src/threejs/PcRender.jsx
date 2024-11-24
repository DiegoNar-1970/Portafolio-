import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const PcRender = () => {
  const mountRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, orbit, gltfLoader, modelAdded = false;

    const init = () => {
     
      // Crear la escena
      scene = new THREE.Scene();

      // Configurar la cámara
      const container = mountRef.current;
      if (container.children.length > 0) {
        container.removeChild(container.firstChild); // Elimina el canvas previo
      }
      const { clientWidth, clientHeight } = container;

      camera = new THREE.PerspectiveCamera(12, clientWidth / clientHeight, 0.1, 100);
      camera.position.set(1, 1, 1 ); // Ajustar posición inicial de la cámara

      // Configurar el renderizador
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x51323f54, 1); // Color de fondo de la escena
      container.appendChild(renderer.domElement); // Añadir el canvas al DOM

      // Añadir luces a la escena
      const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 7.5);
      scene.add(directionalLight);

      // Configurar los OrbitControls
      orbit = new OrbitControls(camera, renderer.domElement);
      orbit.enableDamping = true;
      orbit.dampingFactor = 0.05;

      // Cargar el modelo GLTF
      gltfLoader = new GLTFLoader();
      const textureLoader = new THREE.TextureLoader();
      const keyboardTexture = textureLoader.load(
        "../../public/models_3d/laptop/textures/Keyboard_baseColor.jpeg"
      );
      const logoTexture = textureLoader.load(
        "../../public/models_3d/laptop/textures/Metal_logo_baseColor.png"
      );
      const screenTexture = textureLoader.load(
        "../../public/models_3d/laptop/textures/screen_baseColor.jpeg"
      );
  
      gltfLoader.load("../../public/models_3d/laptop/scene.gltf", (gltf) => { 
        if(!modelAdded){
          modelAdded = true;
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              // Aquí podrías usar child.name para identificar partes específicas del modelo
              if (child.name === "Keyboard") {
                child.material = new THREE.MeshStandardMaterial({ map: keyboardTexture });
              } else if (child.name === "Logo") {
                child.material = new THREE.MeshStandardMaterial({ map: logoTexture });
              } else if (child.name === "Screen") {
                child.material = new THREE.MeshStandardMaterial({ map: screenTexture });
              }
            }
          });
          scene.add(gltf.scene);
        } 
        return;
      });

      // Iniciar el ciclo de animación
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      orbit.update();
      renderer.render(scene, camera);
    };

    const onResize = () => {
      // Actualizar la cámara y el renderizador en caso de redimensionar
      const container = mountRef.current;
      if (container) {
        const { clientWidth, clientHeight } = container;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
    };

    init();
    window.addEventListener("resize", onResize);

    return () => {
      // Cleanup: eliminar el canvas y eventos
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      modelAdded= false
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="top-0 end-0 w-[370px] h-[350px] sm:w-[360px] sm:h-[350px] transition-all duration-1000 
      md:w-[500px] md:h-[400px] overflow-hidden rounded-[1em]"
    ></div>
  );
};

export default PcRender;
