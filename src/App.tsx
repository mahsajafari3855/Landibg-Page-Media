import React from "react";
import "./App.css";
import MainLayouts from "./Layouts/MainLayots/MainLayouts";
import HomeArea from "./Component/HomeArea/HomeArea";
import AboutArea from "./Component/AboutArea/AboutArea";
import BestApp from "./Component/About-area/bestApp";
import FeatureArea from "./Component/featureArea/featureArea";
import ClientsArea from "./Component/clientsArea/clientsArea";
import VideoArea from "./Component/videoArea/VideoArea";
import ScreenShots from "./Component/screenShot/screenShots";
import PriceArea from "./Component/priceArea/priceArea";
import DownloadArea from "./Component/downloadArea/downloadArea";
import SupportArea from "./Component/supportArea/supportArea";

function App() {
  interface Data {
    supportAreaData: {
      title: string;
      description: string;
    };
    clientAreaData: object[];
    ItemPlanData: { title: string; description: string; data: object[] };
    featureItemData: {
      img: string;
      title: string;
      description: string;
      data: Array<object>;
    };
    screenShotsData: {
      title: string;
      description: string;
      data: Array<object>;
    };
    ItemAboutData: Array<object>;

    privacyPolicyData: { text: string; title: string };
    homeAreaData: {
      description: string;
      title: string;
      content: string;
      img: string;
    };
    aboutAreaData: {
      description: string;
      title: string;
      content: string;
      img: string;
    };
  }

  const data: Data = {
    supportAreaData: {
      title: "SUPPORT CLIENTS",
      description:
        "Claritas est etiam processus dynamicus, qui sequitur mutationem",
    },
    homeAreaData: {
      title: "AWESOME",
      description: "MOBILE APP.",
      content: "An awesome WordPress theme for App landing and App Store site",
      img: "img/home-3/slide-1.png",
    },
    aboutAreaData: {
      title: "AWESOME",
      description: "MOBILE APP.",
      content: "An awesome WordPress theme for App landing and App Store site",
      img: "img/home-3/bestapp.png",
    },
    privacyPolicyData: {
      text:
        "When opening an account, the user will be asked for the e-mail, in order to send the activation link and the necessary information via e-mail. \n" +
        "Users can be accessed anywhere in the world using the CDN system to provide the best service with the highest quality. \n" +
        "Username, email, IP addresses and how users use the site are considered strictly confidential and Telobion has a legal responsibility to maintain it.  \n" +
        "RainMedia is authorized and legally obliged to provide the mentioned information only in case of inquiry and order of judicial and administrative authorities.  \n" +
        "In this case, if there is no legal prohibition, the user will be notified. \n" +
        "Facebook \n" +
        "Log in or sign up to view \n" +
        "See posts, photos and more on Facebook. \n" +
        "User information is stored on the RainMedia  site for one year in the order mentioned.  \n" +
        "At the end of one year, the user will be notified via email that if not used, his account and information will be removed from the system within 48 hours.  \n" +
        "If the account is deleted and you want to reuse it, a new account must be opened. \n" +
        'Also, at any time, the user can request the deletion, change or download of his user information file from the "RainMedia" site to support@rainmedia.live.  \n' +
        "In this case, the operation requested by the user will be performed within 48 hours. \n" +
        "The user can request an electronic file at any time by sending an email to support@rainmedia.live.  \n" +
        "In this case, the information will be provided to him in HTML format. \n" +
        "RainMedia may inform you of important events and news by e-mail. \n" +
        "Details  \n" +
        "Can be used on web,ios,android bace platform and very easy access and installation \n" +
        "iOS app , Android app ,  Services on Smart TVs, Apple TV, Android TV,..",
      title: "Privacy-Policy",
    },
    clientAreaData: [
      {
        comment:
          "          consuetudium lectorum. Mirum est notare quam littera gothica, quam\n" +
          "          nunc putamus parum claram, anteposuerit litterarum formas humanitatis\n" +
          '          per seacula quarta decima et quinta decima.{" "}',
        img: "img/home-3/testimonial/1.png",
      },
      {
        comment:
          "Claritas est etiam processus dynamicus, qui sequitur mutationem\n" +
          "          consuetudium lectorum. Mirum est notare quam littera gothica, quam\n" +
          "          nunc putamus parum claram, anteposuerit litterarum formas humanitatis\n" +
          '          per seacula quarta decima et quinta decima.{" "}',
        img: "img/home-3/testimonial/2.png",
      },
      {
        comment:
          "Claritas est etiam processus dynamicus, qui sequitur mutationem\n" +
          +'          per seacula quarta decima et quinta decima.{" "}',
        img: "img/home-3/testimonial/3.png",
      },
      {
        comment:
          "Claritas est etiam processus dynamicus, qui sequitur mutationem\n" +
          "          consuetudium lectorum. Mirum est notare quam littera gothica, quam\n" +
          "          nunc putamus parum claram, anteposuerit litterarum formas humanitatis\n" +
          '          per seacula quarta decima et quinta decima.{" "}',
        img: "img/home-3/testimonial/1.png",
      },
    ],
    featureItemData: {
      title: "AWESOME FEATURES",
      description:
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      img: "img/feature.png",

      data: [
        {
          icon: "fa fa-cogs",
          title: "Application and website",
          content:
            "Application and website with the possibility of viewing video based on a topic",
        },
        {
          icon: "fa fa-envelope-o",
          title: "download and shareing",
          content: "Ability to download and shareing between users ",
        },
        {
          icon: "fa fa-play-circle-o",
          title: "Watch video",
          content: "Watch video simultaneously on different devices ",
        },
        {
          icon: "fa fa-comments",
          title: "multiple events",
          content:
            " Ability to display live broadcasts and multiple events on one screen ",
        },
        {
          icon: "fa fa-cloud",
          title: "categorize themes",
          content: "Ability to categorize themes and genres ",
        },
        {
          icon: "fa fa-user-plus",
          title: "like or dislike",
          content:
            "Ability to post comments, comments, like or dislike by users ",
        },
        {
          icon: "fa fa-calendar-check-o",
          title: "archive videos",
          content: " Access to VOD archive videos",
        },
        {
          icon: "fa fa-cogs",
          title: "Create playlists",
          content: "Create playlists and descriptions for each content ",
        },
        {
          icon: "fa fa-cogs",
          title: "manage and analyize",
          content:
            "Ability to manage and analyize all content in the control panel,  \n" +
            "  including detailed analytical statistics such as visits, downloads and ",
        },
      ],
    },

    screenShotsData: {
      title: "AWESOME SLIDER",
      description:
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",

      data: [
        {
          src: "img/home-3/screenshot/2.jpg",
        },
        {
          src: "img/home-3/screenshot/3.jpg",
        },
        {
          src: "img/home-3/screenshot/1.jpg",
        },
        {
          src: "img/home-3/screenshot/4.jpg",
        },
        {
          src: "img/home-3/screenshot/4.jpg",
        },
        {
          src: "img/home-3/screenshot/4.jpg",
        },
      ],
    },
    ItemPlanData: {
      title: "GREAT PRICES",
      description:
        "An awesome WordPress theme for App landing and App Store site",
      data: [
        {
          price: 10,
          name: "Basic",
          itemData: [
            "12 months support",
            "25 HTML template",
            "10 PSD template",
            "Synced to cloud database",
          ],
        },
        {
          price: 20,
          name: "standard",
          itemData: [
            "15 months support",
            "25 HTML template",
            "10 PSD template",
            "Synced to cloud database",
          ],
        },
        {
          price: 30,
          name: "Pro",
          itemData: [
            "10 months support",
            "25 HTML template",
            "10 PSD template",
            "Synced to cloud database",
          ],
        },
      ],
    },
    ItemAboutData: [
      {
        icon: "fa fa-pagelines",
        title: "Edit with some layers",
        content:
          "Ability to post comments, comments, like or dislike by users ",
      },
      {
        icon: "fa fa-laptop",
        title: "archive videos",
        content:
          "Ability to post comments, comments, like or dislike by users ",
      },
      {
        icon: "fa fa-cogs",
        title: "Create playlists",
        content: "Create playlists and descriptions for each content ",
      },
      {
        icon: "fa fa-cogs",
        title: "manage and analyize",
        content:
          "Ability to manage and analyize all content in the control panel,  \n" +
          "    ",
      },
    ],
  };

  // @ts-ignore
  return (
    <MainLayouts privacyPolicyData={data.privacyPolicyData}>
      <HomeArea homeAreaData={data.homeAreaData} />
      <AboutArea ItemAboutData={data.ItemAboutData} />
      <BestApp aboutAreaData={data.aboutAreaData} />
      <FeatureArea featureItemData={data.featureItemData} />
      <ClientsArea clientAreaData={data.clientAreaData} />
      <VideoArea />
      <ScreenShots screenShotsData={data.screenShotsData} />
      <PriceArea ItemPlanData={data.ItemPlanData} />
      <DownloadArea />
      <SupportArea supportAreaData={data.supportAreaData} />
    </MainLayouts>
  );
}

export default App;
