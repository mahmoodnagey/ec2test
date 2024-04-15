** How to deploy a fullstack app on AWS?
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
  11. Install pm2 (Production process manager for Nodejs Apps)
  "sudo npm install pm2@latest -g"
