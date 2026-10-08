import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Experience {
  constructor() {
    this.sizes = {
      width: window.innerWidth,
      height: 800,
    };

    this.canvas = document.querySelector(".webgl");

    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
    console.log(this.clock);

    this.init();
  }

  init() {
    window.addEventListener("resize", this.resize.bind(this));

    this.createCamera();
    this.createObjects();
    this.createRenderer();
    this.animate();
  }

  createCamera() {
    this.camera= new THREE.OrthographicCamera(-1, 1, 1, -1, 0 ,1);
    this.scene.add(this.camera);

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.render(this.scene, this.camera);
  }

  createObjects() {
    const geometry = new THREE.PlaneGeometry(20, 20);

    const material = new THREE.MeshMatcapMaterial({
      color: "#ff0000",
    });

    this.plane = new THREE.Mesh(geometry, material);

    this.scene.add(this.plane);
  }

  animate() {
    const elapsedTime = this.clock.getElapsedTime();

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.sizes.width = window.innerWidth;
    //this.sizes.height = window.innerHeight;

    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.render(this.scene, this.camera);
  }
}
