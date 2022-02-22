// import 'aframe'
// import '@ar-js-org/ar.js/aframe/build/aframe-ar'

import Marker from '../components/marker'

export default function Aframe () {
  return (
    <>
      <Marker src='/data/hiro.png' />

      <div
        style={{ height: '100%' }} dangerouslySetInnerHTML={{
          __html: `
          <a-scene embedded arjs style="display: block; width: 100%;">
            <a-marker preset="hiro">
              <a-entity
              position="0 0 0"
              rotation="0 0 0"
              scale="0.05 0.05 0.05"
              gltf-model="/examples/image-tracking/nft/trex/scene.gltf"
              ></a-entity>
            </a-marker>
            <a-entity camera></a-entity>
            <a-box position='0 0 -10' rotation='0 0 0' color='#00ff00'></a-box>
          </a-scene>
      `
        }}
      />
    </>
  )
}
