/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column.js';
import Performance from '../assets/key-feature/performance.svg';
import reactjs from '../assets/key-feature/reactjs.png';
import Partnership from '../assets/key-feature/partnership.svg';
import nextjs from '../assets/key-feature/nextjs.png';
import Subscription from '../assets/key-feature/subscription.svg';
import gatsby from '../assets/key-feature/gatsby.png';
import reactnative from '../assets/key-feature/reactnative.png';
import nodejs from '../assets/key-feature/nodejs.png';
import python from '../assets/key-feature/python.png';
import React from 'react';


const data = [
  {
    id: 1,
    imgSrc: reactjs,
    altText: 'React JS',
    title: 'React JS',
    text:
      'ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, ' +
        'allowing you to build dynamic and interactive web apps with ease.' +
        ' It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. '
        ,
  },
  {
    id: 2,
    imgSrc: nextjs,
    altText: 'Next JS',
    title: 'Next JS',
    text:
      'Next.js is an open-source React front-end framework that adds additional optimization capabilities like server-side rendering (SSR) and ' +
        ' TypeScript support, smart bundling, route pre-fetching, and more',
  },
  {
    id: 3,
    imgSrc: gatsby,
    altText: 'Gatsby',
    title: 'Gatsby',
    text:
      'Gatsby or GatsbyJS is a framework based on React library and GraphQL ' +
        'that makes it easy to create both website and web applications.It is a ' +
        'strategy for building websites/apps based on client-side JavaScript (or other scripts),' +
        ' reusable APIs and prebuilt Markup. This type of site has high performance, scalability and safety.',
  },
  {
    id: 4,
    imgSrc: reactnative,
    altText: 'React Native',
    title: 'React Native',
    text:
      'React Native is the most popular framework for developing cross-platform mobile applications. ' +
        'This framework has made it possible to create native mobile apps for multiple platforms simultaneously. ' +
        'You can develop full-blown mobile applications for both iOS and Android using a single language, i.e., JavaScrip',
  },
  {
    id: 5,
    imgSrc: nodejs,
    altText: 'Node JS',
    title: 'Node JS',
    text:
        'Node.js is an open-source server side runtime environment.' +
        ' It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment ' +
        'for building highly scalable server-side applications using JavaScript.',
  },
  {
    id: 5,
    imgSrc: python,
    altText: 'Python',
    title: 'Python',
    text:
        'Python is an easy to learn, powerful programming language. It has efficient high-level ' +
        'data structures and a simple but effective approach to object-oriented programming.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="experience">
      <Container>
        <SectionHeader
          slogan="My Skills & Experience"
          title="I have developer experience with popular the programming languages."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
