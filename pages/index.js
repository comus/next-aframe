import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <div><Link href='/page1'><a>page1</a></Link></div>
      <div><Link href='/page2'><a>page2</a></Link></div>
      <div><Link href='/ar'><a>ar</a></Link></div>
      <div><Link href='/mindar'><a>mindar</a></Link></div>
    </div>
  )
}
