until node main.js; do
    echo "Server 'node main.js' crashed with exit code $?.  Respawning.." >&2
    sleep 5s
done