import Layout from '@component/Layout';
import SupportSwitcher from '@component/portfolio/SupportSwitcher';
import SectionTitle from '@component/SectionTitle';
import PortfolioProjects from '@graphql-query/portfolio-projects.graphql';
import { getCanonicalUrl, RouteLink } from '@lib/route';
import { List, ProjectList } from '@type/graphql';
import { fetcher } from '@util/index';
import ProjectItem from '@component/items/ProjectItem';

// import PortfolioGrid from './PortfolioGrid';

export const metadata = {
  title: 'Portfolio des projets de création de site Internet',
  description:
    "Retrouvez la liste des projets de création de site web, de boutique e-commerce ou encore d'application web",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.portfolio),
  },
};

const getData = (): Promise<List<ProjectList>> => fetcher(PortfolioProjects);

export default async function Page() {
  const { data } = await getData();

  return (
    <Layout title="Portfolio">
      <div className="container">
        <SectionTitle
          content={
            "For any request or quote, do not hesitate to contact us by filling out the form below, we will be happy to answer you."
          }
          title="Portfolio"
        />
        <SupportSwitcher pathname="/portfolio" />
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3">
      {data?.projets?.edges.map(({ node }) => (
        <ProjectItem
          xl
          key={node.id}
          image={node.featuredImage.node.sourceUrl}
          title={node.title}
          slug={node.slug}
          support={node.supports?.edges[0]?.node}
          isPrivate={node.status === 'publish'}
        />
      ))}
    </div>
        {/* <PortfolioGrid projects={data?.projets?.edges} /> */}
      </div>
    </Layout>
  );
}
