import * as THREE from 'three';
 

// Renderer
const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.shadowMap.enabled = true;

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

// Camera
const camera = new THREE.PerspectiveCamera(
  60, // fov
  window.innerWidth / window.innerHeight, // aspect
  0.1, // near
  1000 // far
);
camera.position.set(-3, 3, 7);
scene.add(camera);

// Light
const ambientLight  = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight('white', 3);
directionalLight.position.set(-3, 5, 1);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Meshes
const boxMesh = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshLambertMaterial({ color: 'firebrick' })
);
boxMesh.position.y = 1;
boxMesh.castShadow = true;

const secMesh = new THREE.Mesh(
  new THREE.BoxGeometry(1.3, 1, 1),
  new THREE.MeshLambertMaterial({ color: "#2a48c7" })
);
secMesh.position.y = 2.5;
secMesh.castShadow = true;

const sphereMesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.3, 64, 64),
  new THREE.MeshLambertMaterial({ color: "#0xffff00" })
);
sphereMesh.position.set(0.3, 2.5, 0.3);
sphereMesh.castShadow = true;

const sphereMesh2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.3, 64, 64),
  new THREE.MeshLambertMaterial({ color: "#0xffff00" })
);
sphereMesh2.position.set(-0.3, 2.5, 0.3);
sphereMesh2.castShadow = true;

const groundMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshLambertMaterial({ color: '#092e66' })
);
groundMesh.rotation.x = THREE.MathUtils.degToRad(-90);
groundMesh.receiveShadow = true;

scene.add(boxMesh, secMesh, sphereMesh, sphereMesh2, groundMesh);

// Camera rotation variables
const radius = 10;
let angle = 0;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update camera position
  angle += 0.01; // Speed of rotation
  camera.position.x = boxMesh.position.x + radius * Math.cos(angle);
  camera.position.z = boxMesh.position.z + radius * Math.sin(angle);
  camera.lookAt(boxMesh.position);

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation
animate();
