import { Navbar } from "@docusaurus/theme-common";

// don't specify style or hideOnScroll here, we want it to be dynamic
const navbar: Omit<Navbar, "style" | "hideOnScroll"> = {
  logo: {
    src: "img/logo-marker-light.svg",
    srcDark: "img/logo-marker-dark.svg",
    height: 42, // when changing here, also change css
    width: 121,
    alt: "PaperMC Docs",
  },
  items: [
    {
      type: "dropdown",
      label: "Splatgames.de Tutorial",
      to: "/splatgames-tutorial",
      position: "left",
      activeBaseRegex: "\\/splatgames.*",
      items: [
        {
          label: "Administration",
          to: "/splatgames-tutorial/admin",
          activeBaseRegex: "\\/splatgames/(?!(dev|contributing)).*",
        },
        {
          label: "Development",
          to: "/splatgames-tutorial/dev",
          activeBaseRegex: "\\/splatgames\\/dev.*",
        },
        {
          label: "Mitwirken",
          to: "/splatgames-tutorial/contributing",
          activeBaseRegex: "\\/splatgames\\/contributing.*",
        },
      ],
    },
    {
      type: "dropdown",
      label: "CityBuild-API",
      to: "/citybuild-api",
      position: "left",
      activeBaseRegex: "(\\/citybuild)(.+)?",
      items: [
        {
          label: "Administration",
          to: "/citybuild-api/admin",
          activeBaseRegex: "(\\/citybuild/)(?!dev)(.+)?",
        },
        {
          label: "Development",
          to: "/citybuild-api/dev",
          activeBaseRegex: "\\/citybuild\\/dev.*",
        },
      ],
    },
    {
      to: "misc",
      label: "Misc",
      position: "left",
    },
    {
      type: "docsVersionDropdown",
      docsPluginId: "paper",
      position: "right",
    },
    {
      to: "https://api.splatgames.de",
      label: "Offizielle API",
      position: "right",
    },
    {
      href: "https://discord.splatgames.de",
      className: "header-icon-link header-discord-link",
      position: "right",
    },
    {
      href: "https://github.com/splatgames-dev",
      className: "header-icon-link header-github-link",
      position: "right",
    },
  ],
};

export default navbar;
