import { boot } from "./boot.js";
import { initializeShell } from "./shell.js";

async function start()
{
    await boot();

    initializeShell();
}

start();