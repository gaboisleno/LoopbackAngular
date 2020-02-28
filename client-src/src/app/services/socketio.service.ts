import { Injectable } from '@angular/core';
import io from 'socket.io-client';

@Injectable()
export class SocketIOService {
	socket: any
	
	constructor(){
		this.socket = io.connect('localhost:3000');
	}

	sendMessage(){
		this.socket.emit('message', 'Client message');
	}
} 