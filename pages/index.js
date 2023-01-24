import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import defaultOG from "../public/img/opengraph.jpg";
import { configQuery, profileQuery } from "@lib/groq";
import GetImage from "@utils/getImage";
import { IconContext } from "react-icons";
import Image from "next/image";

import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { SiBandcamp } from "react-icons/si";
import { SlSocialSpotify } from "react-icons/sl";

export default function Post(props) {
  const { siteconfig, profile, preview } = props;

  const router = useRouter();
  //console.log(router.query.category);

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });
  //console.log(posts);
  const ogimage = siteConfig?.openGraphImage
    ? GetImage(siteConfig?.openGraphImage).src
    : defaultOG.src;
  return (
    <>
      {siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title="HS Trejo Luna Music"
            description={
              siteConfig?.description ||
              "Puro GNU/Linuxwave de Cancún"
            }
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: "HS Trejo Luna Music",
              description:
                siteConfig?.description ||
                "Puro GNU/Linuxwave de Cancún",
              images: [
                {
                  url: ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "HS Trejo Luna Music"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <section className="profilepic">
            <img
              className="picbase"
              src="https://cdn.sanity.io/images/300y1y1i/production/7ea7b1e011eb8388b110583777a7e3053088170d-460x460.jpg"
            />
            <article className="textcontain">
              <p>Hello, I'm</p>
              <h1>{profile[0].name}</h1>
            </article>
          </section>

          <section className="container-links">
            <a
              href="https://open.spotify.com/album/3PscE3ekG6V0lBDcmxIZ0M"
              target="_blank"
              rel="noreferrer">
              <button className="linkto-btn">
                ✨ My latest release ✨
              </button>
            </a>
            <a
              href="mailto:music@hstrejoluna.com"
              target="_blank"
              rel="noreferrer">
              <button className="linkto-btn">
                ✉️ music@hstrejoluna.com ✉️
              </button>
            </a>
            <button className="linkto-btn">
              📖 Blog (Coming Soon) 📖
            </button>
            <div className="social-row">
              <IconContext.Provider
                value={{ className: "shared-class", size: 30 }}>
                <>
                  <a
                    href="https://www.facebook.com/hstrejolunamusic"
                    target="_blank"
                    rel="noreferrer">
                    <CiFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/hstrejoluna/"
                    target="_blank"
                    rel="noreferrer">
                    <CiInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCegsYcscW0nitdH6PQmCq8A/featured"
                    target="_blank"
                    rel="noreferrer">
                    <CiYoutube />
                  </a>
                  <a
                    href="https://open.spotify.com/artist/3WzEP30CahGifnG1uSVZnu"
                    target="_blank"
                    rel="noreferrer">
                    <SlSocialSpotify />
                  </a>
                  <a
                    href="https://hstrejoluna.bandcamp.com/"
                    target="_blank"
                    rel="noreferrer">
                    <SiBandcamp />
                  </a>
                </>
              </IconContext.Provider>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const config = await getClient(preview).fetch(configQuery);
  const profile = await getClient().fetch(profileQuery);
  // const categories = (await client.fetch(catquery)) || null;

  return {
    props: {
      profile: profile,
      // categories: categories,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
