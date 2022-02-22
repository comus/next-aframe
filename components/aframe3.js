import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Marker from '../components/marker'
import ReactDOM from 'react-dom'

import 'aframe/dist/aframe-master.js'
import 'ar.js/aframe/build/aframe-ar'

function Scene ({ children }) {
  const [el, setEl] = useState()

  useEffect(() => {
    if (el) return

    const sceneEl = document.getElementById('scene')
    setEl(sceneEl)
  }, [el])

  if (!el) return null

  return ReactDOM.createPortal(
    children,
    el
  )
}

export default function Aframe () {
  return (
    <>
      <div
        style={{ height: '100%' }} dangerouslySetInnerHTML={{
          __html: `
          <a-scene id="scene" embedded arjs style="display: block; width: 100%;">
            <a-entity camera></a-entity>
          </a-scene>
`
        }}
      />
      <Scene>
        <a-marker preset='hiro'>
          <a-entity
            position='0 0 0'
            rotation='0 0 0'
            scale='0.05 0.05 0.05'
            gltf-model='/examples/image-tracking/nft/trex/scene.gltf'
          />
        </a-marker>
        <a-entity camera />
        <a-box position='0 0 -10' rotation='0 0 0' color='#00ff00' />
      </Scene>
    </>
  )
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
