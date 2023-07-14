import Image from 'next/image';

import Link from '@component/NoScrollLink';
import { RouteLink } from '@lib/route';

import { FooterContent } from '@type/graphql';
import {FooterData} from '@graphql-query/footer-data.graphql';
import { fetcher } from '@util/index';

const getFooterData = (id:string):Promise<FooterContent>=>fetcher(FooterData,{id:id})

export default async function Footer() {
  const {data} = await getFooterData('cG9zdDoxNjU=');
  
  return (
    <div className="mt-5">
      <svg
        className="relative w-full h-[15vh] max-h-20 -mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(20,20,20,0.7" />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(20,20,20,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(20,20,20,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#141414" />
        </g>
      </svg>
      
      <div className="bg-gray-darker pt-3 pb-6">
        <div className="container flex flex-col sm:flex-row justify-between">
          <div>
            <div>
              <Image               
                src={data.page.footer.footerLogo.sourceUrl}
                alt="inRage - Pascal GAULT"
                 width={200}
                height={100}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="mt-1 grid grid-flow-col gap-1 text-sm text-orange justify-start">
              <Link href={RouteLink.home}>
                <span>Home</span>
              </Link>
              <Link href={RouteLink.aboutMe}>
                <span>About Us</span>
              </Link>
              <Link href={RouteLink.portfolio}>
                <span>Portfolio</span>
              </Link>
              <Link href={RouteLink.blog}>
                <span>Blog</span>
              </Link>
              <Link href={RouteLink.contact}>
                <span>Contact Us</span>
              </Link>
            </div>
            <div className="my-2">              
              <div className="grid grid-flow-col gap-2 items-center justify-start">
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
            <div>{data.page.footer.copyright}</div>
            <div className="mt-1 grid grid-flow-col gap-2 justify-start text-sm text-orange">
              <Link href={RouteLink.terms}>
                <span>Terms & Condition</span>
              </Link>
              <Link href={RouteLink.policy}>
                <span>Privacy Policy</span>
              </Link>
            </div>
          </div>
          <div className="text-center sm:text-right flex sm:items-end flex-col pt-2">
            <Link href={RouteLink.contact}>
              <span className="button">Contact Us</span>
            </Link>
            <div className="my-2 text-3xl font-bold text-orange">
              <a href={`tel:${data.page.footer.phone}`}>{data.page.footer.phone}</a>
            </div>
            <div className="text-center md:text-right text-sm">
              {data.page.footer.address}
              <p><a href={`mailto:${data.page.footer.email}`}>{data.page.footer.email}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
