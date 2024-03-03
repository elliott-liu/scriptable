// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: calendar-alt;
function t(t,e,o,n){e.push(o),n&&n(t,e)}function e(t,e){e.forEach((e=>{const o=t.addText(e);o.centerAlignText(),o.font=Font.systemFont(14),o.textColor=Color.red()})),t.presentLarge(),Script.complete()}!function(){const o=new ListWidget;o.spacing=4,o.setPadding(10,10,10,10);const n=[],a=args.widgetParameter;if(!a||"string"!=typeof a)return void t(o,n,'No arguments provided.\n\nArguments should be configured on the home screen using a comma separated:\n\ntitle, date\n("YYYY-MM-DD hh:mm")',e);console.log(a);const[d,r]=a.split(",").map((t=>t.trim()));if(!d||!r)return d||t(o,n,"Could not parse title."),r||t(o,n,'Could not parse date.\n\nDate should be formatted as "YYYY-MM-DD hh:mm".'),void e(o,n);const s=new Date(r);if(isNaN(s.getTime()))return void t(o,n,'Invalid date format.\n\nEnsure the date is formatted as "YYYY-MM-DD hh:mm".',e);!function(t,e,o){const n=t.addText(e);n.centerAlignText();const a=t.addDate(o);a.applyRelativeStyle(),a.centerAlignText(),a.font=Font.boldSystemFont(14);const d=t.addStack();d.layoutVertically(),d.spacing=2;const r=d.addStack();r.addSpacer();const s=r.addStack();s.spacing=2;const c=s.addText(o.toLocaleDateString(void 0,{weekday:"long"}));c.font=Font.systemFont(10),c.textColor=Color.gray();const i=s.addDate(o);i.applyDateStyle(),i.font=Font.systemFont(10),i.textColor=Color.gray(),r.addSpacer();const l=d.addStack();l.addSpacer();const m=l.addDate(o);m.applyTimeStyle(),m.font=Font.systemFont(10),m.textColor=Color.gray(),l.addSpacer(),t.presentSmall(),Script.complete()}(o,d,s)}();