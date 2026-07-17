const commands =
{
    help,
    whoami,
    ls,
    cd,
    resume,
    github,
    clear
};

export function executeCommand(input)
{
    input = input.trim();

    if(input === "")
        return;

    const tokens = input.split(/\s+/);

    const command = tokens[0];

    const args = tokens.slice(1);

    if(commands[command])
    {
        commands[command](args);

        return;
    }

    print("");

    print("Command not found.");

    print('Type "help" for available commands.');

    print("");
}

function help()
{
    print("");

    print("Available commands");

    print("");

    print("help");

    print("whoami");

    print("ls");

    print("cd");

    print("resume");

    print("github");

    print("clear");

    print("");
}

function whoami()
{
    print("");

    print("Mustafa Kabak");

    print("Embedded Software Engineer");

    print("");

    print("Linux • Modern C++ • STM32");

    print("Control Systems • Radar");

    print("");
}

function ls(args)
{
    print("");

    if(args[0] === "projects")
    {
        print("radar");

        print("stm32");

        print("mavlink");

        print("bldc");
    }
    else
    {
        print("about");

        print("projects");

        print("skills");

        print("contact");
    }

    print("");
}

function cd(args)
{
    print("");

    if(args.length === 0)
    {
        print("Available destinations");

        print("");

        print("about");

        print("radar");

        print("stm32");

        print("mavlink");

        print("bldc");

        print("contact");

        print("");

        return;
    }

    print("Opening " + args[0] + "...");

    print("");
}

function resume()
{
    window.open("assets/resume.pdf");

    print("");

    print("Opening resume...");

    print("");
}

function github()
{
    window.open("https://github.com/mustafacpp");

    print("");

    print("Opening GitHub...");

    print("");
}

function clear()
{
    document
        .getElementById("terminal")
        .innerHTML = "";
}

function print(text)
{
    const terminal =
        document.getElementById("terminal");

    const line =
        document.createElement("div");

    line.className = "line";

    line.textContent = text;

    terminal.appendChild(line);

    terminal.scrollTop =
        terminal.scrollHeight;
}