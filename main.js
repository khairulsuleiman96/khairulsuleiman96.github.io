const table = [
    "M", "Abuzar", "25", 1, 1,
    "F", "Amira", "25", 18, 1,
    "F", "Hanna", "21", 1, 2,
    "M", "Azeem", "25", 2, 2,
    "F", "Nayli", "24", 13, 2,
    "F", "Siti", "28", 14, 2,
    "M", "Haziq", "16", 15, 2,
    "M", "Ameer", "25", 16, 2,
    "F", "Noraziah", "24", 17, 2,
    "M", "Zul", "25", 18, 2,
    "M", "Afeeq", "27", 1, 3,
    "M", "Shahrin", "25", 2, 3,
    "M", "Zulkhaisy", "25", 13, 3,
    "M", "Mathias", "25", 14, 3,
    "M", "Jackie", "25", 15, 3,
    "F", "Nurul", "25", 16, 3,
    "M", "Mario", "25", 17, 3,
    "F", "Nana", "21", 18, 3,
    "M", "Hafizzudin", "25", 1, 4,
    "M", "Afkar", "25", 2, 4,
    "M", "Yusri", "34", 3, 4,
    "F", "Syakirah", "25", 4, 4,
    "M", "Nicholas", "24", 5, 4,
    "M", "Faizal", "25", 6, 4,
    "M", "Rohn", "25", 7, 4,
    "M", "Jason", "25", 8, 4,
    "F", "Jenny", "21", 9, 4,
    "M", "Harry", "27", 10, 4,
    "M", "Azhar", "25", 11, 4,
    "M", "Ibnu", "25", 12, 4,
    "M", "Demus", "25", 13, 4,
    "F", "Tiffany", "25", 14, 4,
    "M", "Haikal", "23", 15, 4,
    "M", "Hidayat", "25", 16, 4,
    "F", "Farhana", "25", 17, 4,
    "M", "Hadi", "25", 18, 4,
    "F", "Syahirah", "29", 1, 5,
    "M", "Aiman", "25", 2, 5,
    "M", "Luqman", "25", 3, 5,
    "F", "Syaheeda", "25", 4, 5,
    "M", "Firdaus", "26", 5, 5,
    "M", "Theo", "27", 6, 5,
    "M", "Malek", "24", 7, 5,
    "F", "Aisyah", "19", 8, 5,
    "M", "Hussein", "29", 9, 5,
    "M", "Anuar", "15", 10, 5,
    "M", "Syahrol", "28", 11, 5,
    "M", "Rusli", "34", 12, 5,
    "M", "Azizul", "39", 13, 5,
    "M", "Dickson", "26", 14, 5,
    "M", "Timothy", "25", 15, 5,
    "F", "Kamariah", "36", 16, 5,
    "F", "Yen", "24", 17, 5,
    "M", "Kelvin", "27", 18, 5,
    "M", "Cheong", "25", 1, 6,
    "F", "Izyan", "25", 2, 6,
    "M", "Izhar", "25", 4, 9,
    "M", "Jonathan", "28", 5, 9,
    "M", "Michael", "21", 6, 9,
    "F", "Cheng", "25", 7, 9,
    "F", "Kueh", "24", 8, 9,
    "M", "Farid", "25", 9, 9,
    "F", "Munirah", "24", 10, 9,
    "F", "Salbi", "26", 11, 9,
    "F", "Sirisha", "23", 12, 9,
    "M", "Iqbal", "23", 13, 9,
    "M", "Ijlal", "25", 14, 9,
    "M", "Justin", "25", 15, 9,
    "M", "Afeef", "24", 16, 9,
    "M", "Syabar", "25", 17, 9,
    "F", "Irene", "25", 18, 9,
    "M", "Kang", "25", 4, 6,
    "F", "Harley", "24", 5, 6,
    "M", "Zahir", "25", 6, 6,
    "M", "Rosli", "31", 7, 6,
    "F", "Ezzah", "24", 8, 6,
    "M", "Ahmad", "21", 9, 6,
    "M", "Syarkawi", "25", 10, 6,
    "M", "Talib", "30", 11, 6,
    "M", "Latip", "27", 12, 6,
    "M", "Hairul", "21", 13, 6,
    "M", "Sarafudin", "26", 14, 6,
    "M", "Risky", "24", 15, 6,
    "M", "Paul", "26", 16, 6,
    "F", "Audrey", "20", 17, 6,
    "M", "Kee", "28", 18, 6,
    "M", "Razak", "27", 1, 7,
    "F", "Aufa", "18", 2, 7,
    "M", "Zulkarnain", "32", 4, 10,
    "M", "Andy", "41", 5, 10,
    "M", "Akmal", "16", 6, 10,
    "M", "James", "26", 7, 10,
    "F", "Serena", "25", 8, 10,
    "F", "Zarifah", "25", 9, 10,
    "M", "Fikri", "23", 10, 10,
    "F", "Crystal", "25", 11, 10,
    "M", "Lan", "26", 12, 10,
    "M", "Idris", "24", 13, 10,
    "M", "Jalal", "29", 14, 10,
    "F", "Mei", "25", 15, 10,
    "M", "Lau", "24", 16, 10,
    "M", "Elvin", "24", 17, 10,
    "F", "Adina", "28", 18, 10,
    "M", "Arif", "21", 4, 7,
    "M", "Kamal", "22", 5, 7,
    "M", "Arabi", "25", 6, 7,
    "M", "Bakhri", "28", 7, 7,
    "M", "Jake", "21", 8, 7,
    "M", "Edward", "26", 9, 7,
    "M", "Lim", "29", 10, 7,
    "F", "Syasya", "36", 11, 7,
    "M", "Nasrol", "21", 12, 7,
    "M", "Suzalee", "38", 13, 7,
    "F", "Min", "24", 14, 7,
    "M", "Alam", "39", 15, 7,
    "M", "Yuen", "21", 16, 7,
    "M", "Ermin", "17", 17, 7,
    "M", "Nelson", "31", 18, 7
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
	
    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    //element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
	
	//gender colours
	if(table[i] == 'M'){
		element.style.backgroundColor = 'rgba(0,0,255)';
	}
	else{
		element.style.backgroundColor = 'rgba(255,0,203)';
	}
	
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
