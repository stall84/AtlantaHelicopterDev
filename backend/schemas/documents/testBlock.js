export default {
  name: "testBlock",
  title: "Testing Rich (Block) Text",
  type: "document",
  fields: [
    {
      name: "blockTextEditor",
      title: "Block Text Editor",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [{ name: "color", title: "Color", type: "color" }],
          },
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
