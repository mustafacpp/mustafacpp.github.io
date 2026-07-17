import { executeCommand } from "./commands.js";

const terminal = document.getElementById("terminal");

let currentLine = null;
let currentInput = "";

let history = [];
let historyIndex = 0;

export function initializeShell()
{
    createPrompt();

    window.addEventListener("keydown", handleKey);
}

function createPrompt()
{
    currentInput = "";

    currentLine = document.createElement("div");

    currentLine.className = "line";

    currentLine.innerHTML =
        '<span class="user">mustafa</span>@<span class="host">lab</span>:~$ <span class="input"></span><span class="cursor">█</span>';

    terminal.appendChild(currentLine);

    scrollBottom();
}

function handleKey(event)
{
    if(!currentLine)
        return;

    /* Ctrl + L */

    if(event.ctrlKey && event.key.toLowerCase() === "l")
    {
        event.preventDefault();

        terminal.innerHTML = "";

        createPrompt();

        return;
    }

    /* Printable */

    if(event.key.length === 1 &&
       !event.ctrlKey &&
       !event.metaKey)
    {
        currentInput += event.key;

        updateInput();

        event.preventDefault();

        return;
    }

    switch(event.key)
    {
        case "Backspace":

            currentInput =
                currentInput.slice(0,-1);

            updateInput();

            break;

        case "Enter":

            submitCommand();

            break;

        case "ArrowUp":

            previousHistory();

            break;

        case "ArrowDown":

            nextHistory();

            break;

        case "Tab":

            autocomplete();

            break;
    }

    event.preventDefault();
}

function updateInput()
{
    currentLine
        .querySelector(".input")
        .textContent = currentInput;

    scrollBottom();
}

function submitCommand()
{
    currentLine
        .querySelector(".cursor")
        .remove();

    const command = currentInput.trim();

    if(command !== "")
    {
        history.push(command);

        historyIndex = history.length;

        executeCommand(command);
    }

    createPrompt();
}

function previousHistory()
{
    if(history.length === 0)
        return;

    historyIndex =
        Math.max(0, historyIndex - 1);

    currentInput =
        history[historyIndex];

    updateInput();
}

function nextHistory()
{
    if(history.length === 0)
        return;

    historyIndex =
        Math.min(history.length,
                 historyIndex + 1);

    if(historyIndex === history.length)
        currentInput = "";
    else
        currentInput = history[historyIndex];

    updateInput();
}

function autocomplete()
{
    /* sonraki commit :) */
}

function scrollBottom()
{
    terminal.scrollTop =
        terminal.scrollHeight;
}