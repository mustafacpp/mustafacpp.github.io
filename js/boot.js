const terminal = document.getElementById("terminal");

const TYPE_SPEED = 30;

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createLine(text = "")
{
    const line = document.createElement("div");

    line.className = "line";

    line.textContent = text;

    terminal.appendChild(line);

    terminal.scrollTop = terminal.scrollHeight;

    return line;
}

async function typeLine(text)
{
    const line = createLine();

    for(const c of text)
    {
        line.textContent += c;

        terminal.scrollTop = terminal.scrollHeight;

        await sleep(TYPE_SPEED);
    }
}

export async function boot()
{
    await typeLine("Portfolio OS v1.0");

    createLine();

    await sleep(300);

    await typeLine("Welcome.");

    createLine();

    await sleep(200);

    createLine("Available commands");

    createLine();

    createLine("  help");

    createLine("  whoami");

    createLine("  ls");

    createLine("  cd");

    createLine("  resume");

    createLine("  github");

    createLine("  clear");

    createLine();

    await sleep(400);
}