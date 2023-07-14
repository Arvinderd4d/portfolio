import Layout from '@component/Layout';
import { RouteLink, getCanonicalUrl } from '@lib/route';
import { fetcher } from '@util/index';
import {PolicyContent} from '@graphql-query/policy.graphql';
import { PolicyData } from '@type/graphql';

export const metadata = {
  title: 'Mentions légales - inRage',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.policy),
  },
};

// const LegalTitle = ({ children }: { children: string }) => {
//   return (
//     <h2 className={'mt-6 mb-2 text-white font-bold text-3xl'}>{children}</h2>
//   );
// };

const getPolicyData = (id:string):Promise<PolicyData>=>fetcher(PolicyContent,{id:id});

export default async function Policy() {
  const {data:{page:{content}}} = await getPolicyData('cG9zdDoz');
  return (
    <Layout title="Mentions légales">
      <div className="container">
      <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </Layout>
  );
}