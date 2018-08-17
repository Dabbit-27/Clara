/**
 * @file catify command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

const request = xrequire('request-promise-native');

exports.exec = async (Bastion, message, args) => {
  try {
    let string;
    if (args.length < 1) {
      string = message.author.tag;
    }
    else {
      string = args.join(' ');
    }

    let options = {
      url: `https://robohash.org/${encodeURIComponent(string)}?set=set4`,
      encoding: null
    };
    let response = await request(options);

    message.channel.send({
      files: [ { attachment: response } ]
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
  catch (e) {
    if (e.response) {
      return Bastion.emit('error', e.response.statusCode, e.response.statusMessage, message.channel);
    }
    Bastion.log.error(e);
  }
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'catify',
  description: 'Generates a random kitten image from the given string or your Discord tag if no string is specified.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'catify [Random String]',
  example: [ 'catify', 'catify isotope cattle hazily muzzle' ]
};
