import styled from "styled-components";

// const sizes = {
//     mobileS: "320px",
//     mobileM: "375px",
//     mobileL: "425px",
//     tablet: "768px",
//     laptop: "1024px",
//     laptopL: "1440px",
//     desktop: "2560px",
// };

// export const devices = {
//     mobileS: `(min-width: ${sizes.mobileS})`,
//     mobileM: `(min-width: ${sizes.mobileM})`,
//     mobileL: `(min-width: ${sizes.mobileL})`,
//     tablet: `(min-width: ${sizes.tablet})`,
//     laptop: `(min-width: ${sizes.laptop})`,
//     laptopL: `(min-width: ${sizes.laptopL})`,
//     desktop: `(min-width: ${sizes.desktop})`,
// };

const sizes = {
    desktop: "1281px",
    latops: ["1025px", "1280px"],
    tablets_portrait: ["768px", "1024px"],
};

export const devices = {
    desktops: `(min-width: ${sizes.desktop})`,
    laptops: `(min-width: ${sizes.latops[0]}) and (max-width: ${sizes.latops[1]})`,
    tablets_portrait: `(min-width: ${sizes.tablets_portrait[0]}) and (max-width: ${sizes.tablets_portrait[1]})`,
    tablets_landscape: `(min-width: ${sizes.tablets[0]}) and (max-width: ${sizes.tablets[1]})`,
};

export const ResponsiveContainer = styled.div`
    /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
    @media (min-width: 1281px) {
        main {
            padding: 64px 20%;
        }
        /* CSS */
    }
    /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
    @media (min-width: 1025px) and (max-width: 1280px) {
        header h1 {
            font-size: 26px;
        }
        header li {
            margin: 0 0px;
        }
        main {
            padding: 64px 5%;
        }
        /* CSS */
    }
    /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
    @media (min-width: 768px) and (max-width: 1024px) {
        /* CSS */
        header {
            height: 600px;
            flex-direction: column;
            width: 100%;
        }
        header .headerTop {
            flex-direction: column;
        }
        header .headerTop ul {
            margin: 10px 0;
        }
        header .headerTop ul li {
            margin-right: 15px;
        }
        header .headerTop ul li a {
            font-size: 14px;
        }
        header h1 {
            font-size: 24px;
        }
    }
    /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
    /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
    @media (min-width: 481px) and (max-width: 767px) {
        /* CSS */
        header {
            height: 900px;
            flex-direction: column;
            width: 100%;
        }
        header .headerTop {
            flex-direction: column;
        }
        header .headerTop ul {
            margin: 10px 0;
        }
        header .headerTop ul li {
            margin-right: 15px;
        }
        header .headerTop ul li a {
            font-size: 14px;
        }
        header h1 {
            font-size: 20px;
        }
        header .headerHero {
            display: flex;
            flex-direction: column;
        }
        main .mainTop {
            flex-direction: column;
            row-gap: 30px;
        }
        main .mainTop .mainTopLeft {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            width: 400px;
        }
        main .mainTop .mainTopLeft img {
            max-width: 80%;
        }
        main .mainBottom {
            flex-direction: column;
            row-gap: 20px;
        }
        main .mainBottom div img {
            height: 250px;
        }
    }
    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
    @media (max-width: 480px) {
        /* CSS */
        header {
            height: 1000px;
            flex-direction: column;
            width: 100%;
        }
        header .headerTop {
            flex-direction: column;
        }
        header .headerTop ul {
            margin: 10px 0;
        }
        header .headerTop ul li {
            margin-right: 15px;
        }
        header .headerTop ul li a {
            font-size: 14px;
        }
        header h1 {
            font-size: 20px;
        }
        header .headerHero {
            display: flex;
            flex-direction: column;
        }
        main .mainTop {
            flex-direction: column;
            row-gap: 30px;
        }
        main .mainTop .mainTopLeft {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            width: 400px;
        }
        main .mainTop .mainTopLeft img {
            max-width: 80%;
        }
        main .mainBottom {
            flex-direction: column;
            row-gap: 20px;
        }
        main .mainBottom div img {
            height: 200px;
        }
    } /*# sourceMappingURL=resp.css.map */
`;
