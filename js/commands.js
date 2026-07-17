const terminal = document.getElementById("terminal");

const commands =
{
    help,
    whoami,
    ls,
    cd,
    cat,
    nano,
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
    }
    else
    {
        print("");

        print(`${command}: command not found`);

        print('Type "help" for available commands.');

        print("");
    }
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

    print("cat");

    print("nano");

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

    print("Embedded Linux");

    print("Modern C++");

    print("STM32");

    print("Control Systems");

    print("Radar Signal Processing");

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

        print("resume.txt");
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

    print(`Opening ${args[0]}...`);

    print("");

    // Scroll functionality burada eklenecek.
}

function cat(args)
{
    print("");

    if(args[0] === "resume.txt")
    {
        print("Mustafa Kabak");

        print("Embedded Software Engineer");

        print("");

        print("Use:");

        print("nano resume.txt");

        print("to open the full resume.");

    }
    else
    {
        print("File not found.");
    }

    print("");
}

function nano(args)
{
    print("");

    if(args[0] === "resume.txt")
    {
        print("Opening resume...");

        window.open("assets/resume.pdf", "_blank");
    }
    else
    {
        print("File not found.");
    }

    print("");
}

function github()
{
    print("");

    print("Opening GitHub...");

    window.open(
        "https://github.com/mustafacpp",
        "_blank"
    );

    print("");
}

function clear()
{
    terminal.innerHTML = "";
}

function print(text)
{
    const line = document.createElement("div");

    line.className = "line";

    line.textContent = text;

    terminal.appendChild(line);

    terminal.scrollTop = terminal.scrollHeight;
}