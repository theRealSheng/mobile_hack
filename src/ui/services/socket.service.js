class SocketService {
  constructor(socket) {
    this.socket = socket;
  }

  on(event, callback) {
    this.socket.on(event, callback);
  }

  emit(event, data) {
    this.socket.emit(event, data);
  }
}

export { SocketService };
