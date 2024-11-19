import { useEffect, useRef } from "react";
import * as THREE from "three";

const Fondo = () => {
  const mountRef = useRef(null); // Referencia para el contenedor del canvas

  useEffect(() => {
    let scene, camera, renderer, cube, arrParticles ; // Declara variables fuera para poder limpiarlas

    const init = () => {
      // Función para inicializar la escena
      scene = new THREE.Scene();
      //parametro 1 es el angulo de vision, tamaño, 1 es que tan cerca se va a renderizar lo que esta dentro
      //del rango de vision y 1000 que tan lejos va a estar los objetos para renderizarse
      camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,1000);
      //tipo de renderizado 
      renderer = new THREE.WebGLRenderer();
      //tamaño de renderizado
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x333333, 1);
      mountRef.current.appendChild(renderer.domElement);
      const ligth = new THREE.DirectionalLight(0xffffff,0.5)
      ligth.position.set(-1, 3, 1)
      scene.add(ligth)
      //esto es para ver donde esta la luz
      // const helper = new THREE.DirectionalLightHelper(ligth,5)
      // scene.add(helper)
      // generacion del cubo
      // const geometry = new THREE.BoxGeometry(1, 1, 1);
      // const material = new THREE.MeshBasicMaterial({ color: 0x0099ff });
      // cube = new THREE.Mesh(geometry, material);

      // scene.add(cube);


      //generacion de las particulas
      arrParticles=[];

      const loader=new THREE.TextureLoader();

      loader.crossOrigin= ""
      
      loader.load('../../public/img/par2t.png', (texture)=>{
        console.log('holi')
        if (!scene) return;
        console.log('holix2')
        //crear un plano geometrico de 300x300
        const particleGeo = new THREE.PlaneGeometry(30,30)

        //2. el material
        const particleMaterial = new THREE.MeshLambertMaterial({
          map:texture,
          transparent:true,
        })

        const NUMB_OF_PARTICLES = 300;

        for (let p = 0; p < NUMB_OF_PARTICLES; p++){

          const particle = new THREE.Mesh(particleGeo,particleMaterial);
          //posicionarla aleatoriamente en x y z 
          particle.position.set(
            Math.random() * 500 - 250, //x
            Math.random() * 500 - 250, //y
            Math.random() * 100 - 100, //z
          )
          //aleatoriamente en la escena
          particle.rotation.z = Math.random() * 300
          //añadimos la particula a la escena
          scene.add(particle);
          arrParticles.push(particle)
        }

      })
      camera.position.z = 10;
    }

    const animate = () => {
      requestAnimationFrame(animate);

      if (arrParticles) {
       arrParticles.forEach(particle =>{
        particle.rotation.z += 0.001
       })
      }
      if (renderer && scene && camera) {
        // Verifica si existen antes de renderizar.
        renderer.render(scene, camera);
      }
    };

    const handleResize = () => {
      // Función para redimensionar el canvas
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    init();
    animate();

    window.addEventListener("resize", handleResize); // Listener para el evento resize

    return () => {
      window.removeEventListener("resize", handleResize); // Limpieza del listener
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Elimina las variables de Three.js
      scene = null;
      camera = null;
      renderer = null;
      // cube = null;
      arrParticles = null;
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 h-screen w-screen" />; // Usa useRef y h-screen/w-screen
};

export default Fondo;
