
/* Import everything we need from Three.js */

import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';

import ThreeMeshUI from 'three-mesh-ui';

/* Create the container object, the scene */

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x505050 );

/* Create the camera from which the scene will be seen */

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 1.6, 0 );
camera.lookAt( 0, 1, -1.8 );

/* Create the renderer object, with VR parameters enabled */

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.xr.enabled = true;
document.body.appendChild(VRButton.createButton(renderer));
document.body.appendChild( renderer.domElement );

/* Create basic room mesh, and add it to the scene */

const room = new THREE.LineSegments(
	new BoxLineGeometry( 6, 6, 6, 10, 10, 10 ).translate( 0, 3, 0 ),
	new THREE.LineBasicMaterial( { color: 0x808080 } )
);

scene.add( room );

/* Render loop (called ~60 times/second, or more in VR) */

renderer.setAnimationLoop( loop );

function loop() {
	renderer.render( scene, camera );
};
