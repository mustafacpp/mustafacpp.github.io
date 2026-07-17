const terminal = document.getElementById("terminal");

const TYPE_SPEED = 35;

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

async function typeLine(text, speed = TYPE_SPEED)
{
    const line = createLine();

    for (const c of text)
    {
        line.textContent += c;

        terminal.scrollTop = terminal.scrollHeight;

        await sleep(speed);
    }

    return line;
}

async function typePrompt(command)
{
    const prompt = createLine("mustafa@lab:~$ ");

    for (const c of command)
    {
        prompt.textContent += c;

        terminal.scrollTop = terminal.scrollHeight;

        await sleep(80);
    }
}

async function boot()
{
    await typeLine("Booting Portfolio OS v1.0...");

    await sleep(500);

    createLine();

    await typeLine("Loading projects..............OK");
    await sleep(250);

    await typeLine("Loading documentation.........OK");
    await sleep(250);

    await typeLine("Loading GitHub links..........OK");
    await sleep(250);

    await typeLine("Loading shell.................OK");

    await sleep(600);

    createLine();

    await typeLine("Welcome.");

    await sleep(500);

    createLine();

    const now = new Date();

    await typeLine("Last login: " + now.toString());

    createLine();

    await sleep(700);

    await typePrompt("whoami");

    await sleep(400);

    createLine("Mustafa Kabak");
    createLine("Embedded Software Engineer");

    await sleep(700);

    createLine();

    await typePrompt("ls");

    await sleep(400);

    createLine("projects");
    createLine("resume");
    createLine("contact");
    createLine("skills");

    await sleep(700);

    createLine();

    createLine("mustafa@lab:~$ █");
}

boot();