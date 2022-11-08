# Getting Started with Create React App

This is a Single Page Application made on React js
![image](https://user-images.githubusercontent.com/45832558/200386160-1c053ea2-5c29-4e12-a27a-549c26a27acb.png)

# Website Link
Follow [Data-Query](https://data-query-harsh-vashistha.vercel.app/)


## 💥Features
✨ User can enter SQL query and run it </br>
✨ Change font size of SQL editor </br>
✨ Sort data of result column wise by click on column header </br>
✨ Global search to get a record by entering value </br>
✨ Execute saved query by click on it (saved queries are displayed in dropdown style) </br>
✨ Pagination support in case result data is large</br>
✨ Download json and csv file </br>
✨ Copy to clipboard button </br>



## Saved Queries
* SELECT * FROM CUSTOMER 
* SELECT * FROM CATEGORY
* SELECT * FROM EMPLOYEES
* SELECT * FROM EMPLOOYEE_TERRITORIES


## ⏱Page Load Time
Page Load Time is 0.5sec</br>
Test Results from Chrome-Lighthouse🔦🏠 
![image](https://user-images.githubusercontent.com/45832558/200248676-07ed28ce-21ca-47b1-a80e-296cfe324d3f.png)


## 🏃🏻‍♂️💨How I optimised the pageload time
 🔨 Lazy import of the components</br>
 🔨 Used tree shaking concept</br>
 🔨 Made use of React's memoization to load table results</br>

## Libraries used
* antd : for some UI elements
* papaparse : used to parse csv and json data
* react-table : used to display table
* react-ace : used for editor screen
