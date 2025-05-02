//-------------------ROOT ACCESS------------------------------------------
const root = document.getElementById('root');

//----------------Scroll Reveal Animation Setup--------------------------
const revealOptions = {
  threshold: 0.1,
  rootMargin: "0px"
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, revealOptions);

function addRevealAnimation(element) {
  element.classList.add('scroll-reveal');
  revealObserver.observe(element);
}

//----------------Page Content--------------------------------------------
const title = document.createElement('div');
title.innerText = 'UNLEASH THE INNER BEAST';
title.className = "title-text";
root.appendChild(title);
addRevealAnimation(title);

//----------------Monster Logo--------------------------------------------
const logo = document.createElement('img');
logo.src = 'assets/monster-logo.png'; 
logo.alt = 'Monster Energy Logo';
logo.className = 'monster-logo';
root.appendChild(logo);
addRevealAnimation(logo);

//----------------Main Content Text---------------------------------------
const content = document.createElement('div');
content.className = "page-content";
content.innerHTML = `
<div class="content-container">
  <p>Welcome to the world of unstoppable energy.</p>
  <p>Monster Energy isn't just a drink—it's a lifestyle. Made for those who never back down, who live fast and push harder. Whether you're grinding at the gym, racing through the streets, or just chasing the next thrill, Monster fuels your fire.</p>
  
  <div class="feature-box">
    <h3>What's Inside the Can?</h3>
    <ul>
      <li>A powerful blend of caffeine, taurine, and B-vitamins</li>
      <li>Explosive flavor that hits like a storm</li>
      <li>Zero compromises, full throttle energy</li>
    </ul>
  </div>
  
  <div class="feature-box">
    <h3>Why Monster?</h3>
    <ul>
      <li>✅ Intense, long-lasting boost</li>
      <li>✅ Sleek, iconic design</li>
      <li>✅ Trusted by athletes, gamers, and creators worldwide</li>
    </ul>
  </div>
  
  <div class="cta-box">
    <h2>Join the Movement</h2>
    <p>This isn't just a drink—it's the fuel of champions.</p>
    <p class="cta-text">Are you ready to unleash your inner beast?</p>
    <p class="tagline">Grab a Monster. Feel the power. Own the moment.</p>
  </div>
</div>
`;
root.appendChild(content);
addRevealAnimation(content);

//----------------Monster Can---------------------------------------------
const can = document.createElement('img');
can.src = '/assets/cans.png'; 
can.alt = 'Monster Energy Can';
can.className = 'monster-can';
root.appendChild(can);
addRevealAnimation(can);

//--------------Canvas for 3D Text Effect-------------------------------
const canvas = document.createElement('canvas');
canvas.id = 'monster-canvas';
root.appendChild(canvas);
addRevealAnimation(canvas);

//-----------------Three.js 3D Text Effect Setup-------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, 400);

//-----------------Lighting----------------------------------------------
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x4CAF50, 2, 50);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

//-----------------Font and Text Geometry-------------------------------
const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
  const geometry = new THREE.TextGeometry('MONSTER', {
    font: font,
    size: 2.5,
    height: 1,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.3,
    bevelSize: 0.2,
    bevelSegments: 5,
  });

  const material = new THREE.MeshPhongMaterial({ 
    color: 0x4CAF50,
    specular: 0x111111,
    shininess: 30
  });
  
  const textMesh = new THREE.Mesh(geometry, material);
  geometry.center();
  scene.add(textMesh);

  //------------Animation Loop-------------------------
  function animate() {
    requestAnimationFrame(animate);
    textMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});

//-----------------Resize Handling---------------------------------------
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / 400;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, 400);
});

//-----------------Add Social Media Icons-------------------------------
const socialContainer = document.createElement('div');
socialContainer.className = 'social-container';
socialContainer.innerHTML = `
  <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
  <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
  <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
  <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
`;
root.appendChild(socialContainer);
addRevealAnimation(socialContainer);