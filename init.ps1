Write-Output "Checking for correct node version"

$version = node -v

if ($version -match '16.9' -or '17' -or '18') {
    Write-Output "Installing node modules"

    Start-Sleep -Seconds 2

    npm install -d
    
    Write-Output "Creating private directory"

    Start-Sleep -Seconds 2

    mkdir private

    Write-Output "Creating config.json (installing prettier to format the file)"

    Start-Sleep -Seconds 2

    npm install -d prettier

    echo 'const fs = require("fs");const prettier = require("prettier");fs.writeFileSync("./private/config.json", prettier.format(`{"Discord" : {"token" : "","prefix" : "","app_id" : "","devs" : [],"webhooks" : {"errors" : {"token" : "","id" : ""},"things" : {"token" : "","id" : ""}}},"random.org" : {"key" : {"key" : ""}}}`, { parser: "json" })); console.log("Created and formatted file successfully");' >> ./init.js

    node init.js

    Write-Output "Cleaning up files"

    Start-Sleep -Seconds 2

    Remove-Item './init.js'

    npm uninstall prettier

    Write-Output "Done"
}
else {
    Write-Host "Node version not supported. Must be at least v16.9.0 for discord.js"
    Exit
}
