import { useEffect, useRef } from "react";
import * as THREE from "three";

const SpaceScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, stars, meteorites, galaxy;

    const init = () => {
      // Debemos iniciar la escena
      scene = new THREE.Scene();

      // ahora la camara
      ////angulo de vision, tamaño, minimos, 1 y 2000 es que tan lejos puede estar de la camara
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,1,2000);
      camera.position.z = 100;

      // Elegimos un render ya que hay 3 
      renderer = new THREE.WebGLRenderer();
      //le pasamos el tamaño
      renderer.setSize(window.innerWidth, window.innerHeight);

      //creamos un render de color negro para simular el espacio
      renderer.setClearColor(0x000000, 1); 
      // debemos escoger el elemento Dom 
      mountRef.current.appendChild(renderer.domElement);

      // para generar la luz podemos usar el helper para saber donde esta la camara y asi es mas facil posiconarla
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Creamos las estrellas
      createStars();

      // cremos los meteoritos
      createMeteorites();

      // creamos la galaxia
      createGalaxy();
    };

    const createStars = () => {
      stars = [];
      const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      for (let i = 0; i < 1000; i++) {
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.set(
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000
        );
        scene.add(star);
        stars.push(star);
      }
    };

    const createMeteorites = () => {
      meteorites = [];
      const meteoriteGeometry = new THREE.SphereGeometry(1, 8, 8);
      const meteoriteMaterial = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
      });

      for (let i = 0; i < 40; i++) {
        const meteorite = new THREE.Mesh(meteoriteGeometry, meteoriteMaterial);
        meteorite.position.set(
          Math.random() * 200 - 100,
          Math.random() * 200 - 100,
          Math.random() * -500 - 100
        );
        scene.add(meteorite);
        meteorites.push(meteorite);
      }
    };

    const createGalaxy = () => {
      const galaxyGeometry = new THREE.BufferGeometry();
      const galaxyVertices = [];

      for (let i = 0; i < 9000; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        galaxyVertices.push(x, y, z);
      }

      galaxyGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(galaxyVertices, 3)
      );

      const galaxyMaterial = new THREE.PointsMaterial({
        size: 1,
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
      });

      galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
      scene.add(galaxy);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Animar estrellas
      if (stars) {
        stars.forEach((star) => {
          star.position.z += 0.5;
          if (star.position.z > 1000) {
            star.position.z = -1000;
          }
        });
      }

      // Mover meteoritos
      if (meteorites) {
        meteorites.forEach((meteorite) => {
          meteorite.position.z += 1.1;
          if (meteorite.position.z > 100) {
            meteorite.position.z = Math.random() * -500 - 100;
          }
        });
      }

      // Renderizar escena
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene = null;
      camera = null;
      renderer = null;
      stars = null;
      meteorites = null;
      galaxy = null;
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 h-screen w-screen" />;
};

export default SpaceScene;
