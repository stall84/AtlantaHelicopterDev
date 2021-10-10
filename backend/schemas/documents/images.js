export default {
  name: "images",
  title: "Images",
  type: "document",
  fields: [
    {
      title: "Background Image Number",
      name: "bgImage_title",
      description: "If using a carousel of images, title each bg Image",
      type: "string",
    },
    {
      title: "Background Image",
      name: "bgImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
