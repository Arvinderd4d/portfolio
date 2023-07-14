import Layout from '@component/Layout';
import SupportSwitcher from '@component/portfolio/SupportSwitcher';
import SectionTitle from '@component/SectionTitle';
import { getCanonicalUrl, RouteLink } from '@lib/route';
import PortfolioCategories from '@graphql-query/portfolio-categories.graphql';
import PortfolioProjects from '@graphql-query/portfolio-category-projects.graphql';
import { PortfolioCategory, SupportProjects } from '@type/graphql/portfolio';
import { fetcher } from '@util/index';

import PortfolioGrid from '../PortfolioGrid';

type Props = {
  params: {
    slug: string;
  };
};

const getData = (category: string): Promise<SupportProjects> =>
  fetcher(PortfolioProjects, { id: category });

export async function generateMetadata({ params }: Props) {
  const { data } = await getData(params.slug);
  return {
    title: `${data.support.name} - Portfolio`,
    description: data.support.excerpt,
    alternates: {
      canonical: getCanonicalUrl(`${RouteLink.portfolio}/${data.support.slug}`),
    },
  };
}

const getAllCategoriesSlugs = (): Promise<{
  data: { supports: { edges: Array<{ node: PortfolioCategory }> } };
}> => fetcher(PortfolioCategories);

export async function generateStaticParams() {
  const { data } = await getAllCategoriesSlugs();

  return data.supports.edges.map(({ node }) => ({
    slug: node.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { data } = await getData(params.slug);

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.portfolio, title: 'Portfolio' }]}
      title={data.support.name}
    >
    {/* // <Layout breadcrumbs={[{ link: RouteLink.portfolio, title: 'Portfolio' }]} title="portfolio category"> */}
      <div className="container">
        <SectionTitle
          content={
            "For any request or quote, do not hesitate to contact us by filling out the form below, we will be happy to answer you."
          }
          title={data.support.name}
        />
        <SupportSwitcher pathname={`/portfolio/${params.slug}`} />
        <PortfolioGrid projects={data.support.projets.edges} />
      </div>
    </Layout>
  );
}
