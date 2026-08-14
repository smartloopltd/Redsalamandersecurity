const { spawn } = require('child_process');
const fs = require('fs');
const outPath = 'dev-monitor-output.log';
const out = fs.createWriteStream(outPath, { flags: 'a', encoding: 'utf8' });
const proc = spawn('pnpm', ['dev'], { shell: true });
out.write(`\n=== MONITOR START ${new Date().toISOString()} PID=${proc.pid} ===\n`);
console.log(`MONITOR STARTED PID=${proc.pid}`);
proc.stdout.on('data', (d) => out.write(d.toString()));
proc.stderr.on('data', (d) => out.write(d.toString()));
proc.on('exit', (code, signal) => {
  out.write(`\n=== PROCESS EXIT PID=${proc.pid} code=${code} signal=${signal} ${new Date().toISOString()} ===\n`);
  out.end();
  console.log(`PROCESS EXIT PID=${proc.pid} code=${code} signal=${signal}`);
});
