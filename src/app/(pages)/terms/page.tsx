import Layout from '@component/Layout';
import { RouteLink, getCanonicalUrl } from '@lib/route';
import { fetcher } from '@util/index';
import {TermsContent} from '@graphql-query/terms.graphql';
import { TermsData } from '@type/graphql';

export const metadata = {
  title: 'Mentions légales - inRage',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.terms),
  },
};

// const LegalTitle = ({ children }: { children: string }) => {
//   return (
//     <h2 className={'mt-6 mb-2 text-white font-bold text-3xl'}>{children}</h2>
//   );
// };

const getTermsData = (id:string):Promise<TermsData>=>fetcher(TermsContent,{id:id});

export default async function Legals() {
  const {data:{page:{content}}} = await getTermsData('cG9zdDoxOTc=');
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
