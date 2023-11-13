import Head from "next/head";
import Image from "next/image";
// import localFont from "next/font/local";

import ThumbnailView from "@/components/ThumbnailView";
// import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.css'


// const PhantomSansFont = localFont({
//   src: "../public/fonts/Phantom_Sans_0.7/Book.woff2",
// });

export default function Home() {
  return (
    <>
      {/* <main className={`${PhantomSansFont.className}`}> */}
      <main className={`${styles.main}`}>
        <div
          className="box"
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            // width: "100vh",
            zIndex: "15",
            top: "45%",
            left: "50%",
            margin: "-15vh 0 0 -85vh",
          }}
        >
          <div className="columns">
            <div className="column is-1">
              <ThumbnailView
                imagePath="/assets/profile/jasper.jpg"
                size={225}
                clipShape="roundedRectangle"
                altText="Portrait style photograph of Jasper"
                customStyles={{
                  // margin: "auto",
                  marginLeft: "10px",
                  marginTop: "15px",
                  display: "block",
                }}
              />
            </div>
            <div className="column is-12" style={{
              marginLeft: "150px",
              marginTop: "5px",
              marginRight: "-100px",
            }}>
                <h1 className="title is-1" >👋 Hey there! I'm Jasper.</h1>
                <h2 className="subtitle"></h2>
                <p>
                <br/>
                  I’m Jasper (jdogcoder on the internet)! I use the he/him/his pronouns, and am a 17 year old based out of the best state ever, Vermont!
                  <br/><br/>
                  I love coding, cybersecurity, my cats, and am also an Aerial Silks artist! (it’s a circus thing)
                  <br/><br/>
                  I'm currently working on my startup Cyaneus (a privacy based social media company), among many other cool things and side projects!
                  <br/><br/>
                  I am fluent with the coding languages Typescript (and javascript), Svelte, and Express, and am working to fluency with Java and Python!
                  </p>
            </div>
          </div>
          <div>
              <p>Feel free to check out the other tabs in the menus above to see some of the things I have done & worked on!</p>
            </div>
        </div>
      </main>

    </>
  );
}
