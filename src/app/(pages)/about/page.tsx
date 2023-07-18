import Character from '@component/Character';
import Diagonal from '@component/Diagonal';
import MoreIcon from '@component/icons/MoreIcon';
import ExperienceItem from '@component/items/ExperienceItem';
import Layout from '@component/Layout';
import Link from '@component/NoScrollLink';
import { getCanonicalUrl, RouteLink } from '@lib/route';
import AboutContent from '@graphql-query/aboutus.graphql';
import { fetcher } from '@util/index';
import { AboutPageContent } from '@type/graphql';

export const metadata = {
  title: 'Pascal GAULT - Développeur et intégrateur Freelance à La Rochelle',
  description:
    "15 ans d&#039;expertise dans la création de site Internet sous Joomla, WordPress, Prestashop et Symfony. Avec une très bonne maitrise de l'intégration web",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.aboutMe),
  },
};
const getData = (slug: string): Promise<AboutPageContent> =>
  fetcher(AboutContent, { id: slug });

export default async function AboutMe() {
  const {data} = await getData("cG9zdDo3Mg==");
  return (
    // <Layout title="this is the about page">
     <Layout title={data.page.title} homepage={false}>
     
      <div className="container mt-4 -mb-20">
        <h2 className="text-white text-3xl">
          <span className="font-bold">
            {data.page.aboutUs?.title}
          </span>
        </h2>

        <div className="mt-2 text-xl text-gray-light"
      dangerouslySetInnerHTML={{__html:  data.page.aboutUs?.description}}
    />
    <br/>
        <Link href={RouteLink.contact}>
          <span className="button">Contact Us</span>
        </Link>
      </div>

      <Diagonal bgClass="fill-gray-darker" bgCorner="fill-gray-dark" />

      <div className="bg-gray-darker">
        <div className="container lg:-mb-10">
          <div className="flex flex-col space-y-6 pt-6 pb-10">
            <ExperienceItem
              logo={data.page.aboutUs.visionIcon.sourceUrl}
              title={data.page.aboutUs.visionTitle}
              excerpt={data.page.aboutUs.visionDescription}
            />

            <ExperienceItem
               logo={data.page.aboutUs.missionIcon.sourceUrl}
               title={data.page.aboutUs.missionTitle}
               excerpt={data.page.aboutUs.missionDescription}
            />

            <ExperienceItem
              logo={data.page.aboutUs.coreValueIcon.sourceUrl}
              title={data.page.aboutUs.coreValueTitle}
              excerpt={data.page.aboutUs.coreValueDescription}
            />
          </div>
        </div>

        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            icon: <MoreIcon />,
            title: ['Voir tous', 'les projets'],
            href: RouteLink.portfolio,
          }}
        />
      </div>

      <div className="container mt-4 md:mt-0">
        <div className="flex items-center mt-3 md:mt-10">
          <div className="hidden md:block">
            <Character />
          </div>
          <div className="md:pl-4">
            <h3 className="text-white font-medium text-3xl mb-1">
              {data.page.aboutUs.skillsTitle}
            </h3>
            <div className="mt-2 text-xl text-gray-light" dangerouslySetInnerHTML={{__html:  data.page.aboutUs.skillsDescription}} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
