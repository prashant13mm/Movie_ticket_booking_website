import React from 'react'
import Herosection from '../components/Herosection'
import Featuredsection from '../components/Featuredsection'
import Trailer from '../components/Trailer'
import PlayerTest from '../components/PlayerTest'

const Home = () => {
  return (
    <>
      <Herosection/>
      {/* iski wajh se show hone laga wrna phele black screen aa rhi thi  */}
      <Featuredsection/>
      {/* ab yha pr maine featured section mount kiya hai */}
      <Trailer/>
      {/* <PlayerTest/> */}
    </>
  )
}

export default Home
