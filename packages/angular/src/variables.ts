/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
// tslint:disable
/* eslint-disable */

export const indexTemplateHtml = `<div (drop)="onDrop(\$event)" (paste)="onPaste(\$event)"><div *ngFor="let request of requests; trackBy: trackBy" class="file-uploader-progress" [title]="request.file.name"><div [style.width]="request.percent + '%'">{{request.percent}}%</div></div><p class="file-uploader-container">{{localeObject.dragAndDrop}}<span>{{localeObject.selectFile}}</span>{{localeObject.pasteFromClipboard}} <input type="file" [multiple]="multiple" [accept]="accept" (change)="onFileUploaded(\$event)"></p></div>`
/* eslint-enable */
// tslint:enable
