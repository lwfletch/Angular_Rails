import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['document.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: 'First Document',
			description: 'this is the first document object',
			file_url: 'http://google.com',
			updated_at: '2016-12-2',
			image_url: 'http://google.com'
		},
		{
			title: 'The Second Document',
			description: 'this is the second document object',
			file_url: 'http://espn.com',
			updated_at: '2016-12-21',
			image_url: 'http://espn.com'
		},
		{
			title: 'Final Document',
			description: 'this is the third document object',
			file_url: 'http://wral.com',
			updated_at: '2016-12-22',
			image_url: 'http://wral.com'
		}
	]
}