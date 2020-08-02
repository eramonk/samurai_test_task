# samurai_test_task

## Usage

Создание docker image
docker build -t healthsamurai .

Запуск контейнера
docker run -it --rm --network=host --name runningsamurai healthsamurai

Api доступно на localhost:3000


