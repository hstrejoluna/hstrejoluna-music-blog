export default {
  name: "album",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Album Title"
    },
    {
      name: "releaseDate",
      type: "date",
      title: "Release Date"
    },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image"
    },
    {
      name: "description",
      type: "text",
      title: "Album Description"
    },
    {
      name: "tracks",
      type: "array",
      of: [{ type: "reference", to: [{ type: "song" }] }],
      title: "Tracks"
    }
  ]
};
