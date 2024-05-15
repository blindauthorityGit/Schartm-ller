import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import client from "../client";
import { H1, H2, H3 } from "../components/utils/headlines";
import { PortableText } from "@portabletext/react";

export default function About({ dataStart }) {
    // useEffect(() => {
    //     console.log(dataStart, dataNews);
    // }, []);

    return (
        <MainContainer width="w-full sm:p-12 col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden mb-16">
            <Head>
                <title>Eva Maria Schartmüller</title>
            </Head>

            <div className="col-span-12 px-6 sm:px-0 sm:pt-4 md:col-span-6 texte">
                <PortableText className="texte" value={dataStart.description}></PortableText>
                {/* <p>Impressum</p>
                <div className="texte mt-8 sm:px-12 md:px-0">
                    <p>
                        Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung
                        und Offenlegungspflicht laut §25 Mediengesetz.
                    </p>
                    <p>
                        Eva Maria Schartmüller <br />
                        Austria, Wien <br />
                        Mail: contact@schartmueller.com
                    </p>
                    <p>
                        <strong>Haftung für Inhalte dieser Webseite</strong>
                    </p>
                    <p>
                        Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle
                        Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte
                        auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden.
                    </p>
                    <p>
                        Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend
                        zu kontaktieren, Sie finden die Kontaktdaten im Impressum.
                    </p>
                    <p>
                        <strong>Haftung für Links auf dieser Webseite</strong>
                    </p>
                    <p>
                        Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich
                        sind. Haftung für verlinkte Websites besteht laut&nbsp;
                        <a href="https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&amp;Dokumentnummer=NOR40025813&amp;tid=121167454">
                            § 17 ECG
                        </a>
                        für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche
                        Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden,
                        wenn uns Rechtswidrigkeiten bekannt werden.
                    </p>
                    <p>
                        Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu
                        kontaktieren, Sie finden die Kontaktdaten im Impressum.
                    </p>
                    <p>
                        <strong>Urheberrechtshinweis</strong>
                    </p>
                    <p>
                        Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls
                        notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
                        verfolgen.
                    </p>
                    <p>
                        Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie
                        uns zu kontaktieren.
                    </p>
                    <p>
                        <strong>Bildernachweis</strong>
                    </p>
                    <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
                    <p>
                        Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:
                        <br />
                        Eva Maria Schartmüller
                    </p>
                </div> */}
            </div>
        </MainContainer>
    );
}

export const getStaticProps = async (context) => {
    const resStart = await client.fetch(`*[_type in ["impressum"]]`);
    const dataStart = await resStart[0];

    return {
        props: {
            dataStart,
        },
        revalidate: 1, // 10 seconds
    };
};
