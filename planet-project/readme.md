## This is node js project where we can find the planet based upon planet hunting mission by NASA

### This gives data based upon kepler's telescope

### How's made
- collect all kepler data provided by kepler telescope
- used csv-parse package to read csv files
- used createReadableStream function provided by built-in-library(fs) in node 
- Then we get the data in form of raw buffers 
- To convert it into array of objects we used pipe 
- pipe took source and destination stream and conver the data
- Then just applied the condition to find habitual planet

### useful links
- what is kepler - [https://science.nasa.gov/mission/kepler]
- kepler's data - [https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative]
- csv-parse - [https://csv.js.org/parse/]
