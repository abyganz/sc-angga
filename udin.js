/*
GW CUMA RECODE JADI BAILEYS 3.5.2
BASE ORI AQULZZ
RECODE BY ZAINUDIN ANGGARA
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const fs = require("fs");
//ketika gw gabut
const { fetchJson } = require('./src/fetcher');
const { smsg } = require('./src/simple')
const { getBuffer}  = require('./src/functions.js');
const {getRandom} = require('./src/functions.js')
const { pinterest } = require('./src/pinterest')
const request = require('request');
const imgbb = require('imgbb-uploader')
const yts = require( 'yt-search')
const { yta, ytv, igdl, upload, uploadImages } = require('./src/ytdl')
let chalk = require('chalk')
//dan jadilah recode base ini
const { exec } = require('child_process');
const xzn = require('./whatsapp/message.js');
const speed = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const conn = require('./whatsapp/connect');
const { color } = require('./lib/color');
const mess = JSON.parse(fs.readFileSync('./whatsapp/mess.json'));
const axios = require('axios');
const Exif = require('./lib/exif');
const { uptotele, uptonaufal, uploadFile } = require('./lib/uploadimage')
const exif = new Exif();

conn.connect()
const udin = conn.udin

fake = "⏤͟͟͞͞ᵡмXᴢɴ々SᴇɴPᴀɪ༗"
fakeimage = fs.readFileSync("./media/foto.jpg")
prefix = 'z'
blocked = []
baterai = {
    baterai: 0,
    cas: false
}
public = false
autoread = true
autovn = false
autotype = false
autoonline = false
/******** OWNER NUMBER**********/ 
const ownerNumber = ["6282256080304@s.whatsapp.net"] 
/*********** LOAD FILE ***********/
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const datdat = JSON.parse(fs.readFileSync('./cahce/msg.data.json'))
let _scommand = JSON.parse(fs.readFileSync('./scommand.json'));

udin.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
})
udin.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})
const addCmd = (id, command) => {
	const obj = {
		id: id,
		chats: command
	}
	_scommand.push(obj)
	fs.writeFileSync('./scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
	let position = null;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return position
	}
}

const getCmd = (id) => {
	let position = null
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return _scommand[position].chats
	}
}

