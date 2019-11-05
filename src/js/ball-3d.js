Spheres = {};
var local = Spheres;
var wrapperCW = document.getElementById('totalpeople').clientWidth;
var wrapperCH = document.getElementById('totalpeople').clientHeight;
local.wHalfX =  wrapperCW/ 2;
local.wHalfY = wrapperCH / 2;
local.rangeFact = 1;
local.mouseX = 0;
local.mouseY = 0;
local.materials = [];
local.matColors = [];
local.geometries = [];
local.particleSystems = [];
local.particleRotations = [];
local.particleGroupVelocity = [];
local.particleTweens = [];
local.markers = [{"id":"313","lat":"42.4882","lng":"-71.5871"}, {"id":"314","lat":"40.0107","lng":"-75.2363"}, {"id":"315","lat":"39.5717","lng":"-104.987"}, {"id":"316","lat":"37.6489","lng":"-122.214"}, {"id":"317","lat":"-32.3244","lng":"-56.999"}, {"id":"318","lat":"28.2269","lng":"30.1885"}, {"id":"319","lat":"52.643","lng":"-2.15524"}, {"id":"320","lat":"23.2816","lng":"113.553"}, {"id":"321","lat":"31.2784","lng":"121.155"}, {"id":"322","lat":"-30.0692","lng":"150.862"}, {"id":"323","lat":"-30.373","lng":"143.393"}, {"id":"324","lat":"7.44947","lng":"165.19"}, {"id":"325","lat":"58.8591","lng":"72.3777"}, {"id":"326","lat":"14.6897","lng":"5.58085"}, {"id":"327","lat":"-27.9169","lng":"34.7605"}];
local.coordinates = {"coordinates":[]};
local.init = function() 
{ 
  new Date().getTime(); 

  local.container = document.createElement( 'div' );
  document.getElementById('totalpeople').appendChild( local.container );
  
  local.camera = new THREE.PerspectiveCamera( 35, wrapperCW / wrapperCH, 2, 10000 );
  local.camera.position.z = 4000;
  
  local.scene = new THREE.Scene();
  local.scene.fog = new THREE.FogExp2( 0x09397c, 0.00006 ); 
  
  local.spinValues = {x:0,y:0,z:0,camDist:local.camera.position.z};
    
  local.setSpinning();
  
  local.generateLinesSystem(1000, 200);

  var i=0;
  var limit = 7;
  for (i=0;i<limit;++i)
    {
      local.generateParticleSystem(400+100*i, 350+Math.random()*100+20*(i*i+1), Math.random()*10+15); 
    }
 
  
  
  local.renderer = new THREE.WebGLRenderer( { clearAlpha: 1,antialias:true, alpha: true} );
  local.renderer.setSize( wrapperCW, wrapperCH );
  local.renderer.autoClear = false;
  local.container.appendChild( local.renderer.domElement );
  
  TweenMax.to(local,6,{rangeFact:1.2,yoyo:true,repeat:-1, ease:Quad.easeInOut});
  
  local.render();
  
  
  $(document).on('mousemove', local.onDocumentMouseMove);
  $(document).on('mousewheel', local.onDocumentMouseWheel);
  $(window).on('resize', local.onWindowResize);
};



/* 
	generate Particle sphere geometry points and set them to motion
  @nodes - number of particles to generate;
  @range - radius of sphere

*/
local.generateParticleGeometry = function(nodes, range) {
  var geometry = new THREE.Geometry();
  if (nodes === undefined) nodes = 100;
  nodes = Math.floor(nodes);
  if (range === undefined) range = 500;
  var r = 500;
  var systemID = local.particleSystems.length-1;
  var tweenArr = [];
  var groupVelocity = Math.random()*6+0.2; 
  local.particleGroupVelocity.push(groupVelocity);
  local.particleTweens[systemID] = tweenArr;
  for ( i = 0; i < nodes; i ++ ) {

    var vertex = new THREE.Vector3();  
    var node = i%local.markers.length-1;
    
    var initTheta = Math.random()*2*Math.PI;
    var initPhi = Math.random()*Math.PI;
    var theta = (local.markers[node]) ? local.markers[node].lat  : 29.233;
    var phi = (local.markers[node]) ? local.markers[node].lng :75.5444;      
    theta = (90+theta)*Math.PI/180;//+(Math.random()*2-1)/10;
    phi = -(phi)*Math.PI/180;//+(Math.random()*2-1)/10;
    
    var initX =  range*Math.sin(initTheta)*Math.cos(initPhi);//  
    var initY =  range*Math.sin(initTheta)*Math.sin(initPhi);// 
    var initZ =  range*Math.cos(initTheta); 

    vertex.x = initX;//Math.sin(i) * i;
    vertex.y = initY;// Math.cos(i) * i;//Math.random()*100;
    vertex.z = initZ;//Math.random()*1000;



    geometry.vertices.push( vertex );

    var tartheta = theta + Math.sin(i)*2* Math.PI/180;// + 
    var tarphi = phi + Math.cos(i)*Math.PI/180;//+ 
    var tarX = range * Math.sin(tartheta)*Math.cos(tarphi);
    var tarY = range * Math.sin(tartheta)*Math.sin(tarphi);   //var tarY = (range+i/10) * Math.sin(tartheta)*Math.sin(tarphi); 
    var tarZ = range * Math.cos(tartheta); 
    var tween;
    tweenArr.push(tween);
    tween = TweenMax.to(vertex,1,{
      x:tarX/range,
      y:tarY/range,
      z:tarZ/range,
      ease:Linear.easeNone, //Quad.easeInOut,
      delay:i/nodes*4,
      onComplete:local.moveGeomVertex,
      onCompleteParams:[systemID,i, vertex,tartheta,tarphi,range]
    });
    
    }
  local.geometries.push(geometry);
  return geometry;
};

