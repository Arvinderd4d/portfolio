import { Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import LastArticles from '@component/blog/LastArticles';
import ContactForm from '@component/ContactForm';
import Diagonal from '@component/Diagonal';
import LeafHeartIcon from '@component/icons/LeafHeartIcon';
import MoreIcon from '@component/icons/MoreIcon';
import ExpertiseItem from '@component/items/ExpertiseItem';
import Keypoints from '@component/Keypoints';
import Layout from '@component/Layout';
import LastProjects from '@component/portfolio/LastProjects';
import PrestationsList from '@component/PrestationsList';
import SectionTitle from '@component/SectionTitle';
import ImageDiscoverTma from '@image/prestations/presentation-integration-web.jpeg';
import { getCanonicalUrl, RouteLink } from '@lib/route';
import { fetcher } from '@util/index';
import {HomeContent} from '@graphql-query/home.graphql';
import {HomeExpertise} from '@graphql-query/home-expertise.graphql';
import {HomeServicesContent} from '../graphql/home-services.graphql';
import { HomeArticleContent } from '../graphql/home-article-detail.graphql';
import { HomeExpertiseContent, HomePageContent, HomePageServices, HomeArticleType } from '@type/graphql';
import { HomeHeaderContent } from '../graphql/home-header-detail.graphql';
import { HomeHeadContent } from '@type/graphql';

export const metadata = {
  title:
    'Développeur Freelance, Pascal GAULT - La Rochelle WordPress et Prestashop',
  description:
    'Pascal GAULT, Intégrateur web et développeur Freelance à La Rochelle spécialisé dans la création de sites internet WordPress, Joomla, Symfony et Prestashop.',
  alternates: {
    canonical: getCanonicalUrl(),
  },
};

const getData = (id:string):Promise<HomePageContent>=> fetcher(HomeContent, {id:id})
const getExpertise = (id:string):Promise<HomeExpertiseContent>=> fetcher(HomeExpertise, {id:id})
const getServices = (slug:string): Promise<HomePageServices> =>
fetcher(HomeServicesContent, {id:slug});
const getArticleContent = (id:string):Promise<HomeArticleType> => fetcher(HomeArticleContent, {id:id});
const getHeaderData = (id:string):Promise<HomeHeadContent> => fetcher(HomeHeaderContent, {id:id})

export default async function Homepage() {
const {data} = await getData("cG9zdDoxMTM=");
const {data:{page}} = await getExpertise("cG9zdDoxMTM=");
const {data:{page:{homeServices}}} = await getServices("cG9zdDoxMTM=");
const {data:{page:{homeArticleSection}}} = await getArticleContent("cG9zdDoxMTM");
const {data:{page:{homeHeaderSection}}} = await getHeaderData("cG9zdDoxMTM=");
return (
    <Layout title={homeHeaderSection.headerTitle} homepage={true} content={homeHeaderSection.headerSubTitle} excerpt={homeHeaderSection.headerContent}>
      
      <div className="container">
        <SectionTitle
          className="mt-3 md:mt-0"
          title={homeServices.title}
          content={homeServices.description}
        />
        <div className="my-4 mx-auto text-xl sm:text-2xl max-w-4xl font-medium text-center text-white">{homeServices.subTitle}</div>
        <PrestationsList />
      </div>

      <div className="relative">
        <Diagonal
          className="-z-10 h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <Image
          className="-z-10 opacity-30 md:opacity-100"
          src={ImageDiscoverTma}
          alt="Prestation de maintenance TMA"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="container relative z-10 py-5 xl:py-0 md:-my-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl text-white font-medium mb-3">
              {data.page.home.masterPieceTitle}
            </h2>
            <div className="mt-2 text-xl text-gray-light" dangerouslySetInnerHTML={{__html:  data.page.home.masterPieceDescription}} />

            <div className="flex flex-wrap flex-start">
              <Link href={RouteLink.aboutMe}>
                <span className="button mt-3 mr-2">
                  Find out more
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Diagonal
          bgClass="fill-gray-darker"
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgCorner="fill-orange"
        />
      </div>

      <div className="bg-gray-darker pt-8 md:pt-3">
        <div className="container mb-10 lg:-mb-8 z-10 relative">
          <SectionTitle
            content="Check out my latest creations, achieving all the aesthetics of detail and functionality that sets me apart from the rest as a Freelance Developer.            "
            title="Projets"
          />

          <Suspense fallback={<p>Loading</p>}>
            <LastProjects />
          </Suspense>
        </div>
        <Diagonal
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          cta={{
            icon: <MoreIcon />,
            title: ['View All', 'Projets'],
            href: RouteLink.portfolio,
          }}
        />
      </div>

      <div className="container">
        <SectionTitle
          title={page.homeExpertise.expertiseTitle}
          content={page.homeExpertise.expertiseDescription}
        />

        <div className="my-4 grid md:grid-cols-2 gap-x-2 gap-y-6">
          <ExpertiseItem
            title={page.homeExpertise.expertiseSubtitleOne}
            excerpt={page.homeExpertise.expertiseDescriptionOne}
            link=""
            // link={RouteLink.prestationWordPress}
            image={page.homeExpertise.expertiseImageOne.sourceUrl}
          />
          <ExpertiseItem
            title={page.homeExpertise.expertiseSubtitleTwo}
            excerpt={page.homeExpertise.expertiseDescriptionTwo}
            // link={RouteLink.prestationWordPress}
            link=""
            image={page.homeExpertise.expertiseImageTwo.sourceUrl}
          />
          <ExpertiseItem
            title={page.homeExpertise.expertiseSubtitleThree}
            excerpt={page.homeExpertise.expertiseDescriptionThree}
            // link={RouteLink.prestationWordPress}
            link=""
            image={page.homeExpertise.expertiseImageThree.sourceUrl}
          />
          <ExpertiseItem
            title={page.homeExpertise.expertiseSubtitleFour}
            excerpt={page.homeExpertise.expertiseDescriptionFour}
            // link={RouteLink.prestationWordPress}
            link=""
            image={page.homeExpertise.expertiseImageFour.sourceUrl}
          />
        </div>
      </div>

      <Keypoints />

      <div className="bg-gray-darker">
        <div className="container py-4">
          <SectionTitle
            content={homeArticleSection.articleDescription}
            title={homeArticleSection.articleTitle}
          />

          <Suspense fallback={<p>Loading</p>}>
            <LastArticles />
          </Suspense>
        </div>

        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            icon: <LeafHeartIcon />,
            title: ['View All', 'Articles'],
            href: RouteLink.blog,
          }}
        />
      </div>

      <div className="container mt-8 md:mt-0">
        <SectionTitle
          content={
            "For any request or estimate, do not hesitate to contact me by filling out the form below, I would be delighted to answer you."
          }
          title="Contact"
        />

        <ContactForm />
      </div>

    </Layout>
  );
}
