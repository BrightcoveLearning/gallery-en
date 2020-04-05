---
layout: null
---

var appID = "{{ site.talla_appID }}"; 
// token for anonymous profile
var token =
'{{ site.talla_token }}';
// -----
  Talla.config = Talla.init(
    appID,
    Talla.OptionJWTCredentials(token), 
    Talla.OptionBotName("{{ site.product }} Doc Search"),
    Talla.OptionAnonymous(true),
    Talla.OptionThemeColor('{{ site.product_color }}'),
    Talla.OptionDisplayName('Search {{ site.product }} Docs'),
    Talla.OptionKnowledgeGroups(['{{ site.talla_knowledgegroup }}']),
    Talla.OptionWideBeacon(true),
    Talla.OptionBeaconCTA("Search {{ site.product }} Docs"),
    Talla.OptionOpenIcon('https://learning-services-media.brightcove.com/doc-assets/site-assets/images/site/search.png'),
    Talla.OptionBotIcon('https://learning-services-media.brightcove.com/doc-assets/site-assets/images/site/search.png'),
    Talla.OptionAutodetectSession
  );
// configure to load up as custom placement
Talla.chat = Talla.config.configure(Talla.OptionLoadChat);
// function to load up the chat
 function displayChat() {
   Talla.chat.managedDisplay(Talla.OptionDetectParent(() => { return document.querySelector('#talla_chat')} ));
 }