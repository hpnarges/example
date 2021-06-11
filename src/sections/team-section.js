/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid,Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import TeamCard from '../components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import Member1 from '../assets/team/member-1.png';
import Member2 from '../assets/self2.jpg';

const data = [
  {
    id: 1,
    imgSrc: Member2,
    altText: 'Narges',
    title: 'Narges',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'linkedin',
        path: 'https://www.linkedin.com/feed/',
        icon: <AiFillLinkedin />,
      },
      {
        id: 5,
        name: 'github',
        path: 'https://github.com/',
        icon: <AiFillGithub />,
      },
    ],
  },

];

export default function TeamSection() {
  return (
    <section style={{marginTop:'100px'}}>
      <Container>
        {/*<SectionHeader*/}
        {/*  slogan=""*/}
        {/*  title=""*/}
        {/*/>*/}
        <Grid sx={styles.grid  }>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
