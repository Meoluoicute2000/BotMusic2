module.exports = {
  TOKEN: "",
  ownerID: ["827533541113069609", "701647458349875312"],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://Che12345:Kidtomboy@che1234.qphfxge.mongodb.net/?retryWrites=true&w=majority",
  status: 'Cherry',
  commandsDir: './commands',
  language: "en",
  embedColor: "0055ff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/@Kidtomboy",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 20,
    maxMusic: 100,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: false,
        cooldown: 0,
      },

    },

    maxVol: 150,

  }
}
