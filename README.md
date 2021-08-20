# CS3219 Task A1

## Running the app
1. Build the docker images using the following command at the root of the code base.
```
$ docker compose build
```

2. Run the docker image using the following command.
```
$ docker compose up
```

3. You will be able to view the proxied `hello-world` at
```
http://localhost:8080/
```

4. You will be able to view the proxied `goodbye-world` at
```
http://localhost:8080/goodbye-world
```

---

## Setting up k8s cluster locally
1. You need to have minikube and kubectl installed.

2. Build the docker images using the following command at the root of the code
   base.
```
$ docker compose build
```

3. Start up minikube using command.
```
$ minikube start
```

4. We will be deploying the k8s using the local images, so we will need to point
   the shell to minikube's docker-daemon. Run the following command.
```
$ minikube docker-env

export DOCKER_TLS_VERIFY=”1"
export DOCKER_HOST=”tcp://172.17.0.2:2376"
export DOCKER_CERT_PATH=”/home/user/.minikube/certs”
export MINIKUBE_ACTIVE_DOCKERD=”minikube”

# To point your shell to minikube’s docker-daemon, run:
# eval $(minikube -p minikube docker-env)
```

5. Depending on your OS, your next command might differ. Follow the command
   given by the previous command `minikube docker-env`
```
$ eval $(minikube -p minikube docker-env)
```

6. Apply all config files in ./deploy via kubectl
```
$ kubectl apply -f deploy/hello-world/deployment.yml,\
                   deploy/hello-world/service.yml,\
                   deploy/goodbye-world/deployment.yml,\
                   deploy/goodbye-world/service.yml,\
                   deploy/reverse-proxy/deployment.yml
```

7. You can view your k8s pods using the following command
```
$ kubectl get pods

NAME                             READY   STATUS    RESTARTS   AGE
goodbye-world-5d9495f67b-jl8vk   1/1     Running   0          0s
hello-world-ff85d5584-q7hmb      1/1     Running   0          0s
reverse-proxy-78945cbd8d-gp6nm   1/1     Running   0          0s
```

8. To view the reverse proxy, you can port-forward the `reverse-proxy` pod
```
$ kubectl port-forward reverse-proxy-78945cbd8d-gp6nm 8080:80
```

9. You will be able to view the proxied `hello-world` at
```
http://localhost:8080/
```

10. You will be able to view the proxied `goodbye-world` at
```
http://localhost:8080/goodbye-world
```

