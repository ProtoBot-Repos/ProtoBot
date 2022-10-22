if( -not (Test-Path Registry::HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\VISUALSTUDIO) ) {
    Write-Output "No"
} else {
    $a = Read-Host "You do not have Visual Studio installed. This means you cannot use the voice features. Do you want to continue without voice? (1 for yes, 2 for no)"

    if($a -eq "1") {
        Write-Host "pp"
    } elseif($a -eq "2") {
        Write-Host "bb"
    } else {
        Write-Host "are you serious right meow"
    }
}
