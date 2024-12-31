import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'
import YoutubeVideos from '../YoutubeVideos/YoutubeVideos'
import Alert from '../Alert/Alert'

function Main() {
  return (
    <>
        <Alert/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <YoutubeVideos/>
    </>
  );
}

export default Main
