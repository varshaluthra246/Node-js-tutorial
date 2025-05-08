console.log("path module");
import path from 'path'
//join two or more file
const fullpath = path.join('/path', 'index.py', 'file.java')
console.log("files join = ", fullpath);

//to get the absolute path where u are:
const absolute_path = path.resolve();
console.log("we are currently working on" , absolute_path);

//to get the extension name:
const extname = path.extname('sample.txt');
console.log("extname = ", extname);
if(extname == '.txt')
{
    console.log("Ok");
}
else
{
    console.log("not supported");
}