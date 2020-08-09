# samurai_test_task

## Usage

Создание docker image
docker build -t healthsamurai .

Запуск контейнера
docker run -it --rm --network=host --name runningsamurai healthsamurai

kubectl get events --sort-by=.metadata.creationTimestamp

Api доступно на localhost:3000


