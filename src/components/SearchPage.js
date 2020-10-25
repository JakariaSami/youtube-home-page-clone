import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>

      <ChannelRow 
        image='https://images-na.ssl-images-amazon.com/images/I/41a6LFYmhIL.png'
        channel='Technical Guruji'
        verified
        subs='19.5M'
        noOfVideos={3357}
        description='I make tech videos, unboxing, tech news and many more'
      />
      <hr/>

      <VideoRow 
      views='1.5M' 
      subs='19.5M'
      description='Apple iphone 12 unboxing. First in India. Hope you will love the video.'
      timestamp='3 days ago'
      channel='Technical Guruji'
      title='Apple iphone 12 Unboxing & First look. Pro Grade Everything'
      image='https://i.ytimg.com/vi/tCvnOZ1_XbI/maxresdefault.jpg'
      />
    </div>
  )
}

export default SearchPage