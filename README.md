# CS3219 Task A2

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
1. You need to have kubectl installed.

2. Apply all config files in ./deploy via kubectl
```
$ kubectl apply -f deploy/hello-world/deployment.yml,\
                   deploy/hello-world/service.yml,\
                   deploy/goodbye-world/deployment.yml,\
                   deploy/goodbye-world/service.yml,\
                   deploy/reverse-proxy/deployment.yml
```

3. You can view your k8s pods using the following command
```
$ kubectl get pods

NAME                             READY   STATUS    RESTARTS   AGE
goodbye-world-5d9495f67b-jl8vk   1/1     Running   0          0s
hello-world-ff85d5584-q7hmb      1/1     Running   0          0s
reverse-proxy-78945cbd8d-gp6nm   1/1     Running   0          0s
```

4. To view the reverse proxy, you can port-forward the `reverse-proxy` pod
```
$ kubectl port-forward reverse-proxy-78945cbd8d-gp6nm 8080:80
```

5. You will be able to view the proxied `hello-world` at
```
http://localhost:8080/
```

6. You will be able to view the proxied `goodbye-world` at
```
http://localhost:8080/goodbye-world
```
