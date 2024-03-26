FROM golang:latest

COPY go.mod go.sum /app/
WORKDIR /app
RUN go mod download

COPY . /app/

RUN go build -o build/fizzbuzz

CMD ["./build/fizzbuzz", "serve"]