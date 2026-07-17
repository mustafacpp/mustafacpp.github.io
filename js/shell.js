import { executeCommand } from "./commands.js";

const terminal = document.getElementById("terminal");

let currentLine = null;

let currentInput = "";

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

    if(event.key.length === 1 && !event.ctrlKey && !event.metaKey)
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

            event.preventDefault();

            break;

        case "Enter":

            submitCommand();

            event.preventDefault();

            break;
    }
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

    createPrompt();
}

function scrollBottom()
{
    terminal.scrollTop =
        terminal.scrollHeight;
}