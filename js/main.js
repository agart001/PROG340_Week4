import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 2;
camera.UpdateProjectionMatrix();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0xFFCC00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 10, 0, 25 );
scene.add( light );


renderer.render( scene, camera )