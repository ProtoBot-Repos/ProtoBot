Write-Output "Checking for correct node version"

$version = node -v

if ($version -match '16.9' -or '17' -or '18') {
    Write-Output "Installing node modules"
    if( -not (Test-Path Registry::HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\VISUALSTUDIO) ) {
        Write-Output "VISUAL STUDIO NOT INSTALLED. VOICE FUNCTIONALITY WILL BE DISABLED (for sodium)."
        
        npm install -d @discordjs/builders @discordjs/rest @types/node @zuzak/owo discord-api-types discord.js random-org typescript 
    } else {
        npm config set msvs_version 2015
        npm install -d 
    }

    
    Write-Output "Creating private directory"

    mkdir private

    Write-Output "Creating config.json (installing prettier to format the file)"

    npm install -d prettier

    echo 'const fs = require("fs");const prettier = require("prettier");fs.writeFileSync("./private/config.json", prettier.format(`{"Discord" : {"token" : "","prefix" : "","app_id" : "","devs" : [],"webhooks" : {"errors" : {"token" : "","id" : ""},"things" : {"token" : "","id" : ""}}},"random.org" : {"key" : {"key" : ""}}}`, { parser: "json" })); console.log("Created and formatted file successfully");' >> ./init.js

    node init.js

    #$en = Read-Host "Where would you like the database to be stored?"

    #Write-Output "Adding DB directories"

    #echo "$($en)" >> ./private/DBLOCATION.pbdb

    #mkdir $en/ProtoBot-db
    #mkdir $en/ProtoBot-db/guilds
    #mkdir $en/ProtoBot-db/users

    Write-Output "Cleaning up files"

    Remove-Item './init.js'

    npm uninstall prettier

    Write-Output "Done"
}
else {
    Write-Host "Node version not supported. Must be at least v16.9.0 for discord.js"
    Exit
}
