import 'aframe'
import '@ar-js-org/ar.js/aframe/build/aframe-ar'

export default function Aframe () {
  return (
    <div
      style={{ height: '100%' }} dangerouslySetInnerHTML={{
        __html: `
        <a-scene embedded arjs>
          <a-marker type="pattern" url="/data/pattern-marker-1024.patt">
            <a-entity
            position="0 0 0"
            rotation="0 0 0"
            scale="0.1 0.1 0.1"
            gltf-model="/data/1x1x1(0x0x0.5).gltf"
            ></a-entity>
          </a-marker>
          <a-entity camera></a-entity>
          <a-box position='-1 0.5 -3' rotation='0 45 0' color='#00ff00'></a-box>
          <a-sphere position='0 1.25 -5' radius='1.25' color='#EF2D5E'></a-sphere>
          <a-cylinder position='1 0.75 -3' radius='0.5' height='1.5' color='#FFC65D'></a-cylinder>
        </a-scene>
    
    `
      }}
    />
  )
}
