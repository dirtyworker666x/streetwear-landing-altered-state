#!/bin/bash
cd "$(dirname "$0")"
PORT=5500

if lsof -ti :$PORT >/dev/null 2>&1; then
  echo "Порт $PORT занят — освобождаю..."
  lsof -ti :$PORT | xargs kill -9 2>/dev/null
  sleep 0.3
fi

echo "Запуск сайта: http://127.0.0.1:$PORT"
echo "Остановка: Ctrl+C"
echo ""

python3 -m http.server "$PORT" --bind 127.0.0.1 &
PID=$!
sleep 0.5

if command -v open >/dev/null 2>&1; then
  open "http://127.0.0.1:$PORT"
fi

wait $PID
