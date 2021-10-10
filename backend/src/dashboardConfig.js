export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61338a6dfece25d9c5f784f8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-practice-studio",
                  apiId: "356e0dc7-2f57-447e-b78e-096ce8a6f024",
                },
                {
                  buildHookId: "61338a6e22f9e2f9863ad447",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-practice",
                  apiId: "071ff588-1c6f-4402-9ba7-ca269afa3e53",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/stall84/sanity-gatsby-blog-PRACTICE",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-practice.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
