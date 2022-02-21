import dynamic from 'next/dynamic'

const Aframe = dynamic(
  () => import('../components/aframe5'),
  { ssr: false }
)

export default function Home () {
  return (
    <>
      <Aframe />

      <div style={{ position: 'absolute', top: 0, zIndex: 10000, left: 0 }}><a href='/'>home</a></div>
    </>
  )
  // return (
  //   <>
  //     <div><Link href='/'><a>home</a></Link></div>
  //     <div style={{ position: 'relative' }}><Aframe /></div>
  //   </>
  // )
}