/*local.initializeGeomPoints = function(tween, i, vertex, theta, phi, range) {
  }
*/

local.moveGeomVertex = function(systemID ,i, vertex,theta, phi, range) {
		if (local.particleTweens[systemID][i-1] === undefined) return;
  	var distFact = local.particleGroupVelocity[systemID];
    var tartheta = theta + Math.sin(i%local.markers.length-1)*distFact*2* Math.PI/180;// + Math.random()*Math.PI/180;// + 1*Math.PI/180;//Math.random()*2*Math.PI;
    var tarphi = phi + Math.cos(i%local.markers.length-1)*distFact*Math.PI/180;// + Math.random()*.2;// + Math.random()*Math.PI/180;// + 1*Math.PI/180;////Math.random()*Math.PI;
    
    //var tarX = (range+i/10) * Math.sin(tartheta)*Math.cos(tarphi);
    var tarX = range * local.rangeFact * Math.sin(tartheta) *Math.cos(tarphi);
    var tarY = range * local.rangeFact * Math.sin(tartheta) * Math.sin(tarphi);   //var tarY = (range+i/10) * Math.sin(tartheta)*Math.sin(tarphi); 
    var tarZ = range * local.rangeFact * Math.cos(tartheta);  
    //var tarZ = Math.cos(tartheta)*(range+i/10);
  var tween = local.particleTweens[systemID][i-1];
tween.totalDuration(Math.random()); 
  tween.updateTo({x:tarX,y:tarY,z:tarZ,delay:0,onCompleteParams:[systemID,i,vertex,tartheta,tarphi,range]},true); 

}




