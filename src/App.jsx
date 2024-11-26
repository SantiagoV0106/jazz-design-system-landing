import { useEffect, useState } from "react";
import { AppleIcon, Benefit, BlueApronLogo, Button, Footer, Header, Input, RecipeIcon, Team, Value, } from "./components"
import jazzLogo from './assets/images/logos/Jazz-blue-apron.webp'
import heroBg from './assets/images/bg/hero-bg.png';
import heroMokup from './assets/images/bg/hero-mockup.webp';
import compBg from './assets/images/bg/component-bg.png';
import cardBg from './assets/images/bg/card-bg.jpg';
import card2Bg from './assets/images/bg/card2-bg.jpg';
import iconsBg from './assets/images/bg/icons-bg.png';
import loginScreen from './assets/images/bg/login-screen.png';
import recipesCard from './assets/images/bg/recipes-card.jpg';
import mockup from './assets/images/bg/mockup.png';
import token from './assets/images/bg/token.png';
import mockup2 from './assets/images/bg/mockup2.png';
import uiIcons from './assets/images/bg/ui-inventory-icons.png';
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
        <div className="mt-auto mx-auto flex gap-32 max-lg:gap-24 max-[960px]:flex-col max-[960px]:gap-14 max-lg:mb-auto max-lg:items-center ">
          <div className="flex flex-col gap-24">
            <img className="w-[368px] max-[1140px]:w-[298px]" src={jazzLogo} alt="JazzByBlueApron" />
            <img className="max-lg:hidden max-[1140px]:w-[348px]" src={heroMokup} alt="Blue apron hero mockup" />
          </div>
          <div className="flex flex-col gap-6 max-sm:px-4">
            <h2 className="text-white text-2xl flex flex-col max-sm:text-xl">
              Create in
              <span className="font-black text-8xl max-sm:text-7xl">
                Harmony
              </span>
            </h2>
            <p className="max-w-[500px] text-[15px] text-white">
              <strong>Jazz </strong>
              is a comprehensive design system meticulously crafted to
              streamline the design and development processes at Blue Apron.
              Inspired by the improvisational nature of jazz music,
              our system fosters a collaborative and efficient
              environment where designers and developers can work in harmony.
            </p>
            <nav className="flex gap-6 max-sm:flex-col max-sm:justify-center">
              <a target="_blank" href="https://www.figma.com/design/R0euCPDfQnGlKY9JdyrK8o/Jazz-Design-System"><Button href="" type="primary"> Preview in Figma </Button> </a>
              <a target="_blank" href="https://zeroheight.com/0c47887b5"><Button type="secondary"> Documentation </Button> </a>
            </nav>
          </div>
        </div>
      </section>

      <section className="my-36 mx-28 max-lg:mx-14" id="values">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Design Values</h2>
        <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-[680px]:grid-cols-1">
          {
            values.map(({
              id,
              value,
              bgColor,
              desc,
              icon,
              name,
              bgImage,
              image }, i) => {
              return (
                <Value
                  key={id}
                  value={value}
                  bgColor={bgColor}
                  desc={desc}
                  icon={icon}
                  name={name}
                  bgImage={bgImage}
                  image={image}
                  gridClass={i === 3 && isSmallScreen ? "row-span-2" : ''}
                />
              )
            })
          }
        </div>
      </section>

      <section className="mb-36 mx-28 max-lg:mx-14" id="our-team">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Team</h2>
        <div className="grid grid-cols-3 gap-7 max-2xl:grid-cols-2 max-lg:grid-cols-1 ">
          {
            ourTeam.map(({ id, name, bgColor, img, tags, links }) => {
              return (
                <Team
                  key={id}
                  name={name}
                  bgColor={bgColor}
                  img={img}
                  tags={tags} 
                  links={links}
                  />
              )
            })
          }
        </div>
      </section>

      <section className="mb-36 mx-28 max-lg:mx-14" id="our-design-system">
        <h2 className="text-text-primary font-semibold text-4xl mb-16">Our Design System</h2>
        <div className="grid grid-cols-5 max-[1280px]:grid-cols-4 max-[1280px]:grid-rows-3  max-[880px]:grid-cols-3 max-[880px]:grid-rows-5 grid-rows-2 gap-7">
          <article className="bg-primary-skyblue col-span-2 max-[880px]:col-span-3 py-14 px-11 flex items-center rounded-3xl">
            <div className="flex flex-col gap-7 w-full">
              <div className="flex gap-4 max-sm:flex-col">
                <Button type="primary">BUTTON</Button>
                <Button type="secondary">BUTTON</Button>
              </div>
              <Button type="social" icon={<AppleIcon />}>BUTTON</Button>
            </div>
          </article>
          <article className="bg-primary-darkblue col-span-2 max-[880px]:col-span-3 rounded-3xl flex items-center justify-center">
            <Input />
          </article>
          <article className="bg-primary-blue row-span-2 max-[880px]:col-span-3 max-[880px]:row-span-1 flex items-center justify-center rounded-3xl max-[1280px]:col-span-2">
            <i><BlueApronLogo props="max-sm:w-[100px] size-[150px] cursor-pointer" /></i>
          </article>
          <article className="bg-primary-orange col-span-2 max-[880px]:col-span-3 py-14 px-11 flex items-center justify-center rounded-3xl">
            <img className="w-[260px] rounded-[20px]" src={recipesCard} alt="Recipies Card" />
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
          <article className="bg-primary-mediumblue flex justify-center items-center py-16 pb-0 rounded-3xl">
            <img src={iconsBg} className="-mb-2" alt="" />
          </article>
          <article className="bg-primary-darkblue py-16 flex justify-center items-center rounded-3xl">
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold">
              42
              <span className="text-4xl font-light">
                Colors
              </span>
            </p>
            <RecipeIcon styles="absolute -mb-32 -ml-64" />
          </article>
          <article className="bg-primary-skyblue py-16 flex justify-center items-center rounded-3xl">
            <p className="flex flex-col items-center gap-3 text-primary-darkblue text-8xl font-extrabold">
              94
              <span className="text-4xl font-light">
                Component Variants
              </span>
            </p>
          </article>
          <article className="bg-primary-orange flex justify-center items-center py-16 rounded-3xl overflow-hidden">
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold">
              10
              <span className="text-4xl font-light">
                Tokens
              </span>
            </p>
            <img className="w-[140px] absolute mb-32 ml-[250px]" src={token} alt="" />
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
          <article className={`bg-primary-blue py-16 flex justify-center items-center rounded-3xl max-[1280px]:row-span-2 `}
            style={{
              backgroundImage: `url(${card2Bg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </article>
          <article className="bg-primary-mediumblue flex justify-center items-center py-16 pb-0 rounded-3xl">
            <img src={loginScreen} className="-mb-2" alt="" />
          </article>
          <article className="bg-primary-orange py-16 flex justify-center items-center rounded-3xl">
            <p className="flex flex-col items-center gap-3 text-white text-8xl font-extrabold">
              18
              <span className="text-4xl font-light">
                Font Styles
              </span>
            </p>
          </article>
          <article className="bg-primary-skyblue flex justify-center items-center py-16 pb-0 rounded-3xl">
            <img src={mockup} className="" alt="" />
          </article>
        </div>
        <div className="grid grid-cols-2 gap-7 mt-7">
            <article className="bg-primary-blue rounded-3xl flex flex-col items-center py-6 px-6">
              <div></div>
              <span className="flex items-center my-8">
                <h1 className=" text-9xl font-extrabold font-cerapro text-primary-darkblue">Aa</h1>
                <h2 className=" text-4xl font-bold text-white font-cerapro -ml-24 -mb-8">Cera Pro</h2>
              </span>
              <span className="flex justify-end w-[100%]">
                <a target="_blank" href="https://drive.google.com/file/d/1PO2rIp7HsE_u4eG6Jjsio8hkv2fNM5nD/view?usp=sharing"><Button props="bg-white text-primary-blue"> Download font </Button> </a>
              </span>
              
            </article>
            <article className="bg-primary-blue rounded-3xl flex flex-col items-center py-6 px-6">
              <div></div>
              <span className="flex items-center my-8">
                <h1 className=" text-9xl font-extrabold font-chronicle text-primary-darkblue">Aa</h1>
                <h2 className=" text-4xl font-bold text-white font-chronicle -ml-24 -mb-8">Chronicle Display</h2>
              </span>
              <span className="flex justify-end w-[100%]">
                <a target="_blank" href="https://drive.google.com/file/d/1AJ1BOfDP2BYE08aFEZjoFAJhwecyIYhX/view?usp=sharing"><Button props="bg-white text-primary-blue"> Download font </Button> </a>
              </span>
              
            </article>
            <article className="bg-primary-mediumblue rounded-3xl flex col-span-2 flex-col items-center py-6 px-6">
              <div></div>
              <h2 className=" text-5xl py-24 font-bold text-primary-darkblue -ml-24 -mb-8">UI Inventory Blueprint</h2>
              
              <span className="flex justify-end w-[100%]">
                <a target="_blank" href="https://drive.google.com/file/d/109fBHSMV5nTKj82vqXgLWmyIX6nq_HRr/view?usp=sharing"><Button props="bg-white text-primary-blue"> Download Source </Button> </a>
              </span>
              <div className="relative w-[100%] h-[100%]">
                <img src={mockup2} className="absolute -top-[224px]" alt="" />
                <img src={uiIcons} className="absolute -top-[290px] right-0" alt="" />
              </div>
              
            </article>
        </div>
      </section>

      <section className="bg-primary-orange" id="benefits">
        <h2 className="text-white font-semibold text-4xl py-16 px-28 max-lg:px-14">Benefits</h2>
        <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-[680px]:grid-cols-1 mx-28 pb-64 max-lg:mx-14">
          {
            benefits.map(({ id, icon, title, desc, type }) => {
              return (
                <Benefit
                  key={id}
                  icon={icon}
                  title={title}
                  desc={desc}
                  type={type} />
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
