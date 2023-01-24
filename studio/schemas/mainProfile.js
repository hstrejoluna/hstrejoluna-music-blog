// schemas/mainProfile.js
export default {
  name: "mainProfile",
  type: "document",
  title: "mainProfile",
  fields: [
    {
      name: "profilePic",
      type: "image",
      title: "profilePic"
    },
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "intro",
      type: "blockContent",
      title: "Intro"
    }
  ]
};
