export default {
  name: "bg_videos",
  title: "Background Videos",
  type: "document",
  fields: [
    {
      title: "Background Video Number",
      name: "bvideo_number",
      description: "Number of video to use in determining location on website",
      type: "string",
    },
    {
      title: "Background Video",
      name: "bg_video",
      type: "image",
    },
    {
      title: "Mux Background Video",
      name: "mux_bg_video",
      type: "mux.video",
    },
  ],
};
