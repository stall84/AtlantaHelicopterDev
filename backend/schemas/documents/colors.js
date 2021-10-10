export default {
  name: "colors",
  title: "Site Color Theming",
  type: "document",
  fields: [
    {
      name: "color_title",
      title: "Color Title (Where?)",
      description:
        "This defines what color is being altered ex: 'Layout-Background' means we're setting the color for the main layout background.. meaning this will be the site-wide background color (exluding the header-nav bar which would be titled: 'Header-Background'",
      type: "string",
    },
    {
      name: "color_hex",
      title: "Color Hex Code",
      description:
        "You can find a hex-color finder at  https://htmlcolorcodes.com/  type in a color name and it will show you the hex code for that color, you can also modify that to your exact liking.",
      type: "string",
    },
  ],
};
