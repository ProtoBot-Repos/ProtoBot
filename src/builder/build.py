#as much as i hate python i am doing this...
import os;
import sys

OS = sys.platform;
vs_version: str;
packman: str;

def check_build_dir() -> None:
        if not os.path.exists("build"):
                os.mkdir("build");

def run() -> None:
    siono: str;

    siono = input("Do you want to run the build? (y/n)");

    if siono == "y":
        print("Running...");

        if OS == "win32" or OS == "win64":
            os.system("./Debug/ProtoBot.exe");
        else:
            os.system("./ProtoBot");
    else:
        print("Exiting...");


if OS == "linux" or OS == "linux2" :
    print("You are running Linux");

    check_build_dir();

    try:
        os.system("cmake --version");
    except:
        print("Cmake is not installed. installing...");
        packman = input("what package manager do you have installed").lower();

        if packman == "apt" or packman == "apt-get":
            os.system("sudo apt-get install cmake");
        elif packman == "pacman":
            os.system("sudo pacman -S cmake");
        elif packman == "yum":
            os.system("sudo yum install cmake");
        elif packman == "yay":
            os.system("sudo yay -S cmake");
        elif packman == "dnf":
            os.system("sudo dnf install cmake");
    
    os.system("clear");
    os.system("cmake ./build -v");
    os.system("cd ./build");
    os.system("make -v");

    run();

elif OS == "win32" or OS == "win64" :
    print("You are running Windows");
    
    vs_version = input("Please enter the version of Visual Studio you are using (2019 or 2022)");

    if vs_version == "2019":
        os.system("cmake -G \"Visual Studio 16 2019\" -B ./build");
    elif vs_version == "2022":
        os.system("cmake -G \"Visual Studio 17 2022\" -B ./build");

    os.system("cd ./build");

    os.system("cmake --build . --verbose");

    run();