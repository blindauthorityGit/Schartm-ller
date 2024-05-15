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
        <MainContainer width="w-full  sm:p-12  col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden mb-16">
            <Head>
                <title>Eva Maria Schartmüller</title>
            </Head>

            <div className="col-span-12 px-6 sm:px-0 md:col-span-6 sm:pt-4 texte">
                <PortableText className="texte" value={dataStart.description}></PortableText>{" "}
                {/* <p>Datenschutzerklärung</p>
                <div className="texte sm:mt-8 sm:px-12 md:px-0">
                    <p></p>

                    <p>
                        <strong>Einleitung und Überblick</strong>
                    </p>

                    <p>
                        Wir haben diese Datenschutzerklärung (Fassung 17.02.2022-111947866) verfasst, um Ihnen gemäß der
                        Vorgaben der&nbsp;
                        <a
                            href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Datenschutz-Grundverordnung (EU) 2016/679
                        </a>
                        &nbsp;und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz
                        Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B.
                        Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie
                        haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
                        <br />
                        <strong>Kurz gesagt:</strong>&nbsp;Wir informieren Sie umfassend über Daten, die wir über Sie
                        verarbeiten.
                    </p>

                    <p>
                        Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische
                        Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach
                        und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden
                        technische&nbsp;<strong>Begriffe leserfreundlich erklärt</strong>,&nbsp;<strong>Links</strong>
                        &nbsp;zu weiterführenden Informationen geboten und&nbsp;<strong>Grafiken</strong>&nbsp;zum
                        Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen
                        unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine
                        entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man
                        möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet
                        oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden
                        Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information
                        dabei, die Sie noch nicht kannten.
                        <br />
                        Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum
                        genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere
                        Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch
                        im Impressum.
                    </p>

                    <p>
                        <strong>Anwendungsbereich</strong>
                    </p>

                    <p>
                        Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen
                        Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter)
                        verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1
                        DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die
                        Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte
                        anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser
                        Datenschutzerklärung umfasst:
                    </p>

                    <p>
                        alle Onlineauftritte (Websites, Onlineshops), die wir betreiben <br />
                        Social Media Auftritte und E-Mail-Kommunikation <br />
                        mobile Apps für Smartphones und andere Geräte
                    </p>

                    <p>
                        <strong>Kurz gesagt:</strong>&nbsp;Die Datenschutzerklärung gilt für alle Bereiche, in denen
                        personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden.
                        Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie
                        gegebenenfalls gesondert informieren.
                    </p>

                    <p>
                        <strong>Rechtsgrundlagen</strong>
                    </p>

                    <p>
                        In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den
                        rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der
                        Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.
                        <br />
                        Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN
                        PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie
                        selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter&nbsp;
                        <a
                            href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=celex%3A32016R0679
                        </a>
                        &nbsp;nachlesen.
                    </p>

                    <p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>

                    <p>
                        <strong>Einwilligung</strong>&nbsp;(Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre
                        Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die
                        Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
                        <br /> <br />
                        <strong>Vertrag</strong>&nbsp;(Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder
                        vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum
                        Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene
                        Informationen.
                        <br /> <br />
                        <strong>Rechtliche Verpflichtung</strong>&nbsp;(Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer
                        rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir
                        gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel
                        personenbezogene Daten.
                        <br /> <br />
                        <strong>Berechtigte Interessen</strong>&nbsp;(Artikel 6 Absatz 1 lit. f DSGVO): Im Falle
                        berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die
                        Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten, um
                        unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese
                    </p>

                    <p>
                        Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung
                        öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel
                        nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der
                        entsprechenden Stelle ausgewiesen.
                    </p>

                    <p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>

                    <p>
                        In&nbsp;<strong>Österreich</strong>&nbsp;ist dies das Bundesgesetz zum Schutz natürlicher
                        Personen bei der Verarbeitung personenbezogener Daten (<strong>Datenschutzgesetz</strong>),
                        kurz&nbsp;<strong>DSG</strong>.
                        <br /> <br />
                        In&nbsp;<strong>Deutschland</strong>&nbsp;gilt das&nbsp;
                        <strong>Bundesdatenschutzgesetz</strong>, kurz<strong>&nbsp;BDSG</strong>.
                    </p>

                    <p>
                        Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den
                        folgenden Abschnitten darüber.
                    </p>

                    <p>
                        <strong>Kontaktdaten des Verantwortlichen</strong>
                    </p>

                    <p>
                        Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die Kontaktdaten der
                        verantwortlichen Person bzw. Stelle:
                        <br />
                        Eva Maria Schartmüller
                        <br />
                        E-Mail:&nbsp;office@schartmueller.com
                        <br />
                        Telefon:&nbsp;+43 (0)6767907617
                        <br />
                        Impressum:&nbsp;<a href="https://www.robertreszner.com/">https://www.schartmueller.com</a>
                    </p>

                    <p>
                        <strong>Speicherdauer</strong>
                    </p>

                    <p>
                        Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer
                        Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns.
                        Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die
                        Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu
                        verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum
                        Beispiel zu Zwecken der Buchführung.
                    </p>

                    <p>
                        Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung
                        widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung
                        besteht, gelöscht.
                    </p>

                    <p>
                        Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten,
                        sofern wir weitere Informationen dazu haben.
                    </p>

                    <p>
                        <strong>Rechte laut Datenschutz-Grundverordnung</strong>
                    </p>

                    <p>
                        Laut Artikel 13 DSGVO stehen Ihnen die folgenden Rechte zu, damit es zu einer fairen und
                        transparenten Verarbeitung von Daten kommt:
                    </p>

                    <p>
                        Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten.
                        Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden
                        Informationen zu erfahren:
                        <br />
                        zu welchem Zweck wir die Verarbeitung durchführen; die Kategorien, also die Arten von Daten, die
                        verarbeitet werden;
                        <br />
                        wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit
                        garantiert werden kann;
                        <br />
                        wie lange die Daten gespeichert werden;
                        <br />
                        das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem
                        Widerspruchsrecht gegen die Verarbeitung;
                        <br />
                        dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie
                        weiter unten);
                        <br />
                        die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;
                        <br />
                        ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem
                        persönlichen Profil von Ihnen zu gelangen.
                        <br />
                        Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir
                        Daten richtig stellen müssen, falls Sie Fehler finden.
                        <br />
                        Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was
                        konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.
                        <br />
                        Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass
                        wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.
                        <br />
                        Sie haben laut Artikel 19 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen
                        auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.
                        <br />
                        Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung
                        der Verarbeitung mit sich bringt.
                        <br />
                        Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung
                        öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie
                        gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir
                        diesem Widerspruch rechtlich nachkommen können.
                        <br />
                        Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der
                        Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing
                        verwenden.
                        <br />
                        Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der
                        Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling
                        verwenden.
                        <br />
                        Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf
                        einer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;automatisierten
                        Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.
                    </p>

                    <p>
                        <strong>Kurz gesagt:</strong>&nbsp;Sie haben Rechte – zögern Sie nicht, die oben gelistete
                        verantwortliche Stelle bei uns zu kontaktieren!
                    </p>

                    <p>
                        Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder
                        Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich
                        bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren
                        Website Sie unter&nbsp;
                        <a href="https://www.dsb.gv.at/?tid=111947866" target="_blank" rel="noreferrer noopener">
                            https://www.dsb.gv.at/
                        </a>
                        &nbsp;finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für
                        nähere Informationen können Sie sich an die&nbsp;
                        <a
                            href="https://www.bfdi.bund.de/DE/Home/home_node.html"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)
                        </a>
                        &nbsp;wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:
                    </p>

                    <p>Österreich Datenschutzbehörde</p>

                    <p>
                        <strong>Leiterin:&nbsp;</strong>Mag. Dr. Andrea Jelinek
                        <strong>
                            <br />
                            Adresse:&nbsp;
                        </strong>
                        Barichgasse 40-42, 1030 Wien
                        <strong>
                            <br />
                            Telefonnr.:&nbsp;
                        </strong>
                        +43 1 52&nbsp;152-0
                        <strong>
                            <br />
                            E-Mail-Adresse:&nbsp;
                        </strong>
                        dsb@dsb.gv.at&nbsp;
                        <strong>
                            <br />
                            Website:&nbsp;
                        </strong>
                        <a href="https://www.dsb.gv.at/" target="_blank" rel="noreferrer noopener">
                            https://www.dsb.gv.at/
                        </a>
                    </p>

                    <p>
                        <strong>Cookies</strong>
                    </p>

                    <p>
                        <strong>Cookies Zusammenfassung</strong>
                        <br />
                        Betroffene: Besucher der Website
                        <br />
                        Zweck: abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim
                        Hersteller der Software, der das Cookie setzt.
                        <br />
                        Verarbeitete Daten: Abhängig vom jeweils eingesetzten Cookie. Mehr Details dazu finden Sie
                        weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.
                        <br />
                        Speicherdauer: abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu Jahren variieren
                        <br />
                        &#x2696;&#xfe0f;&nbsp;Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1
                        lit.f DSGVO (Berechtigte Interessen)
                    </p>

                    <p>
                        <strong>Was sind Cookies?</strong>
                    </p>

                    <p>
                        Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.
                        <br />
                        Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende
                        Datenschutzerklärung besser verstehen.
                    </p>

                    <p>
                        Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind
                        beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten
                        Websites speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
                    </p>

                    <p>
                        Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle
                        Websites verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere
                        Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer
                        Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im
                        Cookie-Ordner, quasi dem “Hirn” Ihres Browsers, untergebracht. Ein Cookie besteht aus einem
                        Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere
                        Attribute angegeben werden.
                    </p>

                    <p>
                        Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche
                        Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die
                        „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer
                        Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes
                        Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer
                        einzigen Datei gespeichert.
                    </p>

                    <p>
                        Die folgende Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser wie z. B. Chrome
                        und dem Webserver. Dabei fordert der Webbrowser eine Website an und erhält vom Server ein Cookie
                        zurück, welches der Browser erneut verwendet, sobald eine andere Seite angefordert wird.
                    </p>

                    <p>
                        Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden
                        direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B.
                        Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere
                        Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein
                        paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder
                        andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.
                    </p>

                    <p>So können zum Beispiel Cookie-Daten aussehen:</p>

                    <p>
                        <strong>Name:</strong>&nbsp;_ga
                        <br />
                        <strong>Wert:</strong>&nbsp;GA1.2.1326744211.152111947866-9
                        <br />
                        <strong>Verwendungszweck:</strong>&nbsp;Unterscheidung der Websitebesucher
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
                    </p>

                    <p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>

                    <p>
                        Mindestens 4096 Bytes pro Cookie <br />
                        Mindestens 50 Cookies pro Domain <br />
                        Mindestens 3000 Cookies insgesamt
                    </p>

                    <p>
                        <strong>Welche Arten von Cookies gibt es?</strong>
                    </p>

                    <p>
                        Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und
                        wird in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir
                        kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.
                    </p>

                    <p>Man kann 4 Arten von Cookies unterscheiden:</p>

                    <p>
                        <strong>
                            Unerlässliche Cookies
                            <br />
                        </strong>
                        Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel
                        braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen
                        Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht
                        gelöscht, selbst wenn der User sein Browserfenster schließt.
                    </p>

                    <p>
                        <strong>
                            Zweckmäßige Cookies
                            <br />
                        </strong>
                        Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen
                        bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website
                        bei verschiedenen Browsern gemessen.
                    </p>

                    <p>
                        <strong>
                            Zielorientierte Cookies
                            <br />
                        </strong>
                        Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene
                        Standorte, Schriftgrößen oder Formulardaten gespeichert.
                    </p>

                    <p>
                        <strong>
                            Werbe-Cookies
                            <br />
                        </strong>
                        Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell
                        angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
                    </p>

                    <p>
                        Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser
                        Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie
                        gespeichert.
                    </p>

                    <p>
                        Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen,
                        empfehlen wir&nbsp;
                        <a href="https://datatracker.ietf.org/doc/html/rfc6265">
                            https://datatracker.ietf.org/doc/html/rfc6265
                        </a>
                        ,&nbsp;dem Request for Comments der Internet Engineering Task Force (IETF) namens “HTTP State
                        Management Mechanism”.
                    </p>

                    <p>
                        <strong>Zweck der Verarbeitung über Cookies</strong>
                    </p>

                    <p>
                        Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter
                        unten bzw. beim Hersteller der Software, die das Cookie setzt.
                    </p>

                    <p>
                        <strong>Welche Daten werden verarbeitet?</strong>
                    </p>

                    <p>
                        Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies
                        gespeichert werden, kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der
                        folgenden Datenschutzerklärung über die verarbeiteten bzw. gespeicherten Daten informieren.
                    </p>

                    <p>
                        <strong>Speicherdauer von Cookies</strong>
                    </p>

                    <p>
                        Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche
                        Cookies werden nach weniger als einer Stunde gelöscht, andere können mehrere Jahre auf einem
                        Computer gespeichert bleiben.
                    </p>

                    <p>
                        Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser
                        sämtliche Cookies jederzeit manuell löschen (siehe auch unten “Widerspruchsrecht”). Ferner
                        werden Cookies, die auf einer Einwilligung beruhen, spätestens nach Widerruf Ihrer Einwilligung
                        gelöscht, wobei die Rechtmäßigkeit der Speicherung bis dahin unberührt bleibt.
                    </p>

                    <p>
                        <strong>Widerspruchsrecht – wie kann ich Cookies löschen?</strong>
                    </p>

                    <p>
                        Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service
                        oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu
                        deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern
                        blockieren, aber alle anderen Cookies zulassen.
                    </p>

                    <p>
                        Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie
                        Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen
                        finden:
                    </p>

                    <p>
                        <a
                            href="https://support.google.com/chrome/answer/95647?tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Chrome: Cookies in Chrome löschen, aktivieren und verwalten
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Safari: Verwalten von Cookies und Websitedaten mit Safari
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt
                            haben
                        </a>
                    </p>

                    <p>
                        <a href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=111947866">
                            Internet Explorer: Löschen und Verwalten von Cookies
                        </a>
                    </p>

                    <p>
                        <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=111947866">
                            Microsoft Edge: Löschen und Verwalten von Cookies
                        </a>
                    </p>

                    <p>
                        Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass
                        er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
                        Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser
                        verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen
                        Chrome” oder “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers.
                    </p>

                    <p>
                        <strong>Rechtsgrundlage</strong>
                    </p>

                    <p>
                        Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das
                        Speichern von Cookies eine&nbsp;<strong>Einwilligung</strong>&nbsp;(Artikel 6 Abs. 1 lit. a
                        DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche
                        Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in
                        § 96 Abs. 3 des Telekommunikationsgesetzes (TKG). In Deutschland wurden die Cookie-Richtlinien
                        nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie
                        weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).
                    </p>

                    <p>
                        Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt. bestehen&nbsp;
                        <strong>berechtigte Interessen</strong>&nbsp;(Artikel 6 Abs. 1 lit. f DSGVO), die in den meisten
                        Fällen wirtschaftlicher Natur sind. Wir möchten den Besuchern der Website eine angenehme
                        Benutzererfahrung bescheren und dafür sind bestimmte Cookies oft unbedingt notwendig.
                    </p>

                    <p>
                        Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle
                        Ihrer Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.
                    </p>

                    <p>
                        In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert, sofern
                        eingesetzte Software Cookies verwendet.
                    </p>

                    <p>
                        <strong>Webhosting Einleitung</strong>
                    </p>

                    <p>
                        <strong>Webhosting Zusammenfassung</strong>
                        <br />
                        Betroffene: Besucher der Website
                        <br />
                        Zweck: professionelles Hosting der Website und Absicherung des Betriebs
                        <br />
                        Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser und weitere
                        Daten. Mehr Details dazu finden Sie weiter unten bzw. beim jeweils eingesetzten Webhosting
                        Provider.
                        <br />
                        Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen
                        <br />
                        &#x2696;&#xfe0f;&nbsp;Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)
                    </p>

                    <p>
                        <strong>Was ist Webhosting?</strong>
                    </p>

                    <p>
                        Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen – auch personenbezogene
                        Daten – automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten
                        möglichst sparsam und nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die
                        Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin
                        zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de
                        oder musterbeispiel.com.
                    </p>

                    <p>
                        Wenn Sie eine Website auf einem Bildschirm ansehen möchten, verwenden Sie dafür ein Programm,
                        das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome,
                        Microsoft Edge, Mozilla Firefox und Apple Safari.
                    </p>

                    <p>
                        Dieser Webbrowser muss sich zu einem anderen Computer verbinden, wo der Code der Website
                        gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und
                        aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern,
                        übernommen wird. Diese bieten Webhosting an und sorgen damit für eine verlässliche und
                        fehlerfreie Speicherung der Daten von Websites.
                    </p>

                    <p>
                        Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Smartphone) und
                        während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung
                        personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch
                        der Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gewährleisten.
                    </p>

                    <p>Zur Veranschaulichung:</p>

                    <p>
                        <strong>Warum verarbeiten wir personenbezogene Daten?</strong>
                    </p>

                    <p>Die Zwecke der Datenverarbeitung sind:</p>

                    <p>
                        Professionelles Hosting der Website und Absicherung des Betriebs zur Aufrechterhaltung der
                        Betriebs- und IT-Sicherheit <br />
                        Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur
                        Strafverfolgung bzw. Verfolgung von Ansprüchen
                    </p>

                    <p>
                        <strong>Welche Daten werden verarbeitet?</strong>
                    </p>

                    <p>
                        Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der
                        Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie
                    </p>

                    <p>
                        die komplette Internetadresse (URL) der aufgerufenen Webseite
                        <br />
                        Browser und Browserversion (z. B. Chrome 87)
                        <br />
                        das verwendete Betriebssystem (z. B. Windows 10)
                        <br />
                        die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B.&nbsp;
                        <a
                            href="https://www.beispielquellsite.de/vondabinichgekommen.html/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            https://www.beispielquellsite.de/vondabinichgekommen.html/
                        </a>
                        )
                        <br />
                        den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B. COMPUTERNAME
                        und 194.23.43.121)
                        <br />
                        Datum und Uhrzeit in Dateien, den sogenannten Webserver-Logfiles
                    </p>

                    <p>
                        <strong>Wie lange werden Daten gespeichert?</strong>
                    </p>

                    <p>
                        In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch
                        gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten
                        beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.
                    </p>

                    <p>
                        <strong>Kurz gesagt:</strong>&nbsp;Ihr Besuch wird durch unseren Provider (Firma, die unsere
                        Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir geben Ihre
                        Daten nicht ohne Zustimmung weiter!
                    </p>

                    <p>
                        <strong>Rechtsgrundlage</strong>
                    </p>

                    <p>
                        Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich
                        aus Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von
                        professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher
                        und nutzerfreundlich präsentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen
                        zu können.
                    </p>

                    <p>
                        Zwischen uns und dem Hostingprovider besteht in der Regel ein Vertrag über die
                        Auftragsverarbeitung gemäß Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet
                        und Datensicherheit garantiert.
                    </p>

                    <p>
                        <strong>Audio &amp; Video Einleitung</strong>
                    </p>

                    <p>
                        <strong>Audio &amp; Video Datenschutzerklärung Zusammenfassung</strong>
                        <br />
                        Betroffene: Besucher der Website
                        <br />
                        Zweck: Optimierung unserer Serviceleistung
                        <br />
                        Verarbeitete Daten: Daten wie etwa Kontaktdaten, Daten zum Nutzerverhalten, Informationen zu
                        Ihrem Gerät und Ihre IP-Adresse können gespeichert werden.
                        <br />
                        Mehr Details dazu finden Sie weiter unten in den entsprechenden Datenschutztexten.
                        <br />
                        Speicherdauer: Daten bleiben grundsätzlich gespeichert, solange sie für den Dienstzweck nötig
                        sind
                        <br />
                        &#x2696;&#xfe0f;&nbsp;Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1
                        lit. f DSGVO (Berechtigte Interessen)
                    </p>

                    <p>
                        <strong>Widerspruchsrecht</strong>
                    </p>

                    <p>
                        Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von
                        Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser
                        Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Bespiel können Sie auch die
                        Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten,
                        deaktivieren oder löschen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt
                        unberührt.
                    </p>

                    <p>
                        Da durch die eingebundenen Audio- und Video-Funktionen auf unserer Seite meist auch Cookies
                        verwendet werden, sollte Sie sich auch unsere allgemeine Datenschutzerklärung über Cookies
                        durchlesen. In den Datenschutzerklärungen der jeweiligen Drittanbieter erfahren Sie genaueres
                        über den Umgang und die Speicherung Ihrer Daten.
                    </p>

                    <p>
                        <strong>Rechtsgrundlage</strong>
                    </p>

                    <p>
                        Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Audio- und Video-Elemente
                        verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der
                        Datenverarbeitung&nbsp;<strong>(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich werden Ihre
                        Daten auch auf Grundlage unseres berechtigten Interesses&nbsp;
                        <strong>(Art. 6 Abs. 1 lit. f DSGVO)</strong>&nbsp;an einer schnellen und guten Kommunikation
                        mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die
                        eingebundenen Audio- und Video-Elemente gleichwohl nur ein, soweit Sie eine Einwilligung erteilt
                        haben.
                    </p>

                    <p>Alle Texte sind urheberrechtlich geschützt.</p>

                    <p>
                        Quelle: Erstellt mit dem&nbsp;
                        <a href="https://www.adsimple.at/datenschutz-generator/">Datenschutz Generator</a>&nbsp;von
                        AdSimple
                    </p>
                </div> */}
            </div>
        </MainContainer>
    );
}

export const getStaticProps = async (context) => {
    const resStart = await client.fetch(`*[_type in ["datenschutz"]]`);
    const dataStart = await resStart[0];

    return {
        props: {
            dataStart,
        },
        revalidate: 1, // 10 seconds
    };
};
