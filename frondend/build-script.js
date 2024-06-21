const { execSync } = require('child_process');

process.env.NODE_OPTIONS = '--max-old-space-size=4096';
execSync('tsc && vite build', { stdio: 'inherit' });
