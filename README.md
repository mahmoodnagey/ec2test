** How to deploy a fullstack app on AWS?
----------------------------------------
  1. Login / Signup to AWS.
  2. Go to "console":
  console.aws.amazon.com/console
  3. Choose "EC2" (Elastic Compute Cloud) => EC2 Dashboard.
  4. Click on "Instances"
  5. select one of your instances or create a new one by clicking on "Launch instances"
  6. Fill data for new instance:
    - Name.
    - choose ubuntu and free tier options for AMI (Amazon Machine Image).
    - Create new key pair for login or select.
    - check "Allow HTTPS traffic from the internet".
    - check "Allow HTTP traffic from the internet".
    - then click on launch instance.
  
  7. Connect to the EC2 instance:

    - SSH client: open power shell => go to directory where you have downloaded key pairs files (cd "directory for key pairs")
    => copy ssh example command and paste to directory in power shell => type "yes" if needed
    you should be logged in ec2 instance.
    
  8. Before installing anything run this command "sudo apt update".
  9. Install nginx: run "sudo apt install nginx"
    To check nginx is installed: go to public ipv4 in the instance, we find welcome to nginx page.
  10. Install Node.js:
  First Adding the NodeSource APT repository for Debian-based distributions repository AND the PGP key for verifying packages
  "curl -s https://deb.nodesource.com/setup_20.x | sudo bash"
  then Install Node.js from the Debian-based distributions repository
  "sudo apt install nodejs -y"
  11. Install pm2 (Production process manager for Nodejs Apps - keep the app live forever)
  "sudo npm install pm2@latest -g"

  12. prepare our application (MERN stack project) for deployment (already done for this project source code)
  - we need to convert our react app into a Nodejs app
  - instead of each app (react and nodejs) running separately, we need to run the backend and frontend as a one project.
  - first build react app: "yarn build" | "npm run build"
  - we need to serve the static that have been created in build directory (should be created after running build command):
    Add these lines of code to app.js file in server code

    const path = require('path');
    const _dirname = path.dirname("")
    const buildPath = path.join(_dirname  , "../../client/build");
    
    app.use(express.static(buildPath))
    
    app.get("/*", function(req, res){
    
        res.sendFile(
            path.join(__dirname, "../../client/build/index.html"),
            function (err) {
              if (err) {
                res.status(500).send(err);
              }
            }
          );
    
    })

13. Back to server (through powershell with key pairs login)
  make a directory to contain our app "mkdir apps"
  "cd apps"
  clone this project to apps directory in in the server
  "git clone https://github.com/mahmoodnagey/ec2test.git"
  go to the project after cloning
  "cd ec2test"
  go to client and server directories to install dependencies
  "cd client"
  "yarn install"
  "cd ../"
  "cd server"
  "npm install"
  go to server.js to run to start the app
  "cd configs"
  "pm2 start server.js --name robosealers"

14. configure nginx to point to our application which is running in background
  we need to access nginx configuration file and edit with text editor like vim
  "sudo vim /etc/nginx/sites-available/default"
  in server block we need to change | add some settings
  server block (server { ..... })
  in server block => press "i" in keyboard to can edit the file => add hash(#)|comment these lines:
  root /var/www/html;
  index index.html index.htm index.nginx-debian.html;
  location (with all related lines)
  after server_name_;
  add these lines:
  location / {
      proxy_pass http://localhost:4000;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }

  type ":wq!" to save
  run this commande "sudo nginx -t" to check saved successfully
  "sudo service nginx restart" restart nginx

-------------------------------------------------------------------------------------

** setup vpn on the server:
---------------------------
  1. run this command to install husarnet "wget https://install.husarnet.com/tgz/husarnet-latest-amd64.tar".
  2. then this command "sudo tar --directory=/ --no-same-owner --dereference -xf husarnet-latest-amd64.tar".
  3. to test, you can run "husarnet status".
  4. To join to the vpn network run "husarnet join fc94:b01d:1803:8dd8:b293:5c7d:7639:932a/TT2vHX3qv3r3J925oroJcL ubuntu" where ubuntu the user name of server in appears in terminal ubuntu@ip-..
  5. to confirm connecting to certain vpn network and device running robot "ping6 fc94:b376:aa06:24af:52b8:62c2:d295:1be1"

--------------------------------------------------------------------------------------

** important ubuntu commands may need to use in server terminal:
----------------------------------------------------------------
- curl abdxi:9090  (test rosbridge connection, where "abdxi" refers to ip of the device which running rosbridge)
- pm2 logs 0  (get the logs of the first app running by pm2)
- pm2 start server.js --name robosealers (start a new app by pm2)
- pm2 stop all (stop all applications running by pm2)
- pm2 delete all (delete all applications running by pm2)
- pm2 list (list all applications on pm2)
- sudo service nginx restart  (Restart nginx server)
- rm -rf ec2test  (Delete a directory in the directory I am in)
