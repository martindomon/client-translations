export default {
  self: 'xroom',
  on: 'på',
  off: 'av',
  title: 'Behövs ett konfrum?',
  buttons: {
    ok: 'OK',
    yes: 'Ja',
    no: 'Nej',
    cancel: 'Avbryt',
    retry: 'Igen',
    chooseWindow: 'Välj ett fönster',
    wholeScreen: 'Hela skärmen',
    install: 'Lägg till',
    uninstall: 'Ta bort',
    send: 'Skicka',
    close: 'Stäng',
    hide: 'Dölj',
    knock: 'Knack knack',
    allowIn: 'Släpp in',
    deny: 'Neka',
    enterAnyway: 'Gå in ändå',
    details: 'Detaljer',
  },
  mbox: {
    notSupported: 'Det ser inte ut som att denna webbläsare stödjer XROOM eller så är WebRTC inaktiverat. 😢',
    success: 'Åtgärden lyckades',
    failure: 'Åtgärden misslyckades',
    enterRoomName: 'Vänligen ange rumsnamnet',
    isCamOn: 'Är kameran på?',
    isCamOnText: 'Kontrollera att du inte har oavsiktligt blockerat din kamera / mikrofon på den här sidan och sedan tryck på "Igen".',
    isMicOn: 'Är mikrofonen på?',
    isMicOnText: 'Om du vill prata behöver vi ha tillgång till din mikrofon. Avblockera den på och denna sida och sedan tryck på "Igen".',
    iWillOnlyWatch: 'Jag ska bara titta',
    iWillOnlyListen: 'Jag ska bara lyssna',
    screenSharingText: 'Skärmdelning är inte tillåtet. Se till att det inte är blockerat för den här sidan.<br><br>Viktigt: funktionen stöds endast av moderna webbläsare som Chrome eller Firefox.',
    cannotFile: 'Eftersom vi inte ens rör dina filer kan vi inte leverera dem till någon efter en anslutar. Du behöver göra det online.',
    cannotMessage: 'Eftersom vi inte ens rör dina meddelanden kan vi inte leverera dem till någon efter en anslutar. Du behöver göra det online.',
    roomLockedText: 'Det här rummet är tyvärr låst.',
    oops: 'Oops',
    kickedOutText: 'Du har blivit borttagen från det här rummet.',
    areYouSure: 'Är du säker?',
    restartRequiredText: 'Denna inställning påverkar så mycket att sidan behöver laddas om. Det blir snabbt, vi lovar!',
    onlySafariOnIOS: 'På iOS stöds endast Safari.',
    cannotLoadPlugin: 'Plugin "%s" stöds inte i din webbläsare',
    confirmFileSend: 'Vill du skicka detta?',
    whatIsYourName: 'Ange ett nytt namn',
    setVideoVolume: 'Ställ in ljudnivån',
    roomLockedTryKnockText: 'Rummet är låst. Du kan be om att gå in genom att "knacka".',
    knockingFailedText: 'Knackningsförsöket misslyckades',
    doYouWantToKick: 'Vill du ta bort den här användaren?',
    deviceChanged: 'Du har anslutit eller tagit bort en input-enhet. Om det inte fungerar, kolla gärna dina inställningar.',
    allowCameraPlz: 'Efter du trycker på OK, <b>låt</b> xroom använda din kamera.<br><br>Oroa dig inte, du kan stänga av den igen innan du går in i rummet från menyn längst ner om du vill stanna osynlig.',
    tooOldBrowser: 'Din webbläsare är för gammal eller tillverkad av Microsoft. Många funktioner kan saknas.',
    pluginsLoadFailed: 'Det gick inte att ladda plugin',
    protoExpired: 'För gammal klientversion. Tryck på Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 för att ladda om. Om du ser detta meddelande igen, rensa webbläsarens cache manuellt tack.',
    peerError: 'Något gick fel när du utbytte data med andra. Vi föreslår att du laddar om sidan.',
    enterpriseOnly: 'Det här är bara en Enterprise funktion.',
    pluginSuggested: 'Användare %s föreslog att du installerar plugin %s. Vill du göra det?',
    hostRoleRequired: 'Host-roll krävs för den här åtgärden.',
    alreadyHosted: 'Rummet har redan en värd. Gå inte in i samma rum från två webbläsarflikar. 😉',
    roomLockedPassword: 'Rummet är låst med ett lösenord. Ange det nedan.',
    roomDestroyed: 'Rummet blev förstört. Du kommer att omdirigeras till startsidan.',
    roomBooked: 'Rummet är bokat och kan inte skapas genom UI tills bokningen löper ut.',
    nameRequired: 'Rumvärd kräver att du ställer in ditt namn först.',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
    copyFailed: 'Copying failed. This may be a result of your device restrictions.',
    noCryptoWarning: 'This browser does not support cryptography. It is not safe to continue.',
    bigFileDecryptWarn: 'Downloading has started. It may take a few seconds to decrypt the file.',
  },
  notify: {
    slowPlugins: 'Pluginladdning tar för mycket tid. Tänk på att ta bort det tyngsta plugin.',
  },
  home: {
    nisdos: 'Inga "cookies" används här',
    title: 'Ditt eget konferensrum',
    btnGo: 'Kör!',
    knowMore: 'Om xroom',
    nameRoom: 'namnge rummet:',
    placeholder: 'skriv här',
    rejoinRoom: 'eller återvänd till',
  },
  wl: {
    poweredBy: 'Drivs av ',
  },
  modes: {
    1: 'Konferens',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Välj rumstyp',
    checkIt: 'Ser du bra ut?',
    btnGo: 'Börja',
    knockDenied: 'Din knack-begäran har nekats. Du kan inte komma in i rummet. :(',
    knockRequested: 'Vänta på tillstånd. Andra kan se dig genom ett kikhål. 👀',
    noAudio: '⚠️ Vi hittar inte din mikrofon',
    roomIsBusyWebinar: 'En webinar/stream är redan på gång (%s×🙂 / %s×🤖)',
    roomIsBusyConference: 'Ett samtal är redan på gång (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'Rummets kapacitet var begränsat och gränsen är nådd',
    roomBooked: 'There is going to be an event in this room at <b>%s</b>, but it has not started yet.',
  },
  videoMenu: {
    hint: 'Meny',
    expand: 'Förstora',
    pip: 'Keep on top',
    fullscreen: 'Fullskärm',
    volume: 'Ljudnivå ±',
    restore: 'Återställa',
    kick: 'Ta bort',
    mute: 'Dämpa',
  },
  controls: {
    ss: 'Skärmdeln. %s',
    cam: 'Kam %s',
    mic: 'Mik %s',
    chat: 'Chatt %s',
    exit: 'Avsluta',
    destroy: 'Radera rummet',
    xroom: 'Drivs av xroom',
    settings: 'Inställn.',
    plugins: 'Plug-in',
    media: 'Media',
    more: 'Mer',
    letMeSpeak: 'Jag vill prata',
    lock: 'Låsning',
  },
  lockStatus: {
    locked: 'Rummet är stängt',
    open: 'Rummet är öppet',
    protected: 'Rummet skyddade med ett lösen',
    placeholder: 'rumslösenord',
  },
  reactions: {
    letMeSpeak: 'Jag vill prata!',
  },
  waiting: {
    invite: 'Bjud in dina kollegor',
    beforeCopy: 'klicka för att kopiera',
    afterCopy: 'Kopierats. Dela nu!',
    webinar: 'Webinar har inte startat',
  },
  video: {
    you: 'Du (klicka för att namnge)',
    someone: 'Någon',
    knocking: 'knackar...',
    poorNet: 'dålig anslutning',
  },
  chat: {
    fileSending: 'Skickar en fil: ',
    fileReceived: 'En fil har tagits emot: ',
    inputPlaceholder: 'skriv ett meddelande ...',
    me: 'jag',
    dropMe: 'Släpp mig!',
  },
  webinar: {
    peersCount: '%s personer tittar',
  },
  settings: {
    experimental: '*) experimentellt, fungerar ostabilt',
    showCameraWithScreen: 'Använd kameran under skärmdelning (BETA)',
    audioQ: 'Audio quality',
    videoQ: 'Video quality',
    screenQ: 'Screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    autoGetIn: 'Starta chattar utan granskning',
    soundEffects: 'Ljudeffekter',
    noisyBackground: 'Jag på en högljudd plats',
    rtcDebug: 'Felsök RTC',
    audioDevices: 'Audio källor',
    videoDevices: 'Video källor',
    language: 'Språk',
    theme: 'Färgtema',
    server: 'Server',
    keepControls: 'Håll menyn synlig',
  },
  plugins: {
    by: 'av',
    size: 'Storlek: %s kB',
    searchPlaceholder: 'söka...',
    source: 'Källkod:',
    apiDocs: 'API dok.',
    vendor: 'Skapare:',
    add: {
      title: 'Lägg till ett nytt plugin',
      descr: '⚙️ Utvecklar du ett nytt plugin? Lägg till det här för att testa. Det sparas endast i den här webbläsaren.',
      name: 'Vad heter plugin?',
      rootUrl: 'Var är URL-adressen för plugin?',
      loaded: 'Yaay! Det är laddat!',
      loadFailed: 'Det gick inte att ladda plugin',
    }
  },
  tips: {
    prefix: 'Dagens tips: ',
    lines: [
      'Mute/unmute often? There`s a hot key "m" for that.',
      'Double click the remote video to make it full screen.',
      'Need to lock your room? Just add the room locking in plugins below.',
      'Use Slack and want to save more time? Try out our <a href="//xroom.app/en/library/slack-bot" target="_blank">Slack bot</a>.',
      'Miss video calls in Telegram? Our <a href="//xroom.app/en/library/telegram-bot" target="_blank">Telegram bot</a> is there to help.',
      'Need to share a copied image? Ctrl+V in the chat, we`ll cover the rest.',
      'Lock your room in one click, use locking plugin',
      'Click your name to change it both locally and for your peers.',
      'Ever needed to record your screen with just a few clicks? Try our screen recording plugin.',
    ]
  },
}
