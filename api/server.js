require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
const Redis = require('ioredis');

const PORT = process.env.PORT || 3000;

// Create HTTP server (no express needed since Laravel handles REST)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bazrah Real-Time Service is running.');
});

const io = new Server(server, {
  cors: {
    origin: '*', // Adjust for production
    methods: ['GET', 'POST']
  }
});

// Setup Redis subscriber to listen for events from Laravel
const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: process.env.REDIS_PORT || 6379,
});

redis.subscribe('bazrah_database_orders', (err, count) => {
  if (err) {
    console.error('Failed to subscribe to Redis channels:', err);
  } else {
    console.log(`Subscribed to ${count} channels.`);
  }
});

redis.on('message', (channel, message) => {
  console.log(`Received message from channel ${channel}:`, message);
  try {
    const payload = JSON.parse(message);
    // Broadcast event to connected WebSocket clients
    // Example: io.to(`user.${payload.user_id}`).emit(payload.event, payload.data);
    io.emit(payload.event, payload.data);
  } catch (error) {
    console.error('Error parsing Redis message:', error);
  }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Allow client to join their specific private room (e.g., user.{id})
  socket.on('join', (room) => {
    socket.join(room);
    console.log(`Socket ${socket.id} joined room ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Bazrah Real-Time Service listening on port ${PORT}`);
});
