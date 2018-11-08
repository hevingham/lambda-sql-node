# lambda-sql-node

***Zipping the folder***

* Use archiver 
* https://www.npmjs.com/package/archiver
* Zipping with the native CLI zip might cause issues.


***Upload to Lambda***

* Upload zip within Lambda task
* Modify connections and query


***Integrate with API Gateway*** 
 
* Give permission to the Lambda task executor to use API Gateway
* Enable API Gateway and create a gateway with POST and OPTIONS methods
* Enable CORS and deploy

***Triggering Lambda***

* Use the API Gateway URI to trigger Lambda, passing the event