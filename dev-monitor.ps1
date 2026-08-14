$out = "dev-output.log"
$mon = "dev-monitor.log"
if (Test-Path $out) { Remove-Item $out -Force }
if (Test-Path $mon) { Remove-Item $mon -Force }
$startInfo = @{ FilePath = "pnpm"; ArgumentList = 'dev'; NoNewWindow = $true; PassThru = $true }
$proc = Start-Process @startInfo -RedirectStandardOutput $out -RedirectStandardError $out
$pid = $proc.Id
"MONITOR STARTED PID=$pid $(Get-Date -Format o)" | Out-File $mon -Append
while (Get-Process -Id $pid -ErrorAction SilentlyContinue) { Start-Sleep -Seconds 1 }
"PROCESS EXITED PID=$pid $(Get-Date -Format o)" | Out-File $mon -Append
Get-Content $out -Tail 400 | Out-File $mon -Append
"--- Application Event Log (last 100 entries) ---" | Out-File $mon -Append
wevtutil qe Application /rd:true /c:100 /f:text | Out-File $mon -Append
"Monitor finished" | Out-File $mon -Append
Write-Output "Monitor script completed. See dev-monitor.log and dev-output.log."