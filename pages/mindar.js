import dynamic from 'next/dynamic'
// import Link from 'next/link'

const Aframe = dynamic(
  () => import('../components/aframe4'),
  { ssr: false }
)

export default function Home () {
  return (
    <>
      <div style={{ position: 'absolute', top: 0, zIndex: 10000, left: 0 }}><a href='/'>home</a></div>
      <Aframe />
    </>
  )
}
