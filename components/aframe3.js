import 'aframe'
import '@ar-js-org/ar.js/aframe/build/aframe-ar'

// import { useEffect, useState } from 'react'

export default function Aframe () {
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMounted(true)
  //   }, 10000)

  //   // const b = document.querySelector('a-scene')
  //   // b.setAttribute('arjs', '')
  // })

  return (
    <div
      style={{ height: '100%' }} dangerouslySetInnerHTML={{
        __html: `
        <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-entity
            position="0 0 0"
            rotation="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="/examples/image-tracking/nft/trex/scene.gltf"
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

  // return (
  //   <a-scene embedded='' arjs=''>
  //     <a-marker preset='hiro'>
  //       <a-entity
  //         position='0 0 0'
  //         rotation='0 0 0'
  //         scale='0.05 0.05 0.05'
  //         gltf-model='/examples/image-tracking/nft/trex/scene.gltf'
  //       />
  //     </a-marker>
  //     <a-entity camera />
  //     <a-box position='-1 0.5 -3' rotation='0 45 0' color='#00ff00' />
  //     <a-sphere position='0 1.25 -5' radius='1.25' color='#EF2D5E' />
  //     <a-cylinder position='1 0.75 -3' radius='0.5' height='1.5' color='#FFC65D' />
  //     <a-plane position='0 0 -4' rotation='-90 0 0' width='4' height='4' color='#7BC8A4' />
  //     <a-sky color='#ECECEC' />
  //   </a-scene>
  // )

  // return (
  //   <a-scene>
  //     {!mounted && (
  //       <>
  //         <a-box position='-1 0.5 -3' rotation='0 45 0' color='#00ff00' />
  //         <a-sphere position='0 1.25 -5' radius='1.25' color='#EF2D5E' />
  //         <a-cylinder position='1 0.75 -3' radius='0.5' height='1.5' color='#FFC65D' />
  //         <a-plane position='0 0 -4' rotation='-90 0 0' width='4' height='4' color='#7BC8A4' />
  //         <a-sky color='#ECECEC' />
  //       </>
  //     )}
  //     {mounted && (
  //       <>
  //         <a-marker preset='hiro'>
  //           <a-entity
  //             position='0 0 0'
  //             rotation='0 0 0'
  //             scale='0.05 0.05 0.05'
  //             gltf-model='/examples/image-tracking/nft/trex/scene.gltf'
  //           />
  //         </a-marker>
  //         <a-entity camera />
  //       </>
  //     )}
  //   </a-scene>
  // )
}
