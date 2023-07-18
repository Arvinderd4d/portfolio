
export type FeaturedImageNode = {
  node: {
    sourceUrl: string;
  };
};

export interface ProjectList {
  id: string;
  title: string;
  slug: string;
  status: 'publish' | 'draft' | 'private' | 'future';
  featuredImage: FeaturedImageNode;
  supports: {
    edges: Array<{
      node: {
        name: string;
        slug: string;
      };
    }>;
  };
}

export interface ArticleList {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  featuredImage: FeaturedImageNode;
}

export interface List<T> {
  data: Record<
    string,
    {
      edges: Array<{
        node: T;
      }>;
    }
  >;
}


export interface AboutPageContent {
  data: {
    page: {
      title: string;
      description: string;
      aboutUs: {
        title: string;
        description:string;
        visionTitle:string;
        visionDescription:string;
        missionTitle:string;
        missionDescription:string;
        coreValueTitle:string;
        coreValueDescription:string;
        visionIcon: {
          sourceUrl:string;
        },
        missionIcon: {
          sourceUrl:string;
        },
        coreValueIcon: {
          sourceUrl:string;
        }
        skillsTitle:string;
        skillsDescription:string;
      }
    };
  }
}
export interface HomePageContent {
  data: {
    page: {
      home: {
        masterPieceDescription:string
        masterPieceTitle:string
        masterPieceImage: {
          sourceUrl:string
        }
      }
    }
  }
}
export interface HomePageServices {
  data: {
    page: {
      homeServices: {
        title:string;
        subTitle:string;
        description:string;
        firstServiceTitle:string;
        firstServiceDescription:string;
        secondServiceTitle:string;
        secondServiceDescription: string;
        thirdServiceTitle:string;
        thirdServiceDescription:string;
        firstServiceIcon: {
          sourceUrl:string
        }
        secondServiceIcon: {
          sourceUrl:string;
        }
        thirdServiceIcon: {
          sourceUrl:string;
        }
      }
    }
  }
}
export interface HomeExpertiseContent {
  data:{
    page: {
      homeExpertise: {
        expertiseTitle:string;
        expertiseDescription:string;
        expertiseSubtitleOne:string;
        expertiseDescriptionOne:string;
        expertiseSubtitleTwo:string;
        expertiseDescriptionTwo:string;
        expertiseSubtitleThree:string;
        expertiseDescriptionThree:string;
        expertiseSubtitleFour:string;
        expertiseDescriptionFour:string;
        expertiseImageOne: {
          sourceUrl:string;
        }
        expertiseImageTwo: {
          sourceUrl:string;
        }
        expertiseImageThree: {
          sourceUrl:string;
        }
        expertiseImageFour: {
          sourceUrl:string;
        }
      }
    }
  }
}

export interface HomeArticleType{
  data:{
    page:{
      homeArticleSection:{
        articleTitle:string;
        articleDescription:string;
      }
    }
  }
}

export interface HomeHeadContent{
  data:{
    page:{
      homeHeaderSection:{
        headerTitle:string;
        headerSubTitle:string;
        headerContent:string;
        headerBackgroundImage:{
          sourceUrl:string;
        }
      }
    }
  }
}

export interface HeaderMenuContent{
  data:{
    menu: {
      menuItems: {
        nodes: Array<{
          label:string;
        }>
      }     
    }
  }
}

export interface FooterContent {
  data:{
    page:{
      footer:{
        address:string;
        copyright:string;
        footerLogo:{
          sourceUrl:string;
        }
        headerLogo:{
          sourceUrl:string;
        }
        phone:number;
        email:string;
      }

      socialMedia:{
        facebok:string;
        facebookIcon:{
          sourceUrl:string;
        }
        instagram:string;
        instagramIcon:{
          sourceUrl:string;
        }
        pintrest:string;
        pintrestIcon:{
          sourceUrl:string;
        }
        twitter:string;
        twitterIcon:{
          sourceUrl:string;
        }
      }
    }
  }
}
export interface PolicyData {
  data:{
    page:{
      content:string;
    }
  }
}
export interface TermsData {
  data:{
    page:{
      content:string;
    }
  }
}