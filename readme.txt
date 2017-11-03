MongoDB and RoboMongo

- Install - https://robomongo.org/download
- Install - https://www.mongodb.com/download-center#community

- configure mongoDB in CMD (Administrator):
    - cd "C:\Program Files\MongoDB\Server\3.4\bin"
	- mkdir data
	- cd data
	- mkdir db
	- mkdir log
	- cd "C:\Program Files\MongoDB\Server\3.4\bin"
	- mongod.exe --dbpath "C:\Program Files\MongoDB\Server\3.4\bin\data\db"
	  if everything runs without errors - you can close it now.
	  
- open folder "C:\Program Files\MongoDB\Server\3.4\bin\" and create "mongod.cfg" file with the content:
  copy this configurations (notice to use spaces and not tabs!!)
       
	systemLog:
	  destination: file
	  path: C:\Program Files\MongoDB\Server\3.4\bin\data\log\mongod.log
	storage:
	  dbPath: C:\Program Files\MongoDB\Server\3.4\bin\data\db
	
- run CMD (Administrator):  
    - "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.4\bin\mongod.cfg" --install
    - net start MongoDB
	
- Done! - now you have MongoDB "windowsService" running in your windows  






NodeJS and Npm

- Install from https://nodejs.org/en/download/






AngularJS 2 

- Install angularCLI globaly:                      npm install -g @angular/cli
- To create a new project:                         ng new my-app
- To launch the server goTo your app folder:       ng serve --open