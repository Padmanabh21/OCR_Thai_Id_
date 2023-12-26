Getting the relevant information from thai Id cards

Steps to run the program

1) Pull the code and then run npm init command
2) then run npm express,npm ejs,npm install nodemon
3) Then finally run npn start
4) Then open this url localhost:3000 in browser
5) Then upload the Thai id document image from system
6) Then click on Process button
7) then this executes a child process in a new thread which runs a python script that processes the image to retrive the relevant information.
8) Then it dump the information in output.csv file that will be created in same folder.


Note: This is to inform the that this project contains two modules , module_1 is a web app which is used to upload the Thai_id image and module_2 which is a python script that is processing the file and generating the output. Due to time constraints I am not able to link both the modules(By linking i mean giving the path name of uploaded file to module_2) , so meanwhile i have provided a static file path(which is saved as sample2.png in my file) to the python script.
The correct way should be reading path of file chosen from web app and pass it as an argument to the python process , read this argument in python(uploaded file path) script and do the processing on it.

