import { useState, useRef } from "react";
import styled from "styled-components";
import { motion, useInView, useScroll } from "framer-motion";

import featuredImage from "./assets/img/featured-image.png";
import post1 from "./assets/img/post-1.png";
import post2 from "./assets/img/post-2.png";
import post3 from "./assets/img/post-3.png";
import post4 from "./assets/img/post-4.png";
import arrowRight from "./assets/svg/arrow-right.svg";
import logo from "./assets/svg/logo.svg";
import search from "./assets/svg/search.svg";

const Container = styled.div`
    header {
        background-color: ${(props) => props.colors.purpleBg};
        border-bottom: 6px solid ${(props) => props.colors.green};
        padding: 64px 10%;
        height: 580px;

        .headerTop {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;

            img {
                height: 40px;
                width: 180px;
            }

            ul {
                list-style: none;

                li {
                    display: inline-block;
                    margin-right: 32px;

                    a {
                        text-decoration: none;
                        color: ${(props) => props.colors.darkerPurple};
                        transition: font-weight 0.5s linear;
                    }

                    a:hover {
                        font-weight: 600;
                    }
                }

                li:first-of-type {
                    font-weight: 600;
                    border-left: 2px solid ${(props) => props.colors.green};
                    padding: 0 0 0 8px;
                }
            }
        }

        .headerTopButton {
            display: flex;
            input {
                padding: 14px 26px;
                background-color: ${(props) => props.colors.darkBg};
                width: 80%;
                border: none;
                color: ${(props) => props.colors.lightPurple};
                border-radius: 4px 0 0 4px;
                outline: none;
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 48px;
                min-width: 70px;
                background-color: ${(props) => props.colors.buttonBg};
                border: none;
                border-radius: 0 4px 4px 0;
                cursor: pointer;
                transition: opacity 0.5s linear;

                &:hover {
                    opacity: 0.8;
                }

                img {
                    height: 24px;
                    width: 24px;
                }
            }
        }

        .headerHero {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;

            .headerHeroLeft {
                h1 {
                    font-weight: 700;
                    font-family: 36px;
                    color: ${(props) => props.colors.buttonBg};
                    line-height: 54px;
                }

                p {
                    font-family: Roboto;
                    margin: 15px 0;
                    color: ${(props) => props.colors.lightPurple};
                    line-height: 27px;
                }

                a {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    color: ${(props) => props.colors.buttonBg};
                    font-weight: 600;

                    img {
                        margin-left: 5px;
                    }
                }
            }

            .headerHeroRight {
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    max-width: 100%;
                }
            }
        }
    }

    main {
        background-color: ${(props) => props.colors.lightPurple};
        padding: 64px 10%;

        .mainTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 64px;

            .mainTopLeft {
                width: 573px;
                margin-right: 20px;

                img {
                    max-width: 90%;
                }
            }

            .mainTopRight {
                width: 472px;
            }

            p:last-of-type {
                text-align: justify;
                text-justify: inter-word;
            }

            .divBreak {
                width: 100%;
                background-color: ${(props) => props.colors.lighterPurple};
                height: 1px;
                margin: 24px 0;
            }
        }

        .mainBottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 30px;

            div {
                max-width: 400px;

                img {
                    width: 100%;
                    height: 100%;
                    min-height: 60px;
                }

                h2 {
                    color: ${(props) => props.colors.purpleBg};
                    font-weight: 24px;
                    line-height: 36px;
                }

                p:last-of-type {
                    text-align: justify;
                    text-justify: inter-word;
                }
            }
        }
    }
`;

Container.defaultProps = {
    colors: {
        purpleBg: "#290742",
        lighterPurple: "#f2e7fa",
        darkerPurple: "#fbf6ff",
        darkBg: "#170027",
        buttonBg: "#9e6dc2",
        white: "#fff",
        lightPurple: "#fbf6ff",
        green: "#4fff4b",
    },
};

const ResponsiveContainer = styled.div`
    @media (min-width: 1281px) {
        main {
            padding: 64px 20%;
        }
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        header {
            h1 {
                font-size: 26px;
            }
            li {
                margin: 0 0px;
            }
        }
        main {
            padding: 64px 5%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        header {
            height: 600px;
            flex-direction: column;
            width: 100%;

            .headerTop {
                flex-direction: column;

                ul {
                    margin: 10px 0;
                    li {
                        margin-right: 15px;
                        a {
                            font-size: 14px;
                        }
                    }
                }
            }

            h1 {
                font-size: 24px;
            }
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        header {
            height: 900px;
            flex-direction: column;
            width: 100%;

            .headerTop {
                flex-direction: column;

                ul {
                    margin: 10px 0;
                    li {
                        margin-right: 15px;
                        a {
                            font-size: 14px;
                        }
                    }
                }
            }

            h1 {
                font-size: 20px;
            }

            .headerHero {
                display: flex;
                flex-direction: column;
            }
        }

        main {
            .mainTop {
                flex-direction: column;
                row-gap: 30px;

                .mainTopLeft {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    width: 400px;
                    img {
                        max-width: 80%;
                    }
                }
            }

            .mainBottom {
                flex-direction: column;
                row-gap: 20px;

                div {
                    img {
                        height: 250px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        header {
            height: 1000px;
            flex-direction: column;
            width: 100%;

            .headerTop {
                flex-direction: column;

                ul {
                    margin: 10px 0;
                    li {
                        margin-right: 15px;
                        a {
                            font-size: 14px;
                        }
                    }
                }
            }

            h1 {
                font-size: 20px;
            }

            .headerHero {
                display: flex;
                flex-direction: column;
            }
        }

        main {
            .mainTop {
                flex-direction: column;
                row-gap: 30px;

                .mainTopLeft {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    width: 400px;
                    img {
                        max-width: 80%;
                    }
                }
            }

            .mainBottom {
                flex-direction: column;
                row-gap: 20px;

                div {
                    img {
                        height: 200px;
                    }
                }
            }
        }
    }
`;

