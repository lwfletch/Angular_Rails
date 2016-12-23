import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(1, 'A Company', 'http://espn.com', 'Ruby on Rails', 100, 100, 10, 'treyfletcher612@gmail.com')
	proposalTwo: Proposal = new Proposal(2, 'XYZ Company', 'http://wral.com', 'AngularJS', 100, 75, 10, 'treyfletcher612@gmail.com')
	proposalThree: Proposal = new Proposal(3, 'Bad Company', 'http://craigslist.org', 'Ruby on Rails', 80, 110, 8, 'treyfletcher612@gmail.com')

	proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}