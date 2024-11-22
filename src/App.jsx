import { useEffect, useState } from "react";
import { Benefit, Footer, Header, Team, Value } from "./components"
import jazzByBlueApron from './assets/images/logos/Jazz-blue-apron.webp'
import heroBg from './assets/images/bg/hero-bg.png';
import { benefits } from "./data/benfits";
import { values } from "./data/values";
import { ourTeam } from "./data/ourTeam";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />

      <section
        className="bg-primary-blue h-dvh flex flex-col"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="m-auto flex items-center gap-56 max-lg:gap-24 max-[960px]:flex-col">
          <img className="max-sm:w-[200px]" src={jazzByBlueApron} alt="JazzByBlueApron" />
          <h2 className="text-white text-2xl flex flex-col max-sm:text-xl">
            Create in
            <span className="font-black text-8xl max-sm:text-7xl">
              Harmony
            </span>
          </h2>
        </div>
      </section>

      <section className="my-28 mx-28 max-lg:mx-14">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Design Value</h2>
        <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {
            values.map(({ id, value, bgColor, desc, icon, name }, i) => {
              return (
                <Value
                  key={id}
                  value={value}
                  bgColor={bgColor}
                  desc={desc}
                  icon={icon}
                  name={name}
                  gridClass={i === 3 && isSmallScreen ? "row-span-2" : null}
                />
              )
            })
          }
        </div>
      </section>

      <section className="my-28 mx-28 max-lg:mx-14">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Team</h2>
        <div className="grid grid-cols-5 gap-4 items-end h-[460px] max-[1280px]:h-auto max-[1280px]:justify-items-center max-[1280px]:grid-cols-2 max-sm:grid-cols-1">
          {
            ourTeam.map(({ id, name, bgColor, img }, i) => {
              return (
                <Team key={id} name={name} bgColor={bgColor} img={img} align={i % 2 !== 0 ? "self-start" : ""}/>
              )
            })
          }
        </div>
      </section>

      <section className="bg-primary-orange mt-28">
        <h2 className="text-white font-semibold text-4xl py-16 px-28 max-lg:px-14">Benefits</h2>
        <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1 mx-28 pb-64 max-lg:mx-14">
          {
            benefits.map(({ id, icon, title, desc }) => {
              return (
                <Benefit
                  key={id}
                  icon={icon}
                  title={title}
                  desc={desc} />
              )
            })
          }
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
