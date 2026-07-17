const terminal = document.getElementById("terminal");

const TYPE_SPEED = 18;

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createLine(text = "")
{
    const line = document.createElement("div");

    line.className = "line";

    terminal.appendChild(line);

    line.textContent = text;

    terminal.scrollTop = terminal.scrollHeight;

    return line;
}

async function typeLine(text, speed = TYPE_SPEED)
{
    const line = createLine();

    for(const c of text)
    {
        line.textContent += c;

        terminal.scrollTop = terminal.scrollHeight;

        await sleep(speed);
    }
}

export async function boot()
{
    await typeLine("[ OK ] Loading profile");

    await sleep(120);

    await typeLine("[ OK ] Starting shell");

    await sleep(180);

    createLine();

    await typeLine("Portfolio OS v1.0");

    await sleep(250);

    createLine();

    await typeLine('Type "help" to begin.');

    createLine();

    await sleep(250);
}