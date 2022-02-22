import dynamic from 'next/dynamic'

const Aframe = dynamic(
  () => import('../components/aframe3'),
  { ssr: false }
)

export default function Home () {
  // return (
  //   <Aframe />
  // )
  return (
    <>
      <div style={{ position: 'absolute', top: 0, zIndex: 10000, left: 0 }}><a href='/'>home</a></div>
      <Aframe />
    </>
  )
}
