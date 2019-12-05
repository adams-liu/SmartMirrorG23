const Alexa = require('ask-sdk-core');

// Launch Handler to invoke Alexa Skill "Magic Mirror"
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello! Welcome to Magic Mirror!';
        const repromptText = 'You can say things like: Open my Calendar, Open Spotify, Set a timer for 15 mins ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};

// Asks Alexa to open calendar >> will communicate with Raspberry Pi to display and have a feedback from Amazon Echo
const OpenCalendarIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'OpenCalendarIntent';
    },
    handle(handlerInput) {
            
        const speakOutput = 'Opening Calendar';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
    //Insert code to initiate an event to Raspberry Pi to display calendar
};

// Asks Alexa to set a timer 
const SetATimerIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SetATimerIntent';
    },
    handle(handlerInput) {
        const time = handlerInput.requestEnvelope.request.intent.slots.time.value;
        const speakOutput = `Okay, Timer is set for ${time} minutes.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
    //Insert code to initiate an event to Raspberry Pi to display a timer 
};

// Asks Alexa to set a timer 
const OpenWeatherIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'OpenWeatherIntent';
    },
    handle(handlerInput) {
        const time = handlerInput.requestEnvelope.request.intent.slots.time.value;
        const speakOutput = "Here is today's weather!"; //grab api from weather network
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
    //Insert code to initiate an event to Raspberry Pi to display daily forecast or 3-day forecast
};

// Asks Alexa to play Spotify
const OpenSpotifyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'OpenSpofityIntent';
    },
    handle(handlerInput) {
        const time = handlerInput.requestEnvelope.request.intent.slots.time.value;
        const speakOutput = "Now playing Spotify"; // may add api to pause/shuffle/play for Spotify
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
    //Insert code to initiate an event to Raspberry Pi to indicate Spotify is playing
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say things like: Open my Calendar, Open Spotify, Set a timer for 15 mins ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'See you soon!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speakOutput = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        OpenCalendarIntentHandler,
        SetATimerIntentHandler,
        OpenWeatherIntentHandler,
        OpenSpotifyIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();