import { useEffect, useState } from "react";
import { AppleIcon, Benefit, BlueApronLogo, Button, Footer, Header, Input, JazzALogo, MicIcon, Team, TrompetaIcon, Value, ViolinIcon } from "./components"
import heroBg from './assets/images/bg/hero-bg.png';
import compBg from './assets/images/bg/component-bg.png';
import cardBg from './assets/images/bg/card-bg.jpg';
import recipesCard from './assets/images/bg/recipes-card.jpg';
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

  const handleLinkClick = () => {
    window.open(
      "https://www.figma.com/design/R0euCPDfQnGlKY9JdyrK8o/Jazz-Design-System?node-id=2436-1434&t=5B36PkvSurRkZ9G9-1",
      "_blank",
      "noopener noreferrer"
    );
  }

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
        <div className="m-auto flex items-center gap-56 max-lg:gap-24 max-[960px]:flex-col max-[960px]:gap-14">
          <BlueApronLogo props="max-sm:w-[200px] size-[250px] cursor-pointer" alt="JazzByBlueApron" onClick={handleLinkClick} />
          <div className="flex flex-col gap-6 max-sm:px-4">
            <h2 className="text-white text-2xl flex flex-col max-sm:text-xl">
              Create in
              <span className="font-black text-8xl max-sm:text-7xl">
                Harmony
              </span>
            </h2>
            <p className="max-w-[500px] text-[15px] text-white"><strong>Jazz</strong> promises to deliver a unified,  and accessible design experience 
              that adapts to your needs. It provides the tools and framework 
              necessary for creating consistent, beautiful, and functional 
              interfaces while enabling creativity and innovation.</p>
              <nav className="flex gap-6 max-sm:flex-col max-sm:justify-center">
                <a target="_blank" href="https://www.figma.com/design/R0euCPDfQnGlKY9JdyrK8o/Jazz-Design-System"><Button href="" type="primary"> Preview in Figma </Button> </a>
                <a target="_blank" href="https://zeroheight.com/0c47887b5"><Button type="secondary"> Documentation </Button> </a>
              </nav>
          </div>
        </div>
      </section>

      <section className="my-36 mx-28 max-lg:mx-14" id="values">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Design Value</h2>
        <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-[680px]:grid-cols-1">
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
                  gridClass={i === 3 && isSmallScreen ? "row-span-2" : ''}
                />
              )
            })
          }
        </div>
      </section>

      <section className="mb-36 mx-28 max-lg:mx-14" id="our-team">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Team</h2>
        <div className="grid grid-cols-5 gap-4 items-end h-[460px] max-[1280px]:h-auto max-[1280px]:justify-items-center max-[1280px]:grid-cols-2 max-sm:grid-cols-1">
          {
            ourTeam.map(({ id, name, bgColor, img }, i) => {
              return (
                <Team key={id} name={name} bgColor={bgColor} img={img} align={i % 2 !== 0 ? "self-start" : ""} />
              )
            })
          }
        </div>
      </section>

      <section className="mb-36 mx-28 max-lg:mx-14" id="our-design-system">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Design System</h2>
        <div className="grid grid-cols-5 max-[1280px]:grid-cols-4 max-[1280px]:grid-rows-3  max-[880px]:grid-cols-3 max-[880px]:grid-rows-5 grid-rows-2 gap-7">
          <article className="bg-primary-blue col-span-2 max-[880px]:col-span-3 py-14 px-11 flex items-center rounded-3xl">
            <div className="flex flex-col gap-7 w-full">
              <div className="flex gap-4 max-sm:flex-col">
                <Button type="primary">BUTTON</Button>
                <Button type="secondary">BUTTON</Button>
              </div>
              <Button type="social" icon={<AppleIcon />}>BUTTON</Button>
            </div>
          </article>
          <article className="bg-primary-yellow col-span-2 max-[880px]:col-span-3 rounded-3xl flex items-center justify-center">
            <Input />
          </article>
          <article className="bg-primary-blue row-span-2 max-[880px]:col-span-3 max-[880px]:row-span-1 flex items-center justify-center rounded-3xl max-[1280px]:col-span-2">
            <i><BlueApronLogo props="max-sm:w-[100px] size-[150px] cursor-pointer" /></i>
          </article>
          <article className="bg-primary-orange col-span-2 max-[880px]:col-span-3 py-14 px-11 flex items-center justify-center rounded-3xl">
            <img className="w-[260px]" src={recipesCard} alt="Recipies Card" />
          </article>
          <article className="bg-primary-pink col-span-2 max-[880px]:col-span-3 rounded-3xl"
            style={{
              backgroundImage: `url(${cardBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </article>
        </div>
        {/* Refactorizable */}

        <div className="grid grid-cols-[1fr_434px_1fr] max-[1280px]:grid-cols-2 max-[880px]:grid-cols-1 gap-7 mt-7">
          <article className="bg-primary-yellow flex justify-center items-center py-16 rounded-3xl">
            <JazzALogo />
          </article>
          <article className="bg-primary-orange py-16 flex justify-center items-center rounded-3xl">
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold">
              42
              <span className="text-4xl font-light">
                Colors
              </span>
            </p>
          </article>
          <article className="bg-primary-pink h-full pt-16 flex flex-col justify-end items-center rounded-3xl">
            <MicIcon />
          </article>
          <article className="bg-primary-orange flex justify-center items-center py-16 rounded-3xl">
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold">
              10
              <span className="text-4xl font-light">
                Tokens
              </span>
            </p>
          </article>
          <article className={`bg-primary-blue py-16 flex justify-center items-center rounded-3xl max-[1280px]:row-span-2 `}
            style={{
              backgroundImage: `url(${compBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold">
              29
              <span className="text-4xl font-light">
                Components
              </span>
            </p>
          </article>
          <article className="bg-primary-orange py-16 flex justify-center items-center rounded-3xl">
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold">
              18
              <span className="text-4xl font-light">
                Font Styles
              </span>
            </p>
          </article>
          <article className="bg-primary-skyblue py-16 flex flex-col justify-end items-center rounded-3xl">
            <ViolinIcon />
          </article>
          <article className="bg-primary-orange py-16 flex justify-center items-center rounded-3xl">
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold text-center">
              94
              <span className="text-4xl font-light">
                Component Variants
              </span>
            </p>
          </article>
          <article className="bg-primary-yellow py-16 flex justify-center items-center rounded-3xl">
            <TrompetaIcon />
          </article>
        </div>
      </section>

      <section className="bg-primary-orange" id="benefits">
        <h2 className="text-white font-semibold text-4xl py-16 px-28 max-lg:px-14">Benefits</h2>
        <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-[680px]:grid-cols-1 mx-28 pb-64 max-lg:mx-14">
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
