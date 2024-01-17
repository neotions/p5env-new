# PowerShell Script to Download and Install FFmpeg and run npm install in the current directory

# Specify the URL for the FFmpeg release
$ffmpegUrl = "https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip"
# Specify the path where FFmpeg will be downloaded and extracted
$downloadPath = "$HOME\Downloads\ffmpeg.zip"
$extractPath = "$HOME\Downloads\ffmpeg"

# Downloading FFmpeg
Invoke-WebRequest -Uri $ffmpegUrl -OutFile $downloadPath
Write-Host "Downloaded FFmpeg to $downloadPath"

# Extracting FFmpeg
Expand-Archive -LiteralPath $downloadPath -DestinationPath $extractPath
Write-Host "Extracted FFmpeg to $extractPath"

# Adding FFmpeg to System PATH (optional)
$env:Path += ";$extractPath\bin"
[Environment]::SetEnvironmentVariable("Path", $env:Path, [EnvironmentVariableTarget]::User)
Write-Host "Added FFmpeg to System PATH"

# Try to run npm install in the current directory
try {
    # Navigate to the current script's directory
    Set-Location -Path $PSScriptRoot
    # Run npm install
    npm install
    Write-Host "npm install executed in $PSScriptRoot"
} catch {
    Write-Host "Node.js is not installed. Please download and install Node.js from https://nodejs.org/"
}
