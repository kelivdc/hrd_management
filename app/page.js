import Link from 'next/link'
import React from 'react'

function Index() {
  return (
    <>
    <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/login">Login</Link>
    <div>Index</div>
    </>
  )
}

export default Index