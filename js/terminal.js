const terminal = document.getElementById("terminal");

const TYPE_SPEED = 40;
const COMMAND_SPEED = 80;

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function scrollBottom()
{
    terminal.scrollTop = terminal.scrollHeight;
}

function createLine(text = "")
{
    const line = document.createElement("div");

    line.className = "line";
    line.textContent = text;

    terminal.appendChild(line);

    scrollBottom();

    return line;
}

async function typeLine(text, speed = TYPE_SPEED)
{
    const line = createLine();

    for(const c of text)
    {
        line.textContent += c;

        scrollBottom();

        await sleep(speed);
    }

    return line;
}

async function typePrompt(command)
{
    const prompt = createLine("mustafa@lab:~$ ");

    for(const c of command)
    {
        prompt.textContent += c;

        scrollBottom();

        await sleep(COMMAND_SPEED);
    }

    await sleep(250);

    return prompt;
}

async function loading(text)
{
    await typeLine(text);

    await sleep(180);
}

async function boot()
{
    await typeLine("Booting Portfolio OS v1.0...");

    await sleep(500);

    createLine();

    await loading("Loading projects..............OK");

    await loading("Loading documentation.........OK");

    await loading("Loading GitHub links..........OK");

    await loading("Loading shell.................OK");

    createLine();

    await sleep(400);

    await typeLine("Welcome.");

    createLine();

    const date = new Date();

    await typeLine("Last login: " + date.toString());

    createLine();

    await sleep(800);

    await runWhoAmI();

    await sleep(600);

    await runLs();

    await sleep(800);

    createPrompt();
}

async function runWhoAmI()
{
    await typePrompt("whoami");

    createLine("Mustafa Kabak");

    createLine("Embedded Software Engineer");

    createLine("Linux | C++ | STM32 | Control Systems");

    createLine();
}

async function runLs()
{
    await typePrompt("ls");

    createLine("projects");

    createLine("about");

    createLine("skills");

    createLine("resume");

    createLine("contact");

    createLine();
}

function createPrompt()
{
    const prompt = document.createElement("div");

    prompt.className = "line";

    prompt.innerHTML =
        `<span style="color:#39d353;">mustafa</span>@<span style="color:#58a6ff;">lab</span>:~$ <span class="cursor">█</span>`;

    terminal.appendChild(prompt);

    scrollBottom();
}

boot();