import React from "react"
import { Link, graphql } from "gatsby"
import { Router } from "@reach/router"
import Layout from './components/layout';
import './styles.scss'

const categories = {
  // freestyle: {
  //   title: "FreeStyle",
  // },
  blackhairsmatter: {
    title: "Black Hairs Matter",
  },
  putamask: {
    title: "Put A Mask",
  },
}

const items = [
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE I N1 WEB",
  //   img: "FREESTYLE_I_N1_WEB.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE I N2 WEB",
  //   img: "FREESTYLE_I_N2_WEB.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE I N3 WEB",
  //   img: "FREESTYLE_I_N3_WEB.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE II N1 P1 5",
  //   img: "FREESTYLE_II_N1_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE II N2 P1 5",
  //   img: "FREESTYLE_II_N2_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N1 P1 5",
  //   img: "FREESTYLE_III_N1_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N2 P1 5",
  //   img: "FREESTYLE_III_N2_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N3 P1 5",
  //   img: "FREESTYLE_III_N3_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N4 P1 5",
  //   img: "FREESTYLE_III_N4_P1_5.jpg",
  // },
  {
    id: "alimatou",
    category: "blackhairsmatter",
    title: "Alimatou",
    img: "BLACKHAIRSMATTER_purple_small_7652a1.png",
    color: "7652a1"
  },
  {
    id: "koumba",
    category: "blackhairsmatter",
    title: "Koumba",
    img: "BLACKHAIRSMATTER_orange_small_ef4d23.png",
    color: "ef4d23"
  },
  {
    id: "lika",
    category: "blackhairsmatter",
    title: "Lika",
    img: "BLACKHAIRSMATTER_yellow_small_fdbb13.png",
    color: "fdbb13"
  },
  {
    id: "aminata",
    category: "blackhairsmatter",
    title: "Aminata",
    img: "BLACKHAIRSMATTER_tuquoize_small_40bc9b.png",
    color: "40bc9b"
  },
  {
    id: "fatou",
    category: "blackhairsmatter",
    title: "Fatou",
    img: "BLACKHAIRSMATTER_blue_small_3c4ca0.png",
    color: "3c4ca0"
  },
  {
    id: "assia",
    category: "blackhairsmatter",
    title: "Assia",
    img: "BLACKHAIRSMATTER_pink_small_b91f5d.png",
    color: "b91f5d"
  },
  {
    id: "curiosity",
    category: "putamask",
    title: "Curiosity",
    img: "PutAmask_curiosity_small.png",
  },
  {
    id: "devotion",
    category: "putamask",
    title: "Devotion",
    img: "PutAmask_devotion_small.png",
  },
  {
    id: "toughness",
    category: "putamask",
    title: "Toughness",
    img: "PutAmask_toughness_small.png",
  },
]

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <h1>African Digital Gallery</h1>
        <p>
          ADG is an online gallery that focuses on NFT and awesome artists from Africa.
        </p>
        <p>Founded in 2021 by Alfa Barry and Jay D.Soucy, African Digital Gallery (ADG) is a pioneering gallery based on the internet. Described as one of the "Most Important Young Galleries in the World" (unknown source). The gallery focuses on highlighting, in NFT, modern and contemporary fine art from the Horn of Africa region and its Diasporas.</p>
      </section>
      <section>
        <h2>Artworks</h2>
        {Object.keys(categories).map((key) => (
          <section>
            <h3>{categories[key].title}</h3>
            <p>{categories[key].description}</p>
            <div className="artworks">
            {items
              .filter(item => item.category === key)
              .map((item) => (
                <article>
                  <Link to={`/${key}/${item.id}`}>
                    <img style={{backgroundColor: item.color ? `#${item.color}` : ''}} className="thumb" src={`${item.img}`} />
                    <div className="title">{item.title}</div>
                  </Link>
                </article>
            ))}
            </div>
          </section>
        ))}
      </section>
      <h2>How do I get a Miss Pralina?</h2>
      <ul>
        <li>Click on the artwork that you want</li>
        <li>Click the buy button</li>
        <li>You will be redirected to Binance NFT website where you can buy, bid and and sell Miss Pralina NFTs</li>
      </ul>
    </Layout>
  )
}

export default Home;
