const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "  *SEND GN GM Wish With Image* "

 if (Config.WORKTYPE == 'public') {
  
  Asena.applyCMD({ pattern: 'gm', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'ππΆπππ π»πππππππ π₯°\nAMKENII MTESEKE OYAAA!!!!ππΏ π'  ,quoted: message.data})

    }));
  
  Asena.applyCMD({ pattern: 'gn', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'πααͺαͺα πααααΌα’ π«β¨\n\nβ°Laleni Salama Watu Mbwakniβ±π€­'  ,quoted: message.data})

    }));
 
  Asena.applyCMD({ pattern: 'gn', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'πααͺαͺα πααααΌα’ π«β¨\n\nLala Uamke kesho kutesekaππΏ π€­' })
    
    }));
 
 Asena.applyCMD({ pattern: 'gm', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'ππΆπππ π»πππππππ π₯°\n\nAMKENII MTESEKE OYAAA!!!!ππΏ π' })

    }));
   }
else if (Config.WORKTYPE == 'private') {
 
 Asena.applyCMD({ pattern: 'gn', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] ==='' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'πααͺαͺα πααααΌα’ π«β¨\n\nLala Uamke kesho kutesekaππΏ π€­' })

    

    }));

 

 Asena.applyCMD({ pattern: 'gm', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'ππΆπππ π»πππππππ π₯°\n\nAMKENII MTESEKE OYAAA!!!!ππΏ π' })

    }));
 }
