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
  ],
};
