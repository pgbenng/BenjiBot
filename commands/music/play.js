const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription("Play a song using specified URL"),
	async execute(interaction) {
		await interaction.reply('Play!');
	}
}

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('play')
//         .setDescription("Plays songs from YouTube using specified URL")
//         .addSubcommand((subcommand) => {
//             subcommand.setName('song')
//                 .setDescription('Loads a single song from URL')
//                 .addStringOption((option) => {
//                     option.setName('url').setDescription('YouTube Song URL').setRequired(true)
//                 })
//         })
//         .addSubcommand((subcommand) => {
//             subcommand.setName('playlist')
//                 .setDescription("Loads a playlist from URL")
//                 .addStringOption((option) => {
//                     option.setName('url').setDescription('The YouTube playlist\'s URL').setRequired(true)
//                 })
//         })
//         .addSubcommand((subcommand) => {
//             subcommand.setName('search').setDescription('Searches for YouTube video using provided keyword')
//                 .addStringOption((option) => {
//                     option.setName('searchterms').setDescription('Search keywords').setRequired(true)
//                 })
//         }),
//     async execute(client, interaction) {
//         if (!interaction.member.voice.channel) return interaction.editReply('You need to be in a channel to use this command!');
//
//         const queue = await client.player.create(interaction.guild);
//         if (!queue.connection) queue.connect(interaction.member.voice.channel);
//
//         let embed = new MessageEmbed();
//
//         if (interaction.options.getSubcommand() === 'song') {
//             let url = interaction.options.getString('url');
//             const result = await client.player.search(url, {
//                 requestedBy: interaction.user,
//                 searchEngine: QueryType.YOUTUBE_VIDEO
//             })
//             if (result.tracks.length === 0) return interaction.editReply("No results.")
//
//             const song = result.tracks[0];
//             await queue.addTrack(song);
//             embed
//                 .setDescription(`**[${song.title}](${song.url})** has been added to the queue`)
//                 .setThumbnail(song.thumbnail)
//             //setFooter
//
//         } else if (interaction.options.getSubcommand() === 'playlist') {
//             let url = interaction.options.getString('url');
//             const result = await client.player.search(url, {
//                 requestedBy: interaction.user,
//                 searchEngine: QueryType.YOUTUBE_PLAYLIST
//             })
//             if (result.tracks.length === 0) return interaction.editReply("No results.")
//
//             const playlist = result.playlist;
//             await queue.addTrack(result.tracks);
//             embed
//                 .setDescription(`**${result.tracks.length} songs from [${playlist.title}](${playlist.url})** has been added to the queue`)
//                 .setThumbnail(playlist.thumbnail)
//
//         } else if (interaction.options.getSubcommand() === 'search') {
//             let url = interaction.options.getString('searchterms');
//             const result = await client.player.search(url, {
//                 requestedBy: interaction.user,
//                 searchEngine: QueryType.AUTO
//             })
//             if (result.tracks.length === 0) return interaction.editReply("No results.")
//
//             const song = result.tracks[0];
//             await queue.addTrack(song);
//             embed
//                 .setDescription(`**[${song.title}](${song.url})** has been added to the queue`)
//                 .setThumbnail(song.thumbnail)
//             //setFooter
//         }
//
//         if (!queue.playing) await queue.play();
//         await interaction.editReply({
//             embeds: [embed]
//         })
//     },
// }