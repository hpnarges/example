import React, { useState } from 'react';
import { Box, Container, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import BlockTitle from '../components/block-title';
import Image from '../components/image';
import { AiFillDollarCircle, AiFillPieChart } from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';
import { IoIosGlobe } from "react-icons/io";
import zoodboxs1 from '../assets/zoodbox/site/s1.png';
import zoodboxs2 from '../assets/zoodbox/site/s2.png';
import zoodboxs3 from '../assets/zoodbox/site/s3.png';
import socialWell1 from '../assets/img_socialWell/s1.png';
import socialWell2 from '../assets/img_socialWell/s2.png';
import app1 from '../assets/zoodbox/app/app1.webp';
import app2 from '../assets/zoodbox/app/app2.webp';
import app6 from '../assets/zoodbox/app/app6.webp';
import panel1 from '../assets/zoodbox/panel/p1.png';
import panel2 from '../assets/zoodbox/panel/p12.png';
import dotPattern from '../assets/dot-pattern.svg';
import Carousel from 'react-multi-carousel';
import ButtonGroup from "../components/button-group";
import PostCard from "../components/post-card";


const dataPanel=[
  {
    id:1,
    imgSrc:panel1,
    altText: 'Marketing',
    postLink: 'https://zoodbox.com/',
    title: '',
  },
  {
    id:1,
    imgSrc:panel2,
    altText: 'Marketing',
    postLink: 'https://www.zoodbox.com/',
    title: '',
  }
];
const dataSite = [
  {
    id: 1,
    imgSrc: zoodboxs1,
    altText: 'Marketing',
    postLink: 'https://www.zoodbox.com/',
    title: 'Zoodbox is an On-Demand Crowd-sourced Delivery Platform for Light and Small Packages Across town.',
    authorName: 'Zoodbox currently serves Montreal, Quebec, Canada',
  },
  {
    id: 2,
    imgSrc: zoodboxs2,
    altText: 'Creative',
    postLink: 'https://www.zoodbox.com/',
    title: 'Zoodbox is fast delivery.Just choose the destination with some simple touches!',
  },
  {
    id: 3,
    imgSrc: zoodboxs3,
    altText: 'Startup',
    postLink: 'https://www.zoodbox.com/',
    title: 'Zoodbox is fast delivery and convenience and save time',
  },
  {
    id: 4,
    imgSrc: socialWell1,
    altText: 'Startup',
    postLink: 'https://social-wellbeing.com/',
    title: 'Corona training course is to deal with the fear of this disease.',
  },
  {
    id: 5,
    imgSrc: socialWell2,
    altText: 'Startup',
    postLink: 'https://social-wellbeing.com/',
    title: '',
  }
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Featured = () => {
  const [tab, setTab] = useState({
    active: 'website',
  });

  const handleTab = (tab) => {
    if (tab === 'website') {
      setTab({
        ...tab,
        active: 'website',
      });
    }
    if (tab === 'app') {
      setTab({
        ...tab,
        active: 'app',
      });
    }
    if (tab === 'panel') {
      setTab({
        ...tab,
        active: 'panel',
      });
    }
    // if (tab === 'create') {
    //   setTab({
    //     ...tab,
    //     active: 'create',
    //   });
    // }
  };
  return (
    <Box as="section" sx={styles.featured}>
      <Container sx={styles.container}>
        <BlockTitle
          title="Our recent work"
          text="Here are a few design projects I've worked on recently."
        />
        <Box sx={styles.tabButtonTopWrapper}>
          <Box sx={styles.tabButtonWrapper}>
            <Button
              onClick={() => handleTab('website')}
              className={`${tab.active === 'budget' ? 'active' : ''}`}
            >
              <IoIosGlobe />
              Website
            </Button>
            <Button
              onClick={() => handleTab('app')}
              className={`${tab.active === 'app' ? 'active' : ''}`}
            >
              <FaCog />
              App
            </Button>
            <Button
              onClick={() => handleTab('panel')}
              className={`${tab.active === 'panel' ? 'active' : ''}`}
            >
              <AiFillPieChart />
              Panel
            </Button>
            {/*<Button*/}
            {/*  onClick={() => handleTab('create')}*/}
            {/*  className={`${tab.active === 'create' ? 'active' : ''}`}*/}
            {/*>*/}
            {/*  <FaBriefcase />*/}
            {/*  Create & adjust*/}
            {/*</Button>*/}
          </Box>
        </Box>
        <Box sx={styles.tabContent}>
          {tab.active === 'website' && (
              <Box sx={styles.carouselWrapper}>
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={2000}
                    centerMode={false}
                    className=""
                    containerClass="carousel-container"
                    customButtonGroup={<ButtonGroup />}
                    dotListClass="test"
                    draggable={true}
                    focusOnSelect={false}
                    infinite={true}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                >
                  {dataSite.map((item) => (
                      <PostCard
                          key={item.id}
                          src={item.imgSrc}
                          alt={item.altText}
                          postLink={item.postLink}
                          title={item.title}
                          authorName={item.authorName}
                          date={item.date}
                      />
                  ))}
                </Carousel>
              </Box>

          )}
          {tab.active === 'app' && (
              <Box>
                <Image src={app1} alt="tab image" className="tabImage" />
                <Image src={app2} alt="tab image" className="tabImage" />
                <Image src={app6} alt="tab image" className="tabImage" />
              </Box>

          )}
          {tab.active === 'panel' && (
              <Box sx={styles.carouselWrapper}>
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={2000}
                    centerMode={false}
                    className=""
                    containerClass="carousel-container"
                    customButtonGroup={<ButtonGroup />}
                    dotListClass="test"
                    draggable={true}
                    focusOnSelect={false}
                    infinite={true}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                >
                  {dataPanel.map((item) => (
                      <PostCard
                          key={item.id}
                          src={item.imgSrc}
                          alt={item.altText}
                          postLink={item.postLink}
                          title={item.title}
                          authorName={item.authorName}
                          date={item.date}
                      />
                  ))}
                </Carousel>
              </Box>
          )}

          {/*{tab.active === 'create' && (*/}
          {/*  <Image src={s4} alt="tab image" className="tabImage" />*/}
          {/*)}*/}
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  featured: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    backgroundColor: '#F9FAFC',
    mb:'200px'
  },
  container: {
    position: 'relative',
    top: '150px',
    mt: '-150px',
  },
  tabButtonTopWrapper: {
    overflowY: ['hidden', null, null, null, null, 'inherit'],
    overflowX: ['auto', null, null, null, null, 'inherit'],
  },
  tabButtonWrapper: {
    width: ['700px', null, null, null, null, '100%'],
    mx: ['auto', null, null, null, null, '0'],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(1,7,13,.1)',
    mb: '35px',
    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['10px', null, null, null, '30px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#0F2137',
      fontSize: ['14px', null, null, null, '18px'],
      fontWeight: 500,
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
      svg: {
        fontSize: ['18px', null, null, null, '30px'],
        color: '#ADBDD0',
        opacity: 0.7,
        mr: '15px',
        transition: 'all 500ms ease',
      },
      '&:hover, &.active': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#0F2137',
        svg: {
          color: '#0F2137',
          opacity: 1,
        },
        '&::before': {
          transform: 'scale(1,1)',
        },
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: '-2px',
        backgroundColor: '#0F2137',
        left: 0,
        width: '100%',
        height: '3px',
        transform: 'scale(0,1)',
        transition: 'transform 500ms ease',
      },
    },
  },
  tabContent: {
    minHeight: ['190px', null, '300px', '385px', null, '600px'],
    position: 'relative',
    '&::before': {
      content: "''",
      width: '302px',
      height: '347px',
      backgroundImage: `url(${dotPattern})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'block'],
    },
    '.tabImage': {
      position: 'relative',
      animation: `${fadeIn} 0.8s linear`,
    },
  },
  carouselWrapper: {
    '.carousel-container': {
      mx: -7,
    },
  },
};
