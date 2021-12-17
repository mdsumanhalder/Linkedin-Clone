import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  }
  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('first article about programming', 'Top news-Programming is booming')}
      {newsArticle('first article about programming', 'Top news-Programming is booming')}
      {newsArticle('first article about programming', 'Top news-Programming is booming')}
      {newsArticle('first article about programming', 'Top news-Programming is booming')}
      {newsArticle('first article about programming', 'Top news-Programming is booming')}
    </div>
  )
}

export default Widgets