function App() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { scrollYProgress } = useScroll();

    return (
        <div className="App">
            <Container>
                <ResponsiveContainer>
                    <header>
                        <div className="headerTop">
                            <img src={logo} alt="logo" />
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Sobre</a>
                                    </li>
                                    <li>
                                        <a href="#">Categorias</a>
                                    </li>
                                    <li>
                                        <a href="#">Contato</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="headerTopButton">
                                <input type="text" placeholder="Buscar" />
                                <button type="submit">
                                    <img src={search} />
                                </button>
                            </div>
                        </div>
                        <div className="headerHero">
                            <motion.div
                                className="headerHeroLeft"
                                animate={{
                                    transform: [
                                        "translateX(-100px)",
                                        "translateX(0px)",
                                    ],
                                    opacity: [0.7, 0.2, 0.4, 1],
                                }}
                                transition={{ duration: 1 }}
                            >
                                <h1>
                                    Veja o guia definitivo para conquistar seus
                                    objetivos como DEV em 2022
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nibh nibh eu in aliquet ut
                                    adipiscing neque. Sed volutpat aenean sit
                                    vitae, sed tristique placerat hac.
                                </p>
                                <div className="headerHeroLeftButton">
                                    <a href>
                                        Veja mais
                                        <img src={arrowRight} />
                                    </a>
                                </div>
                            </motion.div>
                            <div className="headerHeroRight">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    src={featuredImage}
                                    alt=""
                                    whileHover={{ scale: 0.9 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                    </header>
                    <main>
                        <div className="mainTop">
                            <motion.div
                                className="mainTopLeft"
                                ref={ref}
                                style={{
                                    transform: isInView
                                        ? "none"
                                        : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                }}
                            >
                                <motion.img
                                    initial={{
                                        position: "relative",
                                        right: "250px",
                                    }}
                                    animate={{ right: "0px" }}
                                    transition={{ duration: 1 }}
                                    src={post1}
                                />
                                <p>Janeiro 04, 2022</p>
                                <h2>10 dicas para conseguir a vaga desejada</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nibh nibh eu in aliquet ut
                                    adipiscing neque. Sed volutpat aenean sit
                                    vitae, sed tristique.
                                </p>
                            </motion.div>
                            <motion.div
                                className="mainTopRight"
                                ref={ref}
                                style={{
                                    transform: isInView
                                        ? "none"
                                        : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                }}
                            >
                                <p>Janeiro 04, 2022</p>
                                <h2>10 dicas para conseguir a vaga desejada</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nibh nibh eu in aliquet ut
                                    adipiscing neque. Sed volutpat aenean sit
                                    vitae, sed tristique.
                                </p>
                                <div className="divBreak"></div>
                                <p>Janeiro 04, 2022</p>
                                <h2>10 dicas para conseguir a vaga desejada</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nibh nibh eu in aliquet ut
                                    adipiscing neque. Sed volutpat aenean sit
                                    vitae, sed tristique.
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            className="mainBottom"
                            whileInView={{
                                transform: [
                                    "translate(200px)",
                                    "translate(0px)",
                                ],
                            }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                duration: 1,
                            }}
                        >
                            <div>
                                <img src={post2} />
                                <p>Janeiro 04, 2022</p>
                                <h2>10 dicas para conseguir a vaga desejada</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nibh nibh eu in aliquet ut
                                    adipiscing neque. Sed volutpat aenean sit
                                    vitae, sed tristique.
                                </p>
                            </div>
                            <div>
                                <img src={post3} />
                                <p>Janeiro 04, 2022</p>
                                <h2>
                                    Deixe seu código mais semântico com essas
                                    dicas
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nibh nibh eu in aliquet ut
                                    adipiscing neque. Sed volutpat aenean sit
                                    vitae, sed tristique.
                                </p>
                            </div>
                            <div>
                                <img src={post4} />
                                <p>Janeiro 04, 2022</p>
                                <h2>
                                    Use essas dicas nas suas aplicações mobile
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nibh nibh eu in aliquet ut
                                    adipiscing neque. Sed volutpat aenean sit
                                    vitae, sed tristique.
                                </p>
                            </div>
                        </motion.div>
                    </main>
                </ResponsiveContainer>
            </Container>
        </div>
    );
}

export default App;
