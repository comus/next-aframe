import 'aframe'
import '@ar-js-org/ar.js/aframe/build/aframe-ar'

import Marker from '../components/marker'

export default function Aframe () {
  console.log('lsdjflsdjf')
  return (
    <>
      <Marker src='/data/pattern-marker.png' />
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
          </a-scene>
      
      `
        }}
      />
    </>
  )
}
