const express = require("express");
const path = require("path");
const fs = require("fs");
const textToSpeech = require("@google-cloud/text-to-speech");
const client = new textToSpeech.TextToSpeechClient();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const url = "mongodb://127.0.0.1:27017/";
const OperationsCont = require("./backend/controller/statsCont")
const eventCatCont = require("./backend/controller/event-api-controller")
const app = require('express')();
const socket = require('http').Server(app);
const io = require("socket.io")(socket);
async function connect(url) {
    await mongoose.connect(url);
    return "Connected Successfully to mongoDB";
}
const PORT_NUMBER = 3000;
let Server = express();
Server.listen(PORT_NUMBER)
Server.use(express.static(path.join(__dirname, "dist/assignment-3")));
Server.use(express.static("node_modules/bootstrap/dist/css"));
Server.engine("html", ejs.renderFile);
Server.set("view engine", "html");
Server.set('view engine', 'ejs');
Server.use(bodyParser.json());
Server.get("/33349800/api/v1/list-eventCat", eventCatCont.getAll);
Server.post("/33349800/api/v1/createEventCategory", eventCatCont.createEventCat);
Server.delete("/33349800/api/v1/delete-eventCat/:id", eventCatCont.deleteEventCatById);
Server.put("/33349800/api/v1/update-eventCat/:id/:name/:description", eventCatCont.updateCategoryById);
Server.get("/33349800/api/v1/list-eventCat/:id", eventCatCont.showCategoryDetail);
Server.get("/33349800/api/v1/stats-g1", OperationsCont.getOp)
/*Socket.io*/
io.on('connection', socket => {
  console.log("new connection made from client with ID=" + socket.id);
  socket.on('newMsg', (message) => {
    text = message.msg;
    console.log('Received new message:', text);
    // Construct the request
    const request = {
      input: { text: text },
      voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "MP3" },
    };
    // Performs the Text-to-Speech request
    client.synthesizeSpeech(request, (err, response) => {
      if (err) {
        console.error("ERROR:", err);
        return;
      }
      // Write the binary audio content to a local file
      fs.writeFile("output.mp3", response.audioContent, "binary", err => {
        if (err) {
          console.error("ERROR:", err);
          return;
        }
        console.log("Audio content written to file: output.mp3");
      });
    });
  });
});








  // LiShen's CODE
/*
// Display the form for adding an event
Server.get('/lishen/event/add', function (req, res) {
    const fileName = VIEWS_PATH + "add.html"
    res.sendFile(fileName)
});

Server.post('/lishen/event/add', async function(req, res) {
    const { name, startDateTime, durationInMinutes, categoryId, description, image, capacity, ticketsAvailable, isActive } = req.body;
    // Generate a new ID
    const id = IDGeneratorE();

    // Create a new event object using the Mongoose model
    const newEvent = new Events({ id, name, startDateTime, durationInMinutes, categoryId, description, image, capacity, ticketsAvailable, isActive });

    try {
        // Save the new event to the database
        await newEvent.save();

        recordsCreatedCount++;
        eventsCount++;

        res.redirect('/lishen/eventOngoing'); // Redirect to the eventOngoing page after adding the event
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Display all ongoing events
Server.get('/lishen/eventOngoing', async function (req, res) {
    try {
        fileName = VIEWS_PATH + "allEvents";
        const events = await Events.find().populate('categoryList');
        res.render(fileName, { events: events });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

Server.get('/lishen/event/sold-out', function (req, res) {
    const fileName = "soldOutEvents";
    const availableEvents = event.filter(event => event.ticketsAvailable < 1); // Filter events with capacity < 1
    res.render(fileName, {events: availableEvents});
})

// Handle routes for event details and category details
Server.get('/lishen/event/details/:eventId', function (req, res) {
    const eventId = req.params.eventId; // Get event ID from URL parameter
    const selectedEvent = event.find(e => e.id === eventId);

    if (!selectedEvent) {
        res.status(404).send('Event not found');
        return;
    }

    const fileName = "eventDetails";
    res.render(fileName, {event: selectedEvent});
});


Server.get('/lishen/category/:categoryId', function (req, res) {
    const categoryId = req.params.categoryId;
    const selectedCategory = database.find(cat => cat.id === categoryId); // Find the selected category

    if (!selectedCategory) {
        res.status(404).send('Category not found');
        return;
    }

    // Calculate the end date/time by adding the duration to the start date/time
    const startDateTime = new Date(selectedCategory.startDateTime);
    const durationInMinutes = parseInt(selectedCategory.duration, 10);
    const endDateTime = new Date(startDateTime.getTime() + durationInMinutes * 60000); // Convert minutes to milliseconds

    const fileName = 'categoryDetails';
    res.render(fileName, {
        event: selectedCategory,
        endDateTimes: endDateTime
    });
});

// Remove an event from the event array
Server.get('/lishen/event/remove', (req, res) => {
    const eventId = req.query.id; // Get event ID from query string
    const eventIndex = event.findIndex(e => e.id === eventId); // Find the index of the event
    if (eventIndex !== -1) {
        recordsDeletedCount++;
        eventsCount--;
        event.splice(eventIndex, 1); // Remove the event from the array
        res.redirect('/lishen/eventOngoing'); // Redirect to the "list all events" page
    } else {
        res.status(404).send('Event not found'); // Handle event not found
    }
});
// Add a catch-all route to handle requests with no pathname
Server.get('*', function (req, res) {
    const fileName = VIEWS_PATH + "index.html";
    res.render(fileName);
});
*/
connect(url)
.then(console.log)
.catch((err) => console.log(err));
