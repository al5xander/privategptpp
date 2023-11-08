(()=>{"use strict";var t={432:(t,e)=>{function s(t){for(;t.length;)t.pop()?.dispose()}Object.defineProperty(e,"__esModule",{value:!0}),e.$b=e.$a=void 0,e.$a=s,e.$b=class{constructor(){this.a=!1,this.b=[]}dispose(){this.a||(this.a=!0,s(this.b))}c(t){return this.a?t.dispose():this.b.push(t),t}get d(){return this.a}}},594:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$d=void 0;const n=s(983);e.$d=class{constructor(t){this.b=t}dispose(){this.a?.dispose(),this.a=void 0}show(t,e){const s="string"==typeof t?t:t.toString(!0);if(this.a)this.a.show(s,e);else{const t=n.$c.create(this.b,s,e);this.c(t),this.a=t}}restore(t,e){const s=e?.url??"",i=n.$c.restore(this.b,s,t);this.c(i),this.a??(this.a=i)}c(t){t.onDispose((()=>{this.a===t&&(this.a=void 0)}))}}},983:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$c=void 0;const n=s(496),i=s(432);class o extends i.$b{static g(t){return[n.Uri.joinPath(t,"media")]}static h(t){return{enableScripts:!0,enableForms:!0,localResourceRoots:o.g(t)}}static create(t,e,s){const i=n.window.createWebviewPanel(o.viewType,o.f,{viewColumn:s?.viewColumn??n.ViewColumn.Active,preserveFocus:s?.preserveFocus},{retainContextWhenHidden:!0,...o.h(t)});return new o(t,e,i)}static restore(t,e,s){return new o(t,e,s)}constructor(t,e,s){super(),this.l=t,this.k=this.c(new n.EventEmitter),this.onDispose=this.k.event,this.j=this.c(s),this.j.webview.options=o.h(t),this.c(this.j.webview.onDidReceiveMessage((t=>{switch(t.type){case"openExternal":try{const e=n.Uri.parse(t.url);n.env.openExternal(e)}catch{}}}))),this.c(this.j.onDidDispose((()=>{this.dispose()}))),this.c(n.workspace.onDidChangeConfiguration((t=>{if(t.affectsConfiguration("simpleBrowser.focusLockIndicator.enabled")){const t=n.workspace.getConfiguration("simpleBrowser");this.j.webview.postMessage({type:"didChangeFocusLockIndicatorEnabled",focusLockEnabled:t.get("focusLockIndicator.enabled",!0)})}}))),this.show(e)}dispose(){this.k.fire(),super.dispose()}show(t,e){this.j.webview.html=this.m(t),this.j.reveal(e?.viewColumn,e?.preserveFocus)}m(t){const e=n.workspace.getConfiguration("simpleBrowser"),s=function(){let t="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<64;s++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}(),i=this.n("media","index.js"),o=this.n("media","main.css"),r=this.n("media","codicon.css");return`<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta http-equiv="Content-type" content="text/html;charset=UTF-8">\n\n\t\t\t\t<meta http-equiv="Content-Security-Policy" content="\n\t\t\t\t\tdefault-src 'none';\n\t\t\t\t\tfont-src data:;\n\t\t\t\t\tstyle-src ${this.j.webview.cspSource};\n\t\t\t\t\tscript-src 'nonce-${s}';\n\t\t\t\t\tframe-src *;\n\t\t\t\t\t">\n\n\t\t\t\t<meta id="simple-browser-settings" data-settings="${a=JSON.stringify({url:t,focusLockEnabled:e.get("focusLockIndicator.enabled",!0)}),a.toString().replace(/"/g,"&quot;")}">\n\n\t\t\t\t<link rel="stylesheet" type="text/css" href="${o}">\n\t\t\t\t<link rel="stylesheet" type="text/css" href="${r}">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<header class="header">\n\t\t\t\t\t<nav class="controls">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${n.l10n.t("Back")}"\n\t\t\t\t\t\t\tclass="back-button icon"><i class="codicon codicon-arrow-left"></i></button>\n\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${n.l10n.t("Forward")}"\n\t\t\t\t\t\t\tclass="forward-button icon"><i class="codicon codicon-arrow-right"></i></button>\n\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${n.l10n.t("Reload")}"\n\t\t\t\t\t\t\tclass="reload-button icon"><i class="codicon codicon-refresh"></i></button>\n\t\t\t\t\t</nav>\n\n\t\t\t\t\t<input class="url-input" type="text">\n\n\t\t\t\t\t<nav class="controls">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${n.l10n.t("Open in browser")}"\n\t\t\t\t\t\t\tclass="open-external-button icon"><i class="codicon codicon-link-external"></i></button>\n\t\t\t\t\t</nav>\n\t\t\t\t</header>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="iframe-focused-alert">${n.l10n.t("Focus Lock")}</div>\n\t\t\t\t\t<iframe sandbox="allow-scripts allow-forms allow-same-origin allow-downloads"></iframe>\n\t\t\t\t</div>\n\n\t\t\t\t<script src="${i}" nonce="${s}"><\/script>\n\t\t\t</body>\n\t\t\t</html>`;var a}n(...t){return this.j.webview.asWebviewUri(n.Uri.joinPath(this.l,...t))}}e.$c=o,o.viewType="simpleBrowser.view",o.f=n.l10n.t("Simple Browser")},496:t=>{t.exports=require("vscode")}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,s),o.exports}var n={};(()=>{var t=n;Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const e=s(496),i=s(594),o=s(983),r=new Set(["localhost","127.0.0.1","[0:0:0:0:0:0:0:1]","[::1]","0.0.0.0","[0:0:0:0:0:0:0:0]","[::]"]);t.activate=function(t){const s=new i.$d(t.extensionUri);t.subscriptions.push(s),t.subscriptions.push(e.window.registerWebviewPanelSerializer(o.$c.viewType,{deserializeWebviewPanel:async(t,e)=>{s.restore(t,e)}})),t.subscriptions.push(e.commands.registerCommand("simpleBrowser.show",(async t=>{t||(t=await e.window.showInputBox({placeHolder:e.l10n.t("https://example.com"),prompt:e.l10n.t("Enter url to visit")})),t&&s.show(t)}))),t.subscriptions.push(e.commands.registerCommand("simpleBrowser.api.open",((t,e)=>{s.show(t,e)}))),t.subscriptions.push(e.window.registerExternalUriOpener("simpleBrowser.open",{canOpenExternalUri(t){const s=new URL(t.toString(!0));return r.has(s.hostname)?"undefined"!=typeof navigator&&e.env.uiKind===e.UIKind.Web?e.ExternalUriOpenerPriority.Default:e.ExternalUriOpenerPriority.Option:e.ExternalUriOpenerPriority.None},openExternalUri:t=>s.show(t,{viewColumn:e.window.activeTextEditor?e.ViewColumn.Beside:e.ViewColumn.Active})},{schemes:["http","https"],label:e.l10n.t("Open in simple browser")}))}})();var i=exports;for(var o in n)i[o]=n[o];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d037ac076cee195194f93ce6fe2bdfe2969cc82d/extensions/simple-browser/dist/extension.js.map