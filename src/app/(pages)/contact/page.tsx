import Image from 'next/image';
import ContactForm from '@component/ContactForm';
import Layout from '@component/Layout';
import { RouteLink, getCanonicalUrl } from '@lib/route';

import { FooterContent } from '@type/graphql';
import {FooterData} from '@graphql-query/footer-data.graphql';
import { fetcher } from '@util/index';

export const metadata = {
  title: 'Un projet web ? Parlons-en - Contactez-moi - Pascal GAULT',
  description:
    'Vous avez une idée de projet web et vous souhaitez me consulter pour que l\'on puisse y réfléchir ensemble ? N&#039;hésitez pas à me contact au 06 51 89 89 17.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.contact),
  },
};
const getFooterData = (id:string):Promise<FooterContent>=>fetcher(FooterData,{id:id})

export default async function Contact() {
  // const datas = await getFooterData('cG9zdDoxNjU=');
// console.log(datas, 'this is the datas');
  const {data} = await getFooterData('cG9zdDoxNjU=');
  return (
    <Layout title="Contact Us">
      <div className="container flex flex-col sm:flex-row">
        <div className="flex-none sm:w-[260px] text-center sm:text-right mb-6 sm:mb-0 sm:mr-8">
          <div className="text-center sm:text-right">
          <Image               
                src={data.page.footer.footerLogo.sourceUrl}
                alt="inRage - Pascal GAULT"
                width={200}
                height={100}
                style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
          </div>

          <p className='mt-2'>{data.page.footer.address}</p>

          <div className="text-orange mt-2">
            <a href={`tel:${data.page.footer.phone}`}>{data.page.footer.phone}</a>
          </div>
          <div className="text-orange">
            <a href={`mailto:${data.page.footer.email}`}>{data.page.footer.email}</a>
          </div>
          <div className="grid grid-flow-col gap-2 items-center justify-center sm:justify-end mt-2">
                <a        
                  className="text-white transition hover:text-orange"
                  href={data.page.socialMedia.facebok}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={data.page.socialMedia.facebookIcon.sourceUrl}
                    width={22}
                    height={16}            
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                    alt="Facebook Icon"
                  />
                </a>
                <a        
                  className="text-white transition hover:text-orange"
                  href={data.page.socialMedia.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={data.page.socialMedia.instagramIcon.sourceUrl}
                    width={22}
                    height={16}            
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                    alt="Instagram Icon"
                  />
                </a>
                <a        
                  className="text-white transition hover:text-orange"
                  href={data.page.socialMedia.pintrest}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={data.page.socialMedia.pintrestIcon.sourceUrl}
                    width={22}
                    height={16}            
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                    alt="Pinterest Icon"
                  />
                </a>
                <a        
                  className="text-white transition hover:text-orange"
                  href={data.page.socialMedia.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={data.page.socialMedia.twitterIcon.sourceUrl}
                    width={22}
                    height={16}            
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                    alt="Twitter Icon`"
                  />
                </a>
              </div>
        </div>
        <div className="flex-1">
          <ContactForm lg />
        </div>
      </div>
    </Layout>
  );
}
