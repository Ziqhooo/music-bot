module.exports = {
    clients: {
        token: 'MTI3NTQ4OTIyMDAwNTMzMTE0OA.GNclCs._eDk21QtNKvVsVh7jll-83jTSdf7wPFXxSTi9Y',
        activity: 'Esclave de Ziqhooo',
        name: 'Esclave',
        logo: 'https://cdn.discordapp.com/attachments/1275488623525105796/1275490980858040401/1d323a5a15fb247134e8d8e1ff7a4afac5_720x720.jpeg?ex=66c6150b&is=66c4c38b&hm=6865e415cdfe54032c4bfafec419be5c224e639b70a4b96f3afcf95d64d68275&',
        embedColor: '#000000'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
