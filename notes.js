// Docker -> Run isolated application into containers
// Ex -> Node app, Mongo DB server, React application etc.

// Why use Docker? we can run diff development env into a single machine.
// It is container contains development env like node, python or php of diff version. It has all the src code of app and dependencies.

// VM vs Docker -> Each VM has a full OS of it own with its kernal.
// But here docker share host's OS and its kernal they also have a simpler version of OS.

// Images -> are blueprint of containers it store runtime env, application code, dependency, configrations like env var and instructions like commands and file system. They are read-only. we need to create new image to make change.
// Containers -> are runnable instances of those images. AKA insolated process.

// Docker Images -> Made of layers
// In this each layer add things to layer incrementally so order matters here.

// Parent layer -> include OS and runnable env. It can have for example a Node JS that have a linux distribution this layer itself a docker image already prebuild.
// Next layer can be source code copy, adding dependecies.

// NOTE: Docker hub is a repo that host list of parent images we can use.
// https://hub.docker.com

// Example Node ->Supported tags list can be found on docker hub for Dockerfile.
// Tags are variation of image in case we can use variations of node image.
// Tag Example -> 17-alpine in here node version is 17 and alpine is linux distribution.
// Now this image can run to create a container.

const PULL_NODE_IMAGE = "docker pull node";

// start and stop container -> For whis we name image name or ID of image
const DOCKER_IMAGES = "docker images";
const DOCKER_RUN =
  "docker run --name addNameForContainer d377bb5afeef or nameOfImage";

const DOCKER_PS = "docker ps";
const DOCKER_PS_ALL = "docker ps -a";
const DOCKER_STOP = "docker stop containerName or containerId";

// MAP Host port to docker ie. publish
const DOCKER_RUN_WITH_PORT_MAP =
  "docker run --name containerName -p 4000:4000 -d nameOfImage";

// NOTE: docker run runs an image to start a container but docker start run a container and docker start does not need PORT mapping configurations
const DOCKER_START = "docker start containerIdName";

// Layers caching -> Docker cache image at each layer
// Dockerfile each line add a new Layer in image and combination of layers makes an image
// NOTE: If on layer there is change then lines below it are going to rerun
