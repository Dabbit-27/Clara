/**
 * @file support command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.GOLD,
      title: 'Clara HQ',
      url: 'https://discord.gg/4eMsYmx',
      description: 'Need help or support with Clara Discord Bot?\nJoin Our Support Server for any help you need.\nhttps://discord.gg/4eMsYmx',
      fields: [
        {
          name: 'Website',
          value: 'To be still made'
        }
      ]
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'ss' ],
  enabled: true
};

exports.help = {
  name: 'support',
  description: 'Sends the invite link to Clara HQ.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'support',
  example: []
};
