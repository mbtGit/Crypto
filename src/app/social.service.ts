import { Injectable } from '@angular/core';

@Injectable()
export class socialService {

	getCurrencies() {
		return ([
		{
			name: "Bitcoin",
			img: "img/coins.jpg",
			events: [
			{
				id: 1,
				datetime: 1509950442,
				networkId: 1,
				networkIco: "http://site.je/app/img/nucleo-social-icons/svg/social-1_logo-twitter.svg",
				totalLikes: 800,
				sentiment : 0,
				messagesCount : 2,
				messages: [{
					eventId : "uniqe",
					message : "hello",
					publisher: "ari",
					datetime : 1509950442,
					liks: 4,
					comments: 65,
					sentiment : 0
				},{
					eventId : "uniqe4",
					message : "hello4",
					publisher: "ari",
					datetime : 1509970442,
					liks: 4,
					comments: 65,
					sentiment : 0
				}]
			},{
				id: 2,
				datetime: 1509951442,
				networkId: 1,
				networkIco: "http://site.je/app/img/nucleo-social-icons/svg/social-1_logo-twitter.svg",
				totalLikes: 800,
				sentiment : 0,
				messagesCount : 5,
				messages: [{
					eventId : "uniqe",
					message : "hello",
					publisher: "ari",
					datetime : 1509950442,
					liks: 4,
					comments: 65,
					sentiment : 0
				}]
			},{
				id: 3,
				datetime: 1509950942,
				networkId: 1,
				networkIco: "http://site.je/app/img/nucleo-social-icons/svg/social-1_logo-twitter.svg",
				totalLikes: 800,
				sentiment : 0,
				messagesCount : 2,
				messages: [{
					eventId : "uniqe",
					message : "hello",
					publisher: "ari",
					datetime : 1509950442,
					liks: 4,
					comments: 65,
					sentiment : 0
				}]
			}]
		},
		{
			name: "Ethereum", 
			img: "img/coins.jpg"
		},
		{
			name: "Ripple", 
			img: "img/coins.jpg"
		},
		{
			name: "Litecoin", 
			img: "img/coins.jpg"
		},
		{
			name: "Dash", 
			img: "img/coins.jpg"
		},
		{
			name: "NEO", 
			img: "img/coins.jpg"
		},
		{
			name: "NEM", 
			img: "img/coins.jpg"
		},
		{
			name: "Qtum",
			img: "img/coins.jpg"
		}]);
	}
}