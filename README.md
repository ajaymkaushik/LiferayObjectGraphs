# 3 Examples of creating graphs in fragments by using data from objects in Liferay 7.4

The example HTML, CSS and JS code shows how you can use API calls to get data from Liferay Objects, and then use the data to create 3 different types of charts using Fusioncharts. (Tip - for ease of use import the .zip files as fragments in your Liferay 7.4 instance)
1. Combination Charts - Bargraph and line graph in the same chart
  ![image](https://user-images.githubusercontent.com/89102588/209901902-7011b0f8-e1be-4059-8036-b5889074ca1c.png)

2. Pie Chart -

  ![image](https://user-images.githubusercontent.com/89102588/209902035-c2d037e7-f1e0-4996-a165-db52df607e52.png)

3. Stacked Chart - 

  ![image](https://user-images.githubusercontent.com/89102588/209902096-891da54c-7cfb-43d4-af66-a2d66c296b3b.png)

Important assumptions while using this code -
This code was originally written for a demo we did for a utility company, where we created an object with fields representing different readings of utilities 
- Reading A (Assume Electricity)
- Reading B (Assume Natural Gas)
- Reading C (Assume Water)
- Reading D (Assume Ambient Temperature)
I also have other fields in my object such as month and year. Here is a screenshot of my object fields.
![image](https://user-images.githubusercontent.com/89102588/209902562-9527c6bd-7845-4056-b06f-6feb87fd2ec1.png)



You will need to create an object with the right fields and create entries in the table before you try and use this code. Lot of examples are available on the web to create an object in Liferay 7.4. 
This code uses consistent code to get data from objects using Liferay.Util.Fetch function and then uses fusion charts to create the charts.