local.generateParticleMaterial = function(pSize) {
  var material = new THREE.ParticleSystemMaterial({
    color: '#'+Math.floor(Math.random()*16777215).toString(16),
    size: pSize, 
    // Cross domain image issue, needs to be hosted locally in order to provide texture.
    
    //map: THREE.ImageUtils.loadTexture(
    //  "https://i.imgur.com/5Ofb1jd.png"
    //),
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  local.materials.push(material);
  local.matColors.push({h:Math.random()*0.6+0.2,s:Math.random(),l:Math.random()*0.6+0.2});
  var num = local.matColors.length-1;
  TweenMax.to(local.matColors[num],Math.random()+1,{h:Math.random()*0.6+0.2,s:Math.random(),l:Math.random()*0.6+0.2,onUpdate:local.updateMaterialColor,onUpdateParams:[num], repeat:-1, yoyo:true}); 
  return material;
};


local.generateLineGeometry = function(nodes, range) {
  var geometry = new THREE.Geometry();
  if (nodes === undefined) nodes = 100;
  nodes = Math.floor(nodes);
  if (range === undefined) range = 500;  
  var r = 500;
  var divs = Math.random()*600 + 20;
  var variation = Math.random()*20+100;
  for ( i = 0; i < nodes; i ++ ) {
      var p;
      var theta = i/range;//*2*Math.PI
    
     // for (p=0; p< Math.random()*40; ++p) 
      //  {
          var vertex = new THREE.Vector3();   
           +Math.random()/variation; 
           var node = i%local.markers.length;
          var phi = (Math.cos(i/50)*180)+Math.random(); 
           var theta = (Math.tan(i/500)*180)+Math.random();//*Math.PI +Math.random();//(local.markers[node]) ? local.markers[node].lat  : -29.233*2;
           theta = (90+theta)*Math.PI/180;//+(Math.random()*2-1)/10;
    phi = -(phi)*Math.PI/180;
   // var phi = (local.markers[node]) ? local.markers[node].lng :75.5444;      
    //theta = (90+theta)*Math.PI/180;//+(Math.random()*2-1)/10;
    //phi = -(phi)*Math.PI/180;//+(Math.random()*2-1)/10;
           
          var initX = range * Math.sin(theta)*Math.cos(phi);//  
          var initY = range * Math.sin(theta)*Math.sin(phi);//    
          var initZ = range * Math.cos(theta);

          vertex.x = initX;//Math.sin(i) * i;
          vertex.y = initY;// Math.cos(i) * i;//Math.random()*100;
          vertex.z = initZ;//Math.random()*1000;

          geometry.vertices.push( vertex );
       // }
    }
  local.geometries.push(geometry);
  return geometry;
};

local.generateLineMaterial = function() {
  var material = new THREE.LineBasicMaterial({
    color: '#'+Math.floor(Math.random()*16777215).toString(16), 
    linecap: 'round',
    linejoin: 'round',
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  local.materials.push(material);
  local.matColors.push({h:Math.random()*0.2+0.8,s:Math.random(),l:Math.random()*0.2+0.8});
  var num = local.matColors.length-1;
  TweenMax.to(local.matColors[num],Math.random()+2,{h:Math.random()*0.2+0.8,s:Math.random(),l:Math.random()*0.2+0.8,onUpdate:local.updateMaterialColor,onUpdateParams:[num], repeat:-1, yoyo:true});
  return material;
};

/*
	update material color onUpdate of color tween.
*/
local.updateMaterialColor = function(item)
{
  color = local.matColors[item];//item];
  var h = color.h;//( 360 * ( color.h ) % 360 ) / 360;
  local.materials[item].color.setHSL( h, color.s, color.l );


};
/*
	generate a new line mesh sphere
  @nodes - number of connection points connecting each line.
  @range - radius of sphere
*/
local.generateLinesSystem = function(nodes,range)
{
  local.particleRotations.push({x:(Math.random()>0.5)? -1 : 1,y:(Math.random()>0.5)? -1 : 1});
  var mat;
  var geom;
  var particles;
      mat = local.generateLineMaterial();
      geom = local.generateLineGeometry(nodes,range);
      geom.verticesNeedUpate = true;
      particles = new THREE.Line( geom, mat );
  
  particles.sortParticles = true;
    //spinParticles();
  local.scene.add(particles);
  local.particleSystems.push(particles);
  
  
 // TweenMax.to(particles.rotation,1,{z:Math.random()*4-2,repeat:-1, yoyo:true, ease:Quad.easeInOut});
};


/*
	Initialize a new Particle Sphere
  @nodes - number of particles
  @range - radius of particle sphere
  @pSize - size of individual particles
*/
local.generateParticleSystem = function(nodes,range,pSize)
{
  local.particleRotations.push({x:(Math.random()>0.5)? -1 : 1,y:(Math.random()>0.5)? -1 : 1});
  
  var mat;
  var geom;
  var particles;
      mat = local.generateParticleMaterial(pSize);
      geom = local.generateParticleGeometry(nodes,range);
      particles = new THREE.ParticleSystem( geom, mat );  

  particles.sortParticles = true;
    //spinParticles();
  local.scene.add(particles);
  local.particleSystems.push(particles);
 // TweenMax.to(particles.rotation,1,{z:Math.random()*4-2,repeat:-1, yoyo:true, ease:Quad.easeInOut});
};


/*
	Render call to redraw three js scene
*/
local.render = function() {

    var time = Date.now() * 0.00005;
    
    local.camera.position.x += ( local.mouseX - local.camera.position.x ) * 0.05;
    local.camera.position.y += ( -local.mouseY - local.camera.position.y ) * 0.05;

    local.camera.lookAt( local.scene.position );

    local.renderer.render( local.scene, local.camera );
    local.renderer.clear(false,true,false);
    //local.renderer.render(scene2,camera);*/
};

local.onDocumentMouseWheel = function(evt) 
{
  var d = evt.originalEvent.wheelDelta*10;
  TweenMax.to(local.camera.position,1,{z:'-='+d});
};

local.onDocumentMouseMove = function( evt ) {

    
  
    local.mouseX = (evt.clientX - local.wHalfX)*0.5;
    local.mouseY = (evt.clientY - local.wHalfY)*0.5;
    var i=0;
    var limit = local.particleSystems.length;
    for (i=0;i<limit;++i)
    {
      var xSign = (i+1);// * local.particleRotations[i].x; 
      var ySign = (i+1);// * local.particleRotations[i].y;
       TweenMax.to(local.particleSystems[i].rotation,1,{y:xSign * local.mouseX/180*Math.PI,x:ySign * local.mouseY/180*Math.PI});
    }
   

};

local.setSpinning = function() 
{
  TweenMax.to(local.spinValues,10,{
    x:'+='+(Math.random()*6-3),
    y:'+='+(Math.random()*6-3),
    z:'+='+(Math.random()*6-3),
    camDist:(Math.random()*3000+500),
    onUpdate:local.onSpinSpheres,
    onComplete: local.setSpinning,
    ease:Quad.easeInOut,
  })
}

local.onSpinSpheres = function()
{
   var i=0;
    var limit = local.particleSystems.length;
    for (i=0;i<limit;++i)
    {
      //console.log(i);
      var xSign = 1;//(i+1) *
      var ySign = 1;//(i+1) * 
    }
}

local.onWindowResize = function(event) {
  local.wHalfX = wrapperCW / 2;
  local.wHalfY = wrapperCH / 2;

  local.camera.aspect = wrapperCW / wrapperCH;
  local.camera.updateProjectionMatrix();
  local.renderer.setSize( wrapperCW, wrapperCH );
  //local.render();  
};

local.animate = function()
{
  requestAnimationFrame( local.animate );
  local.render();
};

$( document ).ready(function() {
  local.init();
      local.animate();
  //local.getServerCoords();  // Commented out my initial pull from MySQL database of lat lng coords. subbed in dumby coords for remote ops.
});