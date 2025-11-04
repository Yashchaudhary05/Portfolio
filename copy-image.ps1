# Script to copy your profile picture to the public folder

# You can run this after saving your image
Copy-Item "path\to\your\image.jpg" -Destination "public\profile.jpg"

Write-Host "Profile picture copied successfully!" -ForegroundColor Green
Write-Host "Your portfolio is ready to run with: npm run dev" -ForegroundColor Cyan
