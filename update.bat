@echo off
echo Updating npm and dependencies...
echo.

echo Step 1: Updating npm to latest version...
call npm install -g npm@latest

echo.
echo Step 2: Updating Next.js and React...
call npm install next@latest react@latest react-dom@latest

echo.
echo Step 3: Updating other dependencies...
call npm install framer-motion@latest lucide-react@latest react-intersection-observer@latest

echo.
echo Step 4: Updating dev dependencies...
call npm install -D eslint@latest eslint-config-next@latest typescript@latest tailwindcss@latest postcss@latest autoprefixer@latest

echo.
echo Step 5: Fixing vulnerabilities...
call npm audit fix

echo.
echo Update complete!
echo.
echo Press any key to exit...
pause > nul
