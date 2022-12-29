# 3 Examples of creating graphs in fragments by using data from objects in Liferay 7.4

The example HTML, CSS and JS code shows how you can use API calls to get data from Liferay Objects, and then use the data to create 3 different types of charts using trial version of Fusioncharts. 
1. Combination Charts - Bargraph and line graph in the same chart
  ![image](https://user-images.githubusercontent.com/89102588/209901902-7011b0f8-e1be-4059-8036-b5889074ca1c.png)

2. Pie Chart -

  ![image](https://user-images.githubusercontent.com/89102588/209902035-c2d037e7-f1e0-4996-a165-db52df607e52.png)

3. Stacked Chart - 

  ![image](https://user-images.githubusercontent.com/89102588/209902096-891da54c-7cfb-43d4-af66-a2d66c296b3b.png)


# How to create the object for this code to work
Step 1 - Login with admin rights and click on menu icon

![image](https://user-images.githubusercontent.com/89102588/210014425-4b877691-ccfd-4098-a72b-65778bbe7255.png)


Step 2 - Click on Control Panel Tab and then Objects link

![image](https://user-images.githubusercontent.com/89102588/210014511-623d1de0-9b11-46df-b06e-b65c8ca3e3f3.png)


Step 3 - Click on plus sign to add new object type
![image](https://user-images.githubusercontent.com/89102588/210014531-057631b0-881e-4229-b9fb-5ceafc88e0da.png)

Step 4 - This will open a popup window. Fill the fields as per the screenshot below and click save.

![image](https://user-images.githubusercontent.com/89102588/210014572-60d076d8-0ca1-47e2-8e01-49273a1700b0.png)


Step 5 - Now you will notice a new object in the list

![image](https://user-images.githubusercontent.com/89102588/210014624-6bc0122c-0d0e-420f-82eb-59150b357401.png)


Step 6 - Click on the newly added object to update and publish it

Step 6.1 - Change scope from company to site, and change Panel Category Key to Site Administration>Configuration to see the Object data under configuration menu of your site. Publish the object.

![image](https://user-images.githubusercontent.com/89102588/210014761-40bc1a11-8de8-4145-9ebb-45f563ed361c.png)


Step 6.2 - After publishing the object click on “Fields” tab

![image](https://user-images.githubusercontent.com/89102588/210014863-752bd9c1-d57c-4530-8b56-745bbe59af78.png)

Step 6.3 - Click on plus icon to add new field

![image](https://user-images.githubusercontent.com/89102588/210014881-e5115119-0bec-4dc3-a6fd-fd81a96a410a.png)

Step 6.4 - Add Field name, Label name and field type

![image](https://user-images.githubusercontent.com/89102588/210014910-72d0b8af-93f2-4b11-adb3-50cac732c290.png)


Step 6.5 - Add following list of fields one by one by following steps 6.3 and 6.4 above.

![image](https://user-images.githubusercontent.com/89102588/210014982-9c1ef772-be41-4f0f-8e28-6d7926d404d8.png)

Step 7 - This newly added object now will show under Configuration Menu in your site. (I have a few other tables as well, you may not have these)

![image](https://user-images.githubusercontent.com/89102588/210015043-d3a161fa-bc7d-4e95-acc5-26f144e57894.png)


Step 8 - Clicking on your object and then click Plus icon to open Data Add form for the object

![image](https://user-images.githubusercontent.com/89102588/210015127-8e1f578e-b20f-4bba-9791-56267ea4cc14.png)


Step 9 - Add the data that you wish to add and repeat step 8 and 9 for number of months and years

![image](https://user-images.githubusercontent.com/89102588/210015197-cf7eac9c-073e-4b53-8b29-8df49aa43f30.png)


Once you have the data, the code above should work to help visualize this data.




