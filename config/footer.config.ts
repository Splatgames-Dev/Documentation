import type { Footer } from "@docusaurus/theme-common";

const footer: Footer = {
  style: "dark",
  links: [
    {
      title: "Community",
      items: [
        {
          label: "Discord",
          href: "https://discord.splatgames.de",
        },
        {
          label: "Forum",
          href: "https://splatgames.de",
        },
        {
          label: "Teamspeak",
          href: "ts3server://ts.splatgames.de",
        },
      ],
    },
    {
      title: "Dokumentation",
      items: [
        {
          label: "Javadoc",
          href: "https://javadocs.splatgames.de",
        },
        {
          label: "Official API",
          href: "https://api.splatgames.de",
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          label: "Hauptseite",
          href: "https://splatgames.de",
        },
        {
          label: "GitHub",
          href: "https://github.com/splatgames-dev",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Splatgames.de. Built with Docusaurus.<a href="https://vercel.com/?utm_source=papermc&utm_campaign=oss" style="text-decoration:underline;color:inherit;margin-top:10px;"><img src="/img/powered-by-vercel.svg" alt="vercel"/></a>`,
};

export default footer;
