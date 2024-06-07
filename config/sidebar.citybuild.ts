import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const splatgames: SidebarsConfig = {
  primary: [
    "README",
    {
      type: "category",
      label: "Development",
      collapsed: true,
      link: {
        type: "doc",
        id: "dev/README",
      },
      items: [
        {
          type: "category",
          label: "Getting started",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev/getting-started/README",
          },
          items: [
            "dev/getting-started/project-setup",
          ],
        },
        {
          type: "category",
          label: "API",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev/api/README",
          },
          items: [
            {
              type: "category",
              label: "Event API",
              collapsed: true,
              items: [
                "dev/api/event-api/custom-events",
              ],
            },
            "dev/api/roadmap",
          ],
        },
        {
          type: "category",
          label: "Internals",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev/internals/README",
          },
          items: [
            "dev/internals/citybuild-architecture",
          ],
        },
        {
          type: "category",
          label: "Reference",
          link: {
            type: "generated-index",
            slug: "/cat/dev/reference",
          },
          items: [
            {
              type: "category",
              label: "Configuration",
              link: {
                type: "doc",
                id: "dev/reference/configuration/README",
              },
              items: [
                "dev/reference/configuration/global-settings",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Miscellaneous",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev/misc/README",
          },
          items: [
            "dev/misc/debugging",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Contributing",
      collapsed: true,
      link: {
        type: "doc",
        id: "contributing/README",
      },
      items: [
        "contributing/events",
        "contributing/active_contributors",
      ],
    },
  ],
};

export = splatgames;