const checkSCommand = (id) => {
	let status = false
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			status = true
		}
	})
	return status
}
udin.on('chat-update', async(din) => {
try {
if (!din.hasNewMessage) return
din = din.messages.all()[0]
if (!din.message || din.key && din.key.remoteJid == 'status@broadcast') return
din.message = (Object.keys(din.message)[0] === 'ephemeralMessage') ? din.message.ephemeralMessage.message : din.message
let infoMSG = JSON.parse(fs.readFileSync(`./cahce/msg.data.json`))
infoMSG.push(JSON.parse(JSON.stringify(din)))
fs.writeFileSync(`./cahce/msg.data.json`, JSON.stringify(infoMSG, null, 2))
const urutan_pesan = infoMSG.length
if (urutan_pesan === 5000) {
infoMSG.splice(0, 4300)
fs.writeFileSync(`./cahce/msg.data.json`, JSON.stringify(infoMSG, null, 2))
}
global.prefix
m = smsg(udin, din)
const content = JSON.stringify(din.message)
const from = din.key.remoteJid
const type = Object.keys(din.message)[0]
const botNumber = udin.user.jid
const isGroup = from.endsWith('@g.us')
const sender = din.key.fromMe ? udin.user.jid : isGroup ? din.participant : din.key.remoteJid
pushname = udin.contacts[sender] != undefined ? udin.contacts[sender].vname || udin.contacts[sender].notify : undefined
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
//waktu
let senderr = din.key.fromMe ? udin.user.jid : din.key.remoteJid.endsWith('@g.us') ? din.participant : din.key.remoteJid
const jam = moment.tz('Asia/Jakarta').format('HH:mm.ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
//ini kek tae
budy = (type === 'conversation') ? din.message.conversation : (type === 'extendedTextMessage') ? din.message.extendedTextMessage.text : ''
body = din.message.conversation || din.message[type].caption || din.message[type].text || (type == 'listResponseMessage' ? din.message[type].singleSelectReply.selectedRowId : '') || (type == 'buttonsResponseMessage' ? din.message[type].selectedButtonId : '') || (type == 'stickerMessage' && getCmd(din.message[type].fileSha256.toString('base64')) !== null && getCmd(din.message[type].fileSha256.toString('base64')) !== undefined ? getCmd(din.message[type].fileSha256.toString('base64')) : '') || ''
chats = (type === 'conversation') ? din.message.conversation : (type === 'extendedTextMessage') ? din.message.extendedTextMessage.text : ''
//INI
var pes = (type === 'conversation' && din.message.conversation) ? din.message.conversation : (type == 'imageMessage') && din.message.imageMessage.caption ? din.message.imageMessage.caption : (type == 'videoMessage') && din.message.videoMessage.caption ? din.message.videoMessage.caption : (type == 'extendedTextMessage') && din.message.extendedTextMessage.text ? din.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
//dah
const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
const buttonCmd = type == 'listResponseMessage' ? din.message.listResponseMessage.singleSelectReply.selectedRowId : '' || ''
const butcmd = (type === 'buttonsResponseMessage') ? din.message.buttonsResponseMessage.selectedButtonId : '' 
//dah
const args = body.trim().split(/ +/).slice(1)
const isCmdd = body.startsWith(prefix)
const isCmd = isCmdd || buttonCmd || butcmd
const q = args.join(" ")
const arg = chats.slice(command.length + 2, chats.length)
//CONTOH CONTOH 
const totalchat = await udin.chats.all()
const groupMetadata = isGroup ? await udin.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupAdmins = isGroup ? xzn.getGroupAdmins(groupMembers) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
//SETELAN BOT
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false 
const isAntiLink = isGroup ? antilink.includes(from) : false
//BEDA
const isOwner = ownerNumber.includes(sender)
const itsMe = din.key.fromMe ? true : false
const isMybot = isOwner || itsMe
const ZAINUDIN = command || butcmd || buttonCmd
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
/*****UCAPAN*****/
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')        
if(time2 < "23:59:00"){var ucapanWaktu = 'Malam 🌃'}
if(time2 < "19:00:00"){var ucapanWaktu = 'Malam 🌃'}
if(time2 < "18:30:00"){var ucapanWaktu = 'Senja 🌅'}
if(time2 < "18:00:00"){var ucapanWaktu = 'Petang 🌇'}
if(time2 < "12:00:00"){var ucapanWaktu = 'Siang 🌇'}
if(time2 < "09:00:00"){var ucapanWaktu = 'Pagi 🌄'}          
//QUOTED BOT
const dinn = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', itemCount: '7777777', status: 'INQUIRY', surface:  'CATALOG', message: '{Xᴢɴ々Bᴏᴛ}', orderTitle: 'Its Me Angga', sellerJid: '6282256080304@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}        
const dinnn = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', thumbnail: fakeimage, itemCount: '2021', status: 'INQUIRY', surface:  'CATALOG', message: `${ucapanWaktu} ${pushname}`, orderTitle: 'Its Me Angga', sellerJid: '6282256080304@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}        
const flokasi = {key : {participant : '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: 'Xᴢɴ々Bᴏᴛ', name: 'Di Rumah Mertua'}}}                      
const fdocs = {key : {participant : '0@s.whatsapp.net'}, message: {documentMessage: {title: 'Its Me Zainudin Anggara'}}}
const fvideo = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: { "videoMessage": {"title":"Bokep nganu", "h": `Hmm`, 'seconds': '99999', 'caption': 'Bokep Nganu'}}}             
const fgclink = {"key": {"fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"}, "message": {"groupInviteMessage": {"mimetype": "image/jpeg", "jpegThumbnail": fakeimage, "groupJid": "6282256080304-1622727181@g.us", "inviteCode": "mememteeeekkeke", "groupName": "Its Me Zainudin Anggara", "caption": "XZNSENPAI"}}}
const fgif = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: {"videoMessage": {"title":"Its Me Zainudin Anggara", "h": `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Its Me Zainudin Anggara'}}}                       
const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: {"extendedTextMessage": {"mimetype": "image/jpeg", "jpegThumbnail": fakeimage, "text":"Xᴢɴ々SᴇɴPɑɪ", "title": `Hmm`}}}                     
const fvn = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: {"audioMessage": {"mimetype":"audio/ogg; codecs=opus", "seconds": "${second}", "ptt": "true"}}}
const sft = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"productMessage": {"product": {"productImage":{ }, "title": "Creat Its Me Zainudin", "description": "1 Bulan : Rp 10.000,00", "currencyCode": "USD", "priceAmount1000": "10000000000000000000", "retailerId": "Self Bot", "productImageCount": 99999}, "businessOwnerJid": `0@s.whatsapp.net`}}}       
const once = {key : {participant : '0@s.whatsapp.net'}, "message": {"viewOnceMessage": {"message": {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/Ar5T7V7eN5j_nSw-xgy_EVdIOsuqgg_Duto86e4fJ-Qw.enc", "mimetype": "image/jpeg", "fileSha256": "iunlEh4hXYeza7nrfdXDhHhdbm+MtierOu/CFRsjIGU=", "fileLength": "126766", "height": 720, "width": 1520, "mediaKey": "HV8K4Wvi+CrBlbcDvKppBHRC1nt6CDRy7fSiCOTeubI=", "fileEncSha256": "WHzCrgzOdpLi85bhhIikQR+ZZmXz82Si+D5X+LSZt/w=", "directPath": "/v/t62.7118-24/21226550_1161558544334956_2350569904574046255_n.enc?ccb=11-4&oh=37804c40c439a259151c529674f87b6f&oe=61643631", "mediaKeyTimestamp": "1631439562", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACIASAMBIgACEQEDEQH/xAAtAAADAQEAAAAAAAAAAAAAAAAAAQMCBAEBAQEBAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAAA4XSnKgugrndtKWNc5MRDu5hzeKEltEa0qdELkNDytQ5oYbZqC3ABzmAs/8QAIBAAAgICAgIDAAAAAAAAAAAAAAECESFBAxMQMRIiUf/aAAgBAQABPwCpSFCR1s6mdWTqoVJHLCMo5ElEjHfjLKMRd0YGTbRmrM0SklQ+RRyiLU42imhKmMnEf1sTjR7HG46PhVUxSXj2NHLHBA2fpoejj2bFs5PTP//EABwRAAIDAAMBAAAAAAAAAAAAAAABAhEhEEFRA//aAAgBAgEBPwC36b6S+ckk3dF1zg233gyLwQxcR7P/xAAYEQADAQEAAAAAAAAAAAAAAAABEBExAP/aAAgBAwEBPwCOPXGNKPf/2Q==", "scansSidecar": "yxwTOibSDB4HaqsKZaXPmYqNRrwT7jTEi7E4nq7f4TRY3tfEMbiwnA==", "scanLengths": [11892, 53069, 23444, 38361], "midQualityFileSha256": "yXjSDT06QCxfTzL4Wi7F0rxdQ3dTTjb8+CcBQV0fces=", "viewOnce": true}}}}}         
//BUTTON
const sendButon = async (from, context, fotext, but, din) => {
buttonMessages = { contentText: context, footerText: fotext, buttons: but, headerType: 1 }
udin.sendMessage(from, buttonMessages, buttonsMessage, { quoted: din })}
const sendButImage = async (from, context, fotext, img, but) => {
jadinya = await udin.prepareMessage(from, img, image, {thumbnail: fakeimage})
buttonMessagesI = {imageMessage: jadinya.message.imageMessage, contentText: context, footerText: fotext, buttons: but, headerType: 4 }
udin.sendMessage(from, buttonMessagesI, buttonsMessage, {quoted: din })}
const sendButVideoh = async (from, context, fotext, vid, but) => {
jadinya = await udin.prepareMessage(from, vid, video)
buttonMessagesV = { videoMessage: jadinya.message.videoMessage, contentText: context, footerText: fotext, buttons: but, headerType: 5 }
udin.sendMessage(from, buttonMessagesV, buttonsMessage, {
quoted: din, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `${ucapanWaktu} ${pushname}`, mediaType: 2, thumbnail: fakeimage, "previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}
})}
const sendButVideo = async (from, context, fotext, vid, but) => {
jadinya = await udin.prepareMessage(from, vid, video)
buttonMessagesV = {videoMessage: jadinya.message.videoMessage, contentText: context, footerText: fotext, buttons: but, headerType: 5}
udin.sendMessage(from, buttonMessagesV, buttonsMessage, {quoted: din })}
const sendButLoc = async (from, context, fotext, tum, but) => {
buttonMessagesL = {contentText: context, footerText: fotext, buttons: but, headerType: 6, locationMessage: {addres: "jepang", jpegThumbnail: tum}}
return udin.sendMessage(from, buttonMessagesL, buttonsMessage, {quoted: din})}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
udin.sendMessage(to, media, MessageType.sticker,{quoted:din})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} 
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
udin.sendMessage(to, media, type, { quoted: din, thumbnail: fakeimage, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
const sendGroupV4Invite = async(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', options = {}) => {
let msg = WAMessageProto.Message.fromObject({
groupInviteMessage: WAMessageProto.GroupInviteMessage.fromObject({
inviteCode,
inviteExpiration: parseInt(inviteExpiration) || +new Date(new Date + (3 * 86400000)),
groupJid: jid,
groupName: groupName ? groupName : udin.getName(jid),
caption
})
})
let message = await udin.prepareMessageFromContent(participant, msg, options)
await udin.relayWAMessage(message)
return message
}

const replyy = (teks) => {
udin.sendMessage(from, teks, text, { quoted: din, contextInfo: { externalAdReply: { title: `${wita} - ${week} ${weton}\n${date}`, body: fake, sourceUrl: `https://wa.me/6282256080304?text=Assalamualaikum`, thumbnail: fakeimage}}})
            }
const fyt = (teks) => {
udin.sendMessage(from, teks, MessageType.text, {quoted:din, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, thumbnail: fakeimage, "previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
            }
const fyt2 = (teks) => {
udin.sendMessage(from, teks, MessageType.text, {quoted:din, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `${ucapanWaktu} ${pushname}`, mediaType: 2, thumbnail: fakeimage, "previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
           }
const fakethumb = (teks, yes) => {
udin.sendMessage(from, teks, image, {thumbnail: fakeimage, quoted:din, caption:yes})
            }
const reply = (teks) => {
udin.sendMessage(from, teks, text, {quoted:din})
			}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? udin.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : udin.sendMessage(from, teks.trim(), extendedText, {quoted: din, contextInfo: {"mentionedJid": memberr}})
			} 
const sendMess = (hehe, teks) => {
udin.sendMessage(hehe, teks, text)
			}
if (messagesC.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
udin.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
udin.sendMessage(from, `Link Group Terdeteksi maaf @${sender.split('@')[0]} Anda akan di kick dari group`, MessageType.text, {quoted: din, contextInfo: { mentionedJid: [sender] }})
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
udin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})}

if (isGroup && m.mtype == 'viewOnceMessage'){
var msg = {...din}
msg.message = din.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
reply('ViewOnce detected!')
udin.copyNForward(from, msg)
}
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
if (chats.toLowerCase() === 'prefix'){
reply(`prefix bot ini adalah = ${prefix}`)
}
if (isMybot){
if (chats.startsWith('>')){
console.log(color('[EVAL]'), color(moment(din.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
try{
return udin.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),MessageType.text, {quoted: din, sendEphemeral: true, thumbnail: fakeimage})
}catch(err){
e = String(err)
reply(e)}}
if (chats.startsWith('=>')){
console.log(color('[EVAL]'), color(moment(din.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(3)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)}}
if (chats.startsWith('$')){
if (!arg) return
exec(arg, (err, stdout) => {
if (err) return xzn.reply(from, err, din)
if (stdout) xzn.reply(from, stdout, din)})}

if (chats.toLowerCase() === `${prefix}self`){
public = false
xzn.sendFakeStatus(from, `Sukses`, `Status: SELF`)
}
if (chats.toLowerCase() === `${prefix}public`){
public = true
xzn.sendFakeStatus(from, `Sukses`, `Status: PUBLIC`)
}
if (chats.toLowerCase() === 'status'){
xzn.sendFakeStatus(from, `STATUS: ${public ? 'PUBLIC' : 'SELF'}`)
}
}
if (!isCmd && din.message && autovn) {for (let i of totalchat) {await udin.updatePresence(i.jid, Presence.recording)}}
if (!isCmd && din.message && autotype) {for (let i of totalchat) {await udin.updatePresence(i.jid, Presence.composing)}}
if (!isCmd && din.message && autoonline) {for (let i of totalchat) {await udin.updatePresence(i.jid, Presence.available)}}  //unavailable, available, composing, recording, paused
if (!isCmd && autoread) {for (let i of totalchat) {await udin.chatRead(from, "read")}}
if (!public){
if (!din.key.fromMe) return
}
if (isCmd && !isGroup) {console.log(chalk.black(isCmd ? chalk.bgBlue('[ CMD ]') : chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(time)), chalk.black(chalk.bgRed(body || din.mtype)) + '\n' + chalk.magenta('> Dari'), chalk.green(pushname), chalk.yellow(sender) + '\n' + chalk.blueBright('> Di'), chalk.green(isGroup ? groupName : 'Private Chat', from))}
if (isCmd && isGroup) {console.log(chalk.black(isCmd ? chalk.bgBlue('[ CMD ]') : chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(time)), chalk.black(chalk.bgRed(body || din.mtype)) + '\n' + chalk.magenta('> Dari'), chalk.green(pushname), chalk.yellow(sender) + '\n' + chalk.blueBright('> Di'), chalk.green(isGroup ? groupName : 'Private Chat', from))}
        
switch (ZAINUDIN) {
case 'loli':
loli = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
but = [
{ buttonId: 'loli', buttonText: { displayText: 'NEXT ⿻' }, type: 1 }
]
sendButImage(from, `LOLI NYA KAK`, `${fake}`, loli, but)
break
case 'darkjokes':
data = fs.readFileSync('./src/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await xzn.getBuffer(randKey.result)
but = [
{ buttonId: 'darkjokes', buttonText: { displayText: 'NEXT ⿻'}, type: 1 }
]
sendButImage(from, `AWOKWOK DARK COK`, `${fake}`, hasil, but)
break
case 'anime':
loli = fs.readFileSync('./src/loli.js');
lolidata = JSON.parse(loli);
lolirand = Math.floor(Math.random() * lolidata.length);
lolikun = lolidata[lolirand];
hasil = await getBuffer(lolikun)
but = [
{ buttonId: 'animew', buttonText: { displayText: '𝑵𝑬𝑿𝑻 ☹︎' }, type: 1 }
]
sendButImage(from, `RANDOM ANIMEX`, `${fake}`, hasil, but)
break
case 'random':
but = [
{ buttonId: 'loli', buttonText: { displayText: ' Loli ⿻' }, type: 1 },
{ buttonId: 'anime', buttonText: { displayText: 'Anime ⿻' }, type: 1 },
{ buttonId: 'darjokes', buttonText: { displayText: 'Darkjokes ⿻' }, type: 1 }
]
img = fakeimage
sendButLoc(from, `PILIH TERSERAHLU KLU BISA JANGAN SPAM`, `${fake}`, img, but)
break
case 'pinterest':
case 'p':
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
})
break
case 'panda':
xm = await fetchJson(`https://some-random-api.ml/animal/red_panda`)
hasil = await getBuffer(xm.image)
capnya = (xm.fact)
udin.sendMessage(from, hasil, image, {quoted: din, thumbnail: Buffer.alloc(0), caption: `${capnya}`})
break
case 'smeme': case 'stickmeme': case 'sm':
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !din.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
owgi = await  udin.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto!')
} 
break
//pop cat
case 'car':
xm = await fetchJson(`https://api.popcat.xyz/car`)
intel = await getBuffer(xm.image)
anunya = xm.title
udin.sendMessage(from, intel, image, {quoted: din, thumbnail: intel, caption: `${anunya}`})
break
case 'ssweb':
xm = await getBuffer(`https://api.popcat.xyz/screenshot?url=${q}`)
udin.sendMessage(from, xm, image, {quoted: din, thumbnail: xm})
break
case 'pooh':
if (args.length == 0) return reply('text nya mana anjg')
argz = arg.split("|")
xm = await getBuffer(`https://api.popcat.xyz/pooh?text1=${argz[0]}&text2=${argz[1]}`)
udin.sendMessage(from, xm, image, {quoted: din, caption: `${q}`, thumbnail: fakeimage})
break
case 'drake':
if (args.length == 0) return reply('text nya mana anjg')
argz = arg.split("|")
xm = await getBuffer(`https://api.popcat.xyz/drake?text1=${argz[0]}&text2=${argz[1]}`)
udin.sendMessage(from, xm, image, {quoted: din, caption: `${q}`, thumbnail: fakeimage})
break
case 'biden':
if (args.length == 0) return reply('text nya mana anjg')
xm = await getBuffer(`https://api.popcat.xyz/biden?text=${q}`)
udin.sendMessage(from, xm, image, {quoted: din, caption: `${q}`, thumbnail: fakeimage})
break
case 'fatcs':
if (args.length == 0) return reply('text nya mana anjg')
xm = await getBuffer(`https://api.popcat.xyz/facts?text=${q}`)
udin.sendMessage(from, xm, image, {quoted: din, caption: `${q}`, thumbnail: fakeimage})
break
case 'drip':
var imgbb = require('imgbb-uploader')
if ((isMedia && !din.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
owgi = await  udin.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `https://api.popcat.xyz/drip?image=${tekks}`
sendMediaURL(from, `${anu1}`, mess.success)
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply('Gunakan foto!')
}
break
case 'wanted2':
var imgbb = require('imgbb-uploader')
if ((isMedia && !din.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
owgi = await  udin.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `https://api.popcat.xyz/wanted?image=${tekks}`
sendMediaURL(from, `${anu1}`, mess.success)
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply('Gunakan foto!')
}
break
case 'gun':
var imgbb = require('imgbb-uploader')
if ((isMedia && !din.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
owgi = await  udin.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `https://api.popcat.xyz/gun?image=${tekks}`
sendMediaURL(from, `${anu1}`, mess.success)
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply('Gunakan foto!')
}
break
case 'communism':
var imgbb = require('imgbb-uploader')
if ((isMedia && !din.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
owgi = await  udin.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `https://api.popcat.xyz/communism?image=${tekks}`
sendMediaURL(from, `${anu1}`, mess.success)
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply('Gunakan foto!')
}
break
case 'invert':
var imgbb = require('imgbb-uploader')
if ((isMedia && !din.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
owgi = await  udin.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `https://api.popcat.xyz/invert?image=${tekks}`
sendMediaURL(from, `${anu1}`, mess.success)
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply('Gunakan foto!')
}
break
case 'vdl':
reply(mess.wait)
sendMediaURL(from, `${q}`)
break
case 'vdl2':
reply(mess.wait)
xm = await getBuffer(`${q}`)
udin.sendMessage(from, xm, video, {quoted: din, thumbnail: xm})
break
case 'esce':
reply(`https://github.com/xznsenpai/SelfBotXzn`)
break
case 'allmenu':
rn = process.uptime()
textnya = `	⏤͟͟͞͞ᵡмXᴢɴ々SᴇɴPᴀɪ༗

⦿ Jam WIT : ${wit}
⦿ Jam WITA : ${wita}
⦿ Jam WIB : ${jam}
⦿ Hari : ${week} ${weton}
⦿ Kalender : ${date}
⦿Runtime : ${xzn.runtime(rn)}

FFMPEG
⿻${prefix}sticker
⿻${prefix}swm nama | author
⿻${prefix}takestick namma | author
⿻${prefix}colong <reply stiker>

ONLY ADMIN GROUP
⿻${prefix}promote
⿻${prefix}demote
⿻${prefix}kick
⿻${prefix}add

BUAT LU PADA
⿻${prefix}getgrup
⿻${prefix}imgtourl
⿻${prefix}ephemeral <teks>
⿻${prefix}tourl <media>
⿻${prefix}runtime
⿻${prefix}speed
⿻${prefix}mystat
⿻${prefix}kontak
⿻${prefix}fdeface
⿻${prefix}fakethumbnail
⿻${prefix}getpic

IMAGE RANDOM
⿻${prefix}darkjokes
⿻${prefix}loli
⿻${prefix}pinterest

IMAGE MAKER
⿻${prefix}gun <Reply Foto>
⿻${prefix}drip <Reply Foto>
⿻${prefix}wanted2 <Reply Foto>
⿻${prefix}invert <Reply Foto>
⿻${prefix}communismm <Reply Foto>
⿻${prefix}pooh <text1|text2>
⿻${prefix}drake <text1|text2>
⿻${prefix}biden <text>
⿻${prefix}fatcs <text>

DOWNLOAD MENU
⿻${prefix}play
⿻${prefix}video

ONLY OWNER
⿻${prefix}self
⿻${prefix}public
⿻${prefix}hidetag
⿻${prefix}setreply
⿻${prefix}setprefix
⿻${prefix}setname
⿻${prefix}setpp
⿻${prefix}setbio
⿻${prefix}setthumb
⿻${prefix}stickertag
⿻${prefix}imgtag
⿻${prefix}kontaktag
⿻${prefix}doctag
⿻${prefix}giftag
⿻${prefix}creategrup nama|tag
⿻${prefix}upstatus text
⿻${prefix}spam teks|jumlah spam
⿻${prefix}autovn <on|off>
⿻${prefix}autotype <on|off>
⿻=>
⿻>
⿻$
`
//xzn.FakeStatusImgForwarded(from, fakeimage, textnya, fake)
/*njir = await udin.prepareMessageFromContent(from, {
"orderMessage": {"orderId": "3384815854976320", "sellerJid": "6285751414996@s.whatsapp.net", "thumbnail": fakeimage, "itemCount": 9999, "status": "INQUIRY", "surface": "CATALOG", "message": `${textnya}`, "orderTitle": fake, "token": "AR6NMTEjLJ3YXvlXjU0/Nc3B4FcEctdge3nTOJ84Zprf4A==" }, "contextInfo": { "forwardingScore": 99, "isForwarded": true }}, {quoted: din, contextInfo:{}}) 
udin.relayWAMessage(njir)*/
but = [{ buttonId: 'loli', buttonText: { displayText: 'Loli ⿻' }, type: 1 }, { buttonId: 'esce', buttonText: { displayText: 'Sc Bot ⿻' }, type: 1 }]
img = fakeimage
sendButLoc(from, `${textnya}`, `${fake}`, img, but)
break
case 'menu': case 'help':
Testbang = udin.prepareMessageFromContent(from, {
"listMessage":{
 "title": `${ucapanWaktu} @${sender.split('@')[0]}`,
"description": `╭──(>>>>>>PERHATIAN<<<<<<)
│JANGAN SPAM BOT INI !!..
│TETAP DI RUMAH AJA DAN LAKUKAN 3M
│1.makan
│2.minum
│3.MELIHAT MEMEG
╰───────────────────`,
"buttonText": "Click Here ⿻",
 "listType": "SINGLE_SELECT",
 "sections": [{"title": `${week} ${date}`, "rows": 
[ 
{ "title": `ALL MENU ⿻`, "rowId": "allmenu" }, 
{ "title": `LOLI ⿻`, "rowId": "loli" },
{ "title": `RANDOM ⿻`, "rowId": "anime" },
{ "title": `DARKJOKES ⿻`, "rowId": "darkjokes" },
]
  }]}}, { quoted: din, contextInfo: { mentionedJid: [sender] }}) 
 udin.relayWAMessage(Testbang, {waitForAck: true})
break
case 'addcmd':
case 'setcmd':
if (!isMybot) return reply(mess.OnlyOwner)
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${prefix+command} cmdnya dan tag stickernya`)
kodenya = din.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q);
reply('Sukses')
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isMybot) return reply(mess.OnlyOwner)
if (!isQuotedSticker) return reply(`Penggunaan : ${prefix+command} tagsticker`)
kodenya = din.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./scommand.json', JSON.stringify(_scommand))
reply('Sukses')
break
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = udin.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
            case 'test':
                xzn.sendText(from, 'oke')
				break
			case 'exif':
				if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (args.length < 1) return xzn.reply(from, `Penggunaan ${prefix}exif nama|author`, din)
				if (!arg.split('|')) return xzn.reply(from, `Penggunaan ${prefix}exif nama|author`, din)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				xzn.reply(from, 'sukses', din)
				break
			case 'sticker':
			case 'stiker':
			case 's':
				if (isMedia && !din.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								xzn.reply(from, mess.error.api, din)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xzn.reply(from, mess.error.api, din)
									xzn.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), din)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && din.message.videoMessage.fileLength < 10000000 || isQuotedVideo && din.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					xzn.reply(from, mess.wait, din)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								xzn.reply(from, mess.error.api, din)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xzn.reply(from, mess.error.api, din)
									xzn.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), din)
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					xzn.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, din)
				}
				break
			case 'swm':
			case 'stickerwm':
				if (isMedia && !din.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return xzn.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, din)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								xzn.reply(from, mess.error.api, din)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xzn.reply(from, mess.error.api, din)
									xzn.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), din)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && din.message.videoMessage.fileLength < 10000000 || isQuotedVideo && din.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return xzn.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, din)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					xzn.reply(from, mess.wait, din)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								xzn.reply(from, mess.error.api, din)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xzn.reply(from, mess.error.api, din)
									xzn.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), din)									
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					xzn.reply(from, `Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, id)
				}
				break
			case 'takestick':
			case 'take':
				if (!isQuotedSticker) return xzn.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, din)
				const pembawm = q
				if (!pembawm.includes('|')) return xzn.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, din)
				const encmedia = JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = pembawm.split('|')[0]
				const author = pembawm.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return xzn.reply(from, mess.error.api, din)
					xzn.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), din)
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	  		 case 'ephemeral'://DhyZx:v
				if (!q) return xzn.reply(from, 'textnya apa brohh', din)
				udin.sendMessage(from, `${q}`,
					MessageType.text, {
					sendEphemeral: true,
					thumbnail: fs.readFileSync('./media/xzn.jpeg')
					})
				break
			case 'colong':
				if (!isQuotedSticker) return xzn.reply(from, `Reply sticker dengan caption *${prefix}colong*`, din)
				const encmediia = JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const meidia = await udin.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return xzn.reply(from, mess.error.api, din)
					xzn.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), din)
					fs.unlinkSync(meidia)
				})
				break
			case 'hidetag':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!arg) return xzn.reply(from, `Penggunaan ${prefix}hidetag teks`, din)
				xzn.hideTag(from, arg)
				break
			case 'runtime':
				run = process.uptime()
				let text = xzn.runtime(run)
				xzn.sendFakeStatus(from, text, `Runtime bro`)
				break
			case 'speed': case 'ping':
				let timestamp = speed();
				let latensi = speed() - timestamp
				xzn.sendFakeStatus(from, `Speed: ${latensi.toFixed(4)}second`, fake)
				break
			case 'mystat': case 'mystatus':
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = udin.user.phone
                anu = process.uptime()
                teskny = `*V. Whatsapp :* ${wa_version}
*Baterai :* ${baterai.baterai}%
*Charge :* ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}

*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${xzn.runtime(anu)}`
				xzn.sendFakeStatus(from, teskny, fake)
				break
			case 'kontak':
				argz = arg.split('|')
				if (!argz) return xzn.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, din)
				if (din.message.extendedTextMessage != undefined){
                    mentioned = din.message.extendedTextMessage.contextInfo.mentionedJid
					xzn.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					xzn.sendKontak(from, argz[0], argz[1])
				}
				break
			case 'setreply':
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!arg) return xzn.reply(from, `Penggunaan ${prefix}setreply teks`, din)
				fake = arg
				xzn.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'setprefix': case 'sp':
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!arg) return xzn.reply(from, `Penggunaan ${prefix}setprefix prefix`, din)
				prefix = arg
				xzn.sendFakeStatus(from, `Prefix berhasil diubah menjadi ${prefix}`, fake)
				break
			case 'setname':
				if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!arg) return xzn.reply(from, 'masukkan nama', din)
				xzn.setName(arg)
				.then((res) => xzn.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => xzn.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'setbio':
				if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!arg) return xzn.reply(from, 'masukkan bio', din)
				xzn.setBio(arg)
				.then((res) => xzn.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => xzn.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'fdeface': case 'hack':
				if (!arg) return xzn.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By xzn|https://xzn.com`, din)
				argz = arg.split("|")
				if (!argz) return xzn.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By xzn|https://xzn.com`, din)
				if ((isMedia && !din.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
					let media = await udin.downloadMediaMessage(encmedia)
					xzn.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					xzn.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
			case 'fakethumbnail': case 'fthumbnail': case 'fakethumb':
				if ((isMedia && !din.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
					let media = await udin.downloadMediaMessage(encmedia)
					xzn.sendFakeImg(from, media, arg, fakeimage, din)
				} else {
					xzn.reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, din)
				}
				break
			case 'setthumb':
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				boij = JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await udin.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/xzn.jpeg`, delb)
				fakeimage = fs.readFileSync(`./media/xzn.jpeg`)
				xzn.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'getpic':
				if (din.message.extendedTextMessage != undefined){
					mentioned = din.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await udin.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await xzn.getBuffer(pic)
					udin.sendMessage(from, thumb, image, {quoted: din, thumbnail: fakeimage})
				}
				break
			case 'imgtag':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if ((isMedia && !din.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
					let media = await udin.downloadMediaMessage(encmedia)
					xzn.hideTagImg(from, media)
				} else {
					xzn.reply(from, `Kirim gambar atau reply dengan caption ${prefix}imgtag caption`, din)
				}
				break
			case 'sticktag': case 'stickertag':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!isQuotedSticker) return xzn.reply(from, `Reply sticker dengan caption *${prefix}stickertag*`, din)
				let encmediai = JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let mediai = await udin.downloadMediaMessage(encmediai)
				xzn.hideTagSticker(from, mediai)
				break
			case 'kontaktag':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				argz = arg.split('|')
				if (!argz) return xzn.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, din)
				if (din.message.extendedTextMessage != undefined){
                    mentioned = din.message.extendedTextMessage.contextInfo.mentionedJid
					xzn.hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					xzn.hideTagKontak(from, argz[0], argz[1])
				}
				break
			case 'doctag':  case 'dokumentag':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
		        if (!isQuotedDocument) return xzn.reply(from, `Reply Document dengan caption *${prefix + command}*`, din)
                quoted = JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await udin.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await udin.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                udin.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: din, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
		    case 'giftag':   case 'giphytag': 
		if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
		if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
                if (!isQuotedVideo) return reply(`Reply Gif nya dengan caption ${prefix + command}`)
                quoted = JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await udin.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await udin.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                udin.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: din, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			case 'toimg':
				if (!isQuotedSticker) return xzn.reply(from, 'Reply stiker nya', din)
				if (din.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await xzn.sendMediaURL(from, anjj.data.result, 'Nih')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					ran = xzn.getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							xzn.reply(from, `gagal`, din)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							xzn.sendFakeImg(from, buffer, 'NI OM', fakeimage, din)
							fs.unlinkSync(ran)
						}
					})
				}
				break
			case 'shutdown':
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				await xzn.FakeTokoForwarded(from, `Bye...`, fake)
				await xzn.sleep(5000)
				udin.close()
				break
			case 'spam':
				if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!arg) return xzn.reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, din)
				argz = arg.split("|")
				if (!argz) return xzn.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, din)
				if (isNaN(argz[1])) return xzn.reply(from, `harus berupa angka`, din)
				for (let i = 0; i < argz[1]; i++){
					xzn.sendText(from, argz[0])
				}
				break
			case 'promote':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isGroupAdmins) return xzn.reply(from, mess.GrupAdmin, din)
			if (!isBotGroupAdmins) return xzn.reply(from, mess.BotAdmin, din)
				if (!arg) return xzn.reply(from, `Penggunaan ${prefix}promote @tag atau nomor`, din)
				if (din.message.extendedTextMessage != undefined){
                    mentioned = din.message.extendedTextMessage.contextInfo.mentionedJid
					await xzn.FakeTokoForwarded(from, `sukses`, fake)
					xzn.promote(from, mentioned)
				} else {
					await xzn.FakeTokoForwarded(from, `sukses`, fake)
					xzn.promote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'demote':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isGroupAdmins) return xzn.reply(from, mess.GrupAdmin, din)
			if (!isBotGroupAdmins) return xzn.reply(from, mess.BotAdmin, din)
				if (!arg) return xzn.reply(from, `Penggunaan ${prefix}demote @tag atau nomor`, din)
				if (din.message.extendedTextMessage != undefined){
                    mentioned = din.message.extendedTextMessage.contextInfo.mentionedJid
					await xzn.FakeTokoForwarded(from, `sukses`, fake)
					xzn.demote(from, mentioned)
				} else {
					await xzn.FakeTokoForwarded(from, `sukses`, fake)
					xzn.demote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'kick':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isGroupAdmins) return xzn.reply(from, mess.GrupAdmin, din)
			if (!isBotGroupAdmins) return xzn.reply(from, mess.BotAdmin, din)
				if (din.message.extendedTextMessage === null || din.message.extendedTextMessage === undefined) {
    orang = args[0].replace(/\D/g, '') + '@s.whatsapp.net'
    mentions(`Sure, kick @${orang.split('@')[0]}`, orang, true)
      udin.groupRemove(from, [orang])
                        } else {
orang = din.message.extendedTextMessage.contextInfo.participant || din.message.extendedTextMessage.contextInfo.mentionedJid[0]
mentions(`Sure, kick @${orang.split('@')[0]}`, orang, true)
udin.groupRemove(from, [orang])
                        } 
				break
			case 'add':
			if (!isGroup) return xzn.reply(from, mess.OnlyGrup, din)
			if (!isGroupAdmins) return xzn.reply(from, mess.GrupAdmin, din)
			if (!isBotGroupAdmins) return xzn.reply(from, mess.BotAdmin, din)
				if (!arg) return xzn.reply(from, `Penggunaan ${prefix}kick 628xxxx`, din)
				orang = args[0] + '@s.whatsapp.net'
response = await udin.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
udin.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: din, contextInfo: {mentionedJid: [orang]}})
sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
				break
			case 'upstatus':
				if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (!arg) return xzn.reply(from, `Penggunaan \n${prefix}upstatus text\n${prefix}upstatus caption <reply atau kirim video / img>`, din)
				if (isMedia && !din.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					xzn.upImgStatus(media, arg).then(() => { xzn.FakeTokoForwarded(from, 'Sukses', fake) })
				} else if ((isMedia || isQuotedVideo )) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					xzn.upVidStatus(media, arg).then(() => { xzn.FakeTokoForwarded(from, 'Sukses', fake) })
				} else {
					await xzn.upTextStatus(arg).then(() => { xzn.FakeTokoForwarded(from, 'Sukses', fake) })
				}
				break
			case 'getgrup': case 'getgroup': case 'getg':
				const ingfo = await xzn.getGroup(totalchat)
				let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
				xzn.FakeTokoForwarded(from, txt, fake)
				break
			case 'creategrup': case 'creategroup': case 'createg':
			if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				argz = arg.split('|')
				if (din.message.extendedTextMessage != undefined){
                    mentioned = din.message.extendedTextMessage.contextInfo.mentionedJid
					udin.groupCreate(argz[0], mentioned)
					.then((res) => xzn.FakeTokoForwarded(from, JSON.stringify(res, null, 2).toString(), fake))
					.catch((err) => console.log(err))
				} else {
					xzn.reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, din)
				}
				break
			case 'imgtourl':
				const encmediiia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
				const mediaq = await udin.downloadMediaMessage(encmediiia)
				const upli = await uptotele(mediaq)
				xzn.reply(from, `${upli}`, din)
				break
			case 'tourl':
				let a = JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				let b = await udin.downloadAndSaveMediaMessage(a)
				let c = await uploadFile(b)
				xzn.reply(from, c.result, din)
				fs.unlinkSync(b)
				break
			case 'setpp': case 'setprofilepicture':
				if (!isMybot) return xzn.reply(from, mess.OnlyOwner, din)
				if (isMedia && !din.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : din
					const media = await udin.downloadMediaMessage(encmedia)
					udin.updateProfilePicture(udin.user.jid, media)
					.then((res) => xzn.FakeTokoForwarded(from, JSON.stringify(res, null, 2).toString(), fake))
					.catch((err) => console.log(err))
				} else {
					xzn.reply(from, `Kirim gambar atau reply gambar dengan caption ${prefix}setpp`, din)
				}
				break
case 'play':
			    if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
               var srch = args.join('')
    		   aramas = await yts(srch);
    	   	aramat = aramas.all 
   			var mulaikah = aramat[0].url							
               try {
               yta(mulaikah)
              .then((res) => {
               const { dl_link, thumb, title, filesizeF, filesize } = res
               axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
               if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam baltuk link_`)
               const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
               sendMediaURL(from, thumb, captions)
               await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
                case 'video':
if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
var srch = args.join('')
aramas = await yts(srch);
aramat = aramas.all 
var mulaikah = aramat[0].url                            
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(mess.error.api)
 }
break
case 'readallchat':
case 'readall':
 case 'rall':
if (!isMybot) return xzn.reply(from, 'ONLY MY NUMBER', din)
reply(`Succes Membaca ${totalchat.length} Chat`)
const readallid = await udin.chats.all()
udin.setMaxListeners(100)
for (let xyz of readallid) {
await udin.chatRead(xyz.jid)
}				
break
case 'tagall':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
members_id = []
teeks = (args.length > 1) ? body.slice(8).trim() : ''
teeks += '\n\n'
for (let mem of groupMembers) {
teeks += `ꔷ㆒᮫ᨗ᪼᠂⃟🦖 @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teeks, members_id, true)
break
case 'bc': 
if (!isMybot) return reply(mess.OnlyOwner)
anu = await udin.chats.all()
if (isMedia && !din.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(din).replace('quotedM','m')).message.extendedTextMessage.contextInfo : din
buff = await udin.downloadMediaMessage(encmedia)
for (let _ of anu) {
but = [{ buttonId: 'allmenu', buttonText: { displayText: 'MENU ⿻' }, type: 1 }, { buttonId: 'test', buttonText: { displayText: 'OKE ⿻' }, type: 1 }]
sendButImage(_.jid, `${q}`, `${fake}`, buff, but)
}
reply('SUKSES')
} else {
for (let _ of anu) {
but = [{ buttonId: 'allmenu', buttonText: { displayText: 'MENU ⿻' }, type: 1 }, { buttonId: 'test', buttonText: { displayText: 'OKE ⿻' }, type: 1 }]
sendButon(_.jid, `${q}`, `${fake}`, but) 
}
reply('SUKSES ')
}
break
case 'antilink':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isMybot) return reply(mess.OnlyOwner)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (Number(args[0]) === 1) {
if (isAntiLink) return xzn.reply(from, 'sdh aktif', din)
antilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTILINK*')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTILINK*')
} else {
}
break	
case 'hps':
if (!isMybot) return reply(mess.OnlyOwner)
datdat.splice(from, 9999999999999999999999999999999)
fs.writeFileSync('./cahce/msg.data.json', JSON.stringify(datdat))
reply('BERHASIL MENGHAPUS CAHCE')
break
case 'welcome':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (Number(args[0]) === 1) {
if (isWelkom) return xzn.reply(from, 'sdh aktif', din)
welkom.push(from)
fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED WELCOME*')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED WELCOME*')
} else {
}
break 
case 'autovn':
if (!isMybot) return reply(mess.OnlyOwner)
if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
if (q === 'on'){
autovn = true
reply(`Berhasil mengaktifkan autovn`)
} else if (q === 'off'){
autovn = false
reply(`Berhasil menonaktifkan autovn`)
} else {
reply(mess.error.api)
}
break
case 'autotype':
if (!isMybot) return reply(mess.OnlyOwner)
if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
if (q === 'on'){
autotype = true
reply(`Berhasil mengaktifkan autotype`)
} else if (q === 'off'){
autotype = false
reply(`Berhasil menonaktifkan autotype`)
} else {
reply(mess.error.api)
}
break
default:
break
        }
    } catch (err) {
        e = String(err)
            if (!e.includes("this.isZero")) {
	console.log(color('[ ERROR ]', 'red'), e)}}})