export default {
  name: "song",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Song Title"
    },
    {
      name: "lyrics",
      type: "blockContent",
      title: "Lyrics"
    },
    {
      name: "chords",
      type: "blockContent",
      title: "Chords"
    },
    {
      name: "context",
      type: "text",
      title: "Song Context"
    },
    {
      name: "musicLinks",
      type: "array",
      of: [{ type: "musicLink" }],
      title: "Music Links"
    }
  ]
};
