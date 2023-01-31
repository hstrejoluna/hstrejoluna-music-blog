export default {
  name: "musicLink",
  type: "object",
  fields: [
    {
      name: "platform",
      type: "string",
      title: "Music Platform",
      options: {
        list: [
          { title: "Spotify", value: "spotify" },
          { title: "YouTube", value: "youtube" },
          { title: "SoundCloud", value: "soundcloud" }
        ]
      }
    },
    {
      name: "url",
      type: "url",
      title: "Music URL"
    }
  ]
};
