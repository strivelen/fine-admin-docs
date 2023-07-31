import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import WAVES from "vanta/dist/vanta.waves.min";
import styles from "./index.module.css";

function HomepageBanner() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <header className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>Fine Admin</h1>
        <p className={styles.banenrDesc}>中后台管理系统通用模板</p>
        <div className={styles.bannerBtns}>
          <Link
            className={clsx("button", styles.button, styles.prevView)}
            target="_blank"
            href="https://strivelen.github.io/fine-admin"
          >
            预览
          </Link>
          <Link
            className={clsx("button", styles.button)}
            to="/docs/intro"
          >
            开始使用
          </Link>
        </div>
      </div>
      <div ref={myRef} style={{ width: "100%", height: "100%" }} />
    </header>
  );
}

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <HomepageBanner />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
