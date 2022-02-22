// import 'aframe'
import { useEffect, useState } from 'react'

export default function Aframe () {
  const [mounted, setMounted] = useState(false)
  const [mounted2, setMounted2] = useState(false)
  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    require('ar.js/aframe/build/aframe-ar')
    setMounted(true)
  }, [])

  if (mounted2) {
    return (
      <a-scene arjs=''>
        <a-entity camera />
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
      </a-scene>
    )
  }

  if (mounted) {
    return (
      <div onClick={() => setMounted2(true)}>mounted</div>
      // <a-scene arjs>
      //   <a-marker preset='hiro'>
      //     <a-entity
      //       position='0 0 0'
      //       rotation='0 0 0'
      //       scale='0.05 0.05 0.05'
      //       gltf-model='/examples/image-tracking/nft/trex/scene.gltf'
      //     />
      //   </a-marker>
      //   <a-entity camera />
      //   <a-box position='0 0 -10' rotation='0 0 0' color='#00ff00' />
      // </a-scene>
    )
  }

  return (
    <div>jdsklfjl</div>
    // <a-scene embedded style={{ display: 'block', width: '1000px', height: '1000px' }}>
    //   <a-box position='-1 0.5 -3' rotation='0 45 0' color='#4CC3D9' />
    //   <a-sphere position='0 1.25 -5' radius='1.25' color='#EF2D5E' />
    //   <a-cylinder position='1 0.75 -3' radius='0.5' height='1.5' color='#FFC65D' />
    //   <a-plane position='0 0 -4' rotation='-90 0 0' width='4' height='4' color='#7BC8A4' />
    //   <a-sky color='#ECECEC' />
    // </a-scene>
  )
}
