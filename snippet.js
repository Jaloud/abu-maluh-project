const ffmpeg = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');

// Configure paths
const inputFile = path.join(process.cwd(), 'public', 'audio', 'cd1.mp3');
const outputFile = path.join(process.cwd(), 'public', 'audio', 'cd1_snippet.mp3');

// Create the snippet using ffmpeg
const ffmpegProcess = spawn(ffmpeg, [
  '-i', inputFile,
  '-ss', '00:02:00',    // Start at 2 minutes
  '-t', '00:05:00',     // Take 5 minutes
  '-acodec', 'copy',    // Copy audio codec (no re-encoding)
  outputFile
]);

// Handle process events
ffmpegProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ffmpegProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Successfully created audio snippet!');
    console.log(`Saved to: ${outputFile}`);
  } else {
    console.error(`Failed to create snippet. Exit code: ${code}`);
  }
});