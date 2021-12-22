export default {
  title: "Flight Instruction",
  name: "flight_instruction",
  type: "document",
  fields: [
    {
      title: "Instruction Type or Certificate",
      name: "instruction_type",
      type: "string",
    },
    {
      title: "Instruction Description",
      name: "instruction_description",
      type: "markdown",
    },
    {
      title: "Instruction Photo",
      name: "instruction_photo",
      type: "image",
    },
    {
      title: "Instruction Booking Link",
      name: "instruction_booking_link",
      type: "string",
    },
    {
      title: "Instruction Pricing",
      name: "instruction_pricing",
      type: "string",
    },
    {
      title: "Instruction Web Ordering",
      name: "instruction_order",
      desciption:
        "This should never change, this is used by the front-end during gatsby-build to position the instruction cards instead of randomly displaying them",
      type: "string",
    },
  ],
};
