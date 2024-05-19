import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPropertiesInfo } from "@/utils/auxFunctions";
import { Button } from "@/components/ui/button";

import Navbar from "./components/Navbar";

export default async function HomePage() {
  const { numberOfActives = null, numberOfPropertiesSold = null } =
    await getPropertiesInfo();
  return (
    <>
      <Navbar />
      <div>
        <section
          id="hero"
          className="overflow-hidden pt-12 sm:pt-20 md:pt-24 lg:relative lg:pt-32"
        >
          <div className="relative z-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="relative z-[1]">
              <div className="mr-auto">
                <div className="text-left">
                  <div className="mr-auto">
                    <div className="flex flex-col">
                      <span className="font-sans text-4xl font-black tracking-tight text-gray-700 sm:text-6xl xl:text-7xl">
                        Leilão.{" "}
                      </span>
                      <span className="font-sans text-4xl font-black dark:text-white sm:text-6xl xl:text-6xl">
                        A maneira mais inteligente de comprar imóveis.
                      </span>
                    </div>
                    <h2 className="prose  relative mr-auto mt-6 text-balance font-serif sm:text-xl">
                      Descubra ofertas imobiliárias incríveis no Brasil através
                      de nossa plataforma fácil de usar.
                    </h2>
                  </div>
                  <div className="mt-4 space-y-4 md:mt-10">
                    <div className=" relative">
                      <Button size={"lg"}>
                        <Link className="" href="/register">
                          Registre-se agora
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative mt-6 flex dark:text-white">
                    <div className="flex items-center gap-3 divide-x text-center sm:text-left">
                      <div className="flex shrink-0 flex-wrap">
                        <svg
                          viewBox="0 0 20 20"
                          width="1.2em"
                          height="1.2em"
                          className="size-5 dark:text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 20 20"
                          width="1.2em"
                          height="1.2em"
                          className="size-5 dark:text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 20 20"
                          width="1.2em"
                          height="1.2em"
                          className="size-5 dark:text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 20 20"
                          width="1.2em"
                          height="1.2em"
                          className="size-5 dark:text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 20 20"
                          width="1.2em"
                          height="1.2em"
                          className="size-5 dark:text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="min-w-0 py-1 pl-3 font-serif text-xs tracking-tight sm:text-sm">
                        Melhores negócios
                      </div>
                      <div className="min-w-0 py-1 pl-3 font-serif text-xs tracking-tight sm:text-sm">
                        Melhor experiência
                      </div>
                    </div>
                  </div>
                  <div className=" relative mt-6">
                    <div className="flex items-center justify-center md:justify-start">
                      <div>
                        <p className="text-balance font-serif text-sm tracking-tight dark:font-bold sm:text-base sm:font-bold">
                          “Simplificou muito as minhas buscas de imóveis de
                          leilão.”{" "}
                        </p>
                        <div className="mt-2 flex items-center justify-center gap-2 md:justify-start">
                          <Image
                            src="https://storage.googleapis.com/mixo-files/public/img/avatars/male-30.png"
                            alt="Yan Lee"
                            className="mr-1 inline-block size-7 rounded-full border border-primary object-cover sm:mr-2"
                            height={50}
                            width={50}
                            unoptimized
                          />
                          <p className="font-serif text-sm font-semibold sm:text-base">
                            Simas Turbo{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:pl-6">
            <div className="z-20 pt-12 sm:relative sm:mt-12 sm:pt-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className=" absolute inset-y-0 left-1/2 w-screen rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                <svg
                  className="absolute right-1/4 top-8 -mr-3 lg:left-0 lg:m-0"
                  width="800"
                  height="392"
                  fill="none"
                  viewBox="0 0 800 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className=""
                        fill="currentColor"
                      ></rect>
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  ></rect>
                </svg>
              </div>
              <div className="relative ml-auto pl-4 sm:max-w-4xl sm:px-0 lg:flex lg:h-full lg:max-w-none lg:items-center xl:pl-12">
                <Image
                  className="w-full rounded-l-3xl 2xl:h-full 2xl:max-w-none 2xl:rounded-3xl"
                  src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Chama Leilões"
                  height={1000}
                  width={1000}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="mt-24 space-y-12 md:space-y-20 lg:space-y-10 "
          id="features"
          header-visible="true"
        >
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <h2 className="relative px-4 text-left font-sans text-4xl font-black dark:text-white sm:text-4xl md:text-center lg:text-5xl">
              Encontre ofertas imobiliárias incríveis
            </h2>
            <div className="relative mt-4 text-balance px-4 text-left font-serif text-lg leading-8 sm:mt-6 sm:text-xl md:text-center lg:px-0">
              Descubra os melhores imóveis com facilidade.
            </div>
          </div>
          <div className="relative space-y-24 overflow-hidden">
            <div className="lg:mx-auto lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-6 xl:gap-12 2xl:gap-24">
              <div className="mx-auto max-w-xl space-y-6 px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:px-0 lg:py-28 lg:pr-8 xl:py-32 2xl:mx-0">
                <div>
                  <h2 className="  relative font-sans text-3xl font-black tracking-tight dark:text-white sm:text-4xl">
                    Visualize dados de vários leilões
                  </h2>
                  <div className="prose  relative mt-4 font-serif text-base leading-relaxed sm:text-lg">
                    O CHAMA compila dados de diversos leilões imobiliários no
                    Brasil, fornecendo uma visão abrangente para ajudá-lo a
                    encontrar as melhores ofertas.
                  </div>
                  <div className="mt-6 flex justify-around gap-2">
                    <Card className="bg-gray-50">
                      <CardHeader className="text-lg font-bold">
                        Imóveis ativos
                      </CardHeader>
                      <CardContent className="flex flex-col gap-2">
                        <span className="font-semibold">
                          {numberOfActives.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">
                          para você procurar o seu.
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-50">
                      <CardHeader className="text-lg font-bold">
                        Imóveis vendidos
                      </CardHeader>
                      <CardContent className="flex flex-col gap-2">
                        <span className="font-semibold">
                          {numberOfPropertiesSold.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">
                          desde o início da plataforma.
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div></div>
              </div>
              <div className=" relative mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-sm:ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:flex lg:h-full lg:items-center lg:px-0">
                  <Image
                    src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="3xl:max-w-3xl ml-auto max-h-screen w-full rounded-r-2xl object-contain lg:right-0 2xl:max-h-[44rem] 2xl:max-w-2xl 2xl:rounded-2xl"
                    alt="Gather data from multiple auctions"
                    height={1000}
                    width={1000}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative space-y-24 overflow-hidden">
            <div className="lg:mx-auto lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-6 xl:gap-12 2xl:gap-24">
              <div className="mx-auto max-w-xl space-y-6 px-4 sm:px-6 lg:mx-auto lg:max-w-3xl lg:py-28 xl:py-32 xl:pl-12 2xl:mx-0 2xl:justify-self-end 2xl:pl-20">
                <div>
                  <h2 className="  relative font-sans text-3xl font-black tracking-tight dark:text-white sm:text-4xl">
                    Experiência amigável
                  </h2>
                  <div className="prose  relative mt-4 font-serif text-base leading-relaxed sm:text-lg">
                    Nossa plataforma foi projetada para oferecer a melhor
                    experiência ao usuário, facilitando a navegação por
                    diferentes propriedades e leilões para encontrar o negócio
                    perfeito.
                  </div>
                  <div className="mt-4 space-y-4 md:mt-10">
                    <div className=" relative">
                      <Button size={"lg"}>
                        <Link className="" href="/register">
                          Experimente
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className=" relative mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 sm:-mr-48 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:flex lg:h-full lg:items-center lg:px-0">
                  <Image
                    src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="3xl:max-w-3xl mr-auto max-h-screen w-full rounded-l-2xl object-contain lg:left-0 2xl:max-h-[44rem] 2xl:max-w-2xl 2xl:rounded-2xl"
                    alt="User-friendly experience"
                    height={1000}
                    width={1000}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative space-y-24 overflow-hidden">
            <div className="lg:mx-auto lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-6 xl:gap-12 2xl:gap-24">
              <div className="mx-auto max-w-xl space-y-6 px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:px-0 lg:py-28 lg:pr-8 xl:py-32 2xl:mx-0">
                <div>
                  <h2 className="  relative font-sans text-3xl font-black tracking-tight dark:text-white sm:text-4xl">
                    Economize tempo e esforço
                  </h2>
                  <div className="prose  relative mt-4 font-serif text-base leading-relaxed sm:text-lg">
                    Ao centralizar as informações dos leilões de imóveis, nosso
                    aplicativo economiza tempo e esforço na busca pelas melhores
                    ofertas, permitindo que você se concentre em encontrar seu
                    imóvel.
                  </div>
                </div>
              </div>
              <div className=" relative mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-sm:ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:flex lg:h-full lg:items-center lg:px-0">
                  <Image
                    src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYwNDAwMzR8&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    className="3xl:max-w-3xl ml-auto max-h-screen w-full rounded-r-2xl object-contain lg:right-0 2xl:max-h-[44rem] 2xl:max-w-2xl 2xl:rounded-2xl"
                    alt="Save time and effort"
                    height={1000}
                    width={1000}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="mt-24 w-full border-0 border-t bg-slate-900 text-center text-white">
        <div className="mx-auto max-w-7xl space-y-8 overflow-hidden px-6 py-16">
          <div className="relative flex flex-wrap justify-center gap-x-6 gap-y-4">
            <a
              href="#"
              className="text-gray-400 hover:text-primary"
              target="_blank"
            >
              <span className="sr-only">facebook</span>
              <svg
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary"
              target="_blank"
            >
              <span className="sr-only">instagram</span>
              <svg
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary"
              target="_blank"
            >
              <span className="sr-only">youtube</span>
              <svg
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary"
              target="_blank"
            >
              <span className="sr-only">linkedin</span>
              <svg
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                ></path>
              </svg>
            </a>
          </div>
          <p className="text-xs leading-5 sm:text-center">
            CHAMA © Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
