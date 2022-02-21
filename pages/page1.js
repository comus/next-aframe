import dynamic from 'next/dynamic'
import Link from 'next/link'

const Aframe = dynamic(
  () => import('../components/aframe1'),
  { ssr: false }
)

export default function Home () {
  return (
    <>
      <div><Link href='/'><a>home</a></Link></div>
      <div style={{ position: 'relative' }}><Aframe /></div>
    </>
  )
}
