import React, { useState } from 'react'

import { LinkButton } from '../components/Button'

import heroText from "../assets/home-hero-text.png"
import heroTextLarge from "../assets/home-hero-text-large.png"
import marketeterImg from "../assets/solo-marketeter-img.png"
import creatorImg from "../assets/creator-img.png"
import entrepreneursImg from "../assets/entrepreneurs-img.png"
import freelancerImg from "../assets/freelancer-img.png"
import storyFirstImg from "../assets/story-first-img.png"
import storyNextImg from "../assets/story-next-img.png"
import socialAdsImg from "../assets/story-facebook-ads.png"
import searchAdsImg from "../assets/story-google-ads.png"
import instagramPostImg from "../assets/story-Instagram-posts.png"
import pressReleaseImg from "../assets/story-press-release.png"
import tiktokScriptImg from "../assets/story-tiktok-scripts.png"
import tweetIdeasImg from "../assets/story-tweet-ideas.png"
import blogPostsImg from "../assets/story-blog-post.png"
import newslatterImg from "../assets/story-newsletter.png"
import landingPagesImg from "../assets/story-landing-pages.png"

function Home() {

  const featureItems = [
    {
      src: marketeterImg,
      alt: "Solo Marketeters",
      width: "212",
      height: "165"
    },
    {
      src: creatorImg,
      alt: "Creators",
      width: "212",
      height: "165"
    },
    {
      src: entrepreneursImg,
      alt: "Entrepreneurs",
      width: "212",
      height: "165"
    },
    {
      src: freelancerImg,
      alt: "Freelancers",
      width: "212",
      height: "165"
    },
  ]

  const storyContent = [
    {
      id: "1",
      type: "Social Ads",
      img: socialAdsImg
    },
    {
      id: "2",
      type: "Search Ads",
      img: searchAdsImg
    },
    {
      id: "3",
      type: "Instagram Posts",
      img: instagramPostImg
    },
    {
      id: "4",
      type: "Press Release",
      img: pressReleaseImg
    },
    {
      id: "5",
      type: "TikTok Scripts",
      img: tiktokScriptImg
    },
    {
      id: "6",
      type: "Tweet Ideas",
      img: tweetIdeasImg
    },
    {
      id: "7",
      type: "Blog Posts",
      img: blogPostsImg
    },
    {
      id: "8",
      type: "Newsletters",
      img: newslatterImg
    },
    {
      id: "9",
      type: "Landing Pages",
      img: landingPagesImg
    },
  ]

  const [generatedImg, setGeneratedImg] = useState(socialAdsImg)

  function generateImage(e) {
    storyContent.forEach(item => {
      if (item.id === e.target.dataset.id) {
        setGeneratedImg(item.img)
      }
    })
  }

  return (
    <main className='homepage container'>
     <section className='homepage__hero'>
      <h1 className='sr-only'>Create better content in half the time</h1>
      <picture className='homepage__hero__img'>
        <source media='(min-width:650px)' srcSet={heroTextLarge} width="883" height="325" />
        <img src={heroText} width="300" height="254" />
      </picture>
      <LinkButton className='homepage__hero__cta btn-hover' text="Get Started For Free" />
      <div className='homepage__hero__desc'>
        <p>Produce blog posts, social media content, ad copy, and marketing briefs - <span>all in your brand voice.</span></p>
      </div>
     </section>
     <section className='homepage__cta'>
      <h2><span>Happening this week:</span> Join Blaze CEO Adam Nathan for a live demo of Blaze</h2>
      <LinkButton className='homepage__cta_btn btn-hover' text="Save Your Seat" />
     </section>
     <section className='homepage__feature'>
        <h2 className='feature__title'>The AI tool for <span>teams of one.</span></h2>
        <p className='feature__desc'>The modern day heroes that do it all single-handedly.</p>
        <div className="feature__items">
          {
            featureItems.map(item => (
              <img key={item.src} src={item.src} alt={item.alt} width={item.width} height={item.height} />
            ))
          }
        </div>
        <LinkButton className='feature__cta btn-hover' text="See customer stories of Blaze Heroes" />
     </section>
     <section className="homepage__story" aria-label='Product Story'>
      <div className="story__first">
        <div className="story__detail">
          <p className='detail__tag'>First</p>
          <h3 className="detail__title">Create a brand voice</h3>
          <p className="detail__desc">Ensure everything you create <span>sounds like you and your brand.</span></p>
        </div>
        <div className="story__img">
          <img src={storyFirstImg} alt="" width="486" height="510" />
        </div>
      </div>
      <div className="story__next">
        <div className="story__detail">
          <p className='detail__tag'>Next</p>
          <h3 className="detail__title">Brainstorm ideas</h3>
          <p className="detail__desc">Never get stuck on a blank page.<span>sounds like you and your brand.</span></p>
        </div>
        <div className="story__img">
          <img src={storyNextImg} alt="" width="486" height="486" />
        </div>
      </div>
      <div className="story__then">
        <div className="story__detail">
          <p className='detail__tag'>Then</p>
          <h3 className="detail__title">generate content</h3>
          <p className="detail__desc">Optimized for <span>every content type.</span></p>
        </div>
        <div className="story__generator">
          <div className="generator__container">
            {
              storyContent.map(item => (
                <button className={`generate__btn ${item.img === generatedImg ? "active__item" : ""}`} 
                  key={item.id} 
                  onClick={generateImage} data-id={item.id}>
                    {item.type}
                </button>
              ))
            }
          </div>
          <div className="generator__output">
            <img src={generatedImg} alt="" />
          </div>
        </div>
      </div>
     </section>
    </main>
  )
}

export default Home
