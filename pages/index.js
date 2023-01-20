import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import defaultOG from "../public/img/opengraph.jpg";
import { postquery, configQuery } from "@lib/groq";
import GetImage from "@utils/getImage";
import { IconContext } from "react-icons";

import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { SiBandcamp } from "react-icons/si";
import { SlSocialSpotify } from "react-icons/sl";

export default function Post(props) {
  const { postdata, siteconfig, preview } = props;

  const router = useRouter();
  //console.log(router.query.category);

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

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
      {posts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${siteConfig?.title}`,
              description: siteConfig?.description || "",
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

          <div className="container-links">
            <a
              href="https://open.spotify.com/album/3PscE3ekG6V0lBDcmxIZ0M"
              target="_blank">
              <button class="linkto-btn">
                ✨ My lastest release ✨
              </button>
            </a>
            <a href="mailto:music@hstrejoluna.com" target="_blank">
              <button class="linkto-btn">
                ✉️ music@hstrejoluna.com ✉️
              </button>
            </a>
            <button class="linkto-btn">
              📖 Blog (Coming Soon) 📖
            </button>
            <div class="social-row">
              <IconContext.Provider
                value={{ className: "shared-class", size: 30 }}>
                <>
                  <a
                    href="https://www.facebook.com/hstrejolunamusic"
                    target="_blank">
                    <CiFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/hstrejoluna/"
                    target="_blank">
                    <CiInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCegsYcscW0nitdH6PQmCq8A/featured"
                    target="_blank">
                    <CiYoutube />
                  </a>
                  <a
                    href="https://open.spotify.com/artist/3WzEP30CahGifnG1uSVZnu"
                    target="_blank">
                    <SlSocialSpotify />
                  </a>
                  <a
                    href="https://hstrejoluna.bandcamp.com/"
                    target="_blank">
                    <SiBandcamp />
                  </a>
                </>
              </IconContext.Provider>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postquery);
  const config = await getClient(preview).fetch(configQuery);

  // const categories = (await client.fetch(catquery)) || null;

  return {
    props: {
      postdata: post,
      // categories: categories,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
