import React from 'react'

import { LinkButton } from '../components/Button'

import herosHeroImg from "../assets/heros-hero-img.png"
import hero7Img from "../assets/hero-7.png"
import hero6Img from "../assets/hero-6.png"
import hero5Img from "../assets/hero-5.webp"
import hero4Img from "../assets/hero-4.webp"
import hero3Img from "../assets/hero-3.webp"
import hero2Img from "../assets/hero-2.webp"
import hero1Img from "../assets/hero-1.webp"

function Heros() {
  const herosItems = [
    {
      tag: "Empowering Freelancers",
      edition: "7",
      img: hero7Img,
      bgColor: "#F8D832",
      headColor: "#FF1924",
      textColor: "#000000",
      desc: "Kiera, the freelancer community owner, is building a global movement of creativity and collaboration.",
      subDesc: "Blaze, the perfect tool for freelancers, is helping her dream big and achieve bigger."
    },
    {
      tag: "Innovative Media Pioneer",
      edition: "6",
      img: hero6Img,
      bgColor: "#B8E7FC",
      headColor: "#FF1924",
      textColor: "#000000",
      desc: "Mike, the media pioneer, building a resource for patients and caregivers.",
      subDesc: "With Blaze, his content amplifier, helping him grow his business as a solopreneur."
    },
    {
      tag: "Painless Time Savings",
      edition: "5",
      img: hero5Img,
      bgColor: "#000000",
      headColor: "#ffffff",
      textColor: "#ffffff",
      desc: "Terry, the full-service agency CEO, creating marketing campaigns for a swarm of clients.",
      subDesc: "With Blaze, her brand voice whisperer, saving her hours of work on each and every project."
    },
    {
      tag: "Incredible Online Visibility",
      edition: "4",
      img: hero4Img,
      bgColor: "#FF1924",
      headColor: "#F8D832",
      textColor: "#000000",
      desc: "Jeremy, the aerial video entrepreneur, using drones to create eye-popping content.",
      subDesc: "With Blaze, his SEO secret weapon, keeping his phone ringing with new leads."
    },
    {
      tag: "Job Hunting Maven",
      edition: "3",
      img: hero3Img,
      bgColor: "#b2f25e",
      headColor: "#F8D832",
      textColor: "#000000",
      desc: "Josh, the solopreneur, helping jobseekers level up in their careers.",
      subDesc: "With Blaze, his content multiplier, helping him create all of his social media posts over Saturday morning coffee."
    },
    {
      tag: "Nonprofit Advocate",
      edition: "2",
      img: hero2Img,
      bgColor: "#000000",
      headColor: "#ffffff",
      textColor: "#ffffff",
      desc: "Gabby, the nonprofit leader, building better futures for women and girls.",
      subDesc: "With Blaze, her content ghostwriter, saving her creative energy."
    },
    {
      tag: "Effortless content",
      edition: "1",
      img: hero1Img,
      bgColor: "#B8E7FC",
      headColor: "#FF1924",
      textColor: "#000000",
      desc: "Rosanna, the multitasking marvel, juggling a coaching business, and motherhood.",
      subDesc: "With Blaze, her content sidekick, saves her brainpower, leaving more time for conquering the world."
    },
  ]

  return (
    <main className="heros container">
      <section className="heros__hero">
        <h1 className="sr-only">Blaze Heros</h1>
        <img src={herosHeroImg} width="700" height="374" />
        <div className="heros__hero_desc">
          <p>Meet the people who went from <span>ordinary to extraordinary,</span> with a little help from Blaze</p>
        </div>
      </section>
      <section className="heros__container">
        {
          herosItems.map(hero => (
            <div key={hero.tag} style={{backgroundColor: hero.bgColor}} className='heros__wrapper'>
              <div className="heros__details">
                <p className="heros__editon">edition #{hero.edition}</p>
                <h2 style={{color: hero.headColor}} className="heros__tag">{hero.tag}</h2>
                <p style={{color: hero.textColor}} className='heros__desc'>{hero.desc}</p>
                <p style={{color: hero.textColor}} className="heros__desc">{hero.subDesc}</p>
                <div className="flex-container">
                  <LinkButton className='hero__cta btn-hover' text="Watch Video" />
                  <LinkButton className='hero__cta btn-hover' text="Read Article" />
                </div>
              </div>
              <img src={hero.img} alt="" />
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Heros

