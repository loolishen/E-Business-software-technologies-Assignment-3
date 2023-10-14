const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios'); // Use Axios for HTTP requests

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('translateText', (request) => {
        const targetLanguage = request.targetLanguage;
        const textToTranslate = request.text;

        const apiKey = 'AIzaSyBmBvLOFyHkPtDOiJSMzU8bINdl9zhUplw';
        const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

        axios
            .post(apiUrl, null, {
                params: {
                    q: textToTranslate,
                    target: targetLanguage,
                    format: 'text',
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            })
            .then((response) => {
                const translatedText = response.data.data.translations[0].translatedText;
                const translatedResponse = {
                    translatedText,
                };
                socket.emit('translationResponse', translatedResponse);
            })
            .catch((error) => {
                // Handle translation errors and send an error response
                const errorResponse = {
                    error: 'Translation failed',
                };
                socket.emit('translationResponse', errorResponse);
            });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(8080, () => {
    console.log('Socket.IO server is running on port 8080');
});
