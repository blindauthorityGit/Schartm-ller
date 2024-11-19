import client, { getAsset } from "../../client";

import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";
import MainContainer from "../../components/layout/mainContainer";
// import FullWidthSwiper from "../../components/sections/fullWidthSwiper";
// import StackedImgs from "../../components/sections/stackedImgs";
// import InlineImgs from "../../components/sections/inlineImgs";
// import Breadcrumbs from "../../components/sections/breadcrumbs";

import { PortableText } from "@portabletext/react";
import { H1, H2, H3 } from "../../components/utils/headlines";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import WorksNav from "../../components/Nav/workNav";
// VIDEO
import VideoJS from "../../components/video";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import videojs from "video.js";
import "video.js/dist/video-js.css";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Work = ({ post, dataAll }) => {
    // const [vids, setVids] = useState(post.videos);
    const [vids, setVids] = useState(post?.videos || []);

    const [lightBoxImg, setLightBoxImg] = useState(0);
    const imgRefs = useRef([]);
    const lightboxRef = useRef(null);

    const [videoDimensions, setVideoDimensions] = useState({});

    const playerRef = useRef(null);

    const getUrlFromId = (ref) => {
        // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
        // We don't need the first part, unless we're using the same function for files and images
        const PROJECT_ID = "bsxaqchg";
        const DATASET = "production";
        const [_file, id, extension] = ref.split("-");
        return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${id}.${extension}`;
    };

    function controls(i) {
        return {
            autoplay: false,
            controls: true,
            responsive: false,
            fluid: true,
            sources: [
                {
                    src: vids[i].link,
                    type: "video/mp4",
                },
            ],
        };
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on("waiting", () => {
            videojs.log("player is waiting");
        });

        player.on("dispose", () => {
            videojs.log("player will dispose");
        });
    };

    function lightBoxClick(e, i) {
        lightboxRef.current.classList.remove("fade-in");
        if (!e.target.classList.contains("big")) {
            lightboxRef.current.style.paddingBottom = "100%";
            console.log("not big");
        } else {
            lightboxRef.current.style.paddingBottom = "66.25%";
            console.log(" big");
        }
        console.log(e.target.classList.contains("big"));
        setTimeout(() => {
            lightboxRef.current.classList.add("fade-in");
            setLightBoxImg(i);
        }, 100);
    }

    useEffect(() => {
        console.log(post, dataAll, post.seo, imgRefs);
        if (imgRefs.current.length > 0) {
            setVideoDimensions({
                width: imgRefs?.current[0]?.clientWidth,
                height: imgRefs?.current[0]?.clientHeight,
            });
        }
    }, [dataAll, post]);

    useEffect(() => {
        setVids(post.videos);
        console.log(post.videos, "test");

        return () => {
            setVids(null);
        };
    }, [post, vids]);

    function findIndex(index) {
        const i = dataAll.map((e) => e.slug.current).indexOf(index);

        return dataAll.map((e) => e.slug.current).indexOf(index);
    }
    // const imagePropsGallery = useNextSanityImage(client, post.gallery.images);

    return (
        <>
            {post && dataAll ? (
                <>
                    <MainContainer width="w-full  sm:pl-12 col-span-12 md:col-span-9 sm:;pl-12 sm:pt-[69px] md:ml-[320px] overflow-hidden">
                        <Head>
                            <title>{post.seo.title}</title>
                            <meta name="description" content={post.seo.description} />
                        </Head>

                        <div className="col-span-12 md:col-span-8 grid">
                            <div className="order-first">
                                {post.mainImage && (
                                    <div
                                        className="imgwrapper  bg-cover bg-center w-[25rem] relative h-[16rem]"
                                        style={{ backgroundImage: `url(${urlFor(post.mainImage)})` }}
                                    ></div>
                                )}

                                <div className="texte mt-8  px-6 sm:px-12 md:px-0 order-second">
                                    <PortableText value={post.description}></PortableText>
                                </div>
                            </div>
                            {post.topLine ? (
                                <div className="topLineText order-first px-6 sm:px-0">
                                    <PortableText value={post.topLine}></PortableText>
                                </div>
                            ) : null}

                            <div className="images  grid grid-cols-12 gap-1">
                                {post.gallery &&
                                    post.gallery.images.map((e, i) => {
                                        return (
                                            <>
                                                {e.captionTop && (
                                                    <div className="caption col-span-12  pl-6 sm:pl-0 text-text italic">
                                                        {e.captionTop}
                                                    </div>
                                                )}
                                                <div
                                                    key={`image${i}`}
                                                    className={`${
                                                        e.big
                                                            ? "col-span-12"
                                                            : "col-span-12 sm:col-span-6 lg:col-span-4"
                                                    } ${e.hoch ? "aspect-hoch" : "aspect-video"}   relative `}
                                                    ref={(ref) => (imgRefs.current[i] = ref)}
                                                >
                                                    <Image
                                                        // {...ImagePropsGallery(i)}
                                                        src={urlFor(e).width(200).height(280).url()}
                                                        loader={() => urlFor(e).url()}
                                                        layout="fill"
                                                        loading="lazy"
                                                        objectFit="cover"
                                                        alt="hero"
                                                        placeholder="blur"
                                                        blurDataURL={urlFor(e).url()}
                                                    />
                                                </div>
                                                {e.caption && (
                                                    <div
                                                        style={{ marginTop: "-5px!important" }}
                                                        className="caption px-6 sm:px-0 col-span-12 text-text text-xs"
                                                    >
                                                        {e.caption}
                                                    </div>
                                                )}
                                            </>
                                        );
                                    })}
                                {/* LIGHTBOX GALLERY */}
                                {typeof post.galleryLightbox !== "undefined" ? (
                                    <p className="caption  col-span-12 pl-6 sm:pl-0  text-text mt-2">
                                        {post.galleryLightbox.captionTop}
                                    </p>
                                ) : null}
                                {post.galleryLightbox ? (
                                    <div
                                        ref={lightboxRef}
                                        className="col-span-12 hidden sm:block lightBox aspect-videoBig bg-cover bg-no-repeat"
                                        style={{
                                            marginTop: "-5px!important",
                                            backgroundImage: `url(${urlFor(post.galleryLightbox.images[lightBoxImg])}`,
                                        }}
                                    ></div>
                                ) : null}
                                {post.galleryLightbox
                                    ? post.galleryLightbox.images.map((e, i) => {
                                          // counter++;
                                          return (
                                              <>
                                                  <div
                                                      key={`image${i}`}
                                                      className={`${"col-span-12 sm:col-span-6 lg:col-span-4  overflow-hidden"}  relative aspect-video`}
                                                      ref={(ref) => (imgRefs.current[i] = ref)}
                                                  >
                                                      <Image
                                                          src={urlFor(e).width(200).height(280).url()}
                                                          loader={() => urlFor(e).url()}
                                                          layout="fill"
                                                          loading="lazy"
                                                          objectFit="cover"
                                                          alt="hero"
                                                          className={`hover:scale-110 transition-all cursor-pointer ${
                                                              e.big ? "big" : null
                                                          }`}
                                                          onClick={(e) => {
                                                              lightBoxClick(e, i);
                                                          }}
                                                      />
                                                  </div>
                                                  {e.caption && (
                                                      <div
                                                          style={{ marginTop: "-8px!important" }}
                                                          className="caption px-6 sm:px-0 col-span-12 text-text text-xs"
                                                      >
                                                          {e.caption}
                                                      </div>
                                                  )}
                                              </>
                                          );
                                      })
                                    : null}
                            </div>
                            {typeof vids !== "undefined"
                                ? vids.map((e, i) => {
                                      console.log(controls(i));
                                      return (
                                          <div
                                              key={`key${i}`}
                                              className={`mt-1 ${e.videoTop ? "order-first mb-1" : null}`}
                                          >
                                              <VideoJS options={controls(i)} onReady={handlePlayerReady} />
                                              {e.bottomLine ? (
                                                  <div className="bottomLine mt-1 px-6 sm:px-0 col-span-12 text-text text-xs">
                                                      {e.bottomLine}
                                                  </div>
                                              ) : null}
                                          </div>
                                      );
                                  })
                                : null}
                            {post.audio ? (
                                <audio className="w-full h-10 mt-2" controls>
                                    <source src={getUrlFromId(post.audio.asset._ref)} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            ) : null}
                            <div className="bottomtext px-6 sm:px-0 mt-6">
                                <PortableText value={post.descriptionBottom}></PortableText>
                            </div>
                        </div>
                        <WorksNav
                            previous={
                                findIndex(post.slug.current) >= 1 &&
                                dataAll[findIndex(post.slug.current) - 1].slug.current
                            }
                            next={
                                dataAll.length - 1 > findIndex(post.slug.current) &&
                                dataAll[findIndex(post.slug.current) + 1].slug.current
                            }
                        ></WorksNav>
                    </MainContainer>
                </>
            ) : (
                "LOADING"
            )}
        </>
    );
};

export default Work;

export const getServerSideProps = async (context) => {
    const slug = context.params.slug;
    const res = await client.fetch(`*[_type == "work" && slug.current == "${slug}"]`);
    const data = await res;

    const resAll = await client.fetch(`*[_type == "work"] | order(order asc)`);
    const dataAll = await resAll;
    return {
        props: {
            post: data[0],
            dataAll,
        },
    };
};
