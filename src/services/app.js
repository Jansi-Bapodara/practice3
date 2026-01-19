// 1. Import the functions you created in actorServices
const { 
    getAllActors, 
    getActionHeroes, 
    updateActorVibe 
} = require('./services/actorServices');

// 2. Create a main function to run your logic
async function startApp() {
    console.log("🚀 Bollywood Backend is starting...");

    try {
        // Task A: Show current actors
        await getAllActors();

        // Task B: Find only the action stars
        await getActionHeroes();

        // Task C: Update a specific actor (example ID)
        // replace 'DOCUMENT_ID' with a real ID from your console
        // await updateActorVibe('DOCUMENT_ID', 'Global Icon');

    } catch (error) {
        console.error("🛑 An error occurred in the main app:", error);
    }
}

// 3. Run the app
startApp();
