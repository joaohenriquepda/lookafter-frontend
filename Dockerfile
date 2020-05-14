ARG NODE_VERSION=12.9
FROM node:$NODE_VERSION

# add more arguments from CI to the image so that `$ env` should reveal more info

ARG NG_CLI_VERSION=7.3.8

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm install -g @angular/cli@$NG_CLI_VERSION
RUN npm install -g firebase-tools

# OPTIONAL: Install dumb-init (Very handy for easier signal handling of SIGINT/SIGTERM/SIGKILL etc.)
RUN wget https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64.deb
RUN dpkg -i dumb-init_*.deb
ENTRYPOINT ["dumb-init"]

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable